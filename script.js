var tl=gsap.timeline();

tl.from("#nav-part2 h3,#nav-logo,#nav-part1 h3,#nav-part2 #button ",{ // stagger in elements ke given order ke hisab se nhi lgta balki jo main index.html file h usme jo in elements ka order h uske hisab se lgta h 
    y: -100,
    opacity:0,
    duration: .5,
    delay:.1,
    stagger:0.3,
   


})

tl.from("#content h1",{
    y:100,
    opacity:0,
    duration:.5,
    delay:.1,
    stagger:.2,
    

})

tl.from("#content img",{
    opacity:0,
    scale:0,
    duration:1,

})

tl.from("#content h5",{
   
    opacity:0,
    scale:0,
    
})

tl.from("#content h5",{
    y:20,
    yoyo:true,
    duration: .5,
    repeat:-1,
})