$(document).ready(function($) {
    //hide all panels
    var panels = $('.accordion > dd ');
    panels.hide();

    //on click of panel title
    $('.accordion > dt > a ').click(function() {
        var $this = $(this);
        //slide up all panels that might be open
        panels.slideUp();
        //slide down the selected panel
        $this.parent().next().slideDown();

        return false;
    })

    //slide down the target panel
})