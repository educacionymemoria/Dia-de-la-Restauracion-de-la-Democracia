
function volveralinicio(a, b, c) {
    
    a.addEventListener('click', function () {
    b.classList.add('hidden')
    c.classList.remove('hidden')
       
})}




// FUNCION ELECCIONES - Al hacer click en los botones se pasa a la siguiente información

const seccionelec1 = document.querySelector('#seccionelec1')
const seccionelec2 = document.querySelector('#seccionelec2')


const masboton = document.querySelector('#masboton')
const masboton2 = document.querySelector('#masboton2')


masboton.addEventListener('click', function () {
  
    seccionelec1.classList.add('hidden')
    seccionelec2.classList.remove('hidden')
    masboton2.classList.remove('hidden')


    setTimeout(function() {
    $("#backcont1").fadeIn(300)
    backcont1.classList.remove('hidden')
    }, 3600)
});






// TESTIMONIOS DE MADRES

const seccionmadres = document.querySelector('#seccionmadres')

const botonmadressect = document.querySelector('#botonmadressect')
const botonabuelassect = document.querySelector('#botonabuelassect')

const madreseccion = document.querySelector('#madreseccion')
const seccionabuelas = document.querySelector('#seccionabuelas')

const madres1 = document.querySelector('#madres1')
const madretest1 = document.querySelector('#madretest1')
const madretest1a = document.querySelector('#madretest1a')
const madretest1b = document.querySelector('#madretest1b')
const madretest1c = document.querySelector('#madretest1c')

const madres2 = document.querySelector('#madres2')
const madretest2 = document.querySelector('#madretest2')
const madretest2a = document.querySelector('#madretest2a')
const madretest2b = document.querySelector('#madretest2b')
const madretest2c = document.querySelector('#madretest2c')

const madres3 = document.querySelector('#madres3')
const madretest3 = document.querySelector('#madretest3')
const madretest3a = document.querySelector('#madretest3a')
const madretest3b = document.querySelector('#madretest3b')
const madretest3c = document.querySelector('#madretest3c')




console

madres1.addEventListener('click', function () {

    let madretest1check = madretest1.classList.contains('hidden')
    let madretest2check = madretest2.classList.contains('hidden')
    let madretest3check = madretest3.classList.contains('hidden')
    let panuelo1 = madres1.classList.contains('panueloshadow')
    let panuelo2 = madres2.classList.contains('panueloshadow')
    let panuelo3 = madres3.classList.contains('panueloshadow')
    let seccionmadrescheck = seccionmadres.classList.contains('extraheight')

    console.log(seccionmadrescheck)
    console.log(madretest1check)
    console.log(madretest2check)
    console.log(madretest3check)

    console.log(panuelo1)
    console.log(panuelo2)
    console.log(panuelo3)

    // Si la sección no tiene EXTRA, la aplica.

    if (seccionmadrescheck == false && madretest2check == true && madretest3check == true) {
        seccionmadres.classList.add('extraheight');
        seccionmadres.classList.remove('revextraheight');
    } 
    
    // Si sólo está visible este texto, se saca el EXTRA
    if (madretest1check == false && madretest2check == true && madretest3check == true) {
        seccionmadres.classList.add('revextraheight');
        seccionmadres.classList.remove('extraheight');
    }

    // Si se está mostrando alguno de los otros textos, se esconden (para mostrar sólo este)
    
    if (madretest2check == false) {
        madretest2.classList.toggle('hidden')
    }
    if (madretest3check == false) {
        madretest3.classList.toggle('hidden')
    }

    //Cada vez que se aprieta el botón, se pone o saca la sombra del pañuelo
    madres1.classList.toggle('panueloshadow')

    // Si se aprieta este pañuelo, se le sacan las sombras a los otros 2
    if (panuelo2 == true) {
        madres2.classList.remove('panueloshadow')
            
    } else if (panuelo3 == true) {
        madres3.classList.remove('panueloshadow')
    }

    //Cada vez que se aprieta el botón, se muestra o esconde el texto
    setTimeout(function() {        
        madretest1.classList.toggle('hidden')}, 500)



});



