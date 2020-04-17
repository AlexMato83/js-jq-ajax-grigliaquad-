// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random
// da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
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
      },
      error : function (richiesta,stato,errori){
        console.log("l'errore è : " + errori);
      }
    });
  });

});
