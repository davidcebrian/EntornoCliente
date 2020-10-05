let alarm = document.getElementById('alarm')


const alarma = () => {
    let flag = true;
    let fecha = new Date()
    alarm.innerHTML = ('Son las: '+fecha.getHours()+':'+fecha.getMinutes())
    
    if(fecha.getHours()==document.getElementById("hora").value && fecha.getMinutes()==document.getElementById("min").value && flag){
        flag = false;
        alert('¿DESEA DESCANSAR UN POCO MAS?')
        setTimeout(() => {
            alert('DESPIERTA!!')
        }, 2000)
        
    }
}
setInterval(alarma,1000)



