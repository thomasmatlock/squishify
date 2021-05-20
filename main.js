const init = () => {
    console.log('hello');
    document.getElementById('userInputSubmit').addEventListener('click', (e) => {
        let userText = document.getElementById('userInput').value;
        // console.log(userText);
        document.getElementById('userInputConverted').innerHTML = userText;
    });
};
init();