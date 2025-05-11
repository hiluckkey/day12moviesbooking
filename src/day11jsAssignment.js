//Assignment1
let posttitle = "My first post";
let likesCount = 0;
const POST_ID = "post123";
var isPublished = false;

console.log(posttitle);
posttitle = "my secondPost";
console.log(posttitle);

// POST_ID = "post124"
// console.log(POST_ID)  //this is getting error because const is block scope variable

//Assignment2 Instagram story variables

let storyViews = 0;
const storyTime = "30min";

function storycall() {
  let numberOfLikes = 0;
  const createdBy = "Rajesh";
  var location = "Mumbai";
  storyViews = 20;
  // storyTime="50min"

  console.log(storyViews);
  console.log(storyTime);
}
storycall();

console.log(storyTime);

// Assignment3 Reference vs Value

let username = "James";
let othername = username;

console.log(othername);
username = "Pandu";
console.log(othername); //both outputs are different because
console.log(username); //these are primitives to stored as a stack,
//that means second variable copy the first variable but stored in differenrt memory location

const user = { name: "Lakshmi" };
const consume = user;
console.log(user);
console.log(consume);
user.name = "Narayana";
console.log(user); //but here Both outputs are same
console.log(consume); //beacuse non-primitive. these data stored as a heap
consume.name = "vani"; //that means both variables show same reference that mean both variables access same data
console.log(user);
console.log(consume);

// Assignment4 Variable Hoisting

console.log(newsname); //get undefined
// console.log(newname)   //get ReferenceError (stop code here)
// console.log(name)     //as-usal get ReferenceError (stop code here ) these both cases we called as a TDZ (temporal dead zone)

let name = "Siva";
const newname = "Shambo";
var newsname = "Hara";

///Assignment-5  Primitive Data types

let titilename = "Annapurna-Theater";
let NumofSeats = 500;
let ACorNONAC = true;
let ticketprice;
let booking = null;

console.log(typeof titilename);
console.log(typeof NumofSeats);
console.log(typeof ACorNONAC);
console.log(typeof ticketprice);
console.log(typeof booking);

//Assignment-6  Object_properties

const instapost = {
  refercid: "Abc123",
  name: "Sameer",
  share: 0,
  likes: 0,
};

instapost.name = "Samantha"; //here we just modify object through objectname it allowed.
instapost.likes = 2;
console.log(instapost);
// instapost = { refercid: "Abc123", name: "Sameer", share: 0, likes: 0 };
// console.log(instapost); /// But here,we get TypeError because we re-assign the complete object.so, it is not acceptable.thats why we getting error.

//Practice QUestions

let x = 10;
let y = x;
x = 20;
console.log(y); // What prints? Why?
//we get y = 10 beacuse it is primitive data type so,it stored in stack type.in this
//stack type both variables stored in different memory locations but second variable copy the fist vairable value.

// 2. **Spot the Error:**
// const user = { name: "John" };
// user.name = "Jane";      // Works or error? Ans: this works and output will be name:"Jane"
// user = { name: "Bob" };  // Works or error? Ans:doesn't work because we re-assign the total object here so we get type error.

// 3. **Memory Challenge:**
let a = { value: 10 };
let b = a;
a.value = 20;
console.log(b.value); // What prints? Why?
// here output will be value:20 beacuse it is non-primitive stored as a heap

let names = 12;
console.log(names);

const ring = "const";

function ramp() {
  // var rajesh = "venkat";

  names = 15;
  console.log(names);
  // console.log(rajesh);
  console.log(ring);
}
ramp();
console.log(names);
// console.log(rajesh);

//spreadoperator

const profileid = {
  refe_id: "123jfj",
  name: "roja",
  age: 25,
  location: "hyderabad",
};

function callprofile(newprofileid){
  return{...profileid,...newprofileid}
}

let calling = callprofile(profileid.name="rajesh")
console.log(calling)