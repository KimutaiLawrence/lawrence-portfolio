import { ref, watch } from 'vue'

// Font options
const FONTS = {
  SF_PRO: 'font-sf-pro',
  SF_MONO: 'font-sf-mono',
  NEW_YORK: 'font-new-york'
}

// Use a single instance of currentFont to ensure consistent state across components
const currentFont = ref(FONTS.SF_PRO) // Default to SF Pro

// Try to get user preference from localStorage, if available
if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
  const storedFont = localStorage.getItem('fontType')
  if (storedFont && Object.values(FONTS).includes(storedFont)) {
    currentFont.value = storedFont
  }
}

// Watch for changes and update localStorage
watch(currentFont, (newValue) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('fontType', newValue)
  }
})

export function useFontType() {
  const selectFont = (fontClass) => {
    if (Object.values(FONTS).includes(fontClass)) {
      currentFont.value = fontClass
    }
  }

  return {
    currentFont,
    selectFont,
    fonts: FONTS
  }
}