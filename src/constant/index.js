export const slides = [
  {
    id: 1,
    image: "/images/slider-2.jpg",
    title1: "WELCOME TO MBN BAHRAIN",
    title2: "INNOVATIVE TECH SOLUTIONS",
    title3: "FOR YOUR BUSINESS",
  },
  {
    id: 2,
    image: "/images/slider-1.jpg",
    title1: "WEB DESIGN & DEVELOPMENT",
    title2: "CUSTOM MOBILE APPS",
    title3: "WITH PREMIUM QUALITY",
  },
  {
    id: 3,
    image: "/images/slider-3.jpg",
    title1: "DIGITAL MARKETING",
    title2: "CREATIVE SOLUTIONS",
    title3: "THAT DRIVE RESULTS",
  },
]

export const navLinks = [
  {
    id: 1,
    path: "/",
    label: {
      en: "Home",
      ar: "الرئيسية",
    },
  },
  {
    id: 2,
    path: "/services",
    label: {
      en: "Services",
      ar: "الخدمات",
    },
  },
  {
    id: 3,
    path: "/projects",
    label: {
      en: "Projects",
      ar: "المشاريع",
    },
  },
  {
    id: 4,
    path: "/clients",
    label: {
      en: "Clients Reviews",
      ar: "آراء العملاء",
    },
  },
  {
    id: 5,
    path: "/contact",
    label: {
      en: "Contact Us",
      ar: "اتصل بنا",
    },
  },
]

// socialLinks.js
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { AiOutlineTikTok } from "react-icons/ai"
import { BsSnapchat } from "react-icons/bs"

export const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/mbn_cp/?igshid=YmMyMTA2M2Y%3D",
  },
  {
    id: 2,
    name: "TikTok",
    icon: AiOutlineTikTok,
    url: "https://www.tiktok.com/@mbn_cp?_t=8sTl18jExrc&_r=1",
  },
  {
    id: 3,
    name: "Snapchat",
    icon: BsSnapchat,
    url: "https://www.snapchat.com/@mbn_cp?share_id=nSHsRYPML3Y&locale=ar-SA",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/feed/",
  },
]

import {
  FaPaintBrush,
  FaMobileAlt,
  FaVideo,
  FaBullhorn,
  FaRobot,
  FaShoppingCart,
  FaProjectDiagram,
} from "react-icons/fa"

import { MdAnimation, MdWeb } from "react-icons/md"

export const servicesCards = [
  { title: "Project Studies", icon: FaProjectDiagram },
  { title: "Website Development", icon: MdWeb },
  { title: "UI / UX Design", icon: FaPaintBrush },
  { title: "App Development", icon: FaMobileAlt },
  { title: "Product Design", icon: FaShoppingCart },
  { title: "Animation", icon: MdAnimation },
  { title: "Video Production", icon: FaVideo },
  { title: "Digital Marketing", icon: FaBullhorn },
  { title: "Influencer Marketing", icon: FaBullhorn },
  { title: "Robotics", icon: FaRobot },
]

export const logos = [
  "/images/part1.png",
  "/images/part2.png",
  "/images/part3.png",
  "/images/part4.png",
  "/images/part5.png",
  "/images/part6.png",
  "/images/part7.png",
  "/images/part8.png",
]

