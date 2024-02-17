<template>
    <div id="navigation_menu">
        <ul>
            <li>
                <RouterLink to="/project-information">
                    <i class="fas fa-home"></i>
                    Project Information
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/interview-objectives">
                    <i class="fas fa-info-circle"></i>
                    Interview Objectives
                </RouterLink>
            </li>

            <slot v-if="route.matched[1]?.path === '/basic-concepts'">
                <li class="header">Basic Concepts</li>

                <li>
                    <RouterLink to="/basic-concepts/php-basic-concepts">
                        <i class="fab fa-php"></i>
                        PHP Basic Concepts
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/basic-concepts/vue-basic-concepts">
                        <i class="fab fa-vuejs"></i>
                        VUE Basic Concepts
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/basic-concepts/security-basic-concepts">
                        <i class="fab fa-php"></i>
                        Security Basic Concepts
                    </RouterLink>
                </li>
            </slot>


            <slot v-if="route.matched[1]?.path === '/error-handling'">
                <li class="header">Error Handling</li>

                <li>
                    <RouterLink to="/error-handling/php-error-handling">
                        <i class="fab fa-php"></i>
                        PHP Error Handling
                    </RouterLink>
                </li>
            </slot>

            <slot v-if="route.matched[1]?.path === '/problem-solving'">
                <li class="header">Problem Solving</li>

                <li>
                    <RouterLink to="/problem-solving/php-problem-solving">
                        <i class="fab fa-php"></i>
                        PHP Problem Solving
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/problem-solving/vue-problem-solving">
                        <i class="fab fa-vuejs"></i>
                        VUE Problem Solving
                    </RouterLink>
                </li>
            </slot>

            <slot v-if="route.matched[1]?.path === '/advanced-concepts'">
                <li class="header">Advanced Concepts</li>

                <li>
                    <RouterLink to="/advanced-concepts/php-advanced-concepts">
                        <i class="fab fa-vuejs"></i>
                        PHP Advanced Concepts
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/advanced-concepts/vue-advanced-concepts">
                        <i class="fab fa-vuejs"></i>
                        Vue Advanced Concepts
                    </RouterLink>
                </li>
            </slot>
        </ul>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    import { useRoute }   from 'vue-router'

    const route = useRoute();
</script>