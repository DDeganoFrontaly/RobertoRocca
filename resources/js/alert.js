export default function menu(){

const alert = document.getElementById('alert');
if (!alert) { return; }
const alert_close = document.getElementById('alert_close');
if (!alert_close) { return; }

alert_close.addEventListener('click', function(ev){
    alert.classList.add('none');
    
})
}