$(document).on('ready',function(){
    $('#divn1').hide();
    $('#divn2').hide();
    $('#divn3').hide();
    $('#divn4').hide();
    $('#divn5').hide();
    $('#divn6').hide();

    

    $('#div21').on('click',function(e){
        e.preventDefault();
        $('#divn1').slideToggle(500);
    })

    $('#div22').on('click',function(e){
        e.preventDefault();
        $('#divn2').slideToggle(500);
    })

    $('#div23').on('click',function(e){
        e.preventDefault();
        $('#divn3').slideToggle(500);
    })

    $('#div24').on('click',function(e){
        e.preventDefault();
        $('#divn4').slideToggle(500);
    })

    $('#div25').on('click',function(e){
        e.preventDefault();
        $('#divn5').slideToggle(500);
    })

    $('#div26').on('click',function(e){
        e.preventDefault();
        $('#divn6').slideToggle(500);
    })
    $('#content').hide();
    $(window).on('load',function(){
        $('#content').delay(800);
        $('#content').fadeIn(1000);
    })

    




})
var $liverpool = $('#Liverpool');
var $real = $('#real');
var $bayern = $('#Bayern');
var $barcelona = $('#Barcelona');
var $ronaldo = $('#Ronaldo');
var $united = $('#UTD');
$('#demo').hide();
$('#info').hide();
$('#touch1').on('click',function(){
     $('#playerinfo').append($real);
     $('#info').slideToggle(500);
     $liverpool.remove();
     $bayern.remove();
     $barcelona.remove();
     $ronaldo.remove();
     $united.remove();

     

})
// $('.touch1').on('mouseout',function(){
//     $('#playerinfo').remove($real);
//     $('#info').slideUp(500);
// })



$('#touch2').on('click',function(){
    $('#playerinfo').append($liverpool);
    $('#info').slideToggle(500);
    // $('#playerinfo').remove($real);
    $bayern.remove();
    $barcelona.remove();
    $ronaldo.remove();
    $united.remove();
    $real.remove();
    
})



$('#touch3').on('click',function(){
    $('#playerinfo').append($bayern);
    $('#info').slideToggle(500);
    $liverpool.remove();
    $barcelona.remove();
    $ronaldo.remove();
    $united.remove();
    $real.remove();
})



$('#touch4').on('click',function(){
    $('#playerinfo').append($barcelona);
    $('#info').slideToggle(500);
    $liverpool.remove();
    $bayern.remove();
    $ronaldo.remove();
    $united.remove();
    $real.remove();
})



$('#touch5').on('click',function(){
    $('#playerinfo').append($ronaldo);
    $('#info').slideToggle(500);
    $liverpool.remove();
    $bayern.remove();
    $barcelona.remove();
    $united.remove();
    $real.remove();
})


$('#touch6').on('click',function(){
    $('#playerinfo').append($united);
    $('#info').slideToggle(500);
    $liverpool.remove();
    $bayern.remove();
    $barcelona.remove();
    $ronaldo.remove();
    $real.remove();
})

