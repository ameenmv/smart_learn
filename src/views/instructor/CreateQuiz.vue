<template>
  <div class="flex flex-col h-full bg-bg-base text-text-main font-sans transition-colors duration-300 relative">
    
    <!-- Toast Notification -->
    <Transition name="toast">
        <div v-if="toast.show" 
             class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl shadow-xl border backdrop-blur-md transition-all duration-300 min-w-[320px] cursor-pointer hover:scale-[1.02]"
             :class="toast.type === 'success' ? 'bg-emerald-50/90 border-emerald-200 dark:bg-emerald-900/90 dark:border-emerald-800' : 'bg-red-50/90 border-red-200 dark:bg-red-900/90 dark:border-red-800'"
             @click="toast.show = false">
          <div class="p-2 rounded-full" :class="toast.type === 'success' ? 'bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200' : 'bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-200'">
            <span class="material-symbols-outlined text-xl">
                {{ toast.type === 'success' ? 'check_circle' : 'error' }}
            </span>
          </div>
          <div class="flex flex-col flex-1">
            <h4 class="font-bold text-sm" :class="toast.type === 'success' ? 'text-emerald-900 dark:text-emerald-100' : 'text-red-900 dark:text-red-100'">{{ toast.title }}</h4>
            <p class="text-xs opacity-90" :class="toast.type === 'success' ? 'text-emerald-800 dark:text-emerald-200' : 'text-red-800 dark:text-red-200'">{{ toast.message }}</p>
          </div>
          <button class="hover:bg-black/5 dark:hover:bg-white/5 rounded-full p-1 transition-colors">
            <span class="material-symbols-outlined text-lg opacity-60">close</span>
          </button>
        </div>
    </Transition>

    <!-- Header -->
    <header class="sticky top-0 z-10 bg-bg-surface/80 backdrop-blur-md border-b border-border-base px-8 h-16 flex items-center justify-between transition-colors duration-300 shrink-0">
      <div class="flex items-center gap-4">
        <nav class="flex items-center gap-2 text-sm text-text-muted">
          <router-link class="hover:text-primary transition-colors" to="/instructor/quizzes">الاختبارات</router-link>
          <span class="material-symbols-outlined text-xs">chevron_left</span>
          <span class="text-text-main font-semibold">بناء اختبار جديد</span>
        </nav>
      </div>
      <div class="flex items-center gap-3">
        <button class="px-4 py-2 text-sm font-bold text-text-muted hover:bg-bg-base rounded-lg transition-colors flex items-center gap-2 cursor-pointer">
          <span class="material-symbols-outlined">visibility</span>
          <span>معاينة</span>
        </button>
        <button @click="saveDraft" :disabled="isSaving" class="px-6 py-2 text-sm font-bold bg-primary text-white rounded-lg shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
          <span v-if="isSaving" class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          <span v-else class="material-symbols-outlined">save</span>
          <span>{{ isSaving ? 'جاري الحفظ...' : 'حفظ المسودة' }}</span>
        </button>
      </div>
    </header>
    
    <div class="p-8 max-w-[1000px] mx-auto w-full flex-1 overflow-y-auto">
      <!-- Steps Indicator -->
      <div class="mb-12">
        <div class="flex items-center justify-between relative max-w-2xl mx-auto">
          <div class="flex flex-col items-center gap-2 z-10">
            <div class="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <span class="material-symbols-outlined">check</span>
            </div>
            <span class="text-xs font-bold text-text-muted">تفاصيل الاختبار</span>
          </div>
          <div class="flex flex-col items-center gap-2 z-10">
            <div class="size-10 rounded-full bg-primary text-white flex items-center justify-center ring-4 ring-primary/20">
              <span class="text-sm font-bold">2</span>
            </div>
            <span class="text-xs font-bold text-primary">بناء الأسئلة</span>
          </div>
          <div class="flex flex-col items-center gap-2 z-10">
            <div class="size-10 rounded-full bg-bg-surface border-2 border-border-base text-text-muted flex items-center justify-center transition-colors">
              <span class="text-sm font-bold">3</span>
            </div>
            <span class="text-xs font-bold text-text-muted">تعيين المقرر</span>
          </div>
          <div class="absolute top-5 left-0 w-full h-0.5 bg-border-base -z-0"></div>
          <div class="absolute top-5 right-0 w-1/2 h-0.5 bg-primary -z-0"></div>
        </div>
      </div>

      <div class="space-y-6">
        <!-- Dashboard Header -->
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-black text-text-main">بنك الأسئلة</h2>
          <p class="text-sm text-text-muted">إجمالي النقاط: <span class="text-primary font-bold">{{ totalPoints }} درجة</span></p>
        </div>

        <!-- Add Question Buttons -->
        <div class="grid grid-cols-3 gap-4">
          <button @click="addQuestion('multiple_choice')" class="flex flex-col items-center gap-3 p-6 bg-bg-surface border-2 border-dashed border-border-base rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-pointer">
            <div class="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
              <span class="material-symbols-outlined text-3xl">list_alt</span>
            </div>
            <span class="font-bold text-sm text-text-main">اختيار من متعدد</span>
          </button>
          <button @click="addQuestion('true_false')" class="flex flex-col items-center gap-3 p-6 bg-bg-surface border-2 border-dashed border-border-base rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
            <div class="size-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center">
              <span class="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <span class="font-bold text-sm text-text-main">صح / خطأ</span>
          </button>
          <button @click="addQuestion('short_answer')" class="flex flex-col items-center gap-3 p-6 bg-bg-surface border-2 border-dashed border-border-base rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
            <div class="size-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center">
              <span class="material-symbols-outlined text-3xl">short_text</span>
            </div>
            <span class="font-bold text-sm text-text-main">إجابة قصيرة</span>
          </button>
        </div>

        <!-- Questions List -->
        <div class="space-y-4 mt-8">
            <div v-for="(question, index) in questions" :key="question.id" class="bg-bg-surface rounded-2xl border border-border-base overflow-hidden transition-colors">
                
                <!-- Question Header -->
                <div class="p-6 border-b border-border-base flex items-center justify-between bg-bg-base/50">
                    <div class="flex items-center gap-3">
                        <span class="size-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm">{{ index + 1 }}</span>
                        <span class="font-bold text-text-main">{{ getQuestionTitle(question.type) }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="flex items-center gap-1 bg-bg-surface px-3 py-1 rounded-lg border border-border-base">
                            <span class="text-xs text-text-muted">النقاط:</span>
                            <input v-model="question.points" class="w-10 bg-transparent border-none p-0 text-xs font-bold text-primary focus:ring-0" type="number" min="0"/>
                        </div>
                        <button @click="removeQuestion(index)" class="p-2 text-text-muted hover:text-red-500 transition-colors cursor-pointer">
                            <span class="material-symbols-outlined">delete</span>
                        </button>
                        <button class="p-2 text-text-muted hover:text-primary transition-colors cursor-pointer">
                            <span class="material-symbols-outlined">drag_indicator</span>
                        </button>
                    </div>
                </div>

                <!-- Question Content -->
                <div class="p-6 space-y-4">
                    <textarea v-model="question.text" class="w-full bg-bg-base border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 min-h-[80px] text-text-main placeholder:text-text-muted" :placeholder="question.type === 'true_false' ? 'اكتب جملة الصح أو الخطأ هنا...' : 'اكتب نص السؤال هنا...'"></textarea>
                    
                    <!-- Multiple Choice Options -->
                    <div v-if="question.type === 'multiple_choice'" class="grid gap-3">
                        <div v-for="(option, optIndex) in question.options" :key="option.id" class="flex items-center gap-3">
                            <input 
                                type="radio" 
                                :name="'q_correct_' + question.id" 
                                :checked="option.isCorrect"
                                @change="setCorrectOption(question, optIndex)"
                                class="text-primary focus:ring-primary border-border-base bg-bg-surface cursor-pointer" 
                            />
                            <input 
                                v-model="option.text"
                                :class="[
                                    'flex-1 rounded-lg text-sm px-4 py-2 text-text-main placeholder:text-text-muted transition-colors',
                                    option.isCorrect 
                                        ? 'bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/30' 
                                        : 'bg-bg-base border-none'
                                ]"
                                :placeholder="optIndex === 0 ? 'الخيار الأول (الإجابة الصحيحة)' : 'أضف خياراً...'" 
                                type="text"
                            />
                            <button @click="removeOption(question, optIndex)" class="text-text-muted hover:text-red-500 cursor-pointer" title="حذف الخيار">
                                <span class="material-symbols-outlined text-sm">close</span>
                            </button>
                        </div>
                        <button @click="addOption(question)" class="text-sm font-bold text-primary flex items-center gap-1 hover:underline cursor-pointer w-fit">
                            <span class="material-symbols-outlined text-base">add</span>
                            <span>إضافة خيار جديد</span>
                        </button>
                    </div>

                    <!-- True/False Options -->
                    <div v-if="question.type === 'true_false'" class="flex gap-4">
                        <label class="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-colors"
                             :class="question.correctAnswer === true ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10' : 'border-transparent bg-bg-base hover:bg-bg-surface-hover'">
                            <input type="radio" :name="'q_tf_' + question.id" :value="true" v-model="question.correctAnswer" class="text-emerald-500 focus:ring-emerald-500 bg-bg-surface border-border-base" />
                            <span class="font-bold" :class="question.correctAnswer === true ? 'text-emerald-700 dark:text-emerald-400' : 'text-text-main'">صح</span>
                        </label>
                        <label class="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-colors"
                             :class="question.correctAnswer === false ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-transparent bg-bg-base hover:bg-bg-surface-hover'">
                            <input type="radio" :name="'q_tf_' + question.id" :value="false" v-model="question.correctAnswer" class="text-red-500 focus:ring-red-500 bg-bg-surface border-border-base" />
                            <span class="font-bold" :class="question.correctAnswer === false ? 'text-red-700 dark:text-red-400' : 'text-text-main'">خطأ</span>
                        </label>
                    </div>

                    <!-- Short Answer Info -->
                    <div v-if="question.type === 'short_answer'" class="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/20">
                        <p class="text-xs text-amber-700 dark:text-amber-400 font-medium leading-relaxed">
                            <span class="material-symbols-outlined text-sm align-text-bottom">info</span>
                            يتطلب هذا النوع من الأسئلة تصحيحاً يدوياً من قِبل المحاضر بعد تسليم الاختبار.
                        </p>
                    </div>

                </div>
            </div>
        </div>

        <div class="flex items-center justify-between pt-8 border-t border-border-base">
          <button class="px-8 py-3 rounded-xl border border-border-base font-bold text-text-muted hover:bg-bg-surface transition-colors cursor-pointer">
            السابق
          </button>
          <button @click="router.push('/instructor/quizzes/assign')" class="px-10 py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform cursor-pointer">
            الخطوة التالية
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isSaving = ref(false);

