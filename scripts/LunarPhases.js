"use strict";

const moonImages = [
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/newmoon.png",
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/waxingcrescent.png",
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/firstquarter.png",
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/waxinggibbous.png",
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/fullmoon.png",
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/waninggibbous.png",
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/lastquarter.png",
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/waningcrescent.png",
];

const moonEmojies = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];

const arabicToEnglish = s => s.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
let lunarDay = parseInt(arabicToEnglish(new Date().toLocaleDateString("ar-SA").split("/")[0]));
let lunarPhase = 0;

if (lunarDay == 1 || lunarDay >= 29)
    lunarPhase = 0;
else if (lunarDay >= 2 && lunarDay <= 13)
    lunarPhase = Math.ceil((lunarDay - 1) / 4);
else if (lunarDay == 14 || lunarDay == 15)
    lunarPhase = 4;
else if (lunarDay >= 16 && lunarDay <= 27)
    lunarPhase = Math.ceil((lunarDay - 15) / 4) + 4;
else
    lunarPhase = 7;

document.getElementById("moon-phases").src = moonImages[lunarPhase];
document.getElementById("moon-emoji").textContent = moonEmojies[lunarPhase];

if (new Date().getMonth() + 1 == 5 && new Date().getDate() == 4) {
    document.getElementById("moon-phases").src = 'img/poster/no-moon.png';
    document.getElementById("moon-emoji").textContent = "⚫";
    document.getElementById("moon-quote").innerHTML = "“That's no moon…”" + "<br />" + "— Obi-Wan Kenobi";
}

else if (new Date().getMonth() + 1 == 7 && new Date().getDate() == 20) {
    document.getElementById("moon-phases").src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg/534px-Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg';
    document.getElementById("moon-emoji").textContent = "🦅";
    document.getElementById("moon-quote").innerHTML = "“Tranquility Base here. The Eagle has landed.”"
        + "<br />" + "— Neil A. Armstrong (Apollo 11)";
}