<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="text-center mb-16">Featured Projects</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project Card 1 -->
        <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-dark-700 transition-all hover:shadow-lg">
          <!-- Project Image -->
          <div class="h-48 bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          
          <!-- Project Content -->
          <div class="p-6">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Urban Mobility Dashboard</h3>
              <span class="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full">Web App</span>
            </div>
            
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              An interactive dashboard for visualizing and analyzing urban transportation patterns using real-time data.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="skill-badge">React</span>
              <span class="skill-badge">Mapbox GL</span>
              <span class="skill-badge">D3.js</span>
              <span class="skill-badge">Express</span>
              <span class="skill-badge">PostgreSQL</span>
            </div>
            
            <div class="flex space-x-3">
              <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Demo
              </a>
              <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Code
              </a>
            </div>
          </div>
        </div>
        
        <!-- Project Card 2 -->
        <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-dark-700 transition-all hover:shadow-lg">
          <!-- Project Image -->
          <div class="h-48 bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 22V12h6v10" />
            </svg>
          </div>
          
          <!-- Project Content -->
          <div class="p-6">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">GeoProperty Finder</h3>
              <span class="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full">Web/Mobile</span>
            </div>
            
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              A real estate platform with advanced spatial search capabilities and neighborhood analytics for property evaluation.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="skill-badge">Vue.js</span>
              <span class="skill-badge">Leaflet</span>
              <span class="skill-badge">Node.js</span>
              <span class="skill-badge">MongoDB</span>
              <span class="skill-badge">AWS</span>
            </div>
            
            <div class="flex space-x-3">
              <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Demo
              </a>
              <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Code
              </a>
            </div>
          </div>
        </div>
        
        <!-- Project Card 3 -->
        <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-dark-700 transition-all hover:shadow-lg">
          <!-- Project Image -->
          <div class="h-48 bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <!-- Project Content -->
          <div class="p-6">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">EcoTracker</h3>
              <span class="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full">Mobile App</span>
            </div>
            
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              A mobile application for tracking and visualizing environmental data collected through citizen science initiatives.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="skill-badge">React Native</span>
              <span class="skill-badge">Mapbox</span>
              <span class="skill-badge">Firebase</span>
              <span class="skill-badge">GeoJSON</span>
              <span class="skill-badge">Charts.js</span>
            </div>
            
            <div class="flex space-x-3">
              <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Demo
              </a>
              <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Code
              </a>
            </div>
          </div>
        </div>
        
        <!-- Project Card 4 -->
        <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-dark-700 transition-all hover:shadow-lg">
          <!-- Project Image -->
          <div class="h-48 bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </div>
          
          <!-- Project Content -->
          <div class="p-6">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Disaster Response Hub</h3>
              <span class="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full">Web App</span>
            </div>
            
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              A platform for coordinating disaster response efforts with real-time mapping, resource allocation, and needs assessment.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="skill-badge">Angular</span>
              <span class="skill-badge">OpenLayers</span>
              <span class="skill-badge">Django</span>
              <span class="skill-badge">PostGIS</span>
              <span class="skill-badge">WebSockets</span>
            </div>
            
            <div class="flex space-x-3">
              <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Demo
              </a>
              <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Code
              </a>
            </div>
          </div>
        </div>
        
        <!-- Project Card 5 -->
        <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-dark-700 transition-all hover:shadow-lg">
          <!-- Project Image -->
          <div class="h-48 bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          <!-- Project Content -->
          <div class="p-6">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">AgriMap</h3>
              <span class="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full">Web/Mobile</span>
            </div>
            
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              A precision agriculture solution that integrates satellite imagery, soil data, and weather forecasts for farm management.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="skill-badge">React</span>
              <span class="skill-badge">GDAL</span>
              <span class="skill-badge">Python</span>
              <span class="skill-badge">Flask</span>
              <span class="skill-badge">Google Earth Engine</span>
            </div>
            
            <div class="flex space-x-3">
              <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Demo
              </a>
              <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Code
              </a>
            </div>
          </div>
        </div>
        
        <!-- Project Card 6 -->
        <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-dark-700 transition-all hover:shadow-lg">
          <!-- Project Image -->
          <div class="h-48 bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <!-- Project Content -->
          <div class="p-6">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">GeoAnalytics Platform</h3>
              <span class="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full">Enterprise</span>
            </div>
            
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              An enterprise solution for geospatial data visualization, analysis, and business intelligence with custom reporting.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="skill-badge">TypeScript</span>
              <span class="skill-badge">ArcGIS API</span>
              <span class="skill-badge">Java Spring</span>
              <span class="skill-badge">Azure</span>
              <span class="skill-badge">Kubernetes</span>
            </div>
            
            <div class="flex space-x-3">
              <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- More Projects Button -->
      <div class="mt-12 text-center">
        <a href="#" class="btn btn-primary">
          View All Projects
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>