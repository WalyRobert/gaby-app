# Gaby — Automatización de aplicaciones con IA

**Idioma:** Español  
**Estado:** Prototipo experimental. La integración real con el modelo de IA y la ejecución en dispositivos reales todavía deben completarse.

Gaby es un prototipo de asistente que recibe instrucciones en lenguaje natural y representa acciones sobre interfaces de aplicaciones. La propuesta consiste en acercar los modelos de IA a la automatización de interfaces digitales.

## Visión del proyecto

1. La persona describe una tarea en lenguaje natural.
2. La aplicación reúne una descripción de los elementos disponibles en una pantalla simulada.
3. Un modelo de IA interpreta la solicitud y propone una acción estructurada.
4. La aplicación valida la acción.
5. La interfaz muestra la acción y puede navegar a otra pantalla simulada.

> **Estado actual:** el servicio `services/geminiService.ts` todavía no realiza una llamada efectiva a la API de Gemini. Actualmente comprueba la disponibilidad de una clave y devuelve un mensaje demostrativo. Las acciones se simulan en la interfaz; este repositorio no demuestra la automatización de aplicaciones Android reales.

## Tecnologías identificadas

- React 19
- TypeScript
- Vite
- SDK de Google GenAI incluido en las dependencias
- Componentes React para la interfaz de demostración

## Arquitectura observada

- `App.tsx`: coordina el estado de la interfaz, el historial de conversación y las acciones simuladas.
- `types.ts`: define comandos, acciones, mensajes y elementos de pantalla.
- `constants.tsx`: datos utilizados para representar aplicaciones y pantallas.
- `components/`: componentes visuales.
- `services/geminiService.ts`: punto de integración previsto con Gemini.

## Ejecución local

**Requisitos:** Node.js y npm.

```bash
git clone https://github.com/WalyRobert/gaby-app.git
cd gaby-app
npm install
npm run dev
```

Abre la dirección local que indique Vite.

## Próximos pasos

- [ ] Implementar una llamada real a Gemini en un entorno protegido.
- [ ] Definir un esquema JSON para las acciones y validar las respuestas del modelo.
- [ ] Alinear el tipo de retorno del servicio con `AutomationAction`.
- [ ] Añadir gestión de errores, tiempos de espera y límites.
- [ ] Incorporar confirmación humana para acciones sensibles.
- [ ] Separar la simulación visual de una futura integración con dispositivos reales.
- [ ] Crear pruebas automatizadas y una guía de demostración.

## Seguridad

La clave de API no debe exponerse en el código enviado al navegador. Para una versión de producción, se recomienda intermediar las llamadas mediante un backend y mantener los secretos únicamente en el servidor. Este prototipo no debe ejecutar acciones reales o sensibles en dispositivos.

## Autor

Waly Robert

Proyecto independiente de estudio y experimentación en IA aplicada a la automatización de interfaces.
