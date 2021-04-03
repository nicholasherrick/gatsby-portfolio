module.exports = {
  SiteTitle: "Nicholas Herrick",
  Sitelogo: "#",
  SiteLogoText: "Nicholas Herrick",
  SiteAuthor: "Nicholas Herrick",
  SiteDescription: "Front End Developer",
  defaultDescription: "Software engineer!",
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 34,
  },
  SiteSocialLinks: {
    twitter: "https://twitter.com/iAmNickHerrick",
    github: "https://github.com/nicholasherrick",
    linkedin: "https://www.linkedin.com/in/nicholasherrick-dev/",
  },
  SiteAddress: {
    city: "Aurora",
    region: "West",
    country: "United States",
    zipCode: "80013",
  },
  SiteContact: {
    email: "nick@nicholasherrick.com",
    phone: "7202999354",
  },
  SiteCopyright: "2021",
}
