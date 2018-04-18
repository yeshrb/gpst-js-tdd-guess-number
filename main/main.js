// Write your cade below:
function main() {
    return {
        guessed:createGuessedNumber(),
        guess(guessed = this.guessed,guess) {
            guess += '';
            if(guessed.length !== guess.length) {
                throw new Error("parameters must have the same length");
            }
            let hitsA = 0;
            let hitsB = 0;
            for(let i=0; i< guess.length;i++){
                if(guessed.indexOf(guess.charAt(i)) === i){
                    hitsA ++;
                }
                else if (guessed.indexOf(guess.charAt(i)) > -1) {
                    hitsB ++;
                }
            }
            return `${hitsA}A${hitsB}B`;
        }
    }
};
function createGuessedNumber(){
    let guessed = '';
    for(let i =0 ; i< 4;i++){
        let num = getRandomIntInclusive(1,9);
        while(guessed.indexOf(num) > -1) {
            num = getRandomIntInclusive(1,9);
        }
        guessed += num;
    }
    return guessed.trim();
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

module.exports = {
    main
}