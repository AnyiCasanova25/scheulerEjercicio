// // URL de la API se declara una url por si se modifica solo cambiar donde la declaro y no entodas las demas partes
// var url = "http://localhost:8080/api/v1/user/";

// // este metodo solo permite letras
// const letrasPermitidas = [
//     'A', 'Á', 'B', 'C', 'D', 'E', 'É', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M',
//     'N', 'Ñ', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'T', 'U', 'Ú', 'Ü', 'V', 'W', 'X', 'Y', 'Z',
//     'a', 'á', 'b', 'c', 'd', 'e', 'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm',
//     'n', 'ñ', 'o', 'ó', 'p', 'q', 'r', 's', 't', 'u', 'ú', 'ü', 'v', 'w', 'x', 'y', 'z', ' '
// ];
// const numerosPermitidos = [
//     '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ''
// ];
// const signosPermitidos = [
//     '.', ',', '@', '_', '-', '#', ''
// ];

// // FORMA CORTA
// function soloLetras(event) {
//     console.log("Llave presionada: " + event.key);
//     console.log("Codigo tecla: " + event.keyCode);

//     if (!(letrasPermitidas.includes(event.key))) {
//         event.preventDefault();
//         return;
//     }
// }
// function soloNumeros(event) {
//     console.log("Llave presionada: " + event.key);
//     console.log("Codigo tecla: " + event.keyCode);

//     if (!(numerosPermitidos.includes(event.key))) {
//         event.preventDefault();
//         return;
//     }
// }
// function soloSignos(event) {
//     console.log("Llave presionada: " + event.key);
//     console.log("Codigo tecla: " + event.keyCode);

//     if (!(signosPermitidos.includes(event.key))) {
//         event.preventDefault();
//         return;
//     }
// }
// function alfaNumericos(event) {
//     console.log("Llave presionada: " + event.key);
//     console.log("Codigo tecla: " + event.keyCode);

//     if (!((numerosPermitidos.includes(event.key)) || (letrasPermitidas.includes(event.key)))) {
//         event.preventDefault();
//         return;
//     }
// }
// function alfaNumericosSignos(event) {
//     console.log("Llave presionada: " + event.key);
//     console.log("Codigo tecla: " + event.keyCode);

//     if (!((numerosPermitidos.includes(event.key)) || (letrasPermitidas.includes(event.key)) || (signosPermitidos.includes(event.key)))) {
//         event.preventDefault();
//         return;
//     }
// }



// function mostrarTabla(result) {
//     var cuerpoTabla = document.getElementById("cuerpoTabla");
//     cuerpoTabla.innerHTML = "";

//     for (var i = 0; i < result.length; i++) {
//         var trRegistro = document.createElement("tr");
//         trRegistro.innerHTML = `
//                     <td class="text-center align-middle">${result[i]["tipoDocumento"]}</td>
//                     <td class="text-center align-middle">${result[i]["numDocumento"]}</td>
//                     <td class="text-center align-middle">${result[i]["nombres"]}</td>
//                     <td class="text-center align-middle">${result[i]["apellidos"]}</td>
//                     <td class="text-center align-middle">${result[i]["correo"]}</td>
//                     <td class="text-center align-middle">${result[i]["fechafechaNacimiento"]}</td>
//                     <td class="text-center align-middle">${result[i]["fechaModifi"]}</td>
//                     <td class="text-center align-middle">${result[i]["fechaInicio"]}</td>
//                     <td class="text-center align-middle">${result[i]["estado"]}</td>
//                     <td class="text-center align-middle">
//                         <i class="fas fa-edit editar" onclick="registrarUserBandera=false;" data-id="${result[i]["idUser"]}"></i>
//                         <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idUser"]}"></i>
//                     </td>
//                 `;
//         cuerpoTabla.appendChild(trRegistro);
//     }
// }

// // hacemos la funcion del filtro 
// function buscarUserPorFiltro(filtro) {
//     if (filtro.trim() !== "") {
//         $.ajax({
//             url: "http://localhost:8080/api/v1/user/busquedaFiltros/" + filtro,
//             type: "GET",
//             success: function (result) {
//                 mostrarTabla(result);
//             },
//         });
//     } else {
//         listarUser();
//     }
// }



// // Función para listar los libros registrados en la Api
// function listarUser() {
//     $.ajax({
//         url: url,
//         type: "GET",
//         success: function (result) {
//             mostrarTabla(result);
//         },
//         error: function (error) {
//             alert("Error en la petición: " + error);
//         }
//     });
// }

// // hacemos la funcion para que al limpiar la barra quede en blanco para que escribas y busques en el filtro por otro nombre
// function blanquearCampos() {
//     document.getElementById('texto').value = "";
// }

// // funcion para registrar un libro con campos obligatorios 
// var registrarUserBandera = true;

// // Función para registrar un libro en la api
// function registrarUser() {
//     var tipoDocumento = document.getElementById("tipoDocumento");
//     var numDocumento = document.getElementById("numDocumento");
//     var nombres = document.getElementById("nombres");
//     var apellidos = document.getElementById("apellidos");
//     var fechaNacimiento = document.getElementById("fechaNacimiento");
//     var password = document.getElementById("password");
//     var correo = document.getElementById("correo");
//     var fechaModifi = document.getElementById("fechaModifi");
//     var fechaInicio = document.getElementById("fechaInicio");
//     var estado = document.getElementById("estado");

//     // Verificar si algún campo obligatorio está vacío
//     if (!validarTipoDocumento(tipoDocumento) ||
//         !validarNumDocumento(numDocumento) ||
//         !validarNombres(nombres) ||
//         !validarApellidos(apellidos) ||
//         !validarFechaNacimiento(fechaNacimiento) ||
//         !validarPassword(password) ||
//         !validarCorreo(correo) ||
//         !validarFechaModifi(fechaModifi) ||
//         !validarFechaInicio(fechaInicio) ||
//         !validarEstado(estado)) {
//         // Mostrar una alerta indicando que todos los campos son obligatorios
//         Swal.fire({
//             title: "¡Error!",
//             text: "¡Llene todos los campos correctamente!",
//             icon: "error"
//         });
//         return; // Salir de la función si algún campo está vacío
//     }

//     var forData = {
//         "tipoDocumento": tipoDocumento.value,
//         "numDocumento": numDocumento.value,
//         "nombre": nombre.value,
//         "apellidos": apellidos.value,
//         "fechaNacimiento": fechaNacimiento.value,
//         "password": password.value,
//         "correo": correo.value,
//         "fechaModifi": fechaModifi.value,
//         "fechaInicio": fechaInicio.value,
//         "estado": estado.value,
//     };

//     var metodo = "";
//     var urlLocal = "";
//     var textoimprimir = "";
//     if (registrarUserBandera == true) {
//         metodo = "POST";
//         urlLocal = url;

//     } else {
//         metodo = "PUT";
//         urlLocal = url + idUser;
//     }

//     if (validarCampos()) {
//         $.ajax({
//             url: urlLocal,
//             type: metodo,
//             data: forData,
//             success: function (response) {
//                 limpiar();
//                 Swal.fire({
//                     title: "LISTO",
//                     text: "Felicidades, Registro exitoso",
//                     icon: "success"
//                 }).then(function () {
//                     // Aquí puedes agregar más acciones después del registro exitoso
//                     $('#exampleModal').modal('hide');
//                     listarUser(); // Aquí se vuelve a listar los productos
//                 });
//             },
//             error: function (xhr, status, error) {
//                 Swal.fire({
//                     title: "Error",
//                     text: "¡El usuario no a devuelto el libro!",
//                     icon: "error"
//                 });
//             }
//         });
//     } else {
//         Swal.fire({
//             title: "Error",
//             text: "¡Llene todos los campos correctamente!",
//             icon: "error"
//         });
//     }
// };

// function validarCampos() {
//     // Obtén los elementos del formulario
//     var tipoDocumento = document.getElementById("tipoDocumento");
//     var numDocumento = document.getElementById("numDocumento");
//     var nombres = document.getElementById("nombres");
//     var apellidos = document.getElementById("apellidos");
//     var fechaNacimiento = document.getElementById("fechaNacimiento");
//     var password = document.getElementById("password");
//     var correo = document.getElementById("correo");
//     var fechaModifi = document.getElementById("fechaModifi");
//     var fechaInicio = document.getElementById("fechaInicio");
//     var estado = document.getElementById("estado");

//     // Realiza la validación de cada campo
//     return validarTipoDocumento(tipoDocumento) &&
//            validarNumDocumento(numDocumento) &&
//            validarNombres(nombre) &&
//            validarApellidos(apellidos) &&
//            validarFechaNacimiento(fechaNacimiento) &&
//            validarPassword(password) &&
//            validarCorreo(correo) &&
//            validarFechaModifi(fechaModifi) &&
//            validarFechaInicio(fechaInicio) &&
//            validarEstado(estado);
// }

// // Función para validar tipo de documento
// function validarTipoDocumento(cuadroNumero) {
//     var valor = cuadroNumero.value;
//     var valido = true;

//     if (valor.length < 1 || valor.length > 10) {
//         valido = false;
//     }

//     if (valido) {
//         cuadroNumero.className = "form-control is-valid";
//     } else {
//         cuadroNumero.className = "form-control is-invalid";
//     }

//     return valido;
// }
// function validarNumDocumento(cuadroNumero) {
//     var valor = cuadroNumero.value;
//     var valido = true;

//     if (valor.length < 1 || valor.length > 15) {
//         valido = false;
//     }

//     if (valido) {
//         cuadroNumero.className = "form-control is-valid";
//     } else {
//         cuadroNumero.className = "form-control is-invalid";
//     }

//     return valido;
// }
// function validarNombres(cuadroNumero) {
//     var valor = cuadroNumero.value;
//     var valido = true;

//     if (valor.length < 1 || valor.length > 100) {
//         valido = false;
//     }

//     if (valido) {
//         cuadroNumero.className = "form-control is-valid";
//     } else {
//         cuadroNumero.className = "form-control is-invalid";
//     }

//     return valido;
// }
// function validarApellidos(cuadroNumero) {
//     var valor = cuadroNumero.value;
//     var valido = true;

//     if (valor.length < 1 || valor.length > 100) {
//         valido = false;
//     }

//     if (valido) {
//         cuadroNumero.className = "form-control is-valid";
//     } else {
//         cuadroNumero.className = "form-control is-invalid";
//     }

//     return valido;
// }
// function validarFechaNacimiento(cuadroNumero) {
//     var valor = cuadroNumero.value;
//     var valido = true;

//     if (valor.length < 1 || valor.length > 100) {
//         valido = false;
//     }

//     if (valido) {
//         cuadroNumero.className = "form-control is-valid";
//     } else {
//         cuadroNumero.className = "form-control is-invalid";
//     }

//     return valido;
// }
// function validarPassword(cuadroNumero) {
//     var valor = cuadroNumero.value;
//     var valido = true;

//     if (valor.length < 1 || valor.length > 100) {
//         valido = false;
//     }

//     if (valido) {
//         cuadroNumero.className = "form-control is-valid";
//     } else {
//         cuadroNumero.className = "form-control is-invalid";
//     }

//     return valido;
// }
// function validarCorreo(cuadroNumero) {
//     var valor = cuadroNumero.value;
//     var valido = true;

//     if (valor.length < 1 || valor.length > 100) {
//         valido = false;
//     }

//     if (valido) {
//         cuadroNumero.className = "form-control is-valid";
//     } else {
//         cuadroNumero.className = "form-control is-invalid";
//     }

//     return valido;
// }
// function validarFechaModifi(cuadroNumero) {
//     var valor = cuadroNumero.value;
//     var valido = true;

//     if (valor.length < 1 || valor.length > 100) {
//         valido = false;
//     }

//     if (valido) {
//         cuadroNumero.className = "form-control is-valid";
//     } else {
//         cuadroNumero.className = "form-control is-invalid";
//     }

//     return valido;
// }
// function validarFechaInicio(cuadroNumero) {
//     var valor = cuadroNumero.value;
//     var valido = true;

//     if (valor.length < 1 || valor.length > 100) {
//         valido = false;
//     }

//     if (valido) {
//         cuadroNumero.className = "form-control is-valid";
//     } else {
//         cuadroNumero.className = "form-control is-invalid";
//     }

//     return valido;
// }
// function validarEstado(cuadroNumero) {
//     var valor = cuadroNumero.value;
//     var valido = true;

//     if (valor.length < 1 || valor.length > 100) {
//         valido = false;
//     }

//     if (valido) {
//         cuadroNumero.className = "form-control is-valid";
//     } else {
//         cuadroNumero.className = "form-control is-invalid";
//     }

//     return valido;
// }

// // Función para limpiar campos del formulario
// function limpiar() {
//     document.getElementById("tipoDocumento").value = "";
//     document.getElementById("tipoDocumento").className = "form-control";
//     document.getElementById("numDocumento").value = "";
//     document.getElementById("numDocumento").className = "form-control";
//     document.getElementById("nombres").value = "";
//     document.getElementById("nombres").className = "form-control";
//     document.getElementById("apellidos").value = "";
//     document.getElementById("apellidos").className = "form-control";
//     document.getElementById("correo").value = "";
//     document.getElementById("correo").className = "form-control";
//     document.getElementById("password").value = "";
//     document.getElementById("password").className = "form-control";
//     document.getElementById("fechaNacimiento").value = "";
//     document.getElementById("fechaNacimiento").className = "form-control";
//     document.getElementById("fechaModifi").value = "";
//     document.getElementById("fechaModifi").className = "form-control";
//     document.getElementById("fechaInicio").value = "";
//     document.getElementById("fechaInicio").className = "form-control";
//     document.getElementById("estado").value = "";
//     document.getElementById("estado").className = "form-control";
// }

// var idUser = "";
// // Asociar eventos de clic a los iconos dentro de la tabla
// $(document).on("click", ".editar", function () {
//     limpiar();
//     idUser = $(this).data("id");

//     $.ajax({
//         url: url + idUser,
//         type: "GET",
//         success: function (user) {
//             document.getElementById("tipoDocumento").value = user.tipoDocumento;
//             document.getElementById("numDocumento").value = user.numDocumento;
//             document.getElementById("nombres").value = user.nombres;
//             document.getElementById("apellidos").value = user.apellidos;
//             document.getElementById("correo").value = user.correo;
//             document.getElementById("fechaNacimiento").value = user.fechaNacimiento;
//             document.getElementById("password").value = user.password;
//             document.getElementById("fechaModifi").value = user.fechaModifi;
//             document.getElementById("fechaInicio").value = user.fechaInicio;
//             document.getElementById("estado").value = user.estado;
//             $('#exampleModal').modal('show');
//         },
//         error: function (error) {
//             alert("Error al obtener los datos del usuario: " + error.statusText);
//         }
//     });
// });

// $(document).on("click", ".eliminar", function () {
//     // Obtener el ID del cliente desde el atributo data del elemento clicado
//     var idUser = $(this).data("id");

    // Mostrar un cuadro de diálogo para confirmar la eliminación
    // Swal.fire({
    //     title: '¿Estás seguro?',
    //     text: "¿Deseas eliminar este usuario?",
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Eliminar'
    // }).then((result) => {
        // Si el usuario confirma la eliminación, proceder con la solicitud AJAX
        // if (result.isConfirmed) {
        //     $.ajax({
        //         url: url + "eliminarUsuario/" + idUser,
        //         type: "DELETE",
        //         success: function (eliminarUsuario) {
        //             // Mostrar un mensaje de éxito
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: "Libro Eliminado",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
                    // Actualizar la lista de cliente después de eliminar
//                     listarUser();
//                 },
//             });
//         }
//     });
// });

// Llamar a la función para listar cliente al cargar la página
// $(document).ready(function () {
//     listarUser();
// });
// function actualizarlistarUser() {
//     listarUser();
// }