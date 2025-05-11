"use client";

export default function HeaderType3({page = "home"}) {
	return(
		<section className="bg-[#ffffff] pt-[40px] rounded-b-[40px] font-['Lexend_Deca']">
			<div className="md:px-[40px] px-[20px]">
				<div className="max-w-[1440px] mx-auto">
					<header>
						<div className="flex items-center justify-between">
							<a href="/">
								<div className="flex w-fit items-center cursor-pointer">
									<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path strokeWidth="1" d="M20.1 10C20.1 6.19952 18.1185 2.8671 15.1467 1.02373C16.1028 0.684404 17.13 0.499999 18.2 0.499999C23.3268 0.499999 27.5 4.74372 27.5 10C27.5 15.2563 23.3268 19.5 18.2 19.5C17.13 19.5 16.1028 19.3156 15.1467 18.9763C18.1185 17.1329 20.1 13.8005 20.1 10ZM7.9 10C7.9 13.8005 9.88147 17.1329 12.8534 18.9763C11.8973 19.3156 10.87 19.5 9.8 19.5C4.67323 19.5 0.5 15.2563 0.5 10C0.499999 4.74372 4.67323 0.5 9.8 0.5C10.87 0.5 11.8972 0.684404 12.8533 1.02373C9.88147 2.8671 7.9 6.19952 7.9 10Z" stroke={`${page == 'work' ? 'white' : '#0E071E'}`} />
									</svg>
									<span className="font-['Lexend_Zetta'] font-semibold text-[24px] ml-[5px] tracking-[-4px]">Haptica</span>
								</div>
							</a>
							<div className="font-['Lexend'] font-normal text-[14px] tracking-[3px] min-[900px]:block hidden">
								<a href="/service"><span className="cursor-pointer hover:underline underline-offset-[5px] decoration-[2px]">WHAT WE DO</span></a>
								<a href="/work"><span className="xl:mx-[100px] cursor-pointer mx-[50px] cursor-pointer hover:underline underline-offset-[5px] decoration-[2px]">OUR WORK</span></a>
								<span className="cursor-pointer hover:underline underline-offset-[5px] decoration-[2px]">WHY US?</span>
							</div>
							<div className="font-['Lexend'] font-normal text-[14px] tracking-[3px] flex items-center mr-[10px]">
								<div className={`${page == 'home' ? 'gradientbackground' : ''} sm:flex items-center hidden cursor-pointer border-b-solid border-b-[2px] ${page == 'home' ? 'border-b-[#ffffff]' : ''} ${page == 'service' ? 'border-b-[#F2DB64] hover:border-b-black' : ''} ${page == 'work' ? 'border-b-[#191919] hover:border-b-white' : ''}`}>
									<span className="mr-[5px]">CONTACT US</span>
									<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 9L9 1" stroke={`${page == 'home' ? '#a53856' : ''} ${page == 'service' ? 'black' : ''} ${page == 'work' ? 'white' : ''}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M1 1H9V9" stroke={`${page == 'home' ? '#a53856' : ''} ${page == 'service' ? 'black' : ''} ${page == 'work' ? 'white' : ''}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</div>
								<div className={`min-[900px]:hidden border-[2px] border-solid p-[0.5px] rounded-[5px] ${page == 'home' ? 'border-black' : ''} ${page == 'service' ? 'border-black' : ''} ${page == 'work' ? 'white' : ''} ml-[20px]`}>
									<svg className="" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
										<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
										<g id="SVGRepo_iconCarrier"> 
											<path d="M5 12H20" stroke={`${page == 'work' ? 'white' : '#0E071E'}`} strokeWidth="2" strokeLinecap="round"/> 
											<path d="M5 17H20" stroke={`${page == 'work' ? 'white' : '#0E071E'}`} strokeWidth="2" strokeLinecap="round"/> 
											<path d="M5 7H20" stroke={`${page == 'work' ? 'white' : '#0E071E'}`} strokeWidth="2" strokeLinecap="round"/> 
										</g>
									</svg>
								</div>
							</div>
						</div>
					</header>
				</div>
			</div>
		</section>
	)
}