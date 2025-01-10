function carregar(){
   var msg = document.getElementById('msg')
   var img = document.getElementById('imagem')
   var data = new Date()
   var hora = data.getHours()
   var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}!`

    if (hora >= 0 && hora < 12) {
        // good morning
        img.src = 'imgs/goodmorning.gif'
        document.body.style.background = '#FFF9C4'
    } else if (hora >= 12 && hora <= 18) {
        // good afternoon
        img.src = 'imgs/goodafternoon.jpeg'
        document.body.style.background = '#B3E5FC'
    } else {
        // good night
        img.src = 'imgs/goodnight.gif'
        document.body.style.background = '#D1C4E9'
    }

}