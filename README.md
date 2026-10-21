# Turismo Sipán Express - Sitio Web Oficial

Sitio web corporativo moderno, elegante, responsive y de alto rendimiento para **Turismo Sipán Express**, empresa especializada en transporte turístico terrestre, traslados al aeropuerto, viajes grupales, excursiones y servicios corporativos en Chiclayo, Lambayeque y todo el Perú.

Desarrollado con **React 18 + Vite**, **JavaScript (ES6+)** y **CSS3 puro** (con sistema de diseño modular, variables CSS, microanimaciones y diseño adaptable).

---

## 📸 Fotografías Reales Incorporadas

El proyecto utiliza las fotografías 100% reales de la empresa organizadas desde la carpeta fuente:
- **Toyota HiAce Grand Commuter (Placa M5U-599):** Fotos en Museo Tumbas Reales, Aeropuerto Internacional de Chiclayo (ADP), Mirador Tinajones y con pasajeros turistas.
- **Minibús Mitsubishi Fuso Rosa (Placa M2H-131):** Fotos en Museo Tumbas Reales, Balneario de Pimentel (Caballitos de Totora), Municipalidad de Pimentel, Mirador Gallito Ciego y centros hoteleros.
- **Bus Panorámico Salabus Confort (Placa BVN-371):** Fotos laterales y frontales con la rotulación oficial Sipán Express, foto con delegación de pasajeros y foto interior detallada mostrando asientos reclinables de alta gama, climatización y amplios pasillos.
- **Experiencias & Gastronomía:** Almuerzo campestre típico norteño, brindis de bienvenida en hotel y viajeros en ruta.

---

## 📁 Estructura del Proyecto

```text
Turismo Sipan Express/
├── public/
│   ├── favicon.svg                  # Ícono corporativo SVG (Chakana & Bus Dorado)
│   └── images/
│       ├── raw/                     # Archivos originales de la empresa
│       ├── fleet/                   # Fotografías de vehículos (Vans, Minibuses, Buses)
│       ├── destinations/            # Fotografías de destinos turísticos
│       ├── experiences/             # Fotografías de pasajeros y gastronomía
│       ├── gallery/                 # Catálogo completo para el visualizador
│       ├── hero/                    # Imágenes destacadas para portada
│       └── services/                # Imágenes asignadas a tarjetas de servicios
├── src/
│   ├── assets/                      # Recursos estáticos adicionales
│   ├── components/
│   │   ├── Button.jsx               # Botón reutilizable (Primary, Gold, Outline, WhatsApp)
│   │   ├── DestinationCard.jsx      # Tarjeta visual de destino tipo catálogo
│   │   ├── FloatingWhatsApp.jsx     # Botón flotante de WhatsApp con tooltip interactivo
│   │   ├── Footer.jsx               # Pie de página corporativo con enlaces y contacto
│   │   ├── GalleryModal.jsx         # Modal Lightbox para ampliar fotos con teclado
│   │   ├── Header.jsx               # Encabezado con menú responsive y smooth scroll
│   │   ├── ServiceCard.jsx          # Tarjeta visual de servicio con botón cotizador
│   │   └── VehicleCard.jsx          # Tarjeta de flota con selector de fotos miniatura
│   ├── data/
│   │   ├── companyInfo.js           # [CONFIGURABLE] Teléfonos, WhatsApp, correo, dirección
│   │   ├── destinations.js          # [CONFIGURABLE] Catálogo de destinos turísticos
│   │   ├── gallery.js               # [CONFIGURABLE] Lista y categorías de fotos
│   │   ├── services.js              # [CONFIGURABLE] Propuestas de servicios turísticos
│   │   ├── testimonials.js          # [CONFIGURABLE] Estructura preparada para opiniones reales
│   │   └── vehicles.js              # [CONFIGURABLE] Ficha técnica y datos de la flota
│   ├── pages/
│   │   └── Home.jsx                 # Página principal que integra todas las secciones
│   ├── sections/
│   │   ├── About.jsx                # Presentación, misión, visión y valores
│   │   ├── Contact.jsx              # Formulario con validación y datos de contacto
│   │   ├── Destinations.jsx         # Catálogo de rutas y atractivos norteños
│   │   ├── Fleet.jsx                # Exhibición de vehículos y fotografías reales
│   │   ├── Gallery.jsx              # Galería interactiva con filtros y visor
│   │   ├── Hero.jsx                 # Portada principal con foto real e impacto visual
│   │   ├── Services.jsx             # Presentación de los 6 servicios turísticos
│   │   ├── Testimonials.jsx         # Sección preparada para clientes verificados
│   │   └── WhyChooseUs.jsx          # Beneficios: seguridad, puntualidad y confort
│   ├── styles/
│   │   ├── components.css           # Estilos de botones, tarjetas, modal y navegación
│   │   ├── global.css               # Reset tipográfico, animaciones y badges
│   │   ├── layout.css               # Contenedores, espaciados y cuadrículas
│   │   ├── responsive.css           # Adaptabilidad para móviles, tablets y monitores
│   │   └── variables.css            # Tokens de color (Oro Sipán, Azul Marino, Tipografía)
│   ├── utils/
│   │   └── validation.js            # Reglas de validación y generador de URL WhatsApp
│   ├── App.jsx                      # Componente raíz con orquestación de estilos
│   └── main.jsx                     # Punto de entrada de React
├── index.html                       # HTML5 semántico con etiquetas SEO y fuentes
├── package.json                     # Dependencias (React, Vite, Lucide-React)
├── vite.config.js                   # Configuración del servidor de desarrollo
└── README.md                        # Guía de documentación y mantenimiento
```

