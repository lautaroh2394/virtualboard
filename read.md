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
      Agregar posibilidad de serializar modelos:
         - Pawn
         - Frame
         - Frames
         (Con el attributes del model de Backbone alcanza?)
      Agregar boton para descargar JSON
 - Crear button view builder? (es necesario?)
 - Mejorar vista del peon:
      Agregar opcion para cambiar nombre
      Agregar opcion para cambiar color o setear imagen de fondo
 - Página principal con dos opciones: Nueva jugada o Cargar Jugada
 - Mejorar estilos
 - Agregar distintos tipos de peones