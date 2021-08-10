import { BodyContent, HeadingColor } from "../const";

export default function Skills() {
  return (
    <div className="flex flex-col lg:flex-row ">
      <BodyContent className="body-content flex-1 shadow ">
        <HeadingColor className="font-extrabold tracking-wider">
          skill
        </HeadingColor>
      </BodyContent>
      <BodyContent className="body-content flex shadow m-3"></BodyContent>
    </div>
  );
}
