import {
  BodyBackground,
  AboutMeBackground,
  HeadingColor,
  ParagraphColor,
  ButtonBackground,
} from "./const";

function Button(props) {
  return (
    <ButtonBackground className="flex-initial p-3 mx-2 rounded-lg shadow font-bold tracking-widest cursor-pointer">
      {props.name}
    </ButtonBackground>
  );
}

export default function BodyContent() {
  return (
    <BodyBackground className="w-full h-auto mx-auto py-10 md:py-16 px-10 md:px-16 flex flex-col lg:flex-row items-baseline lg:items-center">
      <img
        src="https://www.wallpapertip.com/wmimgs/200-2009039_mountain-wallpaper-1920x1080.jpg"
        className="shadow rounded-full w-40 h-40 lg:w-60 lg:h-60 ml-20 lg:ml-0 mb-3 lg:absolute lg:left-2/3"
        alt=""
      />

      <AboutMeBackground className="w-9/12 rounded-2xl flex flex-col justify-around px-10 py-10 shadow">
        <HeadingColor className="font-extrabold">about me</HeadingColor>
        <ParagraphColor className="paragraph-body w-4/6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </ParagraphColor>
        <div className="flex mt-4">
          <Button name="Contact me" />
          <Button name="View my CV" />
        </div>
      </AboutMeBackground>
    </BodyBackground>
  );
}
