# Scripting in SVG

No, it's not a new framework. Using JavaScript in the SVG element is familiar to working in the DOM, yet poses its own challenges.

## Working in the Namespace

- `createElementNS()`: Creates a new SVG element using the SVG Namespace `"http://www.w3.org/2000/svg"`.
- `getElementById()`: Retrieves an element by its ID within the SVG namespace.

## Element Selection

- `getElementById()`: Returns a reference to the element by its ID.
- `querySelector()`: Returns the first element within the document that matches a specified selector.
- `querySelectorAll()`: Returns all elements within the document that match a specified selector.

## Style and Class Manipulation

- `style`: Accesses and modifies the inline styles of an element.
- `classList.add()`: Adds a class to an element.
- `classList.remove()`: Removes a class from an element.
- `classList.toggle()`: Toggles a class on an element.
- `classList.contains()`: Checks if an element has a specific class.
- `classList.replace()`: Replaces an existing class with a new class.
- `classList.item()`: Returns the class name at a specified index.
- `classList.length`: Returns the number of classes on an element.
- `className`: Gets or sets the class attribute of an element.
- `setProperty()`: Sets a CSS property on an element.
- `getPropertyValue()`: Retrieves the value of a CSS property from an element.
- `removeProperty()`: Removes a CSS property from an element.
- `cssText`: Gets or sets the entire CSS text of an element.
- `getComputedStyle()`: Retrieves the computed style of an element.

## Element Creation and Manipulation

- `appendChild()`: Adds a child element to an SVG element.
- `insertBefore()`: Inserts a new node before a specified child node.
- `setAttribute()`: Sets the value of an attribute on an element.
- `getAttribute()`: Retrieves the value of an attribute from an element.
- `removeAttribute()`: Removes an attribute from an element.
- `remove()`: Removes an element from the DOM.

Element manipulation methods:

- `cloneNode()`: Creates a copy of an element.
- `replaceChild()`: Replaces a child node with a new node.
- `hasChildNodes()`: Checks if an element has any child nodes.
- `childNodes`: Returns a live NodeList of child nodes of an element.
- `firstChild`: Returns the first child node of an element.
- `lastChild`: Returns the last child node of an element.
- `parentNode`: Returns the parent node of an element.
- `nextSibling`: Returns the next sibling node of an element.

Usage: `circle.setAttribute("cx", 50);`
Usage: `svg.getElementById('circleId').remove();`

## Event Handling

- `addEventListener()`: Attaches an event listener to an element.
- `removeEventListener()`: Removes an event listener from an element.
- `preventDefault()`: Prevents the default action of an event.
- `target`: Refers to the element that triggered the event.
- `currentTarget`: Refers to the element to which the event handler is attached.
- `clientX, clientY`: Coordinates of the mouse event relative to the viewport.
- `offsetX, offsetY`: Coordinates of the mouse event relative to the target element.
- `pageX, pageY`: Coordinates of the mouse event relative to the entire document.
- `screenX, screenY`: Coordinates of the mouse event relative to the screen.

### Keyboard Events

- `charCode`: The character code of the key that was pressed.
- `code`: The physical key on the keyboard that was pressed.
- `key`: The value of the key that was pressed.
- `keyCode`: The code of the key that was pressed.
- `altKey`: Indicates if the Alt key was pressed.
- `ctrlKey`: Indicates if the Control key was pressed.
- `metaKey`: Indicates if the Meta key (Windows key or Command key) was pressed.
- `shiftKey`: Indicates if the Shift key was pressed.
- `repeat`: Indicates if the key is being held down and is repeating.
- `which`: The key that was pressed in a keyboard event.

## Point Information

- `getPointAtLength()`: Returns the point at a specified distance along the path.
- `getTotalLength()`: Returns the total length of the path.
- `isPointInFill()`: Checks if a given point is within the fill area of the element.
- `isPointInStroke()`: Checks if a given point is within the stroke area of the element.
- `getScreenCTM()`: Returns the transformation matrix from user space to screen space.
- `getTransformToElement()`: Returns the transformation matrix from one element to another.
- `getPathSegAtLength()`: Returns the path segment at a specified distance along the path.
- `getPathLength()`: Returns the length of the path.
- `getPathSegList()`: Returns the list of path segments for a given path element.
- `getPathSegTypeAsLetter()`: Returns the type of a path segment as a letter.
- `getPathSegType()`: Returns the type of a path segment as a number.

## Transformations

- `transform.baseVal.appendItem()`: Appends a transformation to an element's transform list.
  ?
- `transform.baseVal.initialize()`: Initializes a new transformation list.
- `transform.baseVal.getItem()`: Retrieves a transformation from the list.
- `transform.baseVal.replaceItem()`: Replaces a transformation in the list.
- `transform.baseVal.removeItem()`: Removes a transformation from the list.
- `transform.baseVal.insertItemBefore()`: Inserts a transformation before a specified item in the list.
- `transform.baseVal.clear()`: Clears all transformations from the list.
- `transform.baseVal.numberOfItems`: Returns the number of transformations in the list.
- `transform.baseVal.consolidate()`: Consolidates the transformations into a single matrix.
- `transform.baseVal.createSVGMatrix()`: Creates a new SVGMatrix object.
- `transform.baseVal.createSVGTransform()`: Creates a new SVGTransform object.
- `transform.baseVal.createSVGTransformFromMatrix()`: Creates a new SVGTransform object from an SVGMatrix.
- `transform.baseVal.createSVGMatrixFromTransform()`: Creates a new SVGMatrix object from an SVGTransform.
- `transform.baseVal.createSVGMatrixFromRect()`: Creates a new SVGMatrix object from a rectangle.
- `transform.baseVal.createSVGMatrixFromPoint()`: Creates a new SVGMatrix object from a point.

## Spatial Awareness

- `getBBox()`: Returns the bounding box of an element.
- `getViewBox()`: Returns the viewBox of an SVG element.
- `getScreenCTM()`: Returns the transformation matrix from user space to screen space.
  ?
- `getCTM()`: Returns the transformation matrix of an element.
- `getTransformToElement()`: Returns the transformation matrix from one element to another.
- `getIntersectionList()`: Returns a list of elements that intersect with a specified rectangle.
- `getEnclosureList()`: Returns a list of elements that are enclosed within a specified rectangle.

## Inter-document Scripting

- `getSVGDocument()`: Used with <iframe>, <embed>, or <object> elements to access the embedded SVG document.
- `parent.functionName()`: Used to call JavaScript functions in the parent HTML from within an embedded SVG.
- `window.parent`: Accesses the parent window from an embedded SVG.
- `window.top`: Accesses the topmost window from an embedded SVG.
- `window.opener`: Accesses the window that opened the current window from an embedded SVG.
