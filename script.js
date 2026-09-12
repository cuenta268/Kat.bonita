document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("intro");
    const enterButton = document.getElementById("enterButton");
    const museum = document.getElementById("museum");

    // Mostrar el museo al presionar "Entrar a nuestro museo"
    if (enterButton) {
        enterButton.addEventListener("click", function () {

            intro.classList.add("hidden");
            museum.classList.remove("hidden");

            // Llevar al inicio del museo
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Botón "Volver al inicio"
    const restartButton = document.getElementById("restartButton");

    if (restartButton) {
        restartButton.addEventListener("click", function () {

            museum.classList.add("hidden");
            intro.classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Botón de música
    // Se mantiene por compatibilidad con tu HTML,
    // pero no hace nada si no existe el audio.
    const musicButton = document.getElementById("musicButton");
    const localMusic = document.getElementById("localMusic");

    if (musicButton && localMusic) {

        musicButton.addEventListener("click", function () {

            if (localMusic.paused) {
                localMusic.play().catch(function () {
                    console.log("No se pudo reproducir el audio.");
                });

                musicButton.setAttribute(
                    "aria-label",
                    "Pausar música"
                );

            } else {
                localMusic.pause();

                musicButton.setAttribute(
                    "aria-label",
                    "Reproducir música"
                );
            }

        });

    }

});
