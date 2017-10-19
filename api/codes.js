function getCode(code) {

    if(code == "000") {
        var dataCode = {
            status: "403",
            code: "000",
            code_name: "token_error",
            message: "La petición no tiene cabecera de autenticación"
        }
    }

    if(code == "001") {
        var dataCode = {
            status: "404",
            code: "001",
            code_name: "token_error",
            message: "Token no válido"
        }
    }

    if(code == "002") {
        var dataCode = {
            status: "401",
            code: "002",
            code_name: "token_error",
            message: "Token expirado"
        }
    }

    if(code == "01") {
        var dataCode = {
            status: "500",
            code: "01",
            code_name: "TEST",
            message: "Mensaje de prueba"
        };
    }

    if(code == "00") {
        var dataCode = {
            status: "500",
            code: "00",
            code_name: "server_error",
            message: "Hubo un problema con el servidor"
        }
    }

    if(code == "02") {
        var dataCode = {
            status: "200",
            code: "02",
            code_name: "product_error_get",
            message: "Error al obtener los productos"
        };
    }

    if(code == "06") {
        var dataCode = {
            status: "200",
            code: "06",
            code_name: "user_bad_email",
            message: "Necesita ingresar un email"
        };
    }

    if(code == "07") {
        var dataCode = {
            status: "200",
            code: "07",
            code_name: "user_bad_pass",
            message: "Necesita ingresar una contraseña"
        };
    }

    if(code == "08") {
        var dataCode = {
            status: "404",
            code: "08",
            code_name: "user_bad_pass_and_user",
            message: "Usuario y/o Contraseña Incorrectos"
        };
    }

    //Códigos de Registro de Usuario 1000
    if(code == "1000") {
        var dataCode = {
            status: "200",
            code: "1000",
            code_name: "user_register",
            message: "Usuario registrado satisfactoriamente"
        };
    }

    if(code == "1001") {
        var dataCode = {
            status: "200",
            code: "1001",
            code_name: "user_register_bad_name",
            message: "Necesita ingresar un nombre"
        };
    }

    if(code == "1002") {
        var dataCode = {
            status: "200",
            code: "1002",
            code_name: "user_register_bad_surname",
            message: "Necesita ingresar un apellido"
        };
    }

    if(code == "1003") {
        var dataCode = {
            status: "200",
            code: "1003",
            code_name: "user_register_bad_phone",
            message: "Necesita ingresar un teléfono"
        };
    }

    if(code == "1004") {
        var dataCode = {
            status: "200",
            code: "1004",
            code_name: "user_register_bad_email",
            message: "Necesita ingresar un email"
        };
    }

    if(code == "1005") {
        var dataCode = {
            status: "200",
            code: "1005",
            code_name: "user_register_bad_password",
            message: "Necesita ingresar una contraseña"
        };
    }

    if(code == "1007") {
        var dataCode = {
            status: "200",
            code: "1007",
            code_name: "user_register_bad_extra",
            message: "Error inesperado"
        };
    }

    if(code == "1008") {
        var dataCode = {
            status: "200",
            code: "1008",
            code_name: "user_register_exists",
            message: "Este correo electrónico ya existe. elija otro por favor."
        };
    }

    if(code == "1009") {
        var dataCode = {
            status: "200",
            code: "1009",
            code_name: "user_register_no_exists",
            message: "Este correo electrónico no existe."
        };
    }

    //FIN Códigos de Registro de Usuario 1000


    // Códigos de dispositivos

    if(code == 2000) {
        var dataCode = {
            status: 200,
            code: 1009,
            code_name: "device_register_success",
            message: "Dispositivo registrado correctamente."
        };
    }

    if(code == 2001) {
        var dataCode = {
            status: 200,
            code: 2001,
            code_name: "device_register_bad_name",
            message: "Necesita ingresar un nombre."
        };
    }

    if(code == 2002) {
        var dataCode = {
            status: 200,
            code: 2002,
            code_name: "users_list_fail",
            message: "Error al listar los usuarios."
        };
    }

    // Códigos de solicitud de usuario



    return dataCode
}

module.exports = {
    getCode
}
