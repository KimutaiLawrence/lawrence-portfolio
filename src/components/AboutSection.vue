<template>
  <section id="about" class="section bg-gray-50 dark:bg-dark-800">
    <div class="container">
      <h2 class="text-center mb-12">About Me</h2>
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Profile Image -->
          <div class="flex justify-center md:justify-start items-start">
            <div class="w-40 h-40 rounded-lg overflow-hidden bg-gray-200 dark:bg-dark-700 border border-gray-300 dark:border-dark-600 shadow-md">
              <div class="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Bio -->
          <div class="md:col-span-2">
            <div class="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a passionate Geospatial Developer with over 5 years of experience creating innovative geospatial applications and solutions. My expertise lies at the intersection of GIS, software engineering, and data science.
              </p>
              <p>
                I specialize in developing interactive web mapping applications, geospatial data processing pipelines, and spatial analysis tools. My work spans various sectors including urban planning, environmental monitoring, disaster management, and location intelligence.
              </p>
              <p>
                With a strong foundation in both software development and geographic information systems, I bridge the gap between these fields to build intuitive and powerful applications that solve real-world spatial problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new hiking trails, experimenting with remote sensing data, or contributing to open-source geospatial projects.
              </p>
            </div>
            
            <!-- Quick Info -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div>
                <h3 class="text-lg font-medium mb-3 text-gray-900 dark:text-white">Location</h3>
                <p class="flex items-center text-gray-700 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Nairobi, Kenya
                </p>
              </div>
              <div>
                <h3 class="text-lg font-medium mb-3 text-gray-900 dark:text-white">Email</h3>
                <p class="flex items-center text-gray-700 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:lawrencekimutai@gmail.com" class="hover:text-primary-600 dark:hover:text-primary-400">
                    lawrencekimutai@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h3 class="text-lg font-medium mb-3 text-gray-900 dark:text-white">Languages</h3>
                <p class="flex items-center text-gray-700 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  English, Kiswahili
                </p>
              </div>
              <div>
                <h3 class="text-lg font-medium mb-3 text-gray-900 dark:text-white">Availability</h3>
                <p class="flex items-center text-gray-700 dark:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Available for freelance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>