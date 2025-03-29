<script setup>
defineProps({
  education: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-gray-50 dark:bg-dark-700 p-6 rounded-lg shadow-sm">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
      <h3 class="text-xl font-bold text-dark-900 dark:text-white">{{ education.degree }}</h3>
      <span class="mt-2 md:mt-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
        {{ education.period }}
      </span>
    </div>
    
    <div class="mb-4">
      <p class="text-dark-700 dark:text-gray-300 font-medium">{{ education.institution }}</p>
      <p class="text-dark-500 dark:text-gray-400 text-sm">{{ education.location }}</p>
    </div>
    
    <div class="flex flex-wrap items-center justify-between">
      <span class="text-dark-600 dark:text-gray-400 text-sm">
        {{ education.level }}
      </span>
      
      <a 
        v-if="education.website" 
        :href="`https://${education.website}`" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="text-primary-600 dark:text-primary-400 hover:underline text-sm inline-flex items-center"
      >
        Visit Website
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
</template>
