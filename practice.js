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



export { capitalize, reverseString }
