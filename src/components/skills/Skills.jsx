import styled from "styled-components";
import { BodyContent, HeadingColor, ParagraphColor } from "../const";

export default function Skills() {
  function SkillComponent(props) {
    return (
      <BodyContent className="body-content flex flex-row shadow my-3">
        <div className="px-12 bg-gray-200 rounded-lg p-4 m-auto flex flex-none w-1/3">
          <h1 className="text-black text-xl font-extrabold">
            {props.skillTitle}
          </h1>
        </div>
        <div className="ml-3">
          <h1 className="text-xl my-1">{props.skillName1}</h1>
          <h1 className="text-xl my-1">{props.skillName2}</h1>
          <h1 className="text-xl my-1">{props.skillName3}</h1>
        </div>
        <div className="flex flex-col w-4/6 flex-1">
          <div className="relative w-full rounded m-auto flex flex-row items-center px-8">
            <div className="absolute top-0 h-4 rounded shim-red w-9/12"></div>
          </div>
          <div className="relative w-full rounded m-auto flex flex-row items-center px-8">
            <div className="absolute top-0 h-4 rounded shim-blue w-1/2"></div>
          </div>
          <div class="relative w-full rounded m-auto flex flex-row items-center px-8">
            <div className="absolute top-0 h-4 rounded shim-green w-8/12"></div>
          </div>
        </div>
      </BodyContent>
    );
  }
  return (
    <div className="flex flex-col lg:flex-row my-10 items-center">
      <BodyContent className="body-content w-3/4 lg:w-1/2 flex-col shadow mx-4">
        <HeadingColor className="font-extrabold tracking-wider">
          skill
        </HeadingColor>
        <ParagraphColor className="paragraph-body w-4/6 my-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </ParagraphColor>
      </BodyContent>

      <div className="flex flex-col w-3/4 lg:w-1/2 m-0">
        <SkillComponent
          skillTitle="design and editing"
          skillName1="photoshop"
          skillName2="illustrator"
          skillName3="after effect"
        />
        <SkillComponent
          skillTitle="web"
          skillName1="front-end"
          skillName2="back-end"
          skillName3="mongodb"
        />
        <SkillComponent
          skillTitle="mobile app"
          skillName1="flutter"
          skillName2="react native"
          skillName3="example skill name"
        />
      </div>
    </div>
  );
}
