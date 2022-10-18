interface Route {
  title:string
  path:string
}

export const navLinks:Array<Route> = [
  {
    title: "Главная",
    path: "/"
  },
  {
    title: "Каталог",
    path: "/catalog"
  },
  {
    title: "Цены",
    path: "/prices"
  },
  {
    title: "О нас",
    path: "/aboutUs"
  },
  {
    title: "Контакты",
    path: "/contacts"
  }
];
