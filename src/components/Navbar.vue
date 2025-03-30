<script setup>
import { ref, onMounted } from 'vue';
import { useFontType } from '../composables/useFontType';

const isMenuOpen = ref(false);
const showSettings = ref(false);
const isDarkMode = ref(false);
const { currentFont, selectFont } = useFontType();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const navLinks = [
  { text: 'Home', href: '#home' },
  { text: 'Skills', href: '#skills' },
  { text: 'Experience', href: '#experience', highlight: true },
  { text: 'Projects', href: '#projects', highlight: true },
  { text: 'Blog', href: '#blog' },
  { text: 'Education', href: '#education' },
  { text: 'Contact', href: '#contact' },
];

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
};

onMounted(() => {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  }
});
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-b border-gray-200 dark:border-dark-700 transition-colors duration-300">
    <div class="container">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <a href="#home" class="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
          <span class="text-primary-600 dark:text-primary-400">Lawrence</span>
          <span>K</span>
        </a>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-1">
          <a 
            v-for="link in navLinks" 
            :key="link.text" 
            :href="link.href" 
            :class="[
              'px-3 py-2 rounded-md text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 font-medium transition-colors',
              link.highlight ? 'relative group' : ''
            ]"
          >
            {{ link.text }}
            <span v-if="link.highlight" class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500/0 group-hover:bg-primary-500/50 dark:group-hover:bg-primary-400/50 transition-all duration-300"></span>
            <span v-if="link.highlight" class="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </nav>
        
        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center space-x-4">
          <!-- Theme Toggle -->
          <button 
            @click="toggleTheme"
            class="p-2 rounded-lg text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          >
            <svg v-if="isDarkMode" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </button>

          <!-- Settings Button -->
          <button 
            @click="showSettings = true"
            class="p-2 rounded-lg text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </button>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu" 
          class="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"
          aria-controls="mobile-menu" 
          :aria-expanded="isMenuOpen"
        >
          <span class="sr-only">{{ isMenuOpen ? 'Close menu' : 'Open menu' }}</span>
          <svg 
            v-if="!isMenuOpen" 
            class="h-6 w-6" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg 
            v-else 
            class="h-6 w-6" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div 
      id="mobile-menu" 
      class="md:hidden" 
      :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
    >
      <div class="px-4 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-dark-700">
        <a 
          v-for="link in navLinks" 
          :key="link.text" 
          :href="link.href" 
          @click="closeMenu"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors',
            link.highlight ? 'relative group' : ''
          ]"
        >
          {{ link.text }}
          <span v-if="link.highlight" class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
      </div>
    </div>
  </header>

  <!-- Settings Modal -->
  <div v-if="showSettings" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white dark:bg-dark-800 rounded-lg p-6 max-w-md w-full mx-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">Settings</h3>
        <button 
          @click="showSettings = false"
          class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <div class="space-y-6">
        <!-- Theme Toggle -->
        <div>
          <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-4">Color Mode</h3>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
            <button
              @click="toggleTheme"
              type="button"
              :class="[
                isDarkMode ? 'bg-primary-600' : 'bg-gray-200 dark:bg-dark-700',
                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
              ]"
              role="switch"
              :aria-checked="isDarkMode"
            >
              <span
                :class="[
                  isDarkMode ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                ]"
              >
                <span
                  :class="[
                    isDarkMode ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
                    'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                  ]"
                  aria-hidden="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <span
                  :class="[
                    isDarkMode ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
                    'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                  ]"
                  aria-hidden="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </div>

        <!-- Font Selection -->
        <div>
          <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-4">Font Type</h3>
          <div class="space-y-3">
            <button
              @click="selectFont('font-sf-pro')"
              :class="[
                'flex items-center justify-between w-full px-4 py-3 rounded-lg transition',
                currentFont === 'font-sf-pro'
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-900 dark:text-primary-100'
                  : 'bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-800 dark:text-gray-200'
              ]"
            >
              <span class="font-sf-pro">SF Pro Display</span>
              <span v-if="currentFont === 'font-sf-pro'" class="flex-shrink-0 text-primary-600 dark:text-primary-400">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>

            <button
              @click="selectFont('font-sf-mono')"
              :class="[
                'flex items-center justify-between w-full px-4 py-3 rounded-lg transition',
                currentFont === 'font-sf-mono'
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-900 dark:text-primary-100'
                  : 'bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-800 dark:text-gray-200'
              ]"
            >
              <span class="font-sf-mono">SF Mono</span>
              <span v-if="currentFont === 'font-sf-mono'" class="flex-shrink-0 text-primary-600 dark:text-primary-400">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>

            <button
              @click="selectFont('font-new-york')"
              :class="[
                'flex items-center justify-between w-full px-4 py-3 rounded-lg transition',
                currentFont === 'font-new-york'
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-900 dark:text-primary-100'
                  : 'bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-800 dark:text-gray-200'
              ]"
            >
              <span class="font-new-york">New York</span>
              <span v-if="currentFont === 'font-new-york'" class="flex-shrink-0 text-primary-600 dark:text-primary-400">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>