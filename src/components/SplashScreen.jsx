import { HiOutlineLightBulb, HiOutlineMoon } from "react-icons/hi";
import Banner from "./banner/Banner";
import BodyWrapper from "./BodyWrapper";
import { Toggle } from "./const";

export default function Splash(props) {
  function changeTheme() {
    props.theme === "light" ? props.setTheme("dark") : props.setTheme("light");
  }
  const icon =
    props.theme === "light" ? (
      <HiOutlineMoon size={30} className="mx-auto" />
    ) : (
      <HiOutlineLightBulb size={30} className="mx-auto" />
    );

  return (
    <div>
      <div className="flex flex-col items-center">
        <Toggle
          onClick={changeTheme}
          className="fixed bottom-4 right-4 cursor-pointer h-14 w-14 rounded-full border-0 transition duration-200 ease-in"
        >
          {icon}
        </Toggle>
      </div>
      <Banner />
      <BodyWrapper />
    </div>
  );
}
