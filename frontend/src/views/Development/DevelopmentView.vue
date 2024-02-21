<template>
    <component :is="exercicies[route.params.exercise]" />
</template>

<script setup>
    import { useRoute }                from 'vue-router';
    import PHPEmailHeadersParserView   from '@/views/Development/PHPEmailHeadersParserView.vue';
    import PHPEmailHeadersIDParserView from '@/views/Development/PHPEmailHeadersIDParserView.vue';
    import PHPEmailBodyParserView      from '@/views/Development/PHPEmailBodyParserView.vue';
    import VUEArrowSelectionView       from '@/views/Development/VUEArrowSelectionView.vue';
    import VUETooltipView              from '@/views/Development/VUETooltipView..vue';

    const exercicies = {
        "php-email-headers-parser"    : PHPEmailHeadersParserView,
        "php-email-headers-id-parser" : PHPEmailHeadersIDParserView,
        "php-email-body-parser"       : PHPEmailBodyParserView,
        "vue-arrows-selection"        : VUEArrowSelectionView,
        "vue-tooltip"                 : VUETooltipView,
    }
    const route = useRoute();;

</script>