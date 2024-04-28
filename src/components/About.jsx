import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from "@cloudinary/react";
import {SectionWrapper} from '../hoc';

const About = () => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: "dvuknw9qw",
        },
    });
    const profileImg = cld.image('docs/models-4');
    const githubLogo = cld.image("docs/models-6")
    const linkedinLogo = cld.image("docs/models-3")
    const instaLogo = cld.image("docs/models-2");

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>Introduction</p>

                <h2 className={styles.sectionHeadText}>About Me.</h2>
            </motion.div>

            <div className={`flex flex-row`}>
                <div className={`flex flex-col`}>
                    <motion.p variants={fadeIn("", "", 0.1, 1)}
                              className={`mt-4 text-secondary text-[20px] font-light max-w-3xl leading-[30px]`}>
                        I am a Computer Science Graduate Student at the University of Southern California.
                        <br/>
                        <br/>
                        I have a good grasp of <span className={`font-bold`}>Data Structures and Algorithms</span>.

                        I have
                        good experience in the fields of DevOps,
                        Full
                        Stack Development and Machine Learning.
                    </motion.p>
                    <div className="mt-20 flex flex-row">
                        <div className="col-auto">
                            <a
                                href="https://github.com/shreyas710"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <AdvancedImage
                                    loading="lazy"
                                    cldImg={githubLogo}
                                    width={"30px"}
                                    height={"30px"}
                                    alt="github"
                                />
                            </a>
                        </div>
                        <div className="ml-10">
                            <a
                                href="https://www.linkedin.com/in/shreyasnk532"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <AdvancedImage
                                    loading="lazy"
                                    cldImg={linkedinLogo}
                                    width={"30px"}
                                    height={"30px"}
                                    alt="linkedin"
                                />
                            </a>
                        </div>
                        <div className="ml-10">
                            <a
                                href="https://www.instagram.com/shr3yas.ku1karni"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <AdvancedImage
                                    loading="lazy"
                                    cldImg={instaLogo}
                                    width={"30px"}
                                    height={"30px"}
                                    alt="instagram"
                                />
                            </a>
                        </div>
                    </div>
                    <div
                        className="font-bold mt-10 border-amber-300 w-[130px] h-[50px] rounded items-center flex justify-center"
                        style={{background: "#f1356d"}}
                    >
                        <a
                            href="https://drive.google.com/file/d/1LqBfJpBZIhgcC12OTVM7dM55zF6Xl1PY/view?usp=share_link"
                            target="_blank"
                            rel="noreferrer noopener"
                            type="button"
                        >
                            View Resume
                        </a>
                    </div>
                </div>

                <div className={`rounded-full hidden xl:flex mx-auto`}>
                    <AdvancedImage className={`w-[230px] h-[390px] rounded-3xl`} loading="lazy" cldImg={profileImg}/>
                </div>
            </div>

        </>
    )
}

export default SectionWrapper(About, "about");