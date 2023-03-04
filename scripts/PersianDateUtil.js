"use strict";

let jh = date_formatter(to_persian_date_array(new Date()), 11180);
document.getElementById("today").innerHTML = jh;

document.getElementById("date-picker").addEventListener("change", function () {
    let input_date = this.value.split("-");
    let gr_date = date_formatter(input_date);
    let sh_date = date_formatter(to_persian_date_array(input_date));
    let pe_date = date_formatter(to_persian_date_array(input_date), 1180);
    let jh_date = date_formatter(to_persian_date_array(input_date), 11180);
    document.getElementById("convertor").innerHTML = ` = ${sh_date} SH = ${pe_date} PE = <b>${jh_date} JH</b>`;

    if (document.getElementById("convertor").innerHTML.includes("NaN")) {
        document.getElementById("convertor").innerHTML = ""
    }
});