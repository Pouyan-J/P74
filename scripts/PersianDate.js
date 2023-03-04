"use strict";

const date_seperator = ".";

function to_persian_date_array(date) {
    let options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }

    return new Date(date)
        .toLocaleDateString("fa-IR", options)
        .replace(/([۰-۹])/g, (token) =>
            String.fromCharCode(token.charCodeAt(0) - 1728))
        .split("/");
}

function date_formatter(date, year_increment = 0) {
    return [parseInt(date[0]) + year_increment, date[1], date[2]].join(date_seperator);
}