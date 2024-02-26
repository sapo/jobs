<template>
    <h1>PHP Simple Email</h1>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    The following PHP code is a simple example of how to validate an email address with a simple post HTTP request.
                </p>

            </template>
        </CustomBlock>

        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>Open up the file <code>backend/src/Controllers/API/SimpleValidationController.php</code></li>
                    <li>
                        Write the code to validate the email address sent in the HTTP request.
                    </li>
                    <li>
                        Set the <code>success</code> key to <code>true</code> if the email is valid, and <code>false</code> if it is not.
                    </li>

                    <li>
                        Set the <code>token</code> key to the value of the <code>X-Token</code> header sent in the HTTP request.
                    </li>
                </ul>
            </template>
        </CustomBlock>

    </div>

    <h3>Test Valid Email</h3>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    The following HTTP request is sent to the server when the Test Valid button below is clicked:
                </p>

                <div class="quote">
                    <p>POST /simple-validation.php HTTP/1.1</p>
                    <p>Accept: */*</p>
                    <p>Connection: keep-alive</p>
                    <p>Content-Length: 26</p>
                    <p>Content-Type: application/json</p>
                    <p>Host: localhost:9980</p>
                    <p>X-Token: token_id_05</p>
                    <p> </p>
                    <p> </p>
                    <p> </p>
                    <p> </p>
                    <p>{"data":"email01@sapo.pt"}</p>
                </div>

                <p>
                    And the expected response from the server after the api validates the params is:
                </p>

                <div class="quote">
                    <p>{"success":true,"token":"token_id_05"}</p>
                </div>
            </template>
        </CustomBlock>
    </div>

    <h3>Test Invalid Email</h3>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    The following HTTP request is sent to the server when the Test Invalid button below is clicked:
                </p>

                <div class="quote">
                    <p>POST /simple-validation.php HTTP/1.1</p>
                    <p>Accept: */*</p>
                    <p>Connection: keep-alive</p>
                    <p>Content-Length: 21</p>
                    <p>Content-Type: application/json</p>
                    <p>Host: localhost:9980</p>
                    <p>X-Token: token_id_05</p>
                    <p> </p>
                    <p> </p>
                    <p> </p>
                    <p> </p>
                    <p>{"data":"notanemail"}</p>
                </div>

                <p>
                    And the expected response from the server after the api validates the params is:
                </p>

                <div class="quote">
                    <p>{"success":false,"token":"token_id_05"}</p>
                </div>
            </template>
        </CustomBlock>
    </div>


    <h3>Results</h3>

    <div class="block">
        <CustomBlock v-if="validation.valid"
                title='Valid Params'
                class="success-block"
            >
            <template #content>
                <ul>
                    <li v-for="value, name in validation.valid" :key="name">{{name}} {{value}} </li>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock v-if="validation.invalid"
                title='Invalid Params'
                class="error-block"
            >
            <template #content>
                <ul>
                    <li v-for="value, name in validation.invalid" :key="name">{{name}} {{value}} </li>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock
                title='Test Results'
                class="results-block"
            >
            <template #content>
                <button @click="onTestValidEmail()">Valid Email</button>
                <button @click="onTestInvalidEmail()">Invalid Email</button>
            </template>>
        </CustomBlock>
    </div>
</template>

<script setup>
    import { ref }      from 'vue';
    import HTTPService  from '@/services/HTTP/HTTPService';
    import ValidateData from '@/services/Validation/ValidateData';
    import CustomBlock  from '@/templates/blocks/CustomBlock.vue';

    const response   = ref(null);
    const validation = ref({})
    const params     = {
        token  : 'token_id_05',
    }

    const onTestValidEmail = async () => {
        response.value = await HTTPService.post(
            'http://localhost:9980/simple-validation.php',
            {'data': 'email01@sapo.pt'},
            {'X-Token': params.token}
        );

        validation.value = ValidateData.requiredValues(
            response.value.results,
            {
                'success': true,
                'token'  : params.token,
            }
        );
    }

    const onTestInvalidEmail = async () => {
        response.value = await HTTPService.post(
            'http://localhost:9980/simple-validation.php',
            {'data': 'notanemail'},
            {'X-Token': params.token}
        );

        validation.value = ValidateData.requiredValues(
            response.value.results,
            {
                'success': false,
                'token'  : params.token,
            }
        );
    }
</script>