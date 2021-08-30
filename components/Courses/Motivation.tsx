import { 
  MotivationBlock, 
  MotivationBlockContent, 
  MotivationContentAuthor, 
  MotivationContentMessage
} from "../../styles/CoursesStyledModules/CoursesMotivation.module";

export const Motivation = () => {
  return (
    <MotivationBlock>
    <MotivationBlockContent>
      <MotivationContentMessage>
        <p>
          Learning is not something that you get by chance. 
          And what you strive for with passion and do with diligence
        </p>
      </MotivationContentMessage>
      <MotivationContentAuthor>
        Abigail Adams
      </MotivationContentAuthor>
    </MotivationBlockContent>
  </MotivationBlock>
  )
}