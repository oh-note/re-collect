import { toggleTheme } from '@lib/toggleTheme';

console.log('content script loaded');

void toggleTheme();

window.addEventListener("selectstart", (event) => {
    // We only accept messages from ourselves
    console.log(event);
    console.log(document.getSelection()?.getRangeAt(0));
}, false);
window.addEventListener("copy", (event) => {
    // We only accept messages from ourselves
    console.log(document.getSelection()?.getRangeAt(0));
}, false);