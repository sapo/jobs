<template>
    <component :is="exercicies[route.params.exercise]" />
</template>

<script setup>
    import { useRoute }       from 'vue-router';
    import PHPHTTPRequestView from '@/views/AdvancedConcepts/PHPHTTPRequestView.vue';
    import VUEHTTPRequestView from '@/views/AdvancedConcepts/VUEHTTPRequestView.vue';

    const exercicies = {
        "php-http-request" : PHPHTTPRequestView,
        "vue-http-request" : VUEHTTPRequestView,

    }
    const route = useRoute();;

</script>