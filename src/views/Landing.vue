<template>
  <div class="bg-bg-base text-text-main transition-colors duration-300 font-display overflow-x-hidden">
    <!-- Navbar -->
    <header class="sticky top-0 z-50 bg-bg-surface/70 backdrop-blur-xl border-b border-border-base/50">
      <div class="max-w-[1280px] mx-auto px-6 lg:px-12 py-3.5 flex items-center justify-between">
        <div class="flex items-center gap-3 cursor-pointer" @click="scrollToTop">
          <div class="bg-primary p-2 rounded-xl text-white shadow-lg shadow-primary/20">
            <span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1">school</span>
          </div>
          <h2 class="text-text-main text-xl font-black leading-tight tracking-tight">Smart Learn</h2>
        </div>
        <nav class="hidden md:flex items-center gap-8">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="text-text-muted text-sm font-medium hover:text-primary transition-colors relative group">
            {{ link.label }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
        <div class="flex items-center gap-3">
          <button aria-label="تبديل الوضع الليلي" class="w-10 h-10 flex items-center justify-center rounded-xl bg-bg-surface-hover text-text-main hover:text-primary transition-all cursor-pointer" @click="toggleDark()">
            <span class="material-symbols-outlined sun-icon block dark:hidden">light_mode</span>
            <span class="material-symbols-outlined moon-icon hidden dark:block">dark_mode</span>
          </button>
          <RouterLink to="/login" class="hidden sm:flex cursor-pointer items-center justify-center rounded-xl h-10 px-5 bg-bg-surface border border-border-base text-text-main text-sm font-bold hover:border-primary/50 hover:text-primary transition-all">
            تسجيل الدخول
          </RouterLink>
          <RouterLink to="/register" class="hidden sm:flex cursor-pointer items-center justify-center rounded-xl h-10 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all active:scale-95">
            ابدأ مجاناً
          </RouterLink>
          <!-- Mobile menu toggle -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-text-main hover:bg-bg-surface-hover transition-colors cursor-pointer">
            <span class="material-symbols-outlined">{{ mobileMenuOpen ? 'close' : 'menu' }}</span>
          </button>
        </div>
      </div>
      <!-- Mobile Menu -->
      <Transition name="slide-down">
        <div v-if="mobileMenuOpen" class="md:hidden bg-bg-surface border-t border-border-base px-6 py-4 space-y-3">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="mobileMenuOpen = false" class="block py-2 text-text-main text-sm font-medium hover:text-primary transition-colors">{{ link.label }}</a>
          <div class="flex gap-3 pt-3 border-t border-border-base">
            <RouterLink to="/login" class="flex-1 flex items-center justify-center rounded-xl h-10 border border-border-base text-text-main text-sm font-bold hover:border-primary/50 transition-all">تسجيل الدخول</RouterLink>
            <RouterLink to="/register" class="flex-1 flex items-center justify-center rounded-xl h-10 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 transition-all">ابدأ مجاناً</RouterLink>
          </div>
        </div>
      </Transition>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="relative px-6 lg:px-12 pt-16 lg:pt-28 pb-20 lg:pb-36 overflow-hidden" id="about">
        <!-- Background decorations -->
        <div class="absolute inset-0 -z-10">
          <div class="absolute top-20 right-[10%] w-[500px] h-[500px] bg-primary/[0.07] rounded-full blur-[100px] animate-pulse"></div>
          <div class="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-blue-400/[0.05] rounded-full blur-[100px] animate-pulse" style="animation-delay: 1s"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 40px 40px;"></div>
        </div>

        <div class="max-w-[1280px] mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">
          <!-- Text -->
          <div ref="heroText" :class="['flex flex-col gap-8 flex-1 transition-all duration-1000 transform', heroTextIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
            <div class="flex flex-col gap-5">
              <div class="flex items-center gap-3">
                <span class="text-primary font-bold text-xs tracking-widest uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 animate-fade-in">🚀 المستقبل يبدأ هنا</span>
              </div>
              <h1 class="text-text-main text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.12] tracking-tight">
                نظام التعليم <span class="bg-gradient-to-l from-primary to-blue-400 bg-clip-text text-transparent">الذكي المتكامل</span> للجامعات
              </h1>
              <p class="text-text-muted text-lg lg:text-xl font-normal leading-relaxed max-w-[560px]">
                تمكين الجامعات والطلاب بأحدث تقنيات التعليم والذكاء الاصطناعي لتجربة أكاديمية متطورة عبر منصة Smart Learn.
              </p>
            </div>
            <div class="flex flex-wrap gap-4">
              <RouterLink to="/register" class="group flex items-center justify-center gap-2 rounded-xl h-14 px-8 bg-primary text-white text-base font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] transition-all active:scale-95">
                ابدأ الآن مجاناً
                <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
              </RouterLink>
              <button class="flex items-center justify-center gap-2 rounded-xl h-14 px-8 bg-bg-surface border border-border-base text-text-main text-base font-bold hover:border-primary/50 hover:text-primary transition-all">
                <span class="material-symbols-outlined text-lg">play_circle</span>
                شاهد العرض التوضيحي
              </button>
            </div>
            <!-- Social proof -->
            <div class="flex items-center gap-4 mt-2">
              <div class="flex -space-x-3 space-x-reverse">
                <div v-for="(avatar, i) in avatars" :key="i" class="w-10 h-10 rounded-full border-[3px] border-bg-base bg-gray-200 overflow-hidden ring-0 hover:ring-2 ring-primary/30 transition-all hover:scale-110 hover:z-10" :style="{ backgroundImage: `url('${avatar}')`, backgroundSize: 'cover' }"></div>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center gap-1">
                  <span v-for="i in 5" :key="i" class="material-symbols-outlined text-amber-400 text-sm" style="font-variation-settings: 'FILL' 1">star</span>
                </div>
                <p class="text-xs text-text-muted font-medium">+2,000 طالب · <span class="text-primary font-bold">4.9/5</span> تقييم</p>
              </div>
            </div>
          </div>

          <!-- Hero Visual -->
          <div ref="heroImage" :class="['flex-1 w-full relative transition-all duration-1000 delay-200 transform', heroImageIsVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0']">
            <!-- Floating elements -->
            <div class="absolute -top-6 -right-4 z-20 bg-bg-surface/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-border-base/50 animate-float hidden lg:flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                <span class="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <p class="text-xs text-text-muted">نسبة النجاح</p>
                <p class="text-lg font-black text-green-500">94.2%</p>
              </div>
            </div>
            <div class="absolute -bottom-4 -left-4 z-20 bg-bg-surface/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-border-base/50 animate-float-delayed hidden lg:flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">smart_toy</span>
              </div>
              <div>
                <p class="text-xs text-text-muted">مساعد ذكي</p>
                <p class="text-sm font-bold text-text-main">متصل 24/7</p>
              </div>
            </div>

            <div class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/10 via-transparent to-blue-400/10 rounded-full blur-3xl"></div>
            <div class="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-3xl shadow-2xl border border-border-base/30 overflow-hidden hover:scale-[1.01] transition-transform duration-500 ring-1 ring-black/5" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdd3wSMSNTISrNOkFaxv9QgzEMqAboq3u3Tt44ieG_bowGo4vwfB9CfkCZ8jkA3G5gsex5JpRrXpIB8p0kZk-j6NzYAXkr2smCveDG8HJGqG7ZGDlvvON2ZPOKIz0ht6g-b7LqsPIe393WkwD3K-keVPkkLZTwxpWrBr7tpUI7ntingdw3M2FSctL8wUKDwqooEhjq3_rRaEjOGFDIfL4cfrpIPJs-hFG93oqxNpOtwN1Gz3FNzbFujzLGmFLZd0MdoGQQw-wnTqtV");'>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Counter -->
      <section class="relative px-6 lg:px-12 -mt-12">
        <div class="max-w-[1100px] mx-auto">
          <div ref="statsSection" :class="['grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-base/50 rounded-2xl overflow-hidden shadow-xl border border-border-base/50 transition-all duration-700 transform', statsSectionIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0']">
            <div v-for="(stat, index) in stats" :key="index" class="bg-bg-surface p-6 lg:p-8 flex flex-col items-center text-center gap-2 hover:bg-bg-surface-hover/50 transition-colors">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-1" :class="stat.color">
                <span class="material-symbols-outlined text-2xl" :style="{ fontVariationSettings: `'FILL' 1` }">{{ stat.icon }}</span>
              </div>
              <span class="text-3xl lg:text-4xl font-black text-text-main tabular-nums tracking-tight">{{ stat.value }}</span>
              <span class="text-sm text-text-muted font-medium">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Header -->
      <section class="px-6 lg:px-12 pt-28 pb-4" id="features">
        <div class="max-w-[1280px] mx-auto">
          <div ref="featuresHeader" :class="['flex flex-col items-center text-center gap-4 transition-all duration-700 transform', featuresHeaderIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
            <span class="text-primary font-bold text-xs tracking-widest uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">✨ قدرات المنصة</span>
            <h2 class="text-text-main text-3xl lg:text-[2.75rem] font-black leading-tight max-w-xl">حلول تعليمية متكاملة <span class="bg-gradient-to-l from-primary to-blue-400 bg-clip-text text-transparent">في مكان واحد</span></h2>
            <p class="text-text-muted text-lg max-w-lg leading-relaxed">كل ما يحتاجه المحاضر والطالب لتجربة تعليمية استثنائية تتجاوز الحدود التقليدية.</p>
          </div>
        </div>
      </section>

      <!-- Features Grid -->
      <section class="px-6 lg:px-12 py-16">
        <div class="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div v-for="(feature, index) in features" :key="index" 
               class="relative flex flex-col gap-5 rounded-2xl border border-border-base/70 bg-bg-surface p-7 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group hover:-translate-y-2 overflow-hidden"
               :style="{ transitionDelay: `${index * 80}ms` }">
            <!-- Hover gradient -->
            <div class="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300" :class="feature.bgColor">
                <span class="material-symbols-outlined text-2xl" :class="feature.iconColor" :style="{ fontVariationSettings: `'FILL' 1` }">{{ feature.icon }}</span>
              </div>
            </div>
            <div class="relative z-10 flex flex-col gap-3 flex-1">
              <h3 class="text-text-main text-lg font-bold leading-tight">{{ feature.title }}</h3>
              <p class="text-text-muted text-sm leading-relaxed flex-1">{{ feature.desc }}</p>
            </div>
            <a class="relative z-10 text-primary font-bold text-sm flex items-center gap-1.5 hover:gap-3 transition-all mt-auto group/link" href="#">
              اكتشف المزيد
              <span class="material-symbols-outlined text-sm">arrow_back</span>
            </a>
          </div>
        </div>
      </section>

      <!-- How It Works -->
      <section class="px-6 lg:px-12 py-20 bg-bg-surface/50" id="how-it-works">
        <div class="max-w-[1280px] mx-auto">
          <div ref="howItWorksHeader" :class="['flex flex-col items-center text-center gap-4 mb-16 transition-all duration-700 transform', howItWorksHeaderIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
            <span class="text-primary font-bold text-xs tracking-widest uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">📋 كيف يعمل</span>
            <h2 class="text-text-main text-3xl lg:text-[2.75rem] font-black leading-tight">ابدأ في <span class="bg-gradient-to-l from-primary to-blue-400 bg-clip-text text-transparent">ثلاث خطوات</span> بسيطة</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div v-for="(step, index) in steps" :key="index" class="relative flex flex-col items-center text-center gap-5 group">
              <!-- Connector line -->
              <div v-if="index < steps.length - 1" class="hidden md:block absolute top-10 left-0 -translate-x-1/2 w-full h-px bg-gradient-to-l from-transparent via-border-base to-transparent"></div>
              <div class="relative">
                <div class="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white shadow-xl shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                  <span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1">{{ step.icon }}</span>
                </div>
                <span class="absolute -top-2 -right-2 w-8 h-8 bg-bg-surface border-2 border-primary text-primary rounded-full flex items-center justify-center text-sm font-black shadow-md">{{ index + 1 }}</span>
              </div>
              <h3 class="text-text-main text-xl font-bold">{{ step.title }}</h3>
              <p class="text-text-muted text-sm leading-relaxed max-w-xs">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="px-6 lg:px-12 py-20" id="testimonials">
        <div class="max-w-[1280px] mx-auto">
          <div class="flex flex-col items-center text-center gap-4 mb-16">
            <span class="text-primary font-bold text-xs tracking-widest uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">💬 آراء المستخدمين</span>
            <h2 class="text-text-main text-3xl lg:text-[2.75rem] font-black leading-tight">ماذا يقولون <span class="bg-gradient-to-l from-primary to-blue-400 bg-clip-text text-transparent">عنّا</span></h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-bg-surface rounded-2xl border border-border-base p-8 flex flex-col gap-5 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
              <!-- Stars -->
              <div class="flex gap-0.5">
                <span v-for="i in 5" :key="i" class="material-symbols-outlined text-amber-400 text-lg" style="font-variation-settings: 'FILL' 1">star</span>
              </div>
              <!-- Quote -->
              <p class="text-text-muted text-sm leading-relaxed flex-1">"{{ testimonial.quote }}"</p>
              <!-- Author -->
              <div class="flex items-center gap-3 pt-4 border-t border-border-base">
                <div class="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-bold text-sm">{{ testimonial.initials }}</div>
                <div>
                  <p class="text-text-main font-bold text-sm">{{ testimonial.name }}</p>
                  <p class="text-text-muted text-xs">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="px-6 lg:px-12 py-20">
        <div class="max-w-[1100px] mx-auto">
          <div ref="ctaSection" :class="['relative rounded-[2rem] overflow-hidden transition-all duration-1000 transform', ctaSectionIsVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0']">
            <!-- Background -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-indigo-700"></div>
            <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"></div>
            <!-- Decorative circles -->
            <div class="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-20 -left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

            <div class="relative z-10 flex flex-col items-center gap-8 text-center p-10 lg:p-20">
              <div class="flex flex-col gap-5 max-w-[680px]">
                <h2 class="text-white text-3xl lg:text-5xl font-black leading-tight">
                  هل أنت مستعد لبدء رحلة التحول الرقمي؟
                </h2>
                <p class="text-white/80 text-lg font-normal leading-relaxed">
                  انضم إلى مئات المؤسسات التعليمية التي اختارت Smart Learn. ابدأ اليوم واحصل على تجربة مجانية كاملة.
                </p>
              </div>
              <div class="flex flex-wrap justify-center gap-4">
                <RouterLink to="/register" class="flex items-center justify-center gap-2 rounded-xl h-14 px-10 bg-white text-primary text-lg font-bold hover:shadow-2xl hover:scale-[1.02] transition-all active:scale-95">
                  <span>ابدأ مجاناً الآن</span>
                  <span class="material-symbols-outlined">arrow_back</span>
                </RouterLink>
                <button class="flex items-center justify-center gap-2 rounded-xl h-14 px-10 border-2 border-white/30 text-white text-lg font-bold hover:bg-white/10 transition-all">
                  <span class="material-symbols-outlined">play_circle</span>
                  <span>شاهد العرض</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="px-6 lg:px-12 pt-20 pb-8 border-t border-border-base" id="contact">
        <div class="max-w-[1280px] mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div class="flex flex-col gap-5 lg:col-span-1">
              <div class="flex items-center gap-3">
                <div class="bg-primary p-2 rounded-xl text-white shadow-lg shadow-primary/20">
                  <span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1">school</span>
                </div>
                <h2 class="text-text-main text-xl font-black">Smart Learn</h2>
              </div>
              <p class="text-text-muted text-sm leading-relaxed">
                رائدون في تقديم الحلول التعليمية الرقمية المبتكرة للجامعات والمؤسسات الأكاديمية.
              </p>
              <div class="flex gap-3">
                <a v-for="(social, i) in socials" :key="i"
                   class="w-10 h-10 rounded-xl bg-bg-surface-hover flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/20 cursor-pointer" href="#">
                  <span class="material-symbols-outlined text-lg">{{ social }}</span>
                </a>
              </div>
            </div>
            <div v-for="(section, idx) in footerLinks" :key="idx" class="flex flex-col gap-5">
              <h3 class="text-text-main font-bold">{{ section.title }}</h3>
              <ul class="flex flex-col gap-3">
                <li v-for="link in section.links" :key="link">
                  <a class="text-text-muted hover:text-primary transition-colors text-sm flex items-center gap-1 group" href="#">
                    <span class="material-symbols-outlined text-xs opacity-0 group-hover:opacity-100 transition-opacity">arrow_back</span>
                    {{ link }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex flex-col gap-5">
              <h3 class="text-text-main font-bold">النشرة الإخبارية</h3>
              <p class="text-text-muted text-sm">اشترك للحصول على آخر التحديثات.</p>
              <div class="flex gap-2">
                <input class="flex-1 rounded-xl border border-border-base bg-bg-base px-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-text-main transition-all" placeholder="بريدك الإلكتروني" type="email"/>
                <button class="bg-primary text-white px-4 rounded-xl hover:bg-primary/90 transition-colors active:scale-95 shadow-lg shadow-primary/20">
                  <span class="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
          <div class="pt-8 border-t border-border-base flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-text-muted text-sm">© 2026 Smart Learn. جميع الحقوق محفوظة.</p>
            <div class="flex gap-6">
              <a class="text-text-muted text-xs hover:text-primary transition-colors" href="#">الشروط والأحكام</a>
              <a class="text-text-muted text-xs hover:text-primary transition-colors" href="#">سياسة الخصوصية</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { useDark, useIntersectionObserver, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const mobileMenuOpen = ref(false)

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

// ── Intersection Observers ─────────────────────────────────
const heroText = ref(null)
const heroTextIsVisible = ref(false)
const heroImage = ref(null)
const heroImageIsVisible = ref(false)
const featuresHeader = ref(null)
const featuresHeaderIsVisible = ref(false)
const ctaSection = ref(null)
const ctaSectionIsVisible = ref(false)
const statsSection = ref(null)
const statsSectionIsVisible = ref(false)
const howItWorksHeader = ref(null)
const howItWorksHeaderIsVisible = ref(false)

useIntersectionObserver(heroText, ([{ isIntersecting }]) => { if(isIntersecting) heroTextIsVisible.value = true })
useIntersectionObserver(heroImage, ([{ isIntersecting }]) => { if(isIntersecting) heroImageIsVisible.value = true })
useIntersectionObserver(featuresHeader, ([{ isIntersecting }]) => { if(isIntersecting) featuresHeaderIsVisible.value = true })
useIntersectionObserver(ctaSection, ([{ isIntersecting }]) => { if(isIntersecting) ctaSectionIsVisible.value = true })
useIntersectionObserver(statsSection, ([{ isIntersecting }]) => { if(isIntersecting) statsSectionIsVisible.value = true })
useIntersectionObserver(howItWorksHeader, ([{ isIntersecting }]) => { if(isIntersecting) howItWorksHeaderIsVisible.value = true })

// ── Data ───────────────────────────────────────────────────
const navLinks = [
  { label: 'الرئيسية', href: '#' },
  { label: 'عن المنصة', href: '#about' },
  { label: 'المميزات', href: '#features' },
  { label: 'آراء المستخدمين', href: '#testimonials' },
  { label: 'اتصل بنا', href: '#contact' },
]

const avatars = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBFAjg5ge9L7hJ-oXM4f_kK_ir8YtK3S9gYM9d31g_rTTHwq10JkxkIehAlGTfQ4FHdbdkyxRAJpNLuJdNFXXCIjIECSXYmWFI6gwZmuOh4D9wmEDQp9NtuG7ai8JYy6MZUQBRk7i04ic9EJcI7WstDi8cWD3CnBBdEtf1FxP0SEY5dtizWnsGQFwZCLkMudUVmuYs7wvYSsYq1mXVzdCzfRaIMTP8H_uVv0Bj0oWSN5Sa9H8mnQn2z31TTbcWE-0r5dAzox_H_rCoz',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD9MFw0f0ikVmAzpDw3COVsgPfMhF_fm8LZTovZ0aDo9P9VdXmCQfqQ0BRs8xRJUHvxh_VwTqyKYC0NaOAswDu4uvKvxzNLYuTl8c_DmSGWJsL_JfUV_Lg9gyUjHMwArRIUfEAENsmnekMLxgvsXeGR_RwibabKI47u0yy_ARSpSxKSK4vS9WMb7NgAXrbtu-XCJIQ82DXjHoQFyXq_I6JPGeXr9GiqFbV8877Cd8z_KlvnQ0L-lZ8_4BTQEts6GR-rc96aGDs5ODJv',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDPR56hclgXfLuaoQhz-F1OOtEgrBxsXdw9cO7ibDrne2vOCg7IIPySWTwwv_kloq3DxiZUKPmL8zKV3s_b62KqX-2zg2IbpUCOi88L7Y3FYVL5y3U8QAE50djNAyr_hqylKOh8dnfDjGTcOrElVDd_49t1ry81cKPfIoMbP-pbgnfOcDkMTM2jnHI0mznGIrbVUfSDD_HpW998n58oIkYxL3eZnlc4g1CAaA6Ohwr1l0lfUL_HbbuCEsKcRNkolrkYxsXHm4pMP50E',
]

const stats = [
  { icon: 'school', value: '50+', label: 'جامعة شريكة', color: 'bg-primary/10 text-primary' },
  { icon: 'group', value: '2,000+', label: 'طالب نشط', color: 'bg-emerald-500/10 text-emerald-500' },
  { icon: 'play_circle', value: '500+', label: 'محاضرة مسجلة', color: 'bg-amber-500/10 text-amber-500' },
  { icon: 'workspace_premium', value: '98%', label: 'رضا المستخدمين', color: 'bg-purple-500/10 text-purple-500' },
]

const features = [
  { icon: 'auto_awesome', title: 'التعلم الذكي بالـ AI', desc: 'مساعد ذكي يحلل نقاط القوة والضعف ويقدم مسارات تعليمية مخصصة لكل طالب.', bgColor: 'bg-primary/10', iconColor: 'text-primary' },
  { icon: 'quiz', title: 'اختبارات إلكترونية', desc: 'نظام تقييم متطور يدعم التصحيح الآلي الفوري مع تحليل مفصل للنتائج والأداء.', bgColor: 'bg-emerald-500/10', iconColor: 'text-emerald-500' },
  { icon: 'monitoring', title: 'تحليلات متقدمة', desc: 'لوحات معلومات شاملة تقدم رؤى دقيقة عن الأداء الأكاديمي والتقدم الدراسي.', bgColor: 'bg-amber-500/10', iconColor: 'text-amber-500' },
  { icon: 'videocam', title: 'محاضرات مرئية', desc: 'رفع وبث المحاضرات المسجلة مع نظام تنظيم ذكي وملاحظات تفاعلية.', bgColor: 'bg-purple-500/10', iconColor: 'text-purple-500' },
]

const steps = [
  { icon: 'person_add', title: 'أنشئ حسابك', desc: 'سجل في المنصة كطالب أو محاضر في أقل من دقيقة واحدة وابدأ بتخصيص ملفك الشخصي.' },
  { icon: 'library_books', title: 'استكشف المقررات', desc: 'تصفح المقررات المتاحة وانضم للمواد التي تحتاجها مع إمكانية الوصول الفوري للمحتوى.' },
  { icon: 'trending_up', title: 'تعلم وتقدم', desc: 'شاهد المحاضرات، حل الاختبارات، واحصل على شهاداتك مع متابعة تقدمك باستمرار.' },
]

const testimonials = [
  { quote: 'Smart Learn غيرت تجربتي التعليمية بالكامل. المساعد الذكي ساعدني أفهم المواد الصعبة بطريقة مبسطة ومخصصة.', name: 'أحمد محمد', role: 'طالب علوم حاسب', initials: 'أم' },
  { quote: 'كمحاضر، المنصة وفرت لي وقت كبير في التقييم والمتابعة. نظام الاختبارات والتحليلات ممتاز وسهل الاستخدام.', name: 'د. سارة أحمد', role: 'أستاذة مساعدة', initials: 'سأ' },
  { quote: 'تجربة المنصة سلسة جداً. من التسجيل للشهادة، كل حاجة واضحة ومنظمة. أحسن استثمار في تعليمي.', name: 'عبدالرحمن خالد', role: 'طالب هندسة', initials: 'عخ' },
]

const footerLinks = [
  { title: 'الروابط السريعة', links: ['عن الشركة', 'شركاء النجاح', 'أحدث الأخبار', 'انضم لفريقنا'] },
  { title: 'الدعم والمساعدة', links: ['مركز المساعدة', 'الأسئلة الشائعة', 'الدعم الفني', 'سياسة الخصوصية'] }
]

const socials = ['public', 'alternate_email', 'call']
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
.animate-float-delayed {
  animation: float 4s ease-in-out infinite;
  animation-delay: 2s;
}

/* Mobile menu transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  transform-origin: top;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: scaleY(0.95);
  max-height: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  transform: scaleY(1);
  max-height: 500px;
}
</style>
