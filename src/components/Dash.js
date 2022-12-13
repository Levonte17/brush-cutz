import { login } from "../Firebase";

function Dash(props) {
    return(
        <div className="homepage">
<div className="home">
        
    <h1> 
        Welcome To Brush Cutz 
        <h3 className="dashp">
            NEW PRICES BEGINING JANNUARY 2023
        </h3>
    </h1>
    <h2>
        Please Login 

    <p className="here" 
        onClick={login}>
         HERE 
    </p>

        To Get In Line
    </h2>
</div>
</div>

        
    )
};

export default Dash;