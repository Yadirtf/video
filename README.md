Aquí tienes la versión actualizada y refinada del documento de especificaciones técnicas para tu agente. He ajustado el enfoque hacia el nicho de camisas deportivas de alta calidad y modificado los elementos visuales para priorizar el contacto digital (WhatsApp) en lugar de una ubicación física.

Especificación Técnica: Generador de Video Dinámico para E-commerce Deportivo
1. Objetivo del Proyecto
Desarrollar una aplicación con Next.js y Remotion para automatizar la creación de videos promocionales de camisas deportivas de alta gama. El sistema debe permitir la unión de dos clips de video y la superposición de capas de texto dinámicas que incentiven la conversión directa a WhatsApp y redes sociales.

2. Estructura de la Composición
El agente debe programar una composición (MainComposition) con las siguientes características:

Entrada de Media: Dos archivos de video (.mp4) cargados desde el directorio público.

Sincronización: El Video A debe transicionar al Video B de forma fluida. Se recomienda un ligero solapamiento (overlap) de 5 a 10 cuadros para evitar cortes bruscos.

Dimensiones: Formato vertical (9:16) optimizado para Reels de Instagram y TikTok, resaltando los detalles de las telas y escudos de las prendas.

3. Capas de Información y Overlays (Actualizado)
En lugar de ubicación física, el video debe centrarse en la identidad de marca y el canal de venta:

Brand & Product Tag: Un texto destacado que mencione el nombre del establecimiento y una breve descripción de valor (ej: "Calidad Premium en cada detalle" o "Camisas Deportivas de Alta Gama").

Call to Action (WhatsApp): Dado que es un emprendimiento digital, este es el elemento más importante. Debe aparecer un número de celular claro, preferiblemente acompañado de un ícono de WhatsApp animado.

Venta Directa: Un banner inferior que indique que los pedidos se realizan exclusivamente por redes sociales o mensaje directo, reforzando la exclusividad del servicio personalizado.

4. Lógica de Animación (Argumentos Técnicos)
Para asegurar un acabado profesional, el agente debe implementar:

Funciones de Spring: Las apariciones del número de WhatsApp deben usar spring para generar un efecto de "rebote" que capte la atención del cliente.

Loop de Brillo: Si el agente es avanzado, puede programar un efecto de brillo (overlay de gradiente) que pase sobre el texto del número de celular cada 3 segundos para mantener el foco visual ahí.

Tipografía Deportiva: Utilizar fuentes tipográficas de estilo "Bold" o "Athletic" (ej: Roboto Condensed o fuentes tipo Jersey) para ser coherente con el producto vendido.

5. Configuración de Props Dinámicas
El código debe estar preparado para recibir estos datos como props, permitiendo cambios rápidos sin tocar el código base:

TypeScript
{
  businessName: string;      // Nombre del negocio
  description: string;       // "Calidad Premium", "Telas importadas", etc.
  whatsappNumber: string;    // El contacto directo
  socialMediaHandle: string; // @usuario de la tienda
}
6. Argumento de Venta del Sistema
"Al ser un emprendimiento basado en ventas por catálogo y redes sociales, el uso de Remotion permite generar un video nuevo para cada modelo de camisa en cuestión de segundos. Esto elimina la necesidad de un editor de video humano y permite que el contenido sea 100% fiel a la calidad del producto físico."