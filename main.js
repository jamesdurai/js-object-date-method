var currentTime = new Date();
var currentHour = currentTime.getHours();

if (currentHour >= 5 && currentHour < 12) {
    document.write("Good morning!");
} else if (currentHour >= 12 && currentHour < 18) {
    document.write("Good afternoon!");
} else {
    document.write("Good evening!");
}
