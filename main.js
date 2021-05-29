let userInputSubmit = document.getElementById('userInputSubmit');
let userInputReset = document.getElementById('userInputReset');
let userTextContainer_input = document.getElementById('userTextContainer_input');
let userTextContainer_converted = document.getElementById('userTextContainer_converted');

const init = () => {
    // console.log('hello');
    userInputSubmit.addEventListener('click', (e) => {
        let userText = document.getElementById('userInput').value;
        // console.log(userText);
        let userTextSquished = squishify(userText);
        document.getElementById('userInputConverted').innerHTML = userTextSquished;
        userInputSubmit.style.display = 'none';
        userTextContainer_input.style.display = 'none';
        userInputReset.style.display = 'flex';
        userTextContainer_converted.style.display = 'flex';

        reset();
    });
};
window.addEventListener('load', function() {}, false);
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
const sentenceGenerator = () => {};

// or define intermediate functions for reuse
let twice = times(2);

// twice the power !