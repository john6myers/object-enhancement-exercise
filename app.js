// question 1
function createInstructor(firstName,lastName){
    return{
        firstName,
        lastName
    };
}

// question 2
let favoriteNumber = 42;
const instructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'This is my favorite number'
}

// question 3
const instructor2 = {
    firstName: 'Colt',
    sayHi(){
        return 'Hi';
    },
    sayBye() {
        return this.firstName + ' says bye';
    }
}

// question 4
const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal (species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}