/*
 * Finds all the anagrams in the Unix Dictionary and prints them to file
 */

var fs = require('fs');

/*
 * Create a stream and set the encoding so we can recieve a string
 */

var dictionary = fs.createReadStream("unixdict.txt");
dictionary.setEncoding('ascii');

/* A global object to push the resulting anagram keys to */
var anagrams = {};

/* A global variable to handle incomplete words */
var lastWord;

/*
 * If there is an error log it. The stream will autoclose. 
 */

dictionary.on("error", function(error) {
    console.error(error)
});

/*
 * When there is a chunk of data available, process it.
 */

dictionary.on("data", function(chunk) { 

    /* 
     * Split the data by newlines into an array of strings. 
     * Note: If, by chance, the last character of the chunk is a \n then JS 
     * will make the last item in 'words' an empty string. 
     */

    var words = chunk.split('\n');

    /*
     * Streaming data is not always split up in logical ways therefor we must 
     * add the last bit of the previous chunk to the first bit of this chunk
     * in order to make sure we get whole words.
     */

    if(lastWord) {
        words[0] = lastWord.concat(words[0]);
    }

    /*
     * We must also queue up the last bit of this chunk for use the next time
     * this function is called.
     */

    lastWord = words[words.length - 1];

    words.forEach(function(word) {

        /* Generate a key for the word */
        var key = word.split('').sort().join('');
        
        /* 
         * If the key is not already in the anagrams object create an array in 
         * which to put words with the same key.
         */

        if (!anagrams.hasOwnProperty(key)) {
            anagrams[key] = [];
        }

        /* Add this word to the array of anagrams for its key */
        anagrams[key].push(word);
    });
});

/*
 * On 'EOF' push the anagrams for each key to the console.
 */

dictionary.on("end", function() {

    Object.keys(anagrams).forEach(function(key) {
        
        var anagram = anagrams[key];

        /* 
         * If there's more than one element in the array then the elements are
         * anagrams of each other
         */ 

        if(anagram.length > 1) {
            console.log(anagram);
        }
    });
});
