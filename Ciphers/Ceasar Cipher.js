window.addEventListener("load", function () {
    const select = document.getElementById("cipherSelect");
    if (!select) return;

    function showSelectedCipher() {
        const selectedCipher = select.value;
        document.querySelectorAll(".cipherContainer > div").forEach(div => {
            div.style.display = "none";
        });

        if (selectedCipher) {
            const targetById = document.getElementById(selectedCipher);
            const targetByData = document.querySelector(`[data-cipher="${selectedCipher}"]`);
            const target = targetById || targetByData;
            if (target) target.style.display = "block";
        }
    }

    select.addEventListener("change", showSelectedCipher);
    select.dispatchEvent(new Event("change"));
});

function encryptCeasarCipherLogic(text, shift) {
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
    const encryptedText = encryptCeasarCipherLogic(inputText, shiftValue);
    document.getElementById("result").innerText = `Encrypted Text: ${encryptedText}\nOriginal Text: ${inputText}\nShift Value: ${shiftValue}`;
}