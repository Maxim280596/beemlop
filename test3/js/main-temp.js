$(function() {
    "use strict";
    var wind = $(window);
    // scrollIt
    $.scrollIt({
        upKey: 38,                // key code to navigate to the next section
        downKey: 40,              // key code to navigate to the previous section
        easing: 'swing',          // the easing function for animation
        scrollTime: 600,          // how long (in ms) the animation takes
        activeClass: 'active',    // class given to the active nav element
        onPageChange: null,       // function(pageIndex) that is called when page is changed
        topOffset: -80            // offste (in px) for fixed top navigation
    });

    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            navbloglogo = $(".blog-nav .logo> img"),
            logo = $(".navbar .logo> img");

        if(bodyScroll > 100){

            navbar.addClass("nav-scroll");
            // logo.attr('src', 'img/logo-dark.png');

        }else{

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo.svg');
            // navbloglogo.attr('src', 'img/logo-dark.png');
        }
    });

    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });


    // sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){

        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    // === owl-carousel === //

    // Team owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    // clients owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop:true,
        mouseDrag:true,
        autoplay:true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $('.portfolio-container .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        // margin: 30,
        mouseDrag:true,
        autoplay:true,
        smartSpeed:500,
        nav:true,


    });

    // magnificPopup
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
    // YouTubePopUp
    $("a.vid, .gallery__item__video").YouTubePopUp();
});


// === window When Loading === //

$(window).on("load",function (){
    var wind = $(window);

    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.gallery__item'
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
	
	
	// -----------------------------------------------------------------
    $('.filtering_ourteam').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter_ourteam');
		hideAndVisible(filterValue);
    });

    $('.filtering_ourteam').on( 'click', 'span', function() {
        $(this).addClass('activenow').siblings().removeClass('activenow');
    });
	
});

function hideAndVisible(blockName) {
	let html;
	switch (blockName) {
	case 'odessa':
			html = '<div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/anastasiya-teamleader-Illustrator-odessa.jpg" alt="Anastasiia"></div><div class="info"><div class="h6">Anastasiia</div><span>Team Lead / Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elizaveta-motion-designer-odessa.jpg" alt="Elizaveta"></div><div class="info"><div class="h6">Elizaveta</div><span>Motion Desinger</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elizaveta-motion-designer-odessa-.jpg" alt="Elizaveta"></div><div class="info"><div class="h6">Elizaveta</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/dmitriy.jpg" alt="Dmitrii"></div><div class="info"><div class="h6">Dmitrii</div><span>Team Lead / Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elena_illustrator_odessa.jpg" alt="Elena"></div><div class="info"><div class="h6">Elena</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/stepan-sound-designer-odessa.jpg" alt="Stepan"></div><div class="info"><div class="h6">Stepan</div><span>Sound Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/aleksandr-motion-desinger-odessa.jpg" alt="Aleksandr"></div><div class="info"><div class="h6">Aleksandr</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/anna_illustrator_odessa.jpg" alt="Anna"></div><div class="info"><div class="h6">Anna</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/ilya_client_manager_odessa.jpg" alt="Ilia"></div><div class="info"><div class="h6">Ilia</div><span>Client Manager</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/ilya-team-leader-motion-desinger-odessa.jpg" alt="Ilia"></div><div class="info"><div class="h6">Ilia</div><span>Team Leader / Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/veronika-illustrator-odessa.jpg" alt="Veronika"></div><div class="info"><div class="h6">Veronika</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vika-llustrator-odessa.jpg" alt="Viktoriia"></div><div class="info"><div class="h6">Viktoriia</div><span>Illustrator</span></div></div>';
			break;
	case 'sumy':
			html = '<div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/nazar.jpg" alt="Nazar"></div><div class="info"><div class="h6">Nazar</div><span>Team Lead / Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/lilia.jpg" alt="Lilia"></div><div class="info"><div class="h6">Lilia</div><span>Senior Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vlad.jpg" alt="Vlad"></div><div class="info"><div class="h6">Vlad</div><span>Team Lead / Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/denis.jpg" alt="Denis"></div><div class="info"><div class="h6">Denis</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vladimir.jpg" alt="Vladimir"></div><div class="info"><div class="h6">Vladimir</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/anna.jpg" alt="Anna"></div><div class="info"><div class="h6">Anna</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/taras.jpg" alt="Taras"></div><div class="info"><div class="h6">Taras</div><span>Illustrator</span></div></div>';
			break;
	case 'zhytomyr':
			html = '<div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/dima.jpg" alt="Dima Buriachenko"></div><div class="info"><div class="h6">Dima</div><span>Founder, CEO</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/talli.jpg" alt="Talli"></div><div class="info"><div class="h6">Talli</div><span>Creative Director</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/sergey.jpg" alt="Sergey"></div><div class="info"><div class="h6">Sergey</div><span>Project Manager</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/nataliia.jpg" alt="Nataliia"></div><div class="info"><div class="h6">Nataliia</div><span>Art Director / Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/darina.jpg" alt="Darina"></div><div class="info"><div class="h6">Darina</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/artur.jpg" alt="Artur"></div><div class="info"><div class="h6">Artur</div><span>Motion Desinger</span></div></div>';
			break;
	default:
			html= '';
			html = '<div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/dima.jpg" alt="Dima Buriachenko"></div><div class="info"><div class="h6">Dima</div><span>Founder, CEO</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/talli.jpg" alt="Talli"></div><div class="info"><div class="h6">Talli</div><span>Creative Director</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/sergey.jpg" alt="Sergey"></div><div class="info"><div class="h6">Sergey</div><span>Project Manager</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/nataliia.jpg" alt="Nataliia"></div><div class="info"><div class="h6">Nataliia</div><span>Art Director / Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/darina.jpg" alt="Darina"></div><div class="info"><div class="h6">Darina</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/artur.jpg" alt="Artur"></div><div class="info"><div class="h6">Artur</div><span>Motion Desinger</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/nazar.jpg" alt="Nazar"></div><div class="info"><div class="h6">Nazar</div><span>Team Lead / Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/lilia.jpg" alt="Lilia"></div><div class="info"><div class="h6">Lilia</div><span>Senior Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/dmitriy.jpg" alt="Dmitrii"></div><div class="info"><div class="h6">Dmitrii</div><span>Team Lead / Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vlad.jpg" alt="Vlad"></div><div class="info"><div class="h6">Vlad</div><span>Team Lead / Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/denis.jpg" alt="Denis"></div><div class="info"><div class="h6">Denis</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vladimir.jpg" alt="Vladimir"></div><div class="info"><div class="h6">Vladimir</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/anna.jpg" alt="Anna"></div><div class="info"><div class="h6">Anna</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/taras.jpg" alt="Taras"></div><div class="info"><div class="h6">Taras</div><span>Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/anastasiya-teamleader-Illustrator-odessa.jpg" alt="Anastasiia"></div><div class="info"><div class="h6">Anastasiia</div><span>Team Lead / Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elizaveta-motion-designer-odessa.jpg" alt="Elizaveta"></div><div class="info"><div class="h6">Elizaveta</div><span>Motion Desinger</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elizaveta-motion-designer-odessa-.jpg" alt="Elizaveta"></div><div class="info"><div class="h6">Elizaveta</div><span>Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elena_illustrator_odessa.jpg" alt="Elena"></div><div class="info"><div class="h6">Elena</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/stepan-sound-designer-odessa.jpg" alt="Stepan"></div><div class="info"><div class="h6">Stepan</div><span>Sound Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/aleksandr-motion-desinger-odessa.jpg" alt="Aleksandr"></div><div class="info"><div class="h6">Aleksandr</div><span>Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/anna_illustrator_odessa.jpg" alt="Anna"></div><div class="info"><div class="h6">Anna</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/ilya_client_manager_odessa.jpg" alt="Ilia"></div><div class="info"><div class="h6">Ilia</div><span>Client Manager</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/ilya-team-leader-motion-desinger-odessa.jpg" alt="Ilia"></div><div class="info"><div class="h6">Ilia</div><span>Team Leader / Motion Designer</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/veronika-illustrator-odessa.jpg" alt="Veronika"></div><div class="info"><div class="h6">Veronika</div><span>Illustrator</span></div></div><div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vika-llustrator-odessa.jpg" alt="Viktoriia"></div><div class="info"><div class="h6">Viktoriia</div><span>Illustrator</span></div></div>';
			break;
	
	
	}
	$('.team .owl-carousel').trigger('replace.owl.carousel', html).trigger('refresh.owl.carousel');			


}

