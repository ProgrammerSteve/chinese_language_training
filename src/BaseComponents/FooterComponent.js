import React from 'react';
import './FooterComponent.css';


const Home=()=>{

	return(
		<div className='footermasterdiv'>
			<div className="footerdiv">
				<div className="footercol1">
					<p className="footerword">Help</p>
					<p className="footerword">Contact</p>
					<p className="footerword">Legal</p>
				</div>

				<div className="footercol2">
					<p className="footerword">Affliate</p>
					<p className="footerword">Documentation</p>
					<p className="footerword">Careers</p>
				</div>

				<div className="footercol3">
					<p className="footerword">Privacy</p>
					<p className="footerword">Cookies</p>
					<p className="footerword">Support</p>
				</div>	
			</div>
			<div className="footerdiv2">
				<p className="footerllc">@ fakecompany, llc.</p>
			</div>
		</div>

	);
}

export default Home;