madres2.addEventListener('click', function () {

    let madretest1check = madretest1.classList.contains('hidden')
    let madretest2check = madretest2.classList.contains('hidden')
    let madretest3check = madretest3.classList.contains('hidden')
    let seccionmadrescheck = seccionmadres.classList.contains('extraheight')
    let panuelo1 = madres1.classList.contains('panueloshadow')
    let panuelo2 = madres2.classList.contains('panueloshadow')
    let panuelo3 = madres3.classList.contains('panueloshadow')
    console.log(seccionmadrescheck)
    console.log(madretest1check)
    console.log(madretest2check)
    console.log(madretest3check)

    console.log(panuelo1)
    console.log(panuelo2)
    console.log(panuelo3)

      // Si la sección no tiene EXTRA, la aplica.

      if (seccionmadrescheck == false && madretest1check == true && madretest3check == true) {
        seccionmadres.classList.add('extraheight');
        seccionmadres.classList.remove('revextraheight');
    } 
    
    // Si sólo está visible este texto, se saca el EXTRA
    if (madretest1check == true && madretest2check == false && madretest3check == true) {
        seccionmadres.classList.add('revextraheight');
        seccionmadres.classList.remove('extraheight');
    }

    // Si se está mostrando alguno de los otros textos, se esconden (para mostrar sólo este)
    
    if (madretest1check == false) {
        madretest1.classList.toggle('hidden')
    
    } 

    if (madretest3check == false) {
        madretest3.classList.toggle('hidden')
    }
    //Cada vez que se aprieta el botón, se pone o saca la sombra del pañuelo
    madres2.classList.toggle('panueloshadow')

    // Si se aprieta este pañuelo, se le sacan las sombras a los otros 2
    if (panuelo1 == true) {
        madres1.classList.remove('panueloshadow')
            
    } else if (panuelo3 == true) {
        madres3.classList.remove('panueloshadow')
    }

    //Cada vez que se aprieta el botón, se muestra o esconde el texto
    setTimeout(function() {        
        madretest2.classList.toggle('hidden')}, 500)
 });



 madres3.addEventListener('click', function () {

    let madretest1check = madretest1.classList.contains('hidden')
    let madretest2check = madretest2.classList.contains('hidden')
    let madretest3check = madretest3.classList.contains('hidden')
    let panuelo1 = madres1.classList.contains('panueloshadow')
    let panuelo2 = madres2.classList.contains('panueloshadow')
    let panuelo3 = madres3.classList.contains('panueloshadow')
    let seccionmadrescheck = seccionmadres.classList.contains('extraheight')

    // Si la sección no tiene EXTRA, la aplica.

    if (seccionmadrescheck == false && madretest1check == true && madretest2check == true) {
        seccionmadres.classList.add('extraheight');
        seccionmadres.classList.remove('revextraheight');
    } 
    
    // Si sólo está visible este texto, se saca el EXTRA
    if (madretest1check == true && madretest2check == true && madretest3check == false) {
        seccionmadres.classList.add('revextraheight');
        seccionmadres.classList.remove('extraheight');
    }

    // Si se está mostrando alguno de los otros textos, se esconden (para mostrar sólo este)
    
    if (madretest2check == false) {
        madretest2.classList.toggle('hidden')
    }
    if (madretest1check == false) {
        madretest1.classList.toggle('hidden')
    }

    //Cada vez que se aprieta el botón, se pone o saca la sombra del pañuelo
    madres3.classList.toggle('panueloshadow')

    // Si se aprieta este pañuelo, se le sacan las sombras a los otros 2
    if (panuelo2 == true) {
        madres2.classList.remove('panueloshadow')
            
    } else if (panuelo1 == true) {
        madres1.classList.remove('panueloshadow')
    }

    //Cada vez que se aprieta el botón, se muestra o esconde el texto
    setTimeout(function() {        
        madretest3.classList.toggle('hidden')}, 500)

});

// TESTIMONIOS DE abuelas
const abuelas1 = document.querySelector('#abuelas1')
const abuelatest1 = document.querySelector('#abuelatest1')
const abuelatest1a = document.querySelector('#abuelatest1a')
const abuelatest1b = document.querySelector('#abuelatest1b')
const abuelatest1c = document.querySelector('#abuelatest1c')

