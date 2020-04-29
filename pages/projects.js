import Link from 'next/link';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Card from '../components/Card';

import projects from '../data/projects';

export default function Projects() {
  return (
    <Layout>
      <h1>My Projects</h1>

      {projects.map((project) => {
        return (
          <Card
            heading={project.heading}
            description={project.description}
            href={project.link}
            image={project.image}
          />
        );
      })}

      <Card heading="Headingz" description="descriptionz" href="#" />

      <footer>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </footer>
    </Layout>
  );
}
