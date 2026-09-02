import Logo from "@/components/Logo";
import { ReactNode } from "react";

type ElementProps = {
  children?: ReactNode;
};

const WelcomeLayout = (props: ElementProps) => {
  const { children } = props;

  return (
    <main className="w-full h-full flex flex-col items-center gap-6 p-4">
      <header className="w-full h-fit">
        <div className="w-fit h-fit flex flex-row items-center justify-center gap-2">
          <Logo className="w-auto h-8 fill-(--accent) pt-0.5" />
          <h5 className="font-logo">passw.</h5>
        </div>
      </header>
      {children}
    </main>
  );
};

export default WelcomeLayout;
