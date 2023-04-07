import React from "react";
import type { ChangeEventHandler } from "react";

type Props = {
  darkMode: boolean | undefined;
  setDarkMode: (mode: boolean) => boolean | void;
};

const ThemeComponent = ({ darkMode, setDarkMode }: Props): JSX.Element => {
  const themeMode: ChangeEventHandler<HTMLInputElement> = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="toggleWrapper">
      <input
        type="checkbox"
        className="dn"
        id="dn"
        checked={darkMode === true}
        onChange={themeMode}
      />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
};

export default ThemeComponent;
