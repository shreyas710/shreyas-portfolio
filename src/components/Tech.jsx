import {SectionWrapper} from '../hoc';
import {technologies} from '../constants';
import {fadeIn, textVariant} from "../utils/motion.js";
import {styles} from "../styles.js";
import {motion} from "framer-motion";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Skills.</h2>
            </motion.div>
            <div className={`flex flex-col`}>
                {technologies.map((tech) => {
                    return (
                        <div key={tech.name} className={`mb-10 flex flex-col flex-wrap`}>
                            <p
                                className={`mt-2 mb-2 ${tech.color} text-[30px] font-bold max-w-3xl leading-[30px]`}>{tech.name}</p>
                            <div className={`flex flex-row flex-wrap gap-10 mt-2`}>
                                {tech.tech.map((technology) => (
                                    <div variants={fadeIn("", "", 0.1, 1)}
                                         className="border w-auto p-3 h-10 text-[20px] rounded-3xl flex items-center justify-center"
                                         key={technology.name}>
                                        {technology.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SectionWrapper(Tech, "tech")