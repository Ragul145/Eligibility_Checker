import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const ProfileIcon = styled (AccountCircleIcon)({
height: "45px",
width: "45px",
borderRadius: "50%",
cursor :"pointer",
});

export const NavContainer = styled (Box) ({
display: "flex",
justifyContent: "space-between",
alignItems: "center",   
backgroundColor: "#112d4e",
color: "#fff",
padding: "8px",
});

export const NavProfile = styled (Box)({
display: "flex",
gap: "20px",
alignItems: "center",
});