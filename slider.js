// Javascript slide code

$(document).ready(function(){

$("#link img:eq(0)").addClass("ativo").show();

var texto = $(".ativo").attr("alt");
$("#link").prepend("<p>" + texto +"</p>");

  setInterval(link,4000);

  function link(){
   if($(".ativo").next().size()){
$(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
var texto = $(".ativo").attr("alt");
$("#link p").hide().html(texto).delay(500).fadeIn();
  }else{
$(".ativo").fadeOut().removeClass("ativo");
$("#link img:eq(0)").fadeIn().addClass("ativo"); 

var texto = $(".ativo").attr("alt"); 
$("#link p").hide().html(texto).delay(500).fadeIn();
  }

  }

})
