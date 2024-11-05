setInterval(()=>{
    let date= new Date()
    let mydate= date.toLocaleTimeString()
    document.querySelector('.clock').innerHTML=mydate
},1000)