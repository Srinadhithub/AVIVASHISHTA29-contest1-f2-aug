let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  let arr2=arr.filter((x)=>{if(x.profession=='developer') return x});
  //for(let ele :arr2) 
  console.log(arr2);
}

function addData() {
  //Write your code here, just console.log
  if(arr.length!=4){
  let emp4={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(emp4);
  }console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
 //arr.forEach(myfun);
 arr=arr.filter((x)=>{if(x.profession!='admin') return x});
consoleArr();
  }

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  console.log(arr.concat(arr2));
  // consoleArr();
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
