// JS script for scrolltoview - uses element IDs to identify the click element and the item to scroll to
//
//Sample clickable element - NOTE the HREF attribute value
 <a id="testclick" href="javascript:void(0)"><h4>selected works</h4></a>  
    let testclick = document.querySelector("#testclick");
    
    let projlinkFourth = document.querySelector("#proj4");
    
    testclick.addEventListener("click", scrollfunc, false);
    function scrollfunc() {
      projlinkFourth.scrollIntoView({ behavior: "smooth" });
    }
