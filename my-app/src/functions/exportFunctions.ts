import jsPDF from "jspdf";
import { ElementType, Presentation, Slide} from "../types";

const exportWidth = 1110
const exportHeight = 660


function setElementToPagePDF(progSlide: ElementType, doc:jsPDF) {
    if (progSlide.elementConcept.type === "img"){
        let imgData2 = progSlide.elementConcept.src;
        doc.addImage(imgData2, 'PNG', +progSlide.position.x, +progSlide.position.y, +progSlide.size.w, +progSlide.size.h)
    }
    else if (progSlide.elementConcept.type === "text"){
        let CanEl:HTMLCanvasElement = document.createElement('canvas')
        CanEl.id = 'picID'
        let ctx = CanEl.getContext("2d")
        let startPosition = 0
        let sLine = ""
        let lineNumber = 0
        CanEl.height = parseInt(String(progSlide.elementConcept.size)) * 0.9
        while (startPosition <= progSlide.elementConcept.textContent.length) {
            if (progSlide.elementConcept.textContent[startPosition] === '\n' || 
            startPosition === progSlide.elementConcept.textContent.length) {
                CanEl.width = sLine.length * parseInt(String(progSlide.elementConcept.size)) * 0.6
            if (ctx != null) {
                ctx.fillStyle = progSlide.elementConcept.color
                let styleT = '';
                if(progSlide.elementConcept.underline){
                    
                };
                if(progSlide.elementConcept.bold){styleT = styleT+'bold '};
                if(progSlide.elementConcept.italic){styleT = styleT+'italic '};
                
                ctx.font = styleT + String(progSlide.elementConcept.size) + "px " + progSlide.elementConcept.font;
                ctx.fillText(sLine, 0, parseInt(String(progSlide.elementConcept.size))*0.75) 
            }
            let imgData2 = CanEl.toDataURL('image/png')
            doc.addImage(imgData2, 'PNG', 
            +progSlide.position.x+parseInt(String(progSlide.elementConcept.size)) * 0.05, +progSlide.position.y 
            + parseInt(String(progSlide.elementConcept.size))*lineNumber+parseInt(String(progSlide.elementConcept.size))
             * 0.15 * (lineNumber + 1), 
            +CanEl.width, +CanEl.height)
            lineNumber += 1
            sLine = ""
        } 
        else
          sLine += progSlide.elementConcept.textContent[startPosition]
          startPosition += 1
        }
    }
    else if (progSlide.elementConcept.type === "figure"){ 
        const fillColor = (progSlide.elementConcept.fillcolor)
        const borderColor = (progSlide.elementConcept.linecolor)
        doc.setLineWidth(3)
      
        let drawType = ""
      
        if (fillColor !== "" && borderColor !== "") {
          doc.setFillColor(fillColor)
          doc.setDrawColor(borderColor)
          drawType = "DF"
        }
        if (drawType !== "") {
          if (progSlide.elementConcept.figureConcept == 'Round')
            doc.ellipse(+(progSlide.position.x+3 + progSlide.size.w / 2), +(progSlide.position.y+3 + progSlide.size.h / 2), 
              +progSlide.size.w / 2, +progSlide.size.h / 2, drawType)
          else if (progSlide.elementConcept.figureConcept == 'Triangel')
            doc.triangle(+progSlide.position.x+3 + +progSlide.size.w/2, +progSlide.position.y+3, 
              +progSlide.position.x+3, +progSlide.position.y+3 + +progSlide.size.h, 
              +progSlide.position.x+3 + +progSlide.size.w, +progSlide.position.y+3 + +progSlide.size.h, drawType)
          else
            doc.rect(+progSlide.position.x+3, +progSlide.position.y+3, +progSlide.size.w, +progSlide.size.h, drawType)
        }}
if (progSlide.border.borderStyle != "none"){
    const borderColor = progSlide.border.color
    doc.setDrawColor(borderColor)
    doc.rect(+progSlide.position.x+3, +progSlide.position.y+3, 6+progSlide.size.w, 6+progSlide.size.h, 'S')
    }
return doc
}

function setPagePDF(progSlide: Slide, doc:jsPDF) { 
    if (progSlide.background.type == "img") {
        let imgData2 = progSlide.background.src
        doc.addImage(imgData2, 'PNG', +0, +0, +exportWidth, +exportHeight)
    }
    if (progSlide.background.type == "color") {
        doc.setFillColor(progSlide.background.color)
        doc.rect(0, 0, exportWidth, exportHeight, "F")
    }
    for (var i = 0; i < progSlide.elementlist.length; i++) {
        doc = setElementToPagePDF(progSlide.elementlist[i], doc)
    }
    return doc
}

function setPDF(prog: Presentation, doc: jsPDF) {
    for (var i = 0; i < prog.slidelist.length; i++){
        doc = setPagePDF(prog.slidelist[i], doc)
        if (i + 1 < prog.slidelist.length) {
            doc.addPage([exportWidth, exportHeight], "landscape")
        }
    }
}

async function saveDocPDF(prog: Presentation, Path:string, doc:jsPDF){
    await setPDF(prog, doc)
    doc.save("/" + prog.name + ".pdf")
}

export function saveProgramAsPDF(prog: Presentation) {
    const Path: string = ''
    let doc = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [exportWidth, exportHeight]
    }) 
    saveDocPDF(prog, Path, doc)
}