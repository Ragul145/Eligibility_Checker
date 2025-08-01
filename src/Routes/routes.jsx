import { Component } from "react";
import Home from "../Components/Pages/Home";
import { routePath } from "./routePath";
import Eligibility from "../Components/Pages/Eligibility";
import Message from "../Components/Pages/Message";
import Profile from "../Components/Pages/Profile";



export const routes = [
    {
        path : routePath.home,
        Component : Home,
    },

    {
        path : routePath.eligibility,
        Component : Eligibility,
    },

    {
        path : routePath.message,
        Component : Message,
    },

    {
        path : routePath.profile,
        Component : Profile
    }
]; 