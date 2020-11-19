import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "Welcome to React":
        "This app I am going to make multi language this component helps me with that",
      Home: "Home",
      Dashboard: "Dashboard",
      Login: "Login",
      LANG: "EN",
      "Please setting nhl widget": "Please setting nhl",
      "Please setting currency widget": "Please setting currency widget",
      Widget: "Widget",
      Widgets: "Widgets",
      Settings: "Settings",
      "Please choose your favorite paces in place":
        "Please choose your favorite paces in place",
      "Please choose basic currency": "Please choose basic currency",
      "Select the currencies you want to see on the chart":
        "Select the currencies you want to see on the chart",
      Step: "Step",
      Next: "Next",
      "start date": "start date",
      "end date": "end date",
      Back: "Back",
      Save: "Save",
      "Please choose your favorite teams": "Please choose your favorite teams",
      "Please enter place": "Please enter place",
      "Write description": "Write description",
      Password: "Password",
    },
  },
  ru: {
    translation: {
      "Welcome to React": "Привет это моё реак приложение",
      Home: "Главная",
      Dashboard: "Дашборд",
      Login: "Логин",
      LANG: "RU",
      "Please setting NHL widget": "Пожалуйста настройте НХЛ",
      "Please setting currency widget": "Пожалуйста настройте currency",
      "Please choose your favorite paces in place":
        "Пожалуйста настройте places в place",
      Widget: "Виджет",
      Widgets: "Виджеты",
      Settings: "Насторйки",
      "Please choose basic currency": "Пожалуйста выберите базовую валюту",
      "Select the currencies you want to see on the chart":
        "Выберите валюты, которые хотите видеть на графике",
      Step: "Шаг",
      Next: "Далее",
      "start date": "начало даты",
      "end date": "конец даты",
      Back: "Назад",
      Save: "Сохранить",
      "Please choose your favorite teams":
        "Пожалуйста, выберите свои любимые команды",
      "Please enter place": "Пожалуйста, введите место",
      "Write description": "Напишите описание",
      Password: "Пароль",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
