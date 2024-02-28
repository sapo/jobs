<template>
    <h1>Vue Select and Delete Users</h1>

    <div class="block">

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    Select the users you want to delete and remove them from the list.
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
                    <li>
                        Click on the users you want to delete and press the "Delete" button to remove them from the list.
                    </li>

                    <li>
                        Set the class <code>active</code> on all selected users.
                    </li>

                    <li>
                        Remove the selected users from the list when the "Delete" button is pressed.
                    </li>
                </ul>
            </template>
        </CustomBlock>
    </div>

    <h3>Results</h3>

    <div class="block">
        <CustomBlock
            title='Delete Selected Users'
            class="results-block"
        >
            <template #content>
                <button @click="onDelete()">Delete</button>
            </template>
        </CustomBlock>


        <CustomBlock
            class="clean-block"
        >
            <template #content>
                 <UsersList :users="users" />
            </template>
        </CustomBlock>
    </div>
</template>

<script setup>
    import { ref }     from 'vue';
    import CustomBlock from '@/templates/blocks/CustomBlock.vue';
    import UsersList   from '@/components/UsersList.vue';
    import Users       from '@/services/Models/UsersDB.json';

    const users = ref(Users);
</script>