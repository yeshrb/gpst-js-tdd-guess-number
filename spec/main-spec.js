const main = require('../main/main').main;

describe('main()', () => {

    it('should return 4A0B given the number is 1234 when you guess 1234',()=>{
        let guessed = '1234';
        let guess = '1234';
        expect(main().guess(guessed,guess)).toBe('4A0B');
    })
    it('should return 0A4B given number is 1234 when you guess 4321',()=> {
        let guessed = '1234';
        let guess = '4321';
        expect(main().guess(guessed,guess)).toBe('0A4B');
    })
    it('should return 1A3B given number is 1234 when you guess 4321',()=> {
        let guessed = '1234';
        let guess = '1567';
        expect(main().guess(guessed,guess)).toBe('1A0B');
    })
    it('should return 2A2B given number is 1234 when you guess 1324',()=> {
        let guessed = '1234';
        let guess = '1324';
        expect(main().guess(guessed,guess)).toBe('2A2B');
    })
    it('should return 0A0B given number is 1234 when you guess 5678',()=> {
        let guessed = '1234';
        let guess = '5678';
        expect(main().guess(guessed,guess)).toBe('0A0B');
    })


    it('should return 4A0B given a random number when you guess the same number',()=> {
        let guessed = main().guessed;
        let guess = guessed;
        expect(main().guess(guessed,guess)).toBe('4A0B');
    })
    it('should return 0A4B given a random number when you guess the reverse number',()=> {
        let guessed = main().guessed;
        let guess = guessed.split('').reverse().join('');

        expect(main().guess(guessed,parseInt(guess))).toBe('0A4B');
    })
    it('should return 2A2B given a random number when you guess the the number that first and last same and  swap 2nd and 3rd ',()=> {
        let guessed = main().guessed;
        let arr = guessed.split('');
        let temp = arr[1];
        arr[1] = arr[2];
        arr[2] = temp;
        let guess = arr.join('');
        expect(main().guess(guessed,parseInt(guess))).toBe('2A2B');
    })
    it('should return a random 4-digits number not contains duplicated number',()=> {
        let guessed = main().guessed;
        let guessedArr = guessed.split('');
        let reduceArr = guessedArr.reduce((accu,curr) => {
            (accu.indexOf(curr) > -1)? accu:accu.push(curr);
            return accu;
        },[]);
        expect(reduceArr.length).toBe(4);

    })

});