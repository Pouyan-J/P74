"use strict";

const moonImages = [
    "img/moon/newmoon.png",
    "img/moon/waxingcrescent.png",
    "img/moon/firstquarter.png",
    "img/moon/waxinggibbous.png",
    "img/moon/fullmoon.png",
    "img/moon/waninggibbous.png",
    "img/moon/lastquarter.png",
    "img/moon/waningcrescent.png",
];

const moonEmojis = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];

function getMoonPhase(date) {
    function toJulianDay(d) {
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const day = d.getDate() + d.getHours() / 24 + d.getMinutes() / 1440 + d.getSeconds() / 86400;
        const a = Math.floor((14 - month) / 12);
        const y = year + 4800 - a;
        const m = month + 12 * a - 3;
        return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    }
    const knownNewMoonJD = 2451550.26;
    const synodicMonth = 29.53058867;
    const jd = toJulianDay(date);
    const daysSince = jd - knownNewMoonJD;
    const phaseFraction = ((daysSince % synodicMonth) + synodicMonth) % synodicMonth / synodicMonth;
    return { index: Math.round(phaseFraction * 8) % 8, fraction: phaseFraction };
}

function handleSpecialDates(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (month === 5 && day === 4) {  // Star Wars day
        document.getElementById("moon-phases").src = 'img/moon/no-moon.png';
        document.getElementById("moon-emoji").textContent = "⚫";
        document.getElementById("moon-quote").innerHTML = "“That's no moon…”<br /> — Obi-Wan Kenobi";
        return true;
    }
    if (month === 7 && day === 20) { // Apollo 11 landing
        document.getElementById("moon-phases").src ='img/moon/apollo11.webp';
        document.getElementById("moon-emoji").textContent = "🦅";
        document.getElementById("moon-quote").innerHTML =
            "“Tranquility Base here. The Eagle has landed.”<br /> — Neil A. Armstrong (Apollo 11)";
        return true;
    }
    return false;
}

function updateMoonPhase() {
    const now = new Date();

    if (!handleSpecialDates(now)) {
        const { index } = getMoonPhase(now);
        document.getElementById("moon-phases").src = moonImages[index];
        document.getElementById("moon-emoji").textContent = moonEmojis[index];
        document.getElementById("moon-quote").innerHTML = "“Don't tell me the sky's the limit when there are footprints on the moon.”<br /> — Paul Brandt";
    }
}

// Run on page load
updateMoonPhase();