import { useCallback, useLayoutEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const onChangeTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  // User의 시스템 환경의 테마를 인식해서 모드를 설정함
  // 작동 확인 안 해봄
  useLayoutEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) 
      setTheme("dark");
    else
      setTheme("light");
  }, []);
  return {
    theme, onChangeTheme,
  };
}