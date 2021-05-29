let userInputSubmit = document.getElementById('userInputSubmit');
let userInputReset = document.getElementById('userInputReset');
let userTextContainer_input = document.getElementById('userTextContainer_input');
let userTextContainer_converted = document.getElementById('userTextContainer_converted');
// const sentenceGen = require('./sentenceGen');

const init = () => {
    // console.log('hello');

    userInputSubmit.addEventListener('click', (e) => {
        // userInputSubmit.innerHTML = 'hello';
        // setTimeout(() => {
        // userInputSubmit.innerHTML = 'squishing some shtuff...';
        userInputSubmit.innerHTML = sentenceGenerator();
        setTimeout(() => {
            // userInputSubmit.innerHTML = 'smonching WOTS of shtuff...😂😂';
            userInputSubmit.innerHTML = sentenceGenerator();
            setTimeout(() => {
                // userInputSubmit.innerHTML = 'OTAY! smushed EVWEETING!';
                userInputSubmit.innerHTML = sentenceGenerator();
                setTimeout(() => {
                    let userText = document.getElementById('userInput').value;
                    // console.log(userText);
                    let userTextSquished = squishify(userText);
                    document.getElementById('userInputConverted').innerHTML =
                        userTextSquished;
                    userInputSubmit.style.display = 'none';
                    userTextContainer_input.style.display = 'none';
                    userInputReset.style.display = 'flex';
                    userTextContainer_converted.style.display = 'flex';
                    reset();
                }, 2500);
            }, 2500);
        }, 2500);
        // }, 1500);
    });
};
window.addEventListener(
    'load',
    function() {
        sentenceGenerator();
    },
    false
);
const reset = () => {
    document.getElementById('userInputReset').addEventListener('click', (e) => {
        console.log('userInputReset');
        // let userText = document.getElementById('userInput').value;
        // // console.log(userText);
        // let userTextSquished = squishify(userText);
        // document.getElementById('userInputConverted').innerHTML = userTextSquished;
        userInputSubmit.style.display = 'flex';
        userTextContainer_input.style.display = 'flex';
        userInputReset.style.display = 'none';
        userTextContainer_converted.style.display = 'none';

        init(); //
    });
};
init();

const squishify = (text) => {
    times(500)(() => {
        text = text.replace(`r`, 'w');
        text = text.replace(`ll`, 'ww');
        text = text.replace(`ith`, 'id');
        text = text.replace(`st`, 'sht');
        text = text.replace(`that`, 'dat');
        text = text.replace(`ble`, 'bow');
        text = text.replace(`tion`, 'shun');
        text = text.replace(` of `, ' ub ');
        text = text.replace(`the`, 'da');
        text = text.replace(`ve`, 'b');
        text = text.replace(`pl`, 'pw');
        text = text.replace(`You`, 'woo');
        text = text.replace(`You`, 'woo');
        text = text.replace(`bla`, 'bwa');
        text = text.replace(`pr`, 'pw');
        text = text.replace(`lly`, 'wee');
        text = text.replace(`ath`, 'aff');
        text = text.replace(`brea`, 'bwea');
        text = text.replace(`line`, 'wine');
        text = text.replace(`thing`, 'ting');
        text = text.replace(`thin`, 'tink');
    });
    return text;
};

const times = (x) => (f) => {
    if (x > 0) {
        f();
        times(x - 1)(f);
    }
};
// use it

// or define intermediate functions for reuse
let twice = times(2);

// twice the power !

const advArr = [];
const adjectiveArr = [
    'eager',
    'speshow',
    'ambitious',
    // 'hungry',
    'impatient',
    // 'keen',
    // 'restless',
    // 'thirsty',
    'earnest',
    // 'hankering',
    // 'intent',
    // 'longing',
    // 'pining',
    // 'wild',
    'yearning',

    // 'antsy',
    'helpful',
    // 'ardent',
    // 'athirst',
    // 'avid',
    // 'breathless',
    // 'champing at the bit',
    // 'covetous',
    'distracted',
    // 'dying to',
    // 'fervent',
    // 'fervid',
    'gung ho',
    // 'hot to trot',
    'rarin to go',
    // 'ready and willing',
    // 'restive',
    'self-starting',
    // 'warmblooded',
    'zealous',
    'apathetic',
    // 'careless',
    // 'dull',
    'inattentive',
    'indifferent',
    'lackadaisical',
    'lethargic',
    'passive',
    'snoring',
    'snoozing',
    'sleepy',
    'tired',
    // 'weary',

    'drowsy',
    // 'idle',
    // 'inert',

    'loafing',
    // 'neglectful',
    'out of it',
    'procrastinating',

    'slothful',
    'slow',
    'slow-moving',
    'snoozy',

    // 'unconcerned',
    'unenergetic',
    'unindustrious',
    // 'unpersevering',
    // 'unready',
    'enthusiastic',
    'lively',
    'spirited',

    'dashing',
    'bright',
    // 'buoyant',
    'energetic',
    'frisky',

    'industrious',
    // 'peppy',
    'perky',
];
const nounArr = [
    'squishers',
    'smunchers',
    'Von Dinos',
    'Von Squishies',
    'smonchers',
    'Pepes',
    'Wokeez',
    'Whambos',
    'Bubzeez',
];
const verbArr = [
    'waking up',
    'bwinging coffee to',
    'bwinging shtwahbewwies to',
    // 'abetting',
    // 'boosting the',
    // 'buoying',
    'cheering',
    // 'emboldening the',
    'fortifying',
    // 'heartening',
    // 'infusing',
    'inspiring',
    // 'lifting',
    'rallying',
    // 'steeling',
    'strengthening',
    'enkindling',
    'exciting',
];
const emojiArr = [
    '😫',
    '😂',
    '😍',
    '🤣',
    '😯',
    '😘',
    '😭',
    '🤗',
    '😤',
    '🤔',
    '🤯',
    '🤩',
    '🧔🏿',
    '🍆',
    '😎',
    '🤨',
    '😏',
    '🙄',
    '😐',
    '😁',
    '😴',
    '😯',
    '😫',
];
const articleArr = ['a few', 'wots of'];
const appearanceArr = ['fuzzy', 'kewt', 'wittle', 'adowable'];
const randomFromArray = function(arr) {
    randomItem = arr[Math.floor(Math.random() * Math.floor(arr.length - 1))];
    // console.log(randomItem);
    return randomItem;
};
const sentenceGenerator = function() {
    let randomAdv = randomFromArray(advArr);
    let randomAdj = randomFromArray(adjectiveArr);
    let randomNoun = randomFromArray(nounArr);
    let randomVerb = randomFromArray(verbArr);
    let randomAppearance = randomFromArray(appearanceArr);
    let randomArticle = randomFromArray(articleArr);
    let randomEmoji = randomFromArray(emojiArr);
    return (sentence = `${randomVerb} ${randomArticle} ${randomAdj} ${randomAppearance} ${randomNoun} ${randomEmoji}...`);
    // console.log(`${randomVerb} ${randomAdj} ${randomNoun}...`);
    // console.log(`${randomAdv} ${randomVerb} ${randomAdj} ${randomNoun}...`);
};