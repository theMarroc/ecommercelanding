document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
});

document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
});


document.getElementById('formLogin').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Verificar
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Inicio de sesión, bienvenido ' + storedUser.name);
        document.getElementById('container').classList.add('hidden'); // Oculta el container
        document.getElementById('carouselFavoritos').classList.remove('hidden');
        document.getElementById('logoutBtn').classList.remove('hidden');
        localStorage.setItem('loggedInUser', email);  // Guarda el usuario
        window.location.href = 'home.html';
    } 
    else {
        alert('Email o contraseña incorrectos');
    }
});

// Verificar si hay usuario logueado
document.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('loggedInUser');
    const logoutBtn = document.getElementById('logoutBtn');

    if (email) {
        document.getElementById('container').classList.add('hidden');
        document.getElementById('carouselFavoritos').classList.remove('hidden');
        logoutBtn.style.display = 'block';
    } 
    else {
        logoutBtn.style.display = 'none';
    }
});

document.getElementById('formRegister').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Guarda datos
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert('Registrado exitosamente como: ' + name);

    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Recuperar productos favoritos y mostrarlos en el carousel
document.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('loggedInUser');

    const carouselFavoritos = document.getElementById('carouselFavoritos');
    let favoritos = JSON.parse(localStorage.getItem(`favoritos_${email}`)) || [];

    function renderFavoritos() {
        carouselFavoritos.innerHTML = '';

        favoritos.forEach((producto, index) => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto-favorito');
            productoDiv.innerHTML = `
                <h3>${producto.titulo}</h3>
                <a href="${producto.enlace}" target="_blank">
                <img src="${producto.imagenUrl}" alt="${producto.titulo}">
                </a>
                <p>Precio: $${producto.precio}</p>
                <button class="eliminar-btn" data-index="${index}">Eliminar</button>
            `;
            carouselFavoritos.appendChild(productoDiv);
        });

        document.querySelectorAll('.eliminar-btn').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                eliminarDeFavoritos(index);
            });
        });
    }

    // Eliminar de favoritos
    function eliminarDeFavoritos(index) {
        favoritos.splice(index, 1);
        localStorage.setItem(`favoritos_${email}`, JSON.stringify(favoritos));
        renderFavoritos(); 
    }   

    renderFavoritos();

});

const carousel = document.getElementById('carouselFavoritos');

carousel.addEventListener('wheel', (event) => {
    event.preventDefault(); 
    const scrollAmount = event.deltaY > 0 ? 1 : -1; 
    carousel.scrollBy({ left: scrollAmount * 100, behavior: 'smooth' }); 
});

///////////////////////////////////////////////////////////////////////////////////////////////////////           

//Boton de log out

document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('loggedInUser');
    document.getElementById('carouselFavoritos').classList.add('hidden');
    document.getElementById('logoutBtn').classList.add('hidden');
    window.location.href = 'index.html';
});
