import { useState } from "react";
import Values from "values.js";

const FormColor = ({ setList }) => {
    const [color, setColor] = useState("blue");
    const [error, setError] = useState(false);

    const handleGenerator = e => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(5);
            setList(colors);
            setError(false);
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }

    return ( 
        <div className="form-color">
            <h1>Generador Paleta de Color</h1>
            <form onSubmit={ handleGenerator }>
                <input type="text" placeholder="#fff or Red" onChange={e => setColor(e.target.value)} />
                <input type="submit" value="Generar" />
            </form>
            { error ? <p className="error">No existe este color...</p> :null }
        </div>
    );
}
 
export default FormColor;