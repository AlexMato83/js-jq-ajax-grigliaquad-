

// Il numero ottenuto appare al centro del quadrato
$(document).ready(function(){
  // creo evento click sui blocchi
  $(".blocco").click(function(){
    // salvo il blocco su cui clicco
    var bloccoCliccato = $(this);
    // richiamo l'api per generare un numero
    $.ajax({
      url: 'https://flynn.boolean.careers/exercises/api/random/int',
      method : "GET",
      success : function(data,stato){
        console.log(data);
        // salvo il numero generato
        var numeroGenerato = data.response;
        console.log(numeroGenerato);
        $(bloccoCliccato).append(numeroGenerato);
        if (numeroGenerato <= 5){
          bloccoCliccato.addClass("giallo");
        } else {
          bloccoCliccato.addClass("verde");

        }
      },
      error : function (richiesta,stato,errori){
        console.log("l'errore è : " + errori);
      }
    });
  });

});
