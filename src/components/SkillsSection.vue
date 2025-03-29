<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="text-center mb-16">My Skills & Expertise</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Technical Skills -->
        <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-dark-700">
          <div class="mb-4 text-primary-600 dark:text-primary-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Technical Skills</h3>
          <div class="flex flex-wrap">
            <span class="skill-badge">JavaScript</span>
            <span class="skill-badge">Python</span>
            <span class="skill-badge">React</span>
            <span class="skill-badge">Vue.js</span>
            <span class="skill-badge">TypeScript</span>
            <span class="skill-badge">Node.js</span>
            <span class="skill-badge">Docker</span>
            <span class="skill-badge">AWS</span>
            <span class="skill-badge">PostgreSQL</span>
            <span class="skill-badge">MongoDB</span>
          </div>
        </div>
        
        <!-- GIS Skills -->
        <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-dark-700">
          <div class="mb-4 text-primary-600 dark:text-primary-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">GIS Skills</h3>
          <div class="flex flex-wrap">
            <span class="skill-badge">Leaflet</span>
            <span class="skill-badge">Mapbox GL</span>
            <span class="skill-badge">OpenLayers</span>
            <span class="skill-badge">QGIS</span>
            <span class="skill-badge">ArcGIS</span>
            <span class="skill-badge">PostGIS</span>
            <span class="skill-badge">GeoServer</span>
            <span class="skill-badge">GDAL/OGR</span>
            <span class="skill-badge">Turf.js</span>
            <span class="skill-badge">GeoPandas</span>
          </div>
        </div>
        
        <!-- Data Skills -->
        <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-dark-700">
          <div class="mb-4 text-primary-600 dark:text-primary-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Data Skills</h3>
          <div class="flex flex-wrap">
            <span class="skill-badge">Data Analysis</span>
            <span class="skill-badge">Data Visualization</span>
            <span class="skill-badge">ETL</span>
            <span class="skill-badge">Pandas</span>
            <span class="skill-badge">NumPy</span>
            <span class="skill-badge">D3.js</span>
            <span class="skill-badge">Jupyter</span>
            <span class="skill-badge">SQL</span>
            <span class="skill-badge">Spatial Analysis</span>
            <span class="skill-badge">Remote Sensing</span>
          </div>
        </div>
        
        <!-- Additional Skills Categories -->
        <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-dark-700">
          <div class="mb-4 text-primary-600 dark:text-primary-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Web Mapping</h3>
          <div class="flex flex-wrap">
            <span class="skill-badge">Interactive Maps</span>
            <span class="skill-badge">Geocoding</span>
            <span class="skill-badge">Routing</span>
            <span class="skill-badge">Geolocation</span>
            <span class="skill-badge">Vector Tiles</span>
            <span class="skill-badge">3D Visualization</span>
            <span class="skill-badge">Choropleth Maps</span>
            <span class="skill-badge">Heatmaps</span>
            <span class="skill-badge">Custom Symbology</span>
          </div>
        </div>
        
        <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-dark-700">
          <div class="mb-4 text-primary-600 dark:text-primary-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Soft Skills</h3>
          <div class="flex flex-wrap">
            <span class="skill-badge">Project Management</span>
            <span class="skill-badge">Team Leadership</span>
            <span class="skill-badge">Technical Writing</span>
            <span class="skill-badge">Problem Solving</span>
            <span class="skill-badge">Client Communication</span>
            <span class="skill-badge">Agile Methodology</span>
            <span class="skill-badge">Public Speaking</span>
            <span class="skill-badge">Mentoring</span>
          </div>
        </div>
        
        <div class="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-dark-700">
          <div class="mb-4 text-primary-600 dark:text-primary-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">DevOps & Tools</h3>
          <div class="flex flex-wrap">
            <span class="skill-badge">Git</span>
            <span class="skill-badge">CI/CD</span>
            <span class="skill-badge">Jenkins</span>
            <span class="skill-badge">GitHub Actions</span>
            <span class="skill-badge">Kubernetes</span>
            <span class="skill-badge">Terraform</span>
            <span class="skill-badge">Serverless</span>
            <span class="skill-badge">AWS CloudFormation</span>
            <span class="skill-badge">Monitoring</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>