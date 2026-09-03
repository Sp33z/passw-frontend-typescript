import { SwiperClass } from "swiper/react";

type ElementProps = {
  swiper: SwiperClass | null;
  activePage?: number;
};

const Indicator = (props: ElementProps) => {
  const { swiper, activePage } = props;

  return (
    <ul className="w-fit h-fit flex flex-row items-center justify-center gap-3">
      {swiper?.slides.map((_, index) => {
        const selected = index == activePage;

        return (
          <li key={index}>
            <button
              className="h-2.5 rounded-full shadow"
              style={{
                background: selected ? "var(--accent)" : "var(--text)",
                width: selected ? "1.8rem" : "0.6rem",
              }}
              onClick={() => {
                swiper.slideTo(index);
              }}
            ></button>
          </li>
        );
      })}
    </ul>
  );
};

export default Indicator;
