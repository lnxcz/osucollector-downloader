import { useState, useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  function isDark() {
    return theme === "dark";
  }
  return (
    <div className="bg-white dark:bg-slate-600 px-[10rem]">
      <label className="text-primary">
        <input
          type="checkbox"
          checked={isDark()}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        ></input>
        Dark Mode
      </label>
      <h1 className="text-center font-bold text-4xl mt-5">
        Osu Collector Downloader
      </h1>
      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
