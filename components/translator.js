const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

function reverseObj(obj) {
    let reversedObj = {};

    Object.entries(obj).map(([key, value]) => {
        reversedObj[value] = key;
    });

    return reversedObj;
}

class Translator {
    toBritish(inputText) {
        //set up all words to be translated using object lookup
        const translateObj = {
            ...americanOnly,
            ...americanToBritishSpelling
        };

        const titles = americanToBritishTitles;

        let timeRegex = /([1-9]|1[012]):[0-5][0-9]/g;

        let translatedHtml = this.translate(inputText, translateObj, titles, timeRegex, "toBritish");

        if(translatedHtml == null) {
            return [inputText, null];
        }

        return translatedHtml;

    }

    toAmerican(inputText) {
        const translateObj = {
            ...britishOnly,
            ...reverseObj(americanToBritishSpelling)
        };

        const titles = reverseObj(americanToBritishTitles);

        const timeRegex = /([1-9]|1[012])\.[0-5][0-9]/g;

        let translatedHtml = this.translate(inputText, translateObj, titles, timeRegex, "toAmerican");

        if(translatedHtml == null) {
            return [inputText, null];
        }

        return translatedHtml;

    }

    translate(inputText, translateObj, titles, timeRegex, locale) {
        
        let lowerCaseText = inputText.toLowerCase();
        let matches = {};

        Object.entries(titles).map(([key, value]) => {
            if (lowerCaseText.includes(key + " ")) {
                console.log("Hit on word ..... ", key);
                matches[key] = value.charAt(0).toUpperCase() + value.slice(1,);
            }
        });

        Object.entries(translateObj).map(([key, value]) => {
            if(lowerCaseText.includes(key)) {
                // make sure some words don't just replace semi-words or if their letters match
                console.log("should hit something....")
                if(!key.includes(" ")) {
                    let oneWordRegex = new RegExp(`\\b${key}\\b`, "gi");
                    console.log("oneWordRegex ....." , oneWordRegex);
                    console.log("key is ....", key);

                    if(oneWordRegex.test(inputText)) {
                        console.log("one-word Hit on word ..... ", key);
                        return matches[key] = value;
                        
                    } else {
                        console.log("sorry.... was just inner letters of a word");
                        return;
                    }

                } else {

                    console.log("multi-word Hit on phrase ..... ", key);
                    return matches[key] = value;
                }

                
            }
        });

        let timeMatches = lowerCaseText.match(timeRegex);

        if(timeMatches) {

            if(locale == "toBritish") {
                console.log("to british time");
                timeMatches.map((elem) => {
                    matches[elem] = elem.replace(":", ".");
                });

            } else {
                console.log("to american time...");
                timeMatches.map( (elem) => {
                    matches[elem] = elem.replace(".", ":");
                })
            }

        }

        console.log("text ....", inputText);
        console.log("matches", matches);


        let regex = new RegExp(Object.keys(matches).join("|"), "ig");

        let translatedText = inputText.replace(regex, (matchedValues) => {
            return matches[matchedValues.toLowerCase()];
        });

        let highlightedText = inputText.replace(regex, (matchedValues) => {
            return `<span class="highlight">${matches[matchedValues.toLowerCase()]}</span>`;
        });

        if(Object.keys(matches).length == 0) {
            console.log("nothing matched........");
            return null;
        }

        return [translatedText, highlightedText];
    }
}

module.exports = Translator;