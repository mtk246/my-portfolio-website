import { BodyContent, HeadingColor, ParagraphColor } from "../const";

export default function Skills() {
  return (
    <div className="flex flex-col lg:flex-row my-10 items-center">
      <BodyContent className="body-content flex flex-col shadow">
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
      <BodyContent className="body-content flex flex-row shadow m-3">
        <div className="px-12 bg-red-400 m-auto">
          <h1 className="text-black">Hello World</h1>
        </div>
        <div className="flex flex-col w-4/6 bg-yellow-400">
          <div class="relative w-full bg-gray-200 rounded m-auto flex flex-row items-center px-8">
            <h1 className="px-5">Hello</h1>
            <div className="absolute top-0 h-4 rounded shim-green w-4/12"></div>
          </div>

          <div className="relative w-full bg-gray-200 rounded m-auto flex flex-row items-center px-8">
            <h1 className="px-5">Hello</h1>
            <div className="absolute top-0 h-4 rounded shim-blue w-3/6"></div>
          </div>

          <div class="relative w-full bg-gray-200 rounded m-auto flex flex-row items-center px-8">
            <h1 className="px-5">Hello</h1>
            <div class="absolute top-0 h-4 rounded shim-red w-full"></div>
          </div>
        </div>
      </BodyContent>
    </div>
  );
}
