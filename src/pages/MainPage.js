import React from "react";
import styled from "styled-components";
import BorderImg from "../components/Divider";
import NavBar from "../components/Navbar";
import JerinIcon from "../imgs/jerin3.png";
import WorkExperiences from "../components/WorkExperience";
import ProjectExperiences from "../components/Projects";
import Footer from "../components/Footer";

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const AboutMe = styled.div`
    display: flex;
    justify-content: space-between;
    height: 700px;
    width: auto;

    @media (max-width: 500px) {
        margin-top: 80px;
        width: auto;
        height: auto;
        margin-left: 40px;
        margin-right: 0 !important;
      }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 700px;
    width: auto;
    justify-content: center;

    @media (max-width: 500px) {
        width: 288px;
        height: auto;
      }

`;

const JerinImg = styled.img`
    display: flex;
    height: 350px;
    width: 350px;
    margin-right: 150px;
    margin-top: 100px;

    @media (max-width: 500px) {
        display: none;
        width: 98px;
        height: 130px;
        margin-left: 40px;
      }
`;

const Intro = styled.div`
    display: flex;
    margin-left: 70px;
    height: auto
    width: auto;

    @media (max-width: 500px) {
        width: 100%;
        height: auto;
        margin-left: 0;

         > h3 {
            font-size: 18px;
         }
      }
`;

const Intro2 = styled.div`
    display: flex;
    margin-left: 175px;
    height: auto
    width: auto;

    @media (max-width: 500px) {
        width: 100%;
        height: auto;
        margin-left: 0;

        > h3 {
            font-size: 18px;
         }
      }
`;

const Name = styled.div`
    display: flex;
    margin-left: 120px;
    height: auto;
    width: auto;

    @media (max-width: 500px) {
        width: 100%;
        height: auto;
        margin-left: 0;

        > h2 {
            font-size: 50px;
        }
      }
`;

const Underline = styled.text`
    text-decoration: underline;
`;

const Bold = styled.text`
    font-weight: bold;
`;

const Colour = styled.text`
    color: #CE5755;
`;

const Italics = styled.text`
    font-style: italic;
`;

const Questions = styled.div`
    display: flex;
    margin-top: 8em;
    flex-direction: column;
    height: 900px;
    width: auto;
    margin-left: 70px;
    margin-right: 70px;

    @media (max-width: 500px) {
        margin-top: 50px;
        width: 290px;
        height: auto;
        margin-left: 40px;
        margin-right: 50px;

        > h4 {
            font-size: 18px;
        }
      }
`;

const Answers = styled.div`
    display: flex;
    margin-top: 3em;
    justify-content: space-between;
    height: auto;
    width: 1205px;

    @media (max-width: 500px) {
        flex-direction: column;
        margin-top: 0;
        width: 286px;
        height: auto;

        > h3 {
            font-size: 18px;
        }
      }
`;

const AnswersContent = styled.div`
    display: flex;
    height: auto;
    width: 347px;

    @media (max-width: 500px) {
        flex-direction: column;
        margin-top: 25px;
        width: auto;
        height: auto;

        > h3 {
            font-size: 18px !important;
        }
      }
`;

const KnowMore = styled.div`
    display: flex;
    margin-top: 7em;
    flex-direction: column;
    height: auto;
    width: 747px;

    @media (max-width: 500px) {
        flex-direction: column;
        margin-top: 80px;
        width: 286px;
        height: auto;

        > h3 {
            font-size: 18px;
        }

        > h4 {
            font-size: 18px;
        }
      }
`;

const Experience = styled.div`
    display: flex;
    margin-top: 8em;
    flex-direction: column;
    height: 800px;
    width: 1155px;
    margin-left: 70px;
    margin-right: 70px;

    @media (max-width: 500px) {
        margin-top: 50px;
        width: 285px;
        height: auto;
        margin-left: 40px !important;
        margin-right: 0;

        > h3 {
            font-size: 15px;
        }

        > h4 {
            font-size: 18px;
        }
      }
`;

const ExperienceContent = styled.div`
    display: flex;
    margin-top: 3em;
    justify-content: space-between;
    height: auto;
    width: 1155px;

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        width: 285px;
        height: auto;
        margin-left: 0;
        margin-right: 0;

        > h3 {
            font-size: 15px;
        }

        > h4 {
            font-size: 18px;
        }

        > h6 {
            font-size: 12px;
        }
      }
`;

const WorkExperience = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 499px;

    > h4 {
        margin-bottom: 40px !important;
    }

    a {
        text-decoration: none;
        color: #0A0560;
    }

    a:visited {
        text-decoration: none;
        color: #0A0560;
    }

    > a:hover {
        text-decoration: none;
        color: #0A0560;
    }

    @media (max-width: 500px) {
        > h4 {
            font-size: 18px;
        }
        width: 285px;

      }
`;

const Projects = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 499px;

    > h4 {
        margin-bottom: 40px !important;
    }

    a {
        color: #0A0560;
        text-decoration: none;
      }

    a:visited {
        text-decoration: none;
        color: #0A0560;
    }

    @media (max-width: 500px) {
        display: flex;
        margin-top: 50px !important;
        flex-direction: column;
        width: 285px;
        height: auto;
        margin-left: 0;
        margin-right: 0;

        > h4 {
            font-size: 18px !important;
        }
      }
`;

const Opportunities = styled.div`
    display: flex;
    margin-top: 3em;
    height: 450px;
    width: 874px;
    margin-left: 70px;
    margin-right: 70px;

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        width: 285px;
        margin-left: 40px !important;
        height: auto;
        margin-left: 0;
        margin-right: 0;

        > h5 {
            font-size: 30px;
        }
      }
`;

class MainPage extends React.Component {
    render() {
        return (
            <PageContainer>
                <NavBar></NavBar>
                <AboutMe>
                    <Content>
                        <Intro>
                            <h3>hi! nice to meet you</h3>
                        </Intro>
                        <Name>
                            <h2>i'm <Colour>jerin</Colour></h2>
                        </Name>
                        <Intro2>
                            <h3>a <Underline>computer engineering</Underline> student and <Underline>software developer</Underline>.</h3>
                        </Intro2>
                    </Content>
                    <JerinImg src={JerinIcon} />
                </AboutMe>
                <BorderImg></BorderImg>
                <Questions>
                    <h4><Bold>question:</Bold> sum me up in three words?</h4>
                    <h4><Bold><Colour>answer:</Colour></Bold> creative<sup>(1)</sup>, bookworm<sup>(2)</sup>, and work-in-progress longboarder<sup>(3)</sup></h4>
                    <Answers>
                        <AnswersContent>
                            <h3><sup>(1)</sup> studying engineering is fun and challenging, but sometimes i need to step back and get creative with my work instead.</h3>
                        </AnswersContent>
                        <AnswersContent>
                            <h3><sup>(2)</sup> i like getting lost in books. i’m currently reading <Italics>harry potter and the globlet of fire</Italics> and planning on reading <Italics>neuromancer</Italics> next.</h3>
                        </AnswersContent>
                        <AnswersContent>
                            <h3><sup>(3)</sup> i recently picked up longboarding this summer, overall <Italics>fall count: 1, jerin: 0.</Italics> </h3>
                        </AnswersContent>
                    </Answers>
                    <KnowMore>
                        <h4>want to know a <Italics><Colour>bit</Colour></Italics> more?</h4>
                        <h3>i’m a second year student, studying computer engineering at the university of waterloo. i also enjoy working on freelance projects in the form of portfolios, digital web applications, or fun, interactive experiences.</h3>
                    </KnowMore>
                </Questions>
                <BorderImg></BorderImg>
                <Experience><h4>here’s a bit of my <Colour>experience</Colour> over the past few years…</h4>
                    <ExperienceContent>
                        <WorkExperience> <h4><Bold>work <Colour>experience.</Colour></Bold></h4>
                            {/* <WorkExperiences title=" jam3 — incoming software developer intern"
                                description="(1)"
                                label="jan 2021 — apr 2021"
                                link="https://www.linkedin.com/in/jerin-raisa/"
                            >
                            </WorkExperiences> */}
                            <WorkExperiences title=" waterloop — web dev lead + mentor"
                                description="(1)"
                                label="jan 2020 — present"
                                link="https://teamwaterloop.ca/"
                            >
                            </WorkExperiences>
                            <WorkExperiences title=" crowdlinker — qa analyst intern"
                                description="(2)"
                                label="sep 2019 — dec 2019"
                                link="https://www.linkedin.com/in/jerin-raisa/"
                            ></WorkExperiences>
                            <WorkExperiences title=" blackberry — software developer intern"
                                description="(3)"
                                label="jan 2019 — apr 2019"
                                link="https://www.linkedin.com/in/jerin-raisa/"
                            ></WorkExperiences>
                            <WorkExperiences title=" ubilab — software developer intern"
                                description="(4)"
                                label="sep 2018 — dec 2018"
                                link="https://www.linkedin.com/in/jerin-raisa/"
                            ></WorkExperiences>
                        </WorkExperience>
                        <Projects>
                            <h4><Bold>my <Colour>projects.</Colour></Bold></h4>
                            <ProjectExperiences title=" paper piano — htn ’19 winner"
                                description="a virtual piano designed to create accessible opportunities
                                 for those wanting to learn musical instruments."
                                label="(1)"
                                link="https://devpost.com/software/paper-piano-8yzaw9/">
                            </ProjectExperiences>
                            <ProjectExperiences title=" freud — enghacks ’19 top 5"
                                description="an interactive therapist and dashboard aimed to assist with mental health support."
                                label="(2)"
                                link="https://devpost.com/software/freud/">
                            </ProjectExperiences>
                            <ProjectExperiences title=" mappedout — a winner in my heart"
                                description="scan an mhacks attendee badge and view a map of umichigan’s intramural building in ar."
                                label="(3)"
                                link="https://devpost.com/software/mappedout-8f3au4/">
                            </ProjectExperiences>
                        </Projects>
                    </ExperienceContent>
                </Experience>
                <Opportunities>
                    <h5>have any interesting opportunities, book suggestions, or questions?
                    <a
                            href="mailto:jerin.raisa11@gmail.com?Subject=Hello%20👋🏼!"
                            target="_blank"
                            rel="noopener noreferrer"> hit me up!
                    </a> ✌🏼</h5>
                </Opportunities>
                <Footer></Footer>
            </PageContainer >
        );
    }
}

export default MainPage;