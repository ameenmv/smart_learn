<template>
  <div class="max-w-4xl mx-auto space-y-8 font-display pb-24">
    <header class="flex items-center justify-between">
      <h2 class="text-2xl font-bold text-text-main">الإعدادات الشخصية</h2>
      <div class="flex items-center gap-4">
        <button class="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
          حفظ التغييرات
        </button>
      </div>
    </header>

    <!-- Account Info -->
    <section class="bg-bg-surface rounded-2xl border border-border-base shadow-sm overflow-hidden transition-colors duration-300">
      <div class="p-6 border-b border-border-base flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">person</span>
        <h3 class="text-lg font-bold text-text-main">معلومات الحساب</h3>
      </div>
      <div class="p-8">
        <div class="flex flex-col items-center mb-10">
          <div class="relative">
            <div class="w-32 h-32 rounded-full border-4 border-bg-surface shadow-xl overflow-hidden bg-bg-base">
              <img alt="Profile" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFAjg5ge9L7hJ-oXM4f_kK_ir8YtK3S9gYM9d31g_rTTHwq10JkxkIehAlGTfQ4FHdbdkyxRAJpNLuJdNFXXCIjIECSXYmWFI6gwZmuOh4D9wmEDQp9NtuG7ai8JYy6MZUQBRk7i04ic9EJcI7WstDi8cWD3CnBBdEtf1FxP0SEY5dtizWnsGQFwZCLkMudUVmuYs7wvYSsYq1mXVzdCzfRaIMTP8H_uVv0Bj0oWSN5Sa9H8mnQn2z31TTbcWE-0r5dAzox_H_rCoz"/>
            </div>
            <button class="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center border-4 border-bg-surface cursor-pointer">
              <span class="material-symbols-outlined text-xl">photo_camera</span>
            </button>
          </div>
          <p class="mt-4 text-sm font-medium text-text-muted cursor-pointer hover:text-primary transition-colors">انقر لتغيير الصورة الشخصية</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">الاسم الكامل</label>
            <input class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main" type="text" value="أحمد المحمد"/>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">البريد الإلكتروني</label>
            <input class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main" type="email" value="ahmad.m@university.edu"/>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">رقم الهاتف</label>
            <input class="w-full text-right bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main" dir="ltr" type="tel" value="+966 50 123 4567"/>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">تخصص الطالب</label>
            <input class="w-full bg-bg-surface-hover border-border-base rounded-xl px-4 py-3 text-text-muted cursor-not-allowed outline-none" disabled type="text" value="هندسة البرمجيات"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Language -->
    <section class="bg-bg-surface rounded-2xl border border-border-base shadow-sm overflow-hidden transition-colors duration-300">
      <div class="p-6 border-b border-border-base flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-primary">language</span>
          <h3 class="text-lg font-bold text-text-main">اللغة</h3>
        </div>
        <span class="material-symbols-outlined text-primary">grid_view</span>
      </div>
      <div class="p-8">
        <div class="flex items-center justify-between p-4 bg-bg-base rounded-xl">
          <div class="flex gap-4 items-center">
            <div>
              <p class="font-bold text-lg text-text-main">لغة النظام</p>
              <p class="text-sm text-text-muted">اختر اللغة المفضلة لواجهة المستخدم</p>
            </div>
            <span class="material-symbols-outlined text-text-muted">translate</span>
          </div>
          <div class="flex bg-bg-surface p-1 rounded-lg border border-border-base shadow-sm">
            <button class="px-6 py-2 rounded-md text-text-muted font-medium text-sm hover:bg-bg-base transition-colors cursor-pointer">
              English
            </button>
            <button class="px-6 py-2 rounded-md bg-primary text-white font-bold text-sm shadow-sm cursor-pointer">
              العربية
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Change Password -->
    <section class="bg-bg-surface rounded-2xl border border-border-base shadow-sm overflow-hidden transition-colors duration-300">
      <div class="p-6 border-b border-border-base flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">lock</span>
        <h3 class="text-lg font-bold text-text-main">تغيير كلمة المرور</h3>
      </div>
      <div class="p-8 space-y-6">
        <div class="space-y-2">
          <label class="text-sm font-semibold text-text-muted">كلمة المرور الحالية</label>
          <input class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main" placeholder="••••••••" type="password"/>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">كلمة المرور الجديدة</label>
            <input class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main" placeholder="••••••••" type="password"/>
          </div>
          <div class="space-y-2">
            <label class="text-sm font-semibold text-text-muted">تأكيد كلمة المرور</label>
            <input class="w-full bg-bg-base border-border-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-text-main" placeholder="••••••••" type="password"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Notifications -->
    <section class="bg-bg-surface rounded-2xl border border-border-base shadow-sm overflow-hidden transition-colors duration-300">
      <div class="p-6 border-b border-border-base flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">notifications_active</span>
        <h3 class="text-lg font-bold text-text-main">إعدادات الإشعارات</h3>
      </div>
      <div class="p-8 space-y-6">
        <div class="flex items-center justify-between p-4 bg-bg-base rounded-xl">
          <div class="flex gap-4 items-start">
            <span class="material-symbols-outlined text-text-muted">mail</span>
            <div>
              <p class="font-bold text-text-main">إشعارات البريد الإلكتروني</p>
              <p class="text-sm text-text-muted">استلام ملخصات أسبوعية وتنبيهات المهام</p>
            </div>
          </div>
          <div class="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
            <input checked class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-transparent appearance-none cursor-pointer focus:ring-0 transition-transform duration-200 ease-in-out left-0 top-0 mt-[2px] ml-[2px]" id="email-toggle" name="toggle" type="checkbox"/>
            <label class="toggle-label block overflow-hidden h-6 rounded-full bg-border-base cursor-pointer" for="email-toggle"></label>
          </div>
        </div>
        <div class="flex items-center justify-between p-4 bg-bg-base rounded-xl">
          <div class="flex gap-4 items-start">
            <span class="material-symbols-outlined text-text-muted">vibration</span>
            <div>
              <p class="font-bold text-text-main">تنبيهات المتصفح (Push)</p>
              <p class="text-sm text-text-muted">تنبيهات فورية عند إضافة محتوى جديد أو موعد اختبار</p>
            </div>
          </div>
          <div class="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
            <input class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-transparent appearance-none cursor-pointer focus:ring-0 transition-transform duration-200 ease-in-out left-0 top-0 mt-[2px] ml-[2px]" id="push-toggle" name="toggle" type="checkbox"/>
            <label class="toggle-label block overflow-hidden h-6 rounded-full bg-border-base cursor-pointer" for="push-toggle"></label>
          </div>
        </div>
      </div>
    </section>

    <!-- Appearance -->
    <section class="bg-bg-surface rounded-2xl border border-border-base shadow-sm overflow-hidden transition-colors duration-300">
      <div class="p-6 border-b border-border-base flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">palette</span>
        <h3 class="text-lg font-bold text-text-main">المظهر</h3>
      </div>
      <div class="p-8">
        <div class="flex items-center justify-between p-4 bg-bg-base rounded-xl">
          <div class="flex gap-4 items-center">
            <span class="material-symbols-outlined text-text-muted">dark_mode</span>
            <div>
              <p class="font-bold text-text-main">وضع المظهر</p>
              <p class="text-sm text-text-muted">اختر المظهر الذي يناسبك</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button class="flex items-center justify-center gap-2 px-6 py-2 rounded-lg border-2 border-primary bg-primary/5 text-primary font-bold cursor-pointer">
              <span class="material-symbols-outlined text-sm">light_mode</span> فاتح
            </button>
            <button class="flex items-center justify-center gap-2 px-6 py-2 rounded-lg border-2 border-transparent bg-bg-surface text-text-muted hover:border-border-base transition-all cursor-pointer">
              <span class="material-symbols-outlined text-sm">dark_mode</span> داكن
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="flex justify-end gap-4 pt-4">
      <button class="px-8 py-3 rounded-xl border border-border-base font-bold hover:bg-bg-surface-hover transition-all text-text-main cursor-pointer">
        إلغاء
      </button>
      <button class="bg-primary text-white px-12 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 cursor-pointer">
        حفظ كافة التغييرات
      </button>
    </div>
  </div>
</template>

<style scoped>
.toggle-checkbox:checked + .toggle-label {
    background-color: var(--color-primary);
}
.toggle-checkbox:checked + .toggle-label:after {
    transform: translateX(-1.25rem);
}
</style>
