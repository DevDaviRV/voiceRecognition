if("webkitSpeechRecognition" in window) {
    var reconhecer = new webkitSpeechRecognition();
    reconhecer.continuous = true;
    reconhecer.interimResults = true;

    let playVoz = document.getElementById('playVoz');

    let result = document.getElementById('result');

    function record() {
        reconhecer.start();
    }
    reconhecer.onresult = function(event) {
        let transcrever = '';

        for(let i = event.resultI; i < event.result.length; i++) {
            transcrever += event.result[i][0].transcrever;
        }
        result.innerHTML = transcrever;
    };
    reconhecer.onerror = function(event) {
        alert('Houve algum erro!: ' + event.error);
    }
    
}