export const projectsData = [
  {
    id: 1,
    category: "Website Development",
    projects: [
      {
        id: "01",
        title: "nestretto coffee",
        subtitle: "Website",
        url: "https://nestrettocoffee.com/",
        image: "/images/web1.png",
      },
      {
        id: "02",
        title: "OFFLIX",
        subtitle: "Website",
        url: "https://m11.tv/OFFLIX/",
        image: "/images/web2.png",
      },
      {
        id: "03",
        title: "MBN",
        subtitle: "Website",
        url: "https://mahercp.net/",
        image: "/images/web3.png",
      },
      {
        id: "04",
        title: "Saudi Judo Federation",
        subtitle: "Website",
        url: "https://www.judoksa.org/",
        image: "/images/web4.png",
      },

      {
        id: "05",
        title: "M11",
        subtitle: "Website",
        url: "https://m11.tv/",
        image: "/images/web5.png",
      },
      {
        id: "06",
        title: "noo9 Store",
        subtitle: "Website",
        url: "https://noo9.net/",
        image: "/images/web6.png",
      },
      {
        id: "07",
        title: "MBN Robots",
        subtitle: "Website",
        url: "http://www.robots7.com/",
        image: "/images/web7.png",
      },
    ],
  },
  {
    id: 2,
    category: "App Development",
    projects: [
      {
        id: "2",
        title: "",
        subtitle: "Mobile Application",
        url: "https://play.google.com/store/apps/details?id=net.d2020&pcampaignid=web_share&pli=1",
        image: "/images/app1.png",
      },
    ],
  },
  {
    id: 3,
    category: "Motion Graphic Video",
    projects: [
      {
        id: "30",
        title: "Al Madar Arabia Company",
        subtitle: "Motion Graphics Video",
        url: "https://youtu.be/aksetXGqPsM",
        image: "/images/motion1.png",
      },
      {
        id: "31",
        title: "Saudi Electronic University",
        subtitle: "Motion Graphics Video",
        url: "https://youtu.be/J8Hc0UOWxbc?si=UsWc07hu3LxLOznm",
        image: "/images/motion2.png",
      },
      {
        id: "32",
        title: "Hamad Center",
        subtitle: "Motion Graphics Video",
        url: "https://youtube.com/shorts/JQVwWRQMG2U",
        image: "/images/motion3.png",
      },
      {
        id: "33",
        title: "Imatah Al-Adha Association",
        subtitle: "Motion Graphics Video",
        url: "https://youtu.be/J8Hc0UOWxbc",
        image: "/images/motion4.png",
      },
      {
        id: "34",
        title: "Investment House",
        subtitle: "Motion Graphics Video",
        url: "https://youtu.be/G9B8Sqdnk40",
        image: "/images/motion5.png",
      },
    ],
  },
  {
    id: 4,
    category: "Digital Marketing",
    projects: [],
  },
  {
    id: 5,
    category: "Influencer Marketing",
    projects: [],
  },
  {
    id: 6,
    category: "Product Desgin",
    projects: [
      {
        id: "60",
        title: "Khosh Mazza",
        subtitle: "Product Design",
        url: "https://mahercp.net/MBN-Bahrin/project-details.html",
        image: "/images/product-design-1.png",
      },
    ],
  },
  {
    id: 7,
    category: "Art Production",
    projects: [
      {
        id: "70",
        title: "Manovieh",
        subtitle: "Art Production",
        url: "youtu.be/qxBbafuvwco?si=OGshEozyIrUuCGpQ",
        image: "/images/art-production-1.png",
      },
    ],
  },
  {
    id: 8,
    category: "Robotics",
    projects: [
      {
        id: "80",
        title: "Azhal Robot",
        subtitle: "Robots",
        url: "http://www.robots7.com/",
        image: "/images/robots-1.png",
      },
      {
        id: "81",
        title: "Tawasul Robot",
        subtitle: "Robots",
        url: "https://www.robots7.com/",
        image: "/images/robots-2.png",
      },
      {
        id: "82",
        title: "Shaqardiyah Robot",
        subtitle: "Robots",
        url: "http://www.robots7.com/",
        image: "/images/robots-3.png",
      },
      {
        id: "83",
        title: "Murabit Robot",
        subtitle: "Robots",
        url: "http://www.robots7.com/",
        image: "/images/robots-4.png",
      },
    ],
  },

  {
    id: 9,
    category: "Project Study",
    projects: [],
  },
  {
    id: 10,
    category: "Web And App Desgin",
    projects: [
      {
        id: "101",
        title: "Grocery",
        subtitle: "Web and App Design",
        url: "https://www.mahercp.net/about/",
        image: "/images/robots-1.png",
      },
      {
        id: "102",
        title: "Your Car",
        subtitle: "Web and App Design",
        url: "https://www.mahercp.net/about/",
        image: "/images/robots-1.png",
      },
      {
        id: "103",
        title: "Marriage App Template",
        subtitle: "Web and App Design",
        url: "https://www.mahercp.net/",
        image: "/images/robots-1.png",
      },
    ],
  },
]

export const News = [
  {
    id: 1,
    num: 13,
    titleEn: "Completed Projects",
    titleAr: "",
  },
  {
    id: 2,
    num: 179,
    titleEn: "Customer Satisfaction",
    titleAr: "",
  },
  {
    id: 3,
    num: 33,
    titleEn: "Our Projects",
    titleAr: "",
  },
  {
    id: 4,
    num: 55,
    titleEn: "Success Rate",
    titleAr: "",
  },
]
