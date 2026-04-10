<template>
  <div class="max-w-7xl mx-auto font-display">
    <!-- Loading State -->
    <div v-if="isLoading" class="flex flex-col items-center justify-center py-20 min-h-[50vh]">
      <span class="material-symbols-outlined text-6xl text-primary animate-spin mb-4">refresh</span>
      <p class="text-lg font-bold text-text-main">جاري تحميل بيانات المقرر...</p>
    </div>

    <!-- Error/Not Found State -->
    <div v-else-if="!course" class="flex flex-col items-center justify-center py-20 min-h-[50vh] text-center">
      <span class="material-symbols-outlined text-7xl text-red-500 mb-4 opacity-75">block</span>
      <h2 class="text-2xl font-bold text-text-main mb-2">عذراً، لا يمكن الوصول لهذا المقرر</h2>
      <p class="text-text-muted max-w-md">إما أنك لا تملك صلاحية الوصول، أو أن المقرر غير متاح حالياً.</p>
      <RouterLink to="/student/courses" class="mt-6 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">العودة للمقررات المتاحة</RouterLink>
    </div>

    <template v-else>
    <!-- Course Header -->
    <div v-if="activeTab === 'content'" class="relative rounded-xl overflow-hidden bg-gradient-to-l from-primary to-blue-800 text-white p-8 md:p-12 mb-8 shadow-xl transition-all">
      <div class="absolute top-0 left-0 w-1/3 h-full opacity-10">
        <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
          <path d="M0 0 L100 0 L100 100 Z" fill="currentColor"></path>
        </svg>
      </div>
      <div class="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="text-right">
          <div class="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4 backdrop-blur-md">{{ course.level || 'مبتدئ' }}</div>
          <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ course.title }}</h1>
          <p class="text-blue-100 text-lg max-w-2xl leading-relaxed">{{ course.description || 'لا يوجد وصف متاح لهذا المقرر.' }}</p>
        </div>
        <div class="flex items-center bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/20">
          <div class="w-16 h-16 rounded-lg overflow-hidden ml-4 border-2 border-white/50 bg-white/20 flex items-center justify-center">
            <span v-if="!course.instructor_image" class="material-symbols-outlined text-4xl">person</span>
            <img v-else alt="Instructor" class="w-full h-full object-cover" :src="course.instructor_image"/>
          </div>
          <div class="text-right">
            <p class="text-sm opacity-80">أستاذ المادة</p>
            <p class="text-lg font-bold">{{ course.instructor_name || 'محاضر' }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="bg-bg-surface rounded-xl shadow-sm mb-8 border border-border-base transition-colors duration-300">
      <div class="flex border-b border-border-base overflow-x-auto no-scrollbar">
        <button 
          @click="activeTab = 'content'" 
          class="px-8 py-4 font-bold flex items-center gap-2 whitespace-nowrap cursor-pointer hover:bg-bg-surface-hover transition-colors"
          :class="activeTab === 'content' ? 'text-primary border-b-2 border-primary' : 'text-text-muted hover:text-primary'"
        >
          <span class="material-symbols-outlined text-sm">auto_stories</span>
          المحتوى
        </button>
        <button 
          @click="activeTab = 'quizzes'" 
          class="px-8 py-4 font-bold flex items-center gap-2 whitespace-nowrap cursor-pointer hover:bg-bg-surface-hover transition-colors"
          :class="activeTab === 'quizzes' ? 'text-primary border-b-2 border-primary' : 'text-text-muted hover:text-primary'"
        >
          <span class="material-symbols-outlined text-sm">quiz</span>
          الاختبارات
        </button>
        <!-- <button 
          @click="activeTab = 'assignments'" 
          class="px-8 py-4 font-bold flex items-center gap-2 whitespace-nowrap cursor-pointer hover:bg-bg-surface-hover transition-colors"
          :class="activeTab === 'assignments' ? 'text-primary border-b-2 border-primary' : 'text-text-muted hover:text-primary'"
        >
          <span class="material-symbols-outlined text-sm">assignment</span>
          الواجبات
        </button> -->
      </div>
    </div>

    <!-- Content Tab -->
    <div v-if="activeTab === 'content'" class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Sidebar (Progress & Info) -->
      <div class="lg:col-span-4 space-y-8">
        <!-- Progress -->
        <div v-if="course.is_enrolled !== false" class="bg-bg-surface p-6 rounded-xl shadow-sm border border-border-base transition-colors duration-300">
          <h3 class="text-lg font-bold mb-6 flex items-center gap-2 text-text-main">
            <span class="material-symbols-outlined text-primary">analytics</span>
            تقدمك في المقرر
          </h3>
          <div class="relative pt-1">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary/10">
                  مكتمل بنسبة
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-primary">{{ course.progress || 0 }}%</span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-bg-surface-hover">
              <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all" :style="`width:${course.progress || 0}%`"></div>
            </div>
          </div>
          <RouterLink v-if="course.progress > 0" :to="`/student/courses/${course.id}/lecture/1`" class="w-full mt-6 bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex justify-center items-center gap-2 cursor-pointer shadow-lg shadow-primary/20">
            <span class="material-symbols-outlined">play_circle</span>
            متابعة التعلم
          </RouterLink>
        </div>

        <!-- Enrollment CTA (If Not Enrolled) -->
        <div v-else class="bg-gradient-to-tr from-primary/10 to-transparent p-6 rounded-xl shadow-sm border border-primary/20 transition-colors duration-300 flex flex-col items-center text-center">
          <span class="material-symbols-outlined text-5xl text-primary mb-2">school</span>
          <h3 class="text-lg font-bold mb-2 text-text-main">لست مسجلاً في هذا المقرر</h3>
          <p class="text-sm text-text-muted mb-6">احصل على إمكانية الوصول لجميع الدروس، المحاضرات والاختبارات.</p>
          <button @click="enrollInCourse" :disabled="isEnrolling" class="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex justify-center items-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-50">
            <span v-if="isEnrolling" class="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            <span v-else class="material-symbols-outlined">add_task</span>
            انضم للمقرر الآن
          </button>
        </div>

        <!-- Instructor Info -->
        <div class="bg-bg-surface p-6 rounded-xl shadow-sm border border-border-base transition-colors duration-300">
          <h3 class="text-lg font-bold mb-4 text-text-main">عن المحاضر</h3>
          <div class="flex flex-col items-center text-center pb-4 border-b border-border-base">
            <div class="w-20 h-20 rounded-full mb-3 overflow-hidden border-2 border-border-base bg-bg-surface-hover flex items-center justify-center">
              <span v-if="!course.instructor_image" class="material-symbols-outlined text-4xl text-text-muted">person</span>
              <img v-else alt="Instructor" class="w-full h-full object-cover" :src="course.instructor_image"/>
            </div>
            <h4 class="font-bold text-text-main">{{ course.instructor_name || 'محاضر' }}</h4>
            <p class="text-sm text-text-muted">محاضر المقرر</p>
          </div>
          <p class="mt-4 text-sm text-text-muted leading-relaxed text-right">
            {{ course.instructor_bio || 'لا توجد نبذة مختصرة عن المحاضر حتى الآن.' }}
          </p>
          <div class="mt-4 flex gap-2 justify-center">
            <button class="p-2 rounded-full bg-bg-surface-hover text-text-muted hover:text-primary transition-colors cursor-pointer border border-transparent hover:border-primary/20">
              <span class="material-symbols-outlined text-sm">email</span>
            </button>
            <button class="p-2 rounded-full bg-bg-surface-hover text-text-muted hover:text-primary transition-colors cursor-pointer border border-transparent hover:border-primary/20">
              <span class="material-symbols-outlined text-sm">link</span>
            </button>
          </div>
        </div>

        <!-- Notification -->
        <div class="bg-amber-50 dark:bg-amber-900/10 border-r-4 border-amber-500 p-4 rounded-lg">
          <div class="flex items-start gap-3">
            <span class="material-symbols-outlined text-amber-600">event_available</span>
            <div>
              <p class="text-amber-800 dark:text-amber-400 font-bold text-sm">الموعد النهائي القادم</p>
              <p class="text-amber-700 dark:text-amber-500 text-xs mt-1">واجب الفصل الرابع: الثلاثاء، 25 أكتوبر</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content (Syllabus) -->
      <div class="lg:col-span-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold text-text-main">مخطط المادة الدراسية</h2>
          <div class="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors group">
            <span class="text-sm text-text-muted group-hover:text-primary">توسيع الكل</span>
            <span class="material-symbols-outlined text-text-muted group-hover:text-primary">unfold_more</span>
          </div>
        </div>

        <div class="space-y-4">
          <!-- When Enrolled but no lectures yet -->
          <div v-if="course.is_enrolled && (!course.lectures || course.lectures.length === 0)" class="bg-bg-surface border border-border-base border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center">
            <span class="material-symbols-outlined text-6xl text-text-muted mb-4 opacity-50">menu_book</span>
            <h3 class="text-xl font-bold text-text-main mb-2">المحتوى قيد التجهيز</h3>
            <p class="text-text-muted">لم يتم إضافة أي دروس لهذا المقرر حتى الآن.</p>
          </div>

          <!-- When NOT Enrolled: Locked State -->
          <div v-else-if="!course.is_enrolled" class="relative bg-bg-surface border border-border-base rounded-xl overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center p-8">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-bg-surface/90 z-10"></div>
            <!-- Fake blurred content behind -->
            <div class="absolute top-8 left-8 right-8 space-y-4 opacity-20 pointer-events-none blur-[2px]">
              <div class="h-16 bg-border-base rounded-xl w-full"></div>
              <div class="h-16 bg-border-base rounded-xl w-full"></div>
              <div class="h-16 bg-border-base rounded-xl w-full"></div>
            </div>
            
            <div class="relative z-20 flex flex-col items-center max-w-sm mt-10">
              <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span class="material-symbols-outlined text-4xl text-primary">lock</span>
              </div>
              <h3 class="text-2xl font-bold text-text-main mb-3">محتوى المقرر مقفل</h3>
              <p class="text-text-muted mb-8 leading-relaxed">قم بالانضمام للمقرر الآن لتتمكن من فتح جميع الدروس والمحاضرات والاختبارات المتاحة وتتبع تقدمك.</p>
              <button @click="enrollInCourse" :disabled="isEnrolling" class="w-full bg-primary text-white py-3 px-8 rounded-lg font-bold hover:bg-blue-700 transition-colors flex justify-center items-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-50 cursor-pointer">
                <span v-if="isEnrolling" class="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <span v-else class="material-symbols-outlined">add_task</span>
                انضم للمقرر الآن
              </button>
            </div>
          </div>

          <!-- Real Syllabus Iterate (When API supports it) -->
          <template v-else>
            <div v-for="(module, index) in course.lectures" :key="index" class="bg-bg-surface border border-border-base rounded-xl overflow-hidden transition-colors duration-300">
              <!-- Placeholder for real modules -->
            </div>
          </template>
        </div>

        <!-- Help Box -->
        <div class="mt-12 p-6 border-2 border-dashed border-border-base rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 bg-bg-surface/50 transition-colors duration-300">
          <div class="flex items-center gap-4 text-right">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-primary">support_agent</span>
            </div>
            <div>
              <h5 class="font-bold text-text-main">هل تحتاج إلى مساعدة؟</h5>
              <p class="text-sm text-text-muted">فريق الدعم الأكاديمي متواجد للرد على استفساراتك حول المنهج.</p>
            </div>
          </div>
          <button class="px-6 py-2 border border-primary text-primary rounded-lg font-bold hover:bg-primary/5 transition-colors cursor-pointer">
            تواصل مع الدعم
          </button>
        </div>
      </div>
    </div>

    <!-- Quiz Tab Content (Inline) -->
    <div v-else-if="activeTab === 'quizzes'" class="w-full flex flex-col items-center justify-start py-8">
      <div class="w-full max-w-[800px] flex flex-col gap-6">
        <!-- Progress Card -->
        <div class="w-full bg-bg-surface p-6 rounded-xl shadow-sm border border-border-base transition-colors duration-300">
          <div class="flex flex-col gap-3">
            <div class="flex justify-between items-center">
              <p class="text-text-main text-base font-semibold leading-normal">التقدم في الاختبار</p>
              <p class="text-primary text-sm font-bold leading-normal">25% مكتمل</p>
            </div>
            <div class="h-2.5 w-full bg-bg-base rounded-full overflow-hidden">
              <div class="h-full bg-primary transition-all duration-500 rounded-full" style="width: 25%;"></div>
            </div>
            <div class="flex justify-between">
              <p class="text-text-muted text-sm font-normal">السؤال ٥ من ٢٠</p>
              <p class="text-text-muted text-sm font-normal">باقي ١٥ سؤالاً</p>
            </div>
          </div>
        </div>

        <!-- Question Card -->
        <div class="@container w-full">
          <div class="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-bg-surface border border-border-base overflow-hidden transition-colors duration-300">
            <!-- <div class="w-full bg-center bg-no-repeat aspect-[21/9] bg-cover bg-primary/5 border-b border-border-base flex items-center justify-center" data-alt="Programming code visualization background" style="background-image: linear-gradient(135deg, rgba(19, 91, 236, 0.13) 0%, rgba(255, 255, 255, 0) 100%);">
              <span class="material-symbols-outlined text-primary/30 text-6xl">code</span>
            </div> -->
            <div class="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 p-8">
              <div class="inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                اختيار من متعدد
              </div>
              <h3 class="text-text-main text-xl lg:text-2xl font-bold leading-relaxed tracking-tight">
                ما هي لغة البرمجة المستخدمة في تطوير تطبيقات الأندرويد بشكل أساسي وتعتبر اللغة الرسمية المدعومة من جوجل حالياً؟
              </h3>
              <p class="text-text-muted text-base font-normal">اختر إجابة واحدة صحيحة من الخيارات التالية:</p>
            </div>
            
            <div class="flex flex-col gap-4 p-8 pt-0 radio-dot">
              <label class="group flex items-center gap-4 rounded-xl border-2 border-solid border-border-base p-4 flex-row-reverse cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
                <input checked class="h-6 w-6 border-2 border-border-base bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-primary appearance-none" name="quiz-option" type="radio"/>
                <div class="flex grow flex-col">
                  <p class="text-text-main text-base font-semibold group-hover:text-primary transition-colors">Kotlin (كوتلن)</p>
                </div>
              </label>
              <label class="group flex items-center gap-4 rounded-xl border-2 border-solid border-border-base p-4 flex-row-reverse cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
                <input class="h-6 w-6 border-2 border-border-base bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-primary appearance-none" name="quiz-option" type="radio"/>
                <div class="flex grow flex-col">
                  <p class="text-text-main text-base font-semibold group-hover:text-primary transition-colors">Swift (سويفت)</p>
                </div>
              </label>
              <label class="group flex items-center gap-4 rounded-xl border-2 border-solid border-border-base p-4 flex-row-reverse cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
                <input class="h-6 w-6 border-2 border-border-base bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-primary appearance-none" name="quiz-option" type="radio"/>
                <div class="flex grow flex-col">
                  <p class="text-text-main text-base font-semibold group-hover:text-primary transition-colors">Python (بايثون)</p>
                </div>
              </label>
              <label class="group flex items-center gap-4 rounded-xl border-2 border-solid border-border-base p-4 flex-row-reverse cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
                <input class="h-6 w-6 border-2 border-border-base bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-primary appearance-none" name="quiz-option" type="radio"/>
                <div class="flex grow flex-col">
                  <p class="text-text-main text-base font-semibold group-hover:text-primary transition-colors">C++ (سي بلس بلس)</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex items-center justify-between mt-4">
          <button class="flex items-center justify-center gap-2 min-w-[120px] px-6 h-12 rounded-lg border-2 border-border-base text-text-main text-base font-bold hover:bg-bg-surface-hover transition-colors cursor-pointer">
            <span class="material-symbols-outlined">arrow_forward</span>
            <span>السابق</span>
          </button>
          <div class="flex gap-4">
            <button class="flex items-center justify-center gap-2 min-w-[120px] px-6 h-12 rounded-lg border-2 border-primary/20 bg-primary/5 text-primary text-base font-bold hover:bg-primary/10 transition-colors cursor-pointer">
              <span>تخطي</span>
            </button>
            <button class="flex items-center justify-center gap-2 min-w-[140px] px-8 h-12 rounded-lg bg-primary text-white text-base font-bold hover:bg-primary/90 shadow-md shadow-primary/20 transition-all cursor-pointer">
              <span>التالي</span>
              <span class="material-symbols-outlined">arrow_back</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Assignments Tab Content (Component) -->
    <div v-else-if="activeTab === 'assignments'" class="w-full py-8">
      <Assignments />
    </div>
    </template>

    <Toast :show="showToast" :title="toastTitle" :message="toastMessage" :type="toastType" @close="showToast = false" />
  </div>
</template>

<script setup>
import { studentApi } from '@/api/student';
import { coursesApi } from '@/api/courses';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Assignments from './Assignments.vue';
import Toast from '@/components/common/Toast.vue';

const route = useRoute();
const router = useRouter();
const activeTab = ref('content');
const course = ref(null);
const isLoading = ref(true);
const isEnrolling = ref(false);

const showToast = ref(false);
const toastTitle = ref('');
const toastMessage = ref('');
const toastType = ref('error');

const fetchCourse = async () => {
  isLoading.value = true;
  try {
    const { data } = await studentApi.getCourseDetails(route.params.id);
    course.value = data.data || data;
    course.value.is_enrolled = true;
  } catch (error) {
    if (error.response?.status === 403 || error.response?.status === 401) {
       try {
          const publicRes = await coursesApi.getCourse(route.params.id);
          course.value = publicRes.data.data || publicRes.data;
          course.value.is_enrolled = false;
       } catch (innerErr) {
          console.error('[CourseDetails] Failed to load public data:', innerErr);
          course.value = null;
       }
    } else {
       console.error('[CourseDetails] Failed to load:', error);
       course.value = null;
    }
  } finally {
    isLoading.value = false;
  }
};

const enrollInCourse = async () => {
    isEnrolling.value = true;
    showToast.value = false;
    try {
        await studentApi.enrollInCourse(course.value.id);
        
        toastType.value = 'success';
        toastTitle.value = 'نجاح';
        toastMessage.value = 'تم الانضمام للمقرر بنجاح! يمكنك الآن بدء التعلم.';
        showToast.value = true;

        await fetchCourse();
    } catch (e) {
        console.error("Enrollment failed", e);
        toastType.value = 'error';
        toastTitle.value = 'خطأ في التسجيل';
        toastMessage.value = e.response?.data?.message || 'فشل التسجيل في المقرر، يرجى المحاولة لاحقاً';
        showToast.value = true;
    } finally {
        isEnrolling.value = false;
    }
};

onMounted(() => {
  fetchCourse();
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
</style>
