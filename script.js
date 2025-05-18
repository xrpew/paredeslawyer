// Datos de los abogados centralizados
const abogados = [
    {
        nombre: "Ely Paredes",
        especialidad: "Derecho Penal",
        descripcion: "Ely cuenta con más de 10 años de experiencia en defensa penal, juicios orales y asesoramiento en delitos graves. Ha representado a clientes en casos de alta complejidad.",
        imagen: "./abog1.jpg",
        email: "elypan109@gmail.com",
        whatsapp: "584145771707"
    },
    {
        nombre: "Fernando Pérez",
        especialidad: "Derecho Mercantil",
        descripcion: "Fernando Pérez es abogado especializado en Derecho Mercantil, con amplia experiencia en la redacción de documentos constitutivos para la creación de compañías, firmas personales y PyMEs. Asesora en la elaboración y registro de estatutos, incluyendo modificaciones, cambios de domicilio, y nombramientos o ceses de administradores. <br><br> También gestiona la legalización de libros de comercio (actas, contabilidad, socios/accionistas) y el registro de actos y contratos relevantes para las empresas. <br> <br> Su enfoque es ofrecer un acompañamiento jurídico completo desde la constitución hasta la evolución operativa de cada negocio.",
        imagen: "./abog2.jpg",
        email: "jeremy@firmalegal.com",
        whatsapp: "584126786035"
    },
    {
        nombre: "Magdely Paredes",
        especialidad: "Derecho Civil",
        descripcion: "Magdely Paredes se especializa en Derecho Civil con enfoque en LOPNA (Ley Orgánica para la Protección del Niño, Niña y Adolescente). Su práctica abarca procesos de guarda, régimen de visitas, patria potestad, adopciones y medidas de protección. Trabaja cada caso con sensibilidad, responsabilidad y firmeza en defensa del interés superior del menor.",
        imagen: "./abog3.jpg",
        email: "sergio@firmalegal.com",
        whatsapp: "584141581474"
    },
    {
        nombre: "Neydely Paredes",
        especialidad: "Derecho Mercantil",
        descripcion: "Neydely Paredes es experta en Derecho Mercantil. Asesora a empresas, emprendedores y sociedades en temas como constitución legal, contratos comerciales, conflictos entre socios, fusiones y gestión de riesgo empresarial. Su visión preventiva y su enfoque en soluciones eficientes la destacan en el entorno corporativo.",
        imagen: "./abog3.jpg",
        email: "sergio@firmalegal.com",
        whatsapp: "584125248475"
    },
    {
        nombre: "María Camacho",
        especialidad: "Derecho Procesal Penal",
        descripcion: "María Camacho se especializa en Derecho Procesal Penal, con sólida experiencia en la defensa de los derechos fundamentales de los acusados durante todas las etapas del proceso penal. Domina los juicios orales, medidas cautelares, apelaciones y garantías constitucionales, brindando una defensa técnica, comprometida y estratégica.",
        imagen: "./abog3.jpg",
        email: "sergio@firmalegal.com",
        whatsapp: "584141591196"
    },
    {
        nombre: "Eva Paredes",
        especialidad: "Extranjería",
        descripcion: "Eva Paredes es especialista en Derecho Migratorio y Extranjería, brindando asesoría integral a personas que desean regularizar su situación legal, solicitar visas, obtener nacionalidad o gestionar permisos de residencia. Su enfoque cercano y humano ha ayudado a cientos de personas a construir una nueva vida con respaldo jurídico y seguridad.",
        imagen: "./abog3.jpg",
        email: "sergio@firmalegal.com",
        whatsapp: "56997477248"
    },

];

// Generar cards dinámicamente
window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("cardsContainer");
        abogados.forEach(abogado => {
        abogado.order = Math.random(); // Valor entre 0 y 1
    });

    abogados.sort((a, b) => a.order - b.order);

    abogados.forEach((abogado, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img style="width:100%;"  src="${abogado.imagen}" alt="${abogado.nombre}">
            <div class="card-texto">
                <h3>${abogado.nombre}</h3>
                <p>Especialista en ${abogado.especialidad}</p>
            </div>
        `;
        card.onclick = () => mostrarContacto(index);
        container.appendChild(card);
    });
});

// Mostrar modal con los datos del abogado
function mostrarContacto(index) {
    const abogado = abogados[index];

    const modal = document.getElementById("modalAbogado");
    document.getElementById("modalImg").src = abogado.imagen;
    document.getElementById("modalNombre").textContent = abogado.nombre;
    document.getElementById("modalEspecialidad").textContent = abogado.especialidad;
    document.getElementById("modalDescripcion").innerHTML = abogado.descripcion;

    document.getElementById("modalCorreo").href = `mailto:${abogado.email}`;
    document.getElementById("modalWhatsApp").href = `https://wa.me/${abogado.whatsapp}?text=Hola%20${abogado.nombre},%20necesito%20una%20asesoría%20legal.`;

    modal.style.display = "flex";
}

// Cerrar modal
function cerrarModal() {
    document.getElementById("modalAbogado").style.display = "none";
}
