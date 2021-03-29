<template>
    <div class="home">
        <div class = "title">Responsive Slidebar Menu Example</div>
        <div class="MainBox">
            <div class="navigation">
                <ul>
                    <li>
                        <a href="">
                            <span class="icon"><v-icon name="home"></v-icon></span>
                            <span class="title">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="icon"><v-icon name="user"></v-icon></span>
                            <span class="title">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="icon"><v-icon name="message-circle"></v-icon></span>
                            <span class="title">Messages</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="icon"><v-icon name="settings"></v-icon></span>
                            <span class="title">Setting</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="icon"><v-icon name="log-out"></v-icon></span>
                            <span class="title">Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="toggle" @click="toggleMenu">
                <v-icon class = 'mainT' name="menu"></v-icon>
                <v-icon class = 'pasT' name="x"></v-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    mounted(){
    },
    methods:{
        toggleMenu(){
            let nav = document.querySelector('.navigation')
            let toggle = document.querySelector('.toggle')
            nav.classList.toggle('active')
            toggle.classList.toggle('active')
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.MainBox{
    min-height: 85vh;
    background: #150019;
}
.navigation{
    position: fixed;
    width: 60px;
    height: 100%;
    background: #3e0748;
    left: 0;
    overflow: hidden;
    transition: 0.5s;
}
.navigation.active,
.navigation:hover{
    width: 300px;
}
.navigation ul{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.navigation ul li{
    position: relative;
    width: 100%;
    list-style: none;
}
.navigation ul li:hover{
    background: #ea1d63;
}
.navigation ul li a{
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: #fff;
}
.navigation ul li a .icon{
    position: relative;
    display: block;
    min-width: 60px;
    height: 30px;
    line-height: 60px;
    text-align: center;
}
.navigation ul li a .icon .fa{
    font-size: 24px;
}
.navigation ul li a .title{
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    font-size: 17px;
    color: white;
    text-align: start;
    white-space: nowrap;
}
.toggle{
    position: absolute;
    right: 0;
    width: 60px;
    height: 60px;
    background: #330748;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pasT{
    z-index: 0;
    background: #ea1d63;
}
.mainT{
    z-index: 1;
    background: #330748;
}
.toggle svg{
    position: absolute;
    width: 30px;
    height: 30px;
    color: white;
}
.toggle.active,
.toggle:hover{
    background: #ea1d63;
}
.toggle.active,
.toggle:hover > svg{
    background: #ea1d63;
}
.toggle.active > .mainT{
    display: none;
}
.toggle.active > .pasT{
    display: block;
}
@media (max-width: 600px){
    .navigation{
        left: -60px;
    }
    .navigation.active{
        left: 0;
        width: 100%;
    }
}
</style>