export default function cookies(){
    const cookies = document.getElementById('cookies');
    if (!cookies) { return; }
    const accept = document.getElementById('accept');
    if (!accept) { return; }
    accept.addEventListener('click', function(ev){
        cookies.classList.add('none');
        
    })
}