<template>
  <section id="blog" class="py-16 bg-gray-50 dark:bg-dark-900">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="section-title">Blog</h2>
        <p class="section-subtitle">Articles and insights on geospatial technology and development</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Blog Cards -->
        <article v-for="(post, index) in blogPosts" :key="index" class="blog-card">
          <a :href="post.link" target="_blank" rel="noopener noreferrer" class="block h-full">
            <div class="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <!-- Featured Image -->
              <div class="relative aspect-[16/9] overflow-hidden">
                <img 
                  :src="post.imageUrl" 
                  :alt="post.title" 
                  class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-80"></div>
                <!-- Medium Logo -->
                <div class="absolute top-4 left-4 bg-white dark:bg-dark-800 rounded-full p-1.5 shadow-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="black" />
                    <path d="M6.91 7.71C6.87 7.47 6.76 7.26 6.59 7.1L5.11 5.38V5.12H9.94L13.65 13.24L16.9 5.12H21.5V5.38L20.25 6.58C20.12 6.68 20.05 6.84 20.07 7V16.64C20.05 16.8 20.12 16.97 20.25 17.06L21.47 18.26V18.52H15.14V18.26L16.4 17.03C16.55 16.88 16.55 16.84 16.55 16.61V8.66L12.84 18.49H12.31L8.02 8.66V15.35C7.99 15.65 8.07 15.95 8.26 16.17L9.93 18.23V18.49H5V18.23L6.68 16.17C6.86 15.95 6.95 15.64 6.91 15.35V7.71Z" fill="white" />
                  </svg>
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">{{ post.title }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">{{ post.excerpt }}</p>
                
                <!-- Footer -->
                <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-dark-700">
                  <div class="flex items-center">
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ post.date }}</span>
                    <span class="mx-2 text-gray-300 dark:text-gray-600">•</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ post.readTime }} min read</span>
                  </div>
                  
                  <span class="text-primary-600 dark:text-primary-400 font-medium text-sm flex items-center">
                    Read More
                    <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </article>
        
        <!-- "View All" Card -->
        <a href="https://medium.com/@lawrencekimutai" target="_blank" rel="noopener noreferrer" class="blog-card-more">
          <div class="bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm border-2 border-dashed border-gray-200 dark:border-dark-700 rounded-xl overflow-hidden h-full flex flex-col items-center justify-center p-8 transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-500 group">
            <div class="w-16 h-16 rounded-full flex items-center justify-center bg-gray-100 dark:bg-dark-700 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors duration-300 mb-4">
              <svg class="h-8 w-8 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-700 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 text-center">View All Articles</h3>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-center">Read more articles on Medium</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sample blog posts data - in a real application, you would fetch this from an API
const blogPosts = [
  {
    title: "Building Interactive Web Maps with Mapbox GL JS and Vue 3",
    excerpt: "Learn how to integrate Mapbox GL JS with Vue 3 Composition API to create responsive and interactive web mapping applications with custom controls and data visualization.",
    imageUrl: "/images/blog/webmaps-vue.jpg",
    link: "https://medium.com/@lawrencekimutai/building-interactive-web-maps-with-mapbox-gl-js-and-vue-3",
    date: "Mar 15, 2025",
    readTime: 8
  },
  {
    title: "Geospatial Analysis with Python: A Practical Guide",
    excerpt: "Explore powerful techniques for geospatial data analysis using Python libraries like GeoPandas, Shapely, and Rasterio to solve real-world spatial problems.",
    imageUrl: "/images/blog/python-geospatial.jpg",
    link: "https://medium.com/@lawrencekimutai/geospatial-analysis-with-python-a-practical-guide",
    date: "Feb 28, 2025",
    readTime: 12
  },
  {
    title: "Creating Location-Based Services with QGIS and PostGIS",
    excerpt: "A comprehensive tutorial on developing location-based services using QGIS for data preparation and PostGIS for spatial querying and analysis.",
    imageUrl: "/images/blog/qgis-postgis.jpg",
    link: "https://medium.com/@lawrencekimutai/creating-location-based-services-with-qgis-and-postgis",
    date: "Jan 10, 2025",
    readTime: 10
  }
];
</script>

<style scoped>
.blog-card, .blog-card-more {
  @apply transform transition-all duration-300 hover:-translate-y-2;
}

/* Staggered animation delay for blog cards on initial load */
.blog-card:nth-child(1) {
  animation-delay: 0.1s;
}
.blog-card:nth-child(2) {
  animation-delay: 0.2s;
}
.blog-card:nth-child(3) {
  animation-delay: 0.3s;
}
.blog-card-more {
  animation-delay: 0.4s;
}
</style>