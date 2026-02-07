<template>
  <div class="flex flex-col min-h-screen">
    
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

    <header class="sticky top-0 z-10 bg-bg-surface/80 backdrop-blur-md border-b border-border-base px-8 h-16 flex items-center justify-between transition-colors duration-300">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-3">
          <div class="flex items-center justify-center w-10 h-10 bg-primary rounded-[10px]">
            <span class="material-symbols-outlined text-white text-[24px]">school</span>
          </div>
          <span class="text-2xl font-bold text-text-main tracking-tight font-[Inter]">Smart Learn</span>
        </div>
        <div class="w-px h-6 bg-border-base mx-2 hidden md:block"></div>
        <h2 class="text-xl font-black tracking-tight hidden md:block text-text-main">رفع محاضرة جديدة</h2>
      </div>
      <div class="flex items-center gap-6">
        <button @click="saveDraft" class="bg-primary text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity cursor-pointer">
          <span v-if="isSavingDraft" class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          <span>{{ isSavingDraft ? 'جاري الحفظ...' : 'حفظ كمسودة' }}</span>
        </button>
      </div>
    </header>

    <div class="p-8 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
      <div class="lg:col-span-3 space-y-6">
        <!-- Stepper -->
        <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm transition-colors duration-300">
          <div class="flex items-center justify-between relative">
            <div class="absolute top-1/2 left-0 w-full h-0.5 bg-border-base -translate-y-1/2 z-0"></div>
            
            <!-- Step 1: Basic Info -->
            <div class="relative z-10 flex flex-col items-center gap-2 group cursor-pointer" @click="currentStep = 1">
              <div :class="[
                'size-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300',
                currentStep > 1 ? 'bg-emerald-500 text-white' : (currentStep === 1 ? 'bg-primary text-white ring-4 ring-primary/20' : 'bg-bg-surface border-2 border-border-base text-gray-400')
              ]">
                <span v-if="currentStep > 1" class="material-symbols-outlined text-xl">check</span>
                <span v-else>1</span>
              </div>
              <span :class="['text-xs font-bold transition-colors', currentStep >= 1 ? 'text-primary' : 'text-gray-400']">المعلومات الأساسية</span>
            </div>

            <!-- Step 2: Upload Video -->
            <div class="relative z-10 flex flex-col items-center gap-2 cursor-pointer" @click="currentStep = 2">
               <div :class="[
                'size-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300',
                currentStep > 2 ? 'bg-emerald-500 text-white' : (currentStep === 2 ? 'bg-primary text-white ring-4 ring-primary/20' : 'bg-bg-surface border-2 border-border-base text-gray-400')
              ]">
                <span v-if="currentStep > 2" class="material-symbols-outlined text-xl">check</span>
                <span v-else>2</span>
              </div>
              <span :class="['text-xs font-bold transition-colors', currentStep >= 2 ? 'text-primary' : 'text-gray-400']">تحميل الفيديو</span>
            </div>

            <!-- Step 3: Create Assignment -->
            <div class="relative z-10 flex flex-col items-center gap-2 cursor-pointer" @click="currentStep = 3">
               <div :class="[
                'size-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300',
                currentStep > 3 ? 'bg-emerald-500 text-white' : (currentStep === 3 ? 'bg-primary text-white ring-4 ring-primary/20' : 'bg-bg-surface border-2 border-border-base text-gray-400')
              ]">
                <span v-if="currentStep > 3" class="material-symbols-outlined text-xl">check</span>
                <span v-else>3</span>
              </div>
              <span :class="['text-xs font-bold transition-colors', currentStep >= 3 ? 'text-primary' : 'text-gray-400']">إنشاء واجب</span>
            </div>

            <!-- Step 4: Certificate -->
            <div class="relative z-10 flex flex-col items-center gap-2 cursor-pointer" @click="currentStep = 4">
               <div :class="[
                'size-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300',
                currentStep > 4 ? 'bg-emerald-500 text-white' : (currentStep === 4 ? 'bg-primary text-white ring-4 ring-primary/20' : 'bg-bg-surface border-2 border-border-base text-gray-400')
              ]">
                <span v-if="currentStep > 4" class="material-symbols-outlined text-xl">check</span>
                <span v-else>4</span>
              </div>
              <span :class="['text-xs font-bold transition-colors', currentStep >= 4 ? 'text-primary' : 'text-gray-400']">إصدار الشهادة</span>
            </div>
          </div>
        </div>

        <!-- Step 2 Content: Upload Video -->
        <div v-if="currentStep === 2" class="space-y-6">
          <div class="bg-bg-surface border-2 border-dashed border-primary/30 rounded-3xl p-12 text-center transition-colors duration-300"
              @dragover.prevent
              @drop.prevent="handleDrop">
            
            <div v-if="!videoFile" class="max-w-md mx-auto">
              <input 
                type="file" 
                ref="fileInput" 
                class="hidden" 
                accept="video/mp4,video/x-m4v,video/*" 
                @change="handleFileSelect"
              />
              <div 
                class="size-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-primary/20 transition-colors"
                @click="$refs.fileInput.click()"
              >
                <span class="material-symbols-outlined text-4xl text-primary">cloud_upload</span>
              </div>
              <h3 class="text-2xl font-black mb-2 text-text-main">قم برفع فيديو المحاضرة</h3>
              <p class="text-text-muted mb-8">اسحب وأفلت الملف هنا أو انقر لاختيار ملف من جهازك. يدعم MP4, MKV, MOV بحد أقصى 2 جيجابايت.</p>
            </div>

            <div v-else class="max-w-md mx-auto">
              <div class="bg-bg-base/50 rounded-2xl p-6 border border-border-base transition-colors duration-300">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2 overflow-hidden">
                    <span class="material-symbols-outlined text-primary">movie</span>
                    <span class="font-bold text-sm truncate text-text-main">{{ videoFile.name }}</span>
                  </div>
                  <span class="text-xs font-bold text-primary">{{ uploadProgress }}%</span>
                </div>
                <div class="w-full h-2 bg-border-base rounded-full overflow-hidden">
                  <div class="h-full bg-primary transition-all duration-300" :style="{ width: uploadProgress + '%' }"></div>
                </div>
                <div class="flex justify-between mt-3 text-[10px] text-text-muted font-medium">
                  <span>{{ uploadSpeed }}</span>
                  <span>{{ remainingTime }}</span>
                </div>
              </div>
              <div class="mt-8 flex items-center justify-center gap-4">
                <button 
                  @click="cancelUpload"
                  class="px-8 py-3 rounded-xl border border-border-base font-bold hover:bg-bg-surface-hover transition-colors text-text-main cursor-pointer"
                >
                  إلغاء
                </button>
                <button 
                  class="bg-primary text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="uploadProgress < 100"
                  @click="currentStep = 3"
                >
                  التالي
                </button>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-bg-surface p-4 rounded-xl border border-border-base flex items-center gap-4 transition-colors duration-300">
              <div class="size-10 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center text-amber-600">
                <span class="material-symbols-outlined">subtitles</span>
              </div>
              <div>
                <p class="text-sm font-bold text-text-main">توليد ترجمة تلقائية</p>
                <p class="text-xs text-text-muted">استخدام الذكاء الاصطناعي لكتابة النصوص</p>
              </div>
              <input :checked="true" class="mr-auto rounded text-primary focus:ring-primary bg-bg-surface border-border-base cursor-pointer" type="checkbox"/>
            </div>
            <div class="bg-bg-surface p-4 rounded-xl border border-border-base flex items-center gap-4 transition-colors duration-300">
              <div class="size-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-primary">
                <span class="material-symbols-outlined">high_quality</span>
              </div>
              <div>
                <p class="text-sm font-bold text-text-main">تحسين جودة الفيديو</p>
                <p class="text-xs text-text-muted">ضغط الفيديو مع الحفاظ على دقة 4K</p>
              </div>
              <input :checked="true" class="mr-auto rounded text-primary focus:ring-primary bg-bg-surface border-border-base cursor-pointer" type="checkbox"/>
            </div>
          </div>
        </div>

        <!-- Step 3 Content: Create Assignment -->
        <div v-if="currentStep === 3" class="space-y-6">
          <div class="bg-bg-surface rounded-3xl p-8 border border-border-base transition-colors duration-300">
            <div class="flex items-center gap-3 mb-8">
               <div class="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <span class="material-symbols-outlined text-2xl">assignment_add</span>
              </div>
              <div>
                <h3 class="text-2xl font-black text-text-main">إنشاء واجب جديد</h3>
                <p class="text-text-muted text-sm">قم بتعبئة تفاصيل الواجب وتحديده للطلاب بدقة</p>
              </div>
            </div>

            <div class="space-y-6 max-w-3xl">
              <div class="space-y-2">
                <label class="text-sm font-bold text-text-main block">عنوان الواجب <span class="text-red-500">*</span></label>
                <input 
                  type="text" 
                  class="w-full bg-bg-base/50 border border-border-base rounded-xl px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-text-muted/50"
                  placeholder="مثال: تحليل الخوارزميات الجزء الأول"
                />
              </div>

              <div class="space-y-2">
                <label class="text-sm font-bold text-text-main block">الوصف والتعليمات <span class="text-red-500">*</span></label>
                <div class="border border-border-base rounded-xl overflow-hidden bg-bg-base/50 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                  <div class="flex items-center gap-1 bg-bg-surface border-b border-border-base p-2">
                     <button class="p-1.5 rounded-lg hover:bg-bg-base transition-colors text-text-muted hover:text-text-main">
                      <span class="material-symbols-outlined text-[20px]">image</span>
                    </button>
                    <button class="p-1.5 rounded-lg hover:bg-bg-base transition-colors text-text-muted hover:text-text-main">
                      <span class="material-symbols-outlined text-[20px]">link</span>
                    </button>
                    <div class="w-px h-4 bg-border-base mx-1"></div>
                     <button class="p-1.5 rounded-lg hover:bg-bg-base transition-colors text-text-muted hover:text-text-main">
                      <span class="material-symbols-outlined text-[20px]">format_list_bulleted</span>
                    </button>
                    <button class="p-1.5 rounded-lg hover:bg-bg-base transition-colors text-text-muted hover:text-text-main">
                      <span class="material-symbols-outlined text-[20px]">format_italic</span>
                    </button>
                    <button class="p-1.5 rounded-lg hover:bg-bg-base transition-colors text-text-muted hover:text-text-main">
                      <span class="material-symbols-outlined text-[20px]">format_bold</span>
                    </button>
                  </div>
                  <textarea 
                    rows="6"
                    class="w-full bg-transparent px-4 py-3 text-text-main focus:outline-none placeholder:text-text-muted/50 resize-y min-h-[150px]"
                    placeholder="اكتب وصف الواجب والتعليمات المطلوبة هنا..."
                  ></textarea>
                </div>
              </div>

              <div class="flex items-center justify-end gap-4 mt-8 pt-4 border-t border-border-base">
                <button 
                  @click="currentStep = 2"
                  class="px-6 py-2.5 rounded-xl text-text-muted font-bold hover:bg-bg-base transition-colors"
                >
                  السابق
                </button>
                <button 
                  @click="handleSaveAssignment"
                  class="bg-primary text-white px-8 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <span>حفظ ومتابعة</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4 Content: Certificate -->
        <div v-if="currentStep === 4" class="space-y-6">
          <div class="bg-bg-surface border border-border-base rounded-3xl p-8 transition-colors duration-300">
            <div class="flex items-center justify-between mb-8 pb-6 border-b border-border-base">
              <div>
                <h3 class="text-xl font-black mb-1 text-text-main">رفع شهادة إتمام الدورة</h3>
                <p class="text-sm text-text-muted">قم بتكوين قالب الشهادة التي سيحصل عليها الطلاب</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input checked="" class="sr-only peer" type="checkbox"/>
                <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div class="space-y-6">
                <div class="border-2 border-dashed border-primary/30 rounded-2xl p-8 text-center bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                  <div class="size-16 rounded-full bg-bg-surface flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span class="material-symbols-outlined text-3xl text-primary">upload_file</span>
                  </div>
                  <h4 class="font-bold text-lg mb-1 text-text-main">اسحب قالب الشهادة هنا</h4>
                  <p class="text-xs text-text-muted mb-4">يدعم ملفات PDF, JPG, PNG (بحد أقصى 5 ميجابايت)</p>
                  <button class="text-sm text-primary font-bold underline">اختر ملف من الجهاز</button>
                </div>
                <div class="space-y-4">
                  <div class="bg-bg-base/50 p-4 rounded-xl border border-border-base flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="size-10 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center text-green-600">
                        <span class="material-symbols-outlined">verified_user</span>
                      </div>
                      <div>
                        <p class="text-sm font-bold text-text-main">إرسال تلقائي عند الإتمام</p>
                        <p class="text-xs text-text-muted">يتم إرسالها للبريد فور إنهاء الطالب للمساق</p>
                      </div>
                    </div>
                    <input checked="" class="w-5 h-5 rounded text-primary border-gray-300 focus:ring-primary cursor-pointer" type="checkbox"/>
                  </div>
                  <div class="bg-bg-base/50 p-4 rounded-xl border border-border-base flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="size-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-primary">
                        <span class="material-symbols-outlined">qr_code_2</span>
                      </div>
                      <div>
                        <p class="text-sm font-bold text-text-main">تضمين رمز QR للتحقق</p>
                        <p class="text-xs text-text-muted">إضافة رمز فريد للتحقق من صحة الشهادة</p>
                      </div>
                    </div>
                    <input checked="" class="w-5 h-5 rounded text-primary border-gray-300 focus:ring-primary cursor-pointer" type="checkbox"/>
                  </div>
                </div>
              </div>
              
              <div class="bg-bg-base/50 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[300px] border border-border-base">
                <div class="w-full aspect-[1.414/1] bg-white text-black rounded shadow-lg p-8 relative overflow-hidden flex flex-col items-center text-center">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full"></div>
                  <div class="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 -ml-12 -mb-12 rounded-full"></div>
                  <div class="mb-4">
                    <span class="material-symbols-outlined text-primary text-4xl">school</span>
                  </div>
                  <h5 class="text-xl font-black mb-2">شهادة إتمام دورة</h5>
                  <p class="text-xs text-gray-500 mb-6">تمنح هذه الشهادة تقديراً لـ</p>
                  <div class="w-48 h-0.5 bg-gray-200 mb-2"></div>
                  <p class="text-sm font-bold text-primary mb-6">[اسم الطالب يظهر هنا]</p>
                  <p class="text-[10px] text-gray-500 max-w-[200px] leading-relaxed">لاجتيازه بنجاح متطلبات دورة "مقدمة في الذكاء الاصطناعي" المقامة عبر المنصة</p>
                  <div class="mt-auto flex justify-between w-full text-[8px] text-gray-500">
                    <div class="flex flex-col items-center gap-1">
                      <div class="w-12 h-6 border-b border-gray-300"></div>
                      <span>توقيع المحاضر</span>
                    </div>
                    <div class="size-8 bg-gray-100 rounded-sm"></div>
                    <div class="flex flex-col items-center gap-1">
                      <span>2024/05/12</span>
                      <span>تاريخ الإصدار</span>
                    </div>
                  </div>
                </div>
                <p class="text-xs text-text-muted mt-4 font-bold flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                  <span class="material-symbols-outlined text-sm">visibility</span>
                  معاينة القالب الحالي
                </p>
              </div>
            </div>
            <div class="mt-12 flex items-center justify-between pt-8 border-t border-border-base">
              <button 
                @click="currentStep = 3"
                class="px-8 py-3 rounded-xl border border-border-base font-bold hover:bg-bg-base transition-colors text-text-main cursor-pointer"
              >
                السابق
              </button>
              <button @click="publishCourse" :disabled="isPublishing" class="bg-primary text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                <span v-if="isPublishing" class="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <span v-else>إنهاء ونشر المساق</span>
                <span v-if="!isPublishing" class="material-symbols-outlined">rocket_launch</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-1">
        <div class="bg-bg-surface border border-border-base rounded-2xl overflow-hidden sticky top-24 transition-colors duration-300">
          <div class="p-4 bg-bg-base border-b border-border-base">
            <h4 class="font-black text-sm text-text-main">هيكل المساق</h4>
            <p class="text-xs text-text-muted mt-1">مقدمة في الذكاء الاصطناعي</p>
          </div>
          <div class="p-4 space-y-4">
            <div class="space-y-2">
              <div class="flex items-center gap-2 text-emerald-500">
                <span class="material-symbols-outlined text-sm">check_circle</span>
                <span class="text-xs font-bold">المحاضرة 1: مدخل للتعلم الآلي</span>
              </div>
              <div class="flex items-center gap-2 text-emerald-500">
                <span class="material-symbols-outlined text-sm">check_circle</span>
                <span class="text-xs font-bold">المحاضرة 2: الشبكات العصبية</span>
              </div>
              <div class="flex items-center gap-2 text-emerald-500">
                <span class="material-symbols-outlined text-sm">check_circle</span>
                <span class="text-xs font-bold">المحاضرة 3: معالجة اللغات</span>
              </div>
              <div class="flex items-center gap-2 text-emerald-500">
                <span class="material-symbols-outlined text-sm">check_circle</span>
                <span class="text-xs font-bold">المحاضرة 4: الرؤية الحاسوبية</span>
              </div>
              <div class="flex items-center gap-2 text-emerald-500">
                <span class="material-symbols-outlined text-sm">check_circle</span>
                <span class="text-xs font-bold">المحاضرة 5: التعلم العميق</span>
              </div>
              <div class="flex items-center gap-2 text-primary bg-primary/5 p-2 rounded-lg border border-primary/10">
                <span class="material-symbols-outlined text-sm">military_tech</span>
                <span class="text-xs font-bold">خطوة نهائية: إصدار الشهادة</span>
              </div>
            </div>
            <button class="w-full py-2 border-2 border-dashed border-border-base rounded-lg text-xs font-bold text-text-muted hover:bg-bg-base transition-colors cursor-pointer">
              + إضافة محاضرة جديدة
            </button>
          </div>
          <div class="p-4 border-t border-border-base bg-bg-base/50">
            <div class="flex justify-between items-center mb-2">
              <span class="text-[10px] font-bold text-text-muted">اكتمال المساق</span>
              <span class="text-[10px] font-bold text-primary">95%</span>
            </div>
            <div class="w-full h-1.5 bg-border-base rounded-full overflow-hidden">
              <div class="h-full bg-primary" style="width: 95%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentStep = ref(2);
