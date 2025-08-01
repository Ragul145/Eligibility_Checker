import { styled, Box } from "@mui/material";
export const ProfileContainer = styled (Box)({
display: "flex",
justifyContent: "center",
marginTop: "80px",
});
export const Profilewrapper = styled (Box)({
borderRadius: "10px",
padding: "10px 20px",
minwidth: "400px",
boxShadow:
"Orgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
display: "flex",
flexDirection: "column",
backgroundColor:"#ffffff",
gap: "15px",
});
export const UserImage = styled("img")({
height: "200px",
width: "200px",
borderRadius: "50%",
cursor: "pointer",
alignSelf: "center",
})
export const ProfileChip = styled (Box)({
backgroundColor: "#9ea0a7",
color: "#FFF",
borderRadius: "10px",
padding: "8px",
minwidth: "100%",
});