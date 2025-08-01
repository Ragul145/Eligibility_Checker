import { styled, Box, Typography, Button } from "@mui/material";


export const EligibilityContainer = styled (Box)({
display: "flex",
gap: "20px",
flexWrap: "Wrap",
justifyContent: "center",
padding: "10px",
});

export const EligibilityGrid = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  padding: "20px",
});


export const EligibilityCard = styled (Box)({
backgroundColor: "#fff",
boxShadow:
"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
borderRadius: "8px",
marginTop: "5px",
padding: "10px",
display: "flex",
flexDirection: "column",
gap: "5px",
width: "450px",
cursor: "pointer",
});

export const EligibilityImage = styled("img")({
height: "100px",
width: "100px",
borderRadius: "50%",
});

export const EligibilityLabel = styled (Typography) ({
fontSize: "16px",
fontWeight: 600,
"& span": {
fontSize: "18px",
fontWeight: "bold",
}
});

export const CardWrapper = styled (Box)({
display: "flex",
gap: "10px",
alignItems: "center",
fontSize: "18px",
fontWeight: 600,
});

export const EligibilityTitle = styled (Typography)({
textAlign: "center",
marginTop: "10px",
fontSize: "20px",
fontWeight: "bold",
});

export const AcceptButton = styled (Button) ({
padding: "10px",
borderRadius: "5px",
fontSize: "1rem",
cursor: "pointer",
minwidth: "90px",
color: "#FFF",
backgroundColor: "#14bc7d",

marginTop: "10px",
"&:hover": {
backgroundColor: "#0fa869"
},
});

export const Buttonwrap = styled (Box)({
display: "flex",
justifyContent: "center",
});