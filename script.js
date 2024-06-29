const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var fixed = document.querySelector('#fixed-image')
var elem1 = document.querySelector('#elem1')
var elemC = document.querySelector('#elem-container')

var elems = document.querySelectorAll(".elem")


elemC.addEventListener("mouseenter", function(){
    fixed.style.display="block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display="none"
})


elems.forEach((e)=>{
        e.addEventListener("mouseenter", function(){
            var image = e.getAttribute('data-image')
            fixed.style.backgroundImage=`url(${image})`
        })
        
})

