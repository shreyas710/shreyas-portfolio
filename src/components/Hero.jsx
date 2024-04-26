import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {ComputersCanvas} from "./canvas";
import {TypeAnimation} from "react-type-animation";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto max-w-7xl flex flex-row items-start gap-5`}>
                <div className={`flex flex-col justify-center items-center mt-5`}>
                    <div className={`w-5 h-5 rounded-full bg-[#e0cdb4]`}/>
                    <div className={`w-1 sm:h-80 h-40 violet-gradient`}/>
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m <span
                        className={`text-[#915eff]`}>Shreyas</span></h1>
                    <TypeAnimation
                        sequence={[
                            "Software Engineer",
                            1500,
                            "Full Stack Developer",
                            1500,
                            "Dev Ops Engineer",
                            1500,
                            "Game Engine Developer",
                            1500,
                            "Data Scientist",
                            1500,
                            "Machine Learning Engineer",
                            1500,
                        ]}
                        className={`${styles.heroSubText}`}
                        wrapper="p"
                        speed={60}
                        deletionSpeed={70}
                        style={{
                            fontWeight: "300",
                            color: "#f1356d",
                            display: "inline-block",
                        }}
                        repeat={1}
                    />
                </div>
            </div>
            <ComputersCanvas/>

            <div className={`absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center`}>
                <a href="#about">
                    <div
                        className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
                        <motion.div animate={{y: [0, 24, 0]}}
                                    transition={{duration: 2, repeat: Infinity, repeatType: 'loop'}}
                                    className={`h-3 w-3 rounded-full bg-secondary m-1`}>

                        </motion.div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero