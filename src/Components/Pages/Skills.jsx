import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        fetch("/SkillFile.json") // file should be inside public/
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
        if (skills.length > 0 && containerRef.current) {
            const cards = containerRef.current.querySelectorAll(".s-card");

            gsap.fromTo(
                cards,
                { opacity: 0, y: 50, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: "power3.out",
                    duration: 1,
                    stagger: 0.2, // animate cards one after another
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "top 40%",
                        scrub: true, // ties animation to scroll for smoothness
                    },
                }
            );
        }
    }, [skills]);

    return (
        <div className="skills">
            <h1 className="s-head">My Skills</h1>
            <div className="s-card-container" ref={containerRef}>
                {skills.map((skill) => (
                    <div className="s-card" key={skill.name}>
                        <img src={skill.image} alt={skill.name} className="skill-img" />
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
