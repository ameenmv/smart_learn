<template>
  <div class="flex flex-col min-h-screen bg-bg-base text-text-main font-sans transition-colors duration-300">
    <!-- Header -->
    <header
      class="h-16 flex items-center justify-between border-b border-solid border-border-base bg-bg-surface px-6 sticky top-0 z-40 transition-colors duration-300">
      <div class="flex items-center gap-2 text-sm text-text-muted">
        <router-link class="hover:text-primary transition-colors" to="/instructor/dashboard">الرئيسية</router-link>
        <span class="material-symbols-outlined text-xs">chevron_left</span>
        <span class="text-primary text-sm font-bold">تصحيح الواجب</span>
      </div>
      <div class="flex items-center gap-3">
        <router-link to="/instructor/courses"
          class="px-5 py-2 rounded-lg border border-border-base font-bold text-sm hover:bg-bg-base transition-colors cursor-pointer text-text-main">
          العودة
        </router-link>
      </div>
    </header>

    <!-- Toast -->
    <Transition name="toast">
      <div v-if="toast.show"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl shadow-xl border backdrop-blur-md transition-all duration-300 min-w-[320px] cursor-pointer hover:scale-[1.02]"
        :class="toast.type === 'success' ? 'bg-emerald-50/90 border-emerald-200 dark:bg-emerald-900/90 dark:border-emerald-800' : 'bg-red-50/90 border-red-200 dark:bg-red-900/90 dark:border-red-800'"
        @click="hideToast">
        <div class="p-2 rounded-full"
          :class="toast.type === 'success' ? 'bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200' : 'bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-200'">
          <span class="material-symbols-outlined text-xl">{{ toast.type === 'success' ? 'check_circle' : 'error'
          }}</span>
        </div>
        <div class="flex flex-col flex-1">
          <h4 class="font-bold text-sm"
            :class="toast.type === 'success' ? 'text-emerald-900 dark:text-emerald-100' : 'text-red-900 dark:text-red-100'">
            {{ toast.title }}</h4>
          <p class="text-xs opacity-90"
            :class="toast.type === 'success' ? 'text-emerald-800 dark:text-emerald-200' : 'text-red-800 dark:text-red-200'">
            {{ toast.message }}</p>
        </div>
      </div>
    </Transition>

    <!-- Main -->
    <main class="flex flex-1 overflow-hidden h-[calc(100vh-64px)]">
      <!-- Submissions List -->
      <div
        class="flex-1 flex flex-col min-w-0 bg-bg-surface border-l border-border-base transition-colors duration-300">
        <div class="p-4 border-b border-border-base">
          <div class="flex gap-4 items-center">
            <div class="relative flex-1">
              <span
                class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted text-lg">search</span>
              <input v-model="searchQuery"
                class="w-full pr-10 pl-4 h-11 bg-bg-base border-none rounded-xl text-sm text-text-main placeholder:text-text-muted focus:ring-2 focus:ring-primary outline-none"
                placeholder="بحث عن طالب..." type="text" />
            </div>
          </div>
        </div>

        <!-- No Assignment Selected -->
        <div v-if="noAssignment" class="flex-1 flex flex-col items-center justify-center text-center p-8">
          <div class="size-20 rounded-full bg-primary/10 flex items-center justify-center mb-5">
            <span class="material-symbols-outlined text-primary text-4xl">assignment</span>
          </div>
          <h3 class="text-xl font-black text-text-main mb-2">لم يتم اختيار واجب</h3>
          <p class="text-text-muted font-medium mb-6 max-w-sm">يمكنك الوصول لهذه الصفحة من خلال الضغط على واجب معين من
            صفحة المقرر الدراسي</p>
          <RouterLink to="/instructor/courses"
            class="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
            الذهاب للدورات
          </RouterLink>
        </div>

        <!-- Loading -->
        <div v-else-if="isLoading" class="flex-1 flex items-center justify-center">
          <span class="size-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></span>
        </div>

        <!-- Error -->
        <div v-else-if="loadError" class="flex-1 flex flex-col items-center justify-center text-center p-8">
          <span class="material-symbols-outlined text-4xl text-red-400 mb-3">error</span>
          <p class="text-red-500 font-bold mb-2">{{ loadError }}</p>
          <button @click="fetchSubmissions" class="text-primary text-sm font-bold hover:underline cursor-pointer">إعادة
            المحاولة</button>
        </div>

        <!-- Empty -->
        <div v-else-if="filteredSubmissions.length === 0"
          class="flex-1 flex flex-col items-center justify-center text-center p-8">
          <span class="material-symbols-outlined text-5xl text-text-muted/30 mb-3">assignment</span>
          <p class="text-text-muted font-bold">لا توجد تسليمات بعد</p>
        </div>

        <!-- Table -->
        <div v-else class="overflow-y-auto flex-1">
          <table class="w-full text-right border-collapse">
            <thead>
              <tr class="bg-bg-base text-text-muted text-xs font-bold uppercase tracking-wider sticky top-0">
                <th class="px-6 py-4 border-b border-border-base">الطالب</th>
                <th class="px-6 py-4 border-b border-border-base">الحالة</th>
                <th class="px-6 py-4 border-b border-border-base">الدرجة</th>
                <th class="px-6 py-4 border-b border-border-base">إجراء</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border-base">
              <tr v-for="sub in filteredSubmissions" :key="sub.id" class="cursor-pointer transition-colors"
                :class="selectedSubmission?.id === sub.id ? 'bg-primary/5 border-r-4 border-primary' : 'hover:bg-bg-base/50'"
                @click="selectSubmission(sub)">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                      {{ getInitials(sub.student?.name || sub.student_name) }}
                    </div>
                    <div>
                      <p class="font-bold text-sm text-text-main">{{ sub.student?.name || sub.student_name || 'طالب' }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold"
                    :class="sub.grade != null ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'">
                    {{ sub.grade != null ? 'تم التصحيح' : 'بانتظار التصحيح' }}
                  </span>
                </td>
                <td class="px-6 py-4 text-sm font-bold" :class="sub.grade != null ? 'text-primary' : 'text-text-muted'">
                  {{ sub.grade != null ? sub.grade : '--' }}
                </td>
                <td class="px-6 py-4">
                  <button @click.stop="selectSubmission(sub)"
                    class="text-primary text-xs font-bold hover:underline cursor-pointer">
                    {{ sub.grade != null ? 'عرض' : 'تصحيح' }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Grading Panel -->
      <aside
        class="w-[420px] flex flex-col bg-bg-surface border-r border-border-base shadow-2xl z-40 transition-colors duration-300">
        <div v-if="!selectedSubmission" class="flex-1 flex flex-col items-center justify-center text-center p-8">
          <span class="material-symbols-outlined text-5xl text-text-muted/20 mb-3">grading</span>
          <p class="text-text-muted font-bold">اختر تسليمًا من القائمة للتصحيح</p>
        </div>

        <template v-else>
          <div class="p-5 border-b border-border-base">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-bold text-text-main">{{ selectedSubmission.student?.name ||
                  selectedSubmission.student_name || 'طالب' }}</h3>
                <p class="text-xs text-text-muted mt-1">تسليم #{{ selectedSubmission.id }}</p>
              </div>
              <button @click="selectedSubmission = null"
                class="p-1 hover:bg-bg-base rounded-full transition-colors text-text-muted cursor-pointer">
                <span class="material-symbols-outlined">close</span>
              </button>
            </div>
          </div>

          <!-- File -->
          <div v-if="selectedSubmission.file || selectedSubmission.file_path" class="p-5 border-b border-border-base">
            <p class="text-xs font-bold text-text-muted mb-3">الملف المرفق</p>
            <a :href="selectedSubmission.file || selectedSubmission.file_path" target="_blank"
              class="flex items-center gap-3 p-3 rounded-xl bg-bg-base border border-border-base hover:border-primary/30 transition-colors">
              <div class="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <span class="material-symbols-outlined text-blue-500">description</span>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-bold text-text-main truncate">ملف التسليم</p>
                <p class="text-xs text-primary">اضغط لعرض الملف</p>
              </div>
              <span class="material-symbols-outlined text-text-muted">open_in_new</span>
            </a>
          </div>

          <!-- Grading Form -->
          <div class="p-5 flex-1 flex flex-col gap-5 overflow-y-auto">
            <div>
              <label class="block text-sm font-bold text-text-main mb-2">الدرجة</label>
              <input v-model.number="gradeForm.grade" type="number" min="0" dir="ltr"
                class="w-full h-12 px-4 rounded-xl border border-border-base bg-bg-base text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-lg font-bold" />
            </div>
            <div>
              <label class="block text-sm font-bold text-text-main mb-2">ملاحظات / تعليق</label>
              <textarea v-model="gradeForm.feedback" rows="4"
                class="w-full px-4 py-3 rounded-xl border border-border-base bg-bg-base text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none placeholder:text-text-muted"
                placeholder="اكتب ملاحظاتك هنا..."></textarea>
            </div>
          </div>

          <!-- Submit Grade -->
          <div class="p-5 border-t border-border-base">
            <button @click="submitGrade" :disabled="isGrading"
              class="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              <span v-if="isGrading"
                class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span v-else class="material-symbols-outlined text-lg">check_circle</span>
              {{ isGrading ? 'جاري الحفظ...' : 'حفظ الدرجة' }}
            </button>
          </div>
        </template>
      </aside>
    </main>
  </div>
