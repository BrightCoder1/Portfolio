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
                start: "top 70%",
                end: "top 30%",
                scrub: 1,
            }
        });

        tl.fromTo(
            textRef.current,
            {
                opacity: 0,
                x: -100
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power2.out"
            }
        )
            .fromTo(
                imgRef.current,
                {
                    opacity: 0,
                    x: 100
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: "power2.out"
                },
                "-=1"
            )
            .fromTo(
                headRef.current,
                {
                    opacity: 0,
                    y: -50
                },
                {
                    opacity: 1.5,
                    y: 0,
                },
                "-=1"
            )
            .fromTo(
                perRef.current,
                {
                    opacity: 0,
                    x: 50,
                },
                {
                    opacity: 1.5,
                    x: 0,
                    duration: 1
                }, "-=1"
            )

            .fromTo(
                btnContact.current,
                {
                    opacity: 0,
                    x: 40
                },
                {
                    opacity: 1.5,
                    x: 0,
                    duration: 1
                }, "-=1"
            )
    }, []);

    return (
        <div className="home2" ref={home2Ref}>
            <div className="home2-1" ref={textRef}>
                <h1 className="h2-1-h" ref={headRef}>
                    Developing With a Passion While Exploring The World.
                </h1>
                <p className="h2-1-p" ref={perRef}>
                    That sounds great! Here's a portfolio title suggestion for you: "Developing With a Passion: Crafting Seamless User Experiences While Exploring The World". It reflects your dedication to coding, design, and creating high-quality web applications. How does that sound for your portfolio?
                </p>
                <a href="" className="h2-1-tag" ref={btnContact}>Contact Me!</a>
            </div>
            <div className="home2-2" ref={imgRef}>
                <img src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1.jpg" alt="Image 2" className="h2-img" />
            </div>
        </div>
    );
}

export default Home2;
