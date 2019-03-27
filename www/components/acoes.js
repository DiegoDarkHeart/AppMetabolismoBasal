$(document).on('click','#btnFinalisar',function(){
  var atividade = $("input[name='optradio']:checked").val();

  var idade = parseFloat($("#idade").val());
  var altura = parseFloat($("#altura").val());
  var peso = parseFloat($("#peso").val());

  var sexo = $("#sexo option:selected").val();
  
  switch(atividade){
    case 1: atividade = parseFloat(1.2); break;
    case 2: atividade = parseFloat(1.375); break;
    case 3: atividade = parseFloat(1.55); break;
    case 4: atividade = parseFloat(1.725); break;
    case 5: atividade = parseFloat(1.9); break;
  }
  if(sexo == h){
  /*Cálculo para Homens:*/var MB = atividade * {66 + [(13.7 * peso) + ( 5 * altura) - (6.8 * idade)]}
  }
  else{ 
  /*Cálculo para Mulheres:*/ MB = atividade * {655 + [(9.6 * peso) + (1.8 * altura) - (4.7 * idade)]}
  }
});
