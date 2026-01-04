import { useState, useEffect } from "react";

export function Alert({ children, type = "info" }) {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    setIsShown(true);
    const timer = setTimeout(() => {
      setIsShown(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>{isShown && <div className={`alert alert-${type} ${isShown ? 'visible' : ''}`}>{children}</div>}</>
  );
}
