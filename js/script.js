var hora = 0 
var minuto = 0
var segundo = 0
var tempo = 0
var parar = false
var zerar = false
var iniciar = true
document.getElementById('parar-zerar').addEventListener('click', () => {
    if (document.getElementById('parar-zerar').innerHTML === 'Parar' && parar) {
        document.getElementById('parar-zerar').classList.remove('btn-parar')
        document.getElementById('parar-zerar').classList.add('btn-zerar')
        document.getElementById('parar-zerar').innerHTML = 'Zerar'
        clearInterval( timer )
        parar = false
        zerar = false
        iniciar = true
    } else if (document.getElementById('parar-zerar').innerHTML === 'Zerar') {
        document.getElementById('parar-zerar').classList.remove('btn-zerar')
        document.getElementById('parar-zerar').classList.add('btn-parar')
        document.getElementById('parar-zerar').innerHTML = 'Parar'
        hora = "00"
        minuto = "00"
        segundo = "00"
        document.querySelector('h1').innerHTML = `${hora}:${minuto}:${segundo}`
        parar = false
        zerar = false
        iniciar = true
    }
})
document.getElementById('iniciar').addEventListener('click', () => {
    if (iniciar) {
        document.getElementById('parar-zerar').classList.remove('btn-zerar')
        document.getElementById('parar-zerar').classList.add('btn-parar')
        document.getElementById('parar-zerar').innerHTML = 'Parar'
        timer = setInterval(() => {
            segundo++ 
            if( segundo == 60 ) {
                minuto++
                segundo = 0
                if (minuto == 60) {
                    hora++
                    minuto = 0
                    if(hora == 99) {
                        clearInterval( timer );
                    }
                }
            }
            segundo = ((`0${segundo}`.split('').reverse().join('')).substr(0,2)).split('').reverse().join('')
            minuto = ((`0${minuto}`.split('').reverse().join('')).substr(0,2)).split('').reverse().join('')
            hora = ((`0${hora}`.split('').reverse().join('')).substr(0,2)).split('').reverse().join('')
            document.querySelector('h1').innerHTML = `${hora}:${minuto}:${segundo}`
        }, 1000)
    }
    parar = true
    zerar = false
    iniciar = false
})









