import React from "react";
import HeroSection_image from "../assets/HeroSection_image.svg";
import logo from "../assets/logo.png";
import subsIcon from "../assets/subsIcon.svg";
import google_play from "../assets/google_play.svg";
import app_store from "../assets/app_store.svg";
import leftApplePh from "../assets/leftApplePh.svg";
import rightApplePh from "../assets/rightApplePh.svg";
import crunches from "../assets/crunches.svg";
import chestPress from "../assets/chestPress.svg";
import deadlift from "../assets/deadlift.png";
import social from "../assets/social.png";
import bicep from "../assets/bicep.png";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Fitsnap = () => {
  return (
    <div className="w-screen overflow-y-hidden">
      {/* Navigation bar */}
      <div className="flex justify-between mx-auto items-center w-screen h-16 bg-blue-950">
        <img src={logo} className="w-22 h-8 mx-28" alt="" />

        <div>
          <NavLink to={"/"} className="text-white mx-5">
            HOME
          </NavLink>
          <NavLink to={"/fitsnap"} className="text-white mx-5">
            WORKOUT PLAN
          </NavLink>
          <NavLink to={"/fitsnap"} className="text-white mx-5">
            AI TRACKER
          </NavLink>
          <NavLink to={"/fitsnap"} className="text-white mx-5">
            EXERCISE
          </NavLink>
          <NavLink to={"/fitsnap"} className="text-white mx-5">
            ABOUT
          </NavLink>
          <NavLink to={"/dashboard"} className="text-white mx-5">
            DASHBOARD
          </NavLink>

          <button className="bg-gray-700 py-1 px-4 rounded-lg text-white">
            LOGIN
          </button>
        </div>

        <div></div>
      </div>

      {/* Hero image */}
      <div className="mt-5 w-[60%] mx-auto relative">
        <img src={HeroSection_image} className="mx-auto" alt="" />

        <div className="flex items-center absolute w-[28%] top-[70%] left-[-10%]  shadow-lg h-15 bg-gray-100 rounded-3xl scale-90">
          <img src={subsIcon} className="mx-4 my-2" alt="" />
          <div>
            <p className="font-medium text-sm">100+ new users enrolled</p>
            <p className="text-xs">join now to get 20% instant discount</p>
          </div>
        </div>
      </div>

      <div className="my-5 flex justify-center items-center text-sm">
        <span>Home</span>
        <IoIosArrowForward />
        <span>Exercise</span>
        <IoIosArrowForward />
        <span>Bicep</span>
        <IoIosArrowForward />
        <span>Barbell Bicep Curl</span>
      </div>

      {/* Barbel Bicep Curl */}
      <div className="mx-auto w-[50%] text-center">
        <h1 className="text-blue-950 text-3xl text-center font-bold">
          Barbell Bicep Curl
        </h1>
        <p className="text-sm text-blue-800">
          The barbell curl is a classic and effective bicep exercise that
          targets the muscles in the front of your upper arms, specifically the
          biceps brachii.
        </p>
      </div>

      <div className="w-[70%] mx-auto mt-20 relative">
        <img src={bicep} />
        <div className="ml-5 w-[20%]  text-left absolute top-[-5%]">
          <p className="text-blue-900 font-bold text-xl my-4">
            Bicep Development
          </p>
          <p className="text-xs">
            he barbell bicep curl specifically targets the biceps brachii,
            contributing to their development and definition
          </p>
        </div>
        <div className="ml-5 w-[20%] text-xs text-left absolute top-[38%]">
          <p className="text-blue-900 font-bold text-xl my-4">
            Strengthen Building
          </p>
          <p className="text-xs">
            The exercise allows for heavy resistance, promoting strength gains
            in the biceps and surrounding muscle groups
          </p>
        </div>
        <div className="ml-[70%] w-[30%] text-xs text-right absolute top-[0%]">
          <p className="text-blue-900 font-bold text-lg my-4">
            Increased Muscle Engagement
          </p>
          <p className="text-xs">
            By maintaining strict form and controlling the weight, you ensure
            that the biceps are doing the majority of the work, leading to
            better muscle engagement and growth.
          </p>
        </div>
        <div className="ml-[70%] w-[30%] text-xs text-right absolute top-[38%]">
          <p className="text-blue-900 font-bold text-lg my-4">
            Compound Movement
          </p>
          <p className="text-xs">
            While primarily an isolation exercise for the biceps, the barbell
            curl involves other muscles to a lesser extent, such as the
            forearms, shoulders, and upper back. This makes it a compound
            movement that engages multiple muscle groups
          </p>
        </div>
      </div>

      {/* Exercise details */}
      <div className="mx-auto w-[50%] mt-5">
        <h2 className="font-bold text-xl text-blue-900">About the Exercise</h2>
        <p className="mt-5">
          The barbell curl is a classic and effective bicep exercise that
          targets the muscles in the front of your upper arms, specifically the
          biceps brachii. Barbell curls into your workout routine can help
          develop and strengthen your biceps, contributing to overall arm
          strength and aesthetics
        </p>

        <h2 className="font-bold text-xl text-blue-900 mt-10">Target Area</h2>
        <p>Biceps brachii and forearm muscles</p>

        <h2 className="font-bold text-xl text-blue-900 mt-4">Number of set</h2>
        <p>3</p>

        <h2 className="font-bold text-xl text-blue-900 mt-4">Duration </h2>
        <p>20 minutes</p>

        <h2 className="font-bold text-xl text-blue-900 mt-4">Calories burn</h2>
        <p>150 cal</p>

        <h2 className="font-bold text-xl text-blue-900 mt-4">
          Equipment needed
        </h2>
        <p>barbell</p>

        <h2 className="font-bold text-xl text-blue-900 mt-4">
          Instruction to perform
        </h2>
        <ul className="list-disc relative left-5">
          <li>Stand up straight with your feet shoulder-width apart.</li>

          <li>
            Hold a barbell with a shoulder-width grip, palms facing forward (an
            underhand grip).
          </li>

          <li>
            Your hands should be positioned slightly wider than your shoulders.
          </li>

          <li>Keep your wrists straight and aligned with your forearms.</li>

          <li>Maintain a straight back, chest up, and shoulders back.</li>

          <li>
            While keeping your upper arms stationary, exhale and curl the
            barbell towards your shoulders by flexing your elbows.
          </li>

          <li>Focus on contracting your biceps throughout the movement.</li>

          <li>
            Inhale and slowly lower the barbell back to the starting position
            with controlled movement.
          </li>

          <li>
            Maintain tension on the biceps during the descent; do not let the
            weight drop.
          </li>

          <li>Repeat the movement for the desired number of repetitions.</li>

          <li>
            Exhale during the lifting (concentric) phase and inhale during the
            lowering (eccentric) phase.
          </li>
        </ul>

        <h2 className="font-bold text-xl text-blue-900 mt-4">Tips</h2>

        <ul className="list-disc relative left-5">
          <li>
            Avoid using momentum by keeping your body still. Focus on isolating
            the biceps.
          </li>

          <li>
            Use a weight that allows you to maintain proper form and control
            throughout the exercise.
          </li>

          <li>
            Ensure a full range of motion, allowing your arms to fully extend at
            the bottom and flex at the top.
          </li>
        </ul>
      </div>

      {/* Download section */}
      <div className="w-screen h-[22rem] mt-10 flex flex-col justify-end bg-blue-950">
        <div className="text-white mx-20">
          <p className="text-3xl font-bold">Download FitSnap Now </p>
          <p className="text-2xl font-semibold">
            and turn every workout into a visual masterpiece
          </p>
        </div>
        <div className="flex gap-10 mx-20 my-7">
          <button>
            <img src={google_play} className="w-32 h-10" alt="" />
          </button>
          <button>
            <img src={app_store} className="w-32 h-10" alt="" />
          </button>
        </div>
        <div className="absolute ml-[62%] mb-[-12%] flex scale-90">
          <img src={leftApplePh} className="w-[15rem] mb-[15%]" alt="" />
          <img src={rightApplePh} className="w-[15rem] " alt="" />
        </div>
        <div className="w-screen h-28 bg-white rounded-t-[50%]"></div>
      </div>

      {/* Some text and images section */}
      <div className="w-full">
        <h2 className="font-bold text-2xl text-blue-900 mx-auto w-[50%] mt-28 text-center">
          Elevate Your Fitness: The AI Workout Plan – Precision, Progression,
          Perfection
        </h2>

        <p className="mx-auto text-center w-[50%] my-5 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum
          augue. Integer congue, libero nec congue fermentum, neque turpis
          eleifend libero, sit amet dictum dolor felis quis quam. Sed tincidunt{" "}
        </p>
      </div>
      <div>
        <h3 className="font-bold text-2xl text-blue-900 mx-auto w-[50%] mt-20 text-center">
          Discover the other exercise at FitSnap
        </h3>

        <div className="flex justify-evenly mt-10 items-center w-[60%] mx-auto">
          <div className="text-center w-[33%] flex flex-col items-center">
            <img src={chestPress} className="w-[12rem]" alt="" />
            <p className="font-semibold text-blue-900 mt-2">Chest Press</p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum
            </p>
            <div className="mt-3 flex items-center text-blue-950 border-b border-b-blue-950">
              <p>Read More...</p>
              <IoIosArrowForward />
            </div>
          </div>
          <div className="text-center w-[33%] flex flex-col items-center">
            <img src={deadlift} className="w-[13rem]" alt="" />
            <p className="font-semibold text-blue-900 ">Deadlift</p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum
            </p>
            <div className="mt-3 flex items-center text-blue-950 border-b border-b-blue-950">
              <p>Read More...</p>
              <IoIosArrowForward />
            </div>
          </div>
          <div className="text-center w-[33%] flex flex-col items-center">
            <img src={crunches} className="w-[12rem]" alt="" />
            <p className="font-semibold text-blue-900 mt-2">Crunches</p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum
            </p>
            <div className="mt-3 flex items-center text-blue-950 border-b border-b-blue-950">
              <p>Read More...</p>
              <IoIosArrowForward />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full h-[20rem] mt-10 bg-blue-950">
          <div className="flex gap-10">
            <div className="text-white flex flex-col gap-y-5 my-8 ml-16">
              <p className="text-blue-200 text-xl font-bold ">COMPANY</p>
              <p>Our story</p>
              <p>Careers</p>
              <p>Blog</p>
              <p>About</p>
            </div>
            <div className="text-white flex flex-col gap-y-5 my-8">
              <p className="text-blue-200 text-xl font-bold ">HELP</p>
              <p>FAQ</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact Us</p>
            </div>
            <div className="flex items-center mt-30 ml-[30%] gap-10">
              <img src={social} className="w-[7rem] h-[3rem]" alt="" />
              <div>
                <p className="text-blue-200 font-semibold">
                  STAY UPDATED WITH US
                </p>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="mt-5 bg-white text-white rounded-md p-2"
                />

                <p className="text-white mt-3">Copyright 2023 FitSnap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitsnap;
