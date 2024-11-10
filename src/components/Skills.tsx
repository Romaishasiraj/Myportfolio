import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className='container pt-32'>
            <div className='grid md:grid-cols-2 gap-20 items-center'>
                <div data-aos="zoom-in-up">
                    <h2 className='text-4x1 md:text-5x1 data-aos="zoom-in-up"'>Technologies I work with</h2>
                    <p className='text-gray-500 pt-2'>
                    I worked with web and backend technologies including React, Angular, Vue, Node.js, Express, and APIs (REST & GraphQL). I gained experience with SQL, NoSQL, Firebase, and cloud platforms like AWS, Azure, and Google Cloud, as well as DevOps (CI/CD). I also worked with UI/UX design tools like Adobe XD, Figma, and Sketch.
                    </p>
                </div>
                <div>
                    <div className='grid grid-cols-2 text-accent text-3x1 sm:text-4x1'>
                        <div className='space-y-2'>
                            <h2 data-aos="zoom-in-up">Typescript</h2>
                            <h2 data-aos="zoom-in-up">React.js</h2>
                            <h2 data-aos="zoom-in-up">Next.js</h2>
                        </div>
                        <div className='space-y-2'>
                            <h2 data-aos="zoom-in-up">Tailwind</h2>
                            <h2 data-aos="zoom-in-up">CSS</h2>
                            <h2 data-aos="zoom-in-up">Node.js</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills
