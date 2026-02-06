<template>
  <div class="bg-bg-base text-text-main transition-colors duration-300 font-display">
    <!-- Navbar -->
    <header class="sticky top-0 z-50 bg-bg-surface/80 backdrop-blur-md border-b border-solid border-border-base">
      <div class="max-w-[1440px] mx-auto px-6 lg:px-20 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="bg-primary p-1.5 rounded-lg text-white">
            <span class="material-symbols-outlined text-2xl">school</span>
          </div>
          <h2 class="text-text-main text-xl font-bold leading-tight tracking-tight">Smart Learn</h2>
        </div>
        <nav class="hidden md:flex items-center gap-8">
          <a class="text-text-main text-sm font-medium hover:text-primary transition-colors" href="#">الرئيسية</a>
          <a class="text-text-main text-sm font-medium hover:text-primary transition-colors" href="#features">المميزات</a>
          <a class="text-text-main text-sm font-medium hover:text-primary transition-colors" href="#">عن المنصة</a>
          <a class="text-text-main text-sm font-medium hover:text-primary transition-colors" href="#">اتصل بنا</a>
        </nav>
        <div class="flex items-center gap-3">
          <button aria-label="تبديل الوضع الليلي" class="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-surface-hover text-text-main hover:bg-bg-surface-hover/80 transition-all border border-transparent" @click="toggleDark()">
            <span class="material-symbols-outlined sun-icon block dark:hidden">light_mode</span>
            <span class="material-symbols-outlined moon-icon hidden dark:block">dark_mode</span>
          </button>
          <RouterLink to="/login" class="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all">
            <span>تسجيل الدخول</span>
          </RouterLink>
          <RouterLink to="/register" class="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-bg-surface border border-border-base text-text-main text-sm font-bold hover:bg-bg-surface-hover transition-all">
            <span>إنشاء حساب</span>
          </RouterLink>
        </div>
      </div>
    </header>

    <main class="max-w-[1440px] mx-auto overflow-hidden">
      <!-- Hero Section -->
      <section class="px-6 lg:px-20 py-12 lg:py-24">
        <div class="flex flex-col-reverse lg:flex-row gap-12 items-center">
          <div ref="heroText" :class="['flex flex-col gap-8 flex-1 transition-all duration-1000 transform', heroTextIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
            <div class="flex flex-col gap-4">
              <span class="text-primary font-bold text-sm tracking-widest uppercase bg-primary/10 w-fit px-3 py-1 rounded-full animate-fade-in">المستقبل يبدأ هنا</span>
              <h1 class="text-text-main text-4xl lg:text-6xl font-black leading-[1.15] tracking-tight">
                نظام التعليم الذكي المتكامل للجامعات الحديثة
              </h1>
              <p class="text-text-muted text-lg lg:text-xl font-normal leading-relaxed max-w-[600px]">
                تمكين الجامعات والطلاب بأحدث تقنيات التعليم والذكاء الاصطناعي لتجربة أكاديمية متطورة تلبي معايير الجودة العالمية عبر منصة Smart Learn.
              </p>
            </div>
            <div class="flex flex-wrap gap-4">
              <RouterLink to="/register" class="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95">
                <span>ابدأ الآن مجاناً</span>
              </RouterLink>
              <button class="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-bg-surface border border-border-base text-text-main text-lg font-bold hover:bg-bg-surface-hover transition-colors">
                <span>طلب نسخة تجريبية</span>
              </button>
            </div>
            <div class="flex items-center gap-4 mt-4">
              <div class="flex -space-x-2 space-x-reverse">
                <div class="w-10 h-10 rounded-full border-2 border-bg-surface bg-gray-200 overflow-hidden" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFAjg5ge9L7hJ-oXM4f_kK_ir8YtK3S9gYM9d31g_rTTHwq10JkxkIehAlGTfQ4FHdbdkyxRAJpNLuJdNFXXCIjIECSXYmWFI6gwZmuOh4D9wmEDQp9NtuG7ai8JYy6MZUQBRk7i04ic9EJcI7WstDi8cWD3CnBBdEtf1FxP0SEY5dtizWnsGQFwZCLkMudUVmuYs7wvYSsYq1mXVzdCzfRaIMTP8H_uVv0Bj0oWSN5Sa9H8mnQn2z31TTbcWE-0r5dAzox_H_rCoz'); background-size: cover;"></div>
                <div class="w-10 h-10 rounded-full border-2 border-bg-surface bg-gray-300 overflow-hidden" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9MFw0f0ikVmAzpDw3COVsgPfMhF_fm8LZTovZ0aDo9P9VdXmCQfqQ0BRs8xRJUHvxh_VwTqyKYC0NaOAswDu4uvKvxzNLYuTl8c_DmSGWJsL_JfUV_Lg9gyUjHMwArRIUfEAENsmnekMLxgvsXeGR_RwibabKI47u0yy_ARSpSxKSK4vS9WMb7NgAXrbtu-XCJIQ82DXjHoQFyXq_I6JPGeXr9GiqFbV8877Cd8z_KlvnQ0L-lZ8_4BTQEts6GR-rc96aGDs5ODJv'); background-size: cover;"></div>
                <div class="w-10 h-10 rounded-full border-2 border-bg-surface bg-gray-400 overflow-hidden" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPR56hclgXfLuaoQhz-F1OOtEgrBxsXdw9cO7ibDrne2vOCg7IIPySWTwwv_kloq3DxiZUKPmL8zKV3s_b62KqX-2zg2IbpUCOi88L7Y3FYVL5y3U8QAE50djNAyr_hqylKOh8dnfDjGTcOrElVDd_49t1ry81cKPfIoMbP-pbgnfOcDkMTM2jnHI0mznGIrbVUfSDD_HpW998n58oIkYxL3eZnlc4g1CAaA6Ohwr1l0lfUL_HbbuCEsKcRNkolrkYxsXHm4pMP50E'); background-size: cover;"></div>
              </div>
              <p class="text-sm text-text-muted font-medium">+50 جامعة تثق بنا حول العالم</p>
            </div>
          </div>
          <div ref="heroImage" :class="['flex-1 w-full relative transition-all duration-1000 delay-200 transform', heroImageIsVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0']">
            <div class="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute -z-10 -bottom-10 -left-10 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div class="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-2xl shadow-2xl border-8 border-bg-surface overflow-hidden hover:scale-[1.01] transition-transform duration-500" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdd3wSMSNTISrNOkFaxv9QgzEMqAboq3u3Tt44ieG_bowGo4vwfB9CfkCZ8jkA3G5gsex5JpRrXpIB8p0kZk-j6NzYAXkr2smCveDG8HJGqG7ZGDlvvON2ZPOKIz0ht6g-b7LqsPIe393WkwD3K-keVPkkLZTwxpWrBr7tpUI7ntingdw3M2FSctL8wUKDwqooEhjq3_rRaEjOGFDIfL4cfrpIPJs-hFG93oqxNpOtwN1Gz3FNzbFujzLGmFLZd0MdoGQQw-wnTqtV");'>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Header -->
      <div class="px-6 lg:px-20 pt-20" id="features">
        <div ref="featuresHeader" :class="['flex flex-col items-center text-center gap-3 transition-all duration-700 transform', featuresHeaderIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
          <h2 class="text-primary font-bold text-sm tracking-widest uppercase">قدرات المنصة</h2>
          <h3 class="text-text-main text-3xl lg:text-4xl font-black leading-tight">حلول تعليمية متكاملة في مكان واحد</h3>
          <div class="w-20 h-1.5 bg-primary rounded-full mt-2"></div>
        </div>
      </div>

      <!-- Features Grid -->
      <section class="px-6 lg:px-20 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(feature, index) in features" :key="index" 
               class="flex flex-col gap-6 rounded-2xl border border-border-base bg-bg-surface p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
               v-motion-slide-visible-once-bottom
               :style="{ transitionDelay: `${index * 100}ms` }">
            <div class="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span class="material-symbols-outlined text-3xl">{{ feature.icon }}</span>
            </div>
            <div class="flex flex-col gap-3">
              <h2 class="text-text-main text-xl font-bold leading-tight">{{ feature.title }}</h2>
              <p class="text-text-muted text-base font-normal leading-relaxed">
                {{ feature.desc }}
              </p>
            </div>
            <a class="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto" href="#">
              اكتشف المزيد <span class="material-symbols-outlined text-sm">arrow_back</span>
            </a>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="px-6 lg:px-20 py-20">
        <div ref="ctaSection" :class="['relative bg-bg-surface rounded-[2.5rem] p-8 lg:p-20 overflow-hidden transition-all duration-1000 transform', ctaSectionIsVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0']">
          <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-black">
            <!-- Overlay for contrast if needed, or rely on dark mode bg -->
             <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1" class="text-text-main/10"></path>
                </pattern>
              </defs>
              <rect fill="url(#grid)" height="100%" width="100%"></rect>
            </svg>
          </div>
          <div class="flex flex-col items-center gap-8 text-center relative z-10">
            <div class="flex flex-col gap-4 max-w-[800px]">
              <h2 class="text-text-main text-3xl lg:text-5xl font-black leading-tight">
                هل أنت مستعد لتطوير مؤسستك التعليمية وبدء رحلة التحول الرقمي؟
              </h2>
              <p class="text-text-muted text-lg lg:text-xl font-normal leading-relaxed">
                انضم إلى مئات الجامعات التي اختارت الابتكار وسيلة للنجاح مع Smart Learn. ابدأ اليوم واحصل على استشارة مجانية مع فريق خبرائنا.
              </p>
            </div>
            <div class="flex flex-wrap justify-center gap-4 w-full">
              <button class="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-10 bg-primary text-white text-lg font-bold hover:bg-blue-600 transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5">
                <span>سجل مؤسستك الآن</span>
              </button>
              <button class="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-10 border border-border-base text-text-main text-lg font-bold hover:bg-bg-surface-hover transition-all hover:-translate-y-0.5">
                <span>مشاهدة عرض توضيحي</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="px-6 lg:px-20 pt-20 pb-10 border-t border-border-base mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-3">
              <div class="bg-primary p-1.5 rounded-lg text-white">
                <span class="material-symbols-outlined text-2xl">school</span>
              </div>
              <h2 class="text-text-main text-xl font-bold">Smart Learn</h2>
            </div>
            <p class="text-text-muted text-sm leading-relaxed">
              رائدون في تقديم الحلول التعليمية الرقمية المبتكرة للجامعات والمؤسسات الأكاديمية في الشرق الأوسط.
            </p>
            <div class="flex gap-4">
              <a v-for="icon in ['public', 'alternate_email', 'call']" :key="icon" 
                 class="w-10 h-10 rounded-full bg-bg-surface-hover flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all transform hover:scale-110" href="#">
                <span class="material-symbols-outlined">{{ icon }}</span>
              </a>
            </div>
          </div>
          <!-- Links Sections -->
          <div v-for="(section, idx) in footerLinks" :key="idx" class="flex flex-col gap-6">
            <h3 class="text-text-main font-bold text-lg">{{ section.title }}</h3>
            <ul class="flex flex-col gap-4">
              <li v-for="link in section.links" :key="link">
                <a class="text-text-muted hover:text-primary transition-colors text-sm hover:translate-x-1 inline-block" href="#">{{ link }}</a>
              </li>
            </ul>
          </div>
          
          <div class="flex flex-col gap-6">
            <h3 class="text-text-main font-bold text-lg">النشرة الإخبارية</h3>
            <p class="text-text-muted text-sm">اشترك للحصول على آخر التحديثات والمقالات الأكاديمية.</p>
            <div class="flex gap-2">
              <input class="flex-1 rounded-lg border border-border-base bg-bg-surface px-4 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text-main transition-all focus:shadow-lg" placeholder="بريدك الإلكتروني" type="email"/>
              <button class="bg-primary text-white p-2 rounded-lg hover:bg-blue-600 transition-colors active:scale-90">
                <span class="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        <div class="pt-8 border-t border-border-base flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-text-muted text-sm">© 2024 Smart Learn. جميع الحقوق محفوظة.</p>
          <div class="flex gap-6">
            <a class="text-text-muted text-xs hover:text-primary" href="#">الشروط والأحكام</a>
            <a class="text-text-muted text-xs hover:text-primary" href="#">سياسة الكوكيز</a>
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

