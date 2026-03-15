<template>
  <div class="flex flex-col min-h-screen bg-bg-base text-text-main transition-colors duration-300">
    <!-- Header -->
    <header
      class="sticky top-0 z-10 bg-bg-surface/80 backdrop-blur-md border-b border-border-base px-8 h-16 flex items-center justify-between transition-colors duration-300">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-3">
          <div class="flex items-center justify-center w-10 h-10 bg-primary rounded-[10px]">
            <span class="material-symbols-outlined text-white text-[24px]">quiz</span>
          </div>
          <span class="text-2xl font-bold text-text-main tracking-tight font-[Inter]">Smart Learn</span>
        </div>
        <div class="w-px h-6 bg-border-base mx-2 hidden md:block"></div>
        <h2 class="text-xl font-black tracking-tight hidden md:block text-text-main">بناء اختبار</h2>
      </div>
      <div class="flex items-center gap-3">
        <button @click="router.push('/instructor/courses')"
          class="px-5 py-2 rounded-lg border border-border-base font-bold text-sm hover:bg-bg-base transition-colors cursor-pointer text-text-main">
          إلغاء
        </button>
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

    <!-- Main Content -->
    <div class="p-8 max-w-[900px] mx-auto w-full flex-1">
      <nav class="flex items-center gap-2 text-sm text-text-muted mb-6">
        <RouterLink to="/instructor/courses" class="hover:text-primary transition-colors cursor-pointer">إدارة الدورات
        </RouterLink>
        <span class="material-symbols-outlined text-xs">chevron_left</span>
        <span class="text-text-main font-semibold">بناء اختبار</span>
      </nav>

      <!-- Stepper -->
      <div class="flex items-center gap-0 mb-10">
        <div v-for="(s, i) in steps" :key="i" class="flex items-center" :class="i < steps.length - 1 ? 'flex-1' : ''">
          <div class="flex items-center gap-3">
            <div
              class="size-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300"
              :class="currentStep > i ? 'bg-emerald-500 border-emerald-500 text-white' : currentStep === i ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30' : 'border-border-base text-text-muted bg-bg-surface'">
              <span v-if="currentStep > i" class="material-symbols-outlined text-lg">check</span>
              <span v-else>{{ i + 1 }}</span>
            </div>
            <span class="text-sm font-bold hidden sm:block"
              :class="currentStep === i ? 'text-primary' : currentStep > i ? 'text-emerald-500' : 'text-text-muted'">{{
              s.label }}</span>
          </div>
          <div v-if="i < steps.length - 1" class="flex-1 h-0.5 mx-4 rounded-full transition-all duration-300"
            :class="currentStep > i ? 'bg-emerald-500' : 'bg-border-base'"></div>
        </div>
      </div>

      <!-- General Error -->
      <div v-if="generalError"
        class="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm font-bold flex items-center gap-3">
        <span class="material-symbols-outlined">error</span>
        {{ generalError }}
      </div>

      <!-- ═══════════════ STEP 1: Quiz Info ═══════════════ -->
      <div v-if="currentStep === 0" class="space-y-6">
        <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm">
          <div class="flex items-center gap-3 mb-6">
            <div class="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <span class="material-symbols-outlined">settings</span>
            </div>
            <h3 class="text-lg font-black text-text-main">تفاصيل الاختبار</h3>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <div>
              <label class="block text-sm font-bold mb-2 text-text-main">عنوان الاختبار <span
                  class="text-red-500">*</span></label>
              <input v-model="quizForm.title" type="text"
                class="w-full h-12 px-4 rounded-xl border bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
                :class="getError('title') ? 'border-red-400' : 'border-border-base'"
                placeholder="مثال: اختبار نهاية الفصل الأول" />
              <p v-if="getError('title')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('title') }}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-bold mb-2 text-text-main">المدة (بالدقائق) <span
                    class="text-red-500">*</span></label>
                <input v-model="quizForm.duration_minutes" type="number" min="1" dir="ltr"
                  class="w-full h-12 px-4 rounded-xl border bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  :class="getError('duration_minutes') ? 'border-red-400' : 'border-border-base'" />
                <p v-if="getError('duration_minutes')" class="mt-1.5 text-xs text-red-500 font-bold">{{
                  getError('duration_minutes') }}</p>
              </div>
              <div>
                <label class="block text-sm font-bold mb-2 text-text-main">عدد المحاولات</label>
                <input v-model="quizForm.attempts" type="number" min="1" dir="ltr"
                  class="w-full h-12 px-4 rounded-xl border border-border-base bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex items-center gap-3 p-4 rounded-xl border border-border-base bg-bg-base">
                <input type="checkbox" v-model="quizForm.show_results" class="size-5 accent-primary cursor-pointer"
                  id="show-results" />
                <label for="show-results" class="text-sm font-bold text-text-main cursor-pointer">إظهار النتائج بعد
                  الانتهاء</label>
              </div>
              <div class="flex items-center gap-3 p-4 rounded-xl border border-border-base bg-bg-base">
                <input type="checkbox" v-model="quizForm.randomize_questions"
                  class="size-5 accent-primary cursor-pointer" id="randomize" />
                <label for="randomize" class="text-sm font-bold text-text-main cursor-pointer">ترتيب عشوائي
                  للأسئلة</label>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <button @click="submitStep1" :disabled="isSubmitting"
            class="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
            <span v-if="isSubmitting"
              class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            التالي: بناء الأسئلة
            <span v-if="!isSubmitting" class="material-symbols-outlined text-lg">arrow_back</span>
          </button>
        </div>
      </div>

      <!-- ═══════════════ STEP 2: Build Questions ═══════════════ -->
      <div v-if="currentStep === 1" class="space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-black text-text-main">بنك الأسئلة</h2>
            <p class="text-sm text-text-muted mt-1">إجمالي النقاط: <span class="text-primary font-bold">{{ totalPoints
                }} درجة</span> · <span class="font-bold">{{ questions.length }}</span> أسئلة</p>
          </div>
        </div>

        <!-- Add Question Buttons -->
        <div class="grid grid-cols-3 gap-4">
          <button @click="addQuestion('mcq')"
            class="flex flex-col items-center gap-3 p-5 bg-bg-surface border-2 border-dashed border-border-base rounded-2xl hover:border-blue-400/50 hover:bg-blue-500/5 transition-all group cursor-pointer">
            <div
              class="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-2xl">list_alt</span>
            </div>
            <span class="font-bold text-sm text-text-main">اختيار من متعدد</span>
          </button>
          <button @click="addQuestion('true_false')"
            class="flex flex-col items-center gap-3 p-5 bg-bg-surface border-2 border-dashed border-border-base rounded-2xl hover:border-emerald-400/50 hover:bg-emerald-500/5 transition-all cursor-pointer group">
            <div
              class="size-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-2xl">check_circle</span>
            </div>
            <span class="font-bold text-sm text-text-main">صح / خطأ</span>
          </button>
          <button @click="addQuestion('short_answer')"
            class="flex flex-col items-center gap-3 p-5 bg-bg-surface border-2 border-dashed border-border-base rounded-2xl hover:border-purple-400/50 hover:bg-purple-500/5 transition-all cursor-pointer group">
            <div
              class="size-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-2xl">short_text</span>
            </div>
            <span class="font-bold text-sm text-text-main">إجابة قصيرة</span>
          </button>
        </div>

        <!-- Questions List -->
        <div class="space-y-4">
          <div v-for="(question, index) in questions" :key="question.id"
            class="bg-bg-surface rounded-2xl border border-border-base overflow-hidden transition-all"
            :class="question.saved ? 'border-emerald-200 dark:border-emerald-800/40' : ''">

            <!-- Question Header -->
            <div class="p-5 border-b border-border-base flex items-center justify-between bg-bg-base/50">
              <div class="flex items-center gap-3">
                <span
                  class="size-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm">{{
                  index + 1 }}</span>
                <span class="font-bold text-text-main">{{ getQuestionTitle(question.type) }}</span>
                <span v-if="question.saved" class="text-xs text-emerald-500 font-bold flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">check_circle</span> محفوظ
                </span>
              </div>
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1 bg-bg-surface px-3 py-1 rounded-lg border border-border-base">
                  <span class="text-xs text-text-muted">الدرجة:</span>
                  <input v-model.number="question.grade"
                    class="w-10 bg-transparent border-none p-0 text-xs font-bold text-primary focus:ring-0 outline-none"
                    type="number" min="1" />
                </div>
                <button @click="removeQuestion(index)"
                  class="p-2 text-text-muted hover:text-red-500 transition-colors cursor-pointer">
                  <span class="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>

            <!-- Question Content -->
            <div class="p-5 space-y-4">
              <textarea v-model="question.question_text"
                class="w-full bg-bg-base border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 min-h-[80px] text-text-main placeholder:text-text-muted outline-none"
                :placeholder="question.type === 'true_false' ? 'اكتب جملة الصح أو الخطأ هنا...' : 'اكتب نص السؤال هنا...'"></textarea>

              <!-- MCQ Options -->
              <div v-if="question.type === 'mcq'" class="grid gap-3">
                <div v-for="(option, optIndex) in question.options" :key="optIndex" class="flex items-center gap-3">
                  <input type="radio" :name="'q_correct_' + question.id" :checked="option.is_correct"
                    @change="setCorrectOption(question, optIndex)"
                    class="text-primary focus:ring-primary border-border-base bg-bg-surface cursor-pointer" />
                  <input v-model="option.option_text"
                    :class="['flex-1 rounded-lg text-sm px-4 py-2 text-text-main placeholder:text-text-muted transition-colors outline-none',
                      option.is_correct ? 'bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/30' : 'bg-bg-base border-none']"
                    :placeholder="optIndex === 0 ? 'الإجابة الصحيحة' : 'خيار آخر...'" type="text" />
                  <button v-if="question.options.length > 2" @click="removeOption(question, optIndex)"
                    class="text-text-muted hover:text-red-500 cursor-pointer">
                    <span class="material-symbols-outlined text-sm">close</span>
                  </button>
                </div>
                <button @click="addOption(question)"
                  class="text-sm font-bold text-primary flex items-center gap-1 hover:underline cursor-pointer w-fit">
                  <span class="material-symbols-outlined text-base">add</span>
                  إضافة خيار جديد
                </button>
              </div>

              <!-- True/False -->
              <div v-if="question.type === 'true_false'" class="flex gap-4">
                <label
                  class="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-colors"
                  :class="question.correctAnswer === true ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10' : 'border-transparent bg-bg-base hover:bg-bg-base/80'">
                  <input type="radio" :name="'q_tf_' + question.id" :value="true" v-model="question.correctAnswer"
                    class="text-emerald-500 focus:ring-emerald-500 bg-bg-surface border-border-base" />
                  <span class="font-bold"
                    :class="question.correctAnswer === true ? 'text-emerald-700 dark:text-emerald-400' : 'text-text-main'">صح</span>
                </label>
                <label
                  class="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-colors"
                  :class="question.correctAnswer === false ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-transparent bg-bg-base hover:bg-bg-base/80'">
                  <input type="radio" :name="'q_tf_' + question.id" :value="false" v-model="question.correctAnswer"
                    class="text-red-500 focus:ring-red-500 bg-bg-surface border-border-base" />
                  <span class="font-bold"
                    :class="question.correctAnswer === false ? 'text-red-700 dark:text-red-400' : 'text-text-main'">خطأ</span>
                </label>
              </div>

              <!-- Short Answer -->
              <div v-if="question.type === 'short_answer'"
                class="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/20">
                <p class="text-xs text-amber-700 dark:text-amber-400 font-medium leading-relaxed">
                  <span class="material-symbols-outlined text-sm align-text-bottom">info</span>
                  يتطلب هذا النوع تصحيحاً يدوياً من المحاضر بعد تسليم الاختبار.
                </p>
              </div>

              <!-- Save Question Button -->
              <div class="flex justify-end">
                <button @click="saveQuestion(index)" :disabled="question.saving"
                  class="px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  :class="question.saved ? 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400' : 'bg-primary/10 text-primary hover:bg-primary/20'">
                  <span v-if="question.saving"
                    class="size-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></span>
                  <span v-else-if="question.saved" class="material-symbols-outlined text-sm">check</span>
                  <span v-else class="material-symbols-outlined text-sm">save</span>
                  {{ question.saving ? 'جاري الحفظ...' : question.saved ? 'تم الحفظ' : 'حفظ السؤال' }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="questions.length === 0"
          class="flex flex-col items-center justify-center py-16 text-center bg-bg-surface rounded-2xl border-2 border-dashed border-border-base">
          <span class="material-symbols-outlined text-5xl text-text-muted/30 mb-4">help_center</span>
          <p class="text-text-muted font-bold mb-1">لم تضف أي أسئلة بعد</p>
          <p class="text-sm text-text-muted/70">اختر نوع السؤال من الأعلى للبدء</p>
        </div>

        <!-- Actions -->
        <div class="flex justify-between gap-3 pt-4 border-t border-border-base">
          <button @click="currentStep = 0"
            class="px-6 py-3 rounded-xl border border-border-base font-bold text-sm hover:bg-bg-base transition-colors cursor-pointer text-text-muted">
            السابق
          </button>
          <button @click="goToStep3"
            class="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all cursor-pointer flex items-center gap-2">
            التالي: نشر الاختبار
            <span class="material-symbols-outlined text-lg">arrow_back</span>
          </button>
        </div>
      </div>

      <!-- ═══════════════ STEP 3: Publish ═══════════════ -->
      <div v-if="currentStep === 2" class="space-y-6">
        <div class="bg-bg-surface p-8 rounded-2xl border border-border-base shadow-sm text-center">
          <div class="size-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
            <span class="material-symbols-outlined text-3xl">rocket_launch</span>
          </div>
          <h2 class="text-2xl font-black text-text-main mb-2">جاهز للنشر؟</h2>
          <p class="text-text-muted font-medium mb-6">بمجرد نشر الاختبار، سيتمكن الطلاب المسجلون من الوصول إليه</p>

          <div class="bg-bg-base rounded-xl p-5 max-w-sm mx-auto text-right space-y-3 mb-8">
            <div class="flex justify-between text-sm">
              <span class="font-bold text-text-main">{{ quizForm.title }}</span>
              <span class="text-text-muted">العنوان</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="font-bold text-text-main">{{ quizForm.duration_minutes }} دقيقة</span>
              <span class="text-text-muted">المدة</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="font-bold text-text-main">{{ savedQuestionsCount }} سؤال</span>
              <span class="text-text-muted">الأسئلة</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="font-bold text-primary">{{ totalPoints }} درجة</span>
              <span class="text-text-muted">إجمالي النقاط</span>
            </div>
          </div>
        </div>

        <div class="flex justify-between gap-3">
          <button @click="currentStep = 1"
            class="px-6 py-3 rounded-xl border border-border-base font-bold text-sm hover:bg-bg-base transition-colors cursor-pointer text-text-muted">
            السابق
          </button>
          <button @click="publishQuiz" :disabled="isSubmitting"
            class="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
            <span v-if="isSubmitting"
              class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            نشر الاختبار
            <span v-if="!isSubmitting" class="material-symbols-outlined text-lg">check_circle</span>
          </button>
        </div>
      </div>

      <!-- ═══════════════ DONE ═══════════════ -->
      <div v-if="currentStep === 3" class="flex flex-col items-center justify-center py-16 text-center">
        <div class="size-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
          <span class="material-symbols-outlined text-emerald-500 text-4xl">check_circle</span>
        </div>
        <h2 class="text-2xl font-black text-text-main mb-2">تم نشر الاختبار بنجاح! 🎉</h2>
        <p class="text-text-muted font-medium mb-8">يمكن للطلاب المسجلين الآن الوصول للاختبار</p>
        <RouterLink to="/instructor/courses"
          class="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
          العودة للدورات
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { coursesApi } from '@/api/courses';
import { useApiErrors } from '@/composables/useApiErrors';
import { useToast } from '@/composables/useToast';
import { computed, onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const { toast, showToast, hideToast } = useToast();
const { setErrors, clearErrors, getError, getGeneralError } = useApiErrors();

const currentStep = ref(0);
const isSubmitting = ref(false);
const generalError = ref('');
const selectedCourseId = ref(null);
const createdQuizId = ref(null);

const steps = [
  { label: 'تفاصيل الاختبار' },
  { label: 'بناء الأسئلة' },
  { label: 'النشر' },
];

const quizForm = reactive({
  title: '',
  duration_minutes: 30,
  attempts: 1,
  show_results: true,
  randomize_questions: true,
});

const questions = ref([]);

// ── Computed ────────────────────────────────────────────────────────

const totalPoints = computed(() =>
  questions.value.reduce((sum, q) => sum + (parseInt(q.grade) || 0), 0)
);

const savedQuestionsCount = computed(() =>
  questions.value.filter(q => q.saved).length
);

// ── Auto-select Course ──────────────────────────────────────────────

onMounted(async () => {
  if (route.query.courseId) {
    selectedCourseId.value = Number(route.query.courseId);
    return;
  }
  try {
    const { data } = await coursesApi.getMyCourses();
    const courses = data.data || [];
    if (courses.length > 0) {
      selectedCourseId.value = courses[0].id;
    }
  } catch (e) {
    console.error('Failed to fetch courses:', e);
  }
});

// ── Question Helpers ────────────────────────────────────────────────

const getQuestionTitle = (type) => {
  switch (type) {
    case 'mcq': return 'اختيار من متعدد';
    case 'true_false': return 'صح أو خطأ';
    case 'short_answer': return 'إجابة قصيرة';
    default: return 'سؤال';
  }
};

const addQuestion = (type) => {
  const q = {
    id: Date.now(),
    type,
    grade: 5,
    question_text: '',
    saved: false,
    saving: false,
  };

  if (type === 'mcq') {
    q.options = [
      { option_text: '', is_correct: true },
      { option_text: '', is_correct: false },
    ];
  } else if (type === 'true_false') {
    q.correctAnswer = true;
    q.options = [
      { option_text: 'صح', is_correct: true },
      { option_text: 'خطأ', is_correct: false },
    ];
  }

  questions.value.push(q);
};

const removeQuestion = (index) => {
  questions.value.splice(index, 1);
};

const addOption = (question) => {
  question.options.push({ option_text: '', is_correct: false });
};

const removeOption = (question, index) => {
  if (question.options.length > 2) {
    question.options.splice(index, 1);
  }
};

const setCorrectOption = (question, index) => {
  question.options.forEach((opt, i) => {
    opt.is_correct = i === index;
  });
};

// ── Step 1: Create Quiz ─────────────────────────────────────────────

async function submitStep1() {
  clearErrors();
  generalError.value = '';

  if (!selectedCourseId.value) {
    showToast('خطأ', 'لا توجد دورات. أنشئ دورة أولاً', 'error');
    return;
  }

  isSubmitting.value = true;

  try {
    const { data } = await coursesApi.createQuiz(selectedCourseId.value, { ...quizForm });
    createdQuizId.value = data?.data?.id;
    showToast('تم إنشاء الاختبار', 'يمكنك الآن إضافة الأسئلة', 'success');
    currentStep.value = 1;
  } catch (error) {
    setErrors(error);
    generalError.value = getGeneralError(error);
    showToast('خطأ', generalError.value, 'error');
  } finally {
    isSubmitting.value = false;
  }
}

// ── Step 2: Save Individual Question ────────────────────────────────

async function saveQuestion(index) {
  const question = questions.value[index];
  clearErrors();

  if (!createdQuizId.value) {
    showToast('خطأ', 'لم يتم إنشاء الاختبار بعد', 'error');
    return;
  }

  if (!question.question_text.trim()) {
    showToast('خطأ', 'يرجى كتابة نص السؤال', 'error');
    return;
  }

  question.saving = true;

  try {
    // Build payload matching the API format
    const payload = {
      type: question.type,
      question_text: question.question_text,
      grade: question.grade,
    };

    // Add options for mcq and true_false
    if (question.type === 'mcq' || question.type === 'true_false') {
      if (question.type === 'true_false') {
        payload.options = [
          { option_text: 'صح', is_correct: question.correctAnswer === true },
          { option_text: 'خطأ', is_correct: question.correctAnswer === false },
        ];
      } else {
        payload.options = question.options.map(opt => ({
          option_text: opt.option_text,
          is_correct: opt.is_correct,
        }));
      }
    }

    await coursesApi.addQuizQuestion(createdQuizId.value, payload);
    question.saved = true;
    showToast('تم حفظ السؤال', `السؤال ${index + 1} تم حفظه بنجاح`, 'success');
  } catch (error) {
    setErrors(error);
    showToast('خطأ', getGeneralError(error), 'error');
  } finally {
    question.saving = false;
  }
}

// ── Go to Step 3 ────────────────────────────────────────────────────

function goToStep3() {
  if (savedQuestionsCount.value === 0) {
    showToast('تنبيه', 'احفظ سؤال واحد على الأقل قبل المتابعة', 'error');
    return;
  }
  currentStep.value = 2;
}

// ── Step 3: Publish Quiz ────────────────────────────────────────────

async function publishQuiz() {
  clearErrors();
  generalError.value = '';
  isSubmitting.value = true;

  try {
    await coursesApi.publishQuiz(createdQuizId.value);
    showToast('تم النشر', 'تم نشر الاختبار بنجاح', 'success');
    currentStep.value = 3;
  } catch (error) {
    setErrors(error);
    generalError.value = getGeneralError(error);
    showToast('خطأ', generalError.value, 'error');
  } finally {
    isSubmitting.value = false;
  }
}
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
