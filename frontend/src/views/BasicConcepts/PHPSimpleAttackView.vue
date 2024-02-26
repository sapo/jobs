<template>
    <h1>PHP Simple Attack</h1>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
  
            </template>
        </CustomBlock>


        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
      
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p> 
 
                </p>
            </template>
        </CustomBlock>

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>The expected response from the server after the params are retrevied is:</p>

                <div class="quote">
                    <p> {{ JSON.stringify(params) }}</p>
                </div>
            </template>
        </CustomBlock>
    </div>

    <h3>Results</h3>

    <div class="block">
        <CustomBlock v-if="found === true"
            title='Code Found'
            class="error-block"
        >
            <template #content>
                <ul>
                    <li>Code found: {{ code }}</li>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock v-if="found === false"
                title='Code not found'
                class="success-block"
            >
            <template #content>
                <ul>
                    <li>Code not found!</li>
                </ul>>
            </template>
        </CustomBlock>

        <CustomBlock
                title='HTTP Request'
                class="results-block"
            >
            <template #content>
                <button @click="onCallAPI()">Call API</button>
            </template>
        </CustomBlock>
    </div>
</template>


<script setup>
    import { ref }     from 'vue';
    import HTTPService from '@/services/HTTP/HTTPService';
    import CustomBlock from '@/templates/blocks/CustomBlock.vue';

    const found  = ref(null);
    const code   = ref(700);
    const tries  = 50;

    const onCallAPI = async () => {
        found.value = null;

        for (let i = 0; i < tries; i++) {
            let response = await callAPI(code.value);

            if (response === true) {
                found.value = true;
                return;
            }

            code.value++;
        }

        found.value = false;
    }

    const callAPI = async (code) => {
        let response = await HTTPService.postFormData(
            'http://localhost:9980/simple-attack.php?code=' + code,
        );

        return response.results.success;
    }
</script>