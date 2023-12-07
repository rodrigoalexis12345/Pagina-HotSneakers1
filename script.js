const url_api = "http://localhost:4000/api/clientes/";

function listar() {
  axios
    .get(url_api)
    .then(function (response) {
      for (var index = 0; index < response.data.length; index++) {
        var fila =
          "<tr>" +
          "<td>" +
          response.data[index].nameandsurname +
          "</td>" +
          "<td>" +
          response.data[index].age +
          "</td>" +
          "<td>" +
          response.data[index].phonenumber +
          "</td>" +
          "<td>" +
          response.data[index].shippingaddress +
          "</td>" +
          "<td>" +
          response.data[index].favoriteshoebrand +
          "</td>" +
          "</tr>";

        // Inserción dentro del código
        document.getElementById("tabla").insertRow(-1).innerHTML = fila;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Guardar informacion POST
function guardar() {
  const datos = JSON.stringify({
    nameandsurname: nameandsurname.value,
    age: age.value,
    phonenumber: phonenumber.value,
    shippingaddress: shippingaddress.value,
    favoriteshoebrand: favoriteshoebrand.value,
  });

  axios
    .post(url_api, datos, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      alert(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  listar;
}
//Metodo buscar por nombre
//sacamos el const name de la L194
function buscar() {
  const id = nombre_buscar.value;
  const url_busqueda = url_api + id; //concatenamos la ruta
  //
  axios
    .get(url_busqueda)
    .then(function (response) {
      var fila =
        "<tr>" +
        "<td>" +
        response.data.nameandsurname +
        "</td>" +
        "<td>" +
        response.data.age +
        "</td>" +
        "<td>" +
        response.data.phonenumber +
        "</td>" +
        "<td>" +
        response.data.shippingaddress +
        "</td>" +
        "<td>" +
        response.data.favoriteshoebrand +
        "</td>" +
        "</tr>";

      // Inserción dentro del código
      document.getElementById("tablanombre").insertRow(-1).innerHTML = fila;
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Metodo eliminar por nombre DELETE
function eliminar() {
  const id = elimina_nombre.value;
  const url_busqueda = url_api + id; //concatenamos la ruta
  axios
    .delete(url_busqueda)
    .then(function (response) {
      console.log("Se elimina cliente");
    })
    .catch(function (error) {
      console.log(error);
    });
}
//put
// Función para buscar cliente por nombre y apellido
function buscar() {
  const nombreApellido = document.getElementById("nombre_buscar").value;
  const urlBusqueda = `http://tu-api.com/clientes/${nombreApellido}`;

  axios
    .get(urlBusqueda)
    .then(function (response) {
      // Lógica para mostrar los datos del cliente en la tabla
      // ... Aquí se mostrarían los datos en la tabla según tu lógica actual ...
    })
    .catch(function (error) {
      console.error("Error al buscar cliente:", error);
    });
}

// Función para actualizar cliente por nombre y apellido

//put
