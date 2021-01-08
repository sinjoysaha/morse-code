var code = {'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--',
        '?': '..--..', '=': '-...-'};

function translateEng2Morse() {
    const inputtext =  document.getElementById("inputtext").value;
    const outputtext =  document.getElementById("outputtext");    
    
    var result = translate(inputtext);
    outputtext.innerHTML = result;
};

function translate(inputtext) {
    var str = inputtext.toUpperCase();
    var ss = "";
    for (var i = 0; i < str.length; i++) {
        if(str.charAt(i)==' ')
        ss = ss + "| ";
        else
        ss = ss + code[str.charAt(i)] + " ";
    }
    return ss
};

function playAudio() {
    var dit = new Audio("../../audio/dit.wav");
    var dah = new Audio("../../audio/dah.wav");

    dit.play();
    dah.play();
};
