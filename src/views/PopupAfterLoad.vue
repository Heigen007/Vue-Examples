<template>
    <div class="home">
        <div class = "title">Responsive Popup Offer After Page Load(1.5s) Example</div>
        <div class="MainBox">
            <div class="popup">
                <div class="contentBox">
                    <div class="close"></div>
                    <div class="imgBx">
                        <img src="../assets/PopupAfterLoadAssets/gift.png">
                    </div>
                    <div class="content">
                        <div>
                            <h3>Special Offer</h3>
                            <h2>80<sup>%</sup><span> Off</span></h2>
                            <p style = "text-align: left; color: black">There should be some text about offer. There should be some text about it.</p>
                            <a href="/examples">Get The Deal</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    mounted(){
        setTimeout(() => {
            document.querySelector('.popup').style.display = "block"
        }, 1500);
        let close = document.querySelector('.close')
        close.addEventListener('click', function(){
            document.querySelector('.popup').style.display = "none"
        })
    },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.MainBox{
    min-height: 90vh;
    background: #6cb1ff;
}
.popup{
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: none;
}
.contentBox{
    position: relative;
    width: 600px;
    height: 400px;
    background: #fff;
    border-radius: 20px;
    display: flex;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
.contentBox .imgBx{
    position: relative;
    width: 300px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.contentBox .imgBx::before{
    content: '';
    position: absolute;
    width: 250px;
    height: 250px;
    background: #e7ffe0;
    border-radius: 50%;
}
.contentBox .imgBx img{

    position: relative;
    max-width: 250px;
    z-index: 1;
}
.contentBox .content{
    position: relative;
    width: 300px;
    height: 400px;
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: center;
}
.contentBox .content h3{
    color: #333;
    line-height: 1em;
    font-weight: 300;
    font-size: 2em;
}
.contentBox .content h2{
    color: #ff4d54;
    line-height: 1em;
    font-size: 4em;
}
.contentBox .content span{
    color: #333;
    font-size: 0.75em;
    text-transform: uppercase;
}
.contentBox .content a{
    display: inline-block;
    padding: 10px 20px;
    background: #ff4d54;
    color: #fff;
    margin-top: 15px;
    text-decoration: none;
    border-radius: 10px;
}
.close{
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background: #f3f3f3 url(../assets/close.png);
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: center;
    cursor: pointer;
    border-radius: 50%;
    z-index: 10;
}
@media(max-width: 700px){
    .contentBox{
        width: 300px;
        height: auto;
        flex-direction: column;
    }
    .contentBox .imgBx{
        height: 200px;
        transform: translateY(-50px);
    }
    .contentBox .imgBx::before{
        background: #fff;
    }
    .contentBox .content{
        height: auto;
        text-align: center;
        padding: 20px;
        padding-top: 0;
    }
    .close{
        top: -50px;
        right: -10px;
        background: #fff url(../assets/close.png);
        background-repeat: no-repeat;
        background-size: 40%;
        background-position: center;
    }
}
</style>