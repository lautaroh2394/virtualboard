VirtualBoard

Pizarra virtual para armar jugadas. Work in progress

Task list:
 - Agregar 'Frames': Modelo que contenga varias etapas de la jugada:
    x   Modelo Frames con array de Frame's
    x   Modelo Frame que contiene los Pawns y lógica para actualizar Frame actual
    x   VirtualBoardView ya no tendrá un CanvasView. Tnedrá ButtonsView, CurrentFrameView (ex CanvasView).
    x CurrentCurrentFrameView que muestra los Pawns según el Frame actual
    x Board se renombra a Frame
    x Agregar en ButtonsView botones para avanzar, retroceder, o crear nuevo frame
 - x Posibilidad de moverse entre frames
 - Exportar frames a JSON
      x Agregar posibilidad de serializar y deserializar modelos:
         - Pawn
         - Frame
         - Frames
         (Con el attributes del model de Backbone alcanza? Con instanciarlos pasandoles ese objeto attributes se termina con un modelo equivalente?)
      x Agregar boton para descargar JSON
      x Agregar boton para cargar json
 - x Cuando se crean frames no se está seteando el id
 - x Agregar id a los peones
 - x Cuando se cree un nuevo frame, que por defecto cargue peones iguales a los del frame anterior
 - x Agregar índice visual a cada frame
 - Mejorar vista del peon:
      Que sea por defecto un circulo lleno
      
 - Al clickear y soltar peón que aparezca un mini menú con opciones:
     'Nombre': Cambiar nombre
     'Color': Cambiar color
     'Forma': Cambiar forma

 - x Página principal con dos opciones: Nueva jugada o Cargar Jugada (Actually done: opciones en barra de herramientas para cargar/descargar)
 - Mejorar estilos
      Pawn view
      Imagen de fondo
      Frame id
      
 - Imagen de fondo configurable
 - Transicion animada entre frames
 - Agregar distintos tipos de peones
 - Agregar botón de 'guardar' para uqe se guarde en el local storage o en la idb
 - Agregar botón de 'guardar' para uqe se guarde en el local storage o en la idb}

Issue list:
 x Refactorear como se inicia la app. Se está instanciando VirtualBoardView pasándosele un Frame cuando debería ser un Frames con un Frame.
 - Issue con la generación de ids. Lo hace cada frame. Si en un frame se agregan muchos, se vuelve a otro y se crea un peón nuevo el id se repetirá, si se crea un nuevo frame a partir de este cuando se haga la transicion animada dará muchos problemas. Evalura si es mejor hacer estático el método o moverlo al parent Frames para generar ids uqe no se repitan.