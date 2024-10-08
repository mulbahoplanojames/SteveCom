const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Service",
    path: "/service",
  },
  {
    label: "Product",
    path: "/product",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];
export default navLinks;

// ===============================================================================
import image1 from "/src/assets/1.jpg";
import image2 from "/src/assets/2.jpg";
import image3 from "/src/assets/02.jpg";
export const homeServicesData = [
  {
    id: 1,
    title: "Organic Fruits",
    image: image1,
    description:
      "We provide healthy organic Fruits to help you live a healthy life. We care about your health. Our Fruits and Vegetables are organic. ",
  },
  {
    id: 2,
    title: "Agricultural Fruits",
    image: image2,
    description:
      "We provide healthy organic Vegetables to help you live a healthy life. We care about your health. Our Fruits and Vegetables are organic. ",
  },
  {
    id: 3,
    title: "Organic Oranges",
    image: image3,
    description:
      "We provide healthy organic Oranges to help you live a healthy life. We care about your health. Our Fruits and Vegetables are organic. ",
  },
];

// ===========================================================================

import alex from "/src/assets/alex.jpg";
import eward from "/src/assets/eward.jpg";
// import farmer3 from "/src/assets/farmer3.jpg";
// import farmer1 from "/src/assets/farmer1.jpg"

export const farmerData = [
  {
    id: 1,
    name: "Edward W. Karfiah ",
    position: "Proprietor",
    image: eward,
    link: "/about",
  },
  {
    id: 2,
    name: "Alex Dortie Kolleh",
    position: "Manager",
    image: alex,
    link: "",
  },
  {
    id: 3,
    name: "Matthew Kolubah",
    position: "Farmer",
    image: alex,
    link: "",
  },
  // {
  //   id: 4,
  //   name: "Edwin Zayzay",
  //   position: "Farmer",
  //   image: farmer1,
  // },
  // {
  //   id: 5,
  //   name: "Francis Korboi",
  //   position: "Farmer",
  //   image: farmer2,
  // },
  // {
  //   id: 6,
  //   name: "Oscar Kpehe",
  //   position: "Farmer",
  //   image: farmer3,
  // },
];

// ===========================================================================================
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const contactUsCardData = [
  {
    title: "Location",
    label: "Bong County, Liberia",
    icon: <FaLocationDot />,
  },
  {
    title: "Phone",
    label: "(+231) 123 456 789",
    icon: <FaPhone />,
  },
  {
    title: "Email",
    label: "stephen@gmail.com",
    icon: <MdEmail />,
  },
];

// ======================================================================
export const FAQData = [
  {
    id: 1,
    title: "How can I place an order for your cashews?",
    answer:
      " You can place an order directly through our website by selecting your desired cashew products and adding them to your cart. Once you are ready, proceed to checkout where you will enter your shipping and payment details. For bulk orders, you can contact our sales team through the provided email or phone number on our contact page.",
  },
  {
    id: 2,
    title: "What are the different types of cashews you offer?",
    answer:
      "We offer a variety of cashew products including Golden Crunch Cashews, Tropical Delight Cashews, NutriRich Cashews, Savory Spice Cashews, Nature's Gem Cashews, Pure Bliss Cashews, Prime Harvest Cashews, Velvet Roast Cashews, SunKissed Cashews, Earthy Essence Cashews, Gourmet Select Cashews, and VitalEnergy Cashews.",
  },
  {
    id: 3,
    title: "Are your cashews organic and sustainably sourced?",
    answer:
      " Yes, our cashews are sourced from certified organic farms and we adhere to sustainable farming practices. We are committed to providing high-quality, environmentally friendly products to our customers.",
  },
  {
    id: 4,
    title: "What is the shelf life of your cashew products?",
    answer:
      "Our cashew products have a shelf life of 12 months when stored in a cool, dry place. We recommend keeping them in an airtight container to maintain freshness.",
  },
  {
    id: 5,
    title: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping costs and delivery times will vary based on your location. You can find more information about our shipping policies and estimated delivery times on our Shipping Information page. If you have specific shipping requests or need further assistance, please contact our customer service team.",
  },
];
