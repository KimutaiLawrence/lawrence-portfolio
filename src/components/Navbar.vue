<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'

const { isDark } = useDarkMode()
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const scrollThreshold = 50

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const checkScroll = () => {
  isScrolled.value = window.scrollY > scrollThreshold
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <header 
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    ]"
  >
    <div class="container">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <a href="/" class="flex items-center text-xl font-bold">
          <span class="text-primary-600 dark:text-primary-400">Lawrence</span>
          <span class="ml-1">Kimutai</span>
        </a>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="/#home" class="nav-link">Home</a>
          <a href="/#about" class="nav-link">About</a>
          <a href="/#skills" class="nav-link">Skills</a>
          <a href="/#experience" class="nav-link">Experience</a>
          <a href="/#projects" class="nav-link">Projects</a>
          <a href="/#education" class="nav-link">Education</a>
          <a href="/#contact" class="nav-link">Contact</a>
        </nav>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu"
          aria-label="Menu"
          class="md:hidden flex items-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              v-if="!isMenuOpen" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
            <path 
              v-else 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <div 
      v-show="isMenuOpen"
      class="md:hidden bg-white dark:bg-dark-900 shadow-lg origin-top animate-fade-in"
    >
      <div class="container py-4">
        <nav class="flex flex-col space-y-4">
          <a @click="closeMenu" href="/#home" class="nav-link py-2">Home</a>
          <a @click="closeMenu" href="/#about" class="nav-link py-2">About</a>
          <a @click="closeMenu" href="/#skills" class="nav-link py-2">Skills</a>
          <a @click="closeMenu" href="/#experience" class="nav-link py-2">Experience</a>
          <a @click="closeMenu" href="/#projects" class="nav-link py-2">Projects</a>
          <a @click="closeMenu" href="/#education" class="nav-link py-2">Education</a>
          <a @click="closeMenu" href="/#contact" class="nav-link py-2">Contact</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  @apply font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors;
}
</style>