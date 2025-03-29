<script setup>
import { ref } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'
import { useFontType } from '../composables/useFontType'

const { isDark, toggleDarkMode } = useDarkMode()
const { currentFont, selectFont } = useFontType()

const isOpen = ref(false)

const togglePanel = () => {
  isOpen.value = !isOpen.value
}

const closePanel = () => {
  isOpen.value = false
}
</script>

<template>
  <div>
    <!-- Settings Button -->
    <button
      @click="togglePanel"
      class="fixed right-5 top-24 z-40 flex items-center justify-center w-11 h-11 bg-white dark:bg-dark-800 rounded-full shadow-md hover:shadow-lg transition-all"
      aria-label="Theme Settings"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-700 dark:text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </button>

    <!-- Settings Panel -->
    <div
      v-show="isOpen"
      class="fixed inset-0 z-50 overflow-hidden"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="absolute inset-0 overflow-hidden">
        <!-- Background overlay -->
        <div
          class="absolute inset-0 bg-gray-500 bg-opacity-75 dark:bg-dark-900 dark:bg-opacity-75 transition-opacity"
          @click="closePanel"
        ></div>

        <div class="fixed inset-y-0 right-0 max-w-xs w-full flex">
          <div
            class="relative w-full max-w-xs transform transition ease-in-out duration-300"
          >
            <div class="h-full flex flex-col bg-white dark:bg-dark-800 shadow-xl overflow-y-auto">
              <div class="px-6 py-6">
                <div class="flex items-center justify-between">
                  <h2 class="text-lg font-medium text-gray-900 dark:text-white">
                    Theme Settings
                  </h2>
                  <button
                    @click="closePanel"
                    class="rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <span class="sr-only">Close panel</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="border-t border-gray-200 dark:border-dark-700">
                <div class="px-6 py-6 space-y-8">
                  <!-- Dark Mode Toggle -->
                  <div>
                    <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-4">
                      Color Mode
                    </h3>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-700 dark:text-gray-300">
                        Dark Mode
                      </span>
                      <button
                        @click="toggleDarkMode"
                        type="button"
                        :class="[
                          isDark
                            ? 'bg-primary-600'
                            : 'bg-gray-200 dark:bg-dark-700',
                          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
                        ]"
                        role="switch"
                        :aria-checked="isDark"
                      >
                        <span
                          :class="[
                            isDark ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                          ]"
                        >
                          <span
                            :class="[
                              isDark
                                ? 'opacity-0 ease-out duration-100'
                                : 'opacity-100 ease-in duration-200',
                              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                            ]"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-3 w-3 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                          </span>
                          <span
                            :class="[
                              isDark
                                ? 'opacity-100 ease-in duration-200'
                                : 'opacity-0 ease-out duration-100',
                              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                            ]"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-3 w-3 text-gray-800"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                              />
                            </svg>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>

                  <!-- Font Type Selector -->
                  <div>
                    <h3 class="text-sm font-medium text-gray-900 dark:text-white mb-4">
                      Font Type
                    </h3>
                    <div class="space-y-3">
                      <button
                        @click="selectFont('font-sf-pro')"
                        :class="[
                          'flex items-center justify-between w-full px-4 py-3 rounded-lg transition',
                          currentFont === 'font-sf-pro'
                            ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-900 dark:text-primary-100'
                            : 'bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-800 dark:text-gray-200',
                        ]"
                      >
                        <span class="font-sf-pro">SF Pro Display</span>
                        <span
                          v-if="currentFont === 'font-sf-pro'"
                          class="flex-shrink-0 text-primary-600 dark:text-primary-400"
                        >
                          <svg
                            class="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>

                      <button
                        @click="selectFont('font-sf-mono')"
                        :class="[
                          'flex items-center justify-between w-full px-4 py-3 rounded-lg transition',
                          currentFont === 'font-sf-mono'
                            ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-900 dark:text-primary-100'
                            : 'bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-800 dark:text-gray-200',
                        ]"
                      >
                        <span class="font-sf-mono">SF Mono</span>
                        <span
                          v-if="currentFont === 'font-sf-mono'"
                          class="flex-shrink-0 text-primary-600 dark:text-primary-400"
                        >
                          <svg
                            class="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>

                      <button
                        @click="selectFont('font-new-york')"
                        :class="[
                          'flex items-center justify-between w-full px-4 py-3 rounded-lg transition',
                          currentFont === 'font-new-york'
                            ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-900 dark:text-primary-100'
                            : 'bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-800 dark:text-gray-200',
                        ]"
                      >
                        <span class="font-new-york">New York</span>
                        <span
                          v-if="currentFont === 'font-new-york'"
                          class="flex-shrink-0 text-primary-600 dark:text-primary-400"
                        >
                          <svg
                            class="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>