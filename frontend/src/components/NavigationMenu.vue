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
                    <i class="fas fa-info-circle"></i>
                    Interview Objectives
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/project-overview">
                    <i class="fas fa-file-code"></i>
                    Project Overview
                </RouterLink>
            </li>

            <li class="header">Exercises</li>

            <li>
                <RouterLink to="/ex-vue-http-request">
                    <i class="fab fa-vuejs"></i>
                    <!-- <i class="fas fa-user-graduate"></i> -->
                    HTTP Request
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/ex-php-http-request">
                    <i class="fab fa-php"></i>
                    HTTP Request
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router'

</script>