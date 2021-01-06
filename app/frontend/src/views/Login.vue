<template>
    <div class="row">
        <div class="col s6 offset-s3">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Login</span>
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
            password: ''
        }
    },
    methods: {
        async submit (event) {
            try {
                const response = await this.$store.dispatch('login', { username: this.username, password: this.password })
                if (response.status === 200) {
                    this.$router.push('Dashboard')
                }
            } catch (err) {
                console.log(`an error has happened: ${err}`)
            }
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
