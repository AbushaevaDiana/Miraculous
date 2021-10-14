/*
*@param {Presentation } presentation
*@return {FileJson } 
*/
function savePresentation(presentation: Presentation) {};

/*
*@param {Presentation } presentation
*@return {FilePDF }  
*/
function exportPresentation(presentation: Presentation) {};

/*
*@param {Presentation } presentationMaker
*@param {FileJson } fileJson 
*@return { Presentation }
*/
function openPresentation(fileJson) {};

/*
*@param {Presentation } presentation
*@return {Presentation}
*/
function addSlide(presentation: Presentation) {}

/*
*@param {Presentation } presentation
*@return {Presentation}
*/
function deleteSlide(presentation: Presentation) {}

/*
*@param {Presentation } presentation
*@param {Background } background
*@return {Presentation}
*/
function editSlideBackground(presentation: Presentation, background: Background) {}

/*
*@param {Presentation } presentation
*@param {Boolean } italic
*@return {Presentation }
*/
function setitalicText(presentation: Presentation) {}

/*
*@param {Presentation } presentation
*@param {Boolean } bold
*@return {Presentation }
*/
function setBoldText(presentation: Presentation) {}

/*
*@param {Presentation } presentation
*@param {Boolean} underline
*@return {Presentation }
*/
function setUnderlineText(presentation: Presentation) {}