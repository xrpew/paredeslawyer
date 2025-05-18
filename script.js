function mostrarContacto(nombre, especialidad) {
    const modal = document.getElementById("modalAbogado");
    const modalImg = document.getElementById("modalImg");
    const modalNombre = document.getElementById("modalNombre");
    const modalEspecialidad = document.getElementById("modalEspecialidad");
    const modalDescripcion = document.getElementById("modalDescripcion");
    const modalContacto = document.getElementById("modalContacto");

    // Datos de los abogados
    const abogados = {
        "Ely Paredes": {
            imagen: "./abog2.jpg",
            especialidad: "Derecho Penal",
            descripcion: "Ely Paredes cuenta con más de 10 años de experiencia en defensa penal, juicios orales y asesoramiento en delitos graves. Ha representado a clientes en casos de alta complejidad.",
            email: "john@firmalegal.com"
        },
        "Fernando Pérez": {
            imagen: "./abog2.jpg",
            especialidad: "Derecho Mercantil",
            descripcion: "Jeremy es experto en derecho comercial y societario. Ha asesorado a más de 100 empresas en fusiones, contratos, y resolución de conflictos empresariales.",
            email: "jeremy@firmalegal.com"
        },
        "Neydely Paredes": {
            imagen: "./abog3.jpg",
            especialidad: "Derecho Civil",
            descripcion: "Sergio se especializa en divorcios, herencias, contratos civiles y conflictos familiares. Se enfoca en encontrar soluciones justas, humanas y eficientes para sus clientes.",
            email: "sergio@firmalegal.com"
        }
    };

    const abogado = abogados[nombre];

    if (abogado) {
        modalImg.src = abogado.imagen;
        modalNombre.textContent = nombre;
        modalEspecialidad.textContent = abogado.especialidad;
        modalDescripcion.textContent = abogado.descripcion;
const modalCorreo = document.getElementById("modalCorreo");
const modalWhatsApp = document.getElementById("modalWhatsApp");

// Simulamos un número para cada abogado (puedes personalizar esto también)
const whatsapps = {
    "John Doe": "34600123456",
    "Jeremy": "34600234567",
    "Sergio": "34600345678"
};

modalCorreo.href = `mailto:${abogado.email}`;
modalWhatsApp.href = `https://wa.me/${whatsapps[nombre]}?text=Hola%20${nombre},%20necesito%20una%20asesoría%20legal.`;
    }

    modal.style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modalAbogado").style.display = "none";
}
