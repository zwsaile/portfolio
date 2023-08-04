import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity/lib/client'
import { Project } from '../typings'

type Props = {
    projects: Project[]
}

export default function Projects({projects}: Props) {
    return (
        <div 
            className='h-screen w-screen relative flex flex-col overflow-hidden text-center items-center md:flex-row max-w-full justify-evenly mx-auto z-0'
        >
            <h3 
                className='absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl'
            >
                Projects
            </h3>
            <div 
                className='flex relative w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'
            >
                {projects.map((project, i) => (
                    <div
                        className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-20 md:space-y-10'
                    >
                        <div 
                         className='flex flex-col justify-evenly items-center md:flex-row mt-[20vh]'
                        >
                            <Image 
                                className='mx-auto xl:h-[260px] xl:w-[500px]'
                                src={urlFor(project.image).url()} 
                                alt={'A mobile screenshot of' + project.title} 
                                width={400}
                                height={400}
                            />
                        </div>
                        <div
                            className='space-y-6 max-w-3xl mt-5'
                        >
                            <div
                                className='flex flex-col text-3xl font-semibold'
                            >
                                <span
                                    className='underline decoration-slate-500 -mb-5'
                                >
                                    Project {i + 1} of {projects.length}:
                                </span>
                                <br />
                                {project.title}
                            </div>
                            <div
                                className='flex space-x-6 items-center justify-center'
                            >
                                {project.technologies.map(tech => (
                                    <Image 
                                        key={tech._id}
                                        src={urlFor(tech.image).url()}
                                        height='25'
                                        width='25'
                                        alt={tech.title + 'icon'}
                                    />
                                ))}
                            </div>
                            <p
                                className='text-sm text-center md:text-left'
                            >
                                {project.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div 
                className='w-full absolute top-[30%] bg-[#d8bfd84a] left-0 h-[350px] -skew-y-12'
            />
      </div>
  )
}