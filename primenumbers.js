for (var counter = 4; counter <= 100; counter++) {

    var notPrime = false;  // if false, then the current counter number is prime
    
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}
