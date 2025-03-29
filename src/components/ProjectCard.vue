<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-white dark:bg-dark-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
    <div class="aspect-w-16 aspect-h-9 overflow-hidden">
      <img :src="project.image" :alt="project.title" class="w-full h-full object-cover">
    </div>
    
    <div class="p-6">
      <h3 class="font-bold text-xl text-dark-900 dark:text-white mb-2">{{ project.title }}</h3>
      
      <p class="text-dark-600 dark:text-gray-400 mb-4 min-h-[80px]">{{ project.description }}</p>
      
      <div class="flex flex-wrap mb-4">
        <span 
          v-for="(tech, index) in project.tech" 
          :key="index"
          class="skill-badge"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%;
}

.aspect-w-16 img {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
