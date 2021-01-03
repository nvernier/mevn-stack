<template>
    <nav>
        <div class="nav-wrapper">
            <router-link to="/" class="brand-logo left">Home</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/login">Login</router-link></li>
                <li><router-link to="/register">Register</router-link></li>
                <li><router-link to="/dashboard">Dashboard</router-link></li>
                <li><a v-on:click="signout">Sign Out</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            isAuthenticated: true
        }
    },
    methods: {
        signout () {
            this.isAuthenticated = false
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
