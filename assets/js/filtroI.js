const select = document.getElementById('filtro');

const all = document.getElementById('all');
const ministerio = document.getElementById('ministerio');
const comision = document.getElementById('comision');
const autoridad = document.getElementById('autoridad');
const consejo = document.getElementById('consejo');
const defensoria = document.getElementById('defensoria');
const fondo = document.getElementById('fondo');
const gobernacion = document.getElementById('gobernacion');
const secretaria = document.getElementById('secretaria');
const coordinadoras = document.getElementById('coordinadoras');

function filter(){
    var value = select.options[select.selectedIndex].value;

    if(value=="todos"){
        all.style.display = "flex"
        ministerio.style.display= "none"
        comision.style.display= "none"
        autoridad.style.display= "none"
        consejo.style.display= "none"
        defensoria.style.display= "none"
        fondo.style.display= "none"
        gobernacion.style.display= "none"
        secretaria.style.display= "none"
        coordinadoras.style.display= "none"
    }
    else if(value=="ministerios"){
        all.style.display = "none"
        ministerio.style.display= "flex"
        comision.style.display= "none"
        autoridad.style.display= "none"
        consejo.style.display= "none"
        defensoria.style.display= "none"
        fondo.style.display= "none"
        gobernacion.style.display= "none"
        secretaria.style.display= "none"
        coordinadoras.style.display= "none"
    }
    else if(value=="comisionados"){
        all.style.display = "none"
        ministerio.style.display= "none"
        comision.style.display= "flex"
        autoridad.style.display= "none"
        consejo.style.display= "none"
        defensoria.style.display= "none"
        fondo.style.display= "none"
        gobernacion.style.display= "none"
        secretaria.style.display= "none"
        coordinadoras.style.display= "none"
    }
    else if(value=="secretariados"){
        all.style.display = "none"
        ministerio.style.display= "none"
        comision.style.display= "none"
        autoridad.style.display= "none"
        consejo.style.display= "none"
        defensoria.style.display= "none"
        fondo.style.display= "none"
        gobernacion.style.display= "none"
        secretaria.style.display= "flex"
        coordinadoras.style.display= "none"
    }
    else if(value=="autoridades"){
        all.style.display = "none"
        ministerio.style.display= "none"
        comision.style.display= "none"
        autoridad.style.display= "flex"
        consejo.style.display= "none"
        defensoria.style.display= "none"
        fondo.style.display= "none"
        gobernacion.style.display= "none"
        secretaria.style.display= "none"
        coordinadoras.style.display= "none"
    }
    else if(value=="consejos"){
        all.style.display = "none"
        ministerio.style.display= "none"
        comision.style.display= "none"
        autoridad.style.display= "none"
        consejo.style.display= "flex"
        defensoria.style.display= "none"
        fondo.style.display= "none"
        gobernacion.style.display= "none"
        secretaria.style.display= "none"
        coordinadoras.style.display= "none"
    }
    else if(value=="defensorias"){
        all.style.display = "none"
        ministerio.style.display= "none"
        comision.style.display= "none"
        autoridad.style.display= "none"
        consejo.style.display= "none"
        defensoria.style.display= "flex"
        fondo.style.display= "none"
        gobernacion.style.display= "none"
        secretaria.style.display= "none"
        coordinadoras.style.display= "none"
    }
    else if(value=="fondos"){
        all.style.display = "none"
        ministerio.style.display= "none"
        comision.style.display= "none"
        autoridad.style.display= "none"
        consejo.style.display= "none"
        defensoria.style.display= "none"
        fondo.style.display= "flex"
        gobernacion.style.display= "none"
        secretaria.style.display= "none"
        coordinadoras.style.display= "none"
    }
    else if(value=="gobernaciones"){
        all.style.display = "none"
        ministerio.style.display= "none"
        comision.style.display= "none"
        autoridad.style.display= "none"
        consejo.style.display= "none"
        defensoria.style.display= "none"
        fondo.style.display= "none"
        gobernacion.style.display= "flex"
        secretaria.style.display= "none"
        coordinadoras.style.display= "none"
    }
    else if(value=="coordinadoras"){
        all.style.display = "none"
        ministerio.style.display= "none"
        comision.style.display= "none"
        autoridad.style.display= "none"
        consejo.style.display= "none"
        defensoria.style.display= "none"
        fondo.style.display= "none"
        gobernacion.style.display= "none"
        secretaria.style.display= "none"
        coordinadoras.style.display= "flex"
    }
}
