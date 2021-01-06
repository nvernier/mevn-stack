<template>
    <nav>
        <div class="nav-wrapper" v-if="isAuthenticated">
            <router-link to="/" class="brand-logo left">Home</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/dashboard">Dashboard</router-link></li>
                <li><a v-on:click="signout">Sign Out</a></li>
            </ul>
        </div>
        <div class="nav-wrapper" v-else>
            <router-link to="/" class="brand-logo left">Home</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/login">Login</router-link></li>
                <li><router-link to="/register">Register</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    computed: {
        isAuthenticated () {
            return this.$store.getters.isAuthenticated
        }
    },
    methods: {
        signout () {
            this.$store.dispatch('logout')
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="css">
    nav {
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
