!function(e){"use strict";var t,a,i,n=(e=jQuery)("body"),o=e(window),s=".header-box nav .slide-link a",l=e(".header.top-menu").height(),r=e(window).height(),d=(e(window).width(),navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/));function c(){var t=e(window).width();e(".header-box ").css("width","");var a=e("#header .header-box:nth-child(1n)").width(),i=e("#header .header-box:nth-child(3n)").width();if(a>=i)var n=a;else i>=a&&(n=i);var o=t-2*n-7;e("#header .menu-box").css("width",o),e("#header .first, #header .third").css("width",n+1)}function h(){e("#header.top-menu").hasClass("transform-menu")&&e("#header.top-menu").removeClass("transform-menu"),setTimeout(function(){var t=e(".header-box.menu-box").width(),a=0;e(".navbar-nav >li").each(function(){a+=e(this).innerWidth()+10}),a>t&&e("#header.top-menu").addClass("transform-menu"),m()},200)}function u(){e("body").width()+i<992?e("#header.top-menu").addClass("minimized-menu"):e("#header.top-menu").removeClass("minimized-menu")}function m(){var t=e("body"),a=".primary";e(a).find(".parent > a .open-sub").remove(),t.width()+i<992||e(".header").hasClass("minimized-menu")||e(".header").hasClass("transform-menu")?e(a).find(".parent > a, .megamenu .title").append('<span class="open-sub"><span></span><span></span></span>'):e(a).find("ul").removeAttr("style").find("li").removeClass("active"),e(a).find(".open-sub").click(function(n){n.preventDefault();var o=e(this).closest("li, .box");if(e(o).hasClass("active"))e(o).children().last().slideUp(600),e(o).removeClass("active");else{var s=e(this).closest("li, .box").parent("ul, .sub-list").children("li, .box");if(e(s).is(".active")&&e(s).removeClass("active").children("ul").slideUp(600),e(o).children().last().slideDown(600),e(o).addClass("active"),t.width()+i>991){var l=t.height()-e(a).find(".navbar-nav").offset().top-20;e(a).find(".navbar-nav").css({maxHeight:l,overflow:"auto"})}}}),e(a).find(".parent > a").click(function(a){if(t.width()+i>991&&d){var n=e(this);n.parent().hasClass("open")?n.parent().removeClass("open"):(a.preventDefault(),n.parent().addClass("open"))}}),t.on("click",function(t){e(t.target).is(".primary *")||e(".primary .collapse").hasClass("in")&&(e(".primary .navbar-toggle").addClass("collapsed"),e(".primary .navbar-collapse").collapse("hide"))}),e("#header .navbar .navbar-toggle").on("click",function(){e(".navbar-collapse.collapse").hasClass("in")?e("#header .navbar .navbar-toggle").removeClass("opened"):e("#header .navbar .navbar-toggle").addClass("opened")}),e("main").on("click",function(){e(".navbar-collapse.collapse").hasClass("in")&&e("#header .navbar .navbar-toggle").removeClass("opened")});var n=e(".top-navbar").find(".collapse");t.width()+i<992?n.css("width",t.find("#top-box .container").width()):n.css("width","auto")}function f(){setTimeout(function(){e("#header").hasClass("minimized-menu")||e("#header").hasClass("transform-menu")?e(".navbar-collapse").mCustomScrollbar({scrollInertia:20}):e(".navbar-collapse").mCustomScrollbar("destroy")},2800)}function p(){n.width()+i<768?(e(".widget-box").append(e("#languages")),e(".widget-box").append(e(".header-soc-icon"))):(e(".header-box.first").append(e("#languages")),e(".header-box.third").append(e(".header-soc-icon")))}function g(){var t=e(window).height();e(".heightPrimaryBanner").css("height",t-l)}function v(){n.width()+i<991?e(".table-row").each(function(t,a){var i=e(a);i.find(".table-box:nth-child(2) .t2").after(i.find(" .table-box:nth-child(2) .t1"))}):e(".table-row").each(function(t,a){var i=e(a);i.find(".table-box:nth-child(2) .t1").after(i.find(" .table-box:nth-child(2) .t2"))})}function b(){n.width()+i<991?e(".table-box.t2").after(e(" .table-box.t1")):e(".table-box.t1").after(e(" .table-box.t2"))}function w(){n.width()+i>=992?setTimeout(function(){var t=e("#team-carousel #thumbs-wrapper").height()+40;e("#team-carousel #carousel-wrapper ").css("margin-top",-t)},100):e("#team-carousel #carousel-wrapper ").css("margin-top","")}function y(){e("#carousel").carouFredSel({responsive:!0,circular:!0,auto:!1,width:"100%",items:{visible:1,width:300,height:"auto"},scroll:{fx:"fade"}}),e("#thumbs").carouFredSel({responsive:!0,circular:!0,infinite:!1,auto:!1,prev:"#prev",next:"#next",items:{visible:{min:1,max:4}},scroll:{items:1}}),e("#thumbs a").on("click",function(t){var a=e(this);if(t.preventDefault(),a.hasClass("selected"))return!1;!function(){var t=1;e("#carousel .col-xs-12.active [data-out-animation]").each(function(){var a=e(this),i="fadeIn",n="fadeOut",o=1,s=1;a.data("animation")&&(i=a.data("animation")),a.data("outAnimation")&&(n=a.data("outAnimation")),a.data("animationDelay")&&(o=a.data("animationDelay")),a.data("outAnimationDelay")&&(s=a.data("outAnimationDelay")),a.css("animation-delay",o+"ms"),s>=t&&(t=s),a.removeClass(i).addClass(n),a.data("outAnimationDelay")?a.css("animation-delay",s+"ms"):a.css("animation-delay","1ms")})}();var i=1;e("#carousel .col-xs-12.active [data-out-animation]").each(function(){var t=e(this);t.data("outAnimationDelay")&&t.data("outAnimationDelay")>=i&&(i=t.data("outAnimationDelay")),i+=1e3,setTimeout(function(){e("#carousel").trigger("slideTo","#"+a.attr("href").split("#").pop()),e("#carousel .col-xs-12").removeClass("active"),e("#"+a.attr("href").split("#").pop()).addClass("active"),e("#thumbs a").removeClass("selected"),a.addClass("selected"),A(),setTimeout(function(){e("#carousel .col-xs-12.active").find(".pie_progress").asPieProgress("start")},1500)},i)})})}function C(){e(".client-carousel").each(function(){var t=e(this);t.find(".cl-carousel").carouFredSel({responsive:!0,circular:!0,auto:!1,width:"100%",items:{visible:1,width:300,height:"auto"},scroll:{fx:"cover-fade"}}),t.find(".cl-thumbs").carouFredSel({responsive:!0,circular:!0,infinite:!1,auto:!1,width:"100%",prev:t.find(".cl-prev"),next:t.find(".cl-next"),items:{visible:{min:1,max:4},width:150},scroll:{items:1}}),t.find(".cl-thumbs a").on("click",function(){return t.find(".cl-carousel").trigger("slideTo","#"+this.href.split("#").pop()),t.find(".cl-thumbs a").removeClass("selected"),e(this).addClass("selected"),!1})})}function x(){if(n.width()+i>=768){var t=e(".isotope .element-item:not(.isotope-hidden) img").height();e(".isotop-filters").css("top",t),e(".isotop-filters").css("height",2*t)}else e(".isotop-filters").css("height","")}function T(){var t=e(".isotope .element-item:not(.isotope-hidden) img").height();e(".isotop-filters").css("height",t);var a=e(".isotope .element-item:not(.isotope-hidden) img").width();e(".isotop-filters").css("width",a)}function k(){e(".isotope.my-height").css("min-height",""),setTimeout(function(){var t=e(".isotope").height();e(".isotope.my-height").css("min-height",t)},500)}function I(){e(".text-transparent").each(function(){var t,a=e(this),i=a.find(".title-box .title"),o=100,s=800,l="#fff";i.data("fontsize")&&(o=i.data("fontsize"),i.css("fontSize",o+"px"),n.width()<992&&n.width()>767?i.css("fontSize",.6*o+"px"):n.width()<1042&&n.width()>991?i.css("fontSize",.4*o+"px"):n.width()<1400&&n.width()>1043?i.css("fontSize",.6*o+"px"):n.width()<1650&&n.width()>1580?i.css("fontSize",.8*o+"px"):e("body").width()<768&&i.css("fontSize",.42*o+"px"),o=parseFloat(i.css("font-size"))),i.data("fontweight")&&(i.css("fontWeight",i.data("fontweight")),s=i.data("fontweight")),i.data("fontfamily")&&(i.css("fontFamily",i.data("fontfamily")),t=i.data("fontfamily")),i.data("bg")&&(a.find(".bg").css("background",i.data("bg")),l=i.data("bg")),a.find(".title-canvas").remove();var r=i.width(),d=i.height();i.after('<canvas class="title-canvas" width="'+r+'" height="'+d+'"></canvas>');var c=a.find(".title-canvas").get(0).getContext("2d");c.fillStyle=l,c.fillRect(0,0,r,d),c.font=s+" "+o+"px "+t,c.fillStyle="#333",c.textAlign="center",c.globalCompositeOperation="destination-out",function(e,t,a,i,n,o){for(var s=t.split(" "),l="",r=0;r<s.length;r++){var d=l+s[r]+" ";e.measureText(d).width>n&&r>0?(e.fillText(l,a,i),l=s[r]+" ",i+=o):l=d}e.fillText(l,a,i)}(c,i.text(),r/2,.87*o,r,o),i.addClass("hidden-title"),a.addClass("loaded")})}function A(){e("#carousel [data-animation]").each(function(){var t=e(this),a="fadeIn",i="fadeOut",n=1;t.data("animation")&&(a=t.data("animation")),t.data("animationDelay")&&(n=t.data("animationDelay")),t.data("outAnimation")&&(i=t.data("outAnimation")),t.removeClass(i),t.closest(".col-xs-12").hasClass("active")&&t.css("animation-delay",n+"ms").addClass("animated").addClass(a)})}function P(){var e=new google.maps.LatLng(50.257587,28.668379),t=new google.maps.Marker({position:e,title:"Business centre"}),a={center:e,zoom:17,draggable:!1,scrollwheel:!1,disableDefaultUI:!0,mapTypeId:google.maps.MapTypeId.ROADMAP},i="<div>st. Kievskaia, 40 Zhytomyr, UKRAINE</div>",n=new google.maps.InfoWindow({content:i}),o=new google.maps.Map(document.getElementById("map-canvas"),a);t.setMap(o),google.maps.event.addListener(t,"click",function(){n.setContent(i),n.open(o,t)})}function D(){if(e(document,window).scrollTop()+r>=e(".portfolio").offset().top){var t=e(".element-item");e.each(t,function(t,a){var i=e(a);setTimeout(function(){i.addClass("show-element")},50*t)})}}function S(){e("#about-us .img-content-box .t1 ").css("height","auto");var t=e("#about-us .img-content-box").height(),a=e("#about-us .img-content-box .t2").innerHeight();e("#about-us .img-content-box .t1 ").css("height",t-a)}function z(){var t=r-l;if(e(".navbar-collapse, #header.menu-sidebar").css("max-height",t),e("#header").hasClass("menu-sidebar")&&n.width()+i>767){var a=e("#header.menu-sidebar .first").height(),o=e("#header.menu-sidebar .third").height();e("#header.menu-sidebar .menu-box").css("height",t-a-o)}}function E(){n.width()+i<768?(e("#filters").insertAfter(e("#portfolio-anchor")),e("#portfolio-anchor").insertBefore(e("#portfolio .sliders"))):e(".wrap-isotop").append(e("#filters"))}function M(){e("#map-canvas").css("height",""),setTimeout(function(){if(n.width()+i>767){var t=e(".fix-map-height").innerHeight();e("#map-canvas").css("height",t)}else e("#map-canvas").css("min-height",300)},400)}function B(){setTimeout(function(){var t=e(".last-posts .img-last-post-box img").height();e(".last-posts .youtube-iframe").css("height",t)},100)}function L(){n.width()+i<992?e("#searchform").insertBefore(e("#blog , .blog-post ")):e(".search-form").append(e("#searchform"))}function O(){n.width()+i>991&&e(".dzsparallaxer").each(function(){var t=e(this).data("options");dzsprx_init(this,t)})}function N(){var t=.6*r;e(".fixed-height").css("height",t+"px")}void 0===i&&(a=(t=e('<div style="width: 50px; height: 50px; overflow: auto"><div/></div>').appendTo("body")).children(),i=a.innerWidth()-a.height(99).innerWidth(),t.remove()),e(document).ready(function(){if(e(".fixed-height").length>0&&N(),navigator.userAgent.match(/iPad|iPhone|Android/i)?e("body").addClass("touch-device"):e("body").addClass("no-touch-device"),e(".heightPrimaryBanner").length>0&&g(),e(".appear-block").length>0&&e(".appear-block").each(function(){var t=e(this);t.addClass("appear-animation"),!n.hasClass("no-csstransitions")&&n.width()+i>767?t.appear(function(){var a=t.attr("data-appear-animation-delay")?t.attr("data-appear-animation-delay"):1;a>1&&t.css("animation-delay",a+"ms"),t.addClass(t.attr("data-appear-animation")),A(),setTimeout(function(){e("#carousel .col-xs-12.active").find(".pie_progress").asPieProgress("start")},1500),setTimeout(function(){t.addClass("appear-animation-visible")},a)},{accX:0,accY:-150}):t.addClass("appear-animation-visible")}),e(".pie_progress").length>0&&e(".pie_progress").asPieProgress({namespace:"pie_progress"}),e("#languages").length>0){e("#languages ul");var t=0;e("#languages ul li").each(function(){t=t+e(this).width()+10}),e("#languages ul").css("width",t)}e(".header-soc-icon").length>0&&(e(".header-soc-icon ul"),t=0,e(".header-soc-icon ul li").each(function(){t=t+e(this).width()+10}),e(".header-soc-icon ul").css("width",t)),e(".menu-box").length>0&&p(),e(".top-menu").length>0&&setTimeout(function(){c()},100),e(".no-touch-device .mc-scroll").length>0&&e(".mc-scroll").mCustomScrollbar({scrollInertia:20}),e(".bg-youtube-video").length>0&&e(".layer .background-video.bg-youtube-video").tubular({videoId:e(".background-video.bg-youtube-video").data("video"),start:3,mute:!0}),e(".bg-video").length>0&&navigator.userAgent.match(/iPad|iPhone|Android/i)&&e(".bg-video").find("video").remove();var a=navigator.userAgent,d=document.documentElement;if(a.match(/MSIE 10.0/i)?d.className=d.className+"ie10":a.match(/rv:11.0/i)?d.className=d.className+"ie11":a.match(/firefox/i)?d.className=d.className+"firefox":a.match(/safari/i)&&(d.className=d.className+"safari"),"devicePixelRatio"in window&&window.devicePixelRatio>=2){e("body").addClass("device-retina");for(var w=e("img.replace-2x").get(),y=0,C=w.length;y<C;y++){var k=w[y].src;k=k.replace(/\.(png|jpg|gif)+$/i,"@2x.$1"),w[y].src=k,e(w[y]).load(function(){e(this).addClass("loaded")})}}e("#header:not(.always-minimized-menu)").length>0&&u(),setTimeout(function(){h()},200),setTimeout(function(){m()},100),e(".header").hasClass("menu-sidebar")&&(e(".top-nav-line").css("display","block"),e(".top-nav-line").append(e(".logo-mini")));var D=e(".header.menu-sidebar");e("#menu-open").on("click",function(){D.hasClass("open-menu")?(D.removeClass("open-menu"),q()):(D.addClass("open-menu"),_())}),e(".menu-close, main").on("click",function(){D.removeClass("open-menu"),e("body").removeClass("no-scroll"),q()});var S,j,F,R,H,W=e(".primary .navbar-toggle");if(e(".primary .navbar-toggle").on("click",function(){W.hasClass("opened")?q():(W.addClass("opened"),_())}),e(".next-sections").on("click",function(t){t.preventDefault();var a=e(this).data("next-box");e("html, body").animate({scrollTop:e(a).offset().top-(l-1)},800)}),e(".table-box").length>0&&setTimeout(function(){v(),b()},300),e(".isotope").length>0){var U=e(".isotope").imagesLoaded(function(){U.isotope({itemSelector:".element-item",layoutMode:"fitRows"})}),V=Isotope.Item.prototype.reveal;Isotope.Item.prototype.reveal=function(){V.apply(this,arguments),e(this.element).removeClass("isotope-hidden")};var $=Isotope.Item.prototype.hide;Isotope.Item.prototype.hide=function(){$.apply(this,arguments),e(this.element).addClass("isotope-hidden")},e(function(){var t=e(".isotope");t.isotope({layoutMode:"fitRows"}),e("#filters .wrap-button").on("click","button",function(){var a=e(this).attr("data-filter");t.isotope({filter:a})})}),e(".button-group .wrap-button").each(function(t,a){var i=e(a);i.on("click","button",function(){i.find(".is-checked").removeClass("is-checked"),e(this).addClass("is-checked")})})}n.on("click",".a-sliders-close",function(){return e(".sliders .sliders-preloader").removeClass("loaded"),setTimeout(function(){e("body, html").animate({scrollTop:e("#portfolio").offset().top-l},550)},0),!1}),n.on("click",".p-scroll","a-sliders-close",function(t){e(this).addClass("start-slide");var a=e(this).attr("href");e(a).length&&setTimeout(function(){e("body, html").animate({scrollTop:e(a).offset().top-l},800)},500),t.preventDefault(),setTimeout(function(){},800)}),e(".wrap-isotop").length>0&&setTimeout(function(){x()},500),e(".isotop-filters .hide-panel").on("click",function(){e(".isotop-filters").addClass("hide-panel"),T()}),e(".isotop-filters .show-panel, .hide-panel h1").on("click",function(){e(".isotop-filters").removeClass("hide-panel"),setTimeout(function(){e(".isotop-filters").css("width",""),x()},100)}),e(".timer").length>0&&e(".timer").countTo(),e(".slider-overlay").length>0&&I(),jQuery(".clickMe").on("click",function(){e("body").find("div.youtube-iframe").removeClass("show-video"),e(this).parent().addClass("show-video"),e(this).addClass("hide"),e(".show-video .iframe").addClass("show-video");var t=jQuery(".show-video .iframe");t.attr("src",t.data("autoplay-src"))}),e(".myTab").length>0&&e(".myTab").tabCollapse(),e("#myTab").length>0&&e("#myTab").tabCollapse(),e("#myTab-2").length>0&&e("#myTab-2").tabCollapse(),e(".tab-content").length>0&&(e("#myTab").on("click",function(){e("#myTab-2").addClass("hide-active"),e("#myTabContent").addClass("active"),e("#myTabContent-2").removeClass("active"),e("#myTab").removeClass("hide-active")}),e("#myTab-2").on("click",function(){e("#myTab").addClass("hide-active"),e("#myTabContent-2").addClass("active"),e("#myTabContent").removeClass("active"),e("#myTab-2").removeClass("hide-active")})),e(".fancybox").length>0&&e(".fancybox").fancybox({openEffect:"elastic",closeEffect:"elastic"}),e(".owl-carousel").length>0&&e(".owl-carousel").owlCarousel({loop:!0,dots:!0,responsiveClass:!0,items:1}),M(),e(".map-canvas").length>0&&setTimeout(function(){P()},1500),e(".selectpicker").length>0&&e(".selectpicker").selectpicker(),e("#header:not('.promo-header')").length>0&&e(window).scroll(function(){var t=r-65;e(window).scrollTop()-t>e("#nav-anchor").offset().top?e("#header").addClass("fixed"):e("#header").removeClass("fixed")}),e(".top-nav-line").length>0&&e(window).scroll(function(){var t=r-69;e(window).scrollTop()-t>e("#nav-anchor").offset().top?e(".top-nav-line").addClass("fixed"):e(".top-nav-line").removeClass("fixed")}),o.on("scroll",function(){e(s).each(function(t){var a=e(this),i=o.scrollTop()+1,n=e(a.attr("href")),l=n.position().top;l<=i&&l+n.innerHeight()>i?(e(s).removeClass("current"),a.addClass("current")):a.removeClass("current")})}),n.on("click",s,function(t){var a=e(this).attr("href");e(a).length&&e("body, html").animate({scrollTop:e(a).offset().top-(l-1)},400),t.preventDefault()}),e(".social-feeds").length>0&&setTimeout(function(){e.post("php/ajax.php",{type:"twitter"},function(t){"success"===(t=e.parseJSON(t)).status?e(".twitter-timeline").html(t.html):console.info("Twitter API error: "+t.api_errors)}),e.post("php/ajax.php",{type:"instagram"},function(t){"success"===(t=e.parseJSON(t)).status?e("#instagram-timeline").html(t.html):console.info("Instagram API error: "+t.api_errors)})},100),e(".fb-page").length>0&&(j="script",F="facebook-jssdk",H=(S=document).getElementsByTagName(j)[0],S.getElementById(F)||((R=S.createElement(j)).id=F,R.src="//connect.facebook.net/en_EN/sdk.js#xfbml=1&version=v2.3",H.parentNode.insertBefore(R,H))),e("#fb-widget ifarme").load(function(){e("#fb-widget ifarme").contents().find("head").append(e("<style type='text/css'>  div {background: #000 !important;} /style>")),e("#fb-widget ifarme ").contents().find("#facebook").css("background","red")}),z(),E(),e(".contact-form").submit(function(t){var a=e(this);t.preventDefault(),e.ajax({type:"POST",url:"php/contact.php",data:a.serialize(),success:function(t){a.find(".form-message").html(t).fadeIn(),a.find(".btn").prop("disabled",!0),e(t).is(".send-true")?setTimeout(function(){a.trigger("reset"),a.find(".btn").prop("disabled",!1),a.find(".form-message").fadeOut().delay(500).queue(function(){a.find(".form-message").html("").dequeue()})},2e3):a.find(".btn").prop("disabled",!1)}})}),e(".notify-me").submit(function(t){var a=e(this),i=a.find(".form-message");t.preventDefault(),e.ajax({url:"php/notify-me.php",type:"POST",data:a.serialize(),success:function(e){switch(a.find(".btn").prop("disabled",!0),i.removeClass("text-danger").removeClass("text-success").fadeIn(),console.log(e),e){case 0:i.html("Your email is sended").addClass("text-success").fadeIn(),setTimeout(function(){a.trigger("reset"),i.fadeOut().delay(500).queue(function(){i.html("").dequeue()})},2e3);break;case 1:i.html("Please enter a valid email address").addClass("text-danger").fadeIn();break;case 2:i.html("This email is already signed").addClass("text-danger").fadeIn(),setTimeout(function(){a.trigger("reset"),i.fadeOut().delay(500).queue(function(){i.html("").dequeue()})},2e3);break;default:i.html("Error request").addClass("text-danger").fadeIn()}a.find(".btn").prop("disabled",!1)}})}),e(".bg-rslides").length>0&&e(function(){e(".bg-rslides").responsiveSlides({speed:1e3,timeout:1e4})}),e(".last-posts").length>0&&B(),L(),e(".login-box").length>0&&e(".go-to-sing-in").on("click",function(){e(".nav-tabs .sing-in-link").trigger("click")}),e(".touch-device").length>0&&e("figure a").click(function(t){if(!e(this).hasClass("selected"))return e("figure a").removeClass("selected"),e(this).addClass("selected"),!1;e(this).removeClass("selected")}),e(".touch-device").length>0&&e(".isotope .element-item a").click(function(t){if(!e(this).hasClass("selected"))return e(".isotope .element-item a").removeClass("selected"),e(this).addClass("selected"),!1;e(this).removeClass("selected")}),e(".no-touch-device .dzsparallaxer").length>0&&O(),e(" .top-menu").length>0&&f(),e("img.svg").each(function(){var t=e(this),a=t.attr("id"),i=t.attr("class"),n=t.attr("src");e.get(n,function(n){var o=e(n).find("svg");void 0!==a&&(o=o.attr("id",a)),void 0!==i&&(o=o.attr("class",i+" replaced-svg")),o=o.removeAttr("xmlns:a"),t.replaceWith(o)},"xml")}),e(".go-play").on("click",function(){var t=e(this).parent().find(".video").get(0),a=e(this).parent();return!1===t.paused?(t.pause(),a.removeClass("play-my-video")):(t.play(),a.addClass("play-my-video")),!1})}),e(window).resize(function(){e(".fixed-height").length>0&&N(),e(".menu-box").length>0&&p(),e(".top-menu").length>0&&c(),e("#header:not(.always-minimized-menu)").length>0&&u(),e("#header.top-menu").hasClass("transform-menu")&&e("#header.top-menu").removeClass("transform-menu"),setTimeout(function(){m()},100),setTimeout(function(){h()},200),e(".table-box").length>0&&setTimeout(function(){v(),b()},300),e(".heightPrimaryBanner").length>0&&g(),e("#team-carousel").length>0&&(y(),w()),e(".client-carousel").length>0&&(e(".client-carousel *").removeAttr("style"),setTimeout(function(){C()},100)),e(".wrap-isotop").length>0&&e("#filters .wrap-button .button:first-of-type").trigger("click"),e(".wrap-isotop").length>0&&setTimeout(function(){x()},100),e(".isotope").length>0&&k(),e(".slider-overlay").length>0&&I(),M(),e(".map-canvas").length>0&&setTimeout(function(){P()},500),e("#about-us").length>0&&S(),z(),E(),e(".fb-page").length>0&&(e(".fb-page").attr("data-width",e(".social-feeds-box").width()),FB.XFBML.parse()),e(".no-touch-device .a-sliders-close").length>0&&e(".a-sliders-close").trigger("click"),e(".last-posts").length>0&&B(),L(),e(".no-touch-device .dzsparallaxer").length>0&&O(),e(" .top-menu").length>0&&f(),e(".isotop-filters").hasClass("hide-panel")&&(e(".isotop-filters").css("height"," "),setTimeout(function(){T()},300),console.log("sdsd"))}),window.addEventListener("orientationchange",function(){e(".a-sliders-close").trigger("click")},!1),e(window).load(function(){if(e(".grid").length>0&&e(".grid").masonry({itemSelector:".grid-item"}),setTimeout(function(){e(".preloader").fadeOut("slow",function(){e(this).remove()})},200),e("#team-carousel").length>0&&(setTimeout(function(){y()},100),w()),e(".client-carousel").length>0&&C(),e(".social-inp").length>0){var t=location.href;e(".shared-btn").each(function(){new GetShare({root:e(this),network:e(this).data("network"),button:{text:""},share:{url:t,message:"Link to "+t+" "}})})}e(".tlt").length>0&&e(function(){e(".tlt").textillate()}),e(".tlt-2").length>0&&e(function(){e(".tlt-2").textillate({in:{sync:!0}})}),e("#about-us").length>0&&setTimeout(function(){S()},500),e(".twitter-timeline").length>0&&setTimeout(function(){e(".twitter-timeline ul").owlCarousel({loop:!0,dots:!1,margin:10,nav:!0,navText:["<i class='fa fa-chevron-circle-left'></i>","<i class='fa fa-chevron-circle-right'></i>"],responsive:{0:{items:1}}}),e(".twitter-timeline ul").addClass("show-carousel")},1500),e(".isotope").length>0&&k(),e("main:not(.promo) .isotope.beginning-now").length>0&&D()}),e(window).scroll(function(){var t;e("main:not(.promo) .isotope").length>0&&D(),e("main:not(.promo) .team-element:not(.show-team-element)").length>0&&(t=e("#team-carousel").height(),e(document,window).scrollTop()+r>=e("#team").offset().top+t/2&&e(".team-element").addClass("show-team-element"))});var j={37:1,38:1,39:1,40:1};function F(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}function R(e){if(j[e.keyCode])return F(e),!1}function _(){window.addEventListener&&window.addEventListener("DOMMouseScroll",F,!1),window.onwheel=F,window.onmousewheel=document.onmousewheel=F,window.ontouchmove=F,document.onkeydown=R}function q(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",F,!1),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}e("a.vid").YouTubePopUp(),e(function(){e(".popup-with-form").magnificPopup({type:"inline",preloader:!1,focus:"#name",callbacks:{beforeOpen:function(){e(window).width()<700?this.st.focus=!1:this.st.focus="#name"}}})}),document.getElementById("fileMulti").addEventListener("change",function(e){var t=e.target.files;document.getElementById("outputMulti").innerHTML="";for(var a,i=0;a=t[i];i++){var n=new FileReader;n.onload=function(e){return function(t){var a=document.createElement("span");a.innerHTML=['<img class="img-thumbnail" src="',t.target.result,'" title="',escape(e.name),'"/>'].join(""),document.getElementById("outputMulti").insertBefore(a,null)}}(a),n.readAsDataURL(a)}},!1)}();const views=document.getElementById("views");let viewsValue=0;setInterval(()=>{views.innerHTML=`$${viewsValue}`,viewsValue+=25},300);