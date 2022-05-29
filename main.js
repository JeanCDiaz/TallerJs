arrayProyectos=[]

tbody = document.getElementById('tbody')

/* datos */
codigo = document.getElementById('codigo')
nombre = document.getElementById('nombre')
descripcion = document.getElementById('descripcion')
fecha = document.getElementById('fecha')
tipo = document.getElementById('tipo')


/* funcion insertar datos */

function table() {

    if (codigo.value == "" && nombre.value == "" && descripcion.value == "" && fecha.value == "" ) {
        alert('llene los datos')


    } else {

        proyecto = 
        {
        'codigo':codigo.value,
        'nombre':nombre.value,
        'descripcion':descripcion.value,
        'fecha':fecha.value,
        'tipo':tipo.value
        }

        arrayProyectos.push(proyecto)


        /* recorre array objetos */
        for (let i = 0; i < arrayProyectos.length; i++) {

            col = " <tr>" 
            col +="<td class='cod'>"+ arrayProyectos[i]['codigo'] +"</td>"
            col +="<td>"+ arrayProyectos[i]['nombre']+ "</td>"
            col +="<td>"+arrayProyectos[i]['descripcion'] +"</td>"
            col +="<td>"+ arrayProyectos[i]['fecha']+ "</td>"
            col +="<td>"+ arrayProyectos[i]['tipo']+"</td>"
            col +="<td><input type='submit' class='input-delete' onclick='eliminarFila("+i+")' value='Eliminar'>"
            col +="<input type='submit' class='input-edit' onclick='editarFila("+i+")' value='Editar'>"
            col +="</td></tr>"

        }
        tbody.innerHTML += col
        console.log(arrayProyectos)

        limpiar()
            
    }

}

function limpiar() {
    codigo.value = "",
    nombre.value= "",
    descripcion.value = "",
    fecha.value = "",
    tipo.value = ""
}


function eliminarFila(i) {

    arrayProyectos.splice(i,1)
    tbody.deleteRow(i);
    
}

function editarFila(i) {


    codigo.value = arrayProyectos[i]['codigo'],
    nombre.value= arrayProyectos[i]['nombre'],
    descripcion.value = arrayProyectos[i]['descripcion'],
    fecha.value = arrayProyectos[i]['fecha'],
    tipo.value = arrayProyectos[i]['tipo']
    
}

function editar() {

    i =document.getElementById('tbody').children[0].children[5].children[0].getAttribute('onclick').split('(')[1].split(')')[0]

    arrayProyectos[i]['codigo'] = codigo.value
    arrayProyectos[i]['nombre'] = nombre.value
    arrayProyectos[i]['descripcion'] = descripcion.value
    arrayProyectos[i]['fecha'] = fecha.value
    arrayProyectos[i]['tipo'] = tipo.value

    col = " <tr>" 
    col +="<td >"+ arrayProyectos[i]['codigo'] +"</td>"
    col +="<td >"+ arrayProyectos[i]['nombre']+ "</td>"
    col +="<td >"+arrayProyectos[i]['descripcion'] +"</td>"
    col +="<td >"+ arrayProyectos[i]['fecha']+ "</td>"
    col +="<td >"+ arrayProyectos[i]['tipo']+"</td>"
    col +="<td ><input type='submit' class='input-delete' onclick='eliminarFila("+i+")' value='Eliminar'>"
    col +="<input type='submit' class='input-edit' onclick='editarFila("+i+")' value='Editar'>"
    col +="</td></tr>"

    
    /* tbody.innerHTML += col
    0*/console.log(arrayProyectos)


    document.getElementById('tbody').children[i].children[0].textContent =  arrayProyectos[i]['codigo']
    document.getElementById('tbody').children[i].children[1].textContent = arrayProyectos[i]['nombre']
    document.getElementById('tbody').children[i].children[2].textContent = arrayProyectos[i]['descripcion']
    document.getElementById('tbody').children[i].children[3].textContent = arrayProyectos[i]['fecha']
    document.getElementById('tbody').children[i].children[4].textContent = arrayProyectos[i]['tipo']

    limpiar()

}

/* barra de busqueda */
(function(document) {
      'use strict';

      var LightTableFilter = (function(Arr) {

        var _input;

        function _onInputEvent(e) {
          _input = e.target;
          var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
          Arr.forEach.call(tables, function(table) {
            Arr.forEach.call(table.tBodies, function(tbody) {
              Arr.forEach.call(tbody.rows, _filter);
            });
          });
        }

        function _filter(row) {
          var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
          row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
        }

        return {
          init: function() {
            var inputs = document.getElementsByClassName('light-table-filter');
            Arr.forEach.call(inputs, function(input) {
              input.oninput = _onInputEvent;
            });
          }
        };
      })(Array.prototype);

      document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
          LightTableFilter.init();
        }
      });

    })(document);

