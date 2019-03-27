$(document).on('click','#btnFinalisar',function(){
  var var_name = $("input[name='optradio']:checked").val();

  var idade = parseFloat($("#idade").val());
  var altura = parseFloat($("#altura").val());
  var peso = parseFloat($("#peso").val());

  var sexo = $("#sexo option:selected").val();
  
});
