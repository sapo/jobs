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

            <li class="header">Exercises</li>

            <li>
                <RouterLink to="/ex-vue-basic-concepts-1">
                    <i class="fab fa-vuejs"></i>
                    Vue Basic Concepts 1
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/ex-vue-basic-concepts-2">
                    <i class="fab fa-vuejs"></i>
                    Vue Basic Concepts 2
                </RouterLink>
            </li>


            <li>
                <RouterLink to="/ex-vue-advanced-concepts-1">
                    <i class="fab fa-vuejs"></i>
                    Vue Advanced Concepts 1
                </RouterLink>
            </li>


            <li>
                <RouterLink to="/ex-vue-http-request">
                    <i class="fab fa-vuejs"></i>
                    Vue HTTP Request
                </RouterLink>
            </li>


            <li>
                <RouterLink to="/ex-php-dog-error-fix">
                    <i class="fab fa-php"></i>
                    PHP Dog Error Fix
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/ex-php-request">
                    <i class="fab fa-php"></i>
                    PHP HTTP Request
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/ex-php-email-headers-parser">
                    <i class="fab fa-php"></i>
                    PHP Email Headers Parser
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router'

</script>