import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { Link } from "react-router-dom";


// core components
import Header from "components/Header/Header.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/vedant1.jpg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import blackcloth from "assets/img/blackcloth.jpg";
const useStyles = makeStyles(styles);
import Footer from "components/Footer/Footer";
export default function Working(props) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div style={{ backgroundColor: "black", padding:"20px"}}>
      <Header
        color="transparent"
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/backround/i13.png").default}
      />
     <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Vedant Kokate</h3>
                    <h6 style={{ color: "white" }}>
                      Competitive Programer | Python
                    </h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            

            <GridContainer
              justify="center"
              algin="center"
              style={{ margin: "10px auto 10px auto" }}
            >
              <h1 style={{color:"yellow"}}>Page has not been completed Yet</h1>

            </GridContainer>
          </div>
        </div>
      </div>
      
    </div>
  );
}
const useStyles2 = makeStyles({
  card: {
    backgroundColor: "#f44336",
    //  minHeight:345,
  },
});
// const primaryColor = "#9c27b0";
// const warningColor = "#ff9800";
// const dangerColor = "#f44336";
// const successColor = "#4caf50";
// const infoColor = "#00acc1";
// const roseColor = "#e91e63";
// const grayColor = "#999999";
