console.log("[!] Property of Azury Industries")

if(typeof document !== 'undefined') {
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            document.querySelector(".nav-items").style.display = "flex";
            document.querySelector(".nav-items").style.position = "fixed";
        } else {
            document.querySelector(".nav-items").animate([
                { transform: 'translateY(-300%)' },
                { transform: 'translateY(-120%)' }
            ], {
                duration: 500,
                easing: 'ease-in-out',
                fill: 'forwards'
            });
            document.querySelector(".nav-items").style.display = "none";
            document.querySelector(".nav-items").style.position = "relative";
        }
    }
}
