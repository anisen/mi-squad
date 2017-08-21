
function Squad(nombreApellido,edad,hobbies,foto){
    this.nombreApellido=nombreApellido;
    this.edad=edad;
    this.hobbies=hobbies;
    this.foto=foto;
    this.comentar=document.getElementsByTagName("input");
        /*var imprimir=document.getElementById("todos");
        imprimir.appenchild(comentario);*/
        
    }
    function cajaDeComentario(){
        var coment=document.getElementById("comentarios").value;
        var guardar=document.getElementById("todos");
        guardar.innerHTML+=coment+"<br>";
        coment="";
    }

    function megusta(){
        var spam=document.getElementById("guardar");
        var click=document.getElementById("megusta");
        for(var i =0; i<=click.length; i++){
            return[i];
        }
        spam.innerHTML=i;
    };


    var acomulador=[];

    var jo=new Squad("Josefa Herrera",21,["bailar pop","ver series","codear"],"<img align=left style=margin:9px src=jo.jpeg>");
    acomulador.push(jo);
    var nanynn=new Squad("anayn Pavez",27,["dibujar","pasteleria","andar en bici"],"<img align=left style=margin:9px src=nanynn.jpeg>");
    acomulador.push(nanynn);
    var muri=new Squad("Muriel Bahamonde",25,["fumar hierba","jugar pool","navegar en internet"],"<img align=left style=margin:9px src=muri.jpeg>");
    acomulador.push(muri);
    var simo=new Squad("Simona Ulloa",29,["ver Netflix","escuchar musica","tomar chela"],"<img align=left style=margin:9px src=simo.jpeg>");
    acomulador.push(simo);
    var caro=new Squad("Carolina Quintana",31,["patinar","comer sushi","acariciar a su gata"],"<img align=left style=margin:9px src=caro.jpeg>");
    acomulador.push(caro);
    var mai=new Squad("Maibeet Torres",15,["juegos de RPG","leer","andar en bicicleta"],"<img align=left style=margin:9px src=mai.jpeg>");
    acomulador.push(mai);
    var dulce=new Squad("Dulce ",28,["escalar montaña","leer","cocinar"],"<img align=left style=margin:9px src=dulce.jpeg>");
    acomulador.push(dulce);

    var algo=document.getElementById("algo");
    var caja=document.getElementsByClassName("coment");
    acomulador.forEach(function(elemento){
        algo.innerHTML+=elemento.foto+"<br>"+"Nombre: "+elemento.nombreApellido+"<br>"+ "Edad:"+elemento.edad+"<br>"+"Hobbies:";
        
        elemento.hobbies.forEach(function(x){"<ul>"
            algo.innerHTML+="<li>"+x+"</li>";
            "</ul>"});
        algo.innerHTML+=elemento.comentar+"<br>"+"<br>"+"<hr>";
        /*algo.innerHTML+=boton+"<br>"+"<hr>";*/
    });

/*acomulador.innerHTML+=cajaDeComentario();*/