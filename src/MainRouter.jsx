import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import CSSPage from "./Pages/CSSPage/CSSPage";


export default [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "contact",
        element: <Contact />,
    },
    {
        path: "blog",
        element: <Blog />
    },
    {
        path: "css",
        element: <CSSPage />
    }
]
