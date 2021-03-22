
      var menu= document.getElementById("menu");
      menu.style.maxHeight="0px";
      function menushow()
      {
       if(menu.style.maxHeight=="0px")
       { 
         menu.style.maxHeight="120px"
       }
       else 
       {
         menu.style.maxHeight="0px"
       }};



 var TxtType = function(el, toRotate, period) {
       this.toRotate = toRotate;
       this.el = el;
       this.loopNum = 0;
       this.period = parseInt(period, 10) || 2000;
       this.txt = '';
       this.tick();
       this.isDeleting = false;
   };

   TxtType.prototype.tick = function() {
       var i = this.loopNum % this.toRotate.length;
       var fullTxt = this.toRotate[i];

       if (this.isDeleting) {
       this.txt = fullTxt.substring(0, this.txt.length - 1);
       } else {
       this.txt = fullTxt.substring(0, this.txt.length + 1);
       }

       this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

       var that = this;
       var delta = 200 - Math.random() * 100;

       if (this.isDeleting) { delta /= 2; }

       if (!this.isDeleting && this.txt === fullTxt) {
       delta = this.period;
       this.isDeleting = true;
       } else if (this.isDeleting && this.txt === '') {
       this.isDeleting = false;
       this.loopNum++;
       delta = 500;
       }

       setTimeout(function() {
       that.tick();
       }, delta);
   };

   window.onload = function() {
       var elements = document.getElementsByClassName('typewrite');
       for (var i=0; i<elements.length; i++) {
           var toRotate = elements[i].getAttribute('data-type');
           var period = elements[i].getAttribute('data-period');
           if (toRotate) {
             new TxtType(elements[i], JSON.parse(toRotate), period);
           }
       }
       // INJECT CSS
       var css = document.createElement("style");
       css.type = "text/css";
       css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
       document.body.appendChild(css);
   };



   $(document).on("scroll", function() {
     var pageTop = $(document).scrollTop();
     var pageBottom = pageTop + $(window).height();
     var tags = $(".tag");

     for (var i = 0; i < tags.length; i++) {
     var tag = tags[i];

     if ($(tag).position().top < pageBottom) {
     $(tag).addClass("visible");
     } else {
     $(tag).removeClass("visible");
     }
     }
     });

    //  $(document).scroll(function() {
    //     if ($(this).position().top > 200) {
    //       $('.back-to-top').fadeIn('slow');
    //     } else {
    //       $('.back-to-top').fadeOut('slow');
    //     }
    //   });
       $('.back-to-top').click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 2000, 'easeInOutExpo');
        return false;
      });
     
      var contctForm = document.getElementsByClassName("contact-form");
      contctForm.addClass("contact-form-hide");
      
      // function showContact(){
      //   this.toggleClass("contact-form-hide");
      // };

