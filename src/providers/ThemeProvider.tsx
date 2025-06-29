"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || "light";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
