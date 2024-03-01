### Heroes Gallery

Este proyecto consiste en una galería de héroes, donde los usuarios pueden explorar diferentes personajes del universo, ver sus imágenes y obtener información sobre ellos. La página está diseñada con HTML, estilizada con CSS, y cuenta con funcionalidades dinámicas implementadas utilizando JavaScript.

#### Funcionalidades de la Página:

1. **Exploración de Héroes:** Los usuarios pueden desplazarse por la galería de héroes para ver imágenes de los personajes.

2. **Información Detallada:** Al hacer clic en el botón "Ver", se abre un modal que muestra más detalles sobre el héroe seleccionado, incluyendo su nombre y una breve descripción.

3. **Búsqueda de Héroes:** Los usuarios pueden buscar héroes por nombre utilizando la barra de búsqueda en la parte superior de la página. La galería se filtra dinámicamente para mostrar solo los héroes cuyos nombres coinciden con el término de búsqueda.

4. **Navegación entre Páginas:** Si se hace clic en el logo de Marvel en la esquina superior izquierda, se navega a la página de DC Comics. Del mismo modo, si se hace clic en el logo de DC Comics, se regresa a la página de Marvel.

#### Clases del `style.css`:

- `.body1` y `.body2`: Estilos para los fondos de la página.
- `.marvel` y `.dc`: Estilos para el texto de los encabezados.
- `.grid-container` y `.grid-item`: Estilos para la disposición y apariencia de la galería de héroes.
- `.modal`, `.ventana1`, `.ventana2`, `.cerrar1`, y `.cerrar2`: Estilos para el modal que muestra información detallada sobre los héroes.
- `.foto`, `.foto-det`, `.detalles`, `.boton-ver`, `.titulo`, `.titulo-det`, `.titulo-det2`, `.cont-det`, y `.text-boton`: Estilos para elementos específicos dentro del modal y la galería.

#### Funcionalidad del `javascript`:

- **Obtención de Datos:** Los archivos `marvel.json`  y `dc.json` contiene información sobre los héroes de Marvel, como su nombre, descripción y URL de la imagen. El JavaScript carga estos datos y los presenta en la página.
- **Visualización de Héroes:** Los datos de los héroes se presentan en tarjetas dentro de la galería.
- **Modal de Detalles:** Al hacer clic en una tarjeta de héroe, se muestra un modal con más detalles sobre el héroe seleccionado.
- **Búsqueda de Héroes:** La página permite a los usuarios buscar héroes por nombre utilizando la barra de búsqueda, y muestra resultados filtrados en tiempo real.

#### Estructura de las Carpetas:

```
- css/
    - style.css
- js/
    - main_mar.js
    - main_dc.js
- storage/
    - images/
        - dc/
        - marvel/
    - json/
        - dc.json
        - marvel.json
- dc.html
- marvel.html
```

- **css**: Contiene el archivo CSS que define estilos para la página.
- **js**: Contiene el archivo JavaScript que controla la interactividad de la página.
- **storage**: Contiene imágenes de héroes y archivos JSON con datos sobre ellos.
- **dc.html** y **marvel.html**: Páginas HTML que muestran la galería de héroes de DC y Marvel respectivamente.

#### Navegación entre Páginas:

- Al hacer clic en el logo de Marvel, se navega a la página de DC Comics.
- Al hacer clic en el logo de DC Comics, se regresa a la página de Marvel.

