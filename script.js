function agregarProductoAlCarousel(titulo, imagenUrl, precio, textoBoton, enlace) {
    const contenedorCarousel = document.getElementById('carouselContainer');

    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');

    const contenido = `
        <h3>${titulo}</h3>
        <a href="${enlace}" target="_blank">
        <img src="${imagenUrl}" alt="${titulo}">
        </a>
        <p>Precio: $${precio}</p>
        <button onclick="agregarAFavoritos({titulo: '${titulo}', imagenUrl: '${imagenUrl}', precio: ${precio}, enlace: '${enlace}'})">${textoBoton}</button>
    `;

    productoDiv.innerHTML = contenido;

    contenedorCarousel.appendChild(productoDiv);
}

function agregarAFavoritos(producto) {
    const email = localStorage.getItem('loggedInUser');

    if (!email) {
        alert('Por favor, inicie sesión para añadir a favoritos');
        return;
    }

    let favoritosPorUsuario = JSON.parse(localStorage.getItem(`favoritos_${email}`)) || [];
    favoritosPorUsuario.push(producto);
    localStorage.setItem(`favoritos_${email}`, JSON.stringify(favoritosPorUsuario));
}


///////////////////////////////////////////////////////////////////////////////////////////////

const carousel = document.getElementById('carouselContainer');

carousel.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent default scroll behavior
    const scrollAmount = event.deltaY > 0 ? 1 : -1; // Determine scroll direction
    carousel.scrollBy({ left: scrollAmount * 100, behavior: 'smooth' }); // Scroll smoothly
});

///////////////////////////////////////////////////////////////////////////////////////////////

agregarProductoAlCarousel('Morral Tactico Alpine Skate Militar', './assets/mochila_1.webp', 40000, 'Añadir a favoritos', 'https://filospatrios.mitiendanube.com/productos/morral-tactico-alpine-skate-porta-celular-bandolera-molle-hb-arena/');
agregarProductoAlCarousel('Pouch Táctico Botiquín Molle Ifak', './assets/pouch_tactico.webp', 37500, 'Añadir a favoritos', 'https://filospatrios.mitiendanube.com/productos/pouch-tactico-botiquin-molle-ifak-primeros-auxilios/');
agregarProductoAlCarousel('Mochila Alpine Skate Táctica', './assets/mochila_alpine.webp', 55000, 'Añadir a favoritos', 'https://filospatrios.mitiendanube.com/productos/mochila-alpine-skate-tactica-urbana-modelo-13695/');
agregarProductoAlCarousel('Mochila Táctica Caqui 45-litros', './assets/mochila_caqui.webp', 29999, 'Añadir a favoritos', 'https://filospatrios.mitiendanube.com/productos/mochila/');
agregarProductoAlCarousel('Riñoneras de uso Táctico 3 variantes', './assets/riñoneras_tacticas.webp', 15000, 'Añadir a favoritos', 'https://filospatrios.mitiendanube.com/productos/rinonera-tacticas/');
agregarProductoAlCarousel('Guantes Tacticos Militares Antideslizantes', './assets/guantes_tacticos.webp', 14999, 'Añadir a favoritos', 'https://filospatrios.mitiendanube.com/productos/guantes-tacticos-militares-dedos-cortos-antideslizantes/');
agregarProductoAlCarousel('Remera Argentina Bandera Nacional Eikeel', './assets/remera_argentina.webp', 10000, 'Añadir a favoritos', 'https://filospatrios.mitiendanube.com/productos/remera-argentina-bandera-nacional-eikeel-full-print/');
agregarProductoAlCarousel('Remera Argentina Identidad Premium Eikell', './assets/remera_argentina2.webp', 10000, 'Añadir a favoritos', 'https://filospatrios.mitiendanube.com/productos/remera-argentina-identidad-nacional-bandera-argentina-humo-algodon-premium-eikell/');
agregarProductoAlCarousel('Recon Tanto SK5 Arena Plateado 18cm', './assets/cuchillo1.webp', 75000, 'Añadir a favoritos', 'https://filospatrios.mitiendanube.com/productos/recon-tanto-arena-plateado/');
agregarProductoAlCarousel('Pinza Plegable Táctica Multi-Herramienta', './assets/pinza_multiuso1.webp', 15000, 'Añadir a favoritos', 'https://filospatrios.mitiendanube.com/productos/pinza-alicate-gerber/');




