let nome = 'Augusto'
let xp = 1000
let nivel = ''

if (xp <= 1000) {
    nivel = 'Ferro'
}else if(xp <= 2000){
    nivel = 'Bronze'
}else if(xp <= 5000){
    nivel = 'Prata'
}else if(xp <= 7000){
    nivel = 'Ouro'
}else if (xp <= 8000){
    nivel = 'Platina'
}else if(xp <= 9000){
    nivel = 'Ascendente'
}else if(xp <= 10001){
    nivel = 'Imortal'
}else{
    nivel = 'Radiante'
}

    console.log(`O Herói de nome ${nome} está no nível ${nivel}`)
   