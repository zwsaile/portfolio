"use client"
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity/lib/client'
import { Skill } from '../typings'

type Props = {
    skill: Skill
}

export default function Skill({skill}: Props) {
  return (
    <div
        className='group relative flex cursor-pointer'
    >
        <div
            className='relative flex rounded-full h-[75px] w-[75px] mx-auto object-cover flex-shrink-0 xl:w-[90px] xl:h-[90px] border border-gray-500 justify-center items-center'
        >
            <Image
                className='relative h-[50px] w-[50px] xl:w-[60px] xl:h-[60px] mt-1 filter group-hover:grayscale'
                src={urlFor(skill.image).url()}
                width={500}
                height={500}
                alt={skill.title + 'logo'}
            />
            <div
                className=' flex absolute opacity-0 group-hover:opacity-75 group-hover:bg-white rounded-full h-[75px] w-[75px] mx-auto object-cover flex-shrink-0 xl:w-[90px] xl:h-[90px] justify-center items-center'
            >
                <div
                    className='text-2xl font-bold text-black opacity-100'
                >
                    {skill.progress + '%'}
                </div>
            </div>
        </div>
    </div>
  )
}