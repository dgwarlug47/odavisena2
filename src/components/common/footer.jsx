import React from "react";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-quote-wrap">
					<div className="footer-quote-card">
						<p className="footer-quote-mark" aria-hidden="true">
							&ldquo;
						</p>
						<blockquote className="footer-quote-text">
							And I will love to see that day, that day is mine when she will
							marry me outside with the willow trees and play the songs we
							made, they made me so, and I would love to see that day, her day
							was mine
						</blockquote>
						<cite className="footer-quote-source">
							Postcards from Italy, Beirut
						</cite>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
