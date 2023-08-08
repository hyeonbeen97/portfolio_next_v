import Layout from "../components/layout";
import Head from "next/head";
import ProjectItem from "../components/projects/project-item";

export default function Projects({}) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>김현빈 포트폴리오__프로젝트</title>
          <meta name="description" content="포트폴리오 모음" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl mt-20">PROJECTS</h1>

        <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-1">
          <ProjectItem />
        </div>
      </div>
    </Layout>
  );
}
