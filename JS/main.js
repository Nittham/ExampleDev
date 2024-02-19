//arrays
const arr = ['deer', 'lion', 10, null, true];
console.log(arr);
console.log(arr.length);
console.log(arr.indexOf('lion'));
arr.push('tiger');
console.log(arr);
arr.unshift('mole');
console.log(arr);
arr.pop();
console.log(arr);

//objects

const person={
    fname: 'Deerendra',
    lname: 'Vasanthi',
    age: 19,
    hobbies: ['music', 'movies', 'sleeping'],
    address: {
        street: 'Mugil nagar',
        city: 'Salem',
        country: 'India'
    }
}
console.log(person);
const {fname, lname} = person;
console.log(fname);
const personJSON=JSON.stringify(person);
console.log(personJSON);

const todo=[
    {
        id: 1,
        text: 'Get Laundry',
        isCompleted: false,
    },
    {
        id: 2,
        text: 'Eat snacks',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Go for a walk',
        isCompleted: true,
    }
];

//for loop

for(let i=0; i< todo.length; i++){
    console.log(todo[i].text);
}

for(let task of todo){
    console.log(task.text);
}

//forEach, map, filter

todo.forEach(function(task) {
    console.log(task.text);
});

const todoText = todo.map(function(task){
    return task.text;
});
console.log(todoText);

const todoCompleted=todo.filter(function(task){
    return task.isCompleted===true;
});
console.log(todoCompleted);