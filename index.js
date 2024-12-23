const containerEl = document.querySelector(".container");

/* This line of code is declaring a constant variable `careers` and assigning it an array of strings.
The array contains different career options such as "Programmer", "Hacker", "Full stack Developer",
"Data Analyst", "Game Developer", "Researcher", and "Streamer". */
const careers = ["Programmer","Hacker","Full stack Developer","Data Analyst","Game Developer","Researcher","Streamer"];
let careerIndex = 0;
let CharacterIndex = 0;

updateText();
function updateText() {
    CharacterIndex++;
    containerEl.innerHTML = 
    `<h1> I am a ${careers[careerIndex].slice(0,CharacterIndex)}</h1>`
    ;

    if (CharacterIndex === careers[careerIndex].length) {
        careerIndex++;
        CharacterIndex = 0;
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 330);
};