let showDate = document.getElementById("showDate");
let m_names = ["January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December"];

let d_names = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];

let myDate = new Date();
myDate.setDate(myDate.getDate()+7);
let curr_date = myDate.getDate();
let curr_month = myDate.getMonth();
let curr_day  = myDate.getDay();

showDate.innerHTML = d_names[curr_day] + "," + m_names[curr_month] + " " +curr_date;