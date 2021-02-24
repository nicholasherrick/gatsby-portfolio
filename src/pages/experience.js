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
              Create scalable Front-End components & pages using React, Next,
              Redux, Sass, GraphQL, etc. Attend weekly stand up meetings.
              Coordinate implementations with CEO & developers on the enterprise
              ecommerce application.
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
              Assist students & instructor with coding curriculum & lessons
              inside and outside of class. Host a weekly office hours sessions
              with students.
            </Text>
            <div className="flex">
              <SubTitle>Freelance Consultant & Developer</SubTitle>
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
