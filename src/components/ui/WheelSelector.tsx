"use client";

import {
  WheelPicker,
  WheelPickerOption,
  WheelPickerWrapper,
} from "@ncdai/react-wheel-picker";

type ElementProps = {
  options?: WheelPickerOption[];
  visible?: number;
};

const WheelSelector = (props: ElementProps) => {
  const { options, visible } = props;

  const wheelOptions: WheelPickerOption[] = options
    ? options
    : [{ label: "", value: "" }];

  return (
    <div className="w-full h-full relative">
      <WheelPickerWrapper className="absolute top-1/2 left-1/2 w-fit h-fit -translate-1/2">
        <WheelPicker
          dragSensitivity={2.5}
          scrollSensitivity={2.5}
          optionItemHeight={55}
          options={wheelOptions}
          classNames={{
            highlightWrapper: "bg-(--accent) rounded-xl",
            highlightItem: "text-[1.6rem]! font-semibold!",
            optionItem: "text-[1.2rem]! opacity-50!",
          }}
          infinite
        />
      </WheelPickerWrapper>
    </div>
  );
};

export default WheelSelector;
