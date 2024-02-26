<template>
    <h1>PHP Simple Attack</h1>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    This is a simple attack that will try to find the valid code by calling an API 50 times with different codes.
                </p>
            </template>
        </CustomBlock>


        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>Open up the file <code>backend/src/Controllers/API/SimpleAttackController.php</code></li>
                    <li>
                        Write some code to prevent the attack from finding the correct code.
                    </li>
                </ul>
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
                title='Find Code'
                class="results-block"
            >
            <template #content>
                <button @click="onCallAPI()" :disabled="loading">
                    <i v-if="loading" class="fas fa-spinner fa-spin"></i>
                    Test
                </button>
            </template>
        </CustomBlock>
    </div>
</template>


<script setup>
    import { ref }     from 'vue';
    import HTTPService from '@/services/HTTP/HTTPService';
    import CustomBlock from '@/templates/blocks/CustomBlock.vue';

    const found  = ref(null);
    const code   = ref();
    const tries  = 50;
    const loading = ref(false);;

    const onCallAPI = async () => {
        found.value   = null;
        code.value    = 700;
        loading.value = true;

        for (let i = 0; i < tries; i++) {
            let response = await callAPI(code.value);

            if (response === true) {
                loading.value = false;
                found.value   = true;
                return;
            }

            code.value++;
        }

        found.value = false;
        loading.value = false;
    }

    const callAPI = async (code) => {
        let response = await HTTPService.postFormData(
            'http://localhost:9980/simple-attack.php?code=' + code,
        );

        return response.results.success;
    }
</script>