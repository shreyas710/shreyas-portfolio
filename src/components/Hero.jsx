import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {ComputersCanvas} from "./canvas";
import {TypeAnimation} from "react-type-animation";
import {SpaceCanvas} from "./canvas";

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
                        ]}
                        className={`${styles.heroSubText} mt-2`}
                        wrapper="p"
                        speed={10}
                        style={{
                            fontSize: "30px",
                            fontWeight: "500",
                            color: "#f1356d",
                            display: "inline-block",
                        }}
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