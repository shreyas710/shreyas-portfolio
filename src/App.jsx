import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";
import SpaceCanvas from "./components/canvas/Space.jsx";

function App() {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary"></div>
            <div className="bg-hero-pattern bg-blend bg-cover bg-no-repeat bg-center">
                <Navbar/>
                <div className="relative z-0">
                    <Hero/>
                    <SpaceCanvas/>
                </div>
            </div>
            <div className={`bg-black`}>
                <About/>
                <Experience/>
                <Tech/>
                <Works/>
                <Feedbacks/>
                <div className="relative z-0">
                    <Contact/>
                    <StarsCanvas/>
                </div>
            </div>


        </BrowserRouter>
    )
}

export default App
