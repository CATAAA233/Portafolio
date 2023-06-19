"use client";
import { useWindowSize } from "@/hooks";
import ServiceCard, { CardBackground, ServiceCardProps } from "../ServiceCard";
import styles from "./ServiceList.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

interface Props {
  serviceData: ServiceCardProps[];
  cardsTheme: CardBackground;
}
export default function ServicesList({ serviceData, cardsTheme }: Props) {
  const windowSize = useWindowSize();
  return (
    <div className={styles.Container}>
      {windowSize.width > 768 ? (
        serviceData.map((service, key) => {
          return (
            <ServiceCard
              key={key}
              title={service.title}
              backgroundColor={cardsTheme}
              description={service.description}
              icon={service.icon}
            />
          );
        })
      ) : (
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {serviceData.map((service, key) => {
            return (
              <SwiperSlide key={key}>
                <ServiceCard
                  title={service.title}
                  backgroundColor={cardsTheme}
                  description={service.description}
                  icon={service.icon}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}