// Animations Logic
const heroText = ref(null)
const heroTextIsVisible = ref(false)
const heroImage = ref(null)
const heroImageIsVisible = ref(false)
const featuresHeader = ref(null)
const featuresHeaderIsVisible = ref(false)
const ctaSection = ref(null)
const ctaSectionIsVisible = ref(false)

useIntersectionObserver(heroText, ([{ isIntersecting }]) => { if(isIntersecting) heroTextIsVisible.value = true })
useIntersectionObserver(heroImage, ([{ isIntersecting }]) => { if(isIntersecting) heroImageIsVisible.value = true })
useIntersectionObserver(featuresHeader, ([{ isIntersecting }]) => { if(isIntersecting) featuresHeaderIsVisible.value = true })
useIntersectionObserver(ctaSection, ([{ isIntersecting }]) => { if(isIntersecting) ctaSectionIsVisible.value = true })

// Data
const features = [
  { icon: 'lightbulb', title: 'التعلم الذكي', desc: 'تجربة تعليمية مخصصة لكل طالب تعتمد على تحليل نقاط القوة والضعف لتوفير مسارات تعليمية فعالة.' },
  { icon: 'description', title: 'الاختبارات الإلكترونية', desc: 'نظام تقييم آمن يدعم المراقبة الذكية ومنع الغش، مع تصحيح آلي فوري لجميع أنواع الأسئلة.' },
  { icon: 'bar_chart', title: 'التحليلات المتقدمة', desc: 'لوحات معلومات شاملة تتبع أداء الطلاب وتوفر تقارير دورية للإدارة والأساتذة لاتخاذ قرارات مدروسة.' },
  { icon: 'memory', title: 'الذكاء الاصطناعي', desc: 'مساعد ذكي متاح 24/7 للإجابة على استفسارات الطلاب وتلخيص المحاضرات بشكل آلي ودقيق.' }
]

const footerLinks = [
  { title: 'الروابط السريعة', links: ['عن الشركة', 'شركاء النجاح', 'أحدث الأخبار', 'انضم لفريقنا'] },
  { title: 'الدعم والمساعدة', links: ['مركز المساعدة', 'الأسئلة الشائعة', 'الدعم الفني', 'سياسة الخصوصية'] }
]
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
</style>
