VirtualBoard

Pizarra virtual para armar jugadas. Work in progress

Próximos pasos:
 - Agregar 'Frames': Modelo que contenga varias etapas de la jugada:
    x   Modelo Frames con array de Frame's
    x   Modelo Frame que contiene los Pawns y lógica para actualizar Frame actual
    x   VirtualBoardView ya no tendrá un CanvasView. Tnedrá ButtonsView, CurrentFrameView (ex CanvasView).
    x CurrentCurrentFrameView que muestra los Pawns según el Frame actual
    x Board se renombra a Frame
    x Agregar en ButtonsView botones para avanzar, retroceder, o crear nuevo frame
    x Refactorear como se inicia la app. Se está instanciando VirtualBoardView pasándosele un Frame cuando debería ser un Frames con un Frame.
 - x Posibilidad de moverse entre frames
 - Exportar frames a JSON
      x Agregar posibilidad de serializar y deserializar modelos:
         - Pawn
         - Frame
         - Frames
         (Con el attributes del model de Backbone alcanza? Con instanciarlos pasandoles ese objeto attributes se termina con un modelo equivalente?)
      x Agregar boton para descargar JSON
      Agregar boton para cargar json
 - Cuando se cree un nuevo frame, que por defecto cargue peones iguales a los del frame anterior
 - Crear button view builder? (es necesario?)
 - Mejorar vista del peon:
      Agregar opcion para cambiar nombre
      Agregar opcion para cambiar color o setear imagen de fondo
 - Página principal con dos opciones: Nueva jugada o Cargar Jugada
 - Transicion animada entre frames
 - Mejorar estilos
 - Agregar distintos tipos de peones