// Google Maps
if($(".map-canvas").length>0){
    setTimeout(function(){
        initializeMap();
    }, 500 );
}

// Google Map
function initializeMap() {
    var myCenter=new google.maps.LatLng(50.255656, 28.658959)
    var image = 'img/location-marker.png';
    var marker=new google.maps.Marker({
        position:myCenter,
        title: 'Beemloop office',
        icon: image,
    });

    var mapProp = {
        center:myCenter,
        zoom: 5,
        draggable: true,
        scrollwheel: false,
        disableDefaultUI: true,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var contentString = '<div><b>Beemloop office</b><br> Kievskaia st. 1, Zhytomyr, Ukraine</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
    map.panBy(-150,80); // (x,y)
    marker.setMap(map);

    google.maps.event.addListener(marker, 'click', function() {

        infowindow.setContent(contentString);
        infowindow.open(map, marker);

    });
}

$(function() {
    $('.lazy').lazy();
});

let design = document.getElementById('label-add');
design.addEventListener('click', designPopap);
function designPopap(){
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function(input){
        var uploaded1 = document.getElementById("name-file-attach1");

        var label  = input.nextElementSibling,
            labelVal = label.innerHTML;
        input.addEventListener('change', function(e){
            var fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                uploaded1.innerHTML = fileName;

            else
                uploaded1.innerHTML = labelVal;


        });
    });
}


let design2 = document.getElementById('label-add2');
design2.addEventListener('click', designPopap2);
function designPopap2(){
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function(input){
        var uploaded2 = document.getElementById("name-file-attach2");

        var label  = input.nextElementSibling,
            labelVal = label.innerHTML;
        input.addEventListener('change', function(e){
            var fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                uploaded2.innerHTML = fileName;

            else
                uploaded2.innerHTML = labelVal;


        });
    });
}

let design3 = document.getElementById('label-add3');
design3.addEventListener('click', designPopap3);
function designPopap3(){
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function(input){
        var uploaded3 = document.getElementById("name-file-attach3");

        var label  = input.nextElementSibling,
            labelVal = label.innerHTML;
        input.addEventListener('change', function(e){
            var fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                uploaded3.innerHTML = fileName;

            else
                uploaded3.innerHTML = labelVal;


        });
    });
}

design3.addEventListener("click", designPopap3), $(function () {
    $(".loading-circle, .click-for-circle").click(function () {
        $(".wrapper-social__icon").stop().fadeToggle()
    })
});


$(window).on('focus', function () {
    $('.owl-next').trigger('click');
});

