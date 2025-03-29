<script setup>
// Experience section with actual data based on CV
const experiences = [
  {
    title: 'Software Engineer',
    company: 'Ramani Geosystems',
    location: 'Nairobi, Kenya',
    period: 'September 2024 - Current',
    description: 'As a Software Engineer at Ramani Geosystems, I contribute to projects that integrate geospatial data with software development, optimizing system functionality and enhancing user experience.',
    responsibilities: [
      'Development of County Land Information Management Systems (LIMS) for Murang\'a, Kajiado, and additional counties',
      'Building and training machine learning and deep learning models to detect and classify sugarcane from aerial imagery',
      'Developing software to facilitate the visualization and analysis of LiDAR data',
      'Supporting various geospatial projects and collaborating with cross-functional teams'
    ],
    skills: ['GIS', 'Machine Learning', 'Software Development', 'LiDAR', 'Land Information Systems']
  },
  {
    title: 'Research Assistant',
    company: 'University Centre for Data Science and Artificial Intelligence (DSAIL - DEKUT)',
    location: 'Nyeri, Kenya',
    period: 'May 2022 - May 2024',
    description: 'Contributed to various projects that applied data science and AI skills to address real-world challenges.',
    responsibilities: [
      'Conducted analysis to correlate water levels with surrounding land use patterns',
      'Utilized sensor data from the river to build predictive models assessing potential flood risks',
      'Provided valuable insights for disaster preparedness and management'
    ],
    skills: ['Data Science', 'AI', 'Water Resource Management', 'Predictive Modeling', 'Flood Risk Assessment']
  },
  {
    title: 'Geospatial Developer Intern',
    company: 'Kenya Space Agency (In Collaboration with Dedan Kimathi University of Technology)',
    location: 'Nairobi, Kenya',
    period: 'December 2021 - June 2022',
    description: 'Project: Small-scale Crop Mapping using AI/ML',
    responsibilities: [
      'Developed a Graphical User Interface (GUI) for crop-type mapping using machine learning and AI technologies integrated with Google Earth Engine and a PostgreSQL database',
      'Leveraged expertise in ML, geospatial analysis, web development, and database management',
      'Created an efficient, scalable solution for small-scale crop mapping, supporting data-driven decisions in food security',
      'Publication: Geospatial Solutions to Food Security: Small-scale Crop Mapping using AI/ML - A Case Study of Muringato'
    ],
    skills: ['AI/ML', 'Google Earth Engine', 'PostgreSQL', 'GUI Development', 'Food Security']
  }
]
</script>

<template>
  <section id="experience" class="section bg-white dark:bg-dark-800">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">Work Experience</h2>
        <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <div class="space-y-12">
          <!-- Experience Item 1 -->
          <div v-for="(experience, index) in experiences" :key="index" class="relative pl-8 sm:pl-12">
            <!-- Timeline line -->
            <div v-if="index < experiences.length - 1" class="absolute top-0 left-0 w-1 h-full bg-primary-200 dark:bg-primary-900/30"></div>
            
            <!-- Timeline dot -->
            <div class="absolute top-0 left-0 -ml-1.5 w-4 h-4 rounded-full border-2 border-primary-500 dark:border-primary-400 bg-white dark:bg-dark-800"></div>
            
            <div class="bg-white dark:bg-dark-700 rounded-lg shadow-md p-6 border border-gray-200 dark:border-dark-600">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ experience.title }}</h3>
              <div class="flex flex-wrap justify-between items-center mt-1 mb-4">
                <div class="text-primary-600 dark:text-primary-400 font-medium">{{ experience.company }}</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">{{ experience.period }}</div>
              </div>
              <div class="text-gray-700 dark:text-gray-300 space-y-2">
                <p>{{ experience.description }}</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li v-for="(resp, rIndex) in experience.responsibilities" :key="rIndex">{{ resp }}</li>
                </ul>
              </div>
              <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="(skill, sIndex) in experience.skills" :key="sIndex" class="px-3 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
          
          <!-- Last item with end dot -->
          <div class="relative pl-8 sm:pl-12">
            <!-- Timeline line end dot -->
            <div class="absolute top-0 left-0 -ml-1.5 w-4 h-4 rounded-full border-2 border-primary-500 dark:border-primary-400 bg-white dark:bg-dark-800"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Nothing needed here as Tailwind is handling most styling */
</style>