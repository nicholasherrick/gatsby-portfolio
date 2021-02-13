import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  ContainerLayout,
  Intro,
  Title,
  SubTitle,
  Text,
} from "../components/common"
import { MediaLink } from "../components/layout/footer/style"

const Experience = () => {
  return (
    <>
      <Layout>
        <SEO title="Experience" />
        <Intro>
          <ContainerLayout>
            <Title className="big-title">Experience</Title>
            <hr />
            <div className="flex">
              <SubTitle>Front End Developer</SubTitle>
              <Title className="line-height-reset">
                <MediaLink
                  className="lined-link bigger"
                  href={"https://www.bluejestic.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={"visit website"}
                >
                  Bluejestic
                </MediaLink>
              </Title>
            </div>
            <Text className="reset-margin">
              Create Front-End components using React, Next, Redux, Sass,
              GraphQL, etc. Attend weekly update meetings with the rest of the
              dev team. Coordinate implementations with other developers across
              the project.
            </Text>
            <div className="flex">
              <SubTitle>Teaching Assistant</SubTitle>
              <Title className="line-height-reset">
                <MediaLink
                  className="lined-link bigger"
                  href={"https://www.trilogyed.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={"visit website"}
                >
                  2U/Trilogy Education Services
                </MediaLink>
              </Title>
            </div>
            <Text className="reset-margin">
              Assist students on their journey to become programmers during
              their 6 month Full Stack Bootcamp program.
            </Text>
            <div className="flex">
              <SubTitle>Technical Consultant | Full Stack Developer</SubTitle>
              <Title className="line-height-reset">
                <MediaLink
                  className="lined-link bigger"
                  href={"https://starlightfoundry.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={"visit website"}
                >
                  Starlight Foundry
                </MediaLink>
              </Title>
            </div>
            <Text className="reset-margin">
              Consult clients on technical needs, design & build applications
              from scratch based on client’s needs, launch, host, maintain &
              update client applications.
            </Text>
          </ContainerLayout>
        </Intro>
      </Layout>
    </>
  )
}

export default Experience