---

## 🚀 Requisitos e Instalación

### 1. Requisitos Previos
- **Node.js** v18 o superior instalado en el equipo.
  *(Node.js v20.18.0 ya ha sido configurado en `C:\Users\51957\nodejs` y agregado al PATH de usuario).*

### 2. Instalación de dependencias
Abre una terminal en la carpeta del proyecto y ejecuta:
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
Para iniciar el servidor local con recarga instantánea:
```bash
npm run dev
```
La aplicación se abrirá en `http://localhost:3000/`.

### 4. Compilar para producción
Para generar los archivos listos para desplegar en un hosting (Netlify, Vercel, cPanel, Hostinger):
```bash
npm run build
```
Los archivos optimizados se guardarán en la carpeta `dist/`.

---

## 🛠️ Cómo Modificar el Contenido Fácilmente

Todos los textos y datos de la empresa están desacoplados del diseño en la carpeta `src/data/`:

### A. Datos Oficiales de Contacto
El archivo [`src/data/companyInfo.js`](src/data/companyInfo.js) ya cuenta con los números oficiales de la empresa:
- **Sipán Express (WhatsApp & Reservas):** `+51 914 131 725` (Enlace directo a WhatsApp en todas las tarjetas y botón flotante).
- **Lucho Mena (Atención Directa):** `+51 968 229 678` (Llamadas y WhatsApp directo en sección contacto y pie de página).
- Si requieres agregar nuevos teléfonos o cambiar correos, puedes hacerlo en cualquier momento en [`src/data/companyInfo.js`](src/data/companyInfo.js).

### B. Modificar o Agregar Vehículos a la Flota
Edita el archivo [`src/data/vehicles.js`](src/data/vehicles.js):
- Cada vehículo tiene su nombre, categoría, placa, capacidad estimada, características verificadas y lista de fotos.
- Puedes agregar nuevas unidades simplemente duplicando un bloque de objeto.

### C. Modificar Servicios Turísticos
Edita el archivo [`src/data/services.js`](src/data/services.js):
- Modifica títulos, descripciones, características o agrega nuevos servicios.

### D. Modificar Destinos Turísticos
Edita el archivo [`src/data/destinations.js`](src/data/destinations.js):
- Agrega nuevos lugares turísticos con su fotografía, ubicación, aspectos destacados y duración aproximada.

### E. Agregar Testimonios Reales
Edita el archivo [`src/data/testimonials.js`](src/data/testimonials.js):
- El archivo contiene la estructura comentada lista para que agregues las opiniones verificadas una vez recibas reseñas de tus clientes.

---

## 💬 Funcionamiento del Formulario de Cotización

1. El usuario completa los campos obligatorios: **Nombre**, **Teléfono**, **Servicio**, **Fecha**, **Cantidad de Pasajeros** y **Detalles de la ruta**.
2. Las validaciones de JavaScript (`src/utils/validation.js`) verifican formato telefónico, fecha futura y datos válidos.
3. Si el usuario hace clic en "Cotizar este Servicio" o "Cotizar esta Unidad" en cualquier sección, el formulario se desplaza automáticamente y pre-selecciona la opción deseada.
4. Al validar, genera un enlace automático que abre **WhatsApp** con un mensaje profesional pre-estructurado listo para enviar al número configurado.
5. **Integración con Backend:** Si en el futuro deseas que las cotizaciones se envíen por correo electrónico de manera silenciosa sin pasar por WhatsApp, simplemente conecta un servicio como EmailJS, Formspree o un endpoint propio en la función `handleSubmit` de `src/sections/Contact.jsx`.

---

## 🎨 Paleta de Colores Corporativa
- **Azul Marino Sipán:** `#0A192F` / `#0E223F` (Elegancia, formalidad y seguridad)
- **Oro Sipán:** `#D4AF37` / `#C59B27` (Inspirado en el Señor de Sipán y la cultura Moche)
- **Verde WhatsApp:** `#25D366` (Llamadas a la acción y contacto directo)
- **Blanco & Marfil:** `#FFFFFF` / `#F8FAFC` (Legibilidad y modernidad)
