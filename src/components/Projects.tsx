import React from 'react'
import Heading from './Heading';
import Card from './Card';
import Image from 'next/image';

const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "AReact & Typescript based app for managing and organizing your tasks efficiently.",
        img: "/project.png",
        tags: ["React", "Node","CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js & Typescript powered website to track time with an interactive countdown feature.",
        img: "/project2.png",
        tags: ["Next.JS", "Node","CSS", "Typescript"], 
    },
    {
        id: 2,
        title: "Weather Widget",
        desc: "A Next.js & Typescript based for fetching and displaying real-time weather data.",
        img: "/project3.png",
        tags: ["Next.JS", "Node","CSS", "Typescript"], 
    },
    {
        id: 3,
        title: "Currency Converter",
        desc: "A simple HTML & Typescript powered tol for converting curencies with real-time rates.",
        img: "/project4.png",
        tags: ["HTML", "Node","CSS", "Typescript"], 
    },
    {
        id: 4,
        title: "Simple Calculator Project",
        desc: "A basic HTML CSS & Typescript calculator for performing essential arithmetic operations.",
        img: "/project5.png",
        tags: ["HTML", "Node","CSS", "Typescript"], 
    },
]

const Projects = () => {
    return (
        <div id='projects' className='container pt-32'>
            <Heading title='My Projects' />
            <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el => (<Card
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                tags={el.tags}
                />)))}
            </div>

        </div>
    )
}

export default Projects