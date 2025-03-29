import { ref, watch } from 'vue'

// Use a single instance of isDark to ensure consistent state across components
const isDark = ref(true) // Default to dark mode

// Try to get user preference from localStorage, if available
if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
  const storedPreference = localStorage.getItem('darkMode')
  if (storedPreference !== null) {
    isDark.value = storedPreference === 'true'
  }
}

// Setup document class to match the current mode
if (typeof document !== 'undefined') {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Watch for changes and update localStorage and document class
watch(isDark, (newValue) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('darkMode', newValue.toString())
  }
  
  if (typeof document !== 'undefined') {
    if (newValue) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
})

export function useDarkMode() {
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleDarkMode
  }
}