import logo from "./logo_awsd.svg";
import Image from "next/image";
import React from "react";

const Header : React.ElementType = () => {
	return (
		<header>
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
					<Image src={logo.src} alt="Vercel Logo" width={50} height={50}  className="img-fluid rounded img_background"/>
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-link" href="/">Index</a>
							<a className="nav-link" href="/blog">Blog</a>
							<a className="nav-link" href="/games">Jeux</a>
							<a className="nav-link" href="/about">About</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}
export default Header;