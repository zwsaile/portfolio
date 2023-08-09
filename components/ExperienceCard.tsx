"use client"
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import React from 'react'
import { sanityClient, urlFor } from '../sanity/lib/client'
import { Experience } from '../typings'

type Props = {
    experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
	return (
		<article
			className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 mt-[15vh] h-[75vh] md:h-[72vh] w-[400px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-10 opacity-60 hover:opacity-100 max-w-[90vw]'
		>
			<Image
				className='rounded-full h-20 w-20 -mb-1 object-cover object-center xl:w-[150px] xl:h-[150px]'
				src={urlFor(experience.companyImage).url()}
				width={300}
				height={300}
				alt={experience.company + 'logo'}
			/>
			<div
				className='px-0 md:px-10'
			>
				<h4
					className='text-2xl font-light text-center'
				>
					{experience.jobTitle}
				</h4>
				<p
					className='text-bold text-1xl mt-1 text-center'
				>
					{experience.company}
				</p>
				<div
					className='flex space-y-2 my-2 mx-2 p-2 items-start'
				>
					{experience.technologies.map((technology) => (
						<Image
							key={technology._id}
							className='m-2'
							src={urlFor(technology.image).url()}
							width={25}
							height={25}
							alt={technology.title + "logo"}
						/>
					))}
				</div>
				<p
					className='mb-2 text-gray-400'
				>
					{new Intl.DateTimeFormat('en-US').format(new Date(experience.dateStarted))}{' to '}{experience.isCurrentlyWorkingHere ? 'Present' : Intl.DateTimeFormat('en-US').format(new Date(experience.dateEnded))}
				</p>
				<ul
					className='list-disc space-y-3 ml-3 text-sm'
				>
					{experience.points.map((point, i) => (
						<li
							key={i}
						>
							{point}
						</li>
					))}
				</ul>
			</div>
		</article>
	)
}