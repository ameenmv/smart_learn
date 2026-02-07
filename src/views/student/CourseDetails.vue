<template>
  <div class="max-w-7xl mx-auto font-display">
    <!-- Course Header -->
    <div v-if="activeTab === 'content'" class="relative rounded-xl overflow-hidden bg-gradient-to-l from-primary to-blue-800 text-white p-8 md:p-12 mb-8 shadow-xl transition-all">
      <div class="absolute top-0 left-0 w-1/3 h-full opacity-10">
        <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
          <path d="M0 0 L100 0 L100 100 Z" fill="currentColor"></path>
        </svg>
      </div>
      <div class="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="text-right">
          <div class="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4 backdrop-blur-md">كلية التجارة والاقتصاد</div>
          <h1 class="text-3xl md:text-4xl font-bold mb-4">مبادئ الاقتصاد الجزئي (ECO-101)</h1>
          <p class="text-blue-100 text-lg max-w-2xl leading-relaxed">استكشاف القوى التي تحرك الأسواق وكيفية اتخاذ الأفراد والشركات للقرارات في ظل ندرة الموارد.</p>
        </div>
        <div class="flex items-center bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/20">
          <div class="w-16 h-16 rounded-lg overflow-hidden ml-4 border-2 border-white/50">
            <img alt="Instructor" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJxlrlL2wcpQzYKzdALdpejiamkzYbz1cURDrdeCqB159ORf0XcCtT0rxkysEZZOAhGqwK_YeJiSQOGvbEgB-SxykYq89C5wAsHi8Nq2QTDpcURKXVkWNvOKbk4wevCXhvQE0YQPJGFgomMl4B0uP1vKzT8FFD-D-skWUkL7LU-YNjIUOaM_On9_-IkB2SnlQd90g4Gy6euKyvoQVwc-bwFugeUtLy2Db-RV19Nz6XvyR8lVa0UF_T297Sw_q7ttIVggUG21fEIvkj"/>
          </div>
          <div class="text-right">
            <p class="text-sm opacity-80">أستاذ المادة</p>
            <p class="text-lg font-bold">د. محمد القحطاني</p>
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
        <button 
          @click="activeTab = 'assignments'" 
          class="px-8 py-4 font-bold flex items-center gap-2 whitespace-nowrap cursor-pointer hover:bg-bg-surface-hover transition-colors"
          :class="activeTab === 'assignments' ? 'text-primary border-b-2 border-primary' : 'text-text-muted hover:text-primary'"
        >
          <span class="material-symbols-outlined text-sm">assignment</span>
          الواجبات
        </button>
      </div>
    </div>

    <!-- Content Tab -->
    <div v-if="activeTab === 'content'" class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Sidebar (Progress & Info) -->
      <div class="lg:col-span-4 space-y-8">
        <!-- Progress -->
        <div class="bg-bg-surface p-6 rounded-xl shadow-sm border border-border-base transition-colors duration-300">
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
                <span class="text-xs font-semibold inline-block text-primary">65%</span>
              </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-bg-surface-hover">
              <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary" style="width:65%"></div>
            </div>
          </div>
          <div class="mt-6 flex flex-col gap-3">
            <div class="flex justify-between text-sm text-text-muted">
              <span>الدروس المنجزة:</span>
              <span class="font-semibold text-text-main">13 / 20</span>
            </div>
            <div class="flex justify-between text-sm text-text-muted">
              <span>الوقت المستغرق:</span>
              <span class="font-semibold text-text-main">8 ساعات</span>
            </div>
          </div>
          <RouterLink to="/student/courses/101/lecture/12" class="w-full mt-6 bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex justify-center items-center gap-2 cursor-pointer shadow-lg shadow-primary/20">
            <span class="material-symbols-outlined">play_circle</span>
            متابعة التعلم
          </RouterLink>
        </div>

        <!-- Instructor Info -->
        <div class="bg-bg-surface p-6 rounded-xl shadow-sm border border-border-base transition-colors duration-300">
          <h3 class="text-lg font-bold mb-4 text-text-main">عن المحاضر</h3>
          <div class="flex flex-col items-center text-center pb-4 border-b border-border-base">
            <img alt="Instructor" class="w-20 h-20 rounded-full mb-3 object-cover border-2 border-border-base" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKKpNRAatQPE-iBEdCirlufnf55EQBhXPLUNrJkRf1JItGcKsgD_-g1hA0F8zsk-mRGAf_UTjuA0QFpppsJ05bjz7GKT6iil3Ejj-phm54czqSJrNc2iaYOPwADlafdIJuxGp6rt-U44hX8uGHqPKK6tlsPvnS2zWT7TPq7EmmdxSREKUY-Eid_WtkDHI64NfGttaxu3MG9fdO2427K6ZQ2CQAlB5TkK3U0E-YYedCQ98jrPHwLh0RuaZ_CZVqswRsEkFbdCTDEtbG"/>
            <h4 class="font-bold text-text-main">د. محمد القحطاني</h4>
            <p class="text-sm text-text-muted">أستاذ مشارك في علم الاقتصاد</p>
          </div>
          <p class="mt-4 text-sm text-text-muted leading-relaxed text-right">
            خبير في الاقتصاد الكلي والجزئي مع أكثر من 15 عاماً من الخبرة في التدريس الأكاديمي والبحوث الاقتصادية بجامعة الملك سعود.
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
          <!-- Module 1 -->
          <div class="bg-bg-surface border border-border-base rounded-xl overflow-hidden transition-colors duration-300">
            <button class="w-full flex items-center justify-between p-5 hover:bg-bg-surface-hover transition-colors cursor-pointer">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span class="material-symbols-outlined text-green-600">check_circle</span>
                </div>
                <div class="text-right">
                  <h4 class="font-bold text-text-main">الوحدة الأولى: مدخل إلى علم الاقتصاد</h4>
                  <p class="text-xs text-text-muted mt-1">4 دروس • 1 اختبار قصير</p>
                </div>
              </div>
              <span class="material-symbols-outlined text-text-muted">expand_less</span>
            </button>
            <div class="p-2 border-t border-border-base">
              <div class="space-y-1">
                <div class="flex items-center justify-between p-3 rounded-lg hover:bg-bg-surface-hover transition-colors cursor-pointer group">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-text-muted group-hover:text-primary">play_circle_outline</span>
                    <span class="text-sm text-text-main">تعريف علم الاقتصاد والمشكلة الاقتصادية</span>
                  </div>
                  <span class="text-xs text-green-500 font-medium">مكتمل</span>
                </div>
                <div class="flex items-center justify-between p-3 rounded-lg hover:bg-bg-surface-hover transition-colors cursor-pointer group">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-text-muted group-hover:text-primary">description</span>
                    <span class="text-sm text-text-main">منحنى إمكانيات الإنتاج</span>
                  </div>
                  <span class="text-xs text-green-500 font-medium">مكتمل</span>
                </div>
                <div class="flex items-center justify-between p-3 rounded-lg hover:bg-bg-surface-hover transition-colors cursor-pointer group">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-text-muted group-hover:text-primary">quiz</span>
                    <span class="text-sm text-text-main">اختبار تقييمي: أساسيات الاقتصاد</span>
                  </div>
                  <span class="text-xs text-green-500 font-medium">9/10</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Module 2 (Active) -->
          <div class="bg-bg-surface border border-primary/30 rounded-xl overflow-hidden ring-1 ring-primary/10 transition-colors duration-300">
            <button class="w-full flex items-center justify-between p-5 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span class="material-symbols-outlined text-primary">pending</span>
                </div>
                <div class="text-right">
                  <h4 class="font-bold text-primary">الوحدة الثانية: قوى السوق (العرض والطلب)</h4>
                  <p class="text-xs text-primary/70 mt-1">6 دروس • 2 واجب منزلي</p>
                </div>
              </div>
              <span class="material-symbols-outlined text-primary">expand_less</span>
            </button>
            <div class="p-2 border-t border-border-base">
              <div class="space-y-1">
                <div class="flex items-center justify-between p-3 rounded-lg bg-primary/5 border-r-4 border-primary cursor-pointer">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary">play_circle_filled</span>
                    <span class="text-sm font-bold text-primary">قانون الطلب ومحدداته</span>
                  </div>
                  <span class="text-xs bg-primary text-white px-2 py-0.5 rounded">جاري الآن</span>
                </div>
                <div class="flex items-center justify-between p-3 rounded-lg hover:bg-bg-surface-hover transition-colors cursor-pointer group">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-text-muted group-hover:text-primary">play_circle_outline</span>
                    <span class="text-sm text-text-main">قانون العرض ومحدداته</span>
                  </div>
                  <span class="text-xs text-text-muted">15 دقيقة</span>
                </div>
                <div class="flex items-center justify-between p-3 rounded-lg hover:bg-bg-surface-hover transition-colors cursor-pointer group">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-text-muted group-hover:text-primary">analytics</span>
                    <span class="text-sm text-text-main">توازن السوق وأثر التغيرات</span>
                  </div>
                  <span class="text-xs text-text-muted">مقال</span>
                </div>
                <div class="flex items-center justify-between p-3 rounded-lg hover:bg-bg-surface-hover transition-colors cursor-pointer group opacity-60">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-text-muted">lock</span>
                    <span class="text-sm text-text-main">تطبيقات عملية على توازن السوق</span>
                  </div>
                  <span class="text-xs text-text-muted">مقفل</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Module 3 -->
          <div class="bg-bg-surface border border-border-base rounded-xl overflow-hidden opacity-75 transition-colors duration-300">
            <button class="w-full flex items-center justify-between p-5 hover:bg-bg-surface-hover transition-colors cursor-pointer">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-bg-surface-hover flex items-center justify-center">
                  <span class="material-symbols-outlined text-text-muted">lock</span>
                </div>
                <div class="text-right">
                  <h4 class="font-bold text-text-muted">الوحدة الثالثة: مرونات الطلب والعرض</h4>
                  <p class="text-xs text-text-muted mt-1">3 دروس • 1 مشروع بحثي</p>
                </div>
              </div>
              <span class="material-symbols-outlined text-text-muted">expand_more</span>
            </button>
          </div>

          <!-- Module 4 -->
          <div class="bg-bg-surface border border-border-base rounded-xl overflow-hidden opacity-75 transition-colors duration-300">
            <button class="w-full flex items-center justify-between p-5 hover:bg-bg-surface-hover transition-colors cursor-pointer">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-bg-surface-hover flex items-center justify-center">
                  <span class="material-symbols-outlined text-text-muted">lock</span>
                </div>
                <div class="text-right">
                  <h4 class="font-bold text-text-muted">الوحدة الرابعة: سلوك المستهلك</h4>
                  <p class="text-xs text-text-muted mt-1">5 دروس • اختبار منتصف الفصل</p>
                </div>
              </div>
              <span class="material-symbols-outlined text-text-muted">expand_more</span>
            </button>
          </div>
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Assignments from './Assignments.vue';

const activeTab = ref('content')
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
