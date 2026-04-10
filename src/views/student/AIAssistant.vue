<template>
  <div class="flex h-[calc(100vh-64px)] overflow-hidden font-display -m-8">
    <!-- Sidebar Navigation (Right side in RTL) -->
    <aside class="w-80 bg-bg-surface border-l border-border-base flex flex-col shrink-0 transition-colors duration-300">
      <div class="p-4 border-b border-border-base">
        <button @click="startNewConversation"
          class="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-lg py-2.5 font-bold transition-colors cursor-pointer shadow-sm">
          <span class="material-symbols-outlined">add</span>
          <span>محادثة جديدة</span>
        </button>
      </div>
      <div class="p-4">
        <label class="relative block">
          <span class="absolute inset-y-0 right-3 flex items-center text-text-muted">
            <span class="material-symbols-outlined text-sm">search</span>
          </span>
          <input
            class="w-full bg-bg-base border-none rounded-lg pr-10 pl-4 py-2 text-sm focus:ring-2 focus:ring-primary placeholder:text-text-muted outline-none transition-colors"
            placeholder="البحث في السجل..." type="text" />
        </label>
      </div>
      <nav class="flex-1 overflow-y-auto px-2 space-y-6 no-scrollbar">
        <!-- Recent Chats Section -->
        <div>
          <h3 class="px-3 text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2">المحادثات السابقة</h3>

          <!-- Loading State for Conversations -->
          <div v-if="isLoadingConversations" class="px-3 py-2 space-y-2">
            <div class="h-9 bg-border-base/50 rounded-lg animate-pulse"></div>
            <div class="h-9 bg-border-base/50 rounded-lg animate-pulse w-10/12"></div>
            <div class="h-9 bg-border-base/50 rounded-lg animate-pulse w-11/12"></div>
          </div>

          <div v-else class="space-y-1">
            <a v-for="conv in conversations" :key="conv.id"
               @click.prevent="selectConversation(conv.id)"
               class="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors"
               :class="conversationId === conv.id ? 'bg-bg-base text-primary font-medium' : 'hover:bg-bg-base text-text-main'">
              <span class="material-symbols-outlined shrink-0 text-lg">chat_bubble</span>
              <span class="truncate text-sm">{{ conv.title || 'محادثة ذكية' }}</span>
            </a>
            <div v-if="conversations.length === 0" class="px-3 py-3 text-xs text-text-muted text-center bg-bg-base/50 rounded-lg border border-border-base/50 border-dashed">
              لا توجد محادثات سابقة.
            </div>
          </div>
        </div>
      </nav>
    </aside>
    <!-- Main Chat Area -->
    <main class="flex-1 flex flex-col h-full bg-bg-base relative transition-colors duration-300">
      <!-- Top Navbar -->
      <header
        class="flex items-center justify-between bg-bg-surface px-8 py-4 border-b border-border-base z-10 shadow-sm transition-colors duration-300">
        <div class="flex items-center gap-4">
          <div class="relative">
            <div
              class="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <span class="material-symbols-outlined text-2xl">smart_toy</span>
            </div>
            <span
              class="absolute bottom-0 left-0 size-3 bg-green-500 border-2 border-white dark:border-border-base rounded-full"></span>
          </div>
          <div>
            <h2 class="text-lg font-bold leading-tight text-text-main">المساعد الذكي</h2>
            <p class="text-xs text-text-muted">متصل الآن - جاهز للمساعدة الأكاديمية</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button class="p-2 text-text-muted hover:bg-bg-surface-hover rounded-lg transition-colors cursor-pointer">
            <span class="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </header>
      <!-- Loading State -->
      <div v-if="isLoading" class="flex-1 flex items-center justify-center">
        <div class="flex flex-col items-center gap-3">
          <span class="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
          <p class="text-sm font-medium text-text-muted">جاري تحميل المحادثة...</p>
        </div>
      </div>

      <!-- Messages Stream -->
      <section v-else ref="messagesContainer" class="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth no-scrollbar">
        <!-- Empty State -->
        <div v-if="messages.length === 0" class="h-full flex flex-col items-center justify-center text-center max-w-sm mx-auto">
          <div class="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            <span class="material-symbols-outlined text-4xl">smart_toy</span>
          </div>
          <h3 class="text-lg font-bold text-text-main mb-2">كيف يمكنني مساعدتك اليوم؟</h3>
          <p class="text-sm text-text-muted leading-relaxed">أنا مساعدك الذكي الخاص بـ Smart Learn. يمكنك الاستفسار عن دروسك، طلب شروحات، أو المساعدة في الواجبات.</p>
        </div>

        <div v-for="msg in messages" :key="msg.id" class="flex items-start gap-4"
          :class="msg.sender === 'user' ? 'flex-row-reverse' : ''">
          <!-- Avatar -->
          <div v-if="msg.sender === 'user'"
            class="size-10 shrink-0 rounded-full bg-center bg-cover border border-border-base"
            data-alt="User avatar icon"
            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBL-c6jEXOjaeup_xJDzQz-3GRHCYIeMvTFLyy8SdRBgaa_cTzjbQQe7qyEQF2X_Ge9FW-0NM8NGwHLLXfUXihyPgyB9IsUzljs8KogfhaDS7bWUvgFk28Aw0XWVywZjCJ765tTOEp2gPJFaxp2QcQu5Oq6-W_eh13iuH4_mz6CsQgjc0_GXq9jgjpuNAe047PDSRgeNUxvpW6tWiBgBBqV4dOJLqvCDPlA4XbtkXITqbJLmyuTJlyDkGXxq2C__vClm1WXjxAQxpGE");'>
          </div>
          <div v-else class="size-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-white"
            data-alt="AI assistant logo">
            <span class="material-symbols-outlined">smart_toy</span>
          </div>

          <!-- Content -->
          <div class="flex flex-col gap-1 items-start max-w-2xl"
            :class="msg.sender === 'user' ? 'items-end' : 'items-start'">
            <div class="flex items-center gap-2 mb-1" :class="msg.sender === 'user' ? 'flex-row-reverse' : ''">
              <span class="text-xs font-semibold" :class="msg.sender === 'user' ? 'text-text-main' : 'text-primary'">{{
                msg.sender === 'user' ? 'أنت' : 'ال' }}</span>
              <span class="text-[10px] text-text-muted">{{ msg.time }}</span>
            </div>

            <div class="shadow-sm leading-relaxed" :class="[
              msg.sender === 'user' ? 'bg-primary text-white rounded-2xl rounded-tr-none px-5 py-3' : 'bg-bg-surface text-text-main rounded-2xl rounded-tl-none px-5 py-4 border border-border-base',
              msg.type === 'image' ? 'p-2' : ''
            ]">
              <div v-if="msg.type === 'text'">
                <p v-html="msg.text" class="whitespace-pre-wrap"></p>
                <!-- Resource/Cards injection if any (legacy support) -->
                <div v-if="msg.cards" class="mt-4 grid grid-cols-1 gap-3">
                  <div v-for="(card, idx) in msg.cards" :key="idx"
                    class="flex items-center gap-3 p-3 rounded-xl bg-bg-base border border-border-base hover:border-primary transition-all cursor-pointer group">
                    <div class="size-10 rounded-lg flex items-center justify-center" :class="card.iconBg">
                      <span class="material-symbols-outlined">{{ card.icon }}</span>
                    </div>
                    <div class="flex-1 text-right">
                      <h4 class="text-sm font-bold group-hover:text-primary transition-colors text-text-main">{{
                        card.title }}</h4>
                      <p class="text-[11px] text-text-muted">{{ card.subtitle }}</p>
                    </div>
                    <span class="material-symbols-outlined text-text-muted">{{ card.actionIcon }}</span>
                  </div>
                </div>
                <!-- Action Card Injection (legacy) -->
                <div v-if="msg.actionCard"
                  class="w-full mt-4 bg-bg-surface rounded-xl border border-primary/20 shadow-lg p-5 overflow-hidden relative">
                  <div class="absolute top-0 right-0 w-1 bg-primary h-full"></div>
                  <div class="flex items-stretch gap-5">
                    <div class="flex flex-col flex-1 justify-between py-1 text-right">
                      <div>
                        <div class="flex items-center gap-2 mb-1">
                          <span class="material-symbols-outlined text-primary text-lg">bolt</span>
                          <p class="text-primary text-xs font-bold uppercase">إجراء مقترح</p>
                        </div>
                        <h4 class="text-text-main text-base font-bold mb-1">{{ msg.actionCard.title }}</h4>
                        <p class="text-text-muted text-sm leading-normal">{{ msg.actionCard.desc }}</p>
                      </div>
                      <button
                        class="mt-4 flex items-center justify-center gap-2 bg-primary text-white text-sm font-bold rounded-lg px-6 py-2 w-fit hover:bg-primary/90 transition-all cursor-pointer">
                        <span>{{ msg.actionCard.buttonText }}</span>
                        <span class="material-symbols-outlined text-sm">arrow_left_alt</span>
                      </button>
                    </div>
                    <div class="w-32 h-32 shrink-0 bg-cover bg-center rounded-lg shadow-inner"
                      :style="`background-image: url('${msg.actionCard.image}')`"></div>
                  </div>
                </div>
              </div>

              <!-- File Message -->
              <div v-else-if="msg.type === 'file'" class="flex items-center gap-3">
                <div class="size-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <span class="material-symbols-outlined text-white">description</span>
                </div>
                <div>
                  <p class="font-bold text-sm">{{ msg.fileName }}</p>
                  <p class="text-xs opacity-70">تم الرفع</p>
                </div>
              </div>

              <!-- Image Message -->
              <div v-else-if="msg.type === 'image'">
                <img :src="msg.imageUrl" alt="Uploaded image" class="rounded-lg max-w-sm w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <!-- AI is typing state -->
        <div v-if="isTyping" class="flex items-start gap-4">
          <div class="size-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-white">
            <span class="material-symbols-outlined">smart_toy</span>
          </div>
          <div class="bg-bg-base rounded-2xl rounded-tl-none px-4 py-3 flex gap-1">
            <span class="size-1.5 bg-text-muted rounded-full animate-bounce"></span>
            <span class="size-1.5 bg-text-muted rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span class="size-1.5 bg-text-muted rounded-full animate-bounce [animation-delay:0.4s]"></span>
          </div>
        </div>
      </section>
      <!-- Input Area -->
      <footer class="p-6 bg-bg-surface border-t border-border-base">
        <div class="max-w-4xl mx-auto relative group">
          <div
            class="bg-bg-base rounded-2xl p-2 focus-within:ring-2 focus-within:ring-primary/50 transition-all shadow-sm">
            <div class="flex items-end gap-2">
              <button @click="triggerFileUpload"
                class="p-2 text-text-muted hover:text-primary rounded-xl transition-colors cursor-pointer"
                title="إرفاق ملف">
                <span class="material-symbols-outlined">attach_file</span>
              </button>
              <button @click="triggerImageUpload"
                class="p-2 text-text-muted hover:text-primary rounded-xl transition-colors cursor-pointer"
                title="إرفاق صورة">
                <span class="material-symbols-outlined">image</span>
              </button>
              <textarea v-model="newMessage" @keydown.enter.exact.prevent="sendMessage"
                class="flex-1 bg-transparent border-none focus:ring-0 resize-none py-3 text-sm placeholder:text-text-muted max-h-40 outline-none text-text-main"
                placeholder="اسأل عن أي موضوع أكاديمي أو اطلب المساعدة في واجباتك..." rows="1"></textarea>
              <button @click="sendMessage"
                class="bg-primary text-white size-11 rounded-xl flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer">
                <span class="material-symbols-outlined rotate-180">send</span>
              </button>
            </div>
          </div>
          <p class="text-center text-[10px] text-text-muted mt-3 uppercase tracking-widest font-medium">قد يرتكب المساعد
            الذكي أخطاء. تحقق من المعلومات الهامة.</p>
        </div>
      </footer>
      <!-- Hidden Inputs -->
      <input type="file" ref="fileInput" class="hidden" @change="handleFileUpload" />
      <input type="file" ref="imageInput" class="hidden" accept="image/*" @change="handleImageUpload" />
    </main>
  </div>
