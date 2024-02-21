<template>
    <h1>Vue Div Toggle</h1>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    This is a simple example of how to toggle the visibility of a div using Vue.
                </p>
            </template>
        </CustomBlock>


        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>Open up the file <code>frontend/src/views/BasicConcepts/VueDivToggleView.vue</code></li>
                    <li>Hide the div below when the button is clicked.</li>
                    <li>Display the div below when the button is clicked again.</li>
                    <li>Switch the text of the button between "Hide Div" and "Show Div" accordingly.</li>
                </ul>
            </template>
        </CustomBlock>
    </div>

    <h3>Results</h3>
    <div class="block">
        <CustomBlock
            title='Toggle Visibility'
            class="results-block"
        >
            <template #content>
                <div class="quote">
                    <p>Hide me after click</p>
                </div>

                <button @click="onCallAPI">Hide Div</button>
            </template>
        </CustomBlock>
    </div>
</template>

<script setup>
    import CustomBlock from '@/templates/blocks/CustomBlock.vue';


    const onCallAPI = (event) => {
        console.log(event);
    }
</script>