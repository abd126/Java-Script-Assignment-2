var date = new Date();



// var monthNames = ["Jaunary" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
// var month = date.getMonth();
// var nowMonth = monthNames[month];

// var dayNames = ['Sun' , 'Mon' , 'Tue' , 'Wed' , 'Thus' , 'Fri' , 'Sat'];
// var day = date.getDay();
// var nowDay = dayNames[day];

// if (nowDay === dayNames[6]){
//     alert("It's Funday");
// }

// if (nowDay === dayNames[0]){
//     alert("It's Funday");
// }

// else{
//     alert("It's Working Day")
// } 


// document.write(date + "<br>" + "Current Month :" + nowMonth + "<br>" + "Today is" + " " + nowDay);

// var dat = date.getDate();
// if (dat <= 15){
//     alert("First Fifteen Day Of Month")
// }

// else {
//     alert("Last Days Of Month")
// }

// var currentDate = new Date() ;
// var oldDate = new Date("jun 21,1998")
// var oldDateMs = oldDate.getTime()
// alert(oldDateMs)
// alert(oldDateMs/60)



// document.write("Current Date :" + currentDate)

// var lastMonth = new Date("Dec 31,2020");
// alert(lastMonth);

// var currentDate = new Date();
// var startTime = new Date("Jan 01,2020");
// var oldSecond = startTime.getTime();
// var currentSecond = currentDate.getTime()
// var passedSecond =  oldSecond - currentSecond;

// document.write("Current Date & Time :" + currentDate + "<br>" + "Time On Year 2020 Start" + startTime + "<br>" + "Second We Have Passed" + " " + passedSecond)


var userDob = new Date(prompt("Enter our Date Of Birth" , "Like Jun 21 1998"));
var userDobMili = userDob.getTime();
var toDay = new Date();
var toDayMili = toDay.getTime();
var diff = toDayMili - userDobMili ;
var accuage = Math.floor(diff/(1000*60*60*24*30*12))
document.write("Your age is"+ " " + accuage);