</template>

<script setup>
import { chatApi } from '@/api/chat';
import { nextTick, onMounted, ref } from 'vue';

const messagesContainer = ref(null);
const fileInput = ref(null);
const imageInput = ref(null);
const newMessage = ref('');
const isTyping = ref(false);
const conversationId = ref(null);
const conversations = ref([]);
const isLoading = ref(true);
const isLoadingConversations = ref(true);

const messages = ref([]);

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};

const loadConversations = async () => {
  isLoadingConversations.value = true;
  try {
    const { data } = await chatApi.getConversations();
    conversations.value = data.data || data || [];

    if (conversations.value.length > 0 && !conversationId.value) {
      const lastConv = conversations.value[0];
      conversationId.value = lastConv.id;
      await loadMessages(lastConv.id);
    } else if (conversations.value.length === 0) {
      isLoading.value = false;
    }
  } catch (error) {
    console.error('[AIAssistant] Failed to load conversations:', error);
    isLoading.value = false;
  } finally {
    isLoadingConversations.value = false;
  }
};

const loadMessages = async (convId) => {
  isLoading.value = true;
  try {
    const { data } = await chatApi.getMessages(convId);
    const rawMessages = data.data || data || [];
    messages.value = rawMessages.flatMap(m => {
      const msgs = [];
      if (m.message) {
        msgs.push({
          id: m.id + '-user',
          text: m.message,
          sender: 'user',
          time: m.created_at ? new Date(m.created_at).toLocaleTimeString('ar-EG', { hour: 'numeric', minute: 'numeric' }) : '',
          type: 'text'
        });
      }
      if (m.response) {
        msgs.push({
          id: m.id + '-ai',
          text: m.response,
          sender: 'ai',
          time: m.updated_at ? new Date(m.updated_at).toLocaleTimeString('ar-EG', { hour: 'numeric', minute: 'numeric' }) : '',
          type: 'text'
        });
      }
      return msgs;
    });
    isLoading.value = false;
    scrollToBottom();
  } catch (error) {
    console.error('[AIAssistant] Failed to load messages:', error);
    isLoading.value = false;
  }
};

