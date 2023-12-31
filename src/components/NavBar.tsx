'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import {
	DribbbleIcon,
	GithubIcon,
	LinkedInIcon,
	MoonIcon,
	PinterestIcon,
	SunIcon,
	TwitterIcon,
} from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { useRouter } from 'next/router'

const CustomLink = ({
	href,
	title,
	className = '',
}: {
	href: string
	title: string
	className?: string
}) => {
	const pathname = usePathname()
	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			{/* Change the BG here with the accent color later*/}
			<span
				className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
					pathname === href ? 'w-full' : 'w-0'
				} dark:bg-light `}
			>
				&nbsp;
			</span>
		</Link>
	)
}

const CustomMobileLink = ({
	href,
	title,
	className = '',
	toggle,
}: {
	href: string
	title: string
	className?: string
	toggle: () => void
}) => {
	const pathname = usePathname()
	const router = useRouter()
	const handleClick = () => {
		toggle()
		setTimeout(() => {
			router.push(href)
		}, 100)
	}
	return (
		<button
			onClick={handleClick}
			className={`${className} relative group text-light dark:text-dark my-2`}
		>
			{title}
			{/* Change the BG here with the accent color later*/}
			<span
				className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
					pathname === href ? 'w-full' : 'w-0'
				} dark:bg-dark `}
			>
				&nbsp;
			</span>
		</button>
	)
}

const NavBar = () => {
	const { mode, setMode } = useThemeSwitcher()
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen((pastValue) => {
			return !pastValue
		})
	}

	return (
		<header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
			<button
				aria-label="menu"
				className="flex-col justify-center items-center hidden lg:flex"
				onClick={handleClick}
			>
				<span
					className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
						isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
						isOpen ? 'opacity-0' : 'opacity-100'
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
						isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
					}`}
				></span>
			</button>

			<div className="w-full flex justify-between items-center lg:hidden">
				<nav>
					<CustomLink href="/" title="Home" className="mr-4" />
					<CustomLink href="/about" title="About" className="mx-4" />
					<CustomLink href="/projects" title="Projects" className="mx-4" />
					<CustomLink href="/articles" title="Articles" className="ml-4" />
				</nav>

				<nav className="flex items-center justify-center flex-wrap">
					<motion.a
						aria-label="Check more about me in my Github"
						href="https://github.com/JuankDawd"
						target="_blank"
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className="w-6 mr-3"
					>
						<GithubIcon />
					</motion.a>
					<motion.a
						aria-label="Check more about me in my Twitter"
						target="_blank"
						href="https://twitter.com"
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className="w-6 mx-3"
					>
						<TwitterIcon />
					</motion.a>
					<motion.a
						aria-label="Check more about me in my Pinterest"
						target="_blank"
						href="https://pinterest.com"
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className="w-6 mx-3 bg-light rounded-full"
					>
						<PinterestIcon />
					</motion.a>
					<motion.a
						aria-label="Check more about me in my Dribble"
						target="_blank"
						href="https://dribbble.com"
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className="w-6 mx-3"
					>
						<DribbbleIcon />
					</motion.a>
					<motion.a
						aria-label="Check more about me in my LinkedIn"
						href="https://linkedin.com/in/juandawd"
						target="_blank"
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className="w-6 mx-3"
					>
						<LinkedInIcon className="" />
					</motion.a>

					<button
						aria-label="Toggle Dark Mode"
						onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} // Mobile
						className={`ml-3 flex items-center justify-center rounded-full p-1 w-6 h-6 m-1 sm:x-1 ${
							mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
						}`}
					>
						{mode === 'light' ? (
							<MoonIcon className="fill-dark" />
						) : (
							<SunIcon className="fill-dark" />
						)}
					</button>
				</nav>
			</div>

			{isOpen ? (
				<motion.div
					initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
					animate={{ scale: 1, opacity: 1 }}
					// TODO: Add a Exist animation for the popUp exit={{ scale: 0, opacity: 0 }}
					className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/75 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
				>
					<nav className="flex items-center flex-col justify-center">
						<CustomMobileLink href="/" title="Home" toggle={handleClick} />
						<CustomMobileLink
							href="/about"
							title="About"
							toggle={handleClick}
						/>
						<CustomMobileLink
							href="/projects"
							title="Projects"
							toggle={handleClick}
						/>
						<CustomMobileLink
							href="/articles"
							title="Articles"
							toggle={handleClick}
						/>
					</nav>

					<nav className="flex items-center justify-center flex-wrap mt-2">
						<motion.a
							aria-label="Check more about me in my Github"
							href="https://github.com/JuankDawd"
							target="_blank"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.9 }}
							className="w-6 mr-3 bg-light rounded-full dark:bg-dark sm:mx-1"
						>
							<GithubIcon />
						</motion.a>
						<motion.a
							aria-label="Check more about me in my Twitter"
							target="_blank"
							href="https://twitter.com"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.9 }}
							className="w-6 mx-3 sm:mx-1"
						>
							<TwitterIcon />
						</motion.a>
						<motion.a
							aria-label="Check more about me in my Pinterest"
							target="_blank"
							href="https://pinterest.com"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.9 }}
							className="w-6 mx-3 bg-light rounded-full sm:mx-1"
						>
							<PinterestIcon />
						</motion.a>
						<motion.a
							aria-label="Check more about me in my Dribble"
							target="_blank"
							href="https://dribbble.com"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.9 }}
							className="w-6 mx-3 sm:mx-1"
						>
							<DribbbleIcon />
						</motion.a>
						<motion.a
							aria-label="Check more about me in my LinkedIn"
							href="https://linkedin.com/in/juandawd"
							target="_blank"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.9 }}
							className="w-6 mx-3 sm:mx-1"
						>
							<LinkedInIcon />
						</motion.a>

						<button
							aria-label="Toggle Dark Mode"
							onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} // Desktop
							className={`ml-3 flex items-center justify-center rounded-full p-1 w-6 h-6 ${
								mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
							}`}
						>
							{mode === 'light' ? (
								<MoonIcon className="fill-dark" />
							) : (
								<SunIcon className="fill-dark" />
							)}
						</button>
					</nav>
				</motion.div>
			) : null}

			<div className="absolute left-[50%] top-2 translate-x-[-50%]">
				<Logo />
			</div>
		</header>
	)
}
export default NavBar
