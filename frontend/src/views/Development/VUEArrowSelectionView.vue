<template>
    <h1>Vue Arrow Selection</h1>

    <div class="block">
        <h5>Exercise</h5>

        <p>Open up the file <code>frontend/src/views/ProblemSolving/VUEArrowSelectionView.vue</code> and write vue code to:</p>
        <div class="code">
            <ul>
                <li>Activate the first line in the list when the ArrowDown key is pressed by setting the class 'active'</li>
                <li>Active the next line and remove the previous activation in the list when the ArrowDown key is pressed.</li>
                <li>Go back to the first line when reaching the end of the list.</li>
            </ul>
        </div>

        <h5>Results</h5>

        <div class="quote">
            <ul>
                <li class="active" v-for="item in items" :key=item>
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>

</template>

<script setup>
    const items = ['Exercise Item 1', 'Exercise Item 2', 'Exercise Item 3', 'Exercise Item 4', 'Exercise Item 5'];
</script>