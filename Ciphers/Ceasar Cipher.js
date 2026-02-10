window.addEventListener("load", function () {
    const select = document.getElementById("cipherSelect");
    if (!select) return;

    function showSelectedCipher() {
        const selectedCipher = select.value;
        const container = document.querySelector(".CipherContainer");
        if (container) {
            container.style.display = selectedCipher ? "block" : "none";
        }

        document.querySelectorAll(".CipherContainer > div").forEach(div => {
            div.style.display = "none";
        });

        if (selectedCipher) {
            const target = document.getElementById(selectedCipher);
            if (target) target.style.display = "block";
        }
    }

    select.addEventListener("change", showSelectedCipher);
});

function ceasarCipherLogic(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let base = (code >= 65 && code <= 90) ? 65 : 97;
            char = String.fromCharCode(((code - base + shift) % 26) + base);
        }
        result += char;
    }
    return result;
}

function encryptCeasarCipher() {
    const inputText = document.getElementById("inputText").value;
    const shiftValue = parseInt(document.getElementById("shiftValue").value);
    const encryptedText = ceasarCipherLogic(inputText, shiftValue);
    document.getElementById("result").innerText = `Encrypted Text: ${encryptedText}\nOriginal Text: ${inputText}\nShift Value: ${shiftValue}`;
}

function decryptCeasarCipher() {
    const inputText = document.getElementById("inputText").value;
    const shiftValue = parseInt(document.getElementById("shiftValue").value);
    const decryptedText = ceasarCipherLogic(inputText, 26 - (shiftValue % 26));
    document.getElementById("result").innerText = `Decrypted Text: ${decryptedText}\nOriginal Text: ${inputText}\nShift Value: ${shiftValue}`;
}