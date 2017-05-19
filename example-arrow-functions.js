var names = ['Jimmy', 'Mark', 'Jen'];

names.forEach(function(name){
    console.log('foreach', name);
});

names.forEach((name) => {
    console.log('arrow func', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Jimmy'));

var person = {
    name: 'Jimmy',
    greet: function(){
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name);
        });
    }
}

person.greet();

function add(a, b){
    return a + b;
}

console.log(add(1,3));
console.log(add(9,0));

// add statement
var addStatement = (a,b) => {
    return a + b;
}
console.log(addStatement(4,7));

var addExpression = (a,b) => a+b;

console.log(addExpression(3, -2));