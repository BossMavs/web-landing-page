var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

jQuery(document).ready(function(){
    jQuery(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            }
        }
    });
}); 

function loadMore() {
    jQuery.ajax({
        type: "GET",
        url: "https://api.thecatapi.com/v1/images/search", 
        success: function(result){
            var carouselItem = jQuery('.owl-stage'); 
            carouselItem.append("");
            jQuery('.owl-carousel').trigger('add.owl.carousel', ['<div class="owl-item"><img src='+ result[0].url+' alt="" class="img-responsive"></div>']).trigger('refresh.owl.carousel');
        }
    });
}