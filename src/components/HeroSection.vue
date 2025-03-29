<template>
  <section id="home" class="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-800">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <!-- Hero Content -->
        <div class="order-2 lg:order-1">
          <div class="space-y-6">
            <div class="inline-block px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300 rounded-full">
              Geospatial Developer & Software Engineer
            </div>
            
            <h1 class="font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Building <span class="text-primary-600 dark:text-primary-400">innovative</span> geospatial applications for a better world
            </h1>
            
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              I create interactive web mapping solutions, geospatial data pipelines, and location-based applications to solve complex spatial challenges.
            </p>
            
            <div class="flex flex-wrap gap-4">
              <a href="#projects" class="btn btn-primary">
                Explore Projects
                <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" class="btn btn-outline">
                Contact Me
              </a>
            </div>
            
            <!-- Social Links -->
            <div class="pt-6">
              <div class="flex space-x-4">
                <a 
                  href="https://github.com/lawrencekimutai" 
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
                  href="https://linkedin.com/in/lawrence-kimutai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/lawrence_kim" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  aria-label="Twitter"
                >
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Hero Image -->
        <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary-500 to-primary-300 dark:from-primary-600 dark:to-primary-400 shadow-xl">
            <div class="absolute inset-3 bg-white dark:bg-dark-800 rounded-full overflow-hidden border-4 border-white dark:border-dark-700">
              <div class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-dark-700">
                <!-- Placeholder for Profile Image -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <!-- Decorative Elements -->
            <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 dark:bg-yellow-500 rounded-full" style="opacity: 0.8"></div>
            <div class="absolute -bottom-4 -left-4 w-8 h-8 bg-primary-300 dark:bg-primary-700 rounded-full" style="opacity: 0.6"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>