<template>
  <div class="flex flex-col min-h-screen bg-bg-base text-text-main transition-colors duration-300">
    <!-- Header -->
    <header
      class="sticky top-0 z-10 bg-bg-surface/80 backdrop-blur-md border-b border-border-base px-8 h-16 flex items-center justify-between transition-colors duration-300">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-3">
          <div class="flex items-center justify-center w-10 h-10 bg-primary rounded-[10px]">
            <span class="material-symbols-outlined text-white text-[24px]">school</span>
          </div>
          <span class="text-2xl font-bold text-text-main tracking-tight font-[Inter]">Smart Learn</span>
        </div>
        <div class="w-px h-6 bg-border-base mx-2 hidden md:block"></div>
        <h2 class="text-xl font-black tracking-tight hidden md:block text-text-main">إضافة محاضرة</h2>
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
    <div class="p-8 max-w-[800px] mx-auto w-full">
      <nav class="flex items-center gap-2 text-sm text-text-muted mb-6">
        <RouterLink to="/instructor/courses" class="hover:text-primary transition-colors cursor-pointer">إدارة الدورات
        </RouterLink>
        <span class="material-symbols-outlined text-xs">chevron_left</span>
        <span class="text-text-main font-semibold">إضافة محاضرة</span>
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

      <!-- ═══════════════ STEP 1: Lecture Info ═══════════════ -->
      <div v-if="currentStep === 0" class="space-y-6">
        <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm">
          <div class="flex items-center gap-3 mb-6">
            <div class="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <span class="material-symbols-outlined">video_library</span>
            </div>
            <h3 class="text-lg font-black text-text-main">بيانات المحاضرة</h3>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <div>
              <label class="block text-sm font-bold mb-2 text-text-main">عنوان المحاضرة <span
                  class="text-red-500">*</span></label>
              <input v-model="lectureForm.title" type="text"
                class="w-full h-12 px-4 rounded-xl border bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
                :class="getError('title') ? 'border-red-400' : 'border-border-base'"
                placeholder="أدخل عنوان المحاضرة هنا..." />
              <p v-if="getError('title')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('title') }}</p>
            </div>
            <div>
              <label class="block text-sm font-bold mb-2 text-text-main">الوصف <span
                  class="text-red-500">*</span></label>
              <textarea v-model="lectureForm.description" rows="3"
                class="w-full px-4 py-3 rounded-xl border bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
                :class="getError('description') ? 'border-red-400' : 'border-border-base'"
                placeholder="وصف قصير للمحتوى التعليمي..."></textarea>
              <p v-if="getError('description')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('description')
              }}</p>
            </div>
            <div>
              <label class="block text-sm font-bold mb-2 text-text-main">المحتوى</label>
              <textarea v-model="lectureForm.content" rows="5"
                class="w-full px-4 py-3 rounded-xl border border-border-base bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-y min-h-[120px] placeholder:text-text-muted/50"
                placeholder="اكتب محتوى المحاضرة هنا..."></textarea>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-bold mb-2 text-text-main">الترتيب</label>
                <input v-model.number="lectureForm.order" type="number" min="1" dir="ltr"
                  class="w-full h-12 px-4 rounded-xl border border-border-base bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
              </div>
            </div>

            <!-- Attachment Upload -->
            <div>
              <label class="block text-sm font-bold mb-2 text-text-main">المرفقات (PDF / PowerPoint)</label>
              <div v-if="!attachmentFile" @click="$refs.fileInput.click()" @dragover.prevent="isDragging = true"
                @dragleave.prevent="isDragging = false" @drop.prevent="handleDrop"
                class="border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 group"
                :class="isDragging ? 'border-primary bg-primary/5 scale-[1.01]' : getError('attachment') ? 'border-red-400 bg-red-50/5' : 'border-border-base bg-bg-base/50 hover:border-primary/50 hover:bg-primary/5'">
                <input type="file" ref="fileInput" hidden accept=".pdf,.ppt,.pptx" @change="handleFileSelect" />
                <div
                  class="size-14 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  :class="isDragging ? 'bg-primary/20' : 'bg-primary/10'">
                  <span class="material-symbols-outlined text-primary text-2xl">cloud_upload</span>
                </div>
                <p class="text-sm font-bold mb-1 text-text-main">اسحب وأفلت الملف هنا</p>
                <p class="text-xs text-text-muted">أو اضغط للتصفح • PDF, PPTX • الحد الأقصى 50 ميجابايت</p>
              </div>
              <!-- File Preview -->
              <div v-else
                class="flex items-center gap-4 p-4 rounded-2xl border border-border-base bg-bg-base transition-all">
                <div class="size-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  :class="attachmentFile.name.endsWith('.pdf') ? 'bg-red-100 dark:bg-red-900/30' : 'bg-orange-100 dark:bg-orange-900/30'">
                  <span class="material-symbols-outlined text-xl"
                    :class="attachmentFile.name.endsWith('.pdf') ? 'text-red-500' : 'text-orange-500'">
                    {{ attachmentFile.name.endsWith('.pdf') ? 'picture_as_pdf' : 'slideshow' }}
                  </span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-bold text-text-main truncate">{{ attachmentFile.name }}</p>
                  <p class="text-xs text-text-muted">{{ formatFileSize(attachmentFile.size) }}</p>
                </div>
                <button @click="removeFile" type="button"
                  class="size-8 rounded-lg flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/20 text-text-muted hover:text-red-500 transition-all cursor-pointer">
                  <span class="material-symbols-outlined text-lg">close</span>
                </button>
              </div>
              <p v-if="getError('attachment')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('attachment')
              }}</p>
            </div>
          </div>
        </div>
        <!-- Actions -->
        <div class="flex justify-end gap-3">
          <button @click="submitStep1('draft')" :disabled="isSubmitting"
            class="px-6 py-3 rounded-xl border border-border-base font-bold text-sm hover:bg-bg-base transition-colors cursor-pointer text-text-main disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
            <span v-if="isSubmitting && submitType === 'draft'"
              class="size-4 border-2 border-text-muted/30 border-t-text-main rounded-full animate-spin"></span>
            حفظ كمسودة
          </button>
          <button @click="submitStep1('active')" :disabled="isSubmitting"
            class="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
            <span v-if="isSubmitting && submitType === 'active'"
              class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            التالي: رفع الفيديو
            <span v-if="!isSubmitting" class="material-symbols-outlined text-lg">arrow_back</span>
          </button>
        </div>
      </div>

      <!-- ═══════════════ STEP 2: Upload Video ═══════════════ -->
      <div v-if="currentStep === 1" class="space-y-6">
        <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm">
          <div class="flex items-center gap-3 mb-6">
            <div class="size-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <span class="material-symbols-outlined">videocam</span>
            </div>
            <h3 class="text-lg font-black text-text-main">رفع الفيديو</h3>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <div>
              <label class="block text-sm font-bold mb-2 text-text-main">رابط الفيديو (YouTube أو غيره)</label>
              <input v-model="videoForm.video_url" type="url" dir="ltr"
                class="w-full h-12 px-4 rounded-xl border border-border-base bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
                :class="getError('video_url') ? 'border-red-400' : 'border-border-base'"
                placeholder="https://youtube.com/watch?v=..." />
              <p v-if="getError('video_url')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('video_url') }}
              </p>
            </div>
            <div>
              <label class="block text-sm font-bold mb-2 text-text-main">ملف الفيديو</label>
              <div v-if="!videoFile" @click="$refs.videoFileInput.click()" @dragover.prevent="isVideoDragging = true"
                @dragleave.prevent="isVideoDragging = false" @drop.prevent="handleVideoDrop"
                class="border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 group"
                :class="isVideoDragging ? 'border-blue-500 bg-blue-500/5 scale-[1.01]' : getError('video_path') ? 'border-red-400 bg-red-50/5' : 'border-border-base bg-bg-base/50 hover:border-blue-500/50 hover:bg-blue-500/5'">
                <input type="file" ref="videoFileInput" hidden accept="video/*" @change="handleVideoFileSelect" />
                <div
                  class="size-14 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  :class="isVideoDragging ? 'bg-blue-500/20' : 'bg-blue-500/10'">
                  <span class="material-symbols-outlined text-blue-500 text-2xl">video_file</span>
                </div>
                <p class="text-sm font-bold mb-1 text-text-main">اسحب وأفلت ملف الفيديو هنا</p>
                <p class="text-xs text-text-muted">أو اضغط للتصفح • MP4, WebM, MOV</p>
              </div>
              <!-- File Preview -->
              <div v-else
                class="flex items-center gap-4 p-4 rounded-2xl border border-border-base bg-bg-base transition-all">
                <div
                  class="size-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-100 dark:bg-blue-900/30">
                  <span class="material-symbols-outlined text-xl text-blue-500">movie</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-bold text-text-main truncate">{{ videoFile.name }}</p>
                  <p class="text-xs text-text-muted">{{ formatFileSize(videoFile.size) }}</p>
                </div>
                <button @click="videoFile = null" type="button"
                  class="size-8 rounded-lg flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/20 text-text-muted hover:text-red-500 transition-all cursor-pointer">
                  <span class="material-symbols-outlined text-lg">close</span>
                </button>
              </div>
              <p v-if="getError('video_path')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('video_path')
              }}</p>
            </div>
            <div>
              <label class="block text-sm font-bold mb-2 text-text-main">مدة الفيديو</label>
              <input v-model="videoForm.video_duration" type="text" dir="ltr"
                class="w-full h-12 px-4 rounded-xl border border-border-base bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
                :class="getError('video_duration') ? 'border-red-400' : 'border-border-base'" placeholder="15:30" />
              <p v-if="getError('video_duration')" class="mt-1.5 text-xs text-red-500 font-bold">{{
                getError('video_duration') }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-between gap-3">
          <button @click="skipStep"
            class="px-6 py-3 rounded-xl border border-border-base font-bold text-sm hover:bg-bg-base transition-colors cursor-pointer text-text-muted">
            تخطي هذه الخطوة
          </button>
          <button @click="submitStep2" :disabled="isSubmitting"
            class="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
            <span v-if="isSubmitting"
              class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            التالي: الشهادة
            <span v-if="!isSubmitting" class="material-symbols-outlined text-lg">arrow_back</span>
          </button>
        </div>
      </div>

      <!-- ═══════════════ STEP 3: Certificate Template ═══════════════ -->
      <div v-if="currentStep === 2" class="space-y-6">
        <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm">
          <div class="flex items-center gap-3 mb-6">
            <div class="size-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <span class="material-symbols-outlined">workspace_premium</span>
            </div>
            <h3 class="text-lg font-black text-text-main">قالب الشهادة</h3>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <div>
              <label class="block text-sm font-bold mb-2 text-text-main">قالب الشهادة (PDF)</label>
              <div v-if="!certTemplateFile" @click="$refs.certFileInput.click()"
                @dragover.prevent="isCertDragging = true" @dragleave.prevent="isCertDragging = false"
                @drop.prevent="handleCertDrop"
                class="border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 group"
                :class="isCertDragging ? 'border-amber-500 bg-amber-500/5 scale-[1.01]' : getError('template') ? 'border-red-400 bg-red-50/5' : 'border-border-base bg-bg-base/50 hover:border-amber-500/50 hover:bg-amber-500/5'">
                <input type="file" ref="certFileInput" hidden accept=".pdf" @change="handleCertFileSelect" />
                <div
                  class="size-14 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  :class="isCertDragging ? 'bg-amber-500/20' : 'bg-amber-500/10'">
                  <span class="material-symbols-outlined text-amber-500 text-2xl">upload_file</span>
                </div>
                <p class="text-sm font-bold mb-1 text-text-main">اسحب وأفلت قالب الشهادة هنا</p>
                <p class="text-xs text-text-muted">أو اضغط للتصفح • PDF فقط • الحد الأقصى 50 ميجابايت</p>
              </div>
              <!-- File Preview -->
              <div v-else
                class="flex items-center gap-4 p-4 rounded-2xl border border-border-base bg-bg-base transition-all">
                <div
                  class="size-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-red-100 dark:bg-red-900/30">
                  <span class="material-symbols-outlined text-xl text-red-500">picture_as_pdf</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-bold text-text-main truncate">{{ certTemplateFile.name }}</p>
                  <p class="text-xs text-text-muted">{{ formatFileSize(certTemplateFile.size) }}</p>
                </div>
                <button @click="certTemplateFile = null" type="button"
                  class="size-8 rounded-lg flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/20 text-text-muted hover:text-red-500 transition-all cursor-pointer">
                  <span class="material-symbols-outlined text-lg">close</span>
                </button>
              </div>
              <p v-if="getError('template')" class="mt-1.5 text-xs text-red-500 font-bold">{{ getError('template') }}
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="flex items-center gap-3 p-4 rounded-xl border border-border-base bg-bg-base">
                <input type="checkbox" v-model="certForm.enabled" true-value="1" false-value="0"
                  class="size-5 accent-primary cursor-pointer" id="cert-enabled" />
                <label for="cert-enabled" class="text-sm font-bold text-text-main cursor-pointer">تفعيل الشهادة</label>
              </div>
              <div class="flex items-center gap-3 p-4 rounded-xl border border-border-base bg-bg-base">
                <input type="checkbox" v-model="certForm.auto_send" true-value="1" false-value="0"
                  class="size-5 accent-primary cursor-pointer" id="cert-auto" />
                <label for="cert-auto" class="text-sm font-bold text-text-main cursor-pointer">إرسال تلقائي</label>
              </div>
              <div class="flex items-center gap-3 p-4 rounded-xl border border-border-base bg-bg-base">
                <input type="checkbox" v-model="certForm.has_qr" true-value="1" false-value="0"
                  class="size-5 accent-primary cursor-pointer" id="cert-qr" />
                <label for="cert-qr" class="text-sm font-bold text-text-main cursor-pointer">كود QR</label>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between gap-3">
          <button @click="finishWithoutCert"
            class="px-6 py-3 rounded-xl border border-border-base font-bold text-sm hover:bg-bg-base transition-colors cursor-pointer text-text-muted">
            تخطي والإنهاء
          </button>
          <button @click="submitStep3" :disabled="isSubmitting"
            class="bg-amber-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-amber-600/25 hover:bg-amber-700 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
            <span v-if="isSubmitting"
              class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            حفظ الشهادة والإنهاء
            <span v-if="!isSubmitting" class="material-symbols-outlined text-lg">check_circle</span>
          </button>
        </div>
      </div>

      <!-- ═══════════════ DONE ═══════════════ -->
      <div v-if="currentStep === 3" class="flex flex-col items-center justify-center py-16 text-center">
        <div class="size-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
          <span class="material-symbols-outlined text-emerald-500 text-4xl">check_circle</span>
        </div>
        <h2 class="text-2xl font-black text-text-main mb-2">تم بنجاح! 🎉</h2>
        <p class="text-text-muted font-medium mb-8">تم إنشاء المحاضرة وحفظ جميع البيانات</p>
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
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const { toast, showToast, hideToast } = useToast();
const { setErrors, clearErrors, getError, getGeneralError } = useApiErrors();

const currentStep = ref(0);
const isSubmitting = ref(false);
const submitType = ref('');
const generalError = ref('');
const selectedCourseId = ref(null);
const createdLectureId = ref(null);

const steps = [
  { label: 'بيانات المحاضرة' },
  { label: 'رفع الفيديو' },
  { label: 'الشهادة' },
];

const lectureForm = reactive({
  title: '',
  description: '',
  content: '',
  order: 1,
});

const attachmentFile = ref(null);
const isDragging = ref(false);

const videoForm = reactive({
  video_url: '',
  video_duration: '',
});

const videoFile = ref(null);
const isVideoDragging = ref(false);

const certForm = reactive({
  enabled: '1',
  auto_send: '1',
  has_qr: '1',
});

const certTemplateFile = ref(null);
const isCertDragging = ref(false);

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

// ── File Upload Helpers ──────────────────────────────────────────────

const ALLOWED_TYPES = ['application/pdf', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'];
const MAX_SIZE = 50 * 1024 * 1024; // 50MB

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) validateAndSetFile(file);
}

