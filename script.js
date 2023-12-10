const url_api = "http://localhost:4000/api/clientes/";
const url_api1 = "http://localhost:4000/api/empleados/";
const url_api2 = "http://localhost:4000/api/inventarios/";
const url_api3 = "http://localhost:4000/api/pedidos/";
const url_api4 = "http://localhost:4000/api/productos/";
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
//Crear cliente  POST
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
//Crear cliente  POST
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

//put Cliente 121
// Actualizar cliente PUT
function actualizar() {
  const id = nameandsurname_actualizar.value; // Obtén el ID del cliente que deseas actualizar
  const url_actualizar = url_api + id;

  const datos = JSON.stringify({
    nameandsurname: newNameAndSurname.value,
    age: newAge.value,
    phonenumber: newPhoneNumber.value,
    shippingaddress: newShippingAddress.value,
    favoriteshoebrand: newFavoriteShoeBrand.value,
  });

  axios
    .put(url_actualizar, datos, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      alert("Cliente actualizado correctamente");
      // Realizar alguna acción adicional si es necesario
    })
    .catch(function (error) {
      console.error("Error al actualizar el cliente:", error);
      alert("Ocurrió un error al actualizar el cliente");
    });
}

//put Final

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
  const id = name_buscar.value;
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
      document.getElementById("tablaname").insertRow(-1).innerHTML = fila;
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Metodo bucar por nombre
//Eliminar Colaborador
function eliminar1() {
  const id = elimina_name.value;
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
//Inventarios
//Listar Inventario
function listar2() {
  axios
    .get(url_api2)
    .then(function (response) {
      for (
        var Inventario = 0;
        Inventario < response.data.length;
        Inventario++
      ) {
        var fila =
          "<tr>" +
          "<td>" +
          response.data[Inventario].productname +
          "</td>" +
          "<td>" +
          response.data[Inventario].productcode +
          "</td>" +
          "<td>" +
          response.data[Inventario].currentExistence +
          "</td>" +
          "<td>" +
          response.data[Inventario].minimumReplacementQuantity +
          "</td>" +
          "<td>" +
          response.data[Inventario].storageLocation1 +
          "</td>" +
          "</tr>";

        // Inserción dentro del código
        document.getElementById("tabla2").insertRow(-1).innerHTML = fila;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Listar Inventario
//Crear inventario  POST
function guardar2() {
  const datos = JSON.stringify({
    productname: productname.value,
    productcode: productcode.value,
    currentExistence: currentExistence.value,
    minimumReplacementQuantity: minimumReplacementQuantity.value,
    storageLocation1: storageLocation1.value,
  });

  axios
    .post(url_api2, datos, {
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
  listar2;
}
//Crear Inventario POST
//Metodo buscar por productname
//sacamos el const name de la L194
function buscar2() {
  const id = productname_buscar.value;
  const url_busqueda = url_api2 + id;

  axios
    .get(url_busqueda)
    .then(function (response) {
      var fila =
        "<tr>" +
        "<td>" +
        response.data.productname +
        "</td>" +
        "<td>" +
        response.data.productcode +
        "</td>" +
        "<td>" +
        response.data.currentExistence +
        "</td>" +
        "<td>" +
        response.data.minimumReplacementQuantity +
        "</td>" +
        "<td>" +
        response.data.storageLocation1 +
        "</td>" +
        "</tr>";
      document.getElementById("tablaproductname").insertRow(-1).innerHTML =
        fila;
    })
    .catch(function (error) {
      console.log(error);
    });

  // Inserción dentro del código
}
//Eliminar Inventario
function eliminar2() {
  const id = elimina_productname.value;
  const url_busqueda = url_api2 + id; //concatenamos la ruta
  axios
    .delete(url_busqueda)
    .then(function (response) {
      console.log("Se elimina Inventario");
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Eliminar Inventario
//Inventarios
//PEDIDOS BACKEND INICIO
function listar3() {
  axios
    .get(url_api3)
    .then(function (response) {
      for (var index = 0; index < response.data.length; index++) {
        var fila =
          "<tr>" +
          "<td>" +
          response.data[index].customerwhoplacedtheorder +
          "</td>" +
          "<td>" +
          response.data[index].orderedproducts +
          "</td>" +
          "<td>" +
          response.data[index].product1 +
          "</td>" +
          "<td>" +
          response.data[index].amount1 +
          "</td>" +
          "<td>" +
          response.data[index].unitprice1 +
          "</td>" +
          "<td>" +
          response.data[index].product2 +
          "</td>" +
          "<td>" +
          response.data[index].amount2 +
          "</td>" +
          "<td>" +
          response.data[index].unitprice2 +
          "</td>" +
          "<td>" +
          response.data[index].orderstatus +
          "</td>" +
          "<td>" +
          response.data[index].shippingaddrees +
          "</td>" +
          "<td>" +
          response.data[index].card +
          "</td>" +
          "<td>" +
          response.data[index].totaltopay +
          "</td>" +
          "</tr>";

        // Inserción dentro del código
        document.getElementById("tabla3").insertRow(-1).innerHTML = fila;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Crear un nuevo pedido post

function guardar3() {
  const datos = JSON.stringify({
    customerwhoplacedtheorder: customerwhoplacedtheorder.value,
    orderedproducts: orderedproducts.value,
    product1: product1.value,
    amount1: amount1.value,
    unitprice1: unitprice1.value,
    product2: product2.value,
    amount2: amount2.value,
    unitprice2: unitprice2.value,
    orderstatus: orderstatus.value,
    shippingaddrees: shippingaddrees.value,
    card: card.value,
    totaltopay: totaltopay.value,
  });

  axios
    .post(url_api3, datos, {
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
  listar3;
}
//Metodo bucar por customerwhoplacedtheorder
function buscar3() {
  const id = customerwhoplacedtheorder_buscar.value;
  const url_busqueda = url_api3 + id;

  axios
    .get(url_busqueda)
    .then(function (response) {
      var fila =
        "<tr>" +
        "<td>" +
        response.data.customerwhoplacedtheorder +
        "</td>" +
        "<td>" +
        response.data.orderedproducts +
        "</td>" +
        "<td>" +
        response.data.product1 +
        "</td>" +
        "<td>" +
        response.data.amount1 +
        "</td>" +
        "<td>" +
        response.data.unitprice1 +
        "</td>" +
        "<td>" +
        response.data.product2 +
        "</td>" +
        "<td>" +
        response.data.amount2 +
        "</td>" +
        "<td>" +
        response.data.unitprice2 +
        "</td>" +
        "<td>" +
        response.data.orderstatus +
        "</td>" +
        "<td>" +
        response.data.shippingaddrees +
        "</td>" +
        "<td>" +
        response.data.card +
        "</td>" +
        "<td>" +
        response.data.totaltopay +
        "</td>" +
        "</tr>";
      document
        .getElementById("tablacustomerwhoplacedtheorder")
        .insertRow(-1).innerHTML = fila;
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Metodo bucar por nombre
//Eliminar Pedido por customerwhoplacedtheorder
function eliminar3() {
  const id = elimina_customerwhoplacedtheorder.value;
  const url_busqueda = url_api3 + id; //concatenamos la ruta
  axios
    .delete(url_busqueda)
    .then(function (response) {
      console.log("Se elimina inventario");
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Eliminar Colaborador
// Actualizar Pedido PUT


//put Final
//PEDIDOS BACKEND FINAL
//PRODUCTOS BACKEND
//Listar Productos
function listar4() {
  axios
    .get(url_api4)
    .then(function (response) {
      for (var index = 0; index < response.data.length; index++) {
        var fila =
          "<tr>" +
          "<td>" +
          response.data[index].Productname +
          "</td>" +
          "<td>" +
          response.data[index].colors +
          "</td>" +
          "<td>" +
          response.data[index].stock +
          "</td>" +
          "<td>" +
          response.data[index].sizes +
          "</td>" +
          "<td>" +
          response.data[index].Productstatus +
          "</td>" +
          "</tr>";

        // Inserción dentro del código
        document.getElementById("tabla4").insertRow(-1).innerHTML = fila;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Listar Productos
//Crear Productos POST
function guardar4() {
  const datos = JSON.stringify({
    Productname: Productname.value,
    colors: colors.value,
    stock: stock.value,
    sizes: sizes.value,
    Productstatus: Productstatus.value,
  });

  axios
    .post(url_api4, datos, {
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
  listar4;
}
//Crear Productos POST
//Buscar por customer
//sacamos el const name de la L194
function buscar4() {
  const id = Productname_buscar.value;
  const url_busqueda = url_api4 + id;

  axios
    .get(url_busqueda)
    .then(function (response) {
      var fila =
        "<tr>" +
        "<td>" +
        response.data.Productname +
        "</td>" +
        "<td>" +
        response.data.colors +
        "</td>" +
        "<td>" +
        response.data.stock +
        "</td>" +
        "<td>" +
        response.data.sizes +
        "</td>" +
        "<td>" +
        response.data.Productstatus +
        "</td>" +
        "</tr>";
      document.getElementById("tablaProductname").insertRow(-1).innerHTML =
        fila;
    })
    .catch(function (error) {
      console.log(error);
    });

  // Inserción dentro del código
}
//Metodo eliminar por Productname DELETE
function eliminar4() {
  const id = elimina_Productname.value;
  const url_busqueda = url_api4 + id; //concatenamos la ruta
  axios
    .delete(url_busqueda)
    .then(function (response) {
      console.log("Se elimina Producto");
    })
    .catch(function (error) {
      console.log(error);
    });
}

//Buscar por customer
//PRODUCTIOS BAKEND
