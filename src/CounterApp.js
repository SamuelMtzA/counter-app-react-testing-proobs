//rafcp
import React, {useState} from 'react'
import PropTypes from 'prop-types'
//props son comunicacion entre componentes
//value es de properties, y counterApp es un componente funcional
const CounterApp = ({value = 10}) => {
    //hooks useState es una funcion que nos permite crear estados en nuestros componentes funcionales
    const [counter, setCount] = useState( value );

    //handleAdd
    const handleAdd = () => {
        //no se puede mutar el state con conuter ++
        setCount(counter + 1)
    }

    const handleDis= () =>{
        setCount(counter - 1)
    }

    const handleRes= () =>{
        setCount(value)
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            {/* pasar funcion como referencia */}
            <button onClick = { handleAdd }>+1</button>
            <button onClick = { handleRes }>reset</button>
            <button onClick = { handleDis }>-1</button>

        </>
    )
}

CounterApp.propTypes = {
 value : PropTypes.number
}

export default CounterApp
