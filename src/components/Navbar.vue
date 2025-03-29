<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const navLinks = [
  { text: 'Home', href: '#home' },
  { text: 'Skills', href: '#skills' },
  { text: 'Experience', href: '#experience' },
  { text: 'Projects', href: '#projects' },
  { text: 'Blog', href: '#blog' },
  { text: 'Education', href: '#education' },
  { text: 'Contact', href: '#contact' },
];
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
            class="px-3 py-2 rounded-md text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 font-medium transition-colors"
          >
            {{ link.text }}
          </a>
        </nav>
        
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
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
        >
          {{ link.text }}
        </a>
      </div>
    </div>
  </header>
</template>