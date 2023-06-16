import React from "react";
import one from "../../assest/modern/01.jpeg";
import two from "../../assest/modern/02.jpeg";
import three from "../../assest/modern/03.png";
import four from "../../assest/modern/04.png";
import five from "../../assest/modern/05.png";
import six from "../../assest/modern/06.png";
import seven from "../../assest/modern/07.png";
import eight from "../../assest/modern/08.png";
const cardData = [
  {
    id: "01",
    title: "Simple Geometric Embroidery",
    image: one,
    description:
      "Simple lines and geometry are a hallmark of modern embroidery, and this free pattern from is a great place to start. All you need to know is how to make long straight stitches, and soon you'll have a piece of pretty stitching on",
  },
  {
    id: "02",
    title: "Diamonds & Flowers Stitching Design",
    image: two,
    description:
      "This gorgeous pattern combines a diamond gemstone shape with a frame of fresh florals—two elements that repeatedly show up in modern embroidery. The juxtaposition of hard and soft lines",
  },
  {
    id: "03",
    title: "Mod Fig Embroidery Pattern",
    image: three,
    description:
      "Fruit is a classic motif in embroidery, but this fig pattern by Kelly Fletcher Needlework takes a fresh approach. Part of a series of similarly-styled split fruit designs, the fig half has a fun pattern filling the inside. It's a simple design, and",
  },
  {
    id: "04",
    title: "Geometric Succulent Terrarium Pattern",
    image: four,
    description:
      "Succulents are as popular to stitch as they are to grow. This free pattern brings metallics, pastel colors, and geometric framing to the trend. The best part is, you don't even need a green thumb to have your own terrarium filled with",
  },
  {
    id: "05",
    title: "Contemporary Mountainscape Sampler",
    image: five,
    description:
      "Want to practice new embroidery stitches without making a stuffy sampler? This modern mountain sampler is the pattern for you. The pattern is free, plus you'll have the chance to work on six of the 15 stitches every",
  },
  {
    id: "06",
    title: "Color-Filled Embroidered Tile Ornament",
    image: six,
    description:
      "Anne from Lolli and Grace takes what could be seen as a traditional embroidery style, and turns it on its head to make something modern. She shares this brightly colored embroidered tile pattern, along with the instructions for making",
  },
  {
    id: "07",
    title: "Small World Tiny-Stitched Map",
    image: seven,
    description:
      "Based on the abstract painting style of artist Belinda Marshall, this beautiful pattern resembles a pastel map worked with tiny stitches. Each simple stitch is like a little brushstroke.",
  },
  {
    id: "08",
    title: "Octopus Mask Embroidery Design",
    image: eight,
    description:
      "Sometimes modern embroidery isn't just about shapes and styles, but also working on a different or unusual subject matter. This octopus mask pattern definitely fits that description. Anastacia from Odd Ana Stitch fills her Etsy shop with patterns and kits of all kinds, and each one is unlike anything you've seen before. These are not your traditional embroidery patterns.",
  },
];
const ModernPattern = () => {
  return (
    <div className="card-container grid grid-cols-3 gap-8 my-16" >
      {cardData.map((card) => (
        <div className="card w-96 bg-base-100 border rounded-full shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={card.image}
              alt="Shoes"
              className="rounded-full h-48 w-72"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{card.title}</h2>
            <p>{card.description}</p>
            <div className="card-actions">
              <p className=""><span className="text-green-500 text-2xl font-bold">{card.id}</span> of 8</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModernPattern;
