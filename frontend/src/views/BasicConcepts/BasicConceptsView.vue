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
    import PHPSimpleAttackView  from '@/views/BasicConcepts/PHPSimpleAttackView.vue';
    import VueDivToggleView     from '@/views/BasicConcepts/VUEDivToggleView.vue';
    import VueListComponentView from '@/views/BasicConcepts/VUEListComponentView.vue';
    import PHPSimpleGetView     from '@/views/BasicConcepts/PHPSimpleGetView.vue';
    import PHPSimplePutView     from '@/views/BasicConcepts/PHPSimplePutView.vue';

    const exercicies = {
        "php-simple-get"     : PHPSimpleGetView,
        "php-simple-post"    : PHPSimplePostView,
        "php-simple-input"   : PHPSimpleInputView,
        "php-simple-put"     : PHPSimplePutView,
        "php-sql-injection"  : PHPSQLInjectionView,
        "php-reflected-xss"  : PHPReflectedXSSView,
        "php-simple-email"   : PHPSimpleEmailView,
        "php-simple-attack"  : PHPSimpleAttackView,
        "vue-div-toggle"     : VueDivToggleView,
        "vue-list-component" : VueListComponentView,
    }
    const route = useRoute();;

</script>