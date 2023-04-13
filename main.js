let week = document.querySelector(".the-week");
let totalAmount = document.querySelector(".tot-amount");
fetch("https://api.jsonbin.io/v3/b/6438754debd26539d0aa8ccc")
  .then((data) => {
    return data.json();
  })
  .then((expenses) => {
    let result = expenses.record;
    console.log(result);

    result.forEach((element) => {
      elementToDom(element);
    });
    let chartDays = document.querySelectorAll(".day");
    colorHighest(chartDays);
  });
//1
function elementToDom(ele) {
  let day = document.createElement("div");
  day.className = "day";
  day.dataset.amount = ele.amount;
  let dayAmount = document.createElement("div");
  dayAmount.className = "day-Amount";
  dayAmount.innerHTML = ele.amount;

  let dayChart = document.createElement("div");
  dayChart.className = "day-chart";
  dayChart.style.height = ele.amount * 2 + "px";
  let dayName = document.createElement("span");
  dayName.className = "day-name";
  dayName.innerHTML = ele.day;
  day.appendChild(dayAmount);

  day.appendChild(dayChart);
  day.appendChild(dayName);
  week.appendChild(day);
}

//2
let amounts = [];
let totAmount = 0;
function colorHighest(arr) {
  arr.forEach((elem) => {
    amounts.push(elem.dataset.amount);
  });
  let maxAmount = Math.max(...amounts);
  let neededIndex = amounts.indexOf(maxAmount.toString());
  let neededColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--Cyan"
  );
  arr[neededIndex].children[1].style.setProperty(
    "background-color",
    neededColor,
    "important"
  );
  //3 totamountfun
  amounts.forEach((am) => {
    totAmount += +am;
  });
  console.log(totAmount);
  totalAmount.innerHTML = "$" + totAmount;
}
