import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home2 = () => {
    const home2Ref = useRef(null);
    const textRef = useRef(null);
    const imgRef = useRef(null);
    const headRef = useRef(null);
    const perRef = useRef(null);
    const btnContact = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: home2Ref.current,
                start: "top 80%",
                end: "top 50%",
                scrub: true,
            }
        });

        tl.fromTo(textRef.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0 }
        )
        .fromTo(imgRef.current,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0 },
            "-=0.3"
        )
        .fromTo(headRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0 },
            "-=0.3"
        )
        .fromTo(perRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0 },
            "-=0.3"
        )
        .fromTo(btnContact.current,
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0 },
            "-=0.3"
        );
    }, []);

    return (
        <div className="home2" ref={home2Ref}>
            <div className="home2-2" ref={imgRef}>
                <img src="./BackImg.jpg" alt="Image 1" className="m2-img" />
            </div>
            <div className="home2-1" ref={textRef}>
                <h1 className="h2-1-h" ref={headRef}>
                    Developing With a Passion While Exploring The World.
                </h1>
                <p className="h2-1-p" ref={perRef}>
                    That sounds great! Here's a portfolio title suggestion for you: 
                    "Developing With a Passion: Crafting Seamless User Experiences While Exploring The World".
                </p>
                <a href="" className="h2-1-tag" ref={btnContact}>Contact Me!</a>
            </div>
        </div>
    );
}

export default Home2;
