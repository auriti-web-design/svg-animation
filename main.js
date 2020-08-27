/* This JavaScript function is used to check the length of lines by opening the browser console. */

const logo = document.querySelectorAll("#logo path");

for(let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

