import React from "react";
import ReactDom from "react-dom/client";

const heading = <h1 id="heading">Namsete React 🚀</h1>

const HeaderComponent = ()=> (<h1>Namste from Component 1</h1>) 

const HederComponent2 = ()=>{
    return (
        <div>
            <HeaderComponent />
            <h1>Namste from Component 2</h1>
            
        </div>
    )
    
    
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HederComponent2 />);
