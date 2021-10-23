import Slider from "react-slick";
import Image from "next/image";
import Link from 'next/link';
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
  CategoriesWrapCourses,
  CategoriesLoading,
  CoursesError,
} from "../../styles/CoursesStyledModules/CoursesCategories.module";
import SearchPhoto from '../../images/search_courses.png';
import { categoriesData } from "./coursesDb";
import React, { useEffect, useRef, useState } from "react";
import { AnimatedButton } from "../AnimatedButton";
import Arrow from '../../images/courses_arrow.png';
import useCategoriesData from "../../utils/useCategoriesData";
import ImgLoading from '../../images/loading.svg';

export const Categories = () => {
  const [active, setActive] = useState<number>(0);
  const [data, getCategoriesData, loading, error, pages] = useCategoriesData();
  const [activePage, setActivePage] = useState<number>(0);
  const selectedCategory: string = categoriesData[active].value;
  const [searchedQuery, setSearchedQuery] = useState<string>('');

  useEffect(() => {
    getCategoriesData(selectedCategory, 1, searchedQuery);
    setActivePage(0); 
  }, [active]);
  
  const trigger = (elem: number): void => {
    setActive(elem);
  };

  const onPageClick = (number: number): void => {
    getCategoriesData(selectedCategory, number, searchedQuery);
    setActivePage(number - 1);
  };

  const handleSearch = (): void => {
    if (searchedQuery.length !== 0) {
      getCategoriesData(selectedCategory, 1, searchedQuery);
      setActivePage(0);
    }
  }

  return (
    <React.Fragment>
      <CategoriesBlock>
        <CategoriesBlockTitle>
          <h2>Categories</h2>
          <div>
            <input type='text' name='search' onChange={(e) => setSearchedQuery(e.target.value)} />
            <div onClick={handleSearch}><Image src={SearchPhoto} alt='search' /></div>
          </div>
        </CategoriesBlockTitle>
        <CategoriesWrap>
          {
            categoriesData.map((item: any, i) => {
              return (
                <div key={item.id} onClick={() => trigger(i)}
                className={active === i ? 'courses_categories-active' : ''}>
                  <Image src={item.photo} alt='photo_card' />
                  <p>{item.title}</p>
                </div>
              )
            })
          }
        </CategoriesWrap>
        {
          error ? (
            <CoursesError>Error, please wait and try again in a few minutes</CoursesError>
          ) : !loading && data.length === 0 ? (
            <CoursesError>No courses found, try again</CoursesError>
          ) : (
            <>
              <div style={{position: 'relative'}}>
                {
                  data.length > 7 ? (
                    <RenderSlider data={data} initial={0} from={4} to={8} />
                  ) : null
                }
                {
                  data.length > 15 ? (
                    <RenderSlider data={data} initial={8} from={12} to={16} /> 
                  ) : null
                }
                {
                  data.length > 7 && data.length < 16 ? (
                    <CategoriesWrapCourses>
                      {renderSliderComponent(data.slice(8, data.length))}
                    </CategoriesWrapCourses>
                  ) : null
                }
                {
                  data.length < 8 ? (
                    <CategoriesWrapCourses>
                      {renderSliderComponent(data)}
                    </CategoriesWrapCourses>  
                  ) : null
                }
                <CategoriesLoading style={{display: loading ? 'flex' : 'none'}}>
                  <Image src={ImgLoading} alt='loading' />
                </CategoriesLoading>
              </div>
              <CategoriesPug>
                {
                  pages.map((item, i) => {
                    return (
                      <CategoriesPugItem 
                        key={i}
                        className={i === activePage ? 'courses_categories-active' : ''}
                        onClick={() => onPageClick(item)}>
                        {item}
                      </CategoriesPugItem>
                    )
                  })
                }
              </CategoriesPug>
            </>
          )
        }
      </CategoriesBlock>
    </React.Fragment>
  )
}

const renderSliderComponent = (data: any) => {
  return (
    <>
      {
        data.map((item: any, i: any) => {
          return (
            <CategoriesCourse key={item._id}>
              <CategoriesCourseContent>
                <p>{item.name}</p>
                <Link href={{pathname: `/courses/${item._id}`}} passHref>
                  <div>
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
                  </div>
                </Link>
              </CategoriesCourseContent>
            </CategoriesCourse>
          )
        })
      }
    </>
  )
}

interface IRedenderSlider {
  data: Array<object>; 
  from: number, 
  to: number,
  initial: number;
}

const RenderSlider = ({data, from, to, initial}: IRedenderSlider) => {
  const sliderFunc = useRef<Slider>(null);

  const sliderGoNext = (): void => {sliderFunc.current?.slickNext()};
  const sliderGoPrev = (): void => {sliderFunc.current?.slickPrev()};  

  return (
    <CategoriesSliderWrap>
      <CategoriesSliderLeftArrow onClick={() => sliderGoPrev()}>
        <Image src={Arrow} alt='arrow' />
      </CategoriesSliderLeftArrow>
      <Slider className='courses_slider' arrows={false} ref={sliderFunc}>
        <CategoriesCourseWrap>
          {renderSliderComponent(data.slice(initial, from))}
        </CategoriesCourseWrap>
        <CategoriesCourseWrap>
          {renderSliderComponent(data.slice(from, to))}
        </CategoriesCourseWrap>
      </Slider>
      <CategoriesSliderRightArrow onClick={() => sliderGoNext()}>
        <Image src={Arrow} alt='arrow' />
      </CategoriesSliderRightArrow>
    </CategoriesSliderWrap>
  )
}