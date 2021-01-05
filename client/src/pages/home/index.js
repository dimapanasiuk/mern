import React, { useEffect, useState } from "react";
import emoji from "emoji-dictionary";
import { Link } from "react-router-dom";
import axios from "axios";
import { Alert } from 'reactstrap';
import { useTranslation } from "react-i18next";
import theme from 'style/theme';
import { AlertMentors, DivFLexMentors, ContainerS, H1, H2, AlertS, DivFLex, DivContainer } from './style';

const Home = () => {
  const { t } = useTranslation();

  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get("/home")
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const userData = () => {
    if (!user) {
      return (

        <AlertS color={theme.infoText}>
          <h4>
            Please <Link to="/login-page">log in</Link >
            &#160;
            {emoji.getUnicode(":zap:")}

          </h4>
        </AlertS>
      );
    } else {
      return (
        <AlertS color={theme.infoText}>
          <h4>
            Hello, <b>{user.name}</b>
          </h4>
        </AlertS>
      );
    }
  };

  return (
    <ContainerS fluid>
      <H1>
        Welcome to my <a href="https://www.mongodb.com/mern-stack" target="blank">MERN stack</a> app
        &#160; {emoji.getUnicode(":rocket:")}
        {emoji.getUnicode(":rocket:")}
        {emoji.getUnicode(":rocket:")}

      </H1>
      {userData()}
      <DivFLex>
        <DivContainer>
          <H2>{t("DescriptionAppGeneralHead")} &#160; {emoji.getUnicode(":memo:")}</H2>
          <Alert color={theme.infoText}>
            <p>{t("DescriptionAppGeneral")}</p>
          </Alert>
        </DivContainer>
        <DivContainer>
          <H2>{t('DescriptionAppTechHead')} &#160; {emoji.getUnicode(":computer:")}</H2>
          <Alert>
            <p>{t("DescriptionAppTech")}</p>
          </Alert>
        </DivContainer>
      </DivFLex>
      <DivFLex>
        <DivContainer>
          <h1>Frontend &#160; {emoji.getUnicode(":tiger2:")}</h1>
          <br />
          <h4>- React hooks</h4>
          <h4>- styled components</h4>
          <h4>- react-hook-form</h4>
          <h4>- react router</h4>
          <h4>- reactstrap</h4>
          <h4>- redux</h4>
          <h4>- i18next</h4>
          <h4>- axios</h4>
          <h4>- lodash</h4>
          <h4>- chartjs</h4>
          <h4>- eslint</h4>
        </DivContainer>
        <DivContainer>
          <h1>Backend &#160; {emoji.getUnicode(":whale:")}</h1>
          <br />
          <h4>- Node js</h4>
          <h4>- Exprees</h4>
          <h4>- Mongo db</h4>
          <h4>- Passport js</h4>
          <h4>- express-session</h4>
          <h4>- bcrypt</h4>
          <h4>- eslint</h4>
        </DivContainer>
      </DivFLex>

      <AlertMentors color={theme.success}>
        <DivFLexMentors>
          <h4>{t("Mentors")}</h4>
           &nbsp;&nbsp;
          <a href='https://github.com/Blackcate9' target='blank'>Olga Trishkina</a>,
          &nbsp;
          <a href='https://github.com/morpharc' target='blank'>Stanislav Yakubuk</a>
        </DivFLexMentors>
      </AlertMentors>
    </ContainerS>
  );
};

export default Home;
