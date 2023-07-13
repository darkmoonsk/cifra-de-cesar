const selectorField = document.querySelector("#displacement");
const text = document.querySelector("#to-encrypt");
const button = document.querySelector("#button");
const response = document.querySelector("#response");

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

alphabet.forEach((letter, index) => {
    const optionElement = `<option value=${index}>${letter}</option>`
    selectorField.innerHTML += optionElement;
});

button.addEventListener("click", () => {
    const textToEncrypt = text.value;
    const displacement = Number(selectorField.value);
    console.log(displacement);
    
    const cipherText = cipher(textToEncrypt, displacement);
    console.log(cipherText);
    response.classList.remove("hidden");
    response.innerText = cipherText;
})

function cipher(text, displacement) {
    let textUpperCased = text.toUpperCase().split("");
    let encryptedText = []; 

    for(let i = 0; i < textUpperCased.length; i++) {
        let letterIndex = alphabet.indexOf(textUpperCased[i]);
        if(letterIndex >= 0) {
            encryptedText.push(letterPerIndex(letterIndex + displacement));
        } else {
            encryptedText.push(textUpperCased[i]);
        }
    }

    console.log(encryptedText);

    return encryptedText.join("");
}

function letterPerIndex(index) {
    let finalIndex;
    if(index >= 0) {
        finalIndex = index % alphabet.length;
    } else {
        finalIndex = alphabet.length + index % alphabet.length;
    }

    return alphabet[finalIndex];
}