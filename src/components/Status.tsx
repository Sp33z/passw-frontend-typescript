import { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";

type ElementProps = {
    label?: string;
    active?: number;
    percentage?: number;
};

const Status = (props: ElementProps) => {
    const { percentage = 0, label = "", active = 0 } = props;

    const [state, setState] = useState<number>(0);

    useEffect(() => {
        if (percentage == active)
        {
            setState(1);
        } else if (percentage < active)
        {
            setState(0);
        } else {
            setState(2);
        }
    }, [percentage]);

    return (
        <div className="w-fit h-fit flex flex-col items-center justify-center gap-1">
            <button className="relative w-10 h-10 rounded-full overflow-hidden shadow">
                <div className="absolute top-0 left-0 w-full h-fit flex flex-col items-center justify-center duration-500" style={{transform: `translate(0%, -${(100 / 3) * state}%)`}}>
                    <div className="w-full h-10 flex flex-col items-center justify-center bg-(--text)/10 rounded-full duration-500" style={{opacity: state == 0 ? "1": "0"}}>
                        <div className="w-6 h-6 border-2 border-(--text) rounded-full" />
                    </div>
                    <div className="w-full h-10 flex flex-col items-center justify-center bg-(--text)/90 rounded-full duration-500" style={{opacity: state == 1 ? "1": "0"}}>
                        <div className="w-6 h-6 border-0 border-(--text) rounded-full bg-(--background)" />
                    </div>
                    <div className="w-full h-10 flex flex-col items-center justify-center bg-(--text) rounded-full duration-500" style={{opacity: state == 2 ? "1": "0"}}>
                        <MdDone className="w-6 h-6 rounded-full text-(--background)" />
                    </div>
                </div>
            </button>
            <small className="duration-500" style={{opacity: state == 0 ? "0.5" : "1", color: state >= 1 ? "var(--text)": ""}}>{label}</small>
        </div>
    );
}

export default Status;