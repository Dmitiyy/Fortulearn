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
  CategoriesPugItem
} from "../../styles/CoursesStyledModules/CoursesCategories.module";
import SearchPhoto from '../../images/search_courses.png';
import Image from "next/image";
import { categoriesData } from "./coursesDb";
import React, { useRef, useState } from "react";
import { AnimatedButton } from "../AnimatedButton";
import Arrow from '../../images/courses_arrow.png';

export const Categories = () => {
  const [active, setActive] = useState<number>(0);
  const sliderFunc = useRef<Slider>(null);

  const trigger = (elem: number): void => {setActive(elem)};

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
        <CategoriesSliderWrap>
          <CategoriesSliderLeftArrow onClick={() => sliderGoPrev()}>
            <Image src={Arrow} alt='arrow' />
          </CategoriesSliderLeftArrow>
          <Slider className='courses_slider' {...sliderSettings} ref={sliderFunc}>
            <CategoriesCourseWrap>
              {
                [0, 1, 2, 3].map((item, i) => {
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
            </CategoriesCourseWrap>
            <CategoriesCourseWrap>
              {
                [0, 1, 2, 3].map((item, i) => {
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
            </CategoriesCourseWrap>
            <CategoriesCourseWrap>
              {
                [0, 1, 2, 3].map((item, i) => {
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
            </CategoriesCourseWrap>
          </Slider>
          <CategoriesSliderRightArrow onClick={() => sliderGoNext()}>
            <Image src={Arrow} alt='arrow' />
          </CategoriesSliderRightArrow>
        </CategoriesSliderWrap>
        <CategoriesPug>
          <CategoriesPugItem className='courses_categories-active'>1</CategoriesPugItem>
          <CategoriesPugItem>2</CategoriesPugItem>
          <CategoriesPugItem>3</CategoriesPugItem>
          <CategoriesPugItem>4</CategoriesPugItem>
        </CategoriesPug>
      </CategoriesBlock>
    </React.Fragment>
  )
}