const toast = reactive({
    show: false,
    title: '',
    message: '',
    type: 'success'
});

const showToast = (title, message, type = 'success') => {
    toast.title = title;
    toast.message = message;
    toast.type = type;
    toast.show = true;
    setTimeout(() => {
        toast.show = false;
    }, 3000);
};

const questions = ref([
  {
    id: 1,
    type: 'multiple_choice',
    points: 5,
    text: '',
    options: [
      { id: 1, text: 'الخيار الأول (الإجابة الصحيحة)', isCorrect: true },
      { id: 2, text: '', isCorrect: false }
    ]
  },
  {
    id: 2,
    type: 'true_false',
    points: 2,
    text: '',
    correctAnswer: true
  },
  {
    id: 3,
    type: 'short_answer',
    points: 1,
    text: ''
  }
]);

const totalPoints = computed(() => {
  return questions.value.reduce((sum, q) => sum + (parseInt(q.points) || 0), 0);
});

const getQuestionTitle = (type) => {
  switch(type) {
    case 'multiple_choice': return 'اختيار من متعدد';
    case 'true_false': return 'صح أو خطأ';
    case 'short_answer': return 'إجابة قصيرة';
    default: return 'سؤال';
  }
};

const addQuestion = (type) => {
  const newQuestion = {
    id: Date.now(),
    type: type,
    points: 1,
    text: ''
  };

  if (type === 'multiple_choice') {
    newQuestion.options = [
      { id: Date.now() + 1, text: '', isCorrect: true },
      { id: Date.now() + 2, text: '', isCorrect: false }
    ];
  } else if (type === 'true_false') {
    newQuestion.correctAnswer = true;
  }

  questions.value.push(newQuestion);
};

const removeQuestion = (index) => {
  questions.value.splice(index, 1);
};

const addOption = (question) => {
  question.options.push({
    id: Date.now(),
    text: '',
    isCorrect: false
  });
};

const removeOption = (question, index) => {
  if (question.options.length > 2) {
    question.options.splice(index, 1);
  }
};

const setCorrectOption = (question, index) => {
  question.options.forEach((opt, i) => {
    opt.isCorrect = i === index;
  });
};

const saveDraft = () => {
    isSaving.value = true;
    setTimeout(() => {
        isSaving.value = false;
        showToast('تم حفظ المسودة', 'تم حفظ مسودة الاختبار في بنك الأسئلة');
    }, 1500);
};
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
