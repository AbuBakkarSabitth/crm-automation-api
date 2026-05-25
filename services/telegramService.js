const axios = require('axios');

const sendTelegramMessage = async (message) => {

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    try {
        await axios.post(url, {
            chat_id : chatId,
            text: message
        });
        console.log("Telegram notification sent");
    } catch (error) {
        console.log(error.message);
    }
};
module.exports = sendTelegramMessage;
