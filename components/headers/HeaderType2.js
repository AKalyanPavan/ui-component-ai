"use client";

import Logo from '../../images/logo.png';

import Image from 'next/image'

import { useEffect } from 'react';

function HeaderType2() {

	useEffect(() => {
		document.addEventListener('scroll', () => {
		    let header = document.getElementById("headerType2");
		    if (window.scrollY > 20) {
		    	header.style.boxShadow = "0 0 15px -1px #00000014";
		    } else {
		    	header.style.boxShadow = "";
		    }
		})
	})

	return (
		<>
			<section id="headerType2" className="sticky top-0 bg-[#ffffff]">
				<section className="max-w-[1400px] min-[500px]:px-[40px] px-[20px] mx-auto py-[15px] flex items-center justify-between">
					<div className="flex items-center gap-[35px]">
						<div className="flex items-center cursor-pointer">
							<Image className="w-[110px] mb-[2px]" src={Logo} alt="Logo" />
							<div className="min-[500px]:block hidden text-[18px] font-semibold border-l-[#dadada] border-l-solid border-l-[1.5px] ml-[6px] pl-[6px]">Sign</div>
						</div>
						<div className="min-[1050px]:flex hidden items-center gap-[35px]">
							<div className="cursor-pointer">Features</div>
							<div className="cursor-pointer">Integrations</div>
							<div className="cursor-pointer">Pricing</div>
							<div className="cursor-pointer">Blog</div>
							<div className="cursor-pointer">Contact Sales</div>
						</div>
					</div>
					<div className="flex items-center gap-[35px] font-semibold">
						<div className="min-[400px]:block hidden cursor-pointer">Sign In</div>
						<div className="cursor-pointer bg-black text-white px-[25px] py-[12px] rounded-[5px]">Try for free</div>
					</div>
				</section>
			</section>
		</>
	)
}

export default HeaderType2;