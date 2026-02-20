# web-estudio-contable

## Formulario de contacto

Los envíos del formulario se reciben en **info@estudioduranteyasociados.com**. Para que funcione el envío por email hay que configurar Resend:

1. Crear cuenta en [resend.com](https://resend.com) y obtener una API Key.
2. En la raíz del proyecto, en `.env.local` (o `.env`), agregar:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```
3. En el plan gratuito de Resend los correos se envían desde `onboarding@resend.dev`; los mensajes llegan igual a info@estudioduranteyasociados.com.
