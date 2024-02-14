<template>
    <div id="navigation_menu">
        <ul>
            <li>
                <RouterLink to="/">
                    <i class="fas fa-home"></i>
                    Home
                </RouterLink>
            </li>


            <li>
                <RouterLink to="/interview-objectives">
                    <i class="fas fa-user-graduate"></i>
                    Interview Objectives
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/backend-overview">
                    <i class="fab fa-php"></i>
                    Backend Overview
                </RouterLink>
            </li>


            <!-- <li>
                <RouterLink to="/backend-3">
                    <i class="fab fa-php"></i>
                    Backend - Exercise 1
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/frontend-1">
                    <i class="fab fa-vuejs"></i>
                    Frontend - Exercise 1
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/frontend-2">
                    <i class="fab fa-vuejs"></i>
                    Frontend - Exercise 2
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/frontend-3">
                    <i class="fab fa-vuejs"></i>
                    Frontend - Exercise 3
                </RouterLink>
            </li> --> -->
        </ul>
    </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router'

</script>