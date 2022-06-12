function capitalize(string) {
  const arrStr = string.split(" ");

  for(let i = 0; i < arrStr.length; i++){
    arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
  }

  return arrStr.join(" ");
}

function reverseString(string) {
  const arrStr = string.split(" ");
  
  for(let i = 0; i < arrStr.length; i++){
    arrStr[i] = arrStr[i].split("").reverse().join("");
  }

  return arrStr.reverse().join(" ");
}

const Calculator = () => {
  const add = (a, b) => {
    return a + b;
  }

  const subtract = (a, b) => {
    return a - b;
  }

  const divide = (a, b) => {
    return a / b;
  }

  const multiply = (a, b) => {
    return a * b;
  }

  return {add, subtract, divide, multiply}
}

function caesarCipher(text, shift) {
  const textArr = text.split("");
  let caesarText = "";

  for(let i = 0; i < textArr.length; i++) {
    if(/[., ]/.test(textArr[i])){
      caesarText += textArr[i]
    } else {
      let charCode = textArr[i].toLowerCase().charCodeAt(0) + shift;

      if(charCode <= 122) {
        caesarText += String.fromCharCode(charCode);
      } else {
        caesarText += String.fromCharCode(charCode - 26);
      }
    }
  }

  return caesarText;
}



export { capitalize, reverseString, Calculator, caesarCipher }
