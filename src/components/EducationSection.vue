<template>
  <section id="education" class="section bg-gray-50 dark:bg-dark-800">
    <div class="container">
      <h2 class="text-center mb-16">Education & Certifications</h2>
      
      <div class="max-w-3xl mx-auto">
        <div class="space-y-12">
          <!-- Education Item 1 -->
          <div class="bg-white dark:bg-dark-700 rounded-lg shadow-md p-6 border border-gray-200 dark:border-dark-600">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">MSc Geographic Information Systems</h3>
              <div class="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">2014 - 2016</div>
            </div>
            <div class="text-primary-600 dark:text-primary-400 font-medium mb-4">University of Nairobi</div>
            <div class="text-gray-700 dark:text-gray-300">
              <p>Specialized in geospatial programming and web mapping applications. Thesis: "Development of a Web-Based GIS for Urban Infrastructure Management".</p>
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>GPA: 3.85/4.0</li>
                <li>Research focus on web GIS technologies and smart city applications</li>
                <li>Received departmental award for outstanding research</li>
              </ul>
            </div>
          </div>
          
          <!-- Education Item 2 -->
          <div class="bg-white dark:bg-dark-700 rounded-lg shadow-md p-6 border border-gray-200 dark:border-dark-600">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">BSc Computer Science</h3>
              <div class="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">2010 - 2014</div>
            </div>
            <div class="text-primary-600 dark:text-primary-400 font-medium mb-4">Jomo Kenyatta University of Agriculture and Technology</div>
            <div class="text-gray-700 dark:text-gray-300">
              <p>Focused on software engineering and database systems with electives in spatial databases and computer graphics.</p>
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>GPA: 3.7/4.0</li>
                <li>Dean's List: 6 semesters</li>
                <li>Senior project: "Mobile GIS Application for Field Data Collection"</li>
              </ul>
            </div>
          </div>
          
          <!-- Certifications -->
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Professional Certifications</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Certification 1 -->
              <div class="bg-white dark:bg-dark-700 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-dark-600">
                <div class="flex items-start">
                  <div class="flex-shrink-0 mr-4 p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-900 dark:text-white">AWS Certified Solutions Architect</h4>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">Amazon Web Services</p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">2022 - Present</p>
                  </div>
                </div>
              </div>
              
              <!-- Certification 2 -->
              <div class="bg-white dark:bg-dark-700 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-dark-600">
                <div class="flex items-start">
                  <div class="flex-shrink-0 mr-4 p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-900 dark:text-white">Certified GIS Professional (GISP)</h4>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">GIS Certification Institute</p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">2019 - Present</p>
                  </div>
                </div>
              </div>
              
              <!-- Certification 3 -->
              <div class="bg-white dark:bg-dark-700 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-dark-600">
                <div class="flex items-start">
                  <div class="flex-shrink-0 mr-4 p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-900 dark:text-white">Mapbox Certified Developer</h4>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">Mapbox</p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">2020 - Present</p>
                  </div>
                </div>
              </div>
              
              <!-- Certification 4 -->
              <div class="bg-white dark:bg-dark-700 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-dark-600">
                <div class="flex items-start">
                  <div class="flex-shrink-0 mr-4 p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-900 dark:text-white">Google Cloud Professional Data Engineer</h4>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">Google Cloud</p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">2021 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>