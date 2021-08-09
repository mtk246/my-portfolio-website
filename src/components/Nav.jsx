import React, { useState } from "react";
import { H1, ButtonDiv, CardBodyUl, NormalText } from "./const";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import CloseIcon from "@material-ui/icons/Close";

const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full flex justify-around font-semibold pt-8 absolute">
      <H1 className="font-extrabold font-sans">MTK</H1>
      <ButtonDiv className="md:hidden sm:flex w-12 h-12 rounded-full justify-end">
        <Button
          color="none"
          onClick={toggle}
          style={{ margin: 0, position: "absolute" }}
        >
          {!isOpen ? <MenuOutlinedIcon /> : <CloseIcon />}
        </Button>
        <Collapse isOpen={isOpen}>
          <Card
            style={{
              border: "none",
              backgroundColor: "transparent",
              marginTop: "2rem",
            }}
          >
            <CardBody>
              <CardBodyUl className="block text-lg float-right w-max px-14 py-5 rounded-xl">
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
};

export default Nav;
