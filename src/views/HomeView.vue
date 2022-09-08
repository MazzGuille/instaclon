<template>
<Sidebar />
    <div class="wrapper">
        HOME VIEW
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
    export default {
        name: 'HomeView',
        components:{
            Sidebar
        },
    }
</script>

<style  scoped>
 .wrapper{
        margin-top: 10vh;
    }

</style>