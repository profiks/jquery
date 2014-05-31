$(document).ready(function(){   //BEGIN DOM
    
//calendar=====================================  
$("#datepicker").datepicker();

//slider diapazon===================================
 $("#slider-range").slider({
range: true,
min: 0,
max: 500,
//for default
values: [ 50, 300 ],
slide: function(event,ui){
$("#amount").val("$"+ui.values[0]+ "-$"+ui.values[1]);
}
});
$("#amount").val("$" + $("#slider-range").slider("values",0) +
"-$"+$("#slider-range").slider("values",1) );
    
    
    

    
}); //END DOM