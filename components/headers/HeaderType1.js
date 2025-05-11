"use client";

import burgerMenu from "../../images/burger-menu.svg"
import Image from 'next/image'

import React, { useState } from 'react';

export default function HeaderType1() {
	const [modalDisplay, setModalDisplay] = useState("hidden");

	function onBurgerMenuClicked(){
		document.querySelector("#modal").style.animationName = "slideIn"
		setModalDisplay("");
	}

	function onModalOverlayClicked() {
		document.querySelector("#modal").style.animationName = "slideOut"
		setTimeout(() => {
			setModalDisplay("hidden");
		}, "180");
	}

	function onMenuItemClicked(tag, scrollHeight = 100) {
	    if (document.querySelector(tag)) {
		    window.scrollTo({
		        top: document.querySelector(tag).offsetTop - scrollHeight,
		        left: 0,
		        behavior: 'smooth'
	      	})
	    }
	}

	return(
		<>
			<div className="min-[1100px]:px-[40px] px-[20px] py-[10px] w-[1200px] max-[1100px]:w-[80%] max-[800px]:w-[90%] max-[600px]:w-[100%] mx-[auto]">
				{/*Modal*/}
				<div 
					id="modalOverlay" 
					className={"w-[100%] bg-[#7f808080] fixed top-[0px] left-[0px] h-[100%] " + modalDisplay} 
					onClick={onModalOverlayClicked}>

					<div 
						style={{
							animationName: "slideIn",
							animationDuration: "0.2s"
						}}
						id="modal" 
						className={"w-[260px] bg-[#FFFFFF] fixed top-[0px] left-[0px] h-[100%] " + modalDisplay}>

						<div id="modalContent" className="p-[20px]">
							<div className="flex items-center mb-[40px]">
								<svg width="50" height="60" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.000305176 10.0115C0.000305176 4.7032 4.30351 0.399994 9.61179 0.399994H23.0679V19.2385C23.0679 24.5468 18.7647 28.85 13.4564 28.85H0.000305176V10.0115Z" fill="#1B1642"/>
								</svg>
								<span className="text-[#FFFFFF] ml-[-38px] font-bold text-[35px]">A</span>
								<span className="text-[30px] font-bold ml-[15px]">ims.</span>
							</div>
							<div className="text-[16px] font-medium">
								<div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('#home')}>Home</div>
								<div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('#aboutus')}>About Us</div>
								<div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('#ourservices')}>Our Services</div>
								<div className="mb-[15px] cursor-pointer" onClick={() => onMenuItemClicked('#casestudies')}>Case Studies</div>
								<a href="https://calendly.com/angelinvestormarketingservices" target="_blank">
									<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
										Contact Us
									</button>
								</a>
							</div>
						</div>

					</div>

				</div>

				{/*Header*/}
				<div id="header" className="flex items-center justify-between">
					<div className="flex items-center">
						<svg width="50" height="60" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.000305176 10.0115C0.000305176 4.7032 4.30351 0.399994 9.61179 0.399994H23.0679V19.2385C23.0679 24.5468 18.7647 28.85 13.4564 28.85H0.000305176V10.0115Z" fill="#1B1642"/>
						</svg>
						<span className="text-[#FFFFFF] ml-[-38px] font-bold text-[35px]">A</span>
						<span className="text-[30px] font-bold ml-[15px]">ims.</span>
					</div>
					 <div className="border-[#2F6AD9] border-[2px] border-solid p-[5px] rounded-[5px] min-[1000px]:hidden cursor-pointer" onClick={onBurgerMenuClicked}>
						<Image src={burgerMenu} alt="burgerMenu" />
					</div> 

					<div className="flex items-center text-[16px] font-medium max-[999px]:hidden">
						 <div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#home')}>Home</div>
						<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#aboutus')}>About Us</div>
						<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#ourservices')}>Our Services</div>
						<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#casestudies')}>Case Studies</div> 
						<a href="https://calendly.com/angelinvestormarketingservices" target="_blank">
							<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
								Contact Us
							</button>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}