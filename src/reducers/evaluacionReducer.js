import { EXCELENTE, REGULAR, DESAPROBADO, APLAZO } from "../types";

//creo estado inicial para el reducer

const initailState = '';

// creo el reducer que recibe por parametro dos cosas, state y action.

export default function evaluacionReducer(state=initailState, action){
    //desarrollo la logica del reducer con switch en este caso. 
    //el switch por parametro necesita el tipo de action. 

    switch(action.type){
        case EXCELENTE:
            return state + 'Tu nota es excelente :D ';
        case REGULAR:
            return state + 'Tu nota es regular :) '
        case DESAPROBADO:
            return state + 'Desaprobaste el examen :/ '
        case APLAZO:
            return state + 'Aplazaste el examen :( '
        default: return state;
    }
}

//para resolver el problema tendria que usar useState para poder modificar el estado del componente luego de switchear?
