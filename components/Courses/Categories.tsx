import Slider from "react-slick";
import Image from "next/image";
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      <div className="categories">
        <div className="categories__title">
          <h2>Categories</h2>
          <div>
            <input type='text' name='search' onChange={(e) => setSearchedQuery(e.target.value)} />
            <div onClick={handleSearch}><Image src={SearchPhoto} alt='search' /></div>
          </div>
        </div>
        <div className="categories__wrap">
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
        </div>
        {
          error ? (
            <p className='categories-error'>Error, please wait and try again in a few minutes</p>
          ) : !loading && data.length === 0 ? (
            <p className='categories-error'>No courses found, try again</p>
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
                    <div className='categories__wrapCourses'>
                      {renderSliderComponent(data.slice(8, data.length))}
                    </div>
                  ) : null
                }
                {
                  data.length < 8 ? (
                    <div className='categories__wrapCourses'>
                      {renderSliderComponent(data)}
                    </div>  
                  ) : null
                }
                <div className='categories-loading' style={{display: loading ? 'flex' : 'none'}}>
                  <Image src={ImgLoading} alt='loading' />
                </div>
              </div>
              <div className='categories__pug'>
                {
                  pages.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className={i === activePage ? 'categories__pug-item courses_categories-active' : 
                        'categories__pug-item'}
                        onClick={() => onPageClick(item)}>
                        {item}
                      </div>
                    )
                  })
                }
              </div>
            </>
          )
        }
      </div>
    </React.Fragment>
  )
}

const renderSliderComponent = (data: any) => {
  return (
    <>
      {
        data.map((item: any, i: any) => {
          return (
            <CourseItem data={item} key={item._id} />
          )
        })
      }
    </>
  )
}

export const CourseItem = ({data}: {data: {name: string; _id: string}}) => {
  return (
    <div className="categories__course" key={data._id}>
      <div className='categories__course-content'>
        <p>{data.name}</p>
        <Link href={{pathname: `/courses/${data._id}`}} passHref>
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
      </div>
    </div>
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
    <div className="categories__slider">
      <div className="categories__slider-left" onClick={() => sliderGoPrev()}>
        <Image src={Arrow} alt='arrow' />
      </div>
      <Slider className='courses_slider' arrows={false} ref={sliderFunc}>
        <div className="categories__course-wrap">
          {renderSliderComponent(data.slice(initial, from))}
        </div>
        <div className="categories__course-wrap">
        {renderSliderComponent(data.slice(from, to))}
        </div>
      </Slider>
      <div className='categories__slider-right' onClick={() => sliderGoNext()}>
        <Image src={Arrow} alt='arrow' />
      </div>
    </div>
  )
}