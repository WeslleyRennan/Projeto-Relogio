var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

var relogio = setInterval(function time() {
  let dateToday = new Date()
  let H = dateToday.getHours()
  let M = dateToday.getMinutes()
  let S = dateToday.getSeconds()

  if(H < 10){
    H = '0' + H
  }
  if(M < 10){
    M = '0' + M
  }
  if(S < 10){
    S = '0' + S
  }

  horas.textContent = H
  minutos.textContent = M
  segundos.textContent = S
  
}
)
