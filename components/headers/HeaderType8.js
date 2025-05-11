import castleWayLogo from '../../images/castle-way-logo.png';
import phone from '../../images/phone.svg';

import Image from 'next/image';

export default function HeaderType8() {
	return(
		<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Montserrat']">
			<div className="py-[20px] bg-[#ffffff] flex justify-between items-center top-[0px] sticky z-[1]">
				<Image src={castleWayLogo} className="sm:w-[200px] w-[150px] sm:h-[100px] h-[75px]" alt="Castle Way Logo" />
				<a href="tel:+91 9363057399" id="callUsNowButton">
					<div className="call-us-button bg-[#F83821] h-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer sm:text-[18px] font-medium">
						<Image src={phone} alt="Phone" />
						<span className="text-[#ffffff] ml-[10px] max-sm:hidden">
							+91 93630 57399
						</span>
						<span className="text-[#ffffff] ml-[10px] sm:hidden">
							Call Us
						</span>
					</div>
				</a>
			</div>
		</div>
	)
}