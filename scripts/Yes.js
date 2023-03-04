"use strict";

var text = [
    //"Yes", // English
    "Ja", // German
    "Да", // Russian
    '<span class="fa">آری</class>', // Persian
    "Jes", // Esperanto
    "Go'i", // Lojban
    "Ναί", // Greek
    "Oui", // French
    "Sí", // Spanish
    "Sì", // Italian
    "Igen", // Hungarian
    "Ano", // Czech
    "Tak", // Polish
    "Kyllä", // Finnish
    "Evet", // Turkish
    "Erê", // Kurmanji
    '<span class="fa">نعم</span>', // Arabic
    "Ndiyo", // Swahili
    "አዎ", // Amharic
    "כן", // Hebrew
    "हां", // Hindi
    "はい", // Japanese
    "对", // Mandarin
    "네", // Korean
    "👍", // Emoji
    "1", // Boolean
    "–·–·", // Morse code
];
var elem = document.getElementById("changeYesText");
var inst = setInterval(change, 1000);
var flag = true;
const default_text = "Yes";

function change() {
    if (flag) {
        elem.innerHTML =
            text[Math.floor(Math.random() * text.length)];
        flag = false;
    } else {
        elem.innerHTML = default_text;
        flag = true;
    }
}