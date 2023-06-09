
//******************************NAVIGATION SCROLL*********************

let navoffset = $("nav").innerHeight();

$(document).ready(function(e){
      $("body, html").animate({scrollTop: 0}, 100, "easeInOutQuad");
});
// console.log(navoffset)

$("nav a[href^='#']").click(function(e){
     e.preventDefault();
    
     
    let idPosNav= $($(this).attr("href")).offset().top - navoffset;   
    $("body, html").animate({scrollTop: idPosNav}, 1000, "easeInOutQuad");

});

//***********************************ANIMATED TEXT PARAGRAPH *********/
$("#introTitle").delay(250).animate({
      opacity: 1}, 1000,"easeInQuad");
$("#intro-p1").delay(1000).animate({
      opacity: 1}, 2000, "easeInQuad");
$(".line1").delay(2000).animate({
      opacity: 1}, 2000, "easeInQuad");
$(".line2").delay(4500).animate({
      opacity: 1}, 2000, "easeInQuad");
$("#art1").delay(3000).animate({
      opacity: 1}, 2000, "easeInQuad");
$("#intro-p2").delay(4000).animate({
      opacity: 1}, 1000 ,"easeInQuad");
$("#art2").delay(5500).animate({
      opacity: 1}, 2000, "easeInQuad");
$("#bead6").delay(6500).animate({
      opacity: 1}, 2000, "easeInQuad");
      

      //***********************************HAMBURGER MENU *********/

$("#hamburger").click(function(){
     
      $(this). attr("src", "images/menu-animated.gif")
      $("#feedback").html("Click to Reset");
})  ;  

$("#feedback").click(function(){
      console.log("Feedback Click!");

      $("#hamburger"). attr("src", "images/menu-static.gif")
      $("#feedback").html("Click Menu to Animate");
})  ;    

 //***********************************SCROLL PAGE HIGHLIGHT *********/
//runs a fuction when we scroll
 $(window).scroll(function()
 {
      let contentTopPos = $(window).scrollTop() + navoffset + 5;

      $("section").each(function(){
            //finds the section id
            let secID = $(this).attr("id");
            //find the top position of our sections
            let secTopPos = $(this).offset().top;

            let secBottomPos = secTopPos + $(this).innerHeight();

            // if current section is visible in the viewport

            if(contentTopPos >= secTopPos && contentTopPos <= secBottomPos) {
                 $("nav a[href^='#" + secID + "']").addClass("active")
                
                  //  console.log(secID);
            } else {
                  $("nav a[href^='#" + secID + "']").removeClass("active")
                  
            }

         
      });
     
 })


 // *****************************JAVSCRIPT ANIMATIONS*********************

 
function animateBounce() {
    $("#head1").animate({ fontSize: "26px" }, 1000)
           .animate({ fontSize: "22px" , color : "green" }, 1000, animateBounce);
  }
  animateBounce();

$(".header1").animate({opacity:"1", marginTop:"0px"},1500, "easeInOutQuad");
$("#bx1").delay(500).animate({opacity:"1", marginTop:"0px"},500, "easeInQuad");
$("#bx2").delay(1000).animate({opacity:"1", marginTop:"0px"},500, "easeInQuad");
$("#bx3").delay(1200).animate({opacity:"1", marginTop:"0px"},500, "easeInQuad");


// Button 1
$("#btnOne").click(function(){
    $("#one1").animate({width: "150px",
     height: "150px",
    marginLeft: "50px",
    opacity: "60%"}, 1000, "easeOutExpo" );
 })

 $("#re1").click(function(){
    $("#one1").animate({width: "200px",
        height: "100px",
    marginLeft: "20px",
    opacity: "1"} );
 })

//  Button 2
 $("#btnTwo").click(function(){
    $("#two2").animate({
       marginLeft: "0",
    opacity: "1"}, 1500, "easeInQuad" );
 })

 $("#re2").click(function(){
    $("#two2").animate({
    marginLeft: "20px",
    opacity: "0"}, 1500, "easeOutExpo" );
 })

//  Button 3
$("#btnThree").click(function(){
    $("#three3").animate({
        
        marginLeft:"85%"
    }, 1000, "easeInQuad")
})
$("#btnThree").click(function(){
    $("#three3").animate({
        
        marginLeft:"20px"
    },1000, "easeOutQuad")
})

//************************************Preloader Star Animation********************


$("#preloader").click(function(){
      console.log("click")
     
      $(".beadbox2").animate({
            opacity:"1"
      },2000, "easeInQuad");
      $("#preloader"). attr("src", "./images/rocket-preloader.gif")

      $("#rocketbtn").text("Abort Mission!");      
      $("#rocketbtn").addClass("rocketactive");
})  ;  

$("#rocketbtn").click(function(){
      $(".beadbox2").animate({
          opacity: "0"
      }, 1000, "easeOutQuad");
      $("#preloader").attr("src", "./images/rocket-preloader.png");
      $("#rocketbtn").text("Click the Pencil");
      $("#rocketbtn").removeClass("rocketactive");
  });