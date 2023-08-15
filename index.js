

const getCurrentYear = () => {
    console.log('starting my function')
    let year = 2023;
    return year
    console.log('ending my function')
}

const getDynamicCurrentYear = () => {
    const dynamicYear = new Date().getFullYear()
    return dynamicYear
}

let currentYear = getDynamicCurrentYear();

const myCar = 'hyundai';
console.log (currentYear);


 getMonth = () => {
    let currentMonth = new Date().getMonth()
    return currentMonth+1
}



 getRandomNumber = () => {

    let radomNum = Math.floor(Math.random()*100);
    return radomNum;

}

let randomOne = getRandomNumber()
let randomTwo = getRandomNumber()
let randomThree = getRandomNumber()
let randomFour= getRandomNumber()
let randomFive = getRandomNumber()

console.log(randomOne)
console.log(randomTwo)
console.log(randomThree)
console.log(randomFour)
console.log(randomFive)
*/

let person = 'Svitlana';

const returnFavoriteFood = (personFromCall) => {
if (personFromCall === 'Svitlana') {
    return'Meat'} else if (personFromCall === 'Marco') {
        return 'Steak'
    } else if (personFromCall === 'Kelly') {
        return 'Dim sum'
    }
} 
const personFromCall = (name) => {
    person = name;
};

personFromCall('Kelly');
console.log("the favorite food of ", person, " is ", returnFavoriteFood(person))

    let emailLength = email.length;
    console.log(emailLength)
     if (emailLength > 50) {
        return 'Your email is too long!';
    } else if (emailLength < 15) {
        return 'Your email is too short!';
    } else {
        return 'Your email is of acceptable Length.';    
    }
}


let error = checkEmail('xmalone0920@gmail.com');
if (error) {
console.log(error);
}

console.log(checkEmail('@gmail.com'));





let returnEmailIsValid = (email) => {
    if (email.length < 10 || email.length > 50 || !email.includes('@')){
        return false;
    } else {
        return true;
    }
}

 returnEmailIsValid = returnEmailIsValid('hello@mysite.com')

if (returnEmailIsValid) {
    console.log('Welcome to the site!');
} else {
    console.log('Please use a good email');
}

let peopleInRestaurant = 0;
const maxPeople = 50;

const addPeopleToRestaurant = (numberOfPeople) => {
    if (peopleInRestaurant+numberOfPeople > maxPeople) {
        console.log('cannot add more people no space')
    } else {
        peopleInRestaurant += numberOfPeople;
   console.log('the number of people inside is now ', numberOfPeople) 
    }
}

addPeopleToRestaurant(5);


const makeNameCapitalNoSpaces = (name) => {
    let lowerCaseName = name.toLowerCase()
    let noSpacesString = lowerCaseName.replace(/\s/g, '')
    return noSpacesString
}

const finalName

const findLongestWord = (sentence) => {
    if (!sentence || sentence === '' || typeof sentence !== 'string') {
        return; 
    }

    let arrayOfWords = sentence.split(' ');
    console.log(arrayOfWords);

    let currentLongest = '';
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > currentLongest.length) {
            currentLongest = arrayOfWords[i];
        }
    }

    return currentLongest;
};

let myWords = 'What is the longest word in this string?';
let longestWord = findLongestWord(myWords);
console.log('Longest word:', longestWord);