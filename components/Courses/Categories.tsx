import { 
  CategoriesBlock, 
  CategoriesBlockTitle, 
  CategoriesWrap
} from "../../styles/CoursesStyledModules/CoursesCategories.module";
import SearchPhoto from '../../images/search_courses.png';
import Image from "next/image";
import { categoriesData } from "./coursesDb";
import { useState } from "react";

export const Categories = () => {
  const [active, setActive] = useState<number>(0);

  const trigger = (elem: number): void => {setActive(elem)};

  return (
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
    </CategoriesBlock>
  )
}