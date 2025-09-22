import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Project = () => {

    const [projects, setProjects] = useState([]);

    const projectRef = useRef([]);;

    useEffect(() => {
        // fetch data from API
        fetch("/Project.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();

            })
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error Fetching Projects: ", error));
    }, []);

    // gsap animation
    useEffect(() => {
        if (projects.length > 0) {
            projectRef.current.forEach((el) => {
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

    }, [projects]);

    return (
        <>
            <h1 className="p-heading">My Project</h1>
            <div className="project">

                {
                    projects.map((project, index) => (
                        <div className="p-card" key={project.name} ref={(el) => (projectRef.current[index] = el)}>
                            <div className="p-card-box">
                                <img className="p-card-img" src={project.projectimg} alt="" />
                                <div className="hover-p">
                                    <p className="hover-p-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut consectetur libero accusantium quia cum in doloremque aliquam odit beatae minima cupiditate eaque perferendis, totam nobis debitis animi quaerat ipsam.</p>
                                    <div className="hover-flex">
                                        <a href={project.sourcecode} className="hover-p-tag">
                                            Source Code
                                        </a>
                                        <a target="_blank" href={project.livelink} className="hover-p-tag">
                                            Live
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Project
