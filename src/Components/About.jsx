/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Software Engineer student studying at Kirinyaga University. I enjoy creating innovative and simplistic websites that create a positive impact.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "Technical Writing",
  "Innovation",
  "Public Speaking",
  "Presentations",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = `A passionate and driven tech personnel bridging the realms of technology
 and philosophy. Currently excelling as a Fullstack Developer Trainee at The Jitu, gaining
  hands-on experience in developing robust applications. Also serving as a Microsoft
   Learn Student Ambassador for Kirinyaga University, promoting positive impact and
    fostering a vibrant tech community. With a notable background as a KamiLimu 
    alumnus as a mentee and participation in esteemed events like Microsoft Imagine 
    Cup and Game of Learners Season 3 Hackathon, I bring a proven track record of success. 
    Eager to contribute to cutting-edge projects that combine technology and philosophy,
     I'm ready to connect and make a significant impact to the world.`;

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
