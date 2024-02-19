<template>
    <component :is="exercicies[route.params.exercise]" />
</template>

<script setup>
    import { useRoute }         from 'vue-router';
    import PHPDogAPIErrorView    from '@/views/ErrorHandling/PHPDogAPIErrorView.vue';

    const exercicies = {
        "php-dog-api-error"  : PHPDogAPIErrorView,

    }
    const route = useRoute();;

</script>