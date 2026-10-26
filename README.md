# Pingüino Music — Reproductor de Música Móvil

Aplicación móvil de **reproducción de música** con una mascota pingüino, hecha con **Expo / React Native** y pensada principalmente para Android.

## Funciones principales

- **Bienvenida**: elección de idioma (español, inglés, portugués, francés, italiano y alemán) y pantalla de bienvenida "Reproduce tu música".
- **Biblioteca**: pestañas de Playlists, Carpetas, Artistas y Álbumes, con búsqueda por título, artista o álbum y orden por título, artista o recientes.
- **Escaneo de carpetas**: simula la búsqueda de canciones y carga una biblioteca de demostración con 10 temas libres de derechos.
- **Reproductor**: mini reproductor flotante y pantalla completa con portada, barra de progreso, anterior/siguiente, aleatorio y repetición (desactivado → todas → una).

> ℹ️ Estado actual: usa canciones de demostración en línea. El escaneo real de archivos del teléfono y la reproducción en segundo plano están pendientes.

## Tecnología

- **App**: Expo + React Native + TypeScript, con `expo-router` y `expo-audio`
- **Backend**: FastAPI (Python), por ahora solo con rutas de prueba

## Cómo ejecutarlo

Requisitos: **Node.js 20+** y la app **Expo Go** en tu teléfono (o un emulador Android).

```bash
cd frontend
yarn install
yarn start        # escanea el código QR con Expo Go
yarn android      # abre en un emulador Android
yarn web          # abre en el navegador
```

## Licencia

Copyright 2026 SiriusMagic

Este proyecto se distribuye bajo la **Licencia Apache 2.0**. Consulta el archivo [`LICENSE`](./LICENSE) para ver el texto completo.

En resumen: cualquiera puede usar, copiar, modificar y distribuir este código, siempre que conserve el aviso de copyright y la licencia. El software se entrega **"tal cual", sin garantías de ningún tipo**, y los autores no se hacen responsables de daños derivados de su uso.
