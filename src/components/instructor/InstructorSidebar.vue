<template>
  <aside class="w-72 bg-bg-surface border-l border-border-base flex flex-col fixed h-full z-20 transition-colors duration-300">
    <div class="p-6 flex flex-col h-full overflow-y-auto">
      <!-- Logo -->
      <div class="flex items-center gap-2 mb-8 border-b border-border-base pb-6 justify-center">
        <div class="bg-primary rounded-xl size-9 flex items-center justify-center">
          <span class="material-symbols-outlined text-white text-xl" style="font-variation-settings: 'FILL' 1;">school</span>
        </div>
        <h2 class="text-xl font-bold tracking-tight text-text-main font-display">Smart Learn</h2>
      </div>

      <div class="flex items-center gap-3 mb-8">
        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-primary/20" 
             aria-label="User profile picture of an instructor" 
             style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuASGxkrppa2pIPv0iskBD9PPlG34F1e5pz57GKvCiS0H1M2x0gQcDhyBkF-G7OxlsvcJOQ5dvR7cicl0tWStNxrxOuS6II5iCd4qt5kAWxyKiv3XYrnDReVWOUwjxOa-OubpfO2NRSaatJZrY0RfApPbw4zbivcn2EkHBNNMU6pHsJ0SxfsXsFjc0jOqUb4DZTEJCxV1DmF4-bkETWmEucd7E1kuLhAE_Wp2kp1UXPVhbqhnq6_UaqGSn0CAv09EcTNgEZUdQkzsUyS");'></div>
        <div class="flex flex-col">
          <h1 class="text-text-main text-base font-bold leading-none">د. أحمد علي</h1>
          <p class="text-text-muted text-xs font-medium mt-1">محاضر جامعي</p>
        </div>
      </div>
      <nav class="flex flex-col gap-1 flex-1">
        <RouterLink to="/instructor/dashboard" active-class="bg-primary !text-white shadow-lg shadow-primary/20" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-bg-base transition-all group text-text-muted">
          <span class="material-symbols-outlined group-hover:text-primary group-[.router-link-active]:text-white">home</span>
          <p class="text-sm font-bold">الرئيسية</p>
        </RouterLink>
        <RouterLink to="/instructor/courses" active-class="bg-primary !text-white shadow-lg shadow-primary/20" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-bg-base transition-all group text-text-muted">
          <span class="material-symbols-outlined group-hover:text-primary group-[.router-link-active]:text-white">book</span>
          <p class="text-sm font-bold">إدارة الدورات</p>
        </RouterLink>
        <RouterLink to="/instructor/lectures" active-class="bg-primary !text-white shadow-lg shadow-primary/20" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-bg-base transition-all group text-text-muted">
          <span class="material-symbols-outlined group-hover:text-primary group-[.router-link-active]:text-white">school</span>
          <p class="text-sm font-bold">المحاضرات</p>
        </RouterLink>
        <RouterLink to="/instructor/quizzes" active-class="bg-primary !text-white shadow-lg shadow-primary/20" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-bg-base transition-all group text-text-muted">
          <span class="material-symbols-outlined group-hover:text-primary group-[.router-link-active]:text-white">quiz</span>
          <p class="text-sm font-bold">الاختبارات</p>
        </RouterLink>
        <RouterLink to="/instructor/assignments" active-class="bg-primary !text-white shadow-lg shadow-primary/20" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-bg-base transition-all group text-text-muted">
          <span class="material-symbols-outlined group-hover:text-primary group-[.router-link-active]:text-white">assignment</span>
          <p class="text-sm font-bold">الواجبات</p>
        </RouterLink>
        <RouterLink to="/instructor/students" active-class="bg-primary !text-white shadow-lg shadow-primary/20" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-bg-base transition-all group text-text-muted">
          <span class="material-symbols-outlined group-hover:text-primary group-[.router-link-active]:text-white">group</span>
          <p class="text-sm font-bold">الطلاب</p>
        </RouterLink>
        <RouterLink to="/instructor/settings" active-class="bg-primary !text-white shadow-lg shadow-primary/20" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-bg-base transition-all group text-text-muted">
          <span class="material-symbols-outlined group-hover:text-primary group-[.router-link-active]:text-white">settings</span>
          <p class="text-sm font-bold">الإعدادات</p>
        </RouterLink>
      </nav>
      <RouterLink to="/" class="flex w-full items-center justify-center gap-2 rounded-xl h-12 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 text-sm font-bold hover:bg-red-100 dark:hover:bg-red-900/20 transition-all mt-6">
        <span class="material-symbols-outlined">logout</span>
        <span>تسجيل الخروج</span>
      </RouterLink>
    </div>
  </aside>
</template>
