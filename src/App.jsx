import {BrowserRouter} from "react-router-dom";
import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
    ComputersCanvas
} from "./components";

function App() {
    return (
        <BrowserRouter>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar/>
                <div className="relative z-0">
                    <Hero/>
                    <StarsCanvas/>
                    <ComputersCanvas/>
                </div>
            </div>
            <div>
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
