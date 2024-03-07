function fizzBuzz(input){
    if (input === String(input))
        return 'not a Number'


    if (input % 3 === 0 && input % 5 === 0)
        return 'FizzBuzz'

    if (input % 3 === 0)
        return 'Fizz'

    if (input % 5 === 0)
        return 'Buzz'

    else return input
}

let output = 'Gopal';

let result = fizzBuzz(output);

console.log(result)

