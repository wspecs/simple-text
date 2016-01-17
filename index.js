(function (){
  /**
  * A helper file to create text only using lower case string (simple)
  */

  // Non english character map to an equivalent
  var replace_map = {
    "à" : "a",
    "á" : "a",
    "â" : "a",
    "ä" : "a",
    "æ" : "ae",
    "ã" : "a",
    "å" : "a",
    "ā" : "a",
    "è" : "e",
    "é" : "e",
    "ê" : "e",
    "ë" : "e",
    "ē" : "e",
    "ė" : "e",
    "ę" : "e",
    "î" : "i",
    "ï" : "i",
    "í" : "i",
    "ī" : "i",
    "į" : "i",
    "ì" : "i",
    "ô" : "o",
    "ö" : "o",
    "ò" : "o",
    "ó" : "o",
    "œ" : "oe",
    "ø" : "o",
    "ō" : "o",
    "õ" : "o",
    "û" : "u",
    "ü" : "u",
    "ù" : "u",
    "ú" : "u",
    "ū" : "u",
    "ÿ" : "y",
    "ç" : "c",
    "ć" : "c",
    "č" : "c",
    "ý" : "y",
    "ñ" : "n"
  }

  var ignore_map = {
    "i": 1,
    "a": 1,
    "all": 1,
    "also": 1,
    "an": 1,
    "and": 1,
    "are": 1,
    "as": 1,
    "at": 1,
    "be": 1,
    "been": 1,
    "but": 1,
    "by": 1,
    "can": 1,
    "do": 1,
    "for": 1,
    "go": 1,
    "had": 1,
    "have": 1,
    "he": 1,
    "him": 1,
    "his": 1,
    "is": 1,
    "it": 1,
    "no": 1,
    "not": 1,
    "of": 1,
    "on": 1,
    "that": 1,
    "the": 1,
    "thei": 1,
    "them": 1,
    "they": 1,
    "this": 1,
    "to": 1,
    "up": 1,
    "upon": 1,
    "was": 1,
    "we": 1,
    "were": 1,
    "who": 1,
    "will": 1,
    "with": 1
  }

  var replace_regex = new RegExp(Object.keys(replace_map).join("|"),"gi");

  // Text to ignore, to prevent multiple key for text
  var end_ignore = {
    length : 5, // minimun length to start considering
    remove : ['s', 'r', 'x', 'z'] //those will be replace by an empty character
  }


  /**
   * @param {string} sentence
   * @return {string} return a simplify string with only english characters.
   */
  function searchText(sentence){
    sentence = sentence.toLowerCase();

    return sentence.replace(replace_regex, function(matched){
      return replace_map[matched];
    });;
  }


  /**
   * @param {string} sentence
   * @param {number} limit
   * @return {array<string>} to match keys generated earlier for search map.
   */
  function getKeys(sentence, limit){
    limit = limit || 50;
    sentence = sentence.split(' ').splice(0, limit);
    
    for (var i = 0; i < sentence.length; i++){
      sentence[i] = getKey(sentence[i]);
    }
    
    return sentence;
  }


  /**
   * @param {string} word
   * @return {string} a key generate based on the given word.
   */
  function getKey(word){
    word = word.toLowerCase();
    word = searchText(word);
    if (word.length < 1)
      return false

    word = word.replace(/[^A-Za-z0-9]/g, '');
    
    // Remove similar ending for related words.
    if (word.length >= end_ignore.length) {
      last_char = word.substr(word.length - 1);
      for (var index in end_ignore.remove){
        if (end_ignore.remove[index] == last_char) {
          word = word.substr(0, word.length - 1)
          break;
        }
      }
    }
    return word
  }


  /**
   * @param {string} query
   */
  function preProcess(query){
    return query.replace("-", " ");
  }


  /**
   * @param {string} test
   * @return {string} a capitalize character.
   */
  function getIndexer(text){
    if (!text || text.length < 1)
      return text;
    return getKey(text.substr(0, 1)).toUpperCase()
  }


  /**
   * @param {string} word
   * @return {string} a string with the first letter capitalize.
   */
  function capKey(word){
    if (!word || word.length < 1)
      return word;
    else
      return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
  }

  module.exports = {
    replace: replace_map,
    ignore: ignore_map,
    getKey : getKey,
    getKeys : getKeys,
    searchText : searchText,
    preProcess : preProcess,
    getIndexer : getIndexer,
    capKey : capKey
  }
})();
