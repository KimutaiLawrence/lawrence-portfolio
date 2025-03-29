<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const isSubmitting = ref(false)
const submitStatus = ref(null) // null, 'success', 'error'
const errorMessage = ref('')

const handleSubmit = async () => {
  // Reset status
  submitStatus.value = null
  errorMessage.value = ''
  
  // Simple validation
  if (!name.value || !email.value || !message.value) {
    errorMessage.value = 'Please fill out all required fields.'
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    errorMessage.value = 'Please enter a valid email address.'
    return
  }
  
  try {
    isSubmitting.value = true
    
    // Simulate API call for now
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Since this is a simulation, we'll always succeed
    submitStatus.value = 'success'
    
    // Reset form
    name.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''
  } catch (error) {
    submitStatus.value = 'error'
    errorMessage.value = 'Something went wrong. Please try again later.'
    console.error('Contact form error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="text-center mb-16">Get In Touch</h2>
      
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                  <p class="mt-1 text-gray-600 dark:text-gray-300">
                    <a href="mailto:lawrencekimutai@gmail.com" class="hover:text-primary-600 dark:hover:text-primary-400">lawrencekimutai@gmail.com</a>
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                  <p class="mt-1 text-gray-600 dark:text-gray-300">Nairobi, Kenya</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium text-gray-900 dark:text-white">Let's connect</h4>
                  <div class="mt-2 flex space-x-4">
                    <a 
                      href="https://dekut-dsail.github.io/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="https://medium.com/@kimutai.lawrence19" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      aria-label="Medium"
                    >
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://x.com/lawrence_kim_" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      aria-label="X (Twitter)"
                    >
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mt-12">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">Available For</h3>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-lg font-medium">
                  Freelance Projects
                </span>
                <span class="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-lg font-medium">
                  Contract Work
                </span>
                <span class="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-lg font-medium">
                  Consulting
                </span>
                <span class="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-lg font-medium">
                  Remote Opportunities
                </span>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div>
            <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 md:p-8 border border-gray-200 dark:border-dark-700">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              
              <!-- Status Messages -->
              <div v-if="submitStatus === 'success'" class="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg">
                Your message has been sent successfully. I'll get back to you soon!
              </div>
              
              <div v-if="submitStatus === 'error' || errorMessage" class="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg">
                {{ errorMessage || 'Something went wrong. Please try again later.' }}
              </div>
              
              <form @submit.prevent="handleSubmit">
                <div class="grid grid-cols-1 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name <span class="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      v-model="name" 
                      placeholder="Your name" 
                      class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                    >
                  </div>
                  
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email <span class="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="email" 
                      placeholder="Your email address" 
                      class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                    >
                  </div>
                  
                  <div>
                    <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      v-model="subject" 
                      placeholder="Subject of your message" 
                      class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                    >
                  </div>
                  
                  <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message <span class="text-red-500">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      v-model="message" 
                      rows="5" 
                      placeholder="Your message" 
                      class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      class="btn btn-primary w-full md:w-auto"
                      :disabled="isSubmitting"
                    >
                      <span v-if="isSubmitting">
                        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                      <span v-else>
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>