// se utente clicca 2 volte sullo stesso rettangolo lo mando
//  a ca… gli dico che non si può;
// generare dinamicamente la griglia dei quadrati;
// Curo per bene l’output, creando un layout carino;
// varie che vi vengono in mente per sperimentare;


$(document).ready(function(){
    // creo evento click sui blocchi
  $(".blocco").click(function(){
    if ($(this).hasClass("giallo", "verde")){
      alert("mi scusi buon uomo ma questo blocco è già stato cliccato, veda di non fare il furbo");
    } else {
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
    }

  });

});
