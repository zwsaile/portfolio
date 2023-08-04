import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {}

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default function Contact({}: Props) {
	const {
		register,
		handleSubmit,
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:${formData.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
	}
	
	return (
		<div
			className='h-screen w-screen relative flex flex-col overflow-hidden text-center items-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto z-0'
		>
			<h3
				className='absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl'
			>
				Contact
			</h3>
			<div
				className='flex flex-col mt-[15vh] space-y-10 max-w-[80vw]'
			>
				<h4
					className='text-4xl font-semibold text-center'
				>
					Feel free to reach out to me
				</h4>
				<div
					className='space-y-6 mx-auto'
				>
					<div
						className='flex items-center justify-start space-x-5'
					>
						<PhoneIcon 
							className='text-[#D8BFD8] h-7 w-7'
						/>
						<p>(720)-829-3859</p>
					</div>
					<div
						className='flex items-center justify-start space-x-5'
					>
						<MapPinIcon 
							className='text-[#D8BFD8] h-7 w-7'
						/>
						<p>Denver, Colorado</p>
					</div>
					<div
						className='flex items-center justify-start space-x-5'
					>
						<EnvelopeIcon 
							className='text-[#D8BFD8] h-7 w-7'
						/>
						<p>zwsaile@gmail.com</p>
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-2 mx-auto w-[80vw] md:w-fit'
				>
					<div
						className='flex md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row justify-center items-center'
					>
						<input {...register('name')} className='contactInput' placeholder='Name' type='text' />
						<input {...register('email')} className='contactInput' placeholder='Email' type='email' />
					</div>
					<input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />
					<textarea {...register('message')} className='contactInput' placeholder='Message' />
					<button
						className='bg-[#D8BFD8] py-5 px-10 rounded-md text-black font-bold text-lg cursor-pointer'
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}