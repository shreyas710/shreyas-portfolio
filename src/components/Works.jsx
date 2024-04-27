import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles.js";
import { github } from '../assets';
import { projectLink } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from "../utils/motion.js";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_project_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} key={index}>
            <Tilt options={{ max: 45, scale: 1, speed: 450 }}
                className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full`}>
                <div className={`relative w-full h-[230px]`}>
                    <img src={image} alt={name} className={`w-full h-full object-cover rounded-2xl`} />
                    <div className={`absolute inset-0 flex justify-end m-3 card-img_hover`}>
                        {live_project_link && <div onClick={() => window.open(live_project_link, "_blank")}
                            className={`black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer`}>
                            <img src={projectLink} alt="project" className={`w-6 h-6 object-contain`} />
                        </div>}
                        {source_code_link && <div onClick={() => window.open(source_code_link, "_blank")}
                            className={`black-gradient w-10 h-10 rounded-full ml-2 flex justify-center items-center cursor-pointer`}>
                            <img src={github} alt="github" className={`object-contain`} />
                        </div>}
                    </div>
                </div>
                <div className={`mt-5`}>
                    <h3 className={`text-white font-bold text-[24px]`}>{name}</h3>
                    <p className={`mt-2 text-secondary text-[14px]`}>{description}</p>
                </div>
                <div className={`mt-4 flex flex-wrap gap-2`}>
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>{tag.name}</p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <div className={`flex flex-wrap gap-7`}>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
            <div className="w-full flex flex-row justify-center items-center">
                <button
                    className={`bg-white py-3 px-8 mt-8 outline-none w-fit text-tertiary font-bold shadow-md shadow-primary rounded-xl`}
                    type="submit" onClick={() => window.open("https://github.com/shreyas710", "_blank")}>View More Projects</button>
            </div>
           
        </>
    )
}

export default SectionWrapper(Works, "projects")