function handleDrop(e) {
  isDragging.value = false;
  const file = e.dataTransfer.files[0];
  if (file) validateAndSetFile(file);
}

function validateAndSetFile(file) {
  if (!ALLOWED_TYPES.includes(file.type)) {
    showToast('خطأ', 'يجب أن يكون الملف PDF أو PowerPoint', 'error');
    return;
  }
  if (file.size > MAX_SIZE) {
    showToast('خطأ', 'حجم الملف يتجاوز 50 ميجابايت', 'error');
    return;
  }
  attachmentFile.value = file;
}

function removeFile() {
  attachmentFile.value = null;
}

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// ── Step 1: Create Lecture ───────────────────────────────────────────

async function submitStep1(status) {
  clearErrors();
  generalError.value = '';

  if (!selectedCourseId.value) {
    showToast('خطأ', 'لا توجد دورات. أنشئ دورة أولاً', 'error');
    return;
  }

  isSubmitting.value = true;
  submitType.value = status;

  try {
    const formData = new FormData();
    formData.append('title', lectureForm.title);
    formData.append('description', lectureForm.description);
    formData.append('content', lectureForm.content);
    formData.append('order', lectureForm.order);
    formData.append('status', status);
    if (attachmentFile.value) {
      formData.append('attachment', attachmentFile.value);
    }

    const { data } = await coursesApi.createLecture(selectedCourseId.value, formData);
    createdLectureId.value = data?.data?.id;

    showToast('تم إنشاء المحاضرة', 'تم حفظ بيانات المحاضرة بنجاح', 'success');

    if (status === 'draft') {
      setTimeout(() => router.push('/instructor/courses'), 1500);
    } else {
      currentStep.value = 1;
    }
  } catch (error) {
    setErrors(error);
    generalError.value = getGeneralError(error);
    showToast('خطأ', generalError.value, 'error');
  } finally {
    isSubmitting.value = false;
    submitType.value = '';
  }
}

