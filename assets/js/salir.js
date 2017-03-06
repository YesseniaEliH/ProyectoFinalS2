
  function translate(){
    var desp = document.getElementById("despedida");
    desp.textContent = "Hasta Codificador LUEGO :)";
  }

  var tiempo= setInterval(function(){translate()},1000);
