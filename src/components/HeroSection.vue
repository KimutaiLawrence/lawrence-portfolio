<template>
  <section id="home" class="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute top-20 right-10 w-72 h-72 bg-primary-300/10 dark:bg-primary-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-10 left-10 w-60 h-60 bg-yellow-300/10 dark:bg-yellow-500/10 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-400/20 dark:bg-primary-600/20 rounded-full blur-2xl animate-glow"></div>
    
    <div class="container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <!-- Hero Content -->
        <div class="order-2 lg:order-1">
          <div class="space-y-6">
            <div class="inline-block px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300 rounded-full shadow-sm animate-fade-in opacity-0" style="animation-delay: 0.1s; animation-fill-mode: forwards;">
              Geospatial Developer & Software Engineer
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white animate-fade-in opacity-0" style="animation-delay: 0.3s; animation-fill-mode: forwards;">
              Building <span class="text-primary-600 dark:text-primary-400 relative inline-block">
                innovative
                <span class="absolute -bottom-1 left-0 w-full h-1 bg-primary-500/20 dark:bg-primary-400/20 rounded"></span>
              </span> geospatial applications for a better world
            </h1>
            
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl animate-fade-in opacity-0" style="animation-delay: 0.5s; animation-fill-mode: forwards;">
              I create interactive web mapping solutions, geospatial data pipelines, and location-based applications to solve complex spatial challenges.
            </p>
            
            <div class="flex flex-wrap gap-4 animate-fade-in opacity-0" style="animation-delay: 0.7s; animation-fill-mode: forwards;">
              <a href="#projects" class="btn btn-primary relative group overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span class="relative z-10 flex items-center">
                  Explore Projects
                  <svg class="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-700 dark:to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a href="#contact" class="btn btn-outline relative overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:border-primary-400 dark:hover:border-primary-500">
                <span class="relative z-10">Contact Me</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/Lawrence-Kimutai-CV.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-outline relative overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:border-primary-400 dark:hover:border-primary-500">
                <span class="relative z-10 flex items-center">
                  Download CV
                  <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            
            <!-- Social Links -->
            <div class="pt-6 animate-fade-in opacity-0" style="animation-delay: 0.9s; animation-fill-mode: forwards;">
              <div class="flex space-x-5">
                <a 
                  href="https://dekut-dsail.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <span class="block p-2 bg-gray-100/80 dark:bg-dark-800/80 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="https://medium.com/@kimutai.lawrence19" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label="Medium"
                >
                  <span class="block p-2 bg-gray-100/80 dark:bg-dark-800/80 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  </span>
                </a>
                <a 
                  href="https://x.com/lawrence_kim_" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label="X (Twitter)"
                >
                  <span class="block p-2 bg-gray-100/80 dark:bg-dark-800/80 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Hero Image with Animation -->
        <div class="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in opacity-0" style="animation-delay: 0.5s; animation-fill-mode: forwards;">
          <!-- Modern Profile Container with Glow Effect -->
          <div class="relative animate-fade-in" style="animation-delay: 0.8s; transform-style: preserve-3d; perspective: 1000px;">
            <!-- Background Glow Effect -->
            <div class="absolute -inset-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full blur-xl opacity-70 animate-pulse"></div>
            
            <!-- Orbit Line (decorative) -->
            <div class="absolute -inset-6 border-2 border-dashed border-primary-200/30 dark:border-primary-700/30 rounded-full"></div>
            
            <!-- Main Image Container with 3D hover effect -->
            <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary-500 to-primary-300 dark:from-primary-600 dark:to-primary-400 shadow-2xl backdrop-blur-sm transform transition-all duration-500 hover:rotate-6 group">
              <!-- Inner white border with animation -->
              <div class="absolute inset-0 rounded-full border-4 border-white/20 dark:border-white/10 animate-pulse" style="animation-delay: 1.2s;"></div>
              
              <!-- Image Container -->
              <div class="absolute inset-2 bg-white dark:bg-dark-800 rounded-full overflow-hidden border-2 border-white/80 dark:border-dark-700/80 shadow-inner">
                <!-- Profile Image with Blur Effects -->
                <div class="relative w-full h-full overflow-hidden">
                  <!-- Main Profile Image -->
                  <img 
                    src="/images/profile.jpg" 
                    alt="Lawrence Kimutai" 
                    class="w-full h-full object-cover object-top transition-all duration-500 ease-in-out filter group-hover:scale-105"
                  />
                  
                  <!-- Radial Overlay for Vignette Effect -->
                  <div class="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-primary-500/30 mix-blend-overlay"></div>
                  
                  <!-- Hover Overlay -->
                  <div class="absolute inset-0 bg-primary-500/10 dark:bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <!-- Shine effect -->
              <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <!-- Decorative Elements with Animation -->
            <div class="absolute -top-8 -right-5 w-14 h-14 bg-yellow-400 dark:bg-yellow-500 rounded-full shadow-lg transform rotate-12 animate-glow" style="opacity: 0.8; animation-delay: 0.2s;"></div>
            <div class="absolute -bottom-5 -left-5 w-10 h-10 bg-primary-300 dark:bg-primary-700 rounded-full shadow-lg animate-pulse" style="animation-delay: 0.4s;"></div>
            <div class="absolute bottom-10 -right-8 w-6 h-6 bg-primary-400 dark:bg-primary-600 rounded-full shadow-lg animate-glow" style="animation-delay: 0.6s;"></div>
            
            <!-- Floating Particle Effects -->
            <div class="absolute top-1/4 left-0 w-3 h-3 bg-primary-300/50 dark:bg-primary-500/50 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
            <div class="absolute bottom-1/3 right-0 w-2 h-2 bg-yellow-400/50 dark:bg-yellow-500/50 rounded-full animate-pulse" style="animation-delay: 1.5s;"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>