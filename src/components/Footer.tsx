'use client'

import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
			<Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<div className="flex items-center lg:py-2">
					Build With
					<span className="text-primary text-2xl px-1 dark:text-primaryDark">
						&#9825;
					</span>
					by&nbsp;
					<a>JuanDawd</a>
				</div>
				<Link href="/">Say hello</Link>
			</Layout>
		</footer>
	)
}

export default Footer