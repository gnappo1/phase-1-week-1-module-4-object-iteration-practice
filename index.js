// Add your code below.


function listAllKeys(obj) {
    // Create an array to store keys
    let keys = [];

    // Iterate through the object keys
    for (let key in obj) {
        // Check if the key is not an integer, it might be looping over array indexes
        if (!Number.isInteger(parseInt(key))) {
            // Add the key to the keys array
            keys.push(key);
        }

        // Check if the value of the key is an object and not null
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Recursively call the function to get the keys of the nested object
            keys = keys.concat(listAllKeys(obj[key]));
        }
    }

    // Return the keys array
    return keys;
}

function countOccurrences(obj, value) {
    // Initialize a count variable to store the number of occurrences
    let count = 0;

    // Iterate through the object keys
    for (let key in obj) {
        // Check if the value of the key is equal to the specified value
        if (obj[key] === value) {
            // Increment the count variable
            count++;
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Recursively call the function to count occurrences in the nested object
            count += countOccurrences(obj[key], value);
        }
    }

    // Return the count of occurrences
    return count;
}
