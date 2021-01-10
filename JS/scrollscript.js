$("document").ready(function() {
  
    $(".bottomclick").click(function() {
        let $target = $(".activeproj").next(".sel-work");
        //console.log('test %s', $target);
        if ($target.length == 0 ) 
            $target = $(".sel-work:first"); 
        
        //Question: Why is document.documentElemeent.... needed vs just a more concise reference? like div or some other identifier?
        $([document.documentElement, document.body]).animate({
        scrollTop: $($target).offset().top
        }, 1200);
        
        $('.activeproj').removeClass('activeproj');
        $target.addClass('activeproj');
    });
    $(".topclick").click(function() {
        let $target = $(".activeproj").prev(".sel-work");
        if ($target.length == 0 )
            $target = $(".sel-work:first");

        $([document.documentElement, document.body]).animate({
        scrollTop: $($target).offset().top
        }, 800);
        
        $('.activeproj').removeClass('activeproj');
        $target.addClass('activeproj');
    })
});