// ── Video File Helpers ───────────────────────────────────────────────

function handleVideoFileSelect(e) {
  const file = e.target.files[0];
  if (file) validateAndSetVideoFile(file);
}

function handleVideoDrop(e) {
  isVideoDragging.value = false;
  const file = e.dataTransfer.files[0];
  if (file) validateAndSetVideoFile(file);
}

function validateAndSetVideoFile(file) {
  if (!file.type.startsWith('video/')) {
    showToast('خطأ', 'يجب أن يكون الملف فيديو', 'error');
    return;
  }
  videoFile.value = file;
}

// ── Step 2: Upload Video ────────────────────────────────────────────

async function submitStep2() {
  clearErrors();
  generalError.value = '';

  if (!createdLectureId.value) {
    showToast('خطأ', 'لم يتم إنشاء المحاضرة بعد', 'error');
    return;
  }

  isSubmitting.value = true;

  try {
    const formData = new FormData();
    formData.append('video_url', videoForm.video_url);
    formData.append('video_duration', videoForm.video_duration);
    if (videoFile.value) {
      formData.append('video_path', videoFile.value);
    }

    await coursesApi.uploadLectureVideo(createdLectureId.value, formData);
    showToast('تم رفع الفيديو', 'تم حفظ بيانات الفيديو بنجاح', 'success');
    currentStep.value = 2;
  } catch (error) {
    setErrors(error);
    generalError.value = getGeneralError(error);
    showToast('خطأ', generalError.value, 'error');
  } finally {
    isSubmitting.value = false;
  }
}

