function opElo (win, lose) {
    return win - lose
  }
  
  function getElo () {
    let win = Math.floor(Math.random()*101)
    let lose = Math.floor(Math.random()*101)
    let resultado = opElo(win, lose)
  
    if (resultado <= 10) {
      console.log("O Herói tem de saldo de " + resultado + " está no nível de Ferro" )
    }
    
    else if (resultado >= 11 && resultado <= 20) {
      console.log("O Herói tem de saldo de " + resultado + " está no nível de Bronze" )
    }
    
    else if (resultado >= 21 && resultado <= 50) {
      console.log("O Herói tem de saldo de " + resultado + " está no nível de Prata" )
    }
    
    else if (resultado >= 51 && resultado <= 80){
      console.log("O Herói tem de saldo de " + resultado + " está no nível de Ouro" )
    }
    
    else if (resultado >= 81 && resultado <= 90){
      console.log("O Herói tem de saldo de " + resultado + " está no nível de Diamante" )
    }
    
    else if (resultado >= 91 && resultado <= 100){
      console.log("O Herói tem de saldo de " + resultado + " está no nível de Lendário" )
    }
    
    else if (resultado >= 101){
      console.log("O Herói tem de saldo de " + resultado + " está no nível de Imortal" )
    }
    
    while (resultado === undefined) {
      console.log("Insira um valor válido")
      return resultado = 0
    }
  }
  getElo()