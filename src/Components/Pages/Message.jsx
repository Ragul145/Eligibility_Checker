import React, { useContext } from "react";
import {
  MessageContainer,
  MessageText,
  SubsidyResult,
  TickImg,
} from "../../Styles/message";
import { Typography } from "@mui/material";
import { AppContext } from "../Root";
import { messageData } from "../../Constant/message";
import Tick from "/src/assets/tick.png"

function Message() {
  const { userDetail, selectedResult } = useContext(AppContext);

  console.log("selectedResult", selectedResult);

  return (
    <MessageContainer>
      <TickImg src={Tick} alt=""/>
      <Typography fontSize={"30px"} fontWeight={700}>
        Thank You {userDetail?.name}!
      </Typography>
      <SubsidyResult>
        {Object.keys(selectedResult || {}).map((selected, index) =>
          selectedResult?.[selected] ? (
            <MessageText key={index}>
              {messageData?.[selected] || "Message not found"}
            </MessageText>
          ) : null
        )}
      </SubsidyResult>
      <MessageText>
        Thank you for your submission! We are processing your eligibility
        details.
      </MessageText>
      <MessageText>
        You will receive a confirmation shortly. If you have any questions, feel
        free to contact us.
      </MessageText>
    </MessageContainer>
  );
}

export default Message;
