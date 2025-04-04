<template>
  <section id="home" class="min-h-screen flex items-center pt-32 pb-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute top-20 right-10 w-72 h-72 bg-primary-300/10 dark:bg-primary-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-10 left-10 w-60 h-60 bg-yellow-300/10 dark:bg-yellow-500/10 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-400/20 dark:bg-primary-600/20 rounded-full blur-2xl animate-glow"></div>
    
    <div class="container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <!-- Hero Content -->
        <div class="order-2 lg:order-1 lg:pr-8">
          <div class="space-y-6">
            <div class="inline-block px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300 rounded-full shadow-sm animate-fade-in opacity-0" style="animation-delay: 0.1s; animation-fill-mode: forwards;">
              Geospatial Developer & Software Engineer
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white animate-fade-in opacity-0" style="animation-delay: 0.3s; animation-fill-mode: forwards;">
              Building <span class="text-primary-600 dark:text-primary-400 relative inline-block">
                innovative
                <span class="absolute -bottom-1 left-0 w-full h-1 bg-primary-500/20 dark:bg-primary-400/20 rounded"></span>
              </span> geospatial applications<br>for a better world
            </h1>
            
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl animate-fade-in opacity-0" style="animation-delay: 0.5s; animation-fill-mode: forwards;">
              I create interactive web mapping solutions, geospatial data pipelines, and location-based applications to solve complex spatial challenges.
            </p>
            
            <div class="flex gap-4 animate-fade-in opacity-0" style="animation-delay: 0.7s; animation-fill-mode: forwards;">
              <a href="#projects" class="btn btn-primary relative group overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap">
                <span class="relative z-10 flex items-center">
                  Explore Projects
                  <svg class="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-700 dark:to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a href="#contact" class="btn btn-outline relative overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:border-primary-400 dark:hover:border-primary-500 whitespace-nowrap">
                <span class="relative z-10">Contact Me</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <button @click="handleWhatsAppClick" class="btn btn-outline relative overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:border-primary-400 dark:hover:border-primary-500 whitespace-nowrap">
                <span class="relative z-10 flex items-center">
                  Get CV via WhatsApp
                  <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>
          </div>
          
          <!-- Social Links -->
          <div class="pt-6 animate-fade-in opacity-0" style="animation-delay: 0.9s; animation-fill-mode: forwards;">
            <div class="flex space-x-5">
              <a 
                href="https://github.com/KimutaiLawrence" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <span class="block p-2 bg-gray-100/80 dark:bg-dark-800/80 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                </span>
              </a>
              <a 
                href="https://medium.com/@kimutai.lawrence19" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Medium"
              >
                <span class="block p-2 bg-gray-100/80 dark:bg-dark-800/80 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </span>
              </a>
              <a 
                href="https://x.com/lawrence_kim_" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="X (Twitter)"
              >
                <span class="block p-2 bg-gray-100/80 dark:bg-dark-800/80 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Hero Image with Animation -->
        <div class="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in opacity-0" style="animation-delay: 0.5s; animation-fill-mode: forwards;">
          <!-- Modern Profile Container -->
          <div class="relative animate-fade-in" style="animation-delay: 0.8s;">
            <!-- Animated Background Elements -->
            <div class="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-primary-400/20 rounded-lg blur-2xl animate-pulse"></div>
            <div class="absolute -inset-6 border-2 border-dashed border-primary-200/20 dark:border-primary-700/20 rounded-lg animate-spin-slow"></div>
            
            <!-- Main Image Container -->
            <div class="relative w-72 md:w-80 lg:w-96 rounded-lg bg-gradient-to-tr from-white to-gray-50 dark:from-dark-800 dark:to-dark-700 shadow-xl backdrop-blur-sm transform transition-all duration-500 hover:scale-105 group">
              <!-- Subtle Border Glow -->
              <div class="absolute inset-0 rounded-lg border-2 border-primary-200/50 dark:border-primary-700/50"></div>
              
              <!-- Image Container -->
              <div class="relative w-full h-full overflow-hidden rounded-lg">
                <!-- Profile Image -->
                <img 
                  :src="profileImage" 
                  alt="Lawrence Kimutai" 
                  class="w-full h-auto object-contain transform transition-all duration-500 group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                  style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;"
                />
                
                <!-- Subtle Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-primary-500/10 mix-blend-overlay"></div>
              </div>
            </div>
            
            <!-- Decorative Elements -->
            <div class="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-primary-500/20 rounded-lg shadow-lg transform rotate-12"></div>
            <div class="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-primary-300/20 to-yellow-400/20 rounded-lg shadow-lg transform -rotate-12"></div>
            
            <!-- Floating Accent Elements -->
            <div class="absolute top-1/4 -left-2 w-3 h-3 bg-primary-400/30 rounded-full animate-float"></div>
            <div class="absolute bottom-1/3 -right-2 w-2 h-2 bg-yellow-400/30 rounded-full animate-float-reverse"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- CV Code Modal -->
    <div v-if="showModal" 
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
         @click.self="closeModal">
      <div class="bg-white dark:bg-dark-800 rounded-lg p-6 max-w-md w-full mx-4 relative">
        <!-- Close Button -->
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div class="text-center">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Enter CV Access Code</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">Please enter the code provided in our WhatsApp conversation.</p>
          
          <div v-if="!isCodeValid">
            <input 
              v-model="cvCode"
              type="text"
              placeholder="Enter code"
              class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:bg-dark-700 dark:text-white"
              @keyup.enter="validateCode"
              @keyup.esc="closeModal"
            />
            <button 
              @click="validateCode"
              class="mt-4 btn btn-primary w-full"
            >
              Validate Code
            </button>
          </div>
          
          <div v-else class="text-green-600 dark:text-green-400">
            <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p>Code validated! Downloading CV...</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showModal = ref(false);
const cvCode = ref('');
const isCodeValid = ref(false);
const profileImage = ref('https://i.ibb.co/xqwNkQtp/IMG-2431.jpg');

const closeModal = () => {
  showModal.value = false;
  cvCode.value = '';
  isCodeValid.value = false;
};

const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEscapeKey);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscapeKey);
});

const handleWhatsAppClick = () => {
  window.open('https://wa.me/254759629059?text=Hi%20Lawrence%2C%20I%20am%20interested%20in%20your%20CV', '_blank');
  showModal.value = true;
};

const validateCode = () => {
  if (cvCode.value === '12345') {
    isCodeValid.value = true;
    // Redirect to CV download after a short delay
    setTimeout(() => {
      window.location.href = '/Lawrence-Kimutai-CV.pdf';
    }, 1000);
  } else {
    alert('Invalid code. Please try again.');
  }
};
</script>