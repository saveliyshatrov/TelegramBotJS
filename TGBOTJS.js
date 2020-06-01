const TelegramBot = require("node-telegram-bot-api");
const token = 'TOKEN_HERE';
const bot = new TelegramBot(token, {polling: true});


function CreateKeyboard(ArrayOfButtons){
    return {
        "reply_markup":{
        "keyboard": ArrayOfButtons}
    }
}

Main_Keyboard = CreateKeyboard([
    ["Быстрое решение"],
    ["Тарифы"],
    ["О нас", "Help"],
    ["Закрыть"]
])

Fast_decision = CreateKeyboard([
    ['Физика'],
    ['Будет скоро'],
    ['Будет скоро'],
    ['В главное меню']
])

Help = CreateKeyboard([
    ['Популярный вопрос 1'],
    ['Популярный вопрос 2'],
    ['Популярный вопрос 3'],
    ['В главное меню']
])

Tarifs = CreateKeyboard([
    ['Тариф 1'],
    ['Тариф 2'],
    ['Тариф 3'],
    ['В главное меню']
])

bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];
    bot.sendMessage(chatId, 'Привет', Main_Keyboard);
});

bot.on('message', (msg) => {
    const chatID = msg.chat.id;
    if(msg.text === 'Быстрое решение'){
        bot.sendMessage(chatID, 'Выбери тариф', Fast_decision)
    }
    if(msg.text === 'В главное меню'){
        bot.sendMessage(chatID, '⬅', Main_Keyboard)
    }
    if(msg.text === 'Тарифы'){
        bot.sendMessage(chatID, 'Наши тарифы', Tarifs)
    }
    if(msg.text === 'Help'){
        bot.sendMessage(chatID, 'Раздел помощи', Help)
    }
});
