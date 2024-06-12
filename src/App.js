import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import { Provider } from "react-redux";
import AppStore from "./utils/appStore";

const App = () => {
    return (
        <Provider store={AppStore}>
            <div>
                <Header />
                <Body />
            </div>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);