const videoFile = ref(null);
const uploadProgress = ref(0);
const uploadSpeed = ref('0 MB/s');
const remainingTime = ref('Calculating...');
const isSavingDraft = ref(false);
const isPublishing = ref(false);
let uploadInterval = null;

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

const handleFileSelect = (event) => {
  const file = event.target.files[0];
  if (file) {
    startUpload(file);
  }
};

const handleDrop = (event) => {
  const file = event.dataTransfer.files[0];
  if (file && file.type.startsWith('video/')) {
    startUpload(file);
  }
};

const startUpload = (file) => {
  videoFile.value = file;
  uploadProgress.value = 0;
  
  // Simulate upload process
  uploadInterval = setInterval(() => {
    if (uploadProgress.value < 100) {
      const increment = Math.random() * 5 + 1; // Random increment between 1 and 6
      uploadProgress.value = Math.min(100, Math.floor(uploadProgress.value + increment));
      
      // Update dummy stats
      uploadSpeed.value = `${(Math.random() * 2 + 1).toFixed(1)} MB/s`;
      const remainingSeconds = Math.floor((100 - uploadProgress.value) / 2); // Roughly estimate
      remainingTime.value = `تبقي ${Math.ceil(remainingSeconds / 60)} دقائق`;
      
    } else {
      clearInterval(uploadInterval);
      uploadSpeed.value = 'Complete';
      remainingTime.value = 'تم التحميل';
    }
  }, 500);
};

const cancelUpload = () => {
  if (uploadInterval) clearInterval(uploadInterval);
  videoFile.value = null;
  uploadProgress.value = 0;
  uploadSpeed.value = '0 MB/s';
  remainingTime.value = '';
};

const saveDraft = () => {
    isSavingDraft.value = true;
    setTimeout(() => {
        isSavingDraft.value = false;
        showToast('تم الحفظ', 'تم حفظ مسودة المحاضرة بنجاح');
    }, 1500);
};

const handleSaveAssignment = () => {
    showToast('تم الحفظ', 'تم حفظ الواجب للمحاضرة');
    setTimeout(() => {
        currentStep.value = 4;
    }, 1000);
};

const publishCourse = () => {
    isPublishing.value = true;
    setTimeout(() => {
        isPublishing.value = false;
        showToast('تم النشر', 'تم نشر المساق بنجاح');
        // Optionally redirect or clear form
        setTimeout(() => {
             // router.push('/instructor/courses'); // Example
        }, 2000);
    }, 2000);
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
