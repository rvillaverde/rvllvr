import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import projectApi from '../api/project';
import skillApi from '../api/skill';
import { Project } from '../types/project';
import { Skill } from '../types/skill';
import Abilities from '../ui/home/abilities';
import About from '../ui/home/about';
import Contact from '../ui/home/contact';
import Intro from '../ui/home/intro';
// import Skills from '../ui/home/skills';
// import Work from '../ui/home/work';
import Layout from '../ui/layout';

const Home: NextPage = () => {
  const [projects, setProjects] = useState<Project[]>();
  const [skills, setSkills] = useState<Skill[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetch data');
      setLoading(true);

      try {
        const [projects, skills] = await Promise.all([
          projectApi.list(),
          skillApi.list(),
        ]);

        setProjects(projects);
        setSkills(skills);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (!projects && !skills && !loading) {
      fetchData();
    }
  }, []);

  return (
    <Layout home>
      <Intro />
      <About />
      <Abilities />
      {/* <Skills skills={skills || []} />
      <Work projects={projects || []} /> */}
      <Contact />
    </Layout>
  );
};

export default Home;