const abuelas2 = document.querySelector('#abuelas2')
const abuelatest2 = document.querySelector('#abuelatest2')
const abuelatest2a = document.querySelector('#abuelatest2a')
const abuelatest2b = document.querySelector('#abuelatest2b')
const abuelatest2c = document.querySelector('#abuelatest2c')

const abuelas3 = document.querySelector('#abuelas3')
const abuelatest3 = document.querySelector('#abuelatest3')
const abuelatest3a = document.querySelector('#abuelatest3a')
const abuelatest3b = document.querySelector('#abuelatest3b')
const abuelatest3c = document.querySelector('#abuelatest3c')




console

abuelas1.addEventListener('click', function () {

    let abuelatest1check = abuelatest1.classList.contains('hidden')
    let abuelatest2check = abuelatest2.classList.contains('hidden')
    let abuelatest3check = abuelatest3.classList.contains('hidden')
    let panuelo1 = abuelas1.classList.contains('panueloshadow')
    let panuelo2 = abuelas2.classList.contains('panueloshadow')
    let panuelo3 = abuelas3.classList.contains('panueloshadow')
    let seccionmadrescheck = seccionmadres.classList.contains('extraheight')

    console.log(seccionmadrescheck)
    console.log(abuelatest1check)
    console.log(abuelatest2check)
    console.log(abuelatest3check)

    console.log(panuelo1)
    console.log(panuelo2)
    console.log(panuelo3)

    // Si la sección no tiene EXTRA, la aplica.

    if (seccionmadrescheck == false && abuelatest2check == true && abuelatest3check == true) {
        seccionmadres.classList.add('extraheight');
        seccionmadres.classList.remove('revextraheight');
    } 
    
    // Si sólo está visible este texto, se saca el EXTRA
    if (abuelatest1check == false && abuelatest2check == true && abuelatest3check == true) {
        seccionmadres.classList.add('revextraheight');
        seccionmadres.classList.remove('extraheight');
    }

    // Si se está mostrando alguno de los otros textos, se esconden (para mostrar sólo este)
    
    if (abuelatest2check == false) {
        abuelatest2.classList.toggle('hidden')
    }
    if (abuelatest3check == false) {
        abuelatest3.classList.toggle('hidden')
    }

    //Cada vez que se aprieta el botón, se pone o saca la sombra del pañuelo
    abuelas1.classList.toggle('panueloshadow')

    // Si se aprieta este pañuelo, se le sacan las sombras a los otros 2
    if (panuelo2 == true) {
        abuelas2.classList.remove('panueloshadow')
            
    } else if (panuelo3 == true) {
        abuelas3.classList.remove('panueloshadow')
    }

    //Cada vez que se aprieta el botón, se muestra o esconde el texto
    setTimeout(function() {        
        abuelatest1.classList.toggle('hidden')}, 500)



});



abuelas2.addEventListener('click', function () {

    let abuelatest1check = abuelatest1.classList.contains('hidden')
    let abuelatest2check = abuelatest2.classList.contains('hidden')
    let abuelatest3check = abuelatest3.classList.contains('hidden')
    let panuelo1 = abuelas1.classList.contains('panueloshadow')
    let panuelo2 = abuelas2.classList.contains('panueloshadow')
    let panuelo3 = abuelas3.classList.contains('panueloshadow')
    let seccionmadrescheck = seccionmadres.classList.contains('extraheight')

    console.log(seccionmadrescheck)
    console.log(abuelatest1check)
    console.log(abuelatest2check)
    console.log(abuelatest3check)

    console.log(panuelo1)
    console.log(panuelo2)
    console.log(panuelo3)

      // Si la sección no tiene EXTRA, la aplica.

      if (seccionmadrescheck == false && abuelatest1check == true && abuelatest3check == true) {
        seccionmadres.classList.add('extraheight');
        seccionmadres.classList.remove('revextraheight');
    } 
    
    // Si sólo está visible este texto, se saca el EXTRA
    if (abuelatest1check == true && abuelatest2check == false && abuelatest3check == true) {
        seccionmadres.classList.add('revextraheight');
        seccionmadres.classList.remove('extraheight');
    }

    // Si se está mostrando alguno de los otros textos, se esconden (para mostrar sólo este)
    
    if (abuelatest1check == false) {
        abuelatest1.classList.toggle('hidden')
    
    } 

    if (abuelatest3check == false) {
        abuelatest3.classList.toggle('hidden')
    }
    //Cada vez que se aprieta el botón, se pone o saca la sombra del pañuelo
    abuelas2.classList.toggle('panueloshadow')

    // Si se aprieta este pañuelo, se le sacan las sombras a los otros 2
    if (panuelo1 == true) {
        abuelas1.classList.remove('panueloshadow')
            
    } else if (panuelo3 == true) {
        abuelas3.classList.remove('panueloshadow')
    }

    //Cada vez que se aprieta el botón, se muestra o esconde el texto
    setTimeout(function() {        
        abuelatest2.classList.toggle('hidden')}, 500)
 });



 abuelas3.addEventListener('click', function () {

    let abuelatest1check = abuelatest1.classList.contains('hidden')
    let abuelatest2check = abuelatest2.classList.contains('hidden')
    let abuelatest3check = abuelatest3.classList.contains('hidden')
    let panuelo1 = abuelas1.classList.contains('panueloshadow')
    let panuelo2 = abuelas2.classList.contains('panueloshadow')
    let panuelo3 = abuelas3.classList.contains('panueloshadow')
    let seccionmadrescheck = seccionmadres.classList.contains('extraheight')

    console.log(seccionmadrescheck)
    console.log(abuelatest1check)
    console.log(abuelatest2check)
    console.log(abuelatest3check)

    console.log(panuelo1)
    console.log(panuelo2)
    console.log(panuelo3)

    // Si la sección no tiene EXTRA, la aplica.

    if (seccionmadrescheck == false && abuelatest1check == true && abuelatest2check == true) {
        seccionmadres.classList.add('extraheight');
        seccionmadres.classList.remove('revextraheight');
    } 
    
    // Si sólo está visible este texto, se saca el EXTRA
    if (abuelatest1check == true && abuelatest2check == true && abuelatest3check == false) {
        seccionmadres.classList.add('revextraheight');
        seccionmadres.classList.remove('extraheight');
    }

    // Si se está mostrando alguno de los otros textos, se esconden (para mostrar sólo este)
    
    if (abuelatest2check == false) {
        abuelatest2.classList.toggle('hidden')
    }
    if (abuelatest1check == false) {
        abuelatest1.classList.toggle('hidden')
    }

    //Cada vez que se aprieta el botón, se pone o saca la sombra del pañuelo
    abuelas3.classList.toggle('panueloshadow')

    // Si se aprieta este pañuelo, se le sacan las sombras a los otros 2
    if (panuelo2 == true) {
        abuelas2.classList.remove('panueloshadow')
            
    } else if (panuelo1 == true) {
        abuelas1.classList.remove('panueloshadow')
    }

    //Cada vez que se aprieta el botón, se muestra o esconde el texto
    setTimeout(function() {        
        abuelatest3.classList.toggle('hidden')}, 500)

});


///////////////////////////////////////////
// BOTONES PARA CAMBIAR DE SECCIÓN DE MADRES Y ABUELAS

botonabuelassect.addEventListener('click', function () {
    let seccionmadrescheck = seccionmadres.classList.contains('extraheight')
    let abuelatest1check = abuelatest1.classList.contains('hidden')
    let abuelatest2check = abuelatest2.classList.contains('hidden')
    let abuelatest3check = abuelatest3.classList.contains('hidden')
    let madretest1check = madretest1.classList.contains('hidden')
    let madretest2check = madretest2.classList.contains('hidden')
    let madretest3check = madretest3.classList.contains('hidden')

    console.log(abuelatest1check)


    madreseccion.classList.add('hidden')
    seccionabuelas.classList.remove('hidden')
    botonabuelassect.classList.toggle('inactivo')
    botonmadressect.classList.toggle('inactivo')

    if (seccionmadrescheck == true) {
        seccionmadres.classList.remove('extraheight')
    }

    if (abuelatest1check == true || abuelatest2check == true || abuelatest3check == true || madretest1check == true || madretest2check == true || madretest3check == true) {
        seccionmadres.classList.remove('extraheight')
        abuelatest1.classList.add('hidden')
        abuelatest2.classList.add('hidden')
        abuelatest3.classList.add('hidden')
        madretest3.classList.add('hidden')
        madretest1.classList.add('hidden')
        madretest2.classList.add('hidden')
    }

})

botonmadressect.addEventListener('click', function () {
    let seccionmadrescheck = seccionmadres.classList.contains('extraheight')
    let abuelatest1check = abuelatest1.classList.contains('hidden')
    let abuelatest2check = abuelatest2.classList.contains('hidden')
    let abuelatest3check = abuelatest3.classList.contains('hidden')
    let madretest1check = madretest1.classList.contains('hidden')
    let madretest2check = madretest2.classList.contains('hidden')
    let madretest3check = madretest3.classList.contains('hidden')


    seccionabuelas.classList.add('hidden')
    madreseccion.classList.remove('hidden')
    botonabuelassect.classList.toggle('inactivo')
    botonmadressect.classList.toggle('inactivo')

    
    if (seccionmadrescheck == true) {
        seccionmadres.classList.remove('extraheight')
    }

    if (abuelatest1check == true || abuelatest2check == true || abuelatest3check == true || madretest1check == true || madretest2check == true || madretest3check == true) {
        seccionmadres.classList.remove('extraheight')
        abuelatest1.classList.add('hidden')
        abuelatest2.classList.add('hidden')
        abuelatest3.classList.add('hidden')
        madretest3.classList.add('hidden')
        madretest1.classList.add('hidden')
        madretest2.classList.add('hidden')
    }
    
})
//ANIMACIONES
$(() => {

    $("#masboton").click(() => {
    $("#fadeelec").fadeOut(500)
    $("#fadeelec").fadeIn(500)
    })
    
})


// setTimeout(function() {}, 100)


////////////// 
// BOTONES ATRÁS

const back2 = document.querySelector('#back2')
const back1 = document.querySelector('#back1')
// const back3 = document.querySelector('#back3')
// const back4 = document.querySelector('#back4')
// const back5 = document.querySelector('#back5')
// const back6 = document.querySelector('#back6')
// const back7 = document.querySelector('#back7')
// const back8 = document.querySelector('#back8')
// const back9 = document.querySelector('#back9')
// const back10 = document.querySelector('#back10')

// const backcont2 = document.querySelector('#backcont2')
const backcont1 = document.querySelector('#backcont1')
// const backcont3 = document.querySelector('#backcont3')
// const backcont4 = document.querySelector('#backcont4')
// const backcont5 = document.querySelector('#backcont5')
// const backcont6 = document.querySelector('#backcont6')
// const backcont7 = document.querySelector('#backcont7')
// const backcont8 = document.querySelector('#backcont8')
// const backcont9 = document.querySelector('#backcont9')
// const backcont10 = document.querySelector('#backcont10')

const back1mes = document.querySelector('#back1mes')
// const back2mes = document.querySelector('#back2mes')
// const back3mes = document.querySelector('#back3mes')
// const back4mes = document.querySelector('#back4mes')
// const back5mes = document.querySelector('#back5mes')
// const back6mes = document.querySelector('#back6mes')
// const back7mes = document.querySelector('#back7mes')
// const back8mes = document.querySelector('#back8mes')
// const back9mes = document.querySelector('#back9mes')
// const back10mes = document.querySelector('#back10mes')

// const volveralinicio1 = volveralinicio(back2, seccionelec2, seccionelec1);
// const volveralinicio2 = volveralinicio(back3, seccionelec3, seccionelec1);
// const volveralinicio3 = volveralinicio(back5, seccionelec4, seccionelec1);
// const volveralinicio4 = volveralinicio(back7, seccionelec5, seccionelec1);
// const volveralinicio5 = volveralinicio(back4, seccionelec3, seccionelec2);
// const volveralinicio6 = volveralinicio(back6, seccionelec4, seccionelec3);
// const volveralinicio7 = volveralinicio(back8, seccionelec5, seccionelec4);

back1.addEventListener('mouseover', function () {
    setTimeout(function() {
        $("#back1mes").fadeIn(500)
    }, 200)
    setTimeout(function() {
        back1mes.classList.remove('hidden')
    }, 300)
    

    setTimeout(function() {
        $("#back1mes").fadeOut(500)
    }, 2000)

    setTimeout(function() {
        back1mes.classList.add('hidden')
    }, 2500)
});


