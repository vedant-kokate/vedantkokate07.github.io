import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
export default function Education(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <GridContainer
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
        justify="center"
      >
        <GridItem xs={11} sm={8} md={3}>
          <Card>
            <CardHeader color="custom">Engineering</CardHeader>
            <CardBody align="justify">
              I am currently in my last year of Bachelor of Information
              Technology with average CGPA for last 3 years at 8.17
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={11} sm={8} md={3}>
          <Card>
            <CardHeader color="custom">12th Standard</CardHeader>
            <CardBody align="justify">
            78 percentage in my 12th Board exams
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={11} sm={8} md={3}>
          <Card>
            <CardHeader color="custom">10th Standard</CardHeader>
            <CardBody align="justify">
            90 percentage in my 10th Board exams
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
