/* ============================================
   LIBERONAUDIO — DATA LAYER
   ============================================
   Este archivo contiene TODOS los datos dinámicos.
   El futuro .exe solo modificará este archivo
   (o los JSON en /data/).
   
   Para AÑADIR UNA MARCA:
   Copia una línea del array brands, cambia los datos.
   Si tienes logo, pon el nombre del archivo .png en "logo".
   Si no tienes logo, déjalo como "" y se mostrará solo el nombre.

   Para CAMBIAR DATOS DE CONTACTO:
   Edita el objeto "contact" abajo.
   ============================================ */

const SITE_DATA = {

    /* ---------- INFO DEL NEGOCIO ---------- */
    business: {
        name: "LiberonAudio",
        tagline: "Restauración de Audio Vintage de Alta Gama",
        description: "Devolvemos la vida a las obras maestras del sonido. Cada equipo tiene una historia que merece ser escuchada.",
        established: "2025"
    },

    /* ---------- CONTACTO ---------- */
    contact: {
        email: "liberonaudio@gmail.com",
        phone: "+34 600 000 000",
        address: "Madrid, España",
        hours: "Lunes a Viernes — 10:00 a 19:00",
        appointment: "Cita previa imprescindible"
    },

    /* ---------- MARCAS ----------
       logo: nombre del archivo en img/brands/ (ej: "marantz.png")
             dejar "" si no hay logo (mostrará solo el nombre)
    */
    brands: [
        { name: "Marantz",       country: "Japón / EE.UU.",  logo: "marantz.png" },
        { name: "McIntosh",      country: "EE.UU.",          logo: "mcintosh.png" },
        { name: "Revox",         country: "Suiza",           logo: "revox.png" },
        { name: "Pioneer",       country: "Japón",           logo: "pioneer.png" },
        { name: "Sansui",        country: "Japón",           logo: "sansui.png" },
        { name: "Technics",      country: "Japón",           logo: "technics.png" },
        { name: "Quad",          country: "Reino Unido",     logo: "quad.png" },
        { name: "Naim",          country: "Reino Unido",     logo: "naim.png" },
        { name: "Linn",          country: "Escocia",         logo: "linn.png" },
        { name: "Accuphase",     country: "Japón",           logo: "accuphase.png" },
        { name: "Luxman",        country: "Japón",           logo: "luxman.png" },
        { name: "Tandberg",      country: "Noruega",         logo: "tandberg.png" },
        // Para añadir más marcas, copia la línea de arriba y cambia los datos:
        // { name: "NuevaMarca", country: "País", logo: "nuevamarca.png" },
    ],

    /* ---------- SERVICIOS ---------- */
    services: [
        {
            number: "01",
            title: "Restauración Integral",
            description: "Desmontaje completo, revisión de cada componente, sustitución de piezas degradadas por originales o equivalentes NOS. El equipo vuelve a sonar como el día que salió de fábrica."
        },
        {
            number: "02",
            title: "Reparación Técnica",
            description: "Diagnóstico y reparación de averías específicas. Desde fallos de canal hasta problemas de alimentación, distorsión o ruido. Instrumentación profesional de laboratorio."
        },
        {
            number: "03",
            title: "Puesta a Punto",
            description: "Calibración, ajuste de bias, alineación de cabezales, limpieza de contactos. Para equipos que funcionan pero merecen recuperar su rendimiento óptimo."
        }
    ],

    /* ---------- ESTADÍSTICAS ---------- */
    stats: [
        { number: "20+", label: "Años de experiencia" },
        { number: "500+", label: "Equipos restaurados" },
        { number: "100%", label: "Piezas originales" }
    ]
};
