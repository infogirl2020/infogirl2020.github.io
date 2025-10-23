function traduzir() {
    let palavra = document.getElementById('texto').value.toLowerCase();
    const result = document.getElementById('result');
    palavra = palavra.toLowerCase();
    let caracteres = palavra.split('');
    let letra = '';

    console.log(palavra);
    console.log(caracteres);


    for(let i = 0; i < caracteres.length; i++){
        switch(caracteres[i]){
            case "a":
                letra += ".-- ";
                break;
            case "b":
                letra += "-... ";
                break;
            case "c":
                letra += "-.-. ";
                break;
            case "d":
                letra += "-.. ";
                break;
            case "e":
                letra += ". ";
                break;
            case "f":
                letra += "..-. ";
                break;
            case "g":
                letra += "--. ";
                break;
            case "h":
                letra += ".... ";
                break;
            case "i":
                letra += ".. ";
                break;
            case "j":
                letra += ".--- ";
                break;
            case "k":
                letra += "-.- ";
                break;
            case "l":
                letra += ".-.. ";
                break;
            case "m":
                letra += "-- ";
                break;
            case "n":
                letra += "-. ";
                break;
            case "o":
                letra += "--- ";
                break;
            case "p":
                letra += ".--. ";
                break;
            case "q":
                letra += "--.- ";
                break;
            case "r":
                letra += ".-. ";
                break;
            case "s":
                letra += "... ";
                break;
            case "t":
                letra += "- ";
                break;
            case "u":
                letra += "..- ";
                break;
            case "v":
                letra += "...- ";
                break;
            case "w":
                letra += ".-- ";
                break;
            case "x":
                letra += "-..- ";
                break;
            case "y":
                letra += "-.-- ";
                break;
            case "z":
                letra += "--.. ";
                break;
            case "1":
                letra += ".---- ";
                break;
            case "2":
                letra += "..--- ";
                break;
            case "3":
                letra += "...-- ";
                break;
            case "4":
                letra += "....- ";
                break;
            case "5":
                letra += "..... ";
                break;
            case "6":
                letra += "-.... ";
                break;
            case "7":
                letra += "--... ";
                break;
            case "8":
                letra += "---.. ";
                break;
            case "9":
                letra += "----. ";
                break;
            case "0":
                letra += "----- ";
                break;
            case ",":
                letra += "--..-- ";
                break;
            case ".":
                letra += ".-.-.- ";
                break;
            case ":":
                letra += "---... ";
                break;
            case "?":
                letra += "..--.. ";
                break;
            case " ":
                letra += " / ";
            default:
                letra += "";
        }
    }

    console.log(letra);
    result.innerText = `${letra}`;
}

function traduzirContrario() {
    let morse = document.getElementById("codigo").value.trim();
      let palavras = morse.split(" / ");
      let resultado = "";

      const morseParaTexto = {
        ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e",
        "..-.": "f", "--.": "g", "....": "h", "..": "i", ".---": "j",
        "-.-": "k", ".-..": "l", "--": "m", "-.": "n", "---": "o",
        ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t",
        "..-": "u", "...-": "v", ".--": "w", "-..-": "x", "-.--": "y",
        "--..": "z",
        ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5",
        "-....": "6", "--...": "7", "---..": "8", "----.": "9", "-----": "0",
        "--..--": ",", ".-.-.-": ".", "---...": ":", "..--..": "?", "/" : " "
      };

      for (let p of palavras) {
        let letras = p.split(" ");
        for (let l of letras) {
          if (morseParaTexto[l]) {
            resultado += morseParaTexto[l];
          }
        }
        resultado += " ";
      }

      document.getElementById("result2").innerText = resultado.trim();
    result2.innerText = `${letra}`;
}

function mostrarDicionario() {
  const morseParaTexto = {
    ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e",
    "..-.": "f", "--.": "g", "....": "h", "..": "i", ".---": "j",
    "-.-": "k", ".-..": "l", "--": "m", "-.": "n", "---": "o",
    ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t",
    "..-": "u", "...-": "v", ".--": "w", "-..-": "x", "-.--": "y",
    "--..": "z",
    ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5",
    "-....": "6", "--...": "7", "---..": "8", "----.": "9", "-----": "0",
    "--..--": ",", ".-.-.-": ".", "---...": ":", "..--..": "?", "/": "[ ]"
  };

  const ul = document.createElement("ul");
  ul.classList.add("dicionario");

  for (let codigo in morseParaTexto) {
    const li = document.createElement("li");
    li.innerHTML = `${morseParaTexto[codigo]} → <strong>${codigo}</strong>`;
    ul.appendChild(li);
  }

  document.body.appendChild(ul);
}

window.onload = mostrarDicionario;
