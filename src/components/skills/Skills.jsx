import {
  BodyContent,
  HeadingColor,
  ParagraphColor,
  SkillComponent,
  IconDiv,
} from "../const";
import {
  DiDart,
  DiReact,
  DiWordpress,
  DiPhotoshop,
  DiPython,
  DiIllustrator,
  DiMongodb,
  DiPhp,
} from "react-icons/di";

import { SiAdobeaftereffects } from "react-icons/si";

export default function Skills() {
  return (
    <div className="flex flex-col mx-auto w-full lg:w-3/4 items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <BodyContent className="body-content w-3/4 lg:w-full flex flex-col items-center lg:items-start shadow m-auto">
          <HeadingColor className="font-extrabold tracking-wider">
            skill
          </HeadingColor>
          <ParagraphColor className="paragraph-body w-4/6 my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </ParagraphColor>
        </BodyContent>
        <BodyContent className="body-content w-3/4 lg:w-full m-auto grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 items-center bg-transparent">
          <IconDiv>
            <DiDart className="m-auto w-16 h-16" />
          </IconDiv>
          <IconDiv>
            <DiReact className="m-auto w-16 h-16" />
          </IconDiv>
          <IconDiv>
            <DiWordpress className="m-auto w-16 h-16 " />
          </IconDiv>
          <IconDiv>
            <DiPhotoshop className="m-auto w-16 h-16" />
          </IconDiv>
          <IconDiv>
            <DiIllustrator className="m-auto w-16 h-16 " />
          </IconDiv>
          <IconDiv>
            <DiPython className="m-auto w-16 h-16 " />
          </IconDiv>
          <IconDiv>
            <SiAdobeaftereffects className="m-auto w-16 h-16 " />
          </IconDiv>
          <IconDiv>
            <DiMongodb className="m-auto w-16 h-16 " />
          </IconDiv>
          <IconDiv>
            <DiPhp className="m-auto w-16 h-16" />
          </IconDiv>
        </BodyContent>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-4 w-3/4 lg:w-full justify-items-center">
        <SkillComponent
          skillTitle="web development"
          skillName1="html & css"
          skillName2="nodeJS & mongoDB"
          skillName3="react"
          progress1={100}
          progress2={40}
          progress3={75}
        />
        <SkillComponent
          skillTitle="mobile development"
          skillName1="flutter"
          skillName2="react native"
          progress1={60}
          progress2={80}
          progress3={0}
        />
        <SkillComponent
          skillTitle="programming"
          skillName1="java"
          skillName2="python"
          skillName3="c++"
          progress1={60}
          progress2={100}
          progress3={80}
        />
        <SkillComponent
          skillTitle="design and editing"
          skillName1="photoshop"
          skillName2="illustrator"
          skillName3="aftereffect"
          progress1={60}
          progress2={80}
          progress3={35}
        />{" "}
      </div>
    </div>
  );
}
