function christmasDays() {
  currentDate = new Date();

  const days = new Date(currentDate.getFullYear(), 11, 25);

  if (currentDate.getMonth() === 11 && currentDate.getDate() > 25) {
    days.setFullYear(days.getFullYear() + 1);
  }

  const daysLeft = days.getTime() - currentDate.getTime();

  const dayLeft = Math.ceil(daysLeft / (1000 * 60 * 60 * 24));

  return "There are " + dayLeft + " days left until Christmas!";
}
console.log(christmasDays());
