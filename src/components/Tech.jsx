import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from "../styles.js";

const Tech = () => {
    return (
        <>
            <div>
                <h2 className={styles.sectionHeadText}>Skills.</h2>
            </div>
            <div className={`flex flex-col`}>
                {technologies.map((tech) => {
                    return (
                        <div key={tech.name} className={`mb-10 flex flex-col flex-wrap`}>
                            <p className={`mt-2 mb-2 ${tech.color} text-[30px] font-bold max-w-3xl leading-[30px]`}>{tech.name}</p>
                            <div className={`flex flex-row flex-wrap gap-10 mt-2`}>
                                {tech.tech.map((technology) => (
                                    <div
                                        className={`border w-auto cursor-pointer p-3 h-13 lg:text-[20px] text-[14px] rounded-3xl relative text-[#100e0f]`}
                                        key={technology.name}>
                                        
                                        {technology.name}
                                        <div className="w-full h-full top-0 left-0 absolute z-[-1] bg-gray-200 dark:bg-white rounded-3xl">
                                            <div className="bg-slate-400 h-full rounded-3xl z-0" style={{ width: `${technology.width}` }}></div>
                                        </div>
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