const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 15 === 0) {
        return 'fizzbuzz';
    }
    else if(number % 3 === 0) {
        return 'fizz';
    }
    else if(number % 5 === 0) {
        return 'buzz';
    }
    else {
        return number;
    }
    

}

test('if number is divisible by both 3 and 5, return fizzbuzz', function(assert) {
    let result = fizzBuzz(15);
    assert.equal(result, 'fizzbuzz');
});


test('if number is divisible by 3, return fizz', function(assert) {
    let result = fizzBuzz(3);
    assert.equal(result, 'fizz');

});

test('if number is divisible by 5, return buzz', function(assert) {
    let result = fizzBuzz(5);
    assert.equal(result, 'buzz');
});

test('if number is not divisible by either 3 or 5, return just the number', function(assert) {
    let number = 7;
    let result = fizzBuzz(number);
    assert.equal(result, number);
});


