import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const skillsRef = useRef([]);

    useEffect(() => {
        fetch("/SkillFile.json") // Ensure the file is in the 'public' folder
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setSkills(data))
            .catch((error) => console.error("Error Fetching Skills: ", error));
    }, []);

    useEffect(() => {
        if (skills.length > 0) {
            skillsRef.current.forEach((el) => {
                gsap.fromTo(
                    el,
                    {
                        opacity: 0,
                        y: 0,
                        scale: 0.9
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        }
    }, [skills]);

    return (
        <div className="skills">
            <h1 className="s-head">My Skills</h1>
            <div className="s-card-container">
                {skills.map((skill, index) => (
                    <div
                        className="s-card"
                        key={skill.name}
                        ref={(el) => (skillsRef.current[index] = el)}
                    >
                        <img src={skill.image} alt={skill.name} className="skill-img" />
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
