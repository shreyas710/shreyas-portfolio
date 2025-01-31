import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles.js";
import { experiences } from "../constants/index.js";
import { SectionWrapper } from "../hoc/index.js";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#1d1836", color: "#fff"}} contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={experience.date} iconStyle={{ background: experience.iconBg }}
            icon={<div className={`flex justify-center items-center w-full h-full`}>
                <img src={experience.icon} alt={experience.company_name}
                    className={`w-[100%] h-[100%] object-contain rounded-full`} />
            </div>}>
            <div>
                <h3 className={`text-white text-[24px] font-bold`}>{experience.title}</h3>
                <p className={`text-secondary text-[20px] font-bold`} style={{ margin: 0 }}>{experience.company_name}</p>
            </div>

            <ul className={`mt-5 list-disc ml-5 space-y-2`}>
                {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className={`text-white-100 text-[15px] pl-1 tracking-wider`}>
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    )
}

const Experience = () => {
    return (
        <>
            <div>
                <p className={`${styles.sectionSubText}`}>What have I done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </div>

            <div className="mt-1 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Experience, "work");