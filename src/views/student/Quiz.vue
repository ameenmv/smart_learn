<template>
  <div class="bg-bg-base text-text-main min-h-screen flex flex-col transition-colors duration-200 font-display">
    <!-- Toast Notification -->
    <Transition name="toast">
      <div v-if="toast.show"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border backdrop-blur-md transition-all duration-300 min-w-[320px] max-w-[90vw] cursor-pointer hover:scale-[1.02]"
        :class="toast.type === 'success' ? 'bg-emerald-50/95 border-emerald-200 dark:bg-emerald-900/95 dark:border-emerald-800' : 'bg-red-50/95 border-red-200 dark:bg-red-900/95 dark:border-red-800'"
        @click="hideToast">
        <div class="p-2 rounded-full"
          :class="toast.type === 'success' ? 'bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200' : 'bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-200'">
          <span class="material-symbols-outlined text-xl">
            {{ toast.type === 'success' ? 'check_circle' : 'error' }}
          </span>
        </div>
        <div class="flex flex-col flex-1">
          <h4 class="font-bold text-sm"
            :class="toast.type === 'success' ? 'text-emerald-900 dark:text-emerald-100' : 'text-red-900 dark:text-red-100'">
            {{ toast.title }}</h4>
          <p class="text-xs opacity-90"
            :class="toast.type === 'success' ? 'text-emerald-800 dark:text-emerald-200' : 'text-red-800 dark:text-red-200'">
            {{ toast.message }}</p>
        </div>
        <button class="hover:bg-black/5 dark:hover:bg-white/5 rounded-full p-1 transition-colors">
          <span class="material-symbols-outlined text-lg opacity-60">close</span>
        </button>
      </div>
    </Transition>
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full bg-bg-surface border-b border-border-base shadow-sm">
      <div class="max-w-[1280px] mx-auto px-4 lg:px-10 py-3 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-3">
            <span class="text-xl lg:text-2xl font-bold text-text-main font-logo tracking-tight">Smart Learn</span>
            <div class="bg-primary p-1.5 rounded-xl flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-2xl lg:text-3xl logo-icon-fill">school</span>
            </div>
          </div>
          <div class="h-8 w-[1px] bg-border-base hidden sm:block"></div>
          <div class="flex flex-col">
            <h2 class="text-text-main text-sm lg:text-base font-bold leading-tight">{{ quiz?.title || 'جاري التحميل...' }}</h2>
            <p class="text-text-muted text-[10px] lg:text-xs">{{ quiz?.description || `${totalQuestions} سؤال` }}</p>
          </div>
        </div>
        <div class="flex items-center gap-4 lg:gap-8">
          <div class="flex items-center gap-2 bg-bg-base px-4 py-2 rounded-lg">
            <span class="material-symbols-outlined text-primary text-xl">timer</span>
            <div class="flex gap-1 font-bold text-lg text-text-main tracking-wider tabular-nums">
              <span>{{ formattedTime.h }}</span><span>:</span><span>{{ formattedTime.m }}</span><span>:</span><span>{{ formattedTime.s }}</span>
            </div>
          </div>
          <div class="hidden md:flex bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20 items-center justify-center bg-primary/5" data-alt="Student profile avatar" 
          :style="{ backgroundImage: authStore.user?.profile_picture ? `url(${authStore.user.profile_picture})` : 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAvRrl-zLbMRME5_ZXm21NvDaOOyhhvHKSCYsKOJy-QqgMBibTlKedN0jo3iHQeFzCBU3DR9BuPTpkmdDki4zRSFsD9xaHTFfZnrznnHqlXBXFXGkFARsPgJWdt0nzr6R_RExEkaisv-0oSFF64VIObuVEfYfrW-lJHboFVx2rmc77K5uimZGtxhCHh42ED4jIzvRwmKv6R_FgczAcRorZuB_ZQP_1dZiwdXeCWK4iNhl7wqiDQS-kN-g73lrRjAOd_7usnj27t3AQg)' }">
            <span v-if="!authStore.user?.profile_picture && !authStore.user" class="material-symbols-outlined text-text-muted text-[20px]">person</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-[800px] flex flex-col gap-6">
        <!-- Progress Card -->
        <div class="w-full bg-bg-surface p-6 rounded-xl shadow-sm border border-border-base transition-colors duration-300">
          <div class="flex flex-col gap-3">
            <div class="flex justify-between items-center">
              <p class="text-text-main text-base font-semibold leading-normal">التقدم في الاختبار</p>
              <p class="text-primary text-sm font-bold leading-normal">{{ progress }}% مكتمل</p>
            </div>
            <div class="h-2.5 w-full bg-bg-base rounded-full overflow-hidden">
              <div class="h-full bg-primary transition-all duration-500 rounded-full" :style="{ width: progress + '%' }"></div>
            </div>
            <div class="flex justify-between">
              <p class="text-text-muted text-sm font-normal">السؤال {{ currentQuestionIndex + 1 }} من {{ totalQuestions }}</p>
              <p class="text-text-muted text-sm font-normal">باقي {{ remainingQuestions }} سؤالاً</p>
            </div>
          </div>
        </div>

        <!-- Question Card -->
        <div class="@container w-full">
          <div class="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-bg-surface border border-border-base overflow-hidden transition-colors duration-300">
            <div class="w-full bg-center bg-no-repeat aspect-[21/9] bg-cover bg-primary/5 border-b border-border-base flex items-center justify-center relative overflow-hidden">
               <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
               <span class="material-symbols-outlined text-primary/20 text-7xl z-10">code</span>
            </div>
            <div class="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 p-8">
              <div class="inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                اختيار من متعدد
              </div>
              <h3 class="text-text-main text-xl lg:text-2xl font-bold leading-relaxed tracking-tight">
                {{ currentQuestion.text }}
              </h3>
              <p class="text-text-muted text-base font-normal">اختر إجابة واحدة صحيحة من الخيارات التالية:</p>
            </div>
            
            <div class="flex flex-col gap-4 p-8 pt-0 custom-radio">
              <div v-for="option in currentQuestion.options" :key="option.id">
                  <label :class="[
                      'group flex items-center gap-4 rounded-xl border-2 border-solid p-4 flex-row-reverse cursor-pointer transition-all',
                      selectedOption === option.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border-base hover:border-primary/50 hover:bg-primary/5'
                  ]">
                    <div class="relative flex items-center justify-center size-6 rounded-full border-2 transition-colors"
                         :class="selectedOption === option.id ? 'border-primary' : 'border-border-base group-hover:border-primary/50'">
                        <div v-if="selectedOption === option.id" class="size-3 bg-primary rounded-full"></div>
                    </div>
                    <input 
                        type="radio" 
                        :name="'q_' + currentQuestion.id" 
                        :value="option.id" 
                        v-model="selectedOption"
                        class="hidden"
                    />
                    <div class="flex grow flex-col">
                      <p class="text-text-main text-base font-semibold group-hover:text-primary transition-colors">{{ option.text }}</p>
                    </div>
                  </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex items-center justify-between mt-4">
          <button 
            @click="prevQuestion" 
            :disabled="currentQuestionIndex === 0"
            class="flex items-center justify-center gap-2 min-w-[120px] px-6 h-12 rounded-lg border-2 border-border-base text-text-main text-base font-bold hover:bg-bg-surface-hover transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span class="material-symbols-outlined">arrow_forward</span>
            <span>السابق</span>
          </button>
          <div class="flex gap-4">
            <button 
                @click="skipQuestion"
                class="flex items-center justify-center gap-2 min-w-[120px] px-6 h-12 rounded-lg border-2 border-primary/20 bg-primary/5 text-primary text-base font-bold hover:bg-primary/10 transition-colors cursor-pointer"
            >
              <span>تخطي</span>
            </button>
            <button 
                @click="nextQuestion"
                class="flex items-center justify-center gap-2 min-w-[140px] px-8 h-12 rounded-lg bg-primary text-white text-base font-bold hover:bg-primary/90 shadow-md shadow-primary/20 transition-all cursor-pointer"
            >
              <span>{{ currentQuestionIndex === totalQuestions - 1 ? 'إنهاء' : 'التالي' }}</span>
              <span class="material-symbols-outlined">arrow_back</span>
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="w-full bg-bg-surface border-t border-border-base py-4 mt-auto transition-colors duration-300">
      <div class="max-w-[1280px] mx-auto px-10 flex flex-wrap justify-center sm:justify-between items-center gap-4">
        <div class="flex gap-2">
          <span class="flex items-center gap-1 text-text-muted text-sm">
            <span class="size-2 rounded-full bg-green-500"></span>
            متصل بالنظام
          </span>
          <span class="text-border-base px-2">|</span>
          <span class="text-text-muted text-sm">آخر حفظ تلقائي: منذ ثوانٍ قليلة</span>
        </div>
        <div class="flex items-center gap-4">
          <button class="flex items-center gap-2 text-text-muted text-sm hover:text-primary transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-lg">help</span>
            الدعم الفني
          </button>
          <button class="flex items-center gap-2 text-text-muted text-sm hover:text-primary transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-lg">flag</span>
            إبلاغ عن خطأ
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { quizApi } from '@/api/quiz';
import { useToast } from '@/composables/useToast';
import { useAuthStore } from '@/stores/auth';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const { toast, showToast, hideToast } = useToast();
const quizId = route.params.id;

