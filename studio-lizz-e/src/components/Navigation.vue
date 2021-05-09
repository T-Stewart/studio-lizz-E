<template>
    <nav :style="{background: background || '#333'}">
        <ul :style="{background: background || '#333'}" ref="nav">
            <figure class="image-logo">
                <img :src="imagePath" height="40px" width="40px" @click="toggleNav">
            </figure>
            <li
                v-for="(link, index) in navLinks"
                :key="index"
                @mouseenter="$event.currentTarget.style.background = hoverBackground || '#999' "
                @mouseleave="$event.currentTarget.style.background = background || '#333' "
            >
            <router-link 
            :to="link.path"
            :style="{ color: linkColor || '#DDD'}"
            >
                {{ link.text }}
                <i :class="link.icon"></i>
            </router-link>

            </li>
        </ul>
    </nav>    
</template>

<script>
export default {
    props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
    methods: {
        toggleNav () {
            const nav = this.$refs.nav.classList
            nav.contains('active') ? nav.remove('active') : nav.add('active')
        }
    }
    
}
</script>

<style scoped >

nav {
    height: 60px;
    width: 100%;
}
ul {
    display: flex;
    height: 100%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    box-shadow: 2px 2px 2px #CCC;
    
}
a{
    text-decoration: none;
    display: flex;
    flex-direction: row-reverse;
}
li{
    list-style: none;
    padding: 10px 20px;
    cursor: pointer;
}
figure{
    cursor: pointer;
    margin-right: 10px;
}

@media screen and (max-width: 759px) {
 ul{
     position: absolute;
     width: 150px;
     height: 250px;
     flex-direction: column;
     left: -300px;
     top: 80px;
     transition: 300ms ease all;
     box-shadow: 2px 2px 2px #CCC;

 }
  .active {
         left: 0px;
     }
 figure{
     position: fixed;
     z-index: 1;
     top: 10px;
     left: 2px;
    
 }
 li{
     width: 100%;
     padding-left: 0;
     padding-right: 0;
 }
 a{
     flex-direction: row;
     margin-left: 20px;
     justify-content: space-between;
 }
    
}

</style>