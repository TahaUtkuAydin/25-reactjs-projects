import React from "react";
import LightDarkMode from "../light-dark-mode";
import Tictactoe from "../tic-tac-toe";
import RandomColor from "../random-color";
import Accordion from "../accordion/Acordion";

export default function FeatureFlag({ enabledFlags }) {
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <Tictactoe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordion />,
    },
  ];

  function checkEnabledFlags(key) {
    return enabledFlags[key]
  }

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((item)=> checkEnabledFlags(item.key) ? item.component : null )}
    </div>
  );
}
