"use strict";

/*
 * Collapsible lists.
 *
 * The markup stays plain (a heading or <b> followed by a <ul class="hidden">),
 * so without JavaScript the <noscript> style in each page simply shows every
 * list. With JavaScript the toggles become real buttons: they can be reached
 * with Tab, operated with Enter / Space, and announce their expanded state.
 */

function toggleSublist(element) {
    var sublist = element.nextElementSibling;
    if (!sublist) {
        return;
    }
    var opening = sublist.classList.contains('hidden');
    sublist.classList.toggle('hidden', !opening);
    element.classList.toggle('open', opening);

    var control = element.querySelector('[role="button"]') || element;
    control.setAttribute('aria-expanded', opening ? 'true' : 'false');
}

function initToggles() {
    var toggles = document.querySelectorAll('.toggle');

    for (var i = 0; i < toggles.length; i++) {
        var toggle = toggles[i];
        var control = toggle;

        // Keep headings as headings: put the button role on an inner element
        // instead of replacing the heading role.
        if (/^H[1-6]$/.test(toggle.tagName)) {
            control = document.createElement('span');
            while (toggle.firstChild) {
                control.appendChild(toggle.firstChild);
            }
            toggle.appendChild(control);
        }

        control.setAttribute('role', 'button');
        control.setAttribute('tabindex', '0');
        control.setAttribute('aria-expanded', 'false');

        var sublist = toggle.nextElementSibling;
        if (sublist) {
            if (!sublist.id) {
                sublist.id = 'sublist-' + (i + 1);
            }
            control.setAttribute('aria-controls', sublist.id);
        }

        toggle.addEventListener('click', function () {
            toggleSublist(this);
        });

        control.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
                event.preventDefault();
                toggleSublist(this.closest('.toggle'));
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggles);
} else {
    initToggles();
}
