<template>
  <div class="flex flex-col h-full bg-bg-base text-text-main font-sans transition-colors duration-300">
    <header class="sticky top-0 z-50 w-full bg-bg-surface border-b border-border-base px-4 md:px-10 py-3 transition-colors duration-300 shrink-0">
        <div class="max-w-[1440px] mx-auto flex items-center justify-between whitespace-nowrap">
            <div class="flex items-center gap-8">
                <!-- Mobile Logo (visible only on small screens if side bar is hidden) -->
                  <div class="md:hidden flex items-center gap-3">
                    <div class="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-sm">
                        <span class="material-symbols-outlined text-2xl">school</span>
                    </div>
                    <h2 class="text-text-main text-xl font-black leading-tight tracking-tight font-display">Smart Learn</h2>
                </div>

                <nav class="hidden md:flex items-center gap-8">
                    <router-link to="/instructor/dashboard" class="text-text-main text-sm font-medium hover:text-primary transition-colors">الرئيسية</router-link>
                    <router-link to="/instructor/courses" class="text-text-muted text-sm font-medium hover:text-primary transition-colors">المقررات</router-link>
                </nav>
            </div>
              <div class="flex items-center gap-4">
                <div class="flex gap-2">
                    <button class="flex items-center justify-center rounded-lg size-10 bg-bg-base text-text-main hover:bg-bg-base-hover transition-colors">
                        <span class="material-symbols-outlined">notifications</span>
                    </button>
                    <button class="flex items-center justify-center rounded-lg size-10 bg-bg-base text-text-main hover:bg-bg-base-hover transition-colors">
                        <span class="material-symbols-outlined">account_circle</span>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <div class="max-w-[1440px] mx-auto w-full p-4 md:p-10 flex flex-col gap-6 flex-1 overflow-y-auto">
        <div class="flex flex-col gap-2">
            <nav class="flex items-center gap-2 text-sm text-text-muted mb-2">
                <router-link to="/instructor/dashboard" class="hover:text-primary">الإعدادات</router-link>
                <span class="material-symbols-outlined text-sm">chevron_left</span>
                <span class="text-text-main font-medium">إعدادات الحساب</span>
            </nav>
            <div class="flex flex-wrap justify-between items-end gap-4">
                <div class="flex flex-col gap-1">
                    <h2 class="text-3xl font-black text-text-main tracking-tight">إعدادات الحساب</h2>
                    <p class="text-text-muted">قم بتحديث معلوماتك الشخصية وتفضيلات الأمان</p>
                </div>
                <div class="flex gap-3">
                    <button class="px-6 py-2.5 bg-bg-base text-text-main font-bold rounded-lg text-sm transition-all hover:bg-bg-base-hover">تجاهل التغييرات</button>
                    <button class="px-6 py-2.5 bg-primary text-white font-bold rounded-lg text-sm shadow-lg shadow-primary/25 transition-all hover:brightness-110">حفظ التغييرات</button>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div class="xl:col-span-2 flex flex-col gap-6">
                <section class="bg-bg-surface rounded-xl shadow-sm border border-border-base overflow-hidden transition-colors">
                    <div class="p-6 border-b border-border-base">
                        <h3 class="text-lg font-bold text-text-main">تفضيلات اللغة والوصول</h3>
                    </div>
                    <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-sm font-bold text-text-main">لغة المنصة</label>
                                <p class="text-xs text-text-muted">اختر اللغة المفضلة لعرض واجهة النظام</p>
                            </div>
                            <div class="inline-flex p-1 bg-bg-base rounded-lg w-fit">
                                <button class="px-8 py-2 text-sm font-bold bg-bg-surface text-primary rounded-md shadow-sm">العربية</button>
                                <button class="px-8 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">English</button>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-sm font-bold text-text-main">نمط النص الكبير</label>
                                <p class="text-xs text-text-muted">تسهيل القراءة عبر زيادة أحجام الخطوط في جميع أنحاء المنصة</p>
                            </div>
                            <div class="flex items-center gap-3">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input class="sr-only peer" type="checkbox" value=""/>
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[-100%] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                                <span class="text-sm font-medium text-text-muted">مفعل</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-sm font-bold text-text-main">الوضع الليلي</label>
                                <p class="text-xs text-text-muted">تغيير مظهر المنصة بين الفاتح والداكن</p>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-text-muted text-xl">light_mode</span>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input class="sr-only peer" type="checkbox" value=""/>
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[-100%] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                                <span class="material-symbols-outlined text-text-muted text-xl">dark_mode</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="xl:col-span-1">
                <section class="bg-bg-surface rounded-xl shadow-sm border border-border-base p-8 flex flex-col items-center justify-center text-center transition-colors">
                    <div class="relative group cursor-pointer mb-6">
                        <div class="size-40 rounded-full border-4 border-primary/10 overflow-hidden bg-bg-base">
                            <div class="w-full h-full bg-center bg-no-repeat bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDp3j4DSTWIuV2PAz-OjefboYFo8iyLtMNTR4Oc8PaaRetBj4TKBUMXoO7GjdLCCr41utmq_-pSvmWQtMP86oQ1gfOfZR-rbKwq-k60US3s-uPOgBa3CbsV154HznB3sCY2UogWEALBo9YSG_yZEnpWTMfHNy95Rk571KtiShGNkEHcTPKOyXiOh58bpESOqFXUTrtvk1MQVWlNRi5SkBYVrH_UV4R7YUSbHHUj4oT9TTatixHWKMSRULvY4zsc6WYpnajyFdxlY1AX");'></div>
                        </div>
                        <div class="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <span class="material-symbols-outlined text-white text-3xl">photo_camera</span>
                        </div>
                        <button class="absolute bottom-1 right-1 size-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900">
                            <span class="material-symbols-outlined text-xl">edit</span>
                        </button>
                    </div>
                    <div class="mb-6">
                        <h4 class="text-text-main font-bold">الصورة الشخصية</h4>
                        <p class="text-xs text-text-muted mt-1">يُنصح بصورة مربعة بحجم 500x500 بكسل</p>
                    </div>
                    <button class="w-full flex items-center justify-center gap-2 px-6 py-2.5 border-2 border-primary/20 text-primary font-bold rounded-lg text-sm hover:bg-primary/5 transition-colors">
                        <span class="material-symbols-outlined text-lg">upload</span>
                        تغيير الصورة الشخصية
                    </button>
                </section>
            </div>
        </div>

        <section class="bg-bg-surface rounded-xl shadow-sm border border-border-base overflow-hidden transition-colors">
            <div class="p-6 border-b border-border-base">
                <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-primary">lock</span>
                    <h3 class="text-lg font-bold text-text-main">تغيير كلمة المرور</h3>
                </div>
            </div>
            <div class="p-6">
                <form class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-bold text-text-main">كلمة المرور الحالية</label>
                        <div class="relative">
                            <input class="w-full px-4 py-2.5 rounded-lg border border-border-base bg-transparent focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-text-main" placeholder="••••••••" type="password"/>
                            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xl cursor-pointer">visibility_off</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-bold text-text-main">كلمة المرور الجديدة</label>
                        <div class="relative">
                            <input class="w-full px-4 py-2.5 rounded-lg border border-border-base bg-transparent focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-text-main" placeholder="أدخل كلمة مرور قوية" type="password"/>
                            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xl cursor-pointer">visibility_off</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-bold text-text-main">تأكيد كلمة المرور</label>
                        <div class="relative">
                            <input class="w-full px-4 py-2.5 rounded-lg border border-border-base bg-transparent focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-text-main" placeholder="أعد إدخال كلمة المرور" type="password"/>
                            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xl cursor-pointer">visibility_off</span>
                        </div>
                    </div>
                </form>
                <div class="mt-8 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/10 flex gap-3">
                    <span class="material-symbols-outlined text-primary">info</span>
                    <div class="text-xs text-text-muted leading-relaxed">
                        <p class="font-bold text-primary mb-1">متطلبات كلمة المرور:</p>
                        <ul class="list-disc pr-4 flex flex-col gap-1">
                            <li>يجب أن تحتوي على 8 أحرف على الأقل.</li>
                            <li>يجب أن تتضمن مزيجاً من الأحرف الكبيرة والصغيرة والأرقام.</li>
                            <li>يفضل استخدام رموز خاصة لزيادة الأمان.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="px-6 py-4 bg-bg-base/50 flex justify-end border-t border-border-base">
                <button class="px-6 py-2 bg-primary text-white font-bold rounded-lg text-sm shadow-md transition-all hover:brightness-110">تحديث كلمة المرور</button>
            </div>
        </section>

        <section class="bg-bg-surface rounded-xl shadow-sm border border-border-base p-6 flex items-center justify-between transition-colors">
            <div class="flex items-center gap-4">
                <div class="size-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <span class="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <div class="flex flex-col">
                    <h4 class="text-sm font-bold text-text-main">حالة حساب المحاضر</h4>
                    <p class="text-xs text-text-muted">حسابك مفعل ومرتبط بالبريد الأكاديمي الرسمي</p>
                </div>
            </div>
            <div class="flex gap-2">
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">نشط - معتمد</span>
            </div>
        </section>
        <div class="h-20"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Scoped styles overrides */
</style>