// ── Certificate File Helpers ──────────────────────────────────────────

function handleCertFileSelect(e) {
  const file = e.target.files[0];
  if (file) validateAndSetCertFile(file);
}

function handleCertDrop(e) {
  isCertDragging.value = false;
  const file = e.dataTransfer.files[0];
  if (file) validateAndSetCertFile(file);
}

function validateAndSetCertFile(file) {
  if (file.type !== 'application/pdf') {
    showToast('خطأ', 'يجب أن يكون القالب ملف PDF', 'error');
    return;
  }
  if (file.size > MAX_SIZE) {
    showToast('خطأ', 'حجم الملف يتجاوز 50 ميجابايت', 'error');
    return;
  }
  certTemplateFile.value = file;
}

// ── Step 3: Certificate Template ────────────────────────────────────

async function submitStep3() {
  clearErrors();
  generalError.value = '';

  if (!certTemplateFile.value) {
    showToast('خطأ', 'برجاء رفع قالب الشهادة', 'error');
    return;
  }

  isSubmitting.value = true;

  try {
    const formData = new FormData();
    formData.append('template', certTemplateFile.value);
    formData.append('enabled', certForm.enabled);
    formData.append('auto_send', certForm.auto_send);
    formData.append('has_qr', certForm.has_qr);

    await coursesApi.createCertificate(selectedCourseId.value, formData);
    showToast('تم حفظ الشهادة', 'تم إنشاء قالب الشهادة بنجاح', 'success');
    currentStep.value = 3;
  } catch (error) {
    setErrors(error);
    generalError.value = getGeneralError(error);
    showToast('خطأ', generalError.value, 'error');
  } finally {
    isSubmitting.value = false;
  }
}

// ── Skip / Finish helpers ───────────────────────────────────────────

function skipStep() {
  currentStep.value++;
}

function finishWithoutCert() {
  currentStep.value = 3;
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