const quiz = ref(null);
const questions = ref([]);
const attemptId = ref(null);
const isLoading = ref(true);
const isSubmitting = ref(false);

const totalQuestions = computed(() => questions.value.length || 1);
const currentQuestionIndex = ref(0);
const selectedOption = ref(null);
const answers = ref({}); // { questionId: optionId }

const currentQuestion = computed(() => {
    if (questions.value.length === 0) {
        return { id: 1, text: 'جاري التحميل...', options: [] };
    }
    const q = questions.value[currentQuestionIndex.value] || questions.value[0];
    // Backend returns 'question' field, normalize to 'text'
    return {
        ...q,
        text: q.text || q.question || q.question_text || '',
    };
});

const progress = computed(() => {
    return Math.round(((currentQuestionIndex.value + 1) / totalQuestions.value) * 100);
});

const remainingQuestions = computed(() => {
    return totalQuestions.value - (currentQuestionIndex.value + 1);
});

// Timer Logic
const timeRemaining = ref(45 * 60); // Default 45 min, will be updated from quiz data
let timerInterval;

const formattedTime = computed(() => {
    const hours = Math.floor(timeRemaining.value / 3600);
    const minutes = Math.floor((timeRemaining.value % 3600) / 60);
    const seconds = timeRemaining.value % 60;

    return {
        h: hours.toString().padStart(2, '0'),
        m: minutes.toString().padStart(2, '0'),
        s: seconds.toString().padStart(2, '0')
    };
});

