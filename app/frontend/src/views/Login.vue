<template>
    <div class="container flex">
        <div class='card'>
            <div class='card-content'>
                <h1>Login</h1>
                <form action="" class="form">
                    <label for="username">Username</label>
                    <input class="form-input" type="text" name="username" id="username" placeholder="Username">
                    <label for="password">Password</label>
                    <input class="form-input" type="password" name="password" id="password" placeholder="Password">
                    <div class="form-buttons">
                        <button type="submit">Submit </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .card {
        max-width: 40rem;
    }
</style>
