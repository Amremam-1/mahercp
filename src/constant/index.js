export const slides = [
  {
    id: 1,
    image: "/images/slider-2.jpg",
    titleEn1: "WELCOME TO MBN BAHRAIN",
    titleAr1: "مرحبًا بكم في إم بي إن البحرين",

    titleEn2: "INNOVATIVE TECH SOLUTIONS",
    titleAr2: "حلول تقنية مبتكرة",

    titleEn3: "FOR YOUR BUSINESS",
    titleAr3: "لأعمالكم",
  },

  {
    id: 2,
    image: "/images/slider-1.jpg",
    titleEn1: "WEB DESIGN & DEVELOPMENT",
    titleAr1: "تصميم وتطوير المواقع",

    titleEn2: "CUSTOM MOBILE APPS",
    titleAr2: "تطبيقات جوال مخصصة",

    titleEn3: "WITH PREMIUM QUALITY",
    titleAr3: "بجودة عالية",
  },

  {
    id: 3,
    image: "/images/slider-3.jpg",
    titleEn1: "DIGITAL MARKETING",
    titleAr1: "التسويق الرقمي",

    titleEn2: "CREATIVE SOLUTIONS",
    titleAr2: "حلول إبداعية",

    titleEn3: "THAT DRIVE RESULTS",
    titleAr3: "تحقق النتائج",
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
  {
    titleEn: "Project Studies",
    titleAr: "دراسات المشاريع",
    icon: FaProjectDiagram,
  },
  { titleEn: "Website Development", titleAr: "تطوير المواقع", icon: MdWeb },
  {
    titleEn: "UI / UX Design",
    titleAr: "تصميم واجهة وتجربة المستخدم",
    icon: FaPaintBrush,
  },
  { titleEn: "App Development", titleAr: "تطوير التطبيقات", icon: FaMobileAlt },
  {
    titleEn: "Product Design",
    titleAr: "تصميم المنتجات",
    icon: FaShoppingCart,
  },
  { titleEn: "Animation", titleAr: "الرسوم المتحركة", icon: MdAnimation },
  { titleEn: "Video Production", titleAr: "إنتاج الفيديو", icon: FaVideo },
  { titleEn: "Digital Marketing", titleAr: "التسويق الرقمي", icon: FaBullhorn },
  {
    titleEn: "Influencer Marketing",
    titleAr: "تسويق المؤثرين",
    icon: FaBullhorn,
  },
  { titleEn: "Robotics", titleAr: "الروبوتات", icon: FaRobot },
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
    categoryEn: "Website Development",
    categoryAr: "تطوير المواقع",
    projects: [
      {
        id: "01",
        titleEn: "nestretto coffee",
        titleAr: "نستريتو كوفي",
        subtitleEn: "Website",
        subtitleAr: "موقع ويب",
        url: "https://nestrettocoffee.com/",
        image: "/images/web1.png",
      },
      {
        id: "02",
        titleEn: "OFFLIX",
        titleAr: "أوفليكس",
        subtitleEn: "Website",
        subtitleAr: "موقع ويب",
        url: "https://m11.tv/OFFLIX/",
        image: "/images/web2.png",
      },
      {
        id: "03",
        titleEn: "MBN",
        titleAr: "إم بي إن",
        subtitleEn: "Website",
        subtitleAr: "موقع ويب",
        url: "https://mahercp.net/",
        image: "/images/web3.png",
      },
      {
        id: "04",
        titleEn: "Saudi Judo Federation",
        titleAr: "الاتحاد السعودي للجودو",
        subtitleEn: "Website",
        subtitleAr: "موقع ويب",
        url: "https://www.judoksa.org/",
        image: "/images/web4.png",
      },
      {
        id: "05",
        titleEn: "M11",
        titleAr: "إم 11",
        subtitleEn: "Website",
        subtitleAr: "موقع ويب",
        url: "https://m11.tv/",
        image: "/images/web5.png",
      },
      {
        id: "06",
        titleEn: "noo9 Store",
        titleAr: "متجر نو9",
        subtitleEn: "Website",
        subtitleAr: "موقع ويب",
        url: "https://noo9.net/",
        image: "/images/web6.png",
      },
      {
        id: "07",
        titleEn: "MBN Robots",
        titleAr: "إم بي إن روبوتس",
        subtitleEn: "Website",
        subtitleAr: "موقع ويب",
        url: "http://www.robots7.com/",
        image: "/images/web7.png",
      },
    ],
  },
  {
    id: 2,
    categoryEn: "App Development",
    categoryAr: "تطوير التطبيقات",
    projects: [
      {
        id: "2",
        titleEn: "MBN Mobile App",
        titleAr: "تطبيق إم بي إن",
        subtitleEn: "Mobile Application",
        subtitleAr: "تطبيق جوال",
        url: "https://play.google.com/store/apps/details?id=net.d2020&pcampaignid=web_share&pli=1",
        image: "/images/app1.png",
      },
    ],
  },
  {
    id: 3,
    categoryEn: "Motion Graphic Video",
    categoryAr: "فيديو الرسوم المتحركة",
    projects: [
      {
        id: "30",
        titleEn: "Al Madar Arabia Company",
        titleAr: "شركة المدار العربية",
        subtitleEn: "Motion Graphics Video",
        subtitleAr: "فيديو رسوم متحركة",
        url: "https://youtu.be/aksetXGqPsM",
        image: "/images/motion1.png",
      },
      {
        id: "31",
        titleEn: "Saudi Electronic University",
        titleAr: "الجامعة السعودية الإلكترونية",
        subtitleEn: "Motion Graphics Video",
        subtitleAr: "فيديو رسوم متحركة",
        url: "https://youtu.be/J8Hc0UOWxbc?si=UsWc07hu3LxLOznm",
        image: "/images/motion2.png",
      },
      {
        id: "32",
        titleEn: "Hamad Center",
        titleAr: "مركز حمد",
        subtitleEn: "Motion Graphics Video",
        subtitleAr: "فيديو رسوم متحركة",
        url: "https://youtube.com/shorts/JQVwWRQMG2U",
        image: "/images/motion3.png",
      },
      {
        id: "33",
        titleEn: "Imatah Al-Adha Association",
        titleAr: "جمعية إيماتة الأضحى",
        subtitleEn: "Motion Graphics Video",
        subtitleAr: "فيديو رسوم متحركة",
        url: "https://youtu.be/J8Hc0UOWxbc",
        image: "/images/motion4.png",
      },
      {
        id: "34",
        titleEn: "Investment House",
        titleAr: "بيت الاستثمار",
        subtitleEn: "Motion Graphics Video",
        subtitleAr: "فيديو رسوم متحركة",
        url: "https://youtu.be/G9B8Sqdnk40",
        image: "/images/motion5.png",
      },
    ],
  },
  {
    id: 4,
    categoryEn: "Digital Marketing",
    categoryAr: "التسويق الرقمي",
    projects: [],
  },
  {
    id: 5,
    categoryEn: "Influencer Marketing",
    categoryAr: "تسويق المؤثرين",
    projects: [],
  },
  {
    id: 6,
    categoryEn: "Product Design",
    categoryAr: "تصميم المنتجات",
    projects: [
      {
        id: "60",
        titleEn: "Khosh Mazza",
        titleAr: "خوش مازا",
        subtitleEn: "Product Design",
        subtitleAr: "تصميم المنتجات",
        url: "https://mahercp.net/MBN-Bahrin/project-details.html",
        image: "/images/product-design-1.png",
      },
    ],
  },
  {
    id: 7,
    categoryEn: "Art Production",
    categoryAr: "إنتاج فني",
    projects: [
      {
        id: "70",
        titleEn: "Manovieh",
        titleAr: "مانوفيه",
        subtitleEn: "Art Production",
        subtitleAr: "إنتاج فني",
        url: "youtu.be/qxBbafuvwco?si=OGshEozyIrUuCGpQ",
        image: "/images/art-production-1.png",
      },
    ],
  },
  {
    id: 8,
    categoryEn: "Robotics",
    categoryAr: "الروبوتات",
    projects: [
      {
        id: "80",
        titleEn: "Azhal Robot",
        titleAr: "آزحل روبوت",
        subtitleEn: "Robots",
        subtitleAr: "روبوتات",
        url: "http://www.robots7.com/",
        image: "/images/robots-1.png",
      },
      {
        id: "81",
        titleEn: "Tawasul Robot",
        titleAr: "تواصل روبوت",
        subtitleEn: "Robots",
        subtitleAr: "روبوتات",
        url: "https://www.robots7.com/",
        image: "/images/robots-2.png",
      },
      {
        id: "82",
        titleEn: "Shaqardiyah Robot",
        titleAr: "شقردية روبوت",
        subtitleEn: "Robots",
        subtitleAr: "روبوتات",
        url: "http://www.robots7.com/",
        image: "/images/robots-3.png",
      },
      {
        id: "83",
        titleEn: "Murabit Robot",
        titleAr: "مرابط روبوت",
        subtitleEn: "Robots",
        subtitleAr: "روبوتات",
        url: "http://www.robots7.com/",
        image: "/images/robots-4.png",
      },
    ],
  },
  {
    id: 9,
    categoryEn: "Project Study",
    categoryAr: "دراسة المشاريع",
    projects: [],
  },
  {
    id: 10,
    categoryEn: "Web And App Design",
    categoryAr: "تصميم مواقع وتطبيقات",
    projects: [
      {
        id: "101",
        titleEn: "Grocery",
        titleAr: "تطبيق البقالة",
        subtitleEn: "Web and App Design",
        subtitleAr: "تصميم مواقع وتطبيقات",
        url: "https://www.mahercp.net/about/",
        image: "/images/robots-1.png",
      },
      {
        id: "102",
        titleEn: "Your Car",
        titleAr: "سيارتك",
        subtitleEn: "Web and App Design",
        subtitleAr: "تصميم مواقع وتطبيقات",
        url: "https://www.mahercp.net/about/",
        image: "/images/robots-1.png",
      },
      {
        id: "103",
        titleEn: "Marriage App Template",
        titleAr: "قالب تطبيق الزواج",
        subtitleEn: "Web and App Design",
        subtitleAr: "تصميم مواقع وتطبيقات",
        url: "https://www.mahercp.net/about/",
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
    titleAr: "المشاريع المنجزة",
  },
  {
    id: 2,
    num: 179,
    titleEn: "Customer Satisfaction",
    titleAr: "رضا العملاء",
  },
  {
    id: 3,
    num: 33,
    titleEn: "Our Projects",
    titleAr: "مشاريعنا",
  },
  {
    id: 4,
    num: 55,
    titleEn: "Success Rate",
    titleAr: "معدل النجاح",
  },
]

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

export const contactItems = [
  {
    icon: FaMapMarkerAlt,
    titleEn: "Address",
    titleAr: "العنوان",
    infoEn: "Building 2373, Road 2831, Block 428, Office 24, Seef, Manama",
    infoAr: "المبنى 2373، الطريق 2831، بلوك 428، المكتب 24، سيف، المنامة",
  },
  {
    icon: FaPhoneAlt,
    titleEn: "Phone",
    titleAr: "الهاتف",
    infoEn: "+973 1745 3190",
    infoAr: "+973 1745 3190",
  },
  {
    icon: FaEnvelope,
    titleEn: "Email",
    titleAr: "البريد الإلكتروني",
    infoEn: "Mbn.bhr1@gmail.com",
    infoAr: "Mbn.bhr1@gmail.com",
  },
]
