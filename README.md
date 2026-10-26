# Pingüino Music — Reproductor de Música Móvil

Aplicación móvil de **reproducción de música** con una mascota pingüino, hecha con **Expo / React Native** y pensada principalmente para Android.

## Funciones principales

- **Bienvenida**: elección de idioma (español, inglés, portugués, francés, italiano y alemán) y pantalla de bienvenida "Reproduce tu música".
- **Biblioteca**: pestañas de Playlists, Carpetas, Artistas y Álbumes, con búsqueda por título, artista o álbum y orden por título, artista o recientes.
- **Escaneo de carpetas**: simula la búsqueda de canciones y carga una biblioteca de demostración con 10 temas libres de derechos.
- **Reproductor**: mini reproductor flotante y pantalla completa con portada, barra de progreso, anterior/siguiente, aleatorio y repetición (desactivado → todas → una).

> ✅ **Funciona sin servidor ni base de datos.** Corre en el navegador, en Expo Go o como APK.
>
> ℹ️ Usa canciones de demostración en línea. El escaneo real de archivos del teléfono y la reproducción en segundo plano están pendientes.

## Tecnología

- **Expo SDK 58** + **React Native 0.88** + **TypeScript**
- `expo-router` para la navegación y `expo-audio` para el sonido
- Sin backend: el idioma y el progreso se guardan en el dispositivo (AsyncStorage)

## Cómo usarla

Requisitos: **Node.js 20 o superior** y **Yarn**.

```bash
cd frontend
yarn install
yarn web          # abre la app en el navegador
yarn start        # escanea el código QR con la app Expo Go del celular
yarn android      # abre en un emulador Android
```

### Versión web para publicar

```bash
cd frontend
yarn build:web    # genera la carpeta frontend/dist
npx serve dist    # pruébala en http://localhost:3000
```

El workflow `.github/workflows/pages.yml` compila la versión web en cada pull request y la publica en GitHub Pages en cada cambio a `main`. GitHub Pages solo está disponible en repos **públicos** con el plan gratuito.

### Compartirla desde tu computadora con un túnel

Con `yarn web` corriendo, en otra terminal:

```bash
npx cloudflared tunnel --url http://localhost:8081
```

Te dará un enlace `https://….trycloudflare.com` para abrirla desde cualquier dispositivo.

### Generar el APK de Android

```bash
cd frontend
npx eas-cli build -p android --profile preview
```

Necesitas una cuenta gratuita de Expo.

## Licencia

Copyright 2026 SiriusMagic

Este proyecto se distribuye bajo la **Licencia Apache 2.0**. Consulta el archivo [`LICENSE`](./LICENSE) para ver el texto completo.

En resumen: cualquiera puede usar, copiar, modificar y distribuir este código, siempre que conserve el aviso de copyright y la licencia. El software se entrega **"tal cual", sin garantías de ningún tipo**, y los autores no se hacen responsables de daños derivados de su uso.

## Seguridad

¿Encontraste una vulnerabilidad? Lee [`SECURITY.md`](./SECURITY.md) y repórtala de forma privada.
