$(

    function () {
        new WOW().init();
          }

);

// Set the date we're counting down to
var countDownDate = new Date("July 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


function test() {

     var s = $(window).scrollTop(),
        d = $(document).height(),
        w = $(window).width(),
        c = $(window).height();

    var scro = (s / (d - c)) * 100;
    alert(scro);
}

/*------------------------ Navbar-bg-color ------------------------------*/

window.onscroll = function () {


    var s = $(window).scrollTop(),
        d = $(document).height(),
        w = $(window).width(),
        c = $(window).height();

    var wid = document.getElementById("logo");
    var scro = (s / (d - c)) * 100;
    var navbg = document.getElementsByClassName("navbar-light");
    var scrollbtn = document.getElementById("scroll-btn");
    document.getElementById("progress-bar").style.width = scro + "%";
    

    if (w > 750) {

        if (scro < 22) {
            $(navbg).css('background-color', '#9A97AF')
        } else if (scro < 44.1) {
            $(navbg).css('background-color', '#07a0c3')
        } else if (scro < 70.1) {
            $(navbg).css('background-color', '#676DE5')
        } else if (scro < 92.5) {
            $(navbg).css('background-color', '#51CC99')
        } else if (scro < 100) {
            $(navbg).css('background-color', '#BF51CC')
        }
    } else {

        if (scro < 23) {
            $(navbg).css('background-color', '#9A97AF')
        } else if (scro < 45 ) {
            $(navbg).css('background-color', '#07a0c3')
        } else if (scro < 70) {
            $(navbg).css('background-color', '#676DE5')
        } else if (scro < 88) {
            $(navbg).css('background-color', '#51CC99')
        } else if (scro < 100) {
            $(navbg).css('background-color', '#BF51CC')
        }
    }
    if ( scro < 10 ){
        
        $(scrollbtn).css('display' , 'none')
    } else {
        
         $(scrollbtn).css('display' , 'block')
    }
}

/*------------------------- Navbar-sm ------------------------------------*/

function collbutton() {

    if ($('.navbar-toggler').is(':visible')) {
        var toggleButton = document.getElementById("toggle-button");
        toggleButton.click();
    }

}

function timing() {

    collbutton();
    setTimeout(empty, 500);
}

function empty() {

    document.querySelector('#collapsiblenavbar > ul > form > input').value = "";
}

/*------------------------- ScrollToTop ------------------------------------*/

function scrolltotop() {
    
    window.scrollTo(0,0);
}