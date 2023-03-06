const butInstall = document.getElementById('buttonInstall');

// Argumentation for introducing the Progressive Web Application and Event handler for the `beforeinstallprompt` application
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle("hidden", false);
});