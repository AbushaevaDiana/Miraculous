/*
*@param {Presentation Maker} presentationMaker
*@return {Presentation} 
*/
function createPresentation(presentationMaker) {}

/*
*@param {Presentation } presentation
*@return {FileJson } 
*/
function savePresentation(presentation) {};

/*
*@param {Presentation } presentation
*@return {FilePDF }  
*/
function exportPresentation(presentation) {};

/*
*@param {Presentation } presentationMaker
*@param {FileJson } fileJson 
*@return { Presentation }
*/
function openPresentation(presentationMaker, fileJson) {};

/*
*@param {Presentation } presentation
*@param {string } name
*@return {Presentation}
*/
function editPresentationName(presentation, name) {}

                                              //Slide//

/*
*@param {Presentation } presentation
*@return {Presentation}
*/
function addSlide(presentation) {}

/*
*@param {Presentation } presentation
*@return {Presentation}
*/
function deleteSlide(presentation) {}

/*
*@param {Presentation } presentation
*@param {Number } newSlidePosition  
*@return {Presentation}
*/
function moveSlide(presentation, newSlidePosition) {}

/*
*@param {Presentation } presentation
*@param {Background } background
*@return {Presentation}
*/
function editSlideBackground(presentation, background) {}

/*
*@param {Presentation } presentation
*@param {Effect } newEffect
*@return {Presentation}
*/
function editSlideEffect(presentation, newEffect) {}

                                            //Element//

/*
*@param {Presentation } presentation
*@param {ElementConcept } elementConcept
*@return {Presentation}
*/
function addElement(presentation) {}

/*
*@param {Presentation } presentation
*@return {Presentation}
*/
function deleteElement(presentation) {}

/*
*@param {Presentation } presentation
*@param{Number } x
*@param{Number} y
*@return {Presentation}
*/
function moveElement(presentation, x, y) {}

/*
*@param {Presentation } presentation
*@param {Number }  size
*@return {Presentation}
*/
function editElementSize(presentation, size) {}

/*
*@param {Presentation } presentation
*@param {Color }  color 
*@return {Presentation}
*/
function editBorderColor(presentation, color) {}

/*
*@param {Presentation } presentation
*@param {Number}  width 
*@return {Presentation}
*/
function editBorderWidth(presentation, width) {}

/*
*@param {Presentation } presentation
*@param {borderStyle }  borderStyle 
*@return {Presentation}
*/
function editBorderStyle(presentation, borderStyle) {}

                                          //Text//

/*
*@param {Presentation } presentation
*@param {string }  textContent 
*@return {Presentation}
*/
function addText(presentation, textContent) {}

/*
*@param {Presentation } presentation
*@param {Boolean } italic
*@return {Presentation }
*/
function setitalicText(presentation) {}

/*
*@param {Presentation } presentation
*@param {Boolean } bold
*@return {Presentation }
*/
function setBoldText(presentation) {}

/*
*@param {Presentation } presentation
*@param {Boolean} underline
*@return {Presentation }
*/
function setUnderlineText(presentation) {}

/*
*@param {Presentation } presentation
*@param {Color }  color
*@return {Presentation}
*/
function editTextColor(presentation, color) {}

/*
*@param {Presentation } presentation
*@param {Font } font
*@return {Presentation}
*/
function editFont(presentation, font) {}

/*
*@param {Presentation } presentation
*@param {Link } link
*@return {Presentation}
*/
function addLink(presentation, link) {}

                                           //Img//

/*
*@param {Presentation } presentation
*@param {scr}  img
*@return {Presentation}
*/
function addImg(presentation, scr) {}

/*
*@param {Presentation } presentation
*@param {Filter }  filter
*@return {Presentation}
*/
function editFilter(presentation, filter) {}

                                             //Figure//

/*
*@param {Presentation } presentation
*@param {FigureType } figureType
*@return {Presentation }
*/
function addFigure(presentation, figureType) {}

/*
*@param {Presentation } presentation
*@param{Number } higth
*@param{Number} wigth
*@return {Presentation}
*/
function makeRectangle(presentation, higth, wigth) {}

/*
*@param {Presentation } presentation
*@param{Number } radius
*@param{Number } x0
*@param{Number} y0
*@return {Presentation}
*/
function makeRound(presentation, radius, x0, y0) {}

/*
*@param {Presentation } presentation
*@param{Number } x1
*@param{Number} y1
*@param{Number } x2
*@param{Number} y2
*@param{Number } x3
*@param{Number} y3
*@return {Presentation}
*/
function makeTriangel(presentation, x1, y1, x2, y2, x3, y3) {}

/*
*@param {Presentation } presentation
*@param {Color }  fillColor
*@return {Presentation}
*/
function editFigureFillColor(presentation, fillColor) {}

/*
*@param {Presentation } presentation
*@param {Color }  lineColor
*@return {Presentation}
*/
function editFigureLineColor(presentation, lineColor) {}