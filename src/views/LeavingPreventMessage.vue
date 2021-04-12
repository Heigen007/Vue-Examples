<template>
    <div class="home">
        <div class = "title">Leaving Prevent Message Example</div>
        <div class="MainBox">
            <h3 style="max-width: 400px">Tou need to interact with page, often just pressing the screen or button is enough</h3><br>
            <h3 style="max-width: 400px">There might be some problems with hot reloading(for programmers)</h3><br>
            <h3 style="max-width: 400px">After interacting try to close the page or go back</h3><br>
            <button style="width: 50px">Hello</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    mounted(){
        window.addEventListener('beforeunload', (event) => {
            event.returnValue = `Are you sure you want to leave?`;
        });
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>
