import {
  BodyContent,
  HeadingColor,
  ParagraphColor,
  SkillComponent,
} from "../const";

export default function Skills() {
  return (
    <div className="flex flex-col my-10 items-center">
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
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-3/4 lg:w-full">
        <SkillComponent
          skillTitle="develop"
          skillName1="web"
          skillName2="flutter"
          skillName3="react"
          progress1={100}
          progress2={40}
          progress3={75}
        />
        <SkillComponent
          skillTitle="design and editing"
          skillName1="photoshop"
          skillName2="illustrator"
          skillName3="aftereffect"
          progress1={60}
          progress2={80}
          progress3={35}
        />
      </div>
    </div>
  );
}
