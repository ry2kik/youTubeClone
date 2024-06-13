import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import { Provider } from "react-redux";
import AppStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainContainer from "./Component/MainContainer";
import WatchPage from "./Component/WatchPage";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Body />,
        children: [
            {
                path: '/',
                element: <MainContainer />
            },
            {
                path: '/watch',
                element: <WatchPage />
            }
        ]
    }
]);

const App = () => {
    return (
        <Provider store={AppStore}>
            <div>
                <Header />
                <RouterProvider router = { appRouter } />
            </div>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);