let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; //select current date and below not above
const button = document.querySelector("button");
let result = document.getElementById('result')







function calculateAge() {

  if(userInput.value==='' || userInput.value==="NaN"){
    alert("Please enter a date 😆")
  }

  else{

  
  let birthDate = new Date(userInput.value);
  let dayDate = birthDate.getDate();
  let monthDate = birthDate.getMonth() + 1;
  let yearDate = birthDate.getFullYear();

  let today = new Date();

  let dayDate2 = today.getDate();
  let monthDate2 = today.getMonth() + 1;
  let yearDate2 = today.getFullYear();

  let dayDate3, monthDate3, yearDate3;

  yearDate3 = yearDate2 - yearDate;
  if (monthDate2 >= monthDate) {
    monthDate3 = monthDate2 - monthDate;
  } else {
    yearDate3--;
    monthDate3 = 12 + monthDate2 - monthDate;
  }

  if (dayDate2 >= dayDate) {
    dayDate3 = dayDate2 - dayDate;
  } else {
    monthDate3--;
    dayDate3 = getDaysInMonth(yearDate, monthDate) + dayDate2 - dayDate;
  }

  if (monthDate3 < 0) {
    monthDate3 = 11;
    yearDate3--;
  }
  result.innerHTML = `You are <span>${yearDate3}</span> years <span>${monthDate3}</span> months and <span>${dayDate3}</span> days old`
}
}



function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

button.addEventListener('click',calculateAge);