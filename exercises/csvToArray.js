module.exports.run = function(csv) {
  /*
	A stringified CSV file will be passed into this function. Parse the string so it is an array of objects and return the array. The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/
  return csv.split('/n').reduce((output, line, index) => {
    if (index === 0) {
      // Push the object template into output
      output.push(
        // This reduction templates the first object by reducing the header
        // values into keys in an object
        line.split(',').reduce((object, key) => {
          object[key] = '';
          return object;
        }, {})
      );
    } else {
      // Template already exists, build values from template
      // Make sure to account for first line of values (don't access -1 element)
      output[index - 1] = line.split(',').reduce((object, value, i) => {
        // Use the keys of the original output {template} to build new object
        object[Object.keys(output[0])[i]] = value;
        return object;
      }, {});
    }
    return output;
  }, []);
};
