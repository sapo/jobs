<template>
    <component :is="exercicies[route.params.exercise]" />
</template>

<script setup>
    import { useRoute }              from 'vue-router';
    import PHPEmailHeadersParserView from '@/views/Development/PHPEmailHeadersParserView.vue';
    import VUEArrowSelectionView     from '@/views/Development/VUEArrowSelectionView.vue';

    const exercicies = {
        "php-email-headers-parser" : PHPEmailHeadersParserView,
        "vue-arrows-selection"     : VUEArrowSelectionView,

    }
    const route = useRoute();;

</script>