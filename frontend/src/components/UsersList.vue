<template>

    <div class="exercise-list">
        <ul>
            <li v-for="user in users" :key=user.id>
                <span class="text">{{ user.name }} </span>
                <span class="small">{{ user.city }}  {{ user.state }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
    defineProps({
        users: Array
    });

</script>