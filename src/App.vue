<script setup>
import { onMounted } from 'vue'
import { useDarkMode } from './composables/useDarkMode'
import { useFontType } from './composables/useFontType'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import ThemeSettings from './components/ThemeSettings.vue'
import Footer from './components/Footer.vue'

const { isDark, toggleDarkMode } = useDarkMode()
const { currentFont } = useFontType()

onMounted(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <div :class="[
    currentFont, 
    'min-h-screen text-gray-900 dark:text-gray-100 bg-white dark:bg-dark-900 transition-colors duration-300 ease-in-out'
  ]">
    <Navbar />
    <ThemeSettings />
    
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
    
    <Footer />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply antialiased;
  }
  
  h1 {
    @apply text-4xl md:text-5xl lg:text-6xl;
  }
  
  h2 {
    @apply text-3xl md:text-4xl font-bold;
  }
}

@layer components {
  .container {
    @apply px-4 mx-auto max-w-7xl;
  }
  
  .section {
    @apply py-16 md:py-24;
  }
  
  .btn {
    @apply inline-flex items-center justify-center px-5 py-2.5 text-base font-medium rounded-lg transition-all duration-200 ease-in-out;
  }
  
  .btn-primary {
    @apply bg-primary-600 hover:bg-primary-700 text-white shadow-sm hover:shadow;
  }
  
  .btn-secondary {
    @apply bg-gray-200 hover:bg-gray-300 dark:bg-dark-700 dark:hover:bg-dark-600 text-gray-800 dark:text-gray-200;
  }
  
  .btn-outline {
    @apply border border-gray-300 dark:border-dark-600 bg-transparent hover:bg-gray-100 dark:hover:bg-dark-700;
  }
  
  .skill-badge {
    @apply px-3 py-1 m-1 text-sm bg-gray-100 dark:bg-dark-700 rounded-full;
  }
}
</style>