const startTimer = () => {
    timerInterval = setInterval(() => {
        if (timeRemaining.value > 0) {
            timeRemaining.value--;
        } else {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
};

const nextQuestion = () => {
    // Save current answer
    if (selectedOption.value !== null) {
        answers.value[currentQuestion.value.id] = selectedOption.value;
    }
    if (currentQuestionIndex.value < totalQuestions.value - 1) {
        currentQuestionIndex.value++;
        selectedOption.value = answers.value[questions.value[currentQuestionIndex.value]?.id] || null;
    } else {
        // Last question — submit the quiz
        submitQuiz();
    }
};

const prevQuestion = () => {
    if (currentQuestionIndex.value > 0) {
        if (selectedOption.value !== null) {
            answers.value[currentQuestion.value.id] = selectedOption.value;
        }
        currentQuestionIndex.value--;
        selectedOption.value = answers.value[questions.value[currentQuestionIndex.value]?.id] || null;
    }
};

const skipQuestion = () => {
    nextQuestion();
};

const submitQuiz = async () => {
    if (isSubmitting.value) return;

    // Save last answer
    if (selectedOption.value !== null) {
        answers.value[currentQuestion.value.id] = selectedOption.value;
    }

    // If no attemptId, just go to dashboard
    if (!attemptId.value) {
        console.warn('[Quiz] No attemptId available, redirecting...');
        router.push('/student/dashboard');
        return;
    }

    isSubmitting.value = true;
    try {
        const answersPayload = Object.entries(answers.value).map(([questionId, optionId]) => ({
            question_id: parseInt(questionId),
            option_id: parseInt(optionId)
        }));

        const { data } = await quizApi.submitQuizAttempt(attemptId.value, { answers: answersPayload });
        clearInterval(timerInterval);
        
        // Show score if available
        const score = data.score ?? data.data?.score;
        const total = questions.value.length;
        if (score !== undefined) {
            showToast('تمت الإجابة بنجاح! 🎉', `درجتك: ${score} من ${total}`, 'success', 5000);
        }
        
        router.push('/student/dashboard');
    } catch (error) {
        console.error('[Quiz] Submit failed:', error);
        const msg = error.response?.data?.message || 'فشل إرسال الإجابات';
        showToast('خطأ في الإرسال', msg, 'error');
    } finally {
        isSubmitting.value = false;
    }
};

const fetchAndStartQuiz = async () => {
    isLoading.value = true;
    try {
        // Get quiz data — backend returns { success, quiz_id, title, duration_minutes, questions }
        const { data: quizData } = await quizApi.getQuiz(quizId);
        quiz.value = quizData.data || quizData;
        questions.value = quiz.value.questions || [];

        // Update header with real quiz title
        if (quiz.value.title) {
            document.title = quiz.value.title + ' — Smart Learn';
        }

        // Set timer from quiz duration
        if (quiz.value.duration_minutes) {
            timeRemaining.value = quiz.value.duration_minutes * 60;
        } else if (quiz.value.duration_seconds) {
            timeRemaining.value = quiz.value.duration_seconds;
        }

        // Start quiz attempt — backend returns { success, attempt_id }
        const { data: attemptData } = await quizApi.startQuiz(quizId);
        const attempt = attemptData.data || attemptData;
        attemptId.value = attempt.attempt_id || attempt.id;

        startTimer();
    } catch (error) {
        console.error('[Quiz] Failed to load:', error);
        const msg = error.response?.data?.message || '';
        if (msg.includes('already')) {
            showToast('تنبيه', 'لقد أجريت هذا الاختبار مسبقاً.', 'error');
            router.push('/student/dashboard');
        }
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    fetchAndStartQuiz();
});

onUnmounted(() => {
    if (timerInterval) clearInterval(timerInterval);
});
</script>


<style scoped>
.radio-dot {
    --radio-dot-svg: url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27%23135bec%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%274%27/%3e%3c/svg%3e');
}

input[type="radio"]:checked {
    background-image: var(--radio-dot-svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

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
