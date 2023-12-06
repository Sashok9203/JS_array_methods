//Task - 1
console.info("Task - 1");
let date = new Date();
let hours = date.getHours();
let dayPart = null;
if(hours >= 6 && hours < 12 ) dayPart= "morning";
else if(hours >= 12 && hours < 18) dayPart= "day";
else if(hours >= 18 && hours < 22) dayPart= "evening";
else dayPart= "night";
console.info(`Good ${dayPart} ! ! !`);
console.info("\n");

//Task - 2
console.info("Task - 2");
let array = [];
for (let index = 0; index < 20; index++) {
     array[index] = parseInt( Math.ceil(Math.random()*100));
}
console.info("Random array: " + array);
console.info("\n");

//Task - 3
console.info("Task - 3");
array.forEach((elem, ind) => {
       console.log(`[${ind}] - ${elem}`);
});
console.info("\n");

//Task - 4
console.info("Task - 4");
let res = array.some((n) => n % 7 === 0);
if(!res){console.info("There is no number in the array that is a multiple of 7");}
else{console.info("The array contains a number that is a multiple of 7")}
console.info("\n");

//Task - 5
console.info("Task - 5");
array.sort((a,b)=>b-a);
console.info("Sorted array: " + array);
console.info("\n");

//Task - 6
console.info("Task - 6");
let tempArray = array.slice(0, array.length);
tempArray.fill(0,tempArray.length/2,tempArray.length)
console.info("Filled array: " + tempArray);
console.info("\n");

//Task - 7
console.info("Task - 7");
tempArray.splice(0, 3);
console.info("After remove: " + tempArray);
console.info("\n");

//Task - 8
console.info("Task - 8");
result = array.some((item, index) => array.indexOf(item) !== index);
if(result){console.info("Array contains identical elements");}
else{console.info("Array not contains identical elements")}
console.info("\n");

//Task - 9
console.info("Task - 9");
let newArray =  array.slice(1, array.length - 1);
console.info("New array: " + newArray);
console.info("\n");

//Task - 10 
console.info("Task - 10 ");
let evensCount = array.reduce((res, item) => res + ( item % 2 === 0), 0);
console.info(`Тhe number of even elements: ${ evensCount}`);
console.info("\n");


//Task - 11
console.info("Task - 11 ");
function createArray(start, end){
    let arr = [];
    for (let index = start; index <= end; index++) {
       arr[index - start] = index;
    }
    return arr;
}
console.info("Created array: " + createArray(12,22));
console.info("\n");
