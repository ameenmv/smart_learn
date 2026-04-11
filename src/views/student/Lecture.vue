<template>
  <div class="max-w-[1440px] mx-auto font-display h-full flex flex-col">
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

    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 mb-6 text-sm flex-shrink-0">
      <RouterLink class="text-text-muted hover:text-primary transition-colors" to="/student/my-courses">مقرراتي</RouterLink>
      <span class="text-text-muted material-symbols-outlined text-base">chevron_left</span>
      <RouterLink class="text-text-muted hover:text-primary transition-colors" :to="`/student/courses/${courseId}`">{{ course?.title || 'جاري التحميل...' }}</RouterLink>
      <span class="text-text-muted material-symbols-outlined text-base">chevron_left</span>
      <span class="font-semibold text-primary">{{ lecture ? lecture.title : 'جاري التحميل...' }}</span>
    </nav>

    <div class="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
      <!-- Sidebar (Course Content) -->
      <aside class="w-full lg:w-80 flex-shrink-0 flex flex-col">
        <div class="bg-bg-surface rounded-xl border border-border-base overflow-hidden flex flex-col h-full max-h-[calc(100vh-140px)] sticky top-0 transition-colors duration-300">
          <div class="p-4 border-b border-border-base flex-shrink-0">
            <h3 class="font-bold text-lg mb-1 text-text-main">محتوى الدورة</h3>
            <div class="flex items-center justify-between text-xs text-text-muted">
              <span>{{ course?.completed_lectures || 0 }} من أصل {{ course?.total_lectures || 0 }} درساً مكتمل</span>
              <span class="font-bold text-primary">{{ course?.progress || 0 }}%</span>
            </div>
            <div class="w-full bg-bg-surface-hover h-1.5 rounded-full mt-2 overflow-hidden">
              <div class="bg-primary h-full rounded-full" :style="`width: ${course?.progress || 0}%`"></div>
            </div>
          </div>
          
          <div class="overflow-y-auto flex-1 no-scrollbar pt-2">
            <div class="p-2 space-y-1">
                <template v-if="course?.lectures">
                  <RouterLink 
                      v-for="(lec, index) in course.lectures" 
                      :key="lec.id"
                      :to="`/student/courses/${courseId}/lecture/${lec.id}`"
                      class="flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer"
                      :class="String(lec.id) === String(lectureId) ? 'bg-primary/10 border-r-4 border-primary' : 'hover:bg-bg-surface-hover text-text-main'"
                  >
                    <span class="material-symbols-outlined" :class="String(lec.id) === String(lectureId) ? 'text-primary' : (lec.is_completed ? 'text-green-500' : 'text-text-muted')" style="font-variation-settings: 'FILL' 1">
                        {{ String(lec.id) === String(lectureId) ? 'play_circle' : (lec.is_completed ? 'check_circle' : 'play_circle') }}
                    </span>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-bold truncate" :class="String(lec.id) === String(lectureId) ? 'text-primary' : ''">{{ index + 1 }}. {{ lec.title }}</p>
                      <p class="text-[10px] text-text-muted">{{ lec.video_duration || '0' }} دقيقة</p>
                    </div>
                  </RouterLink>
                </template>
                <div v-else class="text-center py-4 text-text-muted text-sm">
                    جاري التحميل...
                </div>
            </div>
          </div>
          
          <div class="p-4 border-t border-border-base flex-shrink-0">
            <button class="w-full py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors cursor-pointer shadow-sm">
              خارطة الطريق التعليمية
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <div class="flex-1 min-w-0 overflow-y-auto no-scrollbar pr-1">
        <!-- Video Player -->
        <div class="bg-black rounded-xl overflow-hidden shadow-2xl relative group min-h-[200px] flex justify-center items-center">
          <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
            <span class="size-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></span>
          </div>

          <template v-if="lecture?.video?.url">
             <iframe v-if="lecture.video.url.includes('youtube') || lecture.video.url.includes('youtu.be')" 
                 :src="lecture.video.url.includes('watch?v=') ? lecture.video.url.replace('watch?v=', 'embed/') : lecture.video.url.replace('youtu.be/', 'youtube.com/embed/')" 
                 class="w-full aspect-video" 
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen>
             </iframe>
             <video v-else :src="lecture.video.url" controls class="w-full aspect-video"></video>
          </template>
          <div v-else class="aspect-video relative bg-bg-surface-hover w-full flex items-center justify-center">
            <span class="text-text-muted">لا يوجد فيديو</span>
          </div>
        </div>

        <!-- Info & Actions -->
        <div class="mt-6 flex flex-wrap items-start justify-between gap-4">
          <div class="flex-1">
            <h1 class="text-2xl lg:text-3xl font-bold mb-2 text-text-main">{{ lecture?.title }}</h1>
            <div class="flex items-center gap-4 text-text-muted text-sm flex-wrap">
              <div class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">person</span>
                <span>{{ lecture?.instructor?.name || 'المدرب' }}</span>
              </div>
              <span>•</span>
              <div class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">schedule</span>
                <span>{{ lecture?.video?.duration || 0 }} دقيقة</span>
              </div>
            </div>
            <p v-if="lecture?.description" class="text-sm text-text-muted mt-3 mb-2 max-w-3xl leading-relaxed">{{ lecture.description }}</p>
          </div>
          <div class="flex gap-2 shrink-0">
            <a v-if="lecture?.attachment" :href="lecture.attachment" target="_blank" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-surface-hover text-text-main text-sm font-medium hover:bg-border-base transition-colors cursor-pointer border border-border-base">
              <span class="material-symbols-outlined">download</span>
              الملخص
            </a>
            <button v-else disabled class="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-surface text-text-muted text-sm font-medium border border-border-base opacity-50 cursor-not-allowed">
              <span class="material-symbols-outlined">download</span>
              لا يوجد ملخص
            </button>

            <button @click="markComplete" :disabled="isCompleting || lecture?.student_progress?.is_completed" 
                    class="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-bold transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    :class="lecture?.student_progress?.is_completed ? 'bg-green-500 hover:bg-green-600' : 'bg-primary hover:bg-primary/90 cursor-pointer'">
              <span v-if="isCompleting" class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span v-else class="material-symbols-outlined">{{ lecture?.student_progress?.is_completed ? 'done_all' : 'check' }}</span>
              <span>{{ isCompleting ? 'جاري التحديث...' : (lecture?.student_progress?.is_completed ? 'مكتمل' : 'تحديد كمكتمل') }}</span>
            </button>
          </div>
        </div>

        <!-- Notes Tabs -->
        <div class="mt-10">
          <div class="flex items-center gap-8 border-b border-border-base mb-6 overflow-x-auto no-scrollbar">
            <button class="pb-4 text-sm font-bold border-b-2 border-primary text-primary flex items-center gap-2 whitespace-nowrap cursor-pointer">
              <span class="material-symbols-outlined">description</span>
              ملاحظات الدرس
            </button>
            <button class="pb-4 text-sm font-bold text-text-muted hover:text-text-main flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors">
              <span class="material-symbols-outlined">forum</span>
              الأسئلة والأجوبة
              <span class="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">3</span>
            </button>
            <button class="pb-4 text-sm font-bold text-text-muted hover:text-text-main flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors">
              <span class="material-symbols-outlined">folder_open</span>
              المصادر الإضافية
            </button>
          </div>

          <!-- Notes Content -->
          <div class="bg-bg-surface rounded-xl border border-border-base p-6 transition-colors duration-300">
            <div class="flex items-center justify-between mb-4">
              <h4 class="font-bold text-text-main">مفكرة الطالب</h4>
              <span class="text-xs text-text-muted">تم الحفظ تلقائياً: 12:30 م</span>
            </div>
            <textarea v-model="noteContent" :disabled="isSavingNote" class="w-full min-h-[150px] border-none bg-bg-surface-hover rounded-lg p-4 text-sm focus:ring-1 focus:ring-primary mb-4 text-text-main placeholder:text-text-muted outline-none transition-colors disabled:opacity-50" placeholder="اكتب ملاحظاتك هنا... سيتم ربط الملاحظة بالوقت الحالي للفيديو"></textarea>
            <div class="flex justify-end mb-6">
                <button @click="saveNote" :disabled="!noteContent.trim() || isSavingNote" class="flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                    <span v-if="isSavingNote" class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>{{ isSavingNote ? 'جاري الحفظ...' : 'حفظ الملاحظة' }}</span>
                </button>
            </div>
            
            <div class="space-y-4" v-if="lecture?.notes?.length > 0">
              <div v-for="note in lecture.notes" :key="note.id" class="flex items-start gap-3 p-3 bg-bg-base rounded-lg border-r-4 border-primary/40 transition-colors">
                <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded cursor-pointer hover:bg-primary/20">{{ note.timestamp_seconds ? formatTime(note.timestamp_seconds) : '0:00' }}</span>
                <p class="text-sm text-text-main">{{ note.content }}</p>
              </div>
            </div>
            <div v-else class="text-center py-8 text-text-muted text-sm">
                لا توجد ملاحظات لهذه المحاضرة بعد.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- AI Assistant Floating Button -->
    <div class="fixed bottom-6 left-6 z-50">
      <button class="size-14 rounded-full bg-primary text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform group relative cursor-pointer">
        <span class="material-symbols-outlined !text-3xl">smart_toy</span>
        <div class="absolute bottom-full mb-3 left-0 bg-bg-surface text-text-main text-xs font-bold py-2 px-3 rounded-lg shadow-lg whitespace-nowrap hidden group-hover:block border border-border-base">
          مساعد الذكاء الاصطناعي
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { studentApi } from '@/api/student';
import { onMounted, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const courseId = route.params.courseId;
const lectureId = ref(route.params.lectureId);

const course = ref(null);
const lecture = ref(null);
const isLoading = ref(true);
const isCompleting = ref(false);
const noteContent = ref('');
const isSavingNote = ref(false);

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

const fetchCourse = async () => {
    try {
        const { data } = await studentApi.getCourseDetails(courseId);
        course.value = data.data || data;
    } catch (error) {
        console.error('[Course] Failed to load:', error);
    }
};

const fetchLecture = async (idToFetch = lectureId.value) => {
    isLoading.value = true;
    try {
        const { data } = await studentApi.getLecture(courseId, idToFetch);
        lecture.value = data.data || data;
    } catch (error) {
        console.error('[Lecture] Failed to load:', error);
        showToast('خطأ', 'فشل تحميل بيانات المحاضرة', 'error');
    } finally {
        isLoading.value = false;
    }
};

watch(() => route.params.lectureId, (newId) => {
    if (newId && newId !== lectureId.value) {
        lectureId.value = newId;
        fetchLecture(newId);
    }
});

const markComplete = () => {
    if (lecture.value?.student_progress?.is_completed) return;
    
    isCompleting.value = true;
    // No dedicated API endpoint for mark-complete yet
    setTimeout(() => {
        isCompleting.value = false;
        if (lecture.value && lecture.value.student_progress) {
             lecture.value.student_progress.is_completed = true;
        } else if (lecture.value) {
             lecture.value.student_progress = { is_completed: true };
        }
        showToast('أحسنت!', 'تم تحديد المحاضرة كمكتملة');
    }, 1000);
};

const formatTime = (seconds) => {
    if (!seconds) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
};

const saveNote = async () => {
    if (!noteContent.value.trim()) return;
    isSavingNote.value = true;
    try {
        const { data } = await studentApi.addLectureNote(lectureId, { content: noteContent.value.trim(), timestamp_seconds: 0 });
        
        if (lecture.value) {
            if (!lecture.value.notes) lecture.value.notes = [];
            lecture.value.notes.unshift(data.data);
        }
        
        showToast('تم الحفظ', 'تم حفظ الملاحظة بنجاح');
        noteContent.value = '';
    } catch (error) {
        console.error('[Lecture] Save note failed:', error);
        showToast('خطأ', 'فشل حفظ الملاحظة', 'error');
    } finally {
        isSavingNote.value = false;
    }
};

onMounted(() => {
    fetchCourse();
    fetchLecture();
});
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
