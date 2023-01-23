export default function contacto(){
    
    const enviar = document.getElementById('modulo_contacto_enviar');
    if (!enviar) { return; }
    const cerrar = document.getElementById('modulo_contacto_cerrar');
    if (!cerrar) { return; }
    const box = document.getElementById('modulo_contacto_exito');
    if (!box) { return; }

    enviar.addEventListener('click', function(ev){
        box.classList.add('flex');
    })

    cerrar.addEventListener('click', function(ev){
        box.classList.remove('flex');
    })

}

