import logo from '../../images/vgd-logo.svg';
import phone from '../../images/phone.svg';

import Image from 'next/image';

export default function HeaderType6({activeTab, customStyle}) {

	const underlineClass = 'underline underline-offset-8 decoration-2';

	return(
		<div className={`top-[0px] sticky z-[1] font-['Lexend_Deca'] text-[#21739D] ${customStyle}`}>
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-[10px] flex justify-between items-center">
				<a href="/">
					<Image src={logo} className="w-[100px]" alt="logo-vgd" />
				</a>
				<div className="flex lg:gap-[30px] gap-[20px] max-lg:hidden">
					<a href="/">
						<span className={`cursor-pointer ${activeTab == 'home' ? underlineClass : ''}`}>Home</span>
					</a>
					<a href="/aboutus">
						<span className={`cursor-pointer ${activeTab == 'aboutus' ? underlineClass : ''}`}>About Us</span>
					</a>
					<a href="/services">
						<span className={`cursor-pointer ${activeTab == 'services' ? underlineClass : ''}`}>Services</span>
					</a>
					<a href="/projects">
						<span className={`cursor-pointer ${activeTab == 'projects' ? underlineClass : ''}`}>Projects</span>
					</a>
					<a href="/contactus">
						<span className={`cursor-pointer ${activeTab == 'contactus' ? underlineClass : ''}`}>Contact Us</span>
					</a>
				</div>
				<a href="tel:+91 8807553748">
					<div id="callUsNowButton" className="bg-[#21739D] h-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer font-medium">
						<Image src={phone} alt="phone" />
						<span className="text-[#ffffff] ml-[10px]">
							Call Us Now
						</span>
					</div>
				</a>
			</div>
		</div>
	)
}