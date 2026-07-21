import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import NavBar from "../components/common/HomePageNavBar";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	const brahmanDivisions = [
		{
			name: "Project Brahman DoD",
			description:
				"Because fundamental human knowledge is often ambiguous, this is the unit where completion is made explicit. The tracker defines Definition of Done (DoD) checklists for each domain, then records progress against those checklists, canon items, and benchmarks.",
			link: "https://cooperative-script-4c9.notion.site/Project-Brahman-11da22d11f6e80d4b389f68b8e135f8f",
			linkText: "Open Tracker",
		},
		{
			name: "Brahman View",
			description:
				"The execution log of Project Brahman. It records work completed during each iteration, creating a chronological view of progress across domains.",
			link: "https://brahmanview.netlify.app/",
			linkText: "Open Brahman View",
		},
		{
			name: "Vamos Argentina",
			description:
				"The public, curated publication of selected insights from the knowledge repository. It communicates the strongest ideas and syntheses produced through the project.",
			link: "https://vamosargentina.phd",
			linkText: "Visit Vamos Argentina",
		},
		{
			name: "Knowledge Folder",
			description:
				"A hierarchical repository of human knowledge organized by domain, where each leaf contains notes on foundational works and concepts.",
			link: "https://drive.google.com/drive/folders/145HXkHvBfNklTmXWJF8b8qRs1sWXS3Ot?usp=drive_link",
			linkText: "Open Knowledge Folder",
		},
	];

	return (
		<React.Fragment>
			<Helmet>
				<title>Project Brahman | {INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-container">
						<section className="homepage-hero" aria-labelledby="project-brahman-heading">
							<div className="homepage-hero-text">
								<h1 id="project-brahman-heading" className="title homepage-title">
									Project Brahman
								</h1>
								<p className="subtitle homepage-subtitle">
									Project Brahman is a lifelong program of systematic self-cultivation. For each major domain
									of human activity, I identify its accepted standard of excellence. If excellence is embodied
									in a canon, I study the canon. If excellence is objectively measurable, I improve against
									the relevant benchmark.
								</p>
							</div>

							<div className="homepage-profile-panel">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="/Copy of davi-3.jpg"
											alt="Portrait of Davi Cavalcanti Sena"
											className="homepage-image"
										/>
									</div>
								</div>
								<p className="homepage-bio">
									I am Davi Cavalcanti Sena, a software engineer and lifelong learner focused on integrating
									technical practice with a structured study of human knowledge. Project Brahman is the
									system I use to turn curiosity into disciplined progress.
								</p>
							</div>
						</section>

						<section className="homepage-section" aria-labelledby="divisions-heading">
							<h2 id="divisions-heading" className="homepage-section-title">
								Subdivisions Of Project Brahman
							</h2>
							<div className="homepage-division-grid">
								{brahmanDivisions.map((division) => (
									<article key={division.name} className="homepage-division-card">
										<h3 className="homepage-division-title">{division.name}</h3>
										<p className="homepage-division-description">{division.description}</p>
										<a
											href={division.link}
											target="_blank"
											rel="noreferrer"
											className="homepage-division-link"
										>
											{division.linkText}
										</a>
									</article>
								))}
							</div>
						</section>

						<section className="homepage-section" aria-labelledby="connections-heading">
							<h2 id="connections-heading" className="homepage-section-title">
								How The Subdivisions Connect
							</h2>
							<p className="homepage-connections-description">
								Project Brahman DoD defines completion through explicit checklists. From that base, execution is
								logged in Brahman View, and curated outputs are developed through the Knowledge Folder before
								being published in Vamos Argentina.
							</p>
							<div className="homepage-flow-graph" aria-label="Project Brahman flow">
								<div className="homepage-flow-root">
									<span className="homepage-flow-step">Project Brahman DoD</span>
								</div>
								<div className="homepage-flow-branches">
									<div className="homepage-flow-branch">
										<span className="homepage-flow-arrow" aria-hidden="true">→</span>
										<span className="homepage-flow-step">Brahman View</span>
									</div>
									<div className="homepage-flow-branch">
										<span className="homepage-flow-arrow" aria-hidden="true">→</span>
										<span className="homepage-flow-step">Knowledge Folder</span>
										<span className="homepage-flow-arrow" aria-hidden="true">→</span>
										<span className="homepage-flow-step">Vamos Argentina</span>
									</div>
								</div>
							</div>
						</section>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
