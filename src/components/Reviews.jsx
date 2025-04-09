"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const reviews = [
  {
    name: "Мохамед Рихаан",
    review: "Foods are very tasty same like India.. Staffs are very polite.",
    image: "/collage/image1.webp",
  },
  {
    name: "Михаил",
    review:
      "Всегда очень вкусно, и большие порции. Ассортимент очень широкий, есть блюда которые можно есть в пост. Ингредиенты свежие, специи из Индии. Очень дружелюбная атмосфера, помогают с выбором блюд",
    image: "/collage/image2.webp",
  },
  {
    name: "Ева Т.",
    review:
      'Очень вкусно, учитывают остроту - "по-индийски" или "по-русски")) Брали чикен масала, ягненка и лепешки нан. Все просто восхитительное, пряности отлично раскрываются, лепешки огненные. Рекомендую 🫡',
    image: "/collage/image3.webp",
  },
  {
    name: "Павел",
    review:
      "Самая вкусная индийская еда которую ел в Москве. Большие порции. Чикен бриани очень пряный, нравится. Креветки в соусе классные. Лепешки тоже хороши. В общем специально заезжаем в ТЦ чтобы тут поесть.",
    image: "/collage/image4.webp",
  },
  {
    name: "Варвара",
    review:
      "Обожаю индийскую кухню, а здесь она просто волшебная. Очень вкусно. Карри чувствуется, соусы это просто песня, лепешки тоже безумно нравятся. В блюдах с морепродуктами не 1-2 креветки или чего-то ещё, а прям много всего.",
    image: "/collage/image5.webp",
  },
  {
    name: "Ольга Быстрова",
    review:
      "Очень вкусная, яркая еда, просто очень. Доброжелательный персонал. Теперь это моё любимое место. Пробовала разные блюда с цыпленком, лимонный рис, лепёшки - всё просто супер.",
    image: "/collage/image6.webp",
  },
  {
    name: "Полина Мелиховская",
    review:
      'Ждала заказ 43 (!!!) минуты, подходила спрашивала, русская сотрудница, которая заказ собственно принимала, в мою сторону даже голову не поворачивала, извинялся и несколько раз говорил "сейчас, сейчас" не супер русскоговорящий сотрудник. Если вы когда-нибудь ели индийскую еду в индии или в хорошем индийском ресторане, ну или сами готовили по аутентичном рецепте, то в этой еде вы индийскую не узнаете, только названия. Прям вот вообще не похоже. Пришла по отзывам – разочарование',
    image: "/collage/image7.webp",
  },
  {
    name: "Алена Тарасова",
    review:
      "Очень вкусно! Я заказала butter chicken, лепешку, и рис дали в подарок по акции! Порция большая, вкусный мятный лимонад! Можно попросить сделать поострее или наоборот! Менеджер и повара очень добродушные и общительные! Атмосфера классная, приятная музыка! Рекомендую любителям индийской кухни!",
    image: "/collage/image8.webp",
  },
  {
    name: "Игорь Голубев",
    review:
      "Решили разнообразить привычный рацион и посетили это прекрасное место! Все повара ‐ индусы, блюда очень разные и нереально вкусные. Может я был слишком голодным, но съел всё за секунду, несмотря на пикантную остроту. Всем рекомендую!!",
    image: "/collage/image9.webp",
  },
  {
    name: "Ирина Зубанова",
    review:
      "Очень вкусно 🙏🥰🥰🥰🥰 Впервые попробовала индийскую кузню ❤️🔥🔥🔥 Готовят индусы и все специи у них из Индии! Приходите и получите гастрономическое удовольствие 👍👍👍👍👍",
    image: "/collage/image10.webp",
  },
  {
    name: "Виктория Трямкина",
    review:
      "Очень классное место, всё быстро и нереально вкусно, приятная девушка администратор, которая поможет с выбором. Мы были просто в восторге",
    image: "/collage/image11.webp",
  },
  {
    name: "Виктория",
    review:
      "Большие порции, наедаешься, очень вкусные креветки в соусе, лепешка с сыром и чесноком огонь! Персонал вежливый, подача блюд красивая, не успела сфоткать ту очень хотелось попробовать, уже как бы надоели тайские, вьетнамские, грузинские блюда и если вы хотите попробовать что та новенькое то вам сюда!",
    image: "/collage/image12.webp",
  },
  {
    name: "Николай Грецкий",
    review:
      "Очень вкусная еда, попробовал в первый раз и очень понравилось, персонал молодцы, это место стоит посетить, чтобы разнообразить рацион, советую точно 👍 🇮🇳",
    image: "/collage/image13.webp",
  },
  {
    name: " Бессонов Д.",
    review:
      "Очень вкусная и разнообразная еда. Взяли 4 блюда, все соусы разные, мяса кладут достаточно, порции большие и сытные. Еда свежая, теплая.",
    image: "/collage/image14.webp",
  },
  {
    name: " Алехина Дарья",
    review:
      "Отличное место! Очень приятный персонал. Мега вкусная еда, свежие продукты, все очень пряное и свежее. Восторг",
    image: "/collage/image15.webp",
  },
];

export default function ReviewsCarousel() {
  const { t } = useTranslation();

  const [expandedIndex, setExpandedIndex] = useState();

  const handleToggle = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className="bg-[#fcfaf5] py-16 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-[400] text-[#053420] tracking-wide">
            {t("reviews.heading")}
          </h2>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          // className="border"
        >
          {reviews.map((item, index) => {
            const isExpanded = expandedIndex === index;
            const shouldTruncate = item.review.length > 50;
            const displayReview = isExpanded
              ? item.review
              : item.review.slice(0, 50) + (shouldTruncate ? "..." : "");

            return (
              <SwiperSlide key={index}>
                <div
                  className={`bg-white rounded shadow-xl overflow-hidden flex flex-col p-4 my-7 md:mx-5 lg:mx-0 ${
                    isExpanded ? "max-h-auto" : "max-h-80"
                  }h-full`}
                >
                  {/* Image */}

                  {/* Text Section */}
                  <div className="mb-4 flex flex-col justify-between flex-1">
                    <h3 className="text-[#053420] font-quicksand font-medium underline mb-2">
                      {item.name}
                    </h3>

                    <div
                      className={`text-[#053420] text-sm font-quicksand transition-all duration-300  overflow-hidden`}
                    >
                      {displayReview}
                    </div>

                    {/* Read More Button */}
                    {shouldTruncate && (
                      <button
                        onClick={() => handleToggle(index)}
                        className="text-[#CFA247] font-quicksand cursor-pointer text-sm font-medium mt-2 flex items-center gap-1"
                      >
                        {isExpanded ? "show less" : "read more"}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="w-full h-40 sm:h-44 md:h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="swiper-prev absolute top-1/2 left-0 xl:left-32 -translate-y-1/2 z-10  p-2 cursor-pointer">
          <ChevronLeft className="text-[#DFE0DF] w-12 h-12" />
        </button>
        <button className="swiper-next absolute top-1/2 right-0 xl:right-32 -translate-y-1/2 z-10 p-2 cursor-pointer">
          <ChevronRight className="text-[#DFE0DF] w-12 h-12" />
        </button>
      </div>
    </section>
  );
}
