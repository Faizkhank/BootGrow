import React, { useEffect, useState } from "react";
import cloud from "../assets/cloud.gif";
import cyber from "../assets/cybersecurity.gif";
import launch from "../assets/launch.gif";
import analyst from "../assets/analytics.gif";
import Navbar from "./Navbar";
import Animation from "./Animation";
import FadeInSection from "./FadeinSection";
import Countdown from "./Countdown";
import SlideAnimation from "./SlideAnimation";
import project from "../assets/project.jpg";
const list = [
  {
    icon: cloud,
    title: "Cloud Solutions",
    content:
      "Streamline and secure your operations with scalable cloud infrastructure.",
  },
  {
    icon: cyber,
    title: "Cybersecurity Services",
    content:
      "Protect your business from digital threats with our comprehensive cybersecurity measures.",
  },
  {
    icon: analyst,
    title: "Data Analytics",
    content:
      "Turn data into actionable insights to drive decision-making and innovation.",
  },
  {
    icon: launch,
    title: "Custom Software Development",
    content:
      "Tailor-made software solutions to meet your specific business needs.",
  },
];
const Home = () => {
  return (
    <div>
      <Navbar />
      <Animation />
      <FadeInSection duration="1.5s">
        <div className="flex m-auto justify-center text-white my-10">
          <div className="container text-center">
            <h1 className="text-6xl font-bold mt-10">Our Services</h1>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection duration="1.5s">
        <div className="flex justify-center mt-56 flex-wrap my-4">
          {list.map((items, index) => (
            <div
              index={index}
              className="relative my-4 mx-3 text-center hover:-translate-y-4 duration-300 ease-in bottom-28 bg-white w-80 h-96  border-2 rounded-xl shadow-xl"
            >
              <div className="flex items-center justify-center mt-10">
                <img className="w-32" src={items.icon} alt="Cloud" />
              </div>
              <div className="p-5 text-xl overflow-clip">
                <p className="font-semibold mb-4">{items.title}</p>
                <p>{items.content}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
      <FadeInSection duration="1.5s">
        <div className="flex m-auto justify-center text-white mt-4">
          <div className="container text-center space-y-16">
            <h1 className="text-6xl font-bold mt-4">Our Impact</h1>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection duration="1.5s">
        <div className="container mx-auto mt-10 text-center px-28 mb-20">
          <p className="text-3xl text-white font-semibold">
            We have empowered over <Countdown targetValue={600} /> clients,
            successfully navigating complex digital transformations and boosting
            operational efficiency by an average of{" "}
            <Countdown targetValue={40}></Countdown>%.
          </p>
        </div>
      </FadeInSection>
      <FadeInSection duration="1.5s">
        <div className="flex justify-center m-auto">
          <div className="w-1/2 h-auto">
            <div className="flex text-white justify-center items-center text-center text-6xl font-bold w-full">
              <p>Key Achievements</p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection duration="1.5s">
        <div className="flex my-20 text-center">
          <div className="flex justify-center m-auto">
            <div className="text-4xl text-white font-semibold space-y-4 overflow-hidden">
              <p>
                Successfully completed over <Countdown targetValue={170} />{" "}
                projects.
              </p>
              <p>
                Served <Countdown targetValue={589} />+ satisfied clients.
              </p>
              <p>
                Helped clients achieve an average operational efficiency
                increase of <Countdown targetValue={40} />
                %.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection duration="1.5s">
        <div className="flex justify-center">
          <div className="text-center text-6xl text-white font-bold">
            <p>Strategic Partnerships</p>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};
export default Home;
