<script setup>
import { computed } from 'vue'

const props = defineProps({
  experience: {
    type: Object,
    required: true
  },
  position: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value)
  },
  isFirst: {
    type: Boolean,
    default: false
  },
  isLast: {
    type: Boolean,
    default: false
  }
})

// On mobile, always show items on right side
const containerClasses = computed(() => {
  return {
    'md:ml-auto': props.position === 'right',
    'md:mr-auto': props.position === 'left'
  }
})

const timelinePointClasses = computed(() => {
  return {
    'md:left-1/2 md:-translate-x-1/2': true,
    'bg-primary-500': props.isFirst,
    'bg-primary-400': !props.isFirst && !props.isLast,
    'bg-primary-300': props.isLast
  }
})
</script>

<template>
  <div class="relative flex flex-col md:flex-row items-start">
    <!-- Timeline point -->
    <div 
      class="absolute top-0 left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-dark-800 z-10 transform -translate-x-1/2"
      :class="timelinePointClasses"
    ></div>
    
    <!-- Content -->
    <div class="pl-8 md:pl-0 w-full md:w-1/2" :class="containerClasses">
      <div class="bg-gray-50 dark:bg-dark-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h3 class="text-xl font-bold text-dark-900 dark:text-white">{{ experience.title }}</h3>
          <span class="mt-2 md:mt-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
            {{ experience.period }}
          </span>
        </div>
        
        <div class="mb-4">
          <p class="text-dark-700 dark:text-gray-300 font-medium">{{ experience.company }}</p>
          <p class="text-dark-500 dark:text-gray-400 text-sm">{{ experience.location }}</p>
        </div>
        
        <p class="text-dark-600 dark:text-gray-300 mb-4">{{ experience.description }}</p>
        
        <div class="mb-4">
          <h4 class="font-medium text-dark-800 dark:text-white mb-2">Key Responsibilities:</h4>
          <ul class="list-disc list-inside text-dark-600 dark:text-gray-400 space-y-1">
            <li v-for="(responsibility, index) in experience.responsibilities" :key="index">
              {{ responsibility }}
            </li>
          </ul>
        </div>
        
        <div class="mt-4 flex flex-wrap">
          <span 
            v-for="(skill, index) in experience.skills" 
            :key="index"
            class="skill-badge"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
