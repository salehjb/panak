import * as Icons from "@mui/icons-material";

export const PAGES = [
  { text: "", href: "/" },
  { text: "صفحه اصلی", href: "/" },
  { text: "دوره ها", href: "/courses" },
  { text: "درباره ما", href: "/about-us" },
  { text: "ارتباط با ما", href: "/contact-us" },
  { text: "وبلاگ", href: "/articles" },
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
  { label: "ایمیل", type: "text", email: true },
  { label: "رمز عبور", type: "password" },
  { label: "شماره موبایل", type: "text" },
];

export const LOGIN_INPUTS = [
  { label: "ایمیل", type: "text", email: true },
  { label: "رمز عبور", type: "password" },
];

export const SORT_COURSES = [
  { text: "جدید ترین ها" },
  { text: "محبوب ترین ها" },
  { text: "گرانترین ها" },
  { text: "ارزانترین ها" },
];

export const CART_COURSES = [
  {
    title: "دوره پایتون",
    teacher: "مهدی جلیلی",
    time: "20:33:00",
    price: 900000,
    image:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/EX7HMH5HERIYJHJAMW7EB6QLHY.jpg",
  },
  {
    title: "دوره نکست جی اس",
    teacher: "صالح جلیلی",
    time: "20:33:00",
    price: 500000,
    image:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/EX7HMH5HERIYJHJAMW7EB6QLHY.jpg",
  },
  {
    title: "دوره ری اکت",
    teacher: "صالح جلیلی",
    time: "20:33:00",
    price: 1200000,
    image:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/EX7HMH5HERIYJHJAMW7EB6QLHY.jpg",
  },
  {
    title: "دوره نود جی اس",
    teacher: "صالح جلیلی",
    time: "20:33:00",
    price: 1300000,
    image:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/EX7HMH5HERIYJHJAMW7EB6QLHY.jpg",
  },
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
  {
    text: "پشتیبانی",
    href: "/dashboard/support",
    icon: Icons.HeadsetMicOutlined,
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