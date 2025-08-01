import React, { useContext, useEffect, useState } from "react";
import {
  AcceptButton,
  Buttonwrap,
  CardWrapper,
  EligibilityCard,
  EligibilityContainer,
  EligibilityGrid,
  EligibilityImage,
  EligibilityLabel,
  EligibilityTitle,
} from "../../Styles/eligibility";
import { Box } from "@mui/material";
import { AppContext } from "../Root";
import { subsidyData } from "../../Constant/eligibility";
import CustomCheckedFields from "../Shared/CustomCheckedFields";
import { useNavigate } from "react-router-dom";
import { routePath } from "../../Routes/routePath";

import marriage from "/src/assets/marriage.jpg"
import foodImage from '/src/assets/foodImage.jpg'
import touristImage from '/src/assets/touristImage.jpg'
import education from '/src/assets/education.jpg'

function Eligibility() {
  const [subsidyEligibility , setSubsudyEligibility] = useState(subsidyData)

  const [subsidyResult , setSubsidyResult] = useState(subsidyData)

  const {userDetail, setSelectedResult} = useContext(AppContext);

  const isSelected = Object.values(subsidyResult).some((val)=> val);

  const navigate = useNavigate()

  const checkEligibility = (subsidyType) =>{
    const {age,gender,income,location}= userDetail||{};

    switch(subsidyType){
      case "marriage":
        return(
          (gender ==="male" && age>=21) || (gender ==="female" && age>=18)
        );

        case "food":
          return(
            (income < 200000)
          );

          case "education":
          return(
            (gender ==="male" && income < 500000) ||
            (gender ==="female" && income <700000)
          );

          case "travel":
            return(
              (location === "city" && income <400000)||
              (location === "non-city" && income ,700000)
            );

            default:
              return false
    }
  };

  const handleSubmit = ()=>{
    setSelectedResult(subsidyResult);
    navigate(routePath.message);
  }

  const handleCheckBox = (checked,type) =>{
    setSubsidyResult((prev)=>({
      ...prev,
      [type]:checked,
    }));
  };

  useEffect(()=>{
    Object.keys(subsidyData).map((data)=>{
      setSubsudyEligibility((prevState)=>({
        ...prevState,
        [data]: checkEligibility(data),
      }));
    });
  },[]);
  return (
    <Box >
      <EligibilityTitle> Subsidy Eligibility Result</EligibilityTitle>
      <EligibilityGrid>
         <EligibilityContainer>
        <EligibilityCard>
          <CardWrapper>
            <EligibilityImage src={marriage} alt=""/>
            <Box >Marriage Subsidy</Box>
          </CardWrapper>
          <EligibilityLabel>
            <span>Marriage:</span>
            {subsidyEligibility?.marriage ?"Yes":"No"}
          </EligibilityLabel>
          <EligibilityLabel>
            <span >Criteria:</span> for Men Age Should Be Greater Than 21 And For
            Women Age Should Be Greater Than 18
          </EligibilityLabel>
          {subsidyEligibility?.marriage && (
            <CustomCheckedFields label="Accept Marriage Subsidy"
            value={subsidyResult?.marriage}
            handleChange={(event)=>{
              handleCheckBox(event?.target?.checked,"marriage")
            }}/>
          )}
        </EligibilityCard>
      </EligibilityContainer>

      <EligibilityContainer>
        <EligibilityCard>
          <CardWrapper>
            <EligibilityImage src={foodImage} alt=""/>
            <Box >Food Subsidy</Box>
          </CardWrapper>
          <EligibilityLabel>
                <span>Food:</span>
                {subsidyEligibility?.food ?"Yes":"No"}
          </EligibilityLabel>
          <EligibilityLabel>
            <span >Criteria:</span> Annual Income Should Be Less Than 2000000
          </EligibilityLabel>
          {subsidyEligibility?.food && (
            <CustomCheckedFields label="Accept Food Subsidy"
            value={subsidyResult?.food}
            handleChange={(event)=>{
              handleCheckBox(event?.target?.checked,"food")
            }}/>
          )}
        </EligibilityCard>
      </EligibilityContainer>

      <EligibilityContainer>
        <EligibilityCard>
          <CardWrapper>
            <EligibilityImage src={education} alt=""/>
            <Box >Educational Loan Subsidy</Box>
          </CardWrapper>
          <EligibilityLabel>
            <span>Education:</span>
                {subsidyEligibility?.education ?"Yes":"No"}
          </EligibilityLabel>
          <EligibilityLabel>
            <span >Criteria:</span> Annual Income Should Be Less Than 700000 For Women And 500000 For Men 
          </EligibilityLabel>
          {subsidyEligibility?.education && (
            <CustomCheckedFields label="Accept Education Subsidy"
            value={subsidyResult?.education}
            handleChange={(event)=>{
              handleCheckBox(event?.target?.checked,"education")
            }}/>
          )}
        </EligibilityCard>
      </EligibilityContainer>

      <EligibilityContainer>
        <EligibilityCard>
          <CardWrapper>
            <EligibilityImage src={touristImage} alt=""/>
            <Box >Travel Subsidy</Box>
          </CardWrapper>
          <EligibilityLabel>
            <span>Traval:</span>
                {subsidyEligibility?.travel ?"Yes":"No"}
          </EligibilityLabel>
          <EligibilityLabel>
            <span >Criteria:</span> For Non City Peopel Annual Income Should Be Less than 600000 and 400000 for City People
          </EligibilityLabel>
          {subsidyEligibility?.travel && (
            <CustomCheckedFields label="Accept Travel Subsidy"
            value={subsidyResult?.travel}
            handleChange={(event)=>{
              handleCheckBox(event?.target?.checked,"travel")
            }}/>
          )}
        </EligibilityCard>
      </EligibilityContainer>
      </EligibilityGrid>
      <Buttonwrap>
        {isSelected ?(
            <AcceptButton onClick={handleSubmit}>Submit</AcceptButton>
         ): (
            <AcceptButton onClick={()=> navigate(routePath.home)}>Back</AcceptButton>

         )}
      </Buttonwrap>
    </Box>
  );
}

export default Eligibility;
