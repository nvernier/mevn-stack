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
                                <input placeholder="Username" id="username" type="text" class="validate">
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" placeholder="Super Secret Password" class="validate">
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password-2" type="password" placeholder="Password" class="validate">
                                <label for="password-2">Confirm Password</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-action">
                    <button type="submit" class="btn waves-effect waves-light">Submit<i class="material-icons right">send</i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .row {
        margin: 0;
        padding: 0;
    }
</style>
