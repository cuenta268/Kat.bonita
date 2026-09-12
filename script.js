document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // BOTÓN DE ENTRADA
    // ==========================================

    const botones = document.querySelectorAll("button, a, .btn, .button");

    botones.forEach((boton) => {

        const texto = boton.textContent.trim().toLowerCase();

        if (
            texto.includes("entrar") ||
            texto.includes("ingresar") ||
            texto.includes("comenzar") ||
            texto.includes("abrir") ||
            texto.includes("entrar al museo")
        ) {

            boton.addEventListener("click", function (e) {
                e.preventDefault();

                // Buscar posibles pantallas de bienvenida
                const inicio =
                    document.querySelector("#inicio") ||
                    document.querySelector(".inicio") ||
                    document.querySelector("#welcome") ||
                    document.querySelector(".welcome") ||
                    document.querySelector("#bienvenida") ||
                    document.querySelector(".bienvenida");

                // Buscar posibles pantallas principales
                const principal =
                    document.querySelector("#museo") ||
                    document.querySelector(".museo") ||
                    document.querySelector("#principal") ||
                    document.querySelector(".principal") ||
                    document.querySelector("#contenido") ||
                    document.querySelector(".contenido") ||
                    document.querySelector("main");

                // Ocultar la bienvenida
                if (inicio) {
                    inicio.style.display = "none";
                }

                // Mostrar el contenido
                if (principal) {
                    principal.style.display = "block";
                }

                // Si no encuentra secciones específicas,
                // intenta ocultar el elemento padre del botón.
                if (!inicio && principal === null) {

                    let elemento = boton.parentElement;

                    if (elemento) {
                        elemento.style.display = "none";
                    }

                    // Mostrar elementos que estaban ocultos
                    document.querySelectorAll(
                        "[style*='display: none'], .hidden, .oculto"
                    ).forEach((elemento) => {
                        elemento.style.display = "";
                    });
                }

                // Llevar la pantalla hacia el contenido
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });

        }

    });


    // ==========================================
    // BOTONES CON data-target
    // ==========================================

    document.querySelectorAll("[data-target]").forEach((boton) => {

        boton.addEventListener("click", function (e) {

            e.preventDefault();

            const destino = this.getAttribute("data-target");
            const elemento = document.querySelector(destino);

            if (elemento) {
                elemento.style.display = "block";

                elemento.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // ==========================================
    // ENLACES INTERNOS
    // ==========================================

    document.querySelectorAll("a[href^='#']").forEach((enlace) => {

        enlace.addEventListener("click", function (e) {

            const destino = this.getAttribute("href");

            if (destino && destino !== "#") {

                const elemento = document.querySelector(destino);

                if (elemento) {
                    e.preventDefault();

                    elemento.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }

            }

        });

    });

});
