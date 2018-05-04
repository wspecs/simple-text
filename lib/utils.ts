// Map special to simple character.
export const REPLACE_MAP: {[key: string]:  string} = {
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
};

export const REPLACE_TEXT = new RegExp(Object.keys(REPLACE_MAP).join("|"),"gi");

export function simplify(sentence: string) {
  return sentence.replace(REPLACE_TEXT, (matched: string) => {
    return REPLACE_MAP[matched];
  });
}