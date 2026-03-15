<template>
  <div class="flex flex-col h-full bg-bg-base text-text-main font-sans overflow-y-auto">
    <header
      class="bg-bg-surface border-b border-border-base h-16 flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2 text-sm text-text-muted">
          <router-link class="hover:text-primary transition-colors" to="/instructor/dashboard">الرئيسية</router-link>
          <span class="material-symbols-outlined text-xs">chevron_left</span>
          <router-link class="hover:text-primary transition-colors" to="/instructor/courses">المقررات</router-link>
          <span class="material-symbols-outlined text-xs">chevron_left</span>
          <span class="text-text-main font-semibold">إدارة الطلاب</span>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <router-link to="/instructor/settings"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-bg-base text-text-muted hover:bg-bg-base-hover transition-colors">
          <span class="material-symbols-outlined">settings</span>
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

    <div class="p-8 max-w-7xl mx-auto w-full flex-1">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 class="text-3xl font-black tracking-tight mb-2 text-text-main">إدارة الطلاب</h1>
          <p class="text-text-muted">عرض قائمة الطلاب المسجلين وتحديث حالات التسجيل</p>
        </div>
      </div>

      <!-- Loading -->
      <div v-if="isLoading" class="flex flex-col items-center justify-center py-20">
        <span class="size-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></span>
        <p class="text-text-muted font-bold">جاري تحميل الطلاب...</p>
      </div>

      <!-- Error -->
      <div v-else-if="loadError"
        class="p-6 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-center">
        <span class="material-symbols-outlined text-red-500 text-4xl mb-2">error</span>
        <p class="text-red-700 dark:text-red-400 font-bold">{{ loadError }}</p>
        <button @click="fetchStudents" class="mt-4 text-sm text-primary font-bold hover:underline cursor-pointer">إعادة
          المحاولة</button>
      </div>

      <!-- Data -->
      <div v-else class="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <!-- Stats -->
        <div class="xl:col-span-1 space-y-6 order-last xl:order-first">
          <div class="bg-bg-surface p-6 rounded-xl border border-border-base shadow-sm">
            <h3 class="text-text-muted text-sm font-bold mb-4">إحصائيات المقرر</h3>
            <div class="space-y-4">
              <div class="pt-4 flex justify-between">
                <div class="text-center">
                  <p class="text-[10px] text-text-muted uppercase">إجمالي</p>
                  <p class="text-lg font-bold text-text-main">{{ students.length }}</p>
                </div>
                <div class="text-center">
                  <p class="text-[10px] text-text-muted uppercase">مقبول</p>
                  <p class="text-lg font-bold text-emerald-500">{{ approvedCount }}</p>
                </div>
                <div class="text-center">
                  <p class="text-[10px] text-text-muted uppercase">معلق</p>
                  <p class="text-lg font-bold text-amber-500">{{ pendingCount }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Table -->
        <div class="xl:col-span-3">
          <div class="bg-bg-surface rounded-xl border border-border-base shadow-sm overflow-hidden">
            <div class="p-6 border-b border-border-base flex flex-col md:flex-row gap-4 items-center">
              <div class="relative flex-1 w-full">
                <span
                  class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">search</span>
                <input v-model="searchQuery"
                  class="w-full pr-10 pl-4 py-2 bg-bg-base border-none rounded-lg focus:ring-2 focus:ring-primary text-sm text-text-main placeholder:text-text-muted outline-none"
                  placeholder="البحث عن طالب..." type="text" />
              </div>
            </div>

            <!-- Empty -->
            <div v-if="filteredStudents.length === 0" class="py-16 text-center">
              <span class="material-symbols-outlined text-5xl text-text-muted/30 mb-3">group_off</span>
              <p class="text-text-muted font-bold">لا يوجد طلاب مسجلين</p>
            </div>

            <!-- Table -->
            <div v-else class="overflow-x-auto">
              <table class="w-full text-right">
                <thead>
                  <tr class="bg-bg-base text-text-muted text-xs font-bold uppercase tracking-wider">
                    <th class="px-6 py-4">اسم الطالب</th>
                    <th class="px-6 py-4">البريد الإلكتروني</th>
                    <th class="px-6 py-4">الحالة</th>
                    <th class="px-6 py-4">الإجراءات</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-border-base">
                  <tr v-for="student in filteredStudents" :key="student.id"
                    class="hover:bg-bg-base/50 transition-colors">
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div
                          class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                          {{ getInitials(student.name) }}
                        </div>
                        <div>
                          <p class="font-bold text-sm text-text-main">{{ student.name }}</p>
                          <p v-if="student.id" class="text-xs text-text-muted">#{{ student.id }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-text-muted">{{ student.email || '—' }}</td>
                    <td class="px-6 py-4">
                      <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold"
                        :class="getStatusClass(student.pivot?.status || student.status)">
                        {{ getStatusLabel(student.pivot?.status || student.status) }}
                      </span>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex gap-2">
                        <button v-if="(student.pivot?.status || student.status) === 'pending'"
                          @click="updateStatus(student.id, 'approved')" :disabled="student._updating"
                          class="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-lg hover:bg-emerald-200 dark:hover:bg-emerald-900/30 transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-1">
                          <span v-if="student._updating"
                            class="size-3 border-2 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin"></span>
                          <span v-else class="material-symbols-outlined text-sm">check</span>
                          قبول
                        </button>
                        <button v-if="(student.pivot?.status || student.status) === 'pending'"
                          @click="updateStatus(student.id, 'rejected')" :disabled="student._updating"
                          class="px-3 py-1.5 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-xs font-bold rounded-lg hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-1">
                          <span class="material-symbols-outlined text-sm">close</span>
                          رفض
                        </button>
                        <span v-if="(student.pivot?.status || student.status) !== 'pending'"
                          class="text-xs text-text-muted">—</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="p-4 border-t border-border-base text-center">
              <p class="text-xs text-text-muted">عرض {{ filteredStudents.length }} من أصل {{ students.length }} طالب</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="mt-auto py-6 px-8 text-center text-text-muted text-xs border-t border-border-base shrink-0">
      © 2026 Smart Learn. جميع الحقوق محفوظة.
    </footer>
  </div>
</template>

<script setup>
import { coursesApi } from '@/api/courses';
import { useApiErrors } from '@/composables/useApiErrors';
import { useToast } from '@/composables/useToast';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { toast, showToast, hideToast } = useToast();
const { getGeneralError } = useApiErrors();

const isLoading = ref(true);
const loadError = ref('');
const students = ref([]);
const searchQuery = ref('');
const courseId = ref(null);

// ── Computed ─────────────────────────────────────────────────────────

const filteredStudents = computed(() => {
  if (!searchQuery.value) return students.value;
  const q = searchQuery.value.toLowerCase();
  return students.value.filter(s =>
    s.name?.toLowerCase().includes(q) || s.email?.toLowerCase().includes(q)
  );
});

const approvedCount = computed(() => students.value.filter(s => (s.pivot?.status || s.status) === 'approved').length);
const pendingCount = computed(() => students.value.filter(s => (s.pivot?.status || s.status) === 'pending').length);

// ── Helpers ──────────────────────────────────────────────────────────

function getInitials(name) {
  if (!name) return '?';
  return name.split(' ').slice(0, 2).map(w => w[0]).join('');
}

function getStatusClass(status) {
  switch (status) {
    case 'approved': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
    case 'pending': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
    case 'rejected': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
    default: return 'bg-gray-100 text-gray-600';
  }
}

function getStatusLabel(status) {
  switch (status) {
    case 'approved': return 'مقبول';
    case 'pending': return 'معلق';
    case 'rejected': return 'مرفوض';
    default: return status || 'غير معروف';
  }
}

// ── Fetch Students ───────────────────────────────────────────────────

async function fetchStudents() {
  isLoading.value = true;
  loadError.value = '';

  try {
    // Get courseId from query params, or auto-select first course
    if (route.query.courseId) {
      courseId.value = Number(route.query.courseId);
    } else {
      const { data } = await coursesApi.getMyCourses();
      const courses = data.data || [];
      if (courses.length > 0) {
        courseId.value = courses[0].id;
      } else {
        loadError.value = 'لا توجد دورات. أنشئ دورة أولاً.';
        return;
      }
    }

    const { data } = await coursesApi.getCourseStudents(courseId.value);
    students.value = (data.data || data || []).map(s => ({ ...s, _updating: false }));
  } catch (error) {
    loadError.value = getGeneralError(error);
  } finally {
    isLoading.value = false;
  }
}

// ── Update Enrollment Status ─────────────────────────────────────────

async function updateStatus(studentId, status) {
  const student = students.value.find(s => s.id === studentId);
  if (!student) return;

  student._updating = true;

  try {
    await coursesApi.updateEnrollmentStatus(courseId.value, studentId, { status });

    // Update local state
    if (student.pivot) {
      student.pivot.status = status;
    } else {
      student.status = status;
    }

    showToast(
      status === 'approved' ? 'تم القبول' : 'تم الرفض',
      `تم ${status === 'approved' ? 'قبول' : 'رفض'} الطالب ${student.name}`,
      'success'
    );
  } catch (error) {
    showToast('خطأ', getGeneralError(error), 'error');
  } finally {
    student._updating = false;
  }
}

// ── Init ─────────────────────────────────────────────────────────────

onMounted(fetchStudents);
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
