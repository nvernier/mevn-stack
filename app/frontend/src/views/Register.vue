<template>
    <div class="row">
        <div class="col s6 offset-s3">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Register</span>
                    <form action="">
                        <div class="row">
                            <div class="input-field col s12">
                                <label for="username">Username</label>
                                <input id="username" type="text" class="validate" v-model="username">
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate" v-model="password">
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password-2" type="password" class="validate" v-model="password2">
                                <label for="password-2">Confirm Password</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-action">
                    <button type="submit" class="btn waves-effect waves-light" v-on:click.prevent="submit">Submit<i class="material-icons right">send</i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            username: '',
            password: '',
            password2: ''
        }
    },
    methods: {
        submit (event) {
            this.$store.dispatch('register', { username: this.username, password: this.password, password2: this.password2 })
        }
    }
}
</script>

<style lang="css" scoped>
    .row {
        margin: 0;
        padding: 0;
    }
</style>
