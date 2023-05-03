"use strict";

const moonPhases = [
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/newmoon.png",
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/waxingcrescent.png",
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/firstquarter.png",
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/waxinggibbous.png",
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/fullmoon.png",
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/waninggibbous.png",
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/lastquarter.png",
    "https://raw.githubusercontent.com/tallulahh/moon-phase/main/waningcrescent.png",
];
const a2e = s => s.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
let lunar_day = parseInt(a2e(new Date().toLocaleDateString("ar-SA").split("/")[0]));
let lunar_phase = 0;

if (lunar_day == 1 || lunar_day >= 29)
    lunar_phase = 0;
else if (lunar_day >= 2 && lunar_day <= 13)
    lunar_phase = Math.ceil((lunar_day - 1) / 4);
else if (lunar_day == 14 || lunar_day == 15)
    lunar_phase = 4;
else if (lunar_day >= 16 && lunar_day <= 27)
    lunar_phase = Math.ceil((lunar_day - 15) / 4) + 4;
else
    lunar_phase = 7;

document.getElementById("moon-phases").src = moonPhases[lunar_phase];

if (new Date().getMonth() == 5 && new Date().getDay() == 4) {
    document.getElementById("moon-phases").src = 'img/poster/no-moon.png';
    document.getElementById("moon-quote").innerHTML = "“That's no moon…”" + "<br />" + "— Obi-Wan Kenobi";
}

else if (new Date().getMonth() == 7 && new Date().getDay() == 20) {
    document.getElementById("moon-phases").src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg/534px-Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg';
    document.getElementById("moon-quote").innerHTML = "“Tranquility Base here. The Eagle has landed.”"
        + "<br />" + "— Neil A. Armstrong (Apollo 11)";
}