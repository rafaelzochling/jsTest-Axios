function checkAge(age){
    return new Promise(function(resolve, reject){
        if (age >= 18){
            setInterval(resolve(age), 2000);
        } else {
            setInterval(reject('Error'), 2000);
        }
    }
    )}

checkAge(15)
    .then(function(){
        console.log('More than 18!');
    })
    .catch(function(){
        console.log('Less than 18!');
    });

