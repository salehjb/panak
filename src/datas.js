import * as Icons from "@mui/icons-material";

export const PAGES = [
  { text: "صفحه اصلی", href: "/" },
  { text: "دوره ها", href: "/courses" },
  { text: "درباره ما", href: "/about-us" },
  { text: "ارتباط با ما", href: "/contact-us" },
  { text: "وبلاگ", href: "/weblog" },
  { text: "همکاری با پاناک", href: "/panak-cooperation" },
];

export const TEAM_MEMBERS = [
  {
    name: "صالح جلیلی",
    stack: "توسعه دهنده فول استک",
    image:
      "https://www.trendsetterlive.com/wp-content/uploads/2022/04/1-17-740x431.jpg",
  },
  {
    name: "مهدی جلیلی",
    stack: "توسعه دهنده بک اند",
    image:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/EX7HMH5HERIYJHJAMW7EB6QLHY.jpg",
  },
  {
    name: "سعید جلیلی",
    stack: "توسعه دهنده نرم افزار",
    image:
      "https://variety.com/wp-content/uploads/2020/08/peter-dinklage-2.jpg",
  },
  {
    name: "الناز علیپور",
    stack: "مدیریت کل مجموعه",
    image:
      "https://c.files.bbci.co.uk/61FF/production/_125578052_emiliaclarke2.jpg",
  },
];

export const SOCIAL_MEDIAS = [
  { icon: Icons.Telegram, href: "" },
  { icon: Icons.Instagram, href: "" },
  { icon: Icons.Facebook, href: "" },
];

export const PROJECT_COOPERATION_INPUTS = [
  { label: "نام" },
  { label: "نام خانوادگی" },
  { label: "نام شرکت / مجموعه" },
  { label: "سمت" },
  { label: "تلفن ثابت" },
  { label: "تلفن همراه" },
  { label: "استان" },
  { label: "شهر" },
  { label: "زمینه فعالیت" },
];

export const PANAK_EMPLOYMENT_INPUTS = [
  { label: "نام" },
  { label: "نام خانوادگی" },
  { label: "تلفن همراه" },
];

export const COOPERATION_BENEFITS = [
  {
    icon: Icons.AttachMoney,
    title: "بیشتر کسب درآمد کنید",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی است",
  },
  {
    icon: Icons.Visibility,
    topElement: true,
    title: "بیشتر دیده شوید",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی است",
  },
  {
    icon: Icons.AccessTime,
    title: "در زمان صرفه جویی کنید",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی است",
  },
];

export const SIGNUP_INPUTS = [
  { label: "ایمیل", type: "text" },
  { label: "رمز عبور", type: "password" },
  { label: "شماره موبایل", type: "text" },
];

export const LOGIN_INPUTS = [
  { label: "ایمیل", type: "email" },
  { label: "رمز عبور", type: "password" },
];

export const COURSES = [
  { title: "دوره ری اکت", teacher: "صالح جلیلی", time: "20:33:00", price: "1,200,000", image: "https://www.gannett-cdn.com/-mm-/a37e320ac2d4960cf53effc31c5ee0bdf7fd4308/c=0-3-1326-752/local/-/media/2015/10/13/USATODAY/USATODAY/635803254268223230-AP-Esquire-Emilia-Clarke.jpg?width=1200" },
  { title: "دوره جاوااسکریپت", teacher: "صالح جلیلی", time: "20:33:00", price: "900,000", image: "https://media.newyorker.com/photos/5c929565301bde0a3b6216a1/4:3/w_1999,h_1499,c_limit/EmiliaClarke-PersonalEssay-Story.jpg" },
  { title: "دوره جنگو", teacher: "مهدی جلیلی", time: "20:33:00", price: "1,100,000", image: "https://assets.televizier.nl/upload/m/t/Me_Before_You_1620314376.jpg" },
  { title: "دوره نکست جی اس", teacher: "صالح جلیلی", time: "20:33:00", price: "500,000", image: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/EX7HMH5HERIYJHJAMW7EB6QLHY.jpg" },
  { title: "دوره پایتون", teacher: "مهدی جلیلی", time: "20:33:00", price: "900,000", image: "https://cdn.cnn.com/cnnnext/dam/assets/220617111229-game-of-thrones-kit-harington-s8e4-super-tease.jpg" },
  { title: "دوره نود جی اس", teacher: "صالح جلیلی", time: "20:33:00", price: "1,300,000", image: "https://images.indulgexpress.com/uploads/user/imagelibrary/2022/6/17/original/KitHaringtonwillstarasJonSnowinanewGameofThronesspin-offseries.jpg?w=400&dpr=2.6" },
]

export const SORT_COURSES = [
  { text: "جدیدترین ها" },
  { text: "محبوب ترین ها" },
  { text: "گرانترین ها" },
  { text: "ارزانترین ها" },
]