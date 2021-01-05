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
      "Please setting nhl": "Please setting nhl",
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
      Cancel: "Cancel",
      "Type in an address": "Type in an address",
      DescriptionAppGeneralHead: `General description`,
      DescriptionAppTechHead: `Technical part`,
      DescriptionAppGeneral: `A small trial application at the instinctools company. It is written on the MERN stack
      to dive into backend and frontend at the same time. The application has various built-in widgets that will help
      you keep track of the exchange rates, your favorite hockey team and your travels, as well as flexibly customize them. 
      You can also register, so that you don’t need to re-configure the widgets every time.`,
      DescriptionAppTech: `The application uses different APIs for each widget, as well as it has its own API for the application
      to remember the settings of the widgets and which user these settings belong to..`,
      Mentors: `Thanks a lot to my mentors`,
    },
  },
  ru: {
    translation: {
      "Welcome to React": "Привет это моё реак приложение",
      Home: "Главная",
      Dashboard: "Дашборд",
      Login: "Логин",
      LANG: "RU",
      "Please setting NHL": "Пожалуйста настройте НХЛ",
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
      Cancel: "Отмена",
      "Type in an address": "Введите адрес",
      DescriptionAppGeneralHead: `Общее описание`,
      DescriptionAppTechHead: `Техническая часть`,
      DescriptionAppGeneral: `Маленькое приложение в рамках испытательного срока в компании instinctools, написанное на MERN  stack с целью погружения
      в backend и frontend одновременно. В приложение встроены разные виджеты которые помогут следить за курсами валют, любимой хоккейной командой
      и вашими путешествиями, а так же гибко настраивать их. Так же вы можете зарегистрироваться и вам не придётся каждый раз настраивать виджеты заново.`,
      DescriptionAppTech: `В приложении используются разные API для каждого виджета, а так же написан свой собственный API для приложения чтобы запоминать
      настройки виджетов и какому пользователю данные настройки принадлежат. `,
      Mentors: `Большое спасибо моим менторам`,
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
