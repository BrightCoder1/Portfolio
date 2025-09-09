/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {
    const headRef = useRef(null);
    const subHeadRef = useRef(null);
    const paraRef = useRef(null);
    const btnRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            headRef.current,
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
                subHeadRef.current,
                {
                    opacity: 0,
                    x: 50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power4.out"
                },
                "-=1" // Starts 1 second before the previous animation ends
            )
            .fromTo(
                paraRef.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out"
                },
                "-=0.7"
            )
            .fromTo(
                btnRef.current,
                {
                    opacity: 0,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "back.out(1.7)"
                },
                "-=0.5"
            )
            .fromTo(
                imgRef.current,
                {
                    opacity: 0,
                    x: 50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1
                },
                "-=1"
            );

    }, []);

    return (
        <>
            <div className="main">
                <div className="main-1">
                    <h1 className="m1-h" ref={headRef}>
                        Hello, I'm <span className="name">Vishal Kumar.</span>
                    </h1>
                    <h2 className="m1-h2" ref={subHeadRef}>
                        I'm a <snap className="name">Full Stack Developer.</snap>
                    </h2>
                    <p className="m1-p" ref={paraRef}>
                        I specialize in building dynamic and responsive web applications. With a passion for coding and a keen eye for design, I strive to create seamless user experiences. Whether it's front-end development or back-end integration, I'm dedicated to delivering high-quality solutions that meet client needs.
                    </p>
                    <a href="tel:+916398728427" className="contact" ref={btnRef}>Contact Me!</a>
                </div>
                <div className="main-2" ref={imgRef}>
                    <img src="./LogoPNGCrop.png" alt="Image 1" className="m2-img" />
                </div>
            </div>
        </>
    );
}

export default Home;
