<template>
    <div id="navigation_menu">
        <!-- <h4>Project</h4> -->
        <ul>
            <li>
                <RouterLink to="/">
                    <i class="fas fa-home"></i>
                    Home
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/example1">
                    <i class="fab fa-php"></i>
                    Backend - Example 1
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/example2">
                    <i class="fas fa-code"></i>
                    Example 2
                </RouterLink>
            </li>
            <!-- <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li> -->
        </ul>
    </div>

</template>


<script setup>
  import { RouterLink } from 'vue-router'

</script>