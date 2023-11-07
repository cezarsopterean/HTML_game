const scoreboard_div = document.querySelector(".scoreboard")
const userScore_span = document.getElementById("userScore")
const pcScore_span = document.getElementById("pcScore")
var userScore = 0
var pcScore = 0
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")
const result_p = document.querySelector(".result > p")

function win(UserChoice,PcChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = UserChoice + " beats " + PcChoice + "!";
    document.getElementById(UserChoice.toLowerCase()).classList.add('win-glow');
    setTimeout(function() { document.getElementById(UserChoice.toLowerCase()).classList.remove('win-glow') }, 300);
    document.getElementById('userBadge').classList.add('badge-color-w');
    setTimeout(function() { document.getElementById('userBadge').classList.remove('badge-color-w') }, 300);
    document.getElementById('pcBadge').classList.add('badge-color-l');
    setTimeout(function() { document.getElementById('pcBadge').classList.remove('badge-color-l') }, 300);
}

function lose(UserChoice,PcChoice) {
    pcScore++;
    pcScore_span.innerHTML = pcScore;
    result_p.innerHTML = PcChoice + " beats " + UserChoice + "...";
    document.getElementById(UserChoice.toLowerCase()).classList.add('loss-glow');
    setTimeout(function() { document.getElementById(UserChoice.toLowerCase()).classList.remove('loss-glow') }, 300);
    document.getElementById('userBadge').classList.add('badge-color-l');
    setTimeout(function() { document.getElementById('userBadge').classList.remove('badge-color-l') }, 300);
    document.getElementById('pcBadge').classList.add('badge-color-w');
    setTimeout(function() { document.getElementById('pcBadge').classList.remove('badge-color-w') }, 300);
}

function draw(UserChoice,PcChoice) {
    result_p.innerHTML = UserChoice + " on " + PcChoice + ". It's a draw.";
    document.getElementById(UserChoice.toLowerCase()).classList.add('draw-glow');
    setTimeout(function() { document.getElementById(UserChoice.toLowerCase()).classList.remove('draw-glow') }, 300);
    document.getElementById('userBadge').classList.add('badge-color-d');
    setTimeout(function() { document.getElementById('userBadge').classList.remove('badge-color-d') }, 300);
    document.getElementById('pcBadge').classList.add('badge-color-d');
    setTimeout(function() { document.getElementById('pcBadge').classList.remove('badge-color-d') }, 300);
}

function RandomPcChoice() {
    const PcChoices = ['Rock', 'Paper', 'Scissors'];
    const RandomNr = Math.floor(Math.random() * 3);
    return PcChoices[RandomNr];
}

function compare(userChoice) {
    const pcChoice = RandomPcChoice();
    if (userChoice + pcChoice === "RockScissors") {
        win(userChoice,pcChoice)}
    else if (userChoice + pcChoice === "PaperRock") {
        win(userChoice,pcChoice)}
    else if (userChoice + pcChoice === "ScissorsPaper") {
        win(userChoice,pcChoice)}
    else if (userChoice + pcChoice === "RockPaper") {
        lose(userChoice,pcChoice)}
    else if (userChoice + pcChoice === "PaperScissors") {
        lose(userChoice,pcChoice)}
    else if (userChoice + pcChoice === "ScissorsRock") {
        lose(userChoice,pcChoice)}
    else if (userChoice + pcChoice === "RockRock") {
        draw(userChoice,pcChoice)}
    else if (userChoice + pcChoice === "PaperPaper") {
        draw(userChoice,pcChoice)}
    else if (userChoice + pcChoice === "ScissorsScissors") {
        draw(userChoice,pcChoice)}
    else {console.log('error')}
}

function main () {
    rock_div.addEventListener('click', function() {
        compare("Rock");
    })

    paper_div.addEventListener('click', function() {
        compare("Paper");
    })

    scissors_div.addEventListener('click', function() {
        compare("Scissors");
    })
}
main();