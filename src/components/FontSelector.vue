<script setup>
import { useFontType } from '../composables/useFontType'

const { currentFont, fontOptions, setFontType } = useFontType()
</script>

<template>
  <div class="relative">
    <label for="font-selector" class="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">Font Type</label>
    <select 
      id="font-selector"
      :value="currentFont"
      @change="setFontType($event.target.value)"
      class="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
    >
      <option 
        v-for="option in fontOptions" 
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none mt-6">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-dark-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</template>
