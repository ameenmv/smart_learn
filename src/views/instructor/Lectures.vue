<template>
  <div class="flex flex-col min-h-screen bg-bg-base text-text-main transition-colors duration-300">
    <!-- Header -->
    <header class="sticky top-0 z-10 bg-bg-surface/80 backdrop-blur-md border-b border-border-base px-8 h-16 flex items-center justify-between transition-colors duration-300">
      <div class="flex items-center gap-3">
        <span class="text-xl font-black text-text-main font-sans order-1">Smart Learn</span>
        <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center order-2">
          <span class="material-symbols-outlined text-white text-xl" style="font-variation-settings: 'FILL' 1;">school</span>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <button class="px-5 py-2 rounded-lg border border-border-base font-bold text-sm hover:bg-bg-base transition-colors cursor-pointer text-text-main">
          حفظ كمسودة
        </button>
        <button @click="router.push('/instructor/lectures/upload')" class="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all cursor-pointer">
          نشر المحاضرة
        </button>
      </div>
    </header>

    <div class="flex flex-1 relative">
      <!-- Main Content -->
      <div class="p-8 max-w-[900px] mx-auto ml-[320px] w-full transition-all duration-300">
        <nav class="flex items-center gap-2 text-sm text-text-muted mb-4">
          <a class="hover:text-primary transition-colors cursor-pointer" href="#">إدارة الدورات</a>
          <span class="material-symbols-outlined text-xs">chevron_left</span>
          <a class="hover:text-primary transition-colors cursor-pointer" href="#">الذكاء الاصطناعي</a>
          <span class="material-symbols-outlined text-xs">chevron_left</span>
          <span class="text-text-main font-semibold">تحرير محتوى المحاضرة</span>
        </nav>
        
        <div class="mb-8">
          <h1 class="text-3xl font-black text-text-main">تحرير محتوى المحاضرة</h1>
          <p class="text-text-muted mt-2 font-medium">أضف النصوص والوسائط والمواد التعليمية لمحاضرتك</p>
        </div>

        <div class="space-y-6">
          <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm transition-colors duration-300">
            <div class="grid grid-cols-1 gap-6">
              <div>
                <label class="block text-sm font-bold mb-2 text-text-main">عنوان المحاضرة</label>
                <input class="w-full h-12 px-4 rounded-xl border border-border-base bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="أدخل عنوان المحاضرة هنا..." type="text" value="مقدمة في الشبكات العصبية"/>
              </div>
              <div>
                <label class="block text-sm font-bold mb-2 text-text-main">الوصف</label>
                <textarea class="w-full px-4 py-3 rounded-xl border border-border-base bg-bg-surface text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="وصف قصير للمحتوى التعليمي..." rows="3"></textarea>
              </div>
            </div>
          </div>

          <div class="bg-bg-surface rounded-2xl border border-border-base shadow-sm overflow-hidden transition-colors duration-300">
            <div class="editor-toolbar bg-bg-base border-b border-border-base p-2 flex flex-wrap gap-1 transition-colors duration-300">
              <button title="عريض" class="p-1.5 hover:bg-bg-surface-hover rounded transition-colors text-text-main"><span class="material-symbols-outlined text-sm">format_bold</span></button>
              <button title="مائل" class="p-1.5 hover:bg-bg-surface-hover rounded transition-colors text-text-main"><span class="material-symbols-outlined text-sm">format_italic</span></button>
              <button title="تسطير" class="p-1.5 hover:bg-bg-surface-hover rounded transition-colors text-text-main"><span class="material-symbols-outlined text-sm">format_underlined</span></button>
              <div class="w-px h-6 bg-border-base mx-1"></div>
              <button title="قائمة منقطة" class="p-1.5 hover:bg-bg-surface-hover rounded transition-colors text-text-main"><span class="material-symbols-outlined text-sm">format_list_bulleted</span></button>
              <button title="قائمة مرقمة" class="p-1.5 hover:bg-bg-surface-hover rounded transition-colors text-text-main"><span class="material-symbols-outlined text-sm">format_list_numbered</span></button>
              <div class="w-px h-6 bg-border-base mx-1"></div>
              <button title="رابط" class="p-1.5 hover:bg-bg-surface-hover rounded transition-colors text-text-main"><span class="material-symbols-outlined text-sm">link</span></button>
              <button title="صورة" class="p-1.5 hover:bg-bg-surface-hover rounded transition-colors text-text-main"><span class="material-symbols-outlined text-sm">image</span></button>
              <button title="فيديو" class="p-1.5 hover:bg-bg-surface-hover rounded transition-colors text-text-main"><span class="material-symbols-outlined text-sm">videocam</span></button>
              <div class="w-px h-6 bg-border-base mx-1"></div>
              <button title="محاذاة لليمين" class="p-1.5 hover:bg-bg-surface-hover rounded transition-colors text-text-main"><span class="material-symbols-outlined text-sm">format_align_right</span></button>
              <button title="توسيط" class="p-1.5 hover:bg-bg-surface-hover rounded transition-colors text-text-main"><span class="material-symbols-outlined text-sm">format_align_center</span></button>
              <button title="محاذاة لليسار" class="p-1.5 hover:bg-bg-surface-hover rounded transition-colors text-text-main"><span class="material-symbols-outlined text-sm">format_align_left</span></button>
            </div>
            <div class="p-6 min-h-[400px] prose dark:prose-invert max-w-none focus:outline-none" contenteditable="true">
              <p class="text-text-muted">ابدأ بكتابة محتوى المحاضرة هنا...</p>
            </div>
          </div>

          <div class="bg-bg-surface p-6 rounded-2xl border border-border-base shadow-sm transition-colors duration-300">
            <label class="block text-sm font-bold mb-4 text-text-main">المواد المرفقة (PDF / PowerPoint)</label>
            <div class="border-2 border-dashed border-border-base rounded-2xl p-10 flex flex-col items-center justify-center bg-bg-base/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group">
              <div class="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
              </div>
              <p class="text-base font-bold mb-1 text-text-main">اسحب وأفلت الملفات هنا</p>
              <p class="text-sm text-text-muted">أو اضغط للتصفح من جهازك (الحد الأقصى 50 ميجابايت)</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Left Sidebar (Preview & Outline) -->
      <aside class="w-[320px] bg-bg-surface border-r border-border-base flex flex-col fixed left-0 top-[64px] h-[calc(100vh-64px)] z-20 overflow-y-auto transition-colors duration-300">
        <div class="p-6">
          <h3 class="font-bold text-lg mb-6 flex items-center gap-2 text-text-main">
            <span class="material-symbols-outlined text-primary">visibility</span>
            معاينة الملفات
          </h3>
          <div class="space-y-4">
            <div class="p-4 rounded-xl border border-border-base bg-bg-base flex items-center gap-3 transition-colors duration-300">
              <div class="size-10 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600">
                <span class="material-symbols-outlined">picture_as_pdf</span>
              </div>
              <div class="flex-1 overflow-hidden">
                <p class="text-sm font-bold truncate text-text-main">ملخص الشبكات.pdf</p>
                <p class="text-xs text-text-muted">2.4 MB</p>
              </div>
              <button class="text-text-muted hover:text-red-500 cursor-pointer">
                <span class="material-symbols-outlined text-lg">delete</span>
              </button>
            </div>
            <div class="p-4 rounded-xl border border-border-base bg-bg-base flex items-center gap-3 transition-colors duration-300">
              <div class="size-10 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                <span class="material-symbols-outlined">description</span>
              </div>
              <div class="flex-1 overflow-hidden">
                <p class="text-sm font-bold truncate text-text-main">العرض التقديمي.pptx</p>
                <p class="text-xs text-text-muted">15.8 MB</p>
              </div>
              <button class="text-text-muted hover:text-red-500 cursor-pointer">
                <span class="material-symbols-outlined text-lg">delete</span>
              </button>
            </div>
          </div>
          
          <div class="mt-8">
            <h3 class="font-bold text-base mb-4 flex items-center gap-2 text-text-main">
              <span class="material-symbols-outlined text-primary">list_alt</span>
              أقسام الدورة
            </h3>
            <div class="space-y-2">
              <div class="p-3 rounded-lg border-r-4 border-primary bg-primary/5">
                <p class="text-sm font-bold text-primary">1. مقدمة في الشبكات</p>
                <p class="text-xs text-text-muted mt-1">الدرس الحالي</p>
              </div>
              <div class="p-3 rounded-lg border border-transparent hover:bg-bg-base transition-colors cursor-pointer text-text-muted hover:text-text-main">
                <p class="text-sm font-bold">2. الطبقات الفيزيائية</p>
              </div>
              <div class="p-3 rounded-lg border border-transparent hover:bg-bg-base transition-colors cursor-pointer text-text-muted hover:text-text-main">
                <p class="text-sm font-bold">3. بروتوكولات الإنترنت</p>
              </div>
            </div>
            <button class="w-full mt-4 py-2 flex items-center justify-center gap-2 text-primary font-bold text-sm border-2 border-dashed border-primary/20 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer">
              <span class="material-symbols-outlined text-sm">add</span>
              إضافة قسم جديد
            </button>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped>
/* Scoped styles if needed */
</style>
