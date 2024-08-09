import "./normalize.css";
import styles from './MainApp.module.css';
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Characters } from "./pages/Characters/Characters";
import { Character } from "./pages/Characters/Character/Character";
import { Planets } from "./pages/Planets/Planets";
import { Planet } from "./pages/Planets/Planet/Planet";
import { Footer } from "./components/Footer/Footer";
import { FrontPage } from "./pages/FrontPage/FrontPage";

export const MainApp = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/characters/:id" element={<Character />} />
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/planets/:id" element={<Planet />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
};
