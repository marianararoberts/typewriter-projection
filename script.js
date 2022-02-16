// add delay and read lines from text.txt
var messageArray = ["SUBJECTS: TRIPLETS WITH UNKNOWN BLUE SKIN PIGMENTATION", "AGE: 3 YEARS",  "DISPLAY CONSTANT AND IDENTICAL HAPPINESS"];
let textPosition = 0;
let i = 0;
var speed = 85;
var typedMessage = "";

typewriter = () => {
    var typingMessage = typedMessage + messageArray[i].substring(0, textPosition);
    document.querySelector("#typing-text").innerHTML = typingMessage;
    
    
    if (textPosition++ != messageArray[i].length) {
        setTimeout(typewriter, speed);
    }
    if (textPosition > messageArray[i].length) {
        typedMessage += messageArray[i] + "<div>";
            i++;
            textPosition = 0;
            setTimeout(typewriter, 1000);
    }
    
}
window.addEventListener("load", typewriter);