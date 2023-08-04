import React from 'react'
import Skill from './Skill'
import { Skill as SkillType } from '../typings'

type Props = {
    skills: SkillType[]
}

export default function Skills({skills}: Props) {
    const filteredSkills = skills.filter(skill => skill.progress > 0)
  return (
    <div
        className='h-screen flex flex-col relative text-center items-center md:text-left xl:flex-row max-w-[1800px] xl:px-10 justify-center xl:space-y-0 mx-auto'
    >
        <h3
            className='absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl'
        >
            Skills
        </h3>
        <h3
            className='absolute uppercase top-36 tracking-[3px] text-gray-500 text-xs mt-3'
        >
            Hover for current proficiency
        </h3>
        <div
            className='grid grid-cols-4 gap-5 mt-10 xl:grid-cols-6'
        >
            {filteredSkills.map(skill => (
                <Skill 
                    key={skill._id}
                    skill={skill}
                />
            ))}
        </div>
    </div>
  )
}