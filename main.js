let userInputSubmit = document.getElementById('userInputSubmit');
let userInputReset = document.getElementById('userInputReset');
let userTextContainer_input = document.getElementById('userTextContainer_input');
let userTextContainer_converted = document.getElementById('userTextContainer_converted');

const init = () => {
    userInputSubmit.addEventListener('click', (e) => {
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
                    // DISPLAY FLEX OR NONE
                    // userInputSubmit.style.display = 'none';
                    // userTextContainer_input.style.display = 'none';
                    // userInputReset.style.display = 'flex';
                    // userTextContainer_converted.style.display = 'flex';
                    // OPACITY/ZINDEX
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

let twice = times(2);

const advArr = [];
const adjectiveArr = [
    'eager',
    'speshow',
    'ambitious',
    'impatient',
    'earnest',
    'yearning',
    'helpful',
    'distracted',
    'gung ho',
    'rarin to go',
    'self-starting',
    'zealous',
    'lackadaisical',
    'snoring',
    'snoozing',
    'sleepy',
    'tired',
    'drowsy',
    'procrastinating',
    'slow-moving',
    'unenergetic',
    'unindustrious',
    'enthusiastic',
    'lively',
    'bright',
    'energetic',
    'frisky',
    'industrious',
    'perky',
];
const nounArr = [
    'squishers',
    'smunchers',
    'Von Dinos',
    'Von Squishies',
    'smonchers',
    'smonchos',
    'Pepes',
    'Wokeez',
    'Whambos',
    'Bubzeez',
];
const verbArr = [
    'waking up',
    'bwinging coffee to',
    'gibbing bewwy wubs to',
    'bwinging shtwahbewwies to',
    // 'cheering',
    // 'fortifying',
    // 'inspiring',
    // 'rallying',
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
    '😎',
    '🤨',
    '😏',
    '🙄',
    '😁',
    '😴',
    '😯',
    '😫',
];
const articleArr = ['a few', 'wots of', 'some'];
const appearanceArr = ['fuzzy', 'kewt', 'wittle', 'adowable'];
const randomFromArray = function(arr) {
    randomItem = arr[Math.floor(Math.random() * Math.floor(arr.length - 1))];
    // console.log(randomItem);
    return randomItem;
};
const sentenceGenerator = function() {
    // let randomAdv = randomFromArray(advArr);
    let randomAdj = randomFromArray(adjectiveArr);
    let randomNoun = randomFromArray(nounArr);
    let randomVerb = randomFromArray(verbArr);
    let randomAppearance = randomFromArray(appearanceArr);
    let randomArticle = randomFromArray(articleArr);
    let randomEmoji = randomFromArray(emojiArr);
    return (sentence = `${randomVerb} ${randomArticle} ${randomAdj} ${randomAppearance} ${randomNoun} ${randomEmoji}...`);
};