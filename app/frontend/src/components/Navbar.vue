<template>
    <nav>
        <div>
            <router-link to="/">Home</router-link><span>|</span>
            <router-link to="/about">About</router-link>
        </div>
        <div v-if="!isAuthenticated">
            <span>|</span>
            <router-link to="/login">Login</router-link><span>|</span>
            <router-link to="/register">Register</router-link>
        </div>
        <div v-else>
            <span>|</span>
            <router-link to="/dashboard">Dashboard</router-link><span>|</span>
            <a v-on:click="signout">Sign Out</a>
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

<style lang="css" scoped>
    nav {
        background-color:burlywood;
        background-image: url('../assets/mahogany.jpg');
        margin-bottom: 20px;
        padding: 10px;
        text-align: center;
        height: 60px;
        font-size: x-large;
    }
    nav > div {
        display: inline;
    }
    a {
        color: burlywood;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    span {
        color: burlywood;
        margin: 10px;
        padding: 10px;
    }
</style>
