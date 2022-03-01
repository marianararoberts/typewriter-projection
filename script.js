
var messageArray = ["SUBJECTS: TRIPLETS WITH UNKNOWN BLUE SKIN PIGMENTATION", "AGE: 3 YEARS", "DISPLAY CONSTANT AND IDENTICAL HAPPINESS", "DAY ONE TEST ONE - SENSORY STIMULI", "SUBJECT ONE: REMAINS UNAFFECTED BY CONSTANT STIMULATION - EXHIBITS LAUGHTER", "SUBJECT TWO: REACTION IDENTICAL TO SUBJECT ONE", "SUBJECT THREE: IDENTICAL REACTION TO PREVIOUS TWO SUBJECTS", "IDENTICAL PLEASURE RESPONSES CORRESPONDING TO EQUAL OPTICAL STIMULATION", "ONE SUBJECT EXPERIENCING STIMULATION RESULTS IN ALL SUBJECTS RESPONDING IN AN IDENTICAL AND SIMULTANEOUS MANNER", "PHASE TWO - PRESENT SUBJECTS WITH DISCONCERTING IMAGERY", "ADRENALINE AND CORTISOL LEVELS REMAIN UNCHANGED - SUBJECTS APPEAR CALM", "PHASE TWO, TEST THREE - PRESENT SUBJECTS WITH GRAPHIC MATERIAL INVOLVING HOSTILE WARFARE AND BLOODSHED", "DISCOMFORT EXHIBITED BY SUBJECTS!!!", "SUBJECTS REMAIN UNPHASED :(", "HYPOTHESIS: PRIONS IN BLOOD MIGHT PRODUCE SUBJECTS' ADNORMAL SKIN PIGMENTATION AND BEHAVIOR???"];
let textPosition = 0;
let i = 0;
var speed = 85;
var typedMessage = "";
var prevMessage = "";
var delayArr = [500, 1000, 10000, 29250, 25000, 250, 500, 3000, 20000, 25000, 6500, 22000, 17000, 10000, 3000, 10000, 2000]
typewriter = () => {
  if (i == 14) {
    typedMessage = prevMessage;
  }
  var typingMessage = typedMessage + messageArray[i].substring(0, textPosition);
  document.querySelector("#typing-text").innerHTML = typingMessage;

  if (textPosition++ != messageArray[i].length) {
    setTimeout(typewriter, speed);
  }
  if (textPosition > messageArray[i].length) {
    if (i == 13) {
      prevMessage = typedMessage;
    }
    typedMessage += messageArray[i] + "<div>";
    i++;
    textPosition = 0;
    setTimeout(typewriter, delayArr[i-1]);
  }

}
window.addEventListener("load", typewriter);
