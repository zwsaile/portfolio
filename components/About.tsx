import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageInfo } from '../typings';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient, urlFor } from '../sanity/lib/client';

type Props = {
    pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div
        initial={{opacity: 0}} 
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3
            className='absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl'
        >
            About
        </h3>
        <Image
            className='relative rounded-full h-56 w-56 mx-auto mt-[15vh] md:mt-0 md:mb-0 object-cover flex-shrink-0 md:w-64 md:h-64 xl:w-96 xl:h-96'
            src={urlFor(pageInfo.profilePic).url()}
            width={500}
            height={500}
            alt="Wedding picture of Zachary Saile"
        />
        <div
            className='space-y-10 px-0 md:px-10'
        >
            <h4
                className='text-4xl font-semibold underline'
            >
                Here&apos;s bit of background
            </h4>
            <p
                className='text-md'
            >
                {pageInfo.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}