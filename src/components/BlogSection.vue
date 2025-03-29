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
        <a href="https://medium.com/@kimutai.lawrence19" target="_blank" rel="noopener noreferrer" class="blog-card-more">
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
// Actual Medium blog posts data
const blogPosts = [
  {
    title: "Accessing Satellite Imagery Using Python",
    excerpt: "As a Geospatial Analyst, you may want to access and analyze satellite imagery using python and carry out your analysis from there.",
    imageUrl: "https://miro.medium.com/v2/resize:fill:400:266/1*CbcQlldKavTz7LC_3kLegw.jpeg",
    link: "https://medium.com/@kimutai.lawrence19/accessing-satellite-imagery-using-python-5628e0b96e45",
    date: "Mar 2024",
    readTime: 5
  },
  {
    title: "Harnessing Google Earth Engine for Everyday Geospatial Tasks: A Case Study in Sugarcane Detection",
    excerpt: "Geospatial analysis has become an essential tool for monitoring land use, agriculture, and environmental changes. One of the most powerful platforms for large-scale geospatial analysis is Google Earth Engine.",
    imageUrl: "https://miro.medium.com/v2/resize:fill:400:266/1*olZbEvqdwPGoUBIsRu8VrA.jpeg",
    link: "https://medium.com/@kimutai.lawrence19/harnessing-google-earth-engine-for-everyday-geospatial-tasks-a-case-study-in-sugarcane-detection-a5cf842c9a9b",
    date: "Feb 2024",
    readTime: 5
  },
  {
    title: "The Future of Geospatial Technologies: Shaping Our World with Code and Data",
    excerpt: "The world is increasingly dependent on spatial awareness—knowing where things happen, understanding how places change over time, and visualizing complex spatial relationships.",
    imageUrl: "https://miro.medium.com/v2/resize:fill:400:266/1*THnFyIPdQz84fkxv74QZ1Q.png",
    link: "https://medium.com/@kimutai.lawrence19/the-future-of-geospatial-technologies-shaping-our-world-with-code-and-data-2821c817aa25",
    date: "Jan 2024",
    readTime: 5
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