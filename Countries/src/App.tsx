import React, { useState, useEffect } from 'react';
import { fetchCountries } from './utils/fetchCountries';
import CountryCard from './components/CountryCard';
import Search from './components/Search';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [countries, setCountries] = useState<any[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const loadCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
      setFilteredCountries(data);
    };
    loadCountries();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleFilterByRegion = (region: string) => {
    const filtered = countries.filter(country => country.region === region);
    setFilteredCountries(filtered);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <header>
        <Search onSearch={handleSearch} />
        <ThemeSwitcher onToggle={toggleTheme} />
      </header>
      <div className="country-list">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};


export default App;