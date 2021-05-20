const init = () => {
    console.log('hello');
    document.getElementById('userInputSubmit').addEventListener('click', (e) => {
        let userText = document.getElementById('userInput').value;
        // console.log(userText);
        let userTextSquished = squishify(userText);
        document.getElementById('userInputConverted').innerHTML = userTextSquished;
    });
};
init();

const squishify = (text) => {
    return text;
};