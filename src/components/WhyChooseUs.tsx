"use client";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WhyChooseUs = () => {
    const musicSchool = [
        {
            "title": "Expert Instructors",
            "description": "Our academy is staffed with highly qualified and experienced instructors who are passionate about music and dedicated to helping you achieve your musical goals. Each instructor brings a wealth of knowledge and real-world experience to their teaching.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/img/instructor.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            )
        },
        {
            "title": "Comprehensive Curriculum",
            "description": "We offer a wide range of courses tailored to all skill levels, from beginners to advanced musicians. Our curriculum is designed to provide a thorough understanding of musical concepts, techniques, and theory, ensuring you get a well-rounded education.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/img/curicullam.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            )
        },
        {
            "title": "State-of-the-Art Facilities",
            "description": "Our academy features state-of-the-art facilities, including fully equipped practice rooms, recording studios, and performance spaces. We provide the perfect environment for students to learn, practice, and perform, enhancing their overall learning experience.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/img/state-of-art.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            )
        },
        {
            "title": "Flexible Learning Options",
            "description": "We understand that everyone has different schedules and learning preferences. That's why we offer both in-person and online courses, allowing you to learn at your own pace and from the comfort of your home.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/img/flexible.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            )
        },
        {
            "title": "Personalized Instruction",
            "description": "We believe in providing personalized instruction tailored to each student's individual needs and goals. Our small class sizes ensure that you receive the attention and guidance necessary for your musical growth.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/img/personalized.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            )
        },
        {
            "title": "Performance Opportunities",
            "description": "We provide numerous opportunities for students to showcase their talents through recitals, concerts, and community events. Performing in front of an audience is a crucial aspect of musical education and development.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/img/performance.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            )
        },
        {
            "title": "Community and Support",
            "description": "Join a vibrant and supportive community of fellow musicians and music enthusiasts. Our academy fosters a collaborative and inspiring environment where you can connect with others who share your passion for music.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/img/community.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            )
        },
        {
            "title": "Innovative Teaching Methods",
            "description": "Our instructors use innovative and engaging teaching methods to make learning music fun and effective. We incorporate technology and interactive tools to enhance the learning experience and keep students motivated.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/img/learning.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            )
        },
        {
            "title": "Affordability and Value",
            "description": "We offer competitive pricing and flexible payment options to make high-quality music education accessible to everyone. Our courses provide exceptional value, giving you the best possible return on your investment.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/img/afford.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            )
        },
        {
            "title": "Proven Track Record",
            "description": "Our academy has a proven track record of success, with many students going on to achieve significant accomplishments in their musical careers. Join us and become part of our legacy of excellence.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/img/track.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            )
        }
    ]


    return (
        <div>
            <StickyScroll content={musicSchool} />
        </div>
    )
}

export default WhyChooseUs