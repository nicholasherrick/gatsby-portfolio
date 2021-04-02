import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Avatar, Title, Text, SubTitle } from "./style"
import { SectionIntro, ContainerLayout, ResumeButton } from "../common"
import Typical from "react-typical"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar
                fluid={data.placeholderImage.childImageSharp.fluid}
                alt="user photo"
              />
              <SubTitle>
                <Typical
                  loop={Infinity}
                  wrapper="h2"
                  steps={[
                    "Full Stack Developer",
                    1000,
                    "Teaching Assistant",
                    1000,
                    "Freelancer",
                    1000,
                    "Problem Solver",
                    1000,
                    "Mentor",
                    1000,
                  ]}
                />
              </SubTitle>
            </div>
            <div>
              <Title> Hi, I’m Nick </Title>
              <Text>
                {" "}
                I'm a Software Developer and Teaching Assistant hailing from{" "}
                <b className="text-primary lined-link">Colorado</b>. I'm
                certified in full stack web development through{" "}
                <b className="text-primary lined-link">
                  The University of Denver
                </b>
                .{" "}
              </Text>
              <Text>
                {" "}
                I love working with modern technologies, building awesome
                projects and mentoring students.
              </Text>
              <SubTitle>Technical Skills</SubTitle>
              <Text>
                {" "}
                <b className="text-primary lined-link">Languages:</b> Javascript
                (ES6 and beyond!), HTML, CSS and just a little bit of C# and PHP{" "}
                <br />
                <b className="text-primary lined-link">Technologies:</b> React,
                Redux, Next, Node, MongoDB, MySql, Git, SASS
              </Text>
              <ResumeButton href="resume.pdf" target="_blank">
                {" "}
                Download resume{" "}
              </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
