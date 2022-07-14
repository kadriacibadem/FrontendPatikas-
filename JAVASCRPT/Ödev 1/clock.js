let name = prompt("Adınızı giriniz: ")

document.getElementById("myName").innerHTML = name;

function showTime(){
    const date = new Date();
    var hr = date.getHours();
    var mn = date.getMinutes();
    var sec = date.getSeconds();

    var days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    var dayName = days[new Date().getDay()-1];
    if(mn<10){
        mn = "0"+mn;
    }
    if(hr<10){
        hr = "0"+hr;
    }
    if(sec<10){
        sec = "0"+sec;
    }
    document.getElementById("myClock").innerHTML = hr + ":" + mn + ":" + sec+ " " + dayName;  
}

setInterval(showTime,1000);
showTime();