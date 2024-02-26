<template>
    <component :is="exercicies[route.params.exercise]" />
</template>

<script setup>
    import { useRoute }         from 'vue-router';
    import PHPSimplePostView    from '@/views/BasicConcepts/PHPSimplePostView.vue';
    import PHPSimpleInputView   from '@/views/BasicConcepts/PHPSimpleInputView.vue';
    import PHPSimpleEmailView   from '@/views/BasicConcepts/PHPSimpleEmailView.vue';
    import PHPSQLInjectionView  from '@/views/BasicConcepts/PHPSQLInjectionView.vue';
    import PHPReflectedXSSView  from '@/views/BasicConcepts/PHPReflectedXSSView.vue';
    import VueDivToggleView     from '@/views/BasicConcepts/VUEDivToggleView.vue';
    import VueListComponentView from '@/views/BasicConcepts/VUEListComponentView.vue';

    const exercicies = {
        "php-simple-post"    : PHPSimplePostView,
        "php-simple-input"   : PHPSimpleInputView,
        "php-sql-injection"  : PHPSQLInjectionView,
        "php-reflected-xss"  : PHPReflectedXSSView,
        "php-simple-email"   : PHPSimpleEmailView,
        "vue-div-toggle"     : VueDivToggleView,
        "vue-list-component" : VueListComponentView,
    }
    const route = useRoute();;

</script>