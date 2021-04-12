<template>
    <div class="home">
        <div class = "title">Voice and Text Examples</div>
        <div class="MainBox">
            <input id="search-field" type="text" class="search-field" placeholder="Ваш текст" value="" name="s" />
            <span class = "trigger" id="voice-trigger">Голосовой поиск</span>
            <span class = "trigger" id="text-trigger">Воспроизвести :)</span>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'Home',
    mounted(){
        var voiceTrigger = document.getElementById("voice-trigger");
        var searchInput = document.getElementById("search-field");
        document.getElementById('text-trigger').addEventListener('click', function(){
            let utterance = new SpeechSynthesisUtterance(searchInput.value);
            speechSynthesis.speak(utterance);
        })

        /*  set Web Speech API for Chrome or Firefox */
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        /* Check if browser support Web Speech API, remove the voice trigger if not supported */
        if (window.SpeechRecognition) {

            /* setup Speech Recognition */
            var recognition = new SpeechRecognition();
            recognition.interimResults = true;
            // recognition.lang = 'ru-RU';
            recognition.addEventListener('result', _transcriptHandler);

            recognition.onerror = function(event) {
                console.log(event.error);

                /* Revert input and icon CSS if no speech is detected */
            if(event.error == 'no-speech'){
                voiceTrigger.removeClass('active');
                searchInput.attr("placeholder", "Поиск...");
            }
            }
        } else {
            voiceTrigger.remove();
        }
                console.log(voiceTrigger);
                document.getElementById('voice-trigger').addEventListener('click', listenStart)

            /* Trigger listen event when our trigger is clicked */

        /* Our listen event */
        function listenStart(e){
            searchInput.placeholder = "Говорите..."
            voiceTrigger.classList.add('active');
            /* Start voice recognition */
            recognition.start();
        }

        /* Parse voice input */
        function _parseTranscript(e) {
            return Array.from(e.results).map(function (result) { return result[0] }).map(function (result) { return result.transcript }).join('')
        }

        /* Convert our voice input into text and submit the form */
        function _transcriptHandler(e) {
            var speechOutput = _parseTranscript(e)
            searchInput.value = (speechOutput);
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
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.trigger{
    margin-top: 30px;
    padding: 5px 12px 5px 12px;
    background-color: #5aba84;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    user-select: none;
}
#search-field{
    height: 40px;
    line-height: 40px;
    width: 250px;
    outline: none;
    border: none;
    background-color: #b1aaaa;
    color: #000;
    font-size: 1.4em;
}
</style>
