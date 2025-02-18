import React from "react";
import { useTranslation } from "react-i18next";
import "../services/i18n";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate;
  const { t, i18n } = useTranslation();
  return (
    <section className="bg-white dark:bg-gray-900 mb-0">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mt-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white font-open-sans">
            {" "}
            {t("landing.title")}{" "}
          </h1>
          <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 font-open-sans">
            {t("landing.description")}
          </p>
          <a
            href="/signInAs"  
            className="inline-flex items-center justify-center px-5 bg-blue-500 py-3 mr-3 text-base font-medium text-center text-black rounded-lg  bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            {t("landing.button1")}
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://img.freepik.com/free-vector/doctor-examining-patient-illustrated_23-2148847933.jpg?uid=R180094575&ga=GA1.1.1580593228.1717417627&semt=ais_hybrid"
            alt="homepageimage"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
