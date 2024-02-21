<template>
    <h1>Vue Arrow Selection</h1>

    <div class="block">

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    Use the arrows to navigate through the list below.
                </p>
            </template>
        </CustomBlock>

        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>Open up the file <code>frontend/src/views/ProblemSolving/VUEArrowSelectionView.vue</code></li>
                    <li>Activate the first line in the list when the ArrowDown key is pressed by setting the class 'active'</li>
                    <li>Activate the next line and remove the previous activation in the list when the ArrowDown key is pressed.</li>
                    <li>Go back to the first line when reaching the end of the list.</li>
                </ul>
            </template>
        </CustomBlock>
    </div>

    <h3>Results</h3>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>Exercise list:</p>

                <div class="quote">
                    <ul>
                        <li class="active" v-for="item in items" :key=item>
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </template>
        </CustomBlock>
    </div>

</template>

<script setup>
    import CustomBlock from '@/templates/blocks/CustomBlock.vue';

    const items = ['Exercise Item 1', 'Exercise Item 2', 'Exercise Item 3', 'Exercise Item 4', 'Exercise Item 5'];
</script>