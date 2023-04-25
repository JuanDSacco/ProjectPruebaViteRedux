import { excelente, regular, desaprobado, aplazo, reset } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Evaluacion = () => {
    const evaluacion = useSelector((state) => state.evaluacion)

    const dispatch = useDispatch();
    
    return(
        <>
            <div>
                <h1>Ingresa el valor de tu nota: </h1>
            <div>
                {evaluacion}
            </div>
                <button onClick={() => dispatch(excelente())}>10-9</button>
                <button onClick={() => dispatch(regular())}>8-7</button>
                <button onClick={() => dispatch(desaprobado())}>6-5-4</button>
                <button onClick={() => dispatch(aplazo())}>3-2-1</button>
                <button onClick={() => dispatch(reset())}>Volver a cargar</button>
            </div>
        </>
    )
}

export default Evaluacion;