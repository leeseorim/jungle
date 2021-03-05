

$(function() {
    $(window).scroll(function () { 
        var scrollValue = $(document).scrollTop(); 
        console.log(scrollValue); 
    
    if(scrollValue > 1390){
        $(".side_scroll").mousewheel(function(event, delta) {
            this.scrollLeft -= (delta * 10);
            event.preventDefault();
          });
    }else{
        $(".side_scroll").mousewheel(function(event, delta) {
            this.scrollRight -= (delta * 10);
            event.preventDefault();
          });
    }


    });


});




