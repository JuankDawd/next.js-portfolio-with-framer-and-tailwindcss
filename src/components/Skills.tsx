'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => (
	<motion.div
		className="flex items-center justify-center rounded-full font-semibold cursor-pointer absolute
		bg-dark text-light shadow-dark
		dark:bg-light dark:text-dark dark:shadow-light
		  py-3 px-6 
		  lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
		  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
		"
		whileHover={{ scale: 1.05 }}
		initial={{ x: 0, y: 0 }}
		whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
		viewport={{ once: true }}
	>
		{name}
	</motion.div>
)

const Skills = () => {
	return (
		<>
			<h2 className=" font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
				Skills
			</h2>
			<div
				className="w-full h-screen relative flex items-center justify-center rounded-full lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
							bg-circularLight dark:bg-circularDark 
							lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
							md:bg-circularLightMd md:dark:bg-circularDarkMd 
							sm:bg-circularLightSm sm:dark:bg-circularDarkSm 
			"
			>
				<motion.div
					className="flex items-center justify-center rounded-full font-semibold p-8 cursor-pointer
							 bg-dark text-light shadow-dark
							 dark:bg-light dark:text-dark
							 lg:p-6 md:p-4 xs:text-xs xs:p-2"
					whileHover={{ scale: 1.05 }}
				>
					Web
				</motion.div>
				{/* 
					// TODO: Change Information and make it recursive
				*/}
				<Skill name="HTML" x="-25vw" y="2vh" />
				<Skill name="CSS" x="-5vw" y="-10vh" />
				<Skill name="JavaScript" x="20vw" y="6vh" />
				<Skill name="ReactJS" x="0vw" y="12vh" />
				<Skill name="NextJS" x="-20vw" y="-15vh" />
				<Skill name="Other" x="15vw" y="-12vh" />
				<Skill name="Web Design" x="32vw" y="-5vh" />
				<Skill name="Figma" x="0vw" y="-20vh" />
				<Skill name="Firebase" x="-25vw" y="18vh" />
				<Skill name="Tailwind CSS" x="18vw" y="18vh" />
			</div>
		</>
	)
}

export default Skills
