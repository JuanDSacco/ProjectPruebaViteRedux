import { excelente, regular, desaprobado, aplazo } from "../actions";
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
            </div>
            <div>
                <h4>para resolver el problema tendria que usar useState para poder modificar el estado del componente luego de switchear? o en este caso deberia usar un condicional en vez de un ciclo?</h4>
            </div>
        </>
    )
}

export default Evaluacion;