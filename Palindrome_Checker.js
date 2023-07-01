function palindrome(str) {

    const lowerCaseStr = str.toLowerCase();

    const splitString = lowerCaseStr.split('');

    const onlyLetters = splitString.filter((char) => {
      if(char >= 'A' && char <='Z' || char >= 'a' && char <='z') {
        return char;
      } else if(Number(char)) {
        console.log(typeof(char));
        return char;
      }
      else {
        return;
      }
    });

    const reversed = onlyLetters.slice().reverse();

    // if(JSON.stringify(reversed) === JSON.stringify(onlyLetters)){
    //   return true;
    // }

    if (reversed.toString().trim() === onlyLetters.toString().trim()) {
      // console.log ( "Reversed: " + reversed + "\n Only letters: " + onlyLetters )
      return true;
    } else {
      return false;
    }


    // const equal = reversed.every((char, index) => {
    //   return char === onlyLetters[index];
    // });

    // if (equal) {
    //   return true;
    // }
    }



    palindrome("not a palindrome");