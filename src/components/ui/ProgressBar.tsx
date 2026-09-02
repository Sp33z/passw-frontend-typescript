import Status from "../Status";

type ElementProps = {
    options?: string[];
    percentage?: number;
}

const ProgressBar = (props: ElementProps) => {
    const { options = [], percentage = 0 } = props;

    return <div className="w-full h-fit flex flex-col bg-(--background) text-(--text) shadow gap-2 p-4 rounded-xl">
        <header className="w-full h-fit flex flex-row items-center justify-between">
            <p className="font-semibold">Your Progress</p>
            <p className="font-semibold">{percentage.toFixed(0)}%</p>
        </header>
        <div className="relative w-full h-4 bg-(--text)/10 rounded-full overflow-hidden">
            <div className="h-full bg-(--text) duration-300 rounded-full" style={{width: `${percentage}%`}} />
            <div className="absolute top-0 right-3 w-2 h-full grid grid-cols-2 opacity-50">
                <div className="w-full h-full bg-white"></div>
                <div className="w-full h-full bg-black"></div>
                <div className="w-full h-full bg-black"></div>
                <div className="w-full h-full bg-white"></div>
                <div className="w-full h-full bg-white"></div>
                <div className="w-full h-full bg-black"></div>
            </div>
        </div>
        <div className="w-full h-fit flex flex-row items-center justify-between">
            {options.map((option, index) => {
                return <Status key={index} label={option} percentage={percentage} active={(100 / options.length) * (index + 1)}  />
            })}
        </div>
    </div>
}

export default ProgressBar;