import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/HomePageNavBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<iframe src="https://cooperative-script-4c9.notion.site/ebd/11da22d11f6e80d4b389f68b8e135f8f" width="100%" height="2000" frameborder="0" allowfullscreen />
		</React.Fragment>
	);
};

export default Projects;
