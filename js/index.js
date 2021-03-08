function menu() {
    let burguer = document.getElementById('lista-menu')

    if(burguer.classList.contains('revelMenu')){
        burguer.classList.remove('revelMenu')
    }else {
        burguer.classList.add('revelMenu')
    }
}