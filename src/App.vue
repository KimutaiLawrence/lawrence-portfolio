<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import EducationSection from './components/EducationSection.vue';
import ContactSection from './components/ContactSection.vue';
import Footer from './components/Footer.vue';
import ThemeSettings from './components/ThemeSettings.vue';
import { useFontType } from './composables/useFontType';

const isLoaded = ref(false);
const { currentFont } = useFontType();

onMounted(() => {
  // Simulate loading delay
  setTimeout(() => {
    isLoaded.value = true;
  }, 500);
});
</script>

<template>
  <div class="min-h-screen flex flex-col" :class="[currentFont]">
    <Navbar />
    
    <main class="flex-1">
      <!-- Page transition wrapper -->
      <div :class="{ 'opacity-0': !isLoaded, 'opacity-100': isLoaded }" class="transition-opacity duration-500">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </main>
    
    <Footer />
    
    <!-- Theme Settings Panel -->
    <ThemeSettings />
  </div>
</template>