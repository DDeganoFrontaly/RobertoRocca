export default function swipersPersonalizados(Swiper){

    //SCRIPT LA VOZ DE LOS PROTAGONISTAS
    const swiperLaVozDeLosProtagonistas = new Swiper('.la_voz_de_los_protagonistas_wrp', {
            // Optional parameters
            //loop: true,
            slidesPerView: 'auto',
            spaceBetween: 20,
            speed: 3000,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
    });
    if (!swiperLaVozDeLosProtagonistas) { return; }
    

        //SCRIPT Propuesta Educativa
        const swiper4 = new Swiper('.modulo4_wrp', {
          // Optional parameters
          // loop: true,
          slidesPerView: 'auto',
          spaceBetween: 20,
          speed: 1000,
          pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
          },
          navigation: {
            nextEl: '#swiper-button-next',
            prevEl: '#swiper-button-prev',
        },
  });
  if (!swiper4) { return; }

      //SCRIPT PROGRAMAS EDUCATIVOS
      const swiperModulosEducativos = new Swiper('.modulo_programas_educativos_swiper', {
        // Optional parameters
        //loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed: 3000,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
  });
  if (!swiperModulosEducativos) { return; }

      //SCRIPT NOTA
      const swiperModulosNota = new Swiper('.modulo_articulos_nota_swiper', {
        // Optional parameters
        //loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed: 3000,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
  });
  if (!swiperModulosNota) { return; }

     //SCRIPT ARTICULOS

     let bodyInnerWidth = ""
     resizer();

    function resizer(){
         bodyInnerWidth = document.documentElement.clientWidth;
    }

    window.addEventListener('resize', resizer);

const swiperModulosArticulos = new Swiper('.modulo_articulos_titulo_swiper', {
   // Optional parameters
   //loop: true,
   slidesPerView: 'auto',
   spaceBetween: 20,
   speed: 3000,
   pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
   },

   breakpoints: {
    // when window width is >= 1248px
    1248: {
      slidesOffsetBefore : ((bodyInnerWidth - 1248) / 2),
    }
  },

//           slidesOffsetBefore : ((bodyInnerWidth - 1248) / 2),
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 });
 if (!swiperModulosArticulos) { return; }

const swiperFotoConSlider = new Swiper('.modulo_foto_con_slider_swiper', {
   // Optional parameters
   //loop: true,
   slidesPerView: 'auto',
   spaceBetween: 20,
   speed: 3000,
   pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
   },

   breakpoints: {
    // when window width is >= 1248px
    1248: {
      slidesOffsetBefore : ((bodyInnerWidth - 1248) / 2),
    }
  },

//           slidesOffsetBefore : ((bodyInnerWidth - 1248) / 2),
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 });
 if (!swiperFotoConSlider) { return; }
  

}