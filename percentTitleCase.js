//From LHL
//This algorithm replaces all white spaces 
//(except at the beginning of the string)
//with %20

const urlEncode = (text) => {

  let newUrl = ''; //variable to hold the new URL
  text = text.trim();

  //for loop to iterate on the given text
  //if - else statement to check and test conditions
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      newUrl += '%20';
    }
    else {
      newUrl += text[i];
    }
  }
  return newUrl;
};

//Test Code
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));