// back3.addEventListener('mouseover', function () {
//     setTimeout(function() {
//         $("#back3mes").fadeIn(500)
//     }, 200)
//     setTimeout(function() {
//         back3mes.classList.remove('hidden')
//     }, 300)
    

//     setTimeout(function() {
//         $("#back3mes").fadeOut(500)
//     }, 2000)

//     setTimeout(function() {
//         back3mes.classList.add('hidden')
//     }, 2500)
// });

// back4.addEventListener('mouseover', function () {
//     setTimeout(function() {
//         $("#back4mes").fadeIn(500)
//     }, 200)
//     setTimeout(function() {
//         back4mes.classList.remove('hidden')
//     }, 300)
    

//     setTimeout(function() {
//         $("#back4mes").fadeOut(500)
//     }, 2000)

//     setTimeout(function() {
//         back4mes.classList.add('hidden')
//     }, 2500)
// });

// back5.addEventListener('mouseover', function () {
//     setTimeout(function() {
//         $("#back5mes").fadeIn(500)
//     }, 200)
//     setTimeout(function() {
//         back5mes.classList.remove('hidden')
//     }, 300)
    

//     setTimeout(function() {
//         $("#back5mes").fadeOut(500)
//     }, 2000)

//     setTimeout(function() {
//         back5mes.classList.add('hidden')
//     }, 2500)
// });

// back6.addEventListener('mouseover', function () {
//     setTimeout(function() {
//         $("#back6mes").fadeIn(500)
//     }, 200)
//     setTimeout(function() {
//         back6mes.classList.remove('hidden')
//     }, 300)
    

//     setTimeout(function() {
//         $("#back6mes").fadeOut(500)
//     }, 2000)

//     setTimeout(function() {
//         back6mes.classList.add('hidden')
//     }, 2500)
// });

// back7.addEventListener('mouseover', function () {
//     setTimeout(function() {
//         $("#back7mes").fadeIn(500)
//     }, 200)
//     setTimeout(function() {
//         back7mes.classList.remove('hidden')
//     }, 300)
    

//     setTimeout(function() {
//         $("#back7mes").fadeOut(500)
//     }, 2000)

//     setTimeout(function() {
//         back7mes.classList.add('hidden')
//     }, 2500)
// });

// back8.addEventListener('mouseover', function () {
//     setTimeout(function() {
//         $("#back8mes").fadeIn(500)
//     }, 200)
//     setTimeout(function() {
//         back8mes.classList.remove('hidden')
//     }, 300)
    

//     setTimeout(function() {
//         $("#back8mes").fadeOut(500)
//     }, 2000)

//     setTimeout(function() {
//         back8mes.classList.add('hidden')
//     }, 2500)
// });


// GLOSARIO

const glosario1 = document.querySelector('#glosario1')
const glosario2 = document.querySelector('#glosario2')
const glosario3 = document.querySelector('#glosario3')
const glosario4 = document.querySelector('#glosario4')
const glosario5 = document.querySelector('#glosario5')
const glosario6 = document.querySelector('#glosario6')
const glosario7 = document.querySelector('#glosario7')
const glosario8 = document.querySelector('#glosario8')

const glosariotext1 = document.querySelector('#glosariotext1')
const glosariotext2 = document.querySelector('#glosariotext2')
const glosariotext3 = document.querySelector('#glosariotext3')
const glosariotext4 = document.querySelector('#glosariotext4')
const glosariotext5 = document.querySelector('#glosariotext5')
const glosariotext6 = document.querySelector('#glosariotext6')
const glosariotext7 = document.querySelector('#glosariotext7')
const glosariotext8 = document.querySelector('#glosariotext8')


function glosario(palabra, texto) {

    palabra.addEventListener('click', function () {
    texto.classList.toggle('hidden')

})
}

let glo1 = glosario(glosario1, glosariotext1)
let glo2 = glosario(glosario2, glosariotext2)
let glo3 = glosario(glosario3, glosariotext3)
let glo4 = glosario(glosario4, glosariotext4)
let glo5 = glosario(glosario5, glosariotext5)
let glo6 = glosario(glosario6, glosariotext6)
let glo7 = glosario(glosario7, glosariotext7)
let glo8 = glosario(glosario8, glosariotext8)

