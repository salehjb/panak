import * as Icons from "@mui/icons-material";

export const PAGES = [
  { text: "صفحه اصلی", href: "/", icon: Icons.HomeOutlined },
  { text: "دوره ها", href: "/courses", icon: Icons.SchoolOutlined },
  { text: "درباره ما", href: "/about-us", icon: Icons.GroupsOutlined },
  { text: "همکاری در پروژه", href: "/project-cooperation", icon: Icons.HandshakeOutlined },
  { text: "استخدام در پاناک", href: "/panak-employment", icon: Icons.WorkOutline }
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
      "https://www.trendsetterlive.com/wp-content/uploads/2022/04/1-17-740x431.jpg",
  },
  {
    name: "سعید جلیلی",
    stack: "توسعه دهنده نرم افزار",
    image:
      "https://www.trendsetterlive.com/wp-content/uploads/2022/04/1-17-740x431.jpg",
  },
  {
    name: "الناز علیپور",
    stack: "مدیریت کل مجموعه",
    image:
      "https://www.trendsetterlive.com/wp-content/uploads/2022/04/1-17-740x431.jpg",
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
    title: "ایجاد فرصت مهاجرت",
    text: "شما میتوانید در صورت همکاری با این مجموعه و کسب رزومه موفق، امکان به دست آوردن کار در نمایندگی مستقل پاناک در کشور آلمان را پیدا کنید و فرصت یک مهاجرت موفق را برای خود فراهم سازید",
  },
  {
    icon: Icons.Visibility,
    topElement: true,
    title: "کار تیمی و انتقال تجربه",
    text: "در پاناک، میتوانیم در کنار هم به رشد و تکامل روز افزون در کار تیمی برسیم و دانش، تجربه و رزومه خود را به سطح قابل توجهی ارتقا دهیم. پاناک همواره در صدد این بوده است که علاوه بر آموزش، نیروی کار متخصص نیز پرورش دهد",
  },
  {
    icon: Icons.AccessTime,
    title: "در زمان صرفه جویی کنید",
    text: "با توجه به سابقه کاری قابل توجه تیم پاناک در زمینه های مختلف، شما میتوانید در صورت همکاری با این مجموعه در مدت زمان کوتاه تری رزومه خود را ارتقا دهید و با انواع چالش ها و مسائل بازار کار آشنا شوید",
  },
];

export const SIGNUP_INPUTS = [
  { label: "ایمیل", type: "text", name: "email", email: true },
  { label: "رمز عبور", type: "password", name: "password",  },
  { label: "شماره موبایل", type: "text", name: "phoneNumber",  },
];

export const LOGIN_INPUTS = [
  { label: "ایمیل", type: "text", name: "email", email: true },
  { label: "رمز عبور", type: "password", name: "password" },
];

export const SORT_COURSES = [
  { text: "جدید ترین ها" },
  { text: "محبوب ترین ها" },
  { text: "گرانترین ها" },
  { text: "ارزانترین ها" },
];

export const PAYMENT_GATEWAYS = [
  { name: "زرین پال", image: "/logos/zarinpal.png", value: "zarinpal" },
  { name: "بانک ملت", image: "/logos/melat.png", value: "melat" },
];

export const DASHBOARD_SIDEBAR_ITEMS = [
  { text: "داشبورد", href: "/dashboard", icon: Icons.GridViewOutlined },
  {
    text: "خرید های من",
    href: "/dashboard/my-purchases",
    icon: Icons.LocalMallOutlined,
  },
  {
    text: "علاقه مندیها",
    href: "/dashboard/favorites",
    icon: Icons.FavoriteBorderOutlined,
  },
  {
    text: "کیف پول",
    href: "/dashboard/wallet",
    icon: Icons.AccountBalanceWalletOutlined,
  },
  {
    text: "پروفایل",
    href: "/dashboard/profile",
    icon: Icons.PersonOutlineOutlined,
  },
];

export const EDIT_PROFILE_INPUTS_DASHBOARD = [
  { label: "نام و نام خانوادگی", type: "text" },
  { label: "ایمیل", type: "text" },
  { label: "شماره تماس", type: "text" },
];

export const CHANGE_PASSWORD_INPUTS_DASHBOARD = [
  { label: "رمز عبور فعلی", type: "password" },
  { label: "رمز عبور جدید", type: "password" },
];

export const COMMENT_REGISTRATION_RULES = [
  { text: "تنها دیدگاه های فارسی و مرتبط با محتوا تایید خواهد شد" },
  { text: "برای نظر دادن یا پرسش سوال، نیازی نیست دوره را خریده باشید" },
  { text: "با نهایت احترام، تمامی سعی خود را در انتشار نظرات شما خواهیم داشت" },
];

export const TRANSACTIONS = [
  {
    transactionId: "123456789",
    amount: "11,000,000",
    date: "1396/12/12",
    time: "12:12:12",
    status: "موفق",
  },
  {
    transactionId: "123456789",
    amount: "11,000,000",
    date: "1396/12/12",
    time: "12:12:12",
    status: "موفق",
  },
  {
    transactionId: "123456789",
    amount: "11,000,000",
    date: "1396/12/12",
    time: "12:12:12",
    status: "نا موفق",
  },
  {
    transactionId: "123456789",
    amount: "11,000,000",
    date: "1396/12/12",
    time: "12:12:12",
    status: "موفق",
  },
  {
    transactionId: "123456789",
    amount: "11,000,000",
    date: "1396/12/12",
    time: "12:12:12",
    status: "نا موفق",
  },
  {
    transactionId: "123456789",
    amount: "11,000,000",
    date: "1396/12/12",
    time: "12:12:12",
    status: "نا موفق",
  },
  {
    transactionId: "123456789",
    amount: "11,000,000",
    date: "1396/12/12",
    time: "12:12:12",
    status: "موفق",
  },
];

export const HOME_PAGE_BENEFITS = [
  { text: "صرفه جویی در زمان", icon: Icons.AccessTimeFilled },
  { text: "آموزش پروژه محور", icon: Icons.AccountTree },
  { text: "پشتیبانی مدرس", icon: Icons.SupportAgent },
  { text: "تضمین دوره ها", icon: Icons.Verified },
]    