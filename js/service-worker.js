self.addEventListener('install', function(event){
    console.log('Serveci Worker instalado');
});

self.addEventListener('activate', function(event){
    console.log('Service worker ativado');
});

self.addEventListener('fetch', function(event){
    console.log('Service Worker interceptou uma requisição:', event.request.url);
});