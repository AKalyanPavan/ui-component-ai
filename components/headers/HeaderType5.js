"use client";

import { useState } from 'react';

import Image from 'next/image'
import Link from 'next/link'

import kneqtLogo from '../../images/kneqt-logo.png';
import kneqtLogoBlack from '../../images/kneqt-logo-black.png';

export default function HeaderType5({backgroundColor = "", fontColor = "white", buttonColor = "#141414", activePage=""}) {

	const [hover, setHover] = useState(false);

	const handleMouseEnter = () => setHover(true);
	const handleMouseLeave = () => setHover(false);

	return(
		<div className={`bg-[#5023b9] ${backgroundColor}`}>
			<div className={`lg:px-[90px] sm:px-[50px] px-[20px] max-w-[1440px] mx-auto text-[14px] font-medium flex items-center justify-between py-[24px] text-white`}>
				<div className="flex items-center lg:gap-[48px] font-['Red_Hat_Display']">
					<Link href="/">
						<Image className="sm:w-[200px] w-[120px]" src={(activePage === 'features' || activePage === 'aboutus') ? kneqtLogoBlack : kneqtLogo} alt="kneqtLogo" />
					</Link>
					<Link href="/features">
						<div className={`cursor-pointer hidden lg:block ${(activePage === 'features') ? 'underline font-bold underline-offset-[10px] decoration-2' : ''}`}>Features</div>
					</Link>
					{/*<div className="cursor-pointer hidden lg:block">Benefits</div>*/}
					<Link href="/pricing">
						<div className={`cursor-pointer hidden lg:block ${(activePage === 'pricing') ? 'underline font-bold underline-offset-[10px] decoration-2 decoration-[#5023B9]' : ''}`}>Pricing</div>
					</Link>
					<Link href="/aboutus">
						<div className={`cursor-pointer hidden lg:block ${(activePage === 'aboutus') ? 'underline font-bold underline-offset-[10px] decoration-2' : ''}`}>About us</div>
					</Link>
				</div>
				<div className="">
					{/* Button */}
					{/* <div className={`font-['Lexend'] px-[24px] py-[12px] rounded-[8px] cursor-pointer hover:bg-[${buttonColor}] hover:text-${fontColor} text-[${buttonColor}] bg-${fontColor}`} style={{
						transition: 'all 0.3s',
					}}> */}
					<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`font-['Lexend'] px-[24px] py-[12px] rounded-[8px] cursor-pointer`} style={{
						color: hover ? `${fontColor}` : `${buttonColor}`,
						backgroundColor: hover ? `${buttonColor}` : `${fontColor}`,
						transition: 'all 0.3s',
					}}>
						<span className="block min-[350px]:hidden">Sign Up</span>
						<span className="hidden min-[350px]:block">Sign-up for free</span>
					</div>
					{/*<div className={`lg:hidden border-[2px] border-solid p-[0.5px] rounded-[5px] border-{${fontColor}} ml-[20px]`}>
						<svg className="" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" stroke-width="0"/>
							<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
							<g id="SVGRepo_iconCarrier"> <path d="M5 12H20" stroke={`${fontColor}`} stroke-width="2" stroke-linecap="round"/> <path d="M5 17H20" stroke={`${fontColor}`} stroke-width="2" stroke-linecap="round"/> <path d="M5 7H20" stroke={`${fontColor}`} stroke-width="2" stroke-linecap="round"/> </g>
						</svg>
					</div>*/}
				</div>
			</div>
		</div>
	)
}