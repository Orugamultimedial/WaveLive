WaveLive

Este es un proyecto open source pensado para satisfacer las necesidades de una radio (fm/am/online).
La idea con waveLive es que el operador pueda realizar la tarea en vivo sin tener que adquirir una licencia cara de software privativo.

para esto vamos a definir primeramente las necesidades del cliente:
Un operador de radio necesita que todo esté al alcance de un click y a simple vista, ya que no dispone de mucho tiempo en las transmisiones en vivo
para realizar los cambios o realizar busquedas de archivos en el PC.
Debe controlar varios procesos a la vez, como ser: nivel de audio del microfono/musica subida de audio por streaming, siguiente canción, listado de canciones/entrevistas/efectos/cortinas musicales, etc.
A esto debemos sumarle que en las radios de bajo presupuesto los locutores son muchas veces tambièn sus propios operadores, por lo que a las funciones anteriores deberiamos agregar las que realiza el locutor, que por lo general son, lectura de noticias en portales web, lectura de mensajes (whatsapp/facebook por ejemplo).

Con esto ya tenemos un panorama de las necesidades del usuario final del producto a desarrollar.

Para complicar un poco más las cosas también tenemos las variables de distribuciòn del producto, ya que necesitamos que se ejecute tanto en linux, MacOS o Windows, y que el Source Code sea fácil de mantener.

Necesidades Técnicas:

MySQL: cada emisora de radio debería tener una base de datos con la música organizada por géneros y estilos.
a esta base se le deben poder insertar y eliminar registros desde la app.

html/css: para las vistas.

javascript: es rápio en ejecución y no es necesario adaptarlo a los diferente sistemas operativos.

php: para ejecutar el backend en localhost.


