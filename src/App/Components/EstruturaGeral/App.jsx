import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Contato from "../Contato/Contato";
import Sobre from "../Sobre/Sobre";
import Footer from "../Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sobre" element={<Sobre/>}/>
                    <Route path="/contato" element={<Contato/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;