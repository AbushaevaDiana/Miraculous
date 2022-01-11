import { Reducer } from "redux";
import { combineReducers } from "redux";
import { ActionType, Presentation } from "../../types";
import name from "./presentationNameReduser";
import  presentationNameReduser  from "./presentationNameReduser";
import slidelist from "./slideReduce";
import slidelistReduser from "./slideReduce";
import { undo, redo } from "../../functions/history_function";


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

// export function loadFileGoogleDrive(callback: (object: any) => void) {
//     const inputFile = document.createElement("input");
//     inputFile.type = "file";
//     inputFile.click();
//     inputFile.addEventListener("change", () => {
//       const file = inputFile.files?.[0] as File;

//       fetch(window.URL.createObjectURL(file))
//         .then((response) => response.json())
//         .then((json) => {
//           callback(json);
//         });
//     });
// }


const presentation: Reducer<Presentation, any> = (state: Presentation = stateStart, action: ActionType): Presentation => {
    switch (action.type) {
        // case 'EXPORT_PRESENTATION':
        //     console.log('save work');

             
        //     //создаем обьект элемента типа <a></a>
        //     const download = document.createElement("a");
        //     //добавляем в обьект <a></a> созданный URL
        //     download.setAttribute("href", dataStr);
        //     //добавляем в обьект атрибут скачать(При наличии атрибута download браузер не переходит по ссылке,
        //     // а предложит скачать документ, указанный в адресе ссылки.) и передаем в качестве имени название
        //     //презентации и json разрешение
        //     download.setAttribute(
        //       "download",
        //       state.name + ".pdf"
        //     );
        //     downloadAnchorNode.click();
        //     downloadAnchorNode.remove();
        //     return state;
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