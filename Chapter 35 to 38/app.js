// function ageCalulator(){

// var userDob = new Date(prompt("Enter Your Date Of Birth" , "Like Jun 21 1998"));
// var userDobMili = userDob.getTime();
// var toDay = new Date();
// var toDayMili = toDay.getTime();
// var diff = toDayMili - userDobMili ;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write("Your age is"+ " " + accuage);}

// ageCalulator();

function fullName(){
    var firstName = prompt("Enter Your Name");
    var lastName = prompt("Enter Your Last Name");
    var completeName = firstName + " " + lastName;
    alert(completeName);
}

fullName();