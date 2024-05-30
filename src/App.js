import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";

const App = () => {
    return (
        <div>
            <Header />
            {/* <Body /> */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);