</template>

<script setup>
import { coursesApi } from '@/api/courses';
import { useApiErrors } from '@/composables/useApiErrors';
import { useToast } from '@/composables/useToast';
import { computed, onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { toast, showToast, hideToast } = useToast();
const { getGeneralError } = useApiErrors();

const isLoading = ref(false);
const loadError = ref('');
const noAssignment = ref(false);
const submissions = ref([]);
const selectedSubmission = ref(null);
const searchQuery = ref('');
const isGrading = ref(false);
const assignmentId = ref(null);

const gradeForm = reactive({
  grade: 0,
  feedback: '',
});

// ── Computed ────────────────────────────────────────────────────────

const filteredSubmissions = computed(() => {
  if (!searchQuery.value) return submissions.value;
  const q = searchQuery.value.toLowerCase();
  return submissions.value.filter(s =>
    (s.student?.name || s.student_name || '').toLowerCase().includes(q)
  );
});

// ── Helpers ──────────────────────────────────────────────────────────

function getInitials(name) {
  if (!name) return '?';
  return name.split(' ').slice(0, 2).map(w => w[0]).join('');
}

function selectSubmission(sub) {
  selectedSubmission.value = sub;
  gradeForm.grade = sub.grade || 0;
  gradeForm.feedback = sub.feedback || '';
}

// ── Fetch ────────────────────────────────────────────────────────────

async function fetchSubmissions() {
  isLoading.value = true;
  loadError.value = '';

  assignmentId.value = route.query.assignmentId ? Number(route.query.assignmentId) : null;

  if (!assignmentId.value) {
    noAssignment.value = true;
    isLoading.value = false;
    return;
  }

  try {
    const { data } = await coursesApi.getAssignmentSubmissions(assignmentId.value);
    submissions.value = data.data || data || [];
  } catch (error) {
    loadError.value = getGeneralError(error);
  } finally {
    isLoading.value = false;
  }
}

// ── Grade ────────────────────────────────────────────────────────────

async function submitGrade() {
  if (!selectedSubmission.value) return;
  isGrading.value = true;

  try {
    await coursesApi.gradeSubmission(selectedSubmission.value.id, {
      grade: gradeForm.grade,
      feedback: gradeForm.feedback,
    });

    // Update local state
    selectedSubmission.value.grade = gradeForm.grade;
    selectedSubmission.value.feedback = gradeForm.feedback;

    showToast('تم التصحيح', `تم حفظ الدرجة: ${gradeForm.grade}`, 'success');
  } catch (error) {
    showToast('خطأ', getGeneralError(error), 'error');
  } finally {
    isGrading.value = false;
  }
}

// ── Init ────────────────────────────────────────────────────────────

onMounted(fetchSubmissions);
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}
</style>
