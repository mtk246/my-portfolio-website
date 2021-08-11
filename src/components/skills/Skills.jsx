import { BodyContent, HeadingColor, ParagraphColor } from "../const";

function SkillComponent(props) {
  const style1 = { width: props.progress1 + "%" };
  const style2 = { width: props.progress2 + "%" };
  const style3 = { width: props.progress3 + "%" };

  function SkillBarDiv() {
    return (
      <div className="flex flex-col w-4/6 flex-1">
        <div className="relative w-full rounded m-auto flex flex-row items-center px-8">
          <div
            className="absolute top-0 h-4 rounded shim-red"
            style={style1}
          ></div>
        </div>
        <div className="relative w-full rounded m-auto flex flex-row items-center px-8">
          <div
            className="absolute top-0 h-4 rounded shim-blue"
            style={style2}
          ></div>
        </div>
        <div class="relative w-full rounded m-auto flex flex-row items-center px-8">
          <div
            className="absolute top-0 h-4 rounded shim-green"
            style={style3}
          ></div>
        </div>
      </div>
    );
  }
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
      <SkillBarDiv />
    </BodyContent>
  );
}

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
          skillTitle="development"
          skillName1="web"
          progress1={75}
          progress2={50}
          progress3={66}
        />
        <SkillComponent
          skillTitle="development"
          skillName1="web"
          progress1={75}
          progress2={50}
          progress3={66}
        />
      </div>
    </div>
  );
}
