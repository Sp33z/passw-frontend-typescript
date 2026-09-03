import { useState } from "react";
import { IconType } from "react-icons";
import { LuEye, LuEyeClosed } from "react-icons/lu";

type ElementProps = {
  className?: string;
  placeholder?: string;
  Icon?: IconType;
  type?: string;
};

const Input = (props: ElementProps) => {
  const { className, placeholder, Icon, type } = props;
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={className}>
      <div className="w-full h-fit flex flex-row items-center justify-center gap-2">
        {Icon && <Icon className="h-6 w-auto" />}
        <div className="relative w-full h-fit duration-200 has-[input:not(:placeholder-shown)]:translate-y-3/10">
          <input className="peer w-full h-fit outline-none" placeholder="" type={show ? "string" : type} />
          <p className="absolute left-0 top-1/2 origin-left -translate-y-1/2 peer-not-placeholder-shown:-top-1/4 peer-not-placeholder-shown:scale-75 duration-200 peer-not-placeholder-shown:opacity-50 pointer-events-none">{placeholder}</p>
        </div>
        {type == "password" && (
          <button className="bg-(--accent) min-h-8 min-w-8 flex items-center justify-center rounded-lg shadow" onClick={() => setShow(!show)}>
            {show ? <LuEye className="w-auto h-5" /> : <LuEyeClosed className="w-auto h-5" />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
