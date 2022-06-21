<template>
    <div class="user-profile">
        <div class="title">
          Title
        </div>
        <div v-if="user.role == 'admin'">
            <div class="admin-profile">
                <div class="avatar-container">
                    <div class="avatar">
                        avatar
                    </div>
                </div>
                <div class="name">
                    {{`${capitalizeFirstLetter(user.last_name)},  ${user.role.toUpperCase()}`}}
                </div>
                <button @click="dashboard">Go To Dashboard</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                user: 'auth/user'
            })
        },
        methods: {
            dashboard(){
                return this.$router.push({name:'admin'})
            },
            capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>