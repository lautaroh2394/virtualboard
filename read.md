VirtualBoard

Pizarra virtual para armar jugadas. Work in progress

Próximos pasos:
 - Agregar 'Frames': Modelo que contenga varias etapas de la jugada:
    x   Modelo Frames con array de Frame's
    x   Modelo Frame que contiene los Pawns y lógica para actualizar Frame actual
    x   VirtualBoardView ya no tendrá un CanvasView. Tnedrá ButtonsView, CurrentFrameView (ex CanvasView).
    CurrentCurrentFrameView que muestra los Pawns según el Frame actual
    Board se renombra a Frame
    Agregar en ButtonsView botones para avanzar, retroceder, o crear nuevo frame
    Refactorear como se inicia la app. Se está instanciando VirtualBoardView pasándosele un Frame cuando debería ser un Frames con un Frame.
 - Posibilidad de moverse entre frames
 - Exportar frames a JSON
 - Página principal con dos opciones: Nueva jugada o Cargar Jugada
 - Mejorar estilos
 - Agregar distintos tipos de peones