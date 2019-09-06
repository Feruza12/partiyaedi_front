$(document).ready(function () {
    var endDate = new Date("Sep 14, 2019 12:00:00").getTime();
    var timer = setInterval(function () {

        let now = new Date().getTime();
        let t = endDate - now;

        if (t >= 0) {

            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((t % (1000 * 60)) / 1000);

            if(days >= 5){
                document.getElementById("timer-days").innerHTML = days +
                "<span class='label'> Дней</span>";
            }
            else if(days <= 4 && days >= 2 ){
                document.getElementById("timer-days").innerHTML = days +
                "<span class='label'> Дня</span>";
            }
            else if( days === 1){
                document.getElementById("timer-days").innerHTML = days +
                "<span class='label'> День</span>";
            }

            document.getElementById("timer-hours").innerHTML = ("0" + hours).slice(-2) +
                "<span class='label'> Часов</span>";

            document.getElementById("timer-mins").innerHTML = ("0" + mins).slice(-2) +
                "<span class='label'> Мин</span>";

            document.getElementById("timer-secs").innerHTML = ("0" + secs).slice(-2) +
                "<span class='label'> Сек</span>";            
           
        } 
        else {

            document.getElementById("timer").innerHTML = "The countdown is over!";
        }
        

    });
});
