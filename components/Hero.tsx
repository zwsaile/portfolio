"use client"
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link';
import { PageInfo } from '../typings';
import { sanityClient } from "../sanity/lib/client";
import { useNextSanityImage } from 'next-sanity-image';

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const imageProps = useNextSanityImage(sanityClient, pageInfo.heroImage);
    const [text, count] = useTypewriter({
        words: [
            `Hi, I'm ${pageInfo.name}`, 
            "art-maker.js", 
            "<CoffeeLover />"
        ],
        loop: true,
        delaySpeed: 2000
    });
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <div
                className='mt-20'
            >
                <BackgroundCircles />
            </div>
            <Image
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={imageProps}
                width={500}
                height={500}
                alt="Profile picture of Zachary Saile"
            />
            <div className='flex flex-col items-center justify-center mt-3 z-20'>
                <h2 className='text-sm uppercase text-gray-500 tracking-[15px] text-center my-4'>{pageInfo.role}</h2>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold px-10 mb-4'>
                    <span className='tracking-[2px] inline-block text-[#D8BFD8] mt-2'>{text}</span>
                </h1>

                <div
                    className='flex -space-x-4 md:space-x-0 justify-center mt-5'
                >
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}