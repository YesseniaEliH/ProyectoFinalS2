var datos = [ { nombre : "Meche", apellido : "Zubieta", promocion : "1ra Promoción", estado : "Trabajando" },
{ nombre : "Arabela", apellido : "Rojas", promocion : "2da Promoción", estado : "Trabajando" },
{ nombre : "María", apellido : "Rosan", promocion : "2da Promoción", estado : "Trabajando" },
{ nombre : "Guadalupe", apellido : "Racio", promocion : "3ra Promoción", estado : "Trabajando" },
{ nombre : "Sara", apellido : "Casa", promocion : "3da Promoción", estado : "Trabajando" },
{ nombre : "Daniella", apellido : "Duran", promocion : "4ta Promoción", estado : "Trabajando" },
{ nombre : "Michelle", apellido : "Seguil", promocion : "5ta Promoción", estado : "Trabajando" },
{ nombre : "Diana", apellido : "Navarro", promocion : "5ta Promoción", estado : "Trabajando" } ];

function imprimirDatos(){
  var m = document.getElementById("mostrar");
    datos.forEach(function(elemento){
      m.innerHTML += "<section style='background-color: #F5C021; margin:15px; padding:30px; width: 180px; float:left;border: 1px solid black'> " +
                                "Nombre: " + elemento.nombre+ "<br/>"+
                                "Apellido: " + elemento.apellido+ "<br/>" +
                                "Promoción: " +  elemento.promocion+ "<br/>" +
                                "Estado: " + elemento.estado+ "</section>"
    });

}
imprimirDatos();
