<template>
    <div>
    
        <HelloWorld></HelloWorld>
        <Gallery></Gallery>
    </div>
</template>

<script>
import Gallery from '../components/Gallery.vue'
import HelloWorld from '../components/HelloWorld.vue'
export default {
    name: 'Home',
    components:{ Gallery, HelloWorld}
    
}
</script>