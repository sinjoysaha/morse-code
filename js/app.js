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
    var dit_path = "https://sinjoysaha.github.io/morse-code/audio/dit.wav";
    var dah_path = "https://sinjoysaha.github.io/morse-code/audio/dah.wav";
    var dit = new Audio(dit_path);
    var dah = new Audio(dah_path);

    dit.play();
    dah.play();
};
