const date = new Date();

function reveal(id) {
  var container_2 = document.querySelector(".container_2")
  var events = document.querySelector(".events")
  var cur_date = document.querySelector(".event p")

  //add dummy data to be displayed (for now)
  let events_list = "";
  for (let item=1; item<=3; item++){
    events_list += `<div class="ind-event">Event ${item} for Day ${id}</div>`;
  }

  //reveal container_2
  container_2.style.display = 'block';

  //show chosen date on Event
  cur_date.innerHTML = document.querySelector(".date h1").innerHTML + ` ` + id;

  //display event for that day on container_2
  events.innerHTML = events_list;
}

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = `Today: ` + new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  //auto add days
  for (let i = 1; i <= lastDay; i++) {
    days += `<div tabindex=${i} onclick="reveal(id)" id="${i}">${i}</div>`;
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();