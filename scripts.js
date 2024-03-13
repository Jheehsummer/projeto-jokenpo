const result = document.querySelector(".result")
const humanScore = document.querySelector(".score")
const machineScore = document.querySelector(".score2")


let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['pedra', 'papel', 'teroura']
    const randonNumber = Math.floor(Math.random() * 3)

    return choices[randonNumber]
}

const playTheGame = (human, machine) => {
    console.log(`Você escolheu: ${human}, e a maquina: ${machine}`)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if (
        (human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu pra Alexa!"
    }
}

const zerarGame = () => {
    humanScoreNumber = 0
    humanScore.innerHTML = humanScoreNumber
    machineScoreNumber = 0
    machineScore.innerHTML = machineScoreNumber

}