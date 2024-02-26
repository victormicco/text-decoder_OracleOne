function openGithub() {
  window.open("https://www.github.com");
}

function processText() {
  const text = document.getElementById("text").value.toLowerCase();
  const option = document.getElementById("option").value;

  let result = "";

  if (option === "encrypt") {
    result = encrypt(text);
  } else if (option === "decrypt") {
    result = decrypt(text);
  }

  document.getElementById("result").textContent = result;
}

function encrypt(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function decrypt(text) {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}
