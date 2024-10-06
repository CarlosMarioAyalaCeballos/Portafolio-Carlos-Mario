// Placeholder for future JavaScript functionalities
console.log("Portafolio de Carlos Mario Ayala Ceballos");
        function calcularEdad(fechaNacimiento) {
            var hoy = new Date();
            var fechaNac = new Date(fechaNacimiento);
            var edad = hoy.getFullYear() - fechaNac.getFullYear();
            var mes = hoy.getMonth() - fechaNac.getMonth();
            
            if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
                edad--;
            }
            
            return edad;
        }

        // Fecha de nacimiento (formato: YYYY-MM-DD)
        var fechaNacimiento = "2005-02-26";

        var edad = calcularEdad(fechaNacimiento);
        document.getElementById("edad-placeholder").textContent = edad;