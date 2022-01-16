import { Reducer } from "redux";
import { combineReducers } from "redux";
import { ActionType, ElementType, Img, Presentation, PresentationMaker, Slide, TextType } from "../../types";
import name from "./presentationNameReduser";
import  presentationNameReduser  from "./presentationNameReduser";
import slidelist from "./slideReduce";
import slidelistReduser from "./slideReduce";
import { undo, redo } from "../../functions/history_function";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import store from "../store";


const stateStart: Presentation = {
    slidelist: [
        {
            elementlist:[], 
            background:{
                type: 'color', 
                color: '#FFFFFF'},
            effects: 'fading',
            idSlide: 1,
            selected: false,
        },   
    ],
    name: 'Презентация без названия',
}

export function loadFile(callback: (object: any) => void) {
    const inputFile = document.createElement("input");
    inputFile.type = "file";
    inputFile.click();
    inputFile.addEventListener("change", () => {
      const file = inputFile.files?.[0] as File;

      fetch(window.URL.createObjectURL(file))
        .then((response) => response.json())
        .then((json) => {
          callback(json);
        });
    });
}


const exportWidth = 1050
const exportHeight = 730


function setElementToPagePDF(progSlide: ElementType, doc:jsPDF) {
if (progSlide.elementConcept.type === "img"){
let imgData2 = progSlide.elementConcept.src;
doc.addImage(imgData2, 'PNG', +progSlide.position.x, +progSlide.position.y, +progSlide.size.w, +progSlide.size.h)
}
else if (progSlide.elementConcept.type === "text"){
   let textData: TextType = progSlide.elementConcept;
   doc.addFont(textData.textContent, String(progSlide.idElement), textData.font)}
else if (progSlide.elementConcept.type === "figure"){ 
   let fig = 'elipse';
   if(progSlide.elementConcept.figureConcept == 'Rectangel') fig = 'rectangel';
   if(progSlide.elementConcept.figureConcept == 'Triangel') fig = 'triangel';
   doc.addSvgAsImage(fig, progSlide.position.x, progSlide.position.y, progSlide.size.w, progSlide.size.h);
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
doc.save(Path + "/" + prog.name + ".pdf")
}

function saveProgramAsPDF(prog: Presentation) {
const Path: string = ''
let doc = new jsPDF({
orientation: "landscape",
unit: "px",
format: [exportWidth, exportHeight]
}) 
saveDocPDF(prog, Path, doc)
}

const presentation: Reducer<Presentation, any> = (state: Presentation = stateStart, action: ActionType): Presentation => {
    switch (action.type) {
        case 'EXPORT_PRESENTATION':
            console.log('export pdf');
            // for(let i=0; i< state.slidelist.length; i++){
            //     let id = String(state.slidelist[i].idSlide);
            //     const input = document.getElementById(id);
            //     if(input !== null){
            //       html2canvas(input)
            //       .then((canvas) => {
            //        const imgData = canvas.toDataURL('image/png', 1);
            //        const pdf = new jsPDF('l');
            //        pdf.addPage();
            //        pdf.addImage(imgData, 'JPEG', 0, 0, 300, 180);
            //        // pdf.output('dataurlnewwindow');
            //        pdf.save("download.pdf");
            //     });
            //     }
            // };  
            saveProgramAsPDF(state);
            return state
        case 'SAVE_PRESENTATION':
            console.log('save work');
            //прверащаем обьект в json строку
            const toJSON = JSON.stringify(state);
            //кодируем эту строку в виде Url, чтобы избежать некорректных запросов к серверу
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(toJSON);
             
            //создаем обьект элемента типа <a></a>
            const downloadAnchorNode = document.createElement("a");
            //добавляем в обьект <a></a> созданный URL
            downloadAnchorNode.setAttribute("href", dataStr);
            //добавляем в обьект атрибут скачать(При наличии атрибута download браузер не переходит по ссылке,
            // а предложит скачать документ, указанный в адресе ссылки.) и передаем в качестве имени название
            //презентации и json разрешение
            downloadAnchorNode.setAttribute(
              "download",
              state.name + ".json"
            );
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
            return state;
        case 'OPEN_PRESENTATION': 
            console.log('open work')
            return action.payload;
        case 'Undo':
            console.log('undo p') 
            return action.payload.presentation;
        case 'Redo':
            console.log('redo p') 
            return action.payload.presentation;
        default: return{
            slidelist: slidelist(state.slidelist, action),
            name: name(state.name, action),
        }
    }
};  

export default presentation