"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Map special to simple character.
exports.REPLACE_MAP = {
    "à": "a",
    "á": "a",
    "â": "a",
    "ä": "a",
    "æ": "ae",
    "ã": "a",
    "å": "a",
    "ā": "a",
    "è": "e",
    "é": "e",
    "ê": "e",
    "ë": "e",
    "ē": "e",
    "ė": "e",
    "ę": "e",
    "î": "i",
    "ï": "i",
    "í": "i",
    "ī": "i",
    "į": "i",
    "ì": "i",
    "ô": "o",
    "ö": "o",
    "ò": "o",
    "ó": "o",
    "œ": "oe",
    "ø": "o",
    "ō": "o",
    "õ": "o",
    "û": "u",
    "ü": "u",
    "ù": "u",
    "ú": "u",
    "ū": "u",
    "ÿ": "y",
    "ç": "c",
    "ć": "c",
    "č": "c",
    "ý": "y",
    "ñ": "n"
};
exports.REPLACE_TEXT = new RegExp(Object.keys(exports.REPLACE_MAP).join("|"), "gi");
function simplify(sentence) {
    return sentence.replace(exports.REPLACE_TEXT, function (matched) {
        return exports.REPLACE_MAP[matched];
    });
}
exports.simplify = simplify;