const startNewConversation = async () => {
  try {
    const { data } = await chatApi.startConversation();
    const conv = data.data || data;
    conversationId.value = conv.id;
    messages.value = [];
    await loadConversations();
  } catch (error) {
    console.error('[AIAssistant] Failed to start conversation:', error);
  }
};

const selectConversation = async (id) => {
  if (conversationId.value === id) return;
  conversationId.value = id;
  await loadMessages(id);
};

const sendMessage = async () => {
  if (!newMessage.value.trim()) return;

  const userMsg = newMessage.value.trim();

  // Show user message immediately
  messages.value.push({
    id: Date.now(),
    text: userMsg,
    sender: 'user',
    time: new Date().toLocaleTimeString('ar-EG', { hour: 'numeric', minute: 'numeric' }),
    type: 'text'
  });

  newMessage.value = '';
  scrollToBottom();

  // Start new conversation if none
  if (!conversationId.value) {
    await startNewConversation();
  }

  // Send to API
  isTyping.value = true;
  try {
    const { data } = await chatApi.sendMessage(conversationId.value, { message: userMsg });
    const response = data.data || data;

    isTyping.value = false;
    messages.value.push({
      id: Date.now() + 1,
      text: response.response || response.reply || response.content || 'تم استلام رسالتك.',
      sender: 'ai',
      time: new Date().toLocaleTimeString('ar-EG', { hour: 'numeric', minute: 'numeric' }),
      type: 'text'
    });
    scrollToBottom();
  } catch (error) {
    isTyping.value = false;
    console.error('[AIAssistant] Send failed:', error);
    messages.value.push({
      id: Date.now() + 1,
      text: 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.',
      sender: 'ai',
      time: new Date().toLocaleTimeString('ar-EG', { hour: 'numeric', minute: 'numeric' }),
      type: 'text'
    });
    scrollToBottom();
  }
};

const triggerFileUpload = () => fileInput.value.click();
const triggerImageUpload = () => imageInput.value.click();

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    messages.value.push({
      id: Date.now(),
      text: '',
      sender: 'user',
      time: new Date().toLocaleTimeString('ar-EG', { hour: 'numeric', minute: 'numeric' }),
      type: 'file',
      fileName: file.name
    });
    scrollToBottom();
    event.target.value = '';
  }
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      messages.value.push({
        id: Date.now(),
        sender: 'user',
        time: new Date().toLocaleTimeString('ar-EG', { hour: 'numeric', minute: 'numeric' }),
        type: 'image',
        imageUrl: e.target.result
      });
      scrollToBottom();
    };
    reader.readAsDataURL(file);
    event.target.value = '';
  }
};

onMounted(() => {
  loadConversations();
});
</script>
