function getTempCallback(location, callback){
    callback(undefined, 78);
    callback('City not found');
}

getTempCallback('New York', function (err, temp){
    if(err){
        console.log('error', err);
    } 
    else {
        console.log('success', temp);
    }
});

function getTempPromise(location){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            // This returns as soon as one is called, as opposed to above where both is called
            resolve(79); // Call if things go well
            reject('City not found'); //Call if things dont go well
        }, 1000);
    });
}

getTempPromise('New York').then(function(temp){
    console.log('promise success', temp);
}, function(err){
    console.log('promise error', err);
});

//Challenge area

function addPromise(a, b){
    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        }
        else {
            reject('A & B need to be numbers');
        }
    });
}

addPromise(1, 2).then(function(sum){
    console.log('success', sum);
}, function(err){
    console.log('Error', err);
});

addPromise('Jimmy', 2).then(function(sum){
    console.log('this should not show up');
}, function(err){
    console.log('Error', err);
});