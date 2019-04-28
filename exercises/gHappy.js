module.exports.run = function(str) {
  /*
		A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy, otherwise return false.

		Example:
			function("xxggxx") => true
			function("xxgxx") => false

		Write your code below the comment.
	*/
	// Little helper function for clean-up. Just checks equivalency to str 'g'
	let isG = letter => letter === 'g';
	
	// Return reduction of str. Reduce to disprove isHappy
	// Simple for loop is slightly fewer operations but like it functional, YOLO
  return str.split('').reduce((isHappy, letter, i, letters) => {
		// If isHappy has already been disproven, no need to check again
    if (isG(letter) && isHappy) {
      if (i === 0) {
        isHappy = isG(letters[i + 1]);
      } else if (i > 0 && i < letters.length - 1) {
        isHappy = isG(letters[i - 1]) || isG(letters[i + 1]);
      } else {
        isHappy = isG(letters[i - 1]);
      }
    }
    return isHappy;
  }, true);
};
