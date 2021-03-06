$(window).ready(function(){

    let menuResponsive = document.getElementById('menuResponsive');
    let menuNav = document.getElementById('navMenu');
    let botonMenu = document.getElementById('menuClick')

    if(window.innerWidth < 460){
        menuNav.style.display = 'none'
        menuResponsive.style.display = "block";

    }

    $(window).resize(function(e) {

        let windowWidth = window.innerWidth;

        if(windowWidth <= 460){
            menuNav.style.display = 'none'
            menuResponsive.style.display = "block";
        }
        else{
            menuNav.style.display = ''
            menuResponsive.style.display = "none";
        }

    })

    let menuResponsivo = document.getElementById('menuResponsivo');
    $('#menuClick').click(function (e) {
        e.preventDefault();

        menuResponsivo.style.top = '0px';

    })

    $('#linkClose1,#linkClose2,#linkClose3,#linkClose4').click(function (e) {
        menuResponsivo.style.top = '-500px';
    })

    $('#closeMenuResponsive').click(function(e){
        e.preventDefault();
        menuResponsivo.style.top = '-500px';
    })
    

    /*Contenido de información en el "about" */

    $('#clickContenido1').click(function(e){
        e.preventDefault()
        let contenido1 = document.getElementById('contenido1')
        let clicker = e.target.text

        if(clicker == "+"){
            contenido1.style.height = "20em";
            document.getElementById('clickContenido1').text = "-"
        }
        else{
            contenido1.style.height = "0px";
            document.getElementById('clickContenido1').text = "+"
        }
    })

    $('#clickContenido2').click(function(e){
        e.preventDefault()
        let contenido2 = document.getElementById('contenido2')
        let clicker = e.target.text

        if(clicker == "+"){
            contenido2.style.height = "20em";
            document.getElementById('clickContenido2').text = "-"
        }
        else{
            contenido2.style.height = "0px";
            document.getElementById('clickContenido2').text = "+"
        }
    })

    $('#clickContenido3').click(function(e){
        e.preventDefault()
        let contenido3 = document.getElementById('contenido3')
        let clicker = e.target.text

        if(clicker == "+"){
            contenido3.style.height = "20em";
            document.getElementById('clickContenido3').text = "-"
        }
        else{
            contenido3.style.height = "0px";
            document.getElementById('clickContenido3').text = "+"
        }
    })

    $(".disabledLink").click(function(e){
        e.preventDefault();
    })

    //fondo animado
    let bodyBackground = document.querySelector('body');
    let frontEndBackground = document.querySelector('.background2')
    let backEndBackground = document.querySelector('.background3')
    console.log(frontEndBackground);

    $(window).scroll(function (e){
        let scrollY = $(window).scrollTop();
        let scrollX = $(window).scrollLeft();

        console.log("scrollY = " + scrollY);
        console.log("scrollX = " + scrollX);

        bodyBackground.style.backgroundPositionY = parseInt(scrollY / 8) + "%"
        frontEndBackground.style.backgroundPositionY = parseInt(scrollY / 3) + "%"
        backEndBackground.style.backgroundPositionY = parseInt(scrollY / 5)*0.20 + "%"

        
    })

})