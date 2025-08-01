import React, { useContext, useState } from "react";
import { AppHeader, EligibilityButton, HomeContainer } from "../../Styles/home";
import { Grid } from "@mui/material";
import CustomTextFields from "../Shared/CustomTextFields";
import CustomRadioFields from "../Shared/CustomRadioFields";
import { errMessage, genderSeed, locationSeed } from "../../Constant/home";
import { AppContext } from "../Root";
import { useNavigate } from "react-router-dom";
import { routePath } from "../../Routes/routePath";

function Home() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [location, setLocatoin] = useState("City");
  const [income, setIncome] = useState("")
  const {setUserDetail} = useContext(AppContext)

  const navigate = useNavigate();

  const handleSubmit = ()=> {
    if(name === ""|| age === "" || income === ""){
      alert(errMessage);
      return;
    }
    setUserDetail({name,gender,age,location,income})
    navigate(routePath?.eligibility)
  }
  return (
    <>
      <HomeContainer container>
        <Grid size={12}>
          <AppHeader>Goverment Subsidy Eligibility Check</AppHeader>
        </Grid>

        <Grid size={12}>
          <CustomTextFields
            lable={"Enter Your Name"}
            type={"text"}
            value={name}
            handleChange={setName}
          />
        </Grid>

        <Grid size={12}>
          <CustomRadioFields lable={"Select Your Gender"} value={gender} handleChange={setGender} options={genderSeed}/>
        </Grid>

         <Grid size={12}>
          <CustomTextFields
            lable={"Enter Your Age"}
            type={"number"}
            value={age}
            handleChange={setAge}
          />
        </Grid>

        <Grid size={12}>
          <CustomRadioFields
            lable={"Select Your Location"}
            handleChange={setLocatoin}
            value={location}
            options={locationSeed}
          />
        </Grid>

        <Grid size={12}>
          <CustomTextFields
            lable={"Enter Your Income"}
            type={"number"}
            value={income}
            handleChange={setIncome}
          />
        </Grid>

        <Grid size={12}>
          <EligibilityButton onClick={handleSubmit}> Check Eligibility</EligibilityButton>
        </Grid>
      </HomeContainer>
    </>
  );
}

export default Home;
