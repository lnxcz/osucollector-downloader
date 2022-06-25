import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    switch (theme) {
      case "dark":
        setTheme("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        setTheme("light");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <div className="bg-white dark:bg-slate-600 px-[10rem]">
      <button onClick={toggleTheme}>theme</button>
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
