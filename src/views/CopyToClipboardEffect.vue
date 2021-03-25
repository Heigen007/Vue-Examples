<template>
    <div class="home">
        <div class = "title">Password Generator With Copy To Clipboard Effect Example</div>
        <div class="MainBox">
            <div class="inputBox">
                <h2>Random Password Generator App</h2>
                <input type="text" placeholder="Create Password" id="password">
                <svg class = "copy" @click = "copyPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                <div id = "btn" @click = "getPassword">Generator Password</div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: 'Home',
    mounted(){
    },
    methods: {
        getPassword(){
            var chars = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM?!@#$%^&*";
            var passwordLength = 16;
            var password = ""
            for (let index = 0; index < passwordLength; index++) {
                var randomNumber = Math.floor(Math.random() * chars.length)
                password += chars.substring(randomNumber, randomNumber+1)
            }
            document.getElementById("password").value = password
        },
        copyPassword(){
            var copyPassText = document.getElementById("password")
            copyPassText.select();
            copyPassText.setSelectionRange(0,9999);
            document.execCommand("copy")
            console.log(1);
            Swal.fire(
                'Success!',
                'You copied the password!',
                'success'
            )
        }
    }
}
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: left;
    user-select: none;
}
.title{
    text-align: center;
}
svg{
    width: 30px;
}
.MainBox{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    background: #f8f8f8;
}
.inputBox{
    position: relative;
    width: 450px
}
.inputBox h2{
    font-size: 20px;
    color: #333;
}
.inputBox input{
    position: relative;
    width: 100%;
    height: 60px;
    border: none;
    margin: 15px 0 20px;
    background: transparent;
    outline: none;
    padding: 0 20px;
    font-size: 24px;
    letter-spacing: 4px;
    box-sizing: border-box;
    border-radius: 8px;
    color: #333;
    box-shadow: -4px -4px 10px rgba(255,255,255,1),
                inset 4px 4px 10px rgba(0,0,0,0.2);
}
.inputBox input::placeholder{
    letter-spacing: 0px;
}
.inputBox #btn{
    position: relative;
    cursor: pointer;
    color: #fff;
    background: #333;
    font-size: 24px;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 8px;
}
.inputBox #btn:active{
    background: #9c27b0;
}
.copy{
    position: absolute;
    top: 55px;
    right: 12px;
    cursor: pointer;
    opacity: 0.4;
}
.copy:hover{
    opacity: 1;
}
</style>