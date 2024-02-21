<template>
    <h1>Vue Arrow Selection</h1>

    <div class="block">

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    Display a context menu when the user right-clicks anywhere in the page.
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
                        Open up the file <code>frontend/src/views/Development/VUEContextMenuView.vue</code>
                    </li>

                    <li>
                        Display the context menu when the user right-clicks anywhere in the page.
                    </li>

                    <li>
                        The context menu should be displayed at the position where the user right-clicked.
                    </li>
                </ul>
            </template>
        </CustomBlock>
    </div>

    <h3>Results</h3>

    <div class="block">
        <CustomBlock
            title='Context Menu'
            class="results-block"
        >
            <template #content>
                <div class="context-menu">
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                </div>
            </template>
        </CustomBlock>
    </div>
</template>

<script setup>
    import CustomBlock from '@/templates/blocks/CustomBlock.vue';
</script>


<style scoped>
    .context-menu {
        background-color: #f9f9f9;
        border: 1px solid #a9a9a9;
        width: 100px;
        padding: 10px;
        text-align: center;
    }

    .context-menu ul {
        list-style: none;
        padding: 0;
        border-top: 1px solid #a9a9a9;
    }

    .context-menu ul li {
        padding: 5px;
        cursor: pointer;
        border-bottom: 1px solid #a9a9a9;
    }
</style>