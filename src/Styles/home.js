import { Button, styled } from "@mui/material";
import Grid from "@mui/material/Grid";


export const HomeContainer = styled(Grid)({
maxWidth: "410px",
margin: "80px auto",
padding: "20px",
boxShadow:
"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(11, 13, 14, 0.32) 0px 2px 16px 0px",
backgroundColor: "#ffffff",
borderRadius: "10px",
textAlign: "center",
gap: "15px",
});


export const EligibilityButton = styled (Button)({
padding: "10px",
borderRadius: "5px",
cursor: "pointer",
color: "#FFF",
backgroundColor: "#14bc7d",
});


export const AppHeader = styled("h3")({
marginBottom: "20px",
});