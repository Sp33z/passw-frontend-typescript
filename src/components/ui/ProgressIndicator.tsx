import Status from "../Status";

type ElementProps = {
  options?: string[];
  percentage?: number;
};

const ProgressIndicator = (props: ElementProps) => {
  const { options = [], percentage = 0 } = props;

  return (
    <div className="w-full h-fit px-3">
      <div className="w-full h-fit flex flex-row items-center justify-between">
        {options.map((option, index) => {
          return <Status key={index} label={option} percentage={percentage} active={(100 / options.length) * (index + 1)} />;
        })}
      </div>
    </div>
  );
};

export default ProgressIndicator;
