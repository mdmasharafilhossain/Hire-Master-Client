import { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const CHATBOT_THEME = {
    background: "#FFFEFC",
    fontFamily: "Roboto",
    headerBgColor: "#ff6445",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "black",
    botFontColor: "#fff",
    userBubbleColor: "#ff6445",
    userFontColor: "#fff",
    height: '200px'
};

const ChatBotHelper = () => {
    const [steps, setSteps] = useState([
        {
            id: '1',
            message: 'Hello! Welcome to HireMaster. Do you want to know about HireMaster?',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 'yes', label: 'Yes', trigger: '3' },
              { value: 'no', label: 'No', trigger: '6' },
            ],
          },
          {
            id: '3',
            message: "HireMaster is a JobSite like VanHack.",
            trigger: '4',
          },
          {
            id: '4',
            message: 'Do you want to learn about our services?',
            trigger: '5',
          },
          {
            id: '5',
            options: [
              { value: 'yes', label: 'Yes', trigger: '7' },
              { value: 'no', label: 'No', trigger: '8' },
            ],
          },
          {
            id: '6',
            message: 'Okay, no problem. How can I assist you with something else?',
            end: true,
          },
          {
            id: '7',
            message: 'We provide free and premium services.',
            trigger: '8',
          },
          {
            id: '8',
            message: 'Is there anything else you would like to know or inquire about?',
            trigger: '9',
          },
          {
            id: '9',
            options: [
              { value: 'yes', label: 'Yes', trigger: '2' },
              { value: 'no', label: 'No', trigger: '6' },
            ],
          },
      ]);
      
    return (
        <>
            <ThemeProvider theme={CHATBOT_THEME}>
                <ChatBot headerTitle="HireMaster"
                    steps={steps} floating={true} />
            </ThemeProvider>
        </>
    );
};
export default ChatBotHelper;