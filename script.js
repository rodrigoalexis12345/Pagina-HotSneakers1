const url_api = "http://localhost:4000/api/clientes/";
const url_api1 = "http://localhost:4000/api/empleados/";
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
//Crear colaborador  POST
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
//Crear colaborador  POST
//Metodo buscar por nombre
//sacamos el const name de la L194
function buscar() {
  const id = nombre_buscar.value;
  const url_busqueda = url_api + id;

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
      document.getElementById("tablanombre").insertRow(-1).innerHTML = fila;
    })
    .catch(function (error) {
      console.log(error);
    });

  // Inserción dentro del código
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
//put

//Empleados
function listar1() {
  axios
    .get(url_api1)
    .then(function (response) {
      for (
        var Colaboradores = 0;
        Colaboradores < response.data.length;
        Colaboradores++
      ) {
        var fila =
          "<tr>" +
          "<td>" +
          response.data[Colaboradores].namesandsurnamesofemployees +
          "</td>" +
          "<td>" +
          response.data[Colaboradores].employeeage +
          "</td>" +
          "<td>" +
          response.data[Colaboradores].roleinthecompany +
          "</td>" +
          "<td>" +
          response.data[Colaboradores].startdateinthecompany +
          "</td>" +
          "<td>" +
          response.data[Colaboradores].workinghours +
          "</td>" +
          "<td>" +
          response.data[Colaboradores].freedays +
          "</td>" +
          "<td>" +
          response.data[Colaboradores].sure +
          "</td>" +
          "<td>" +
          response.data[Colaboradores].phonenumber1 +
          "</td>" +
          "<td>" +
          response.data[Colaboradores].ID +
          "</td>" +
          "</tr>";

        // Inserción dentro del código
        document.getElementById("tabla1").insertRow(-1).innerHTML = fila;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Crear un nuevo empleado post

function guardar1() {
  const datos = JSON.stringify({
    namesandsurnamesofemployees: namesandsurnamesofemployees.value,
    employeeage: employeeage.value,
    roleinthecompany: roleinthecompany.value,
    startdateinthecompany: startdateinthecompany.value,
    workinghours: workinghours.value,
    freedays: freedays.value,
    sure: sure.value,
    phonenumber1: phonenumber1.value,
    ID: ID.value,
  });

  axios
    .post(url_api1, datos, {
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
  listar1;
}
//Crear un nuevo empleado post
//Metodo bucar por nombre
function buscar1() {
  const id = edad_buscar.value;
  const url_busqueda = url_api1 + id;

  axios
    .get(url_busqueda)
    .then(function (response) {
      var fila =
        "<tr>" +
        "<td>" +
        response.data.namesandsurnamesofemployees +
        "</td>" +
        "<td>" +
        response.data.employeeage +
        "</td>" +
        "<td>" +
        response.data.roleinthecompany +
        "</td>" +
        "<td>" +
        response.data.startdateinthecompany +
        "</td>" +
        "<td>" +
        response.data.workinghours +
        "</td>" +
        "<td>" +
        response.data.freedays +
        "</td>" +
        "<td>" +
        response.data.sure +
        "</td>" +
        "<td>" +
        response.data.phonenumber1 +
        "</td>" +
        "<td>" +
        response.data.ID +
        "</td>" +
        "</tr>";
      document.getElementById("tablaedad").insertRow(-1).innerHTML = fila;
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Metodo bucar por nombre
//Eliminar Colaborador
function eliminar1() {
  const id = elimina_edad.value;
  const url_busqueda = url_api1 + id; //concatenamos la ruta
  axios
    .delete(url_busqueda)
    .then(function (response) {
      console.log("Se elimina empleado");
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Eliminar Colaborador
//Empleados