//CHECKBOX

const check1 = document.querySelector('#check1')
const check1a = document.querySelector('#check1a')
const tick1 = document.querySelector('#tick1')


check1.addEventListener('click', function () {

    check1.classList.toggle('respcorrecta')

    setTimeout(function() {
        $("#tick1").fadeIn(300)
        tick1.classList.toggle('hidden') }, 50)
})


const check2 = document.querySelector('#check2')
const check2a = document.querySelector('#check2a')
const tick2 = document.querySelector('#tick2')


check2.addEventListener('click', function () {

    check2.classList.toggle('respcorrecta')

    setTimeout(function() {
        $("#tick2").fadeIn(300)
        tick2.classList.toggle('hidden') }, 50)
})


const check3 = document.querySelector('#check3')
const check3a = document.querySelector('#check3a')
const tick3 = document.querySelector('#tick3')


check3.addEventListener('click', function () {

    check3.classList.toggle('respincorrecta')

    setTimeout(function() {
        $("#tick3").fadeIn(300)
        tick3.classList.toggle('hidden') }, 50)
})


const check4 = document.querySelector('#check4')
const check4a = document.querySelector('#check4a')
const tick4 = document.querySelector('#tick4')


check4.addEventListener('click', function () {

    check4.classList.toggle('respcorrecta')

    setTimeout(function() {
        $("#tick4").fadeIn(300)
        tick4.classList.toggle('hidden') }, 50)
})

const check5 = document.querySelector('#check5')
const check5a = document.querySelector('#check5a')
const tick5 = document.querySelector('#tick5')


check5.addEventListener('click', function () {

    check5.classList.toggle('respincorrecta')

    setTimeout(function() {
        $("#tick5").fadeIn(300)
        tick5.classList.toggle('hidden') }, 50)
})

const check6 = document.querySelector('#check6')
const check6a = document.querySelector('#check6a')
const tick6 = document.querySelector('#tick6')


check6.addEventListener('click', function () {

    check6.classList.toggle('respcorrecta')

    setTimeout(function() {
        $("#tick6").fadeIn(300)
        tick6.classList.toggle('hidden') }, 50)
})

const check7 = document.querySelector('#check7')
const check7a = document.querySelector('#check7a')
const tick7 = document.querySelector('#tick7')


check7.addEventListener('click', function () {

    check7.classList.toggle('respcorrecta')

    setTimeout(function() {
        $("#tick7").fadeIn(300)
        tick7.classList.toggle('hidden') }, 50)
})

const check8 = document.querySelector('#check8')
const check8a = document.querySelector('#check8a')
const tick8 = document.querySelector('#tick8')


check8.addEventListener('click', function () {

    check8.classList.toggle('respcorrecta')

    setTimeout(function() {
        $("#tick8").fadeIn(300)
        tick8.classList.toggle('hidden') }, 50)
})

const check9 = document.querySelector('#check9')
const check9a = document.querySelector('#check9a')
const tick9 = document.querySelector('#tick9')


check9.addEventListener('click', function () {

    check9.classList.toggle('respcorrecta')

    setTimeout(function() {
        $("#tick9").fadeIn(300)
        tick9.classList.toggle('hidden') }, 50)
})

const check10 = document.querySelector('#check10')
const check10a = document.querySelector('#check10a')
const tick10 = document.querySelector('#tick10')


check10.addEventListener('click', function () {

    check10.classList.toggle('respcorrecta')

    setTimeout(function() {
        $("#tick10").fadeIn(300)
        tick10.classList.toggle('hidden') }, 50)
})

const check11 = document.querySelector('#check11')
const check11a = document.querySelector('#check11a')
const tick11 = document.querySelector('#tick11')


check11.addEventListener('click', function () {

    check11.classList.toggle('respcorrecta')

    setTimeout(function() {
        $("#tick11").fadeIn(300)
        tick11.classList.toggle('hidden') }, 50)
})

const check12 = document.querySelector('#check12')
const check12a = document.querySelector('#check12a')
const tick12 = document.querySelector('#tick12')


check12.addEventListener('click', function () {

    check12.classList.toggle('respcorrecta')

    setTimeout(function() {
        $("#tick12").fadeIn(300)
        tick12.classList.toggle('hidden') }, 50)
})