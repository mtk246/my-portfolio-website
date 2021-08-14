import {
  BodyContent,
  HeadingColor,
  ParagraphColor,
  ButtonBackground,
} from "../const";

function Button(props) {
  return (
    <ButtonBackground className="flex-initial p-3 mx-2 rounded-lg shadow font-bold tracking-widest cursor-pointer">
      {props.name}
    </ButtonBackground>
  );
}

export default function AboutMe() {
  return (
    <BodyContent className="body-content w-3/4 flex flex-col items-center lg:items-start justify-around shadow mx-auto my-12">
      <img
        src="https://www.wallpapertip.com/wmimgs/200-2009039_mountain-wallpaper-1920x1080.jpg"
        id="profileId"
        className="shadow rounded-full w-40 h-40 lg:w-60 lg:h-60 lg:ml-0 mb-3 lg:absolute lg:left-2/3"
        alt=""
      />
      <HeadingColor className="font-extrabold tracking-wider">
        about me
      </HeadingColor>
      <ParagraphColor className="paragraph-body w-4/6 my-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </ParagraphColor>
      <div className="flex mt-4">
        <Button name="Contact me" />
        <Button name="View my CV" />
      </div>
    </BodyContent>
  );
}
