import React from 'react';

interface ThemeSwitcherProps {
  onToggle: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onToggle }) => {
  return (
    <button className="theme-switcher" onClick={onToggle}>
      Toggle Theme
    </button>
  );
};

export default ThemeSwitcher;
