<template>
    <h1>Vue Arrow Selection</h1>

    <div class="block">

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    Display a tooltip that will be displayed when the user hovers a button.
                </p>
            </template>
        </CustomBlock>

        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>
                        Open up the file <code>frontend/src/views/Development/VUETooltipView.vue</code>
                    </li>

                    <li>
                        Display the tooltip element when the user hovers the button and hide it when the user moves the mouse out of the button.
                    </li>

                    <li>
                        The tooltip should be displayed on top or below the button hovered.
                    </li>
                </ul>
            </template>
        </CustomBlock>
    </div>

    <h3>Results</h3>

    <div class="block">
        <CustomBlock
            title='Tooltip'
            class="results-block"
        >
            <template #content>
                <button>Display Tooltip</button>
                <button>Display Tooltip</button>
            </template>
        </CustomBlock>
    </div>

    <div class="tootip">
        <div class="tootip-content">
            <p>This is a tooltip.</p>
        </div>
    </div>

</template>

<script setup>
    import CustomBlock from '@/templates/blocks/CustomBlock.vue';
</script>


<style scoped>
    .tootip {
        position: relative;
        display: inline-block;
        border: 1px dotted black;
        padding: 10px;
        background: #fff;
    }
</style>