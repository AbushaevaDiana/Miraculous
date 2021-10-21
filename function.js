/*
*@param {Presentation Maker} presentationMaker
*@return {Presentation} 
*/
function createPresentation(presentationMaker) {}

/*
*@param {Presentation} presentation
*@return {FileJson} 
*/
function savePresentation(presentation) {};

/*
*@param {Presentation} presentation
*@return {FilePDF}  
*/
function exportPresentation(presentation) {};

/*
*@param {Presentation} presentationMaker
*@param {FileJson} fileJson 
*@return { Presentation}
*/
function openPresentation(presentationMaker, fileJson) {};

/*
*@param {Presentation} presentation
*@param {string} name
*@return {Presentation}
*/
function editPresentationName(presentation, name) {}

/*
*@param {PresentationMaker} presentationMaker
*@param {Mode} mode
*@return {PresentationMaker, mode}
*/
function changeMode(presentationMaker, )

/*
*@param {Presentation} presentation
*@return {Presentation}
*/
function undo(presentation)

/*
*@param {Presentation} presentation
*@return {Presentation}
*/
function redo(presentation)

                                              //Slide//

/*
*@param {Presentation} presentation
*@return {Presentation}
*/
function addSlide(presentation) {}

/*
*@param {Presentation} presentation
*@return {Presentation}
*/
function deleteSelectedSlides(presentation) {}

/*
*@param {Presentation} presentation
*@param {Number} newSlidePosition  
*@return {Presentation}
*/
function moveSlide(presentation, newSlidePosition) {}

/*
*@param {Presentation} presentation
*@param {Background} background
*@return {Presentation}
*/
function editSlideBackground(presentation, background) {}

/*
*@param {Presentation} presentation
*@param {Effect} newEffect
*@return {Presentation}
*/
function editSlideEffect(presentation, newEffect) {}

                                            //Element//

/*
*@param {Presentation} presentation
*@param {ElementConcept} elementConcept
*@return {Presentation}
*/
function addElement(presentation, elementConcept) {}

/*
*@param {Presentation} presentation
*@return {Presentation}
*/
function deleteSelectedElements(presentation) {}

/*
*@param {Presentation} presentation
*@param{Number} x
*@param{Number} y
*@return {Presentation}
*/
function moveElement(presentation, x, y) {}

/*
*@param {Presentation} presentation
*@param {Number}  h
*@param {Number}  w
*@return {Presentation}
*/
function editElementSize(presentation, h, w) {}

/*
*@param {Presentation} presentation
*@param {Color}  color 
*@return {Presentation}
*/
function editBorderColor(presentation, color) {}

/*
*@param {Presentation} presentation
*@param {Number}  width 
*@return {Presentation}
*/
function editBorderWidth(presentation, width) {}

/*
*@param {Presentation} presentation
*@param {borderStyle}  borderStyle 
*@return {Presentation}
*/
function editBorderStyle(presentation, borderStyle) {}

                                          //Text//

/*
*@param {Presentation} presentation
*@param {string}  textContent 
*@return {Presentation}
*/
function addText(presentation, textContent) {}

/*
*@param {Presentation} presentation
*@param {Boolean} italic
*@return {Presentation}
*/
function setitalicText(presentation) {}

/*
*@param {Presentation} presentation
*@param {Boolean} bold
*@return {Presentation}
*/
function setBoldText(presentation) {}

/*
*@param {Presentation} presentation
*@param {Boolean} underline
*@return {Presentation}
*/
function setUnderlineText(presentation) {}

/*
*@param {Presentation} presentation
*@param {Color}  color
*@return {Presentation}
*/
function editTextColor(presentation, color) {}

/*
*@param {Presentation} presentation
*@param {string} font
*@return {Presentation}
*/
function editFont(presentation, font) {}

/*
*@param {Presentation} presentation
*@param {Link} link
*@return {Presentation}
*/
function addLink(presentation, link) {}

                                           //Img//

/*
*@param {Presentation} presentation
*@param {string}  imgScr
*@return {Presentation}
*/
function addImg(presentation, imgScr) {}

/*
*@param {Presentation} presentation
*@param {Filter}  filter
*@return {Presentation}
*/
function editFilter(presentation, filter) {}

                                             //Figure//

/*
*@param {Presentation} presentation
*@param {FigureType} figureType
*@return {Presentation}
*/
function addFigure(presentation, figureType) {}

/*
*@param {Presentation} presentation
*@param {Color}  fillColor
*@return {Presentation}
*/
function editFigureFillColor(presentation, fillColor) {}

/*
*@param {Presentation} presentation
*@param {Color}  lineColor
*@return {Presentation}
*/
function editFigureLineColor(presentation, lineColor) {}