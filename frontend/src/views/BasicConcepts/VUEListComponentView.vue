<template>
    <h1>Vue List Component</h1>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    This is a simple example of how to create a component to display a list of items using Vue.
                </p>
            </template>
        </CustomBlock>

        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>Open up the file <code>frontend/src/views/BasicConcepts/VueListComponentView.vue</code></li>
                    <li>Create a component to display a div block with a unordered list just like this one with the exact same styles.</li>
                    <li>Pass the data listed below to component to be rendered in the list.</li>
                    <li>Display the component with the items in this page.</li>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>Data to pass to the component:</p>

                <div class="quote">
                    <p> class      = 'code'; </p>
                    <p> list_items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']; </p>
                </div>
            </template>
        </CustomBlock>
    </div>

    <h5>Results</h5>

    <div class="block">
    </div>
</template>

<script setup>
    import CustomBlock from '@/templates/blocks/CustomBlock.vue';

</script>