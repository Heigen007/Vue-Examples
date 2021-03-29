<template>
    <div class="home">
        <div class = "title">Scroll Effect Example</div>
        <div class="MainBox">
            <div class="container">
                <div class="icon">
                    <div class="iconBx" data-id="content1">
                        <img  src="../assets/TabsEffectAssets/photo1.png">
                    </div>
                    <div class="iconBx" data-id="content2">
                        <img src="../assets/TabsEffectAssets/photo2.png">
                    </div>
                    <div class="iconBx" data-id="content3">
                        <img src="../assets/TabsEffectAssets/photo3.png">
                    </div>
                    <div class="iconBx" data-id="content4">
                        <img src="../assets/TabsEffectAssets/photo4.png">
                    </div>
                </div>
                <div class="content">
                    <div class="contentBx active" id="content1">
                        <div>
                            <div class="text">
                                <h2>Google Tab</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="contentBx" id="content2">
                        <div>
                            <div class="text">
                                <h2>Facebook Tab</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="contentBx" id="content3">
                        <div>
                            <div class="text">
                                <h2>Twitter Tab</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="contentBx" id="content4">
                        <div>
                            <div class="text">
                                <h2>Yahoo Tab</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
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
        var iconBx = document.querySelectorAll('.iconBx')
        var contentBx = document.querySelectorAll('.contentBx')

        for(var i = 0; i < iconBx.length; i++){
            iconBx[i].addEventListener('mouseover', function(){
                for(var i = 0; i< contentBx.length; i++){
                    contentBx[i].className = 'contentBx'
                }
                document.getElementById(this.dataset.id).className = 'contentBx active'
                
                for(var i = 0; i< iconBx.length; i++){
                    iconBx[i].className = 'iconBx'
                }
                this.className = 'iconBx active'
            })
        }
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
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: rgb(134, 134, 134);
}
.container{
    position: relative;
    display: flex;
    flex-flow: wrap;
    width: 100%;
}
.container .icon{
    position: relative;
    width: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.container .icon .iconBx{
    position: relative;
    width: calc(50% - 40px);
    height: 140px;
    margin: 0 30px 30px 0;
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 4px;
    transition: 0.5s;
    box-shadow: 0 5px 15px rgba(0,0,0,0.07);
}
.container .icon .iconBx.active{
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
.container .icon .iconBx img{
    max-width: 100%;
    filter: grayscale(1);
    transition: 0.5s;
    transform: scale(0.8);
}
.container .icon .iconBx.active img{
    filter: grayscale(0);
    transform: scale(1);   
}
.content{
    position: relative;
    width: 50%;
    overflow: hidden;
}
.content .contentBx{
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    transform: scale(0);
    opacity: 0;
}
.content .contentBx.active{
    transform: scale(1);
    opacity: 1;
    transition-delay: 0.3s;
}
.content.contentBx h2{
    font-size: 3em;
}
</style>