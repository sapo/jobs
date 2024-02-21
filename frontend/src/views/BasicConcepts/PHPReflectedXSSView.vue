<template>
    <h1>PHP Reflected XSS</h1>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    A reflected XSS attack is a type of attack where the attacker sends data to the server that is then reflected back to the client.
                </p>

                <p>
                    The attacker can send a link to the victim with the malicious data and when the victim clicks on the link, the malicious data is reflected back to the victim's browser.
                </p>

                <p>
                    The attacker can use this to steal the victim's session cookie, perform actions on behalf of the victim, or redirect the victim to a malicious website.
                </p>
            </template>
        </CustomBlock>

        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>Open up the file <code>backend/src/Controllers/API/ReflectedXSSController.php</code></li>
                    <li>Fix the XSS payload that is sent by the client and reflected back to the browser.</li>
                </ul>
            </template>
        </CustomBlock>
    </div>

    <h3>Results</h3>

    <div class="block">
        <CustomBlock
                title='XSS Payload'
                class="results-block"
            >
            <template #content>
                <div id="xss"></div>
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
    import { ref }       from 'vue';
    import HTTPPayloads  from '@/services/Tools/HTTPPayloads';
    import CustomBlock   from '@/templates/blocks/CustomBlock.vue';

    const response = ref({});

    const onCallAPI = async () => {
        response.value = await HTTPPayloads.sendXSSImage();
        document.getElementById('xss').innerHTML = response.value.results.html;
    }
</script>