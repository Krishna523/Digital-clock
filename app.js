setInterval(displaytime,500)
function displaytime(){
    let date=new Date()
    let hr=date.getHours()
    let min=padzero(date.getMinutes())
    let sec=padzero(date.getSeconds())
    if(hr>12){
        hr=hr-12
        document.getElementById("ampm").innerHTML="PM"
    }
    document.getElementById("hours").innerHTML=padzero(hr)
    document.getElementById("min").innerHTML=min
    document.getElementById("sec").innerHTML=sec
}
function padzero(num){
    return num<10?"0"+num:num
}