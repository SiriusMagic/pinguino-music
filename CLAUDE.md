# pinguino-music

Reproductor de música móvil (Expo SDK 58 + React Native + TypeScript). Funciona en el navegador, en Expo Go o como APK; sin backend.

## Comandos

```bash
cd frontend
yarn install
yarn web            # versión web
yarn start          # Expo Go en el celular
yarn typecheck      # revisión de tipos (TypeScript)
yarn test:e2e       # recorrido en Chromium sobre la versión web (Playwright)
npx expo install --fix   # alinear versiones con el SDK de Expo
```

## Reglas del dueño (aplican a todo cambio)

- **Librerías**: si una dependencia está abandonada, sin mantenimiento, obsoleta o tiene una alternativa claramente más actual o potente, reemplázala sin pedir permiso. Explica el cambio y el motivo en el PR.
- **Quitar lo que no se usa**: archivos y dependencias que ningún código importa se eliminan. Menos código = menos superficie de ataque.
- **Nunca subir secretos**: ni llaves de API, ni contraseñas, ni archivos `.env`. Usa variables de entorno y `.env.example`.
- **Todo por pull request** hacia `main`, con las pruebas en verde antes de fusionar.
- **Probar antes de subir**: ejecuta las pruebas del repo; si cambia la interfaz, pruébala en un navegador.
- **Idioma**: README, PRs y comentarios para el usuario en español, claros y sin jerga.
- **Dependabot**: las actualizaciones menores se fusionan solas si las pruebas pasan; las mayores se revisan a mano.
- **Expo**: actualiza paquetes con `npx expo install` (no con `yarn add`) para que coincidan con el SDK; revisa `npx expo-doctor`.
