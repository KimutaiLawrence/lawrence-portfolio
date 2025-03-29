<script setup>
import WorkExperienceItem from './WorkExperienceItem.vue'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Ramani Geosystems',
    location: 'Nairobi, Kenya',
    period: 'September 2024 - Current',
    description: `
      As a Software Engineer at Ramani Geosystems, I contribute to projects that integrate geospatial data with software development, optimizing system functionality and enhancing user experience.
    `,
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
    description: `
      Contributed to various projects that applied data science and AI skills to address real-world challenges.
    `,
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
    description: `
      Project: Small-scale Crop Mapping using AI/ML
    `,
    responsibilities: [
      'Developed a Graphical User Interface (GUI) for crop-type mapping using machine learning and AI technologies',
      'Integrated solution with Google Earth Engine and a PostgreSQL database',
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
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-dark-600 transform md:translate-x-px"></div>
          
          <div class="space-y-12">
            <WorkExperienceItem 
              v-for="(experience, index) in experiences" 
              :key="index"
              :experience="experience"
              :position="index % 2 === 0 ? 'left' : 'right'"
              :is-first="index === 0"
              :is-last="index === experiences.length - 1"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
