import {StateTypes } from "../../types";

function changeMode() {
    return {
        type: StateTypes.CHANGE_MODE,
    }
}

export {changeMode}
