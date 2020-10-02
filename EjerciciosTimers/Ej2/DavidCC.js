let alarm = document.getElementById('alarm')
    let fecha = new Date()
const mostrarhora = () => {
    alarm.textContent = ('Son las: '+fecha.getHours()+':'+fecha.getMinutes())
    console.log('Son las: '+fecha.getHours()+':'+fecha.getMinutes())
}


const alarma = () => {
    let hora = parseInt(prompt('A que hora desea que suene la alarma.'))
        let minuto = parseInt(prompt('A que minuto:'))
    
        if(hora == parseInt(fecha.getHours()) && minuto == parseInt(fecha.getMinutes())){
        alert('¿DESEA DESCANSAR UN POCO MAS?')
        setTimeout(() => {
            alert('DESPIERTA!!')
        }, 120000)
    }
    
}
setInterval(alarma,1000)
setInterval(mostrarhora, 1000)


