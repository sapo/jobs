<template>
    <div class="custom-block" :class="class">
        <div>
            <div v-if="title" class="custom-block-header-title">
                <i :class="icon"></i>
                <span>{{ title }}</span>
            </div>
            <div class="custom-block-content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title     : {
            type    : String,
            default : null,
        },
        icon      : {
            type    : String,
            default : 'fas fa-info-circle'
        },
        class     : {
            type    : String,
            default : null,
        },
    });

</script>

<style scoped>
    .custom-block {
        border-left: 3px solid #444;
        margin: 15px 0;
        padding: 10px 10px 15px 10px;
        background-color: #ccc;
        color: #444;
        font-size: 13px;
    }

    .custom-block-header-title {
        display: flex;
        align-items: center;
        margin-top: 5px;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 15px;
    }

    .custom-block-header-title i {
        margin-right: 10px;
        margin-left: 5px;
        width: 15px;
        font-size: 15px;
        top: 0;
        position: relative;
    }

    .custom-block-content {
        margin-left: 30px;
    }

    .exercise-block {
        border-left: 3px solid #00a2ff;
        background-color: #282c34;
        color: #ffffff;
    }

    .exercise-block .custom-block-header-title {
        color: #FFF;
    }

    .exercise-block .custom-block-content {
        color: #f5f5f5;
    }

    .exercise-block .custom-block-header-title i {
        color: #FFF;
    }

    .clean-block {
        border: none;
        margin: 0;
        padding: 0;
        background: none;
        font-size: 13px;
    }

    .clean-block .custom-block-content {
        margin: 0;
    }


    .results-block {
        padding: 10px;
        margin: 0 0 15px 0;
        background: none;
        font-size: 13px;
        background-color: #FFF;
        border-left: 3px solid #1c1e21;
    }

    .results-block  .custom-block-content {
        margin-left: 5px;
    }

    .results-block .custom-block-header-title {
        color: #1c1e21;
    }

    .results-block .custom-block-header-title i {
        color: #1c1e21;
    }

    .success-block .custom-block-header-title i {
        color: #567e06;
    }

    .success-block {
        padding: 10px;
        margin: 0 0 15px 0;
        background-color: #FFF;
        border-left: 3px solid #567e06;
        color: #567e06;
    }

    .error-block {
        padding: 10px;
        margin: 0 0 15px 0;
        background-color: #FFF;
        border-left: 3px solid #a70202;
        color: #a70202;
    }

</style>