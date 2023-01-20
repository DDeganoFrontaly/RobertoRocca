export default function menu(){
    //SCRIPT MENU
    
    const hamburguesa = document.getElementById('hamburguesa');
    if (!hamburguesa) { return; }
    const hamburguesa2 = document.getElementById('hamburguesa2');
    
    const menu = document.getElementById('menu');
    if (!menu) { return; }
    const close = document.getElementById('close');
    if (!close) { return; }
    const close2 = document.getElementById('close2');
    if (!close2) { return; }
    const primerboton = document.getElementById('primerboton');
    if (!primerboton) { return; }
    const segundoboton = document.getElementById('segundoboton');
    if (!segundoboton) { return; }


    hamburguesa.addEventListener('click', function(ev){
        menu.classList.toggle('opened');
        document.body.classList.toggle('no-scroll');
    })

    close.addEventListener('click', function(ev){
        menu.classList.toggle('opened')
        document.body.classList.remove('no-scroll');
    })
    
    close2.addEventListener('click', function(ev){
        menu.classList.toggle('opened')
        document.body.classList.remove('no-scroll');
    })

    if (hamburguesa2) {
        hamburguesa2.addEventListener('click', function(ev){
            menu.classList.toggle('opened');
            document.body.classList.toggle('no-scroll');
        })
    }


    //END SCRIPT MENU


    // END SCRIPT SUBMENU
}
