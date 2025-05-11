import logoMeka from '../../images/logo-meka.png';

import Image from 'next/image'

export default function HeaderType4() {
	return(
		<>
			<div className="max-w-[1440px] mx-auto lg:px-[80px] sm:px-[40px] px-[20px] pt-[20px] flex items-center font-medium text-[14px] font-['Inter'] justify-between">
				<div className="flex items-end">
					<a href="/">
						<Image className="w-[114px]" src={logoMeka} alt="Logo Meka" />
					</a>
					<div className="max-[800px]:hidden flex items-center gap-[50px] lg:ml-[100px] ml-[50px]">
						<div>Work</div>
						<div className="flex items-center">
							<span>Services</span>
							<svg className="mt-[2px] ml-[7px]" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 1L5 5L9 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</div>
						<div>About us</div>
						<div>Contact</div>
					</div>
				</div>
				<div className="flex items-center">
					<div className="text-white bg-black rounded-[8px] sm:px-[32px] px-[24px] py-[16px] cursor-pointer">Book Intro Call</div>
					{/*Burger Menu*/}
					<div className="min-[800px]:hidden border-[2px] border-solid p-[0.5px] rounded-[5px] border-black ml-[20px] h-fit">
						<svg className="" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
							<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
							<g id="SVGRepo_iconCarrier"> <path d="M5 12H20" stroke="#000000" strokeWidth="2" strokeLinecap="round"/> <path d="M5 17H20" stroke="#000000" strokeWidth="2" strokeLinecap="round"/> <path d="M5 7H20" stroke="#000000" strokeWidth="2" strokeLinecap="round"/> </g>
						</svg>
					</div>
				</div>
			</div>
		</>
	)
}