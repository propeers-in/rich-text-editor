import React from "react";
function useIsMobile() {
    const [isMobile, setIsMobile] = React.useState(false);
  
    React.useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth <= 480);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);
  
    return isMobile;
  }

export default useIsMobile