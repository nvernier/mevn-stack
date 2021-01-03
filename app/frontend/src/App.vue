<template>
    <div id="app">
        <Navbar />
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script>
import M from 'materialize-css'
import Navbar from '@/components/Navbar'
export default {
    components: {
        Navbar
    },
    mounted () {
        M.AutoInit()
    }
}
</script>
