document.getElementById('enviar_datos').addEventListener('click', function(){
    let nomyape = document.getElementById('name').value;
    let titulo = document.getElementById('titulo').value;
    let mail = document.getElementById('mail').value;
    let tel = document.getElementById('telefono').value;
    let celular = document.getElementById('celular').value;
    let dir = document.getElementById('direccion').value;
    let cpostal = document.getElementById('cpostal').value;
    let localidad = document.getElementById('localidad').value;
    //let fec_nac = document.getElementById('fec_nac').value;
    let ciudad_nac = document.getElementById('ciudad_nac').value;
    let genero = esGenero();
    let nacionalidad = document.getElementById('nacionalidad').value;
    let estado = esEstado();
    let sitioweb = document.getElementById('sitioweb').value;

    let puesto = document.getElementById('puesto').value;
    let empleador = document.getElementById('empleador').value;
    let localjob = document.getElementById('local_job').value;
    let descripcion = document.getElementById('descripcion').value;

    if (estaHabilitada('habil1')){
            document.getElementById('final_habil1').style.display = "block";
        }
    if (estaHabilitada('habil2')){
            document.getElementById('final_habil2').style.display = "block";
        }
    if (estaHabilitada('habil3')){
            document.getElementById('final_habil3').style.display = "block";
        }
    if (estaHabilitada('habil4')){
            document.getElementById('final_habil4').style.display = "block";
        }
    if (estaHabilitada('habil5')){
            document.getElementById('final_habil5').style.display = "block";
        }
    if (estaHabilitada('habil6')){
            document.getElementById('final_habil6').style.display = "block";
        }
    if (estaHabilitada('habil7')){
            document.getElementById('final_habil7').style.display = "block";
        }    
    if (estaHabilitada('habil8')){
            document.getElementById('final_habil8').style.display = "block";
        }    
   
    let desc_habil = document.getElementById('desc_habil').value;


    document.getElementById('final_nomyape').innerHTML = nomyape;
    document.getElementById('final_titulo').innerHTML = titulo;
    document.getElementById('final_email').innerHTML = "Correo Elecrónico: " + mail;
    document.getElementById('final_telefono').innerHTML = "Teléfono: " + tel;
    document.getElementById('final_celular').innerHTML = "Celular: "+ celular;
    document.getElementById('final_direccion').innerHTML = "Dirección: "+ dir;
    document.getElementById('final_cpostal').innerHTML = "Codigo Postal: "+ cpostal;
    document.getElementById('final_localidad').innerHTML = "Localidad: " + localidad;
    //document.getElementById('final_fec_nac').innerHTML = fec_nac;
    document.getElementById('final_ciudad_nac').innerHTML = "Lugar de nacimiento: " + ciudad_nac;
    document.getElementById('final_genero').innerHTML = "Genero:" + genero;
    document.getElementById('final_nacionalidad').innerHTML = "Nacionalidad: " + nacionalidad;
    document.getElementById('final_civil').innerHTML = "Estado Civil: " + estado;
    document.getElementById('final_web').innerHTML = "Sitio Web: " + sitioweb;

    document.getElementById('final_puesto').innerHTML = "Puesto: " + puesto;
    document.getElementById('final_empleador').innerHTML = "Empleador: " + empleador;
    document.getElementById('final_localjob').innerHTML = "Ciudad: " + localjob;
    document.getElementById('final_descripcion').innerHTML = "Descripcion:  </br>" + descripcion;

    document.getElementById('final_habil').innerHTML = "Descripcion o aclaración:  </br>" + desc_habil;

    document.getElementById('resultado_datos').style.display = "block";
}) 

function esGenero(){
    if(document.getElementById('femenino').checked){
        return "Femenino";
    }
    if(document.getElementById('masculino').checked){
        return "Masculino";
    }
    if(document.getElementById('otro').checked){
        return "Otro";
    }
}

function esEstado(){
    if(document.getElementById('soltero').checked){
        return "Soltero";
    }
    if(document.getElementById('casado').checked){
        return "Casado";
    }
    if(document.getElementById('viudo').checked){
        return "Viudo";
    }
    if(document.getElementById('divorciado').checked){
        return "Divorciado";
    }
}

function estaHabilitada(habil){
    if(document.getElementById(habil).checked){
        return true;
    } else {
        return false;
    }
}

document.getElementById('siguiente2').addEventListener('click', function(){
    document.getElementById('segunda_exp').style.display = "block";
    document.getElementById('botonera1').style.display = "block";
    document.getElementById('siguiente3').style.display = "block";
    document.getElementById('cancelar2').style.display = "block";
})

document.getElementById('cancelar2').addEventListener('click', function(){
    document.getElementById('segunda_exp').style.display = "none";
    document.getElementById('siguiente3').style.display = "none";
    document.getElementById('cancelar2').style.display = "none";
})

document.getElementById('siguiente3').addEventListener('click', function(){
    document.getElementById('tercer_exp').style.display = "block";
    document.getElementById('cancelar3').style.display = "block";
})

document.getElementById('cancelar3').addEventListener('click', function(){
    document.getElementById('tercer_exp').style.display = "none";
    document.getElementById('cancelar3').style.display = "none";
})

// Carga la foto de Perfil

const $seleccionArchivos = document.querySelector("#archivo"),
  $foto = document.querySelector("#foto");

// Escuchar cuando cambie
$seleccionArchivos.addEventListener("change", () => {
  // Los archivos seleccionados, pueden ser muchos o uno
  const archivos = $seleccionArchivos.files;
  // Si no hay archivos salimos de la función y quitamos la imagen
  if (!archivos || !archivos.length) {
    $foto.src = "";
    return;
  }
  // Ahora tomamos el primer archivo, el cual vamos a previsualizar
  const primerArchivo = archivos[0];
  // Lo convertimos a un objeto de tipo objectURL
  const objectURL = URL.createObjectURL(primerArchivo);
  // Y a la fuente de la imagen le ponemos el objectURL
  $foto.src = objectURL;
});