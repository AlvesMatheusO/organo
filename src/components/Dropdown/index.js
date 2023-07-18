import './Dropdown.css'

const Dropdown = ( props ) => {
    return (

        <div>
            <label>
            {props.label}
            </label>

            <select>
                {props.itens.map( 
                    item =>  <option>{item}</option> )}

            </select>
        </div>
    )

}

export default Dropdown