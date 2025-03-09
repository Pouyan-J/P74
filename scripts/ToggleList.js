"use strict";

function toggleSublist(element) {
    var sublist = element.nextElementSibling;
    if (sublist.classList.contains('hidden')) {
        sublist.classList.remove('hidden');
        element.classList.add('open');
    } else {
        sublist.classList.add('hidden');
        element.classList.remove('open');
    }
}