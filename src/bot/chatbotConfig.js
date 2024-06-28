// src/chatbotConfig.js

import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
    botName: "RealEstateBot",
    initialMessages: [createChatBotMessage("Hi, how can I help you today?")],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#5ccc9d",
        },
    },
    state: {},
    widgets: [],
};

export default config;
