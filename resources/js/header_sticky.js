export default function header(){

    // HEADER STICKY
    const header = document.getElementById('header_sticky');
    if (!header) { return; }

    let stickyHeader = function () {
        let y = window.scrollY;
        if (y >= 190) {
            header.classList.add('emerge');
        } else if (y < 190){
            header.classList.remove('emerge');
        }
    };
    window.addEventListener("scroll", stickyHeader);

}