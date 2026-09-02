import "@/styles/globals.css";
import { ReactNode } from "react";

type ElementProps = {
  children: ReactNode;
};

const MainLayout = (props: ElementProps) => {
  const { children } = props;

  return (
    <html>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
};

export default MainLayout;
