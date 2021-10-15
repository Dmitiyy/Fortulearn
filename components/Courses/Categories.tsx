import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  CategoriesBlock, 
  CategoriesBlockTitle, 
  CategoriesCourse, 
  CategoriesCourseContent, 
  CategoriesCourseWrap, 
  CategoriesPug, 
  CategoriesSliderLeftArrow, 
  CategoriesSliderRightArrow, 
  CategoriesSliderWrap, 
  CategoriesWrap,
  CategoriesPugItem,
  CategoriesWrapCourses
} from "../../styles/CoursesStyledModules/CoursesCategories.module";
import SearchPhoto from '../../images/search_courses.png';
import Image from "next/image";
import { categoriesData } from "./coursesDb";
import React, { useEffect, useRef, useState } from "react";
import { AnimatedButton } from "../AnimatedButton";
import Arrow from '../../images/courses_arrow.png';
import useCategoriesData from "../../utils/useCategoriesData";

export const Categories = () => {
  const [active, setActive] = useState<number>(0);
  const sliderFunc = useRef<Slider>(null);
  const [data, getCategoriesData, loading, error, pages] = useCategoriesData();
  const [activePage, setActivePage] = useState<number>(0);

  useEffect(() => {
    const selectedCategory: string = categoriesData[active].value;
    getCategoriesData(selectedCategory, 1);
    console.log(data);
    
  }, [active]);

  const trigger = (elem: number): void => {
    setActive(elem);
  };

  const sliderSettings = {
    arrows: false
  }

  const sliderGoNext = (): void => {sliderFunc.current?.slickNext()};
  const sliderGoPrev = (): void => {sliderFunc.current?.slickPrev()};  

  return (
    <React.Fragment>
      <CategoriesBlock>
        <CategoriesBlockTitle>
          <h2>Categories</h2>
          <div>
            <input type='text' name='search' />
            <div><Image src={SearchPhoto} alt='search' /></div>
          </div>
        </CategoriesBlockTitle>
        <CategoriesWrap>
          {
            categoriesData.map((item, i) => {
              return (
                <div key={item.id + i} onClick={() => trigger(i)}
                className={active === i ? 'courses_categories-active' : ''}>
                  <Image src={item.photo} alt='photo_card' />
                  <p>{item.title}</p>
                </div>
              )
            })
          }
        </CategoriesWrap>
        {
          data.length > 7 ? (
            <CategoriesSliderWrap>
              <CategoriesSliderLeftArrow onClick={() => sliderGoPrev()}>
                <Image src={Arrow} alt='arrow' />
              </CategoriesSliderLeftArrow>
              <Slider className='courses_slider' {...sliderSettings} ref={sliderFunc}>
                <CategoriesCourseWrap>
                  {renderSliderComponent(data.slice(0, 4))}
                </CategoriesCourseWrap>
                <CategoriesCourseWrap>
                  {renderSliderComponent(data.slice(4, 8))}
                </CategoriesCourseWrap>
              </Slider>
              <CategoriesSliderRightArrow onClick={() => sliderGoNext()}>
                <Image src={Arrow} alt='arrow' />
              </CategoriesSliderRightArrow>
            </CategoriesSliderWrap> 
          ) : null
        }
        {
          data.length > 7 ? (
            <CategoriesWrapCourses>
              {renderSliderComponent(data.slice(8, data.length))}
            </CategoriesWrapCourses>
          ) : (
            <CategoriesWrapCourses>
              {renderSliderComponent(data)}
            </CategoriesWrapCourses>
          )
        }
        <CategoriesPug>
          {
            loading ? (
              <h1>Loading</h1>
            ) : 
            pages.map((item, i) => {
              return (
                <CategoriesPugItem 
                  key={Math.round(Math.random() * 1000) + i}
                  className={i === activePage ? 'courses_categories-active' : ''}>
                  {item}
                </CategoriesPugItem>
              )
            })
          }
        </CategoriesPug>
      </CategoriesBlock>
    </React.Fragment>
  )
}

const renderSliderComponent = (data: any) => {
  return (
    <>
      {
        data.map((_: any, i: any) => {
          return (
            <CategoriesCourse key={i}>
              <CategoriesCourseContent>
                <p>Web design</p>
                <AnimatedButton 
                  initialColor='#000'
                  hoverColor='#fff'
                  textColor='white'
                  text='View more'
                  textHover='#000'
                  textSize="20px"
                  width="160px"
                  height="50px"
                />
              </CategoriesCourseContent>
            </CategoriesCourse>
          )
        })
      }
    </>
  )
}