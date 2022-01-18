// by importing the svg like this and using it below worked
import imgUrl1 from "../../images/svg-1.svg";
import imgUrl4 from "../../images/svg-4.svg";
import imgUrl3 from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactioins without getting charged any fees.",
  buttonLabel: "Get started",
  imgStart: false,
  img: imgUrl1,
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "unlimited Access",
  headline: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer",
  buttonLabel: "Learn more",
  imgStart: true,
  img: imgUrl4,
  alt: "Document",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactioins without getting charged any fees.",
  buttonLabel: "Start now",
  imgStart: false,
  img: imgUrl3,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};
