<template>
    <component :is="exercicies[route.params.exercise]" />
</template>

<script setup>
    import { useRoute }            from 'vue-router';
    import PHPDogAPIErrorView      from '@/views/ErrorHandling/PHPDogAPIErrorView.vue';
    import PHPDogOwnerAPIErrorView from '@/views/ErrorHandling/PHPDogOwnerAPIErrorView.vue';

    const exercicies = {
        "php-dog-api-error"       : PHPDogAPIErrorView,
        "php-dog-owner-api-error" : PHPDogOwnerAPIErrorView,

    }
    const route = useRoute();;

</script>