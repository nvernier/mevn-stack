<template>
    <div>
        <h1>Secure Dashboard</h1>
        <p>{{ this.message }}</p>
    </div>
</template>

<script>
import api from '@/api'

export default {
    data () {
        return {
            message: ''
        }
    },
    mounted: async function () {
        const response = await api.get('dashboard')
        this.message = response.data.message
    }
}
</script>
