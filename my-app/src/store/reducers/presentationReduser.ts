import { Reducer } from "redux";
import { combineReducers } from "redux";
import { ActionType, Presentation } from "../../types";
import name from "./presentationNameReduser";
import  presentationNameReduser  from "./presentationNameReduser";
import slidelist from "./slideReduce";
import slidelistReduser from "./slideReduce";

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


const presentation: Reducer<Presentation, any> = (state: Presentation = stateStart, action: ActionType): Presentation => {
    switch (action.type) {
        case 'SAVE_PRESENTATION':
            console.log('save work');
            const toJSON = JSON.stringify(state);
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(toJSON);
          
            const downloadAnchorNode = document.createElement("a");
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute(
              "download",
              state.name + ".json"
            );
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
            return state;
        case 'OPEN_PRESENTATION': 
            return action.payload
        default: return{
            slidelist: slidelist(state.slidelist, action),
            name: name(state.name, action),
        }
    }
};  

export default presentation



//const rootReducer: Reducer = combineReducers({slidelist: slidelistReduser, name: presentationNameReduser})

//export default rootReducer