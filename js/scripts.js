$(document).ready(function(){   //BEGIN DOM
    
//text()
var textH1 = $('#main_h1');
    textH1.text("Changed text by method text");

//hide()- Прятать
//delay()-задержка
//show() - показать
var forHeader = $('#forheader');
 //   forHeader.hide(3000).delay(2000).show(2000);
    
//html()
var htmlObj = $('#moto_models');
 //   htmlObj.html("<li>NeW element N1</li><li>NeW element N2</li><li>NeW element N3</li><li>NeW element N4</li>");
    
//fadeIn()  fadeOut()

var socialLinks = $('.social_links');
//socialLinks.fadeOut(3000).fadeIn(5000);
    
//fadeTo()

//textH1.fadeTo(4000,0.3);

//slideUp()
//slideDown()

var headImg = $('#forheader img');
 
 //headImg.attr("height",300);   
  
  //width="200" height="125"
  //css()   animate()
  var motoImg = $('#div_for_img img');
    var motoImgDiv = $('#div_for_img');

  motoImg.css({"border" : "1px solid #ff0000"});
  motoImg.animate({"width":"400px",
                    "height":"250px"
                  },4000);
  
  motoImgDiv.before("<p><b>Method before</b></p>");
  motoImgDiv.after("<p><b>Method after</b></p>");
  
    
}); //END DOM