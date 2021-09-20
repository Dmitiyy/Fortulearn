import Image from 'next/image'
import Link from 'next/link'
import { FooterBlock, FooterContainer } from "../../styles/HomeStyledModules/HomeFooter.module"
import Logo from '../../images/logoFooter.png'

export interface IFooter {
  about: string;
  you: string;
  questions: string;
}

export const Footer = ({about, you, questions}: IFooter) => {
  return (
    <FooterBlock>
      <FooterContainer>
        <div>
          <Image src={Logo} alt='logo_footer' />
        </div>
        <ul>
          <li>Blocks:</li>
          <Link href={about} passHref><li>About the project</li></Link>
          <Link href={you} passHref><li>Who are you?</li></Link>
          <Link href={questions} passHref><li>Questions</li></Link>
        </ul>
        <ul>
          <li>Pages:</li>
          <li>Rules</li>
          <li>Courses</li>
          <li>Authors</li>
        </ul>
        <ul>
          <li>Instagram:</li>
          <li>@fortulearn</li>
          <li>@daptellum.dev</li>
        </ul> 
      </FooterContainer>
    </FooterBlock>
  )
}