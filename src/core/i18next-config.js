import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng:'es',
    fallbackLng:'es',
    resources:{
        es:{
            translation:{
                "addUser":"Añadir Usuario",
                "filter":"Filtrar",
                "Filter by Name":"Filtra por Nombre",
                "noFilter":"No Filtrar",
                "home": "Inicio",
                "Settings":"Ajustes",
                "Users":"Usuarios",
                "detail":"Detalle",
                "name":"Nombre",
                "birthdate":"F. Nacimiento",
                "delete":"Eliminar",
                "undo":"Deshacer",
                "edit":"Editar",
                "save":"Guardar",
                "SelectLanguage":"Selecione Idioma:",
                "UserDetail":"Detalles de usuario"
                
            }
        },
        en:{
            translation:{
                "addUser":"Add User",
                "filter":"Filter",
                "Filter by Name":"Filter by Name",
                "noFilter":"No Filter",
                "home": "Home",
                "Settings":"Settings",
                "Users":"Users",
                "detail":"Detail",
                "name":"Name",
                "birthdate":"Birthdat",
                "delete":"Delete",
                "undo":"Undo",
                "edit":"Edit",
                "save":"Save",
                "SelectLanguage":"Select lengauage:",
                "UserDetail":"User Detail"
            }

        }

    }
})