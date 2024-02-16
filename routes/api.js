'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
    const translator = new Translator();

    app.route('/api/translate')
        .post((req, res) => {
            let {locale, text} = req.body;

            console.log("request sent with ", req.body);

            if(!locale || text == undefined) {
                res.json({error: "Required field(s) missing"});
                return;
            }

            if( text == "") {
                res.json({error: "No text to translate"});
                return;
            }

            let translation;

            if(locale == "american-to-british") {
                console.log("attempting to translate to british.......")
                translation = translator.toBritish(text);

            } else if(locale == "british-to-american") {
                console.log("attempting to translate to american.....")
                translation = translator.toAmerican(text);

            } else {
                res.json({error: "Invalid value for locale field"});
                return;
            }

            if(!translation || translation[0] == text) {
                console.log("translator didn't make any changes..............");
                res.json({text, translation: "Everything looks good to me"});

            } else {
                console.log("translator did do something, or atleast it thinks it did.......");
                res.json({text, translation: translation[1]});

            }

        });
};
