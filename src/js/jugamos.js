  // Variables principales
        let tablero = [];
        let palabras = ['COMPUESTO', 'DIENTE', 'HALÓGENO', 'BUCAL', 'IONICO','FLUORESCENTE', 'EXPERIMENTO', 'FLUORITA', 'ELECTRONEGATIVIDAD', 'CORROSIVO'];
        let palabrasEncontradas = [];
        let seleccionando = false;
        let celdaInicio = null;
        let celdaFin = null;

        // Crear el tablero vacío
        function crearTablero() {
            tablero = [];
            for (let i = 0; i < 20; i++) {
                tablero[i] = [];
                for (let j = 0; j < 20; j++) {
                    tablero[i][j] = '';
                }
            }
        }

        // Poner una palabra en el tablero
        function colocarPalabra(palabra, fila, columna, direccion) {
            for (let i = 0; i < palabra.length; i++) {
                let nuevaFila = fila;
                let nuevaColumna = columna;
                
                if (direccion === 'horizontal') {
                    nuevaColumna += i;
                } else if (direccion === 'vertical') {
                    nuevaFila += i;
                }
                
                if (nuevaFila < 20 && nuevaColumna < 20) {
                    tablero[nuevaFila][nuevaColumna] = palabra[i];
                }
            }
        }

        // Llenar espacios vacíos con letras al azar
        function llenarEspaciosVacios() {
            const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    if (tablero[i][j] === '') {
                        tablero[i][j] = letras[Math.floor(Math.random() * letras.length)];
                    }
                }
            }
        }

        // Crear el juego completo
        function crearJuego() {
            crearTablero();
            
            // Colocar cada palabra
            colocarPalabra('COMPUESTO', 0, 0, 'vertical');
            colocarPalabra('DIENTE', 15, 11, 'horizontal');
            colocarPalabra('HALÓGENO',  4, 3, 'horizontal');
            colocarPalabra('IONICO', 11, 2, 'vertical');
            colocarPalabra('FLUORESCENTE', 8, 19, 'vertical');
            colocarPalabra('CORROSIVO', 9, 7, 'vertical');
            colocarPalabra('BUCAL', 8, 10, 'vertical');
            colocarPalabra('EXPERIMENTO', 19, 1, 'horizontal');
            colocarPalabra('FLUORITA', 2, 10, 'horizontal');
            colocarPalabra('ELECTRONEGATIVIDAD',6, 2, 'horizontal');
           

            llenarEspaciosVacios();
            mostrarTablero();
            mostrarPalabras();
        }

        // Mostrar el tablero en la página
        function mostrarTablero() {
            const contenedor = document.getElementById('tablero');
            contenedor.innerHTML = '';
            
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    const celda = document.createElement('div'); // Este es un DOM
                    celda.className = 'celda';
                    celda.textContent = tablero[i][j];
                    celda.dataset.fila = i;
                    celda.dataset.columna = j;
                    
                    // Eventos para seleccionar
                    celda.addEventListener('mousedown', empezarSeleccion);
                    celda.addEventListener('mouseover', continuarSeleccion);
                    celda.addEventListener('mouseup', terminarSeleccion);
                    
                    // Para móviles
                    celda.addEventListener('touchstart', empezarSeleccion);
                    celda.addEventListener('touchmove', function(e) {
                        e.preventDefault(); // Evita que no se mueva ni haga scroll en la pantalla cuando selecciones
                        const touch = e.touches[0]; // Cantidad de dedos se tocan en la pantalla 
                        const elemento = document.elementFromPoint(touch.clientX, touch.clientY);
                        if (elemento && elemento.classList.contains('celda')) {
                            continuarSeleccion({target: elemento, preventDefault: () => {}});
                        }
                    });
                    celda.addEventListener('touchend', terminarSeleccion);
                    
                    contenedor.appendChild(celda);
                }
            }
        }

        // Mostrar la lista de palabras
        function mostrarPalabras() {
            const contenedor = document.getElementById('listaPalabras');
            contenedor.innerHTML = '';
            
            palabras.forEach(palabra => {
                const elemento = document.createElement('span');
                elemento.className = 'palabra';
                elemento.textContent = palabra;
                if (palabrasEncontradas.includes(palabra)) {
                    elemento.classList.add('encontrada');
                }
                contenedor.appendChild(elemento);
            });
        }

        // Empezar a seleccionar
        function empezarSeleccion(evento) {
            evento.preventDefault();
            seleccionando = true;
            celdaInicio = evento.target;
            
            // Limpiar selección anterior
            limpiarSeleccion();
            
            celdaInicio.classList.add('seleccionada');
        }

        // Continuar seleccionando
        function continuarSeleccion(evento) {
            if (seleccionando && celdaInicio) {
                evento.preventDefault();
                
                // Limpiar selección anterior (excepto encontradas)
                document.querySelectorAll('.seleccionada').forEach(celda => {
                    if (!celda.classList.contains('encontrada')) {
                        celda.classList.remove('seleccionada');
                    }
                });
                
                // Seleccionar desde inicio hasta aquí
                celdaFin = evento.target;
                seleccionarLinea(celdaInicio, celdaFin);
            }
        }

        // Terminar selección
        function terminarSeleccion(evento) {
            if (seleccionando && celdaInicio) {
                evento.preventDefault();
                if (!celdaFin) {
                    celdaFin = evento.target;
                }
                verificarPalabra();
            }
            seleccionando = false;
            celdaInicio = null;
            celdaFin = null;
        }

        // Seleccionar una línea de celdas
        function seleccionarLinea(inicio, fin) {
            const filaInicio = parseInt(inicio.dataset.fila);
            const columnaInicio = parseInt(inicio.dataset.columna);
            const filaFin = parseInt(fin.dataset.fila);
            const columnaFin = parseInt(fin.dataset.columna);
            
            // Solo líneas horizontales o verticales
            if (filaInicio === filaFin) {
                // Horizontal
                const minCol = Math.min(columnaInicio, columnaFin);
                const maxCol = Math.max(columnaInicio, columnaFin);
                for (let j = minCol; j <= maxCol; j++) {
                    const celda = document.querySelector(`[data-fila="${filaInicio}"][data-columna="${j}"]`);
                    if (!celda.classList.contains('encontrada')) {
                        celda.classList.add('seleccionada');
                    }
                }
            } else if (columnaInicio === columnaFin) {
                // Vertical
                const minFila = Math.min(filaInicio, filaFin);
                const maxFila = Math.max(filaInicio, filaFin);
                for (let i = minFila; i <= maxFila; i++) {
                    const celda = document.querySelector(`[data-fila="${i}"][data-columna="${columnaInicio}"]`);
                    if (!celda.classList.contains('encontrada')) {
                        celda.classList.add('seleccionada');
                    }
                }
            }
        }

        // Verificar si la selección es una palabra
        function verificarPalabra() {
            const celdas = document.querySelectorAll('.seleccionada:not(.encontrada)');
            if (celdas.length === 0) return;
            
            let palabra = '';
            const posiciones = [];
            
            // Obtener las letras y posiciones
            celdas.forEach(celda => {
                palabra += celda.textContent;
                posiciones.push({
                    fila: parseInt(celda.dataset.fila),
                    columna: parseInt(celda.dataset.columna),
                    elemento: celda
                });
            });
            
            // Verificar palabra normal y al revés
            const palabraReves = palabra.split('').reverse().join('');
            
            if (palabras.includes(palabra) || palabras.includes(palabraReves)) {
                const palabraEncontrada = palabras.includes(palabra) ? palabra : palabraReves;
                
                if (!palabrasEncontradas.includes(palabraEncontrada)) {
                    palabrasEncontradas.push(palabraEncontrada);
                    celdas.forEach(celda => {
                        celda.classList.add('encontrada');
                        celda.classList.remove('seleccionada');
                    });
                    mostrarPalabras();
                    mostrarMensaje(`¡Encontraste: ${palabraEncontrada}!`);
                    
                    if (palabrasEncontradas.length === palabras.length) {
                        mostrarMensaje(' ¡Felicidades! ¡Encontraste todas las palabras!');
                    }
                } else {
                    // Ya fue encontrada
                    limpiarSeleccion();
                }
            } else {
                // No es una palabra válida
                limpiarSeleccion();
            }
        }

        // Mostrar mensaje
        function mostrarMensaje(texto) {
            document.getElementById('mensaje').textContent = texto;
            setTimeout(() => {
                document.getElementById('mensaje').textContent = '';
            }, 3000);
        }

        // Limpiar selección
        function limpiarSeleccion() {
            document.querySelectorAll('.seleccionada').forEach(celda => {
                if (!celda.classList.contains('encontrada')) {
                    celda.classList.remove('seleccionada');
                }
            });
        }

        // Nuevo juego
        function nuevoJuego() {
            palabrasEncontradas = [];
            document.querySelectorAll('.encontrada, .seleccionada').forEach(celda => {
                celda.classList.remove('encontrada', 'seleccionada');
            });
            crearJuego();
            mostrarMensaje('¡Nuevo juego iniciado!');
        }

        // Iniciar el juego cuando cargue la página
        window.onload = function() {
            crearJuego();
        };