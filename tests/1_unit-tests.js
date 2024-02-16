const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
    const translator = new Translator();

    // Testing translation from American to British English
    test('Translate Mangoes are my favorite fruit.', (done) => {
        assert.deepEqual(translator.toBritish("Mangoes are my favorite fruit."), 
            ['Mangoes are my favourite fruit.', 'Mangoes are my <span class="highlight">favourite</span> fruit.']);
        done();
    });

    test('Translate I ate yogurt for breakfast.', (done) => {
        assert.deepEqual(translator.toBritish("I ate yogurt for breakfast."), 
            ['I ate yoghurt for breakfast.', 'I ate <span class="highlight">yoghurt</span> for breakfast.']);
        done();
    });

    test('Translate We had a party at my friend\'s condo.', (done) => {
        assert.deepEqual(translator.toBritish("We had a party at my friend's condo."), 
            ["We had a party at my friend's flat.", "We had a party at my friend's <span class=\"highlight\">flat</span>."]);
        done();
    });

    test('Translate Can you toss this in the trashcan for me?', (done) => {
        assert.deepEqual(translator.toBritish("Can you toss this in the trashcan for me?"), 
            ['Can you toss this in the bin for me?', 'Can you toss this in the <span class=\"highlight\">bin</span> for me?']);
        done();
    });

    test('Translate The parking lot was full.', (done) => {
        assert.deepEqual(translator.toBritish("The parking lot was full."), 
            ['The car park was full.', 'The <span class="highlight">car park</span> was full.']);
        done();
});

    test('Translate Like a high tech Rube Goldberg machine.', (done) => {
        assert.deepEqual(translator.toBritish("Like a high tech Rube Goldberg machine."), 
            ['Like a high tech Heath Robinson device.', 'Like a high tech <span class="highlight">Heath Robinson device</span>.']);
        done();
    });

    test('Translate To play hooky means to skip class or work.', (done) => {
        assert.deepEqual(translator.toBritish("To play hooky means to skip class or work."), 
            ['To bunk off means to skip class or work.', 'To <span class=\"highlight\">bunk off</span> means to skip class or work.']);
        done();
    });

    test('Translate No Mr. Bond, I expect you to die.', (done) => {
        assert.deepEqual(translator.toBritish("No Mr. Bond, I expect you to die."), 
            ['No Mr Bond, I expect you to die.', 'No <span class=\"highlight\">Mr</span> Bond, I expect you to die.']);
        done();
    });

    test('Translate Dr. Grosh will see you now.', (done) => {
        assert.deepEqual(translator.toBritish("Dr. Grosh will see you now."), 
            ['Dr Grosh will see you now.', '<span class=\"highlight\">Dr</span> Grosh will see you now.']);
        done();
    });

    test('Translate Lunch is at 12:15 today.', (done) => {
        assert.deepEqual(translator.toBritish("Lunch is at 12:15 today."), 
            ['Lunch is at 12.15 today.', 'Lunch is at <span class=\"highlight\">12.15</span> today.']);
        done();
    });

    // Testing translation from British to American English
    test('Translate We watched the footie match for a while.', (done) => {
        assert.deepEqual(translator.toAmerican("We watched the footie match for a while."), 
            ["We watched the soccer match for a while.", "We watched the <span class=\"highlight\">soccer</span> match for a while."]);
        done();
    });

    test('Translate Paracetamol takes up to an hour to work.', (done) => {
        assert.deepEqual(translator.toAmerican("Paracetamol takes up to an hour to work."), 
            ["Tylenol takes up to an hour to work.", "<span class=\"highlight\">Tylenol</span> takes up to an hour to work."]);
        done();
    });

    test('Translate First, caramelise the onions.', (done) => {
        assert.deepEqual(translator.toAmerican("First, caramelise the onions."), 
            ["First, caramelize the onions.", "First, <span class=\"highlight\">caramelize</span> the onions."]);
        done();
    });

    test('Translate I spent the bank holiday at the funfair.', (done) => {
        assert.deepEqual(translator.toAmerican("I spent the bank holiday at the funfair."), 
            ["I spent the public holiday at the carnival.", "I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>."]);
        done();
    });

    test('Translate I had a bicky then went to the chippy.', (done) => {
        assert.deepEqual(translator.toAmerican("I had a bicky then went to the chippy."), 
            ["I had a cookie then went to the fish-and-chip shop.", "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>."]);
        done();
    });

    test('Translate I\'ve just got bits and bobs in my bum bag.', (done) => {
        assert.deepEqual(translator.toAmerican("I've just got bits and bobs in my bum bag."), 
            ["I've just got odds and ends in my fanny pack.", "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>."]);
        done();
    });

    test('Translate The car boot sale at Boxted Airfield was called off.', (done) => {
        assert.deepEqual(translator.toAmerican("The car boot sale at Boxted Airfield was called off."), 
            ["The swap meet at Boxted Airfield was called off.", "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off."]);
        done();
    });

    test('Translate Have you met Mrs Kalyani?', (done) => {
        assert.deepEqual(translator.toAmerican("Have you met Mrs Kalyani?"), 
            ["Have you met Mrs. Kalyani?", "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?"]);
        done();
    });

    test('Translate Prof Joyner of King\'s College, London.', (done) => {
        assert.deepEqual(translator.toAmerican("Prof Joyner of King's College, London."), 
            ["Prof. Joyner of King's College, London.", "<span class=\"highlight\">Prof.</span> Joyner of King's College, London."]);
        done();
    });

    test('Translate Tea time is usually around 4 or 4.30.', (done) => {
        assert.deepEqual(translator.toAmerican("Tea time is usually around 4 or 4.30."), 
            ["Tea time is usually around 4 or 4:30.", "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>."]);
        done();
    });

    // Highlight translation tests
    test('Highlight translation in Mangoes are my favorite fruit.', (done) => {
        assert.deepEqual(translator.toBritish("Mangoes are my favorite fruit."), ["Mangoes are my favourite fruit.", "Mangoes are my <span class=\"highlight\">favourite</span> fruit."]);
        done();
    })

    test("Highlight translation in I ate yogurt for breakfast.", (done) => {
        assert.deepEqual(translator.toBritish("I ate yogurt for breakfast."),
        [
            "I ate yoghurt for breakfast.",
            "I ate <span class=\"highlight\">yoghurt</span> for breakfast."
        ]);
        done();
    });

    test("Highlight translation in We watched the footie match for a while.", (done) => {
        assert.deepEqual(translator.toAmerican("We watched the footie match for a while."),
        [
            "We watched the soccer match for a while.",
            "We watched the <span class=\"highlight\">soccer</span> match for a while."
        ]);
        done();
    });

    test('Translate Paracetamol takes up to an hour to work.', (done) => {
        assert.deepEqual(translator.toAmerican("Paracetamol takes up to an hour to work."), 
            ["Tylenol takes up to an hour to work.", "<span class=\"highlight\">Tylenol</span> takes up to an hour to work."]);
        done();
        });
});