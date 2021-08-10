import React, { useState } from "react";
import { H1, ButtonDiv, CardBodyUl, NormalText } from "./const";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { HiOutlineXCircle, HiOutlineMenu } from "react-icons/hi";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full flex justify-around font-semibold pt-8 absolute">
      <H1 className="font-extrabold font-sans">MTK</H1>
      <ButtonDiv className="md:hidden flex flex-col w-12 h-12 items-center">
        <Button color="none" onClick={toggle}>
          {!isOpen ? (
            <HiOutlineMenu className="w-6 h-6" />
          ) : (
            <HiOutlineXCircle className="w-6 h-6" />
          )}
        </Button>
        <Collapse isOpen={isOpen}>
          <Card
            style={{
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <CardBody>
              <CardBodyUl className=" text-lg float-right w-max px-14 py-5 rounded-xl">
                <NormalText>Home</NormalText>
                <NormalText>About</NormalText>
                <NormalText>Skills</NormalText>
                <NormalText>Work</NormalText>
                <NormalText>Contact</NormalText>
              </CardBodyUl>
            </CardBody>
          </Card>
        </Collapse>
      </ButtonDiv>
      <div className="list-navbar">
        <CardBodyUl className="flex text-lg bg-transparent">
          <NormalText>Home</NormalText>
          <NormalText>About</NormalText>
          <NormalText>Skills</NormalText>
          <NormalText>Work</NormalText>
          <NormalText>Contact</NormalText>
        </CardBodyUl>
      </div>
    </nav>
  );
}

export default Nav;
