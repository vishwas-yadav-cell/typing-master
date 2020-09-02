window.addEventListener('load', init);

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

const easybtn = document.querySelector('#easy');
const mediumbtn = document.querySelector('#medium');
const hardbtn = document.querySelector('#hard');

let currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;


const seconds = document.querySelector('#seconds');
const currentWord = document.querySelector('#current-word');
const wordInput = document.querySelector('#word-input');
const message = document.querySelector('#message');
const timeDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

function init() {

    showWord(words);

    easybtn.addEventListener('click', () => {
        currentLevel = levels.easy;
        seconds.innerHTML = currentLevel;
    })

    mediumbtn.addEventListener('click', () => {
        currentLevel = levels.medium;
        seconds.innerHTML = currentLevel;
    })

    hardbtn.addEventListener('click', () => {
        currentLevel = levels.hard;
        seconds.innerHTML = currentLevel;
    })

    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}

showWord = (words) => {
    const random = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[random];
}

startMatch = () => {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    scoreDisplay.innerHTML = score;

    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

matchWords = () => {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    }
    else {
        message.innerHTML = 'Loading...';
        return false;
    }
}

countdown = () => {
    if (time > 0) {
        time--;
    } else if (time == 0)
        isPlaying = false;

    timeDisplay.innerHTML = time;
}

checkStatus = () => {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'GameOver!!!';
        score = -1;
    }
}