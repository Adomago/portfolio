import { createFileRoute } from "@tanstack/react-router";
import About from "@/sections/about/about";
import Contact from "@/sections/contact/contact";
import Footer from "@/sections/footer/footer";
import Hero from "@/sections/hero/hero";
import Services from "@/sections/services/services";
import Showcase from "@/sections/showcase/showcase";
import Works from "@/sections/works/works-section";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<main className="mx-auto flex flex-col items-center justify-start w-full md:w-7xl md:border-x border-border divide-y divide-border/80">
			<Hero />
			<About />
			<Services />
			<Works />
			<Showcase />
			<Contact />
			<Footer />
		</main>
	);
}
