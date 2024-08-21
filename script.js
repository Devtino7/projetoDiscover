function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {

        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Mayki Brito, sorrindo, usando oculos e fundo laranja')

    } else {

        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de Mayki Brito, de óculos escuros e fundo azul')
        
    }

  //  if(html.classList.contains('light')) {
       // html.classList.remove('light')
   // }
   // else {
   //     html.classList.add('light')
 //    }
 //ou somente faça:


}