/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "What is progress really like?",
    description: `“When nothing seems to help, I go and look at a stonecutter hammering 
    away at his rock, perhaps a hundred times without as much as a crack showing in it.
     Yet at the hundred and first blow it will split in two, and I know it was not that
      last blow that did it — but all that had gone before.” -Jacob A. Riis.`,
    url: "https://medium.com/@charityjelimo/what-is-progress-really-like-b23e565862e9",
  },
  {
    title: "Introduction to Reactjs.",
    description:
      "This is an article featuring an introduction to React js and all I have learnt in one week with the guidance of Lux Academy. I'm super excited to start this journey and get my hands dirty.",
    url: "https://charityjelimo.hashnode.dev/week-one-with-react-js",
  },
  {
    title: "The Present.",
    description: `The world is a classroom to teach us something about ourselves. With every experience I’m
   learning to ask myself, “What is this really about? What am I supposed to learn?”.Every experience is a gift that forces us to move right or left to find a new center of gravity. And balance lives in the moment.`,
    url: "https://medium.com/@charityjelimo/taking-the-road-to-an-enlightened-healthy-existence-8f4040a7ccc2",
  },
  {
    title: "SyncCliA Website",
    description: "A website that promotes climate action",
    url: "https://witty-cliff-0dc13a30f.3.azurestaticapps.net/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
