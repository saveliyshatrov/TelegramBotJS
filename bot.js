const TelegramBot = require("node-telegram-bot-api");
const token = "1132412619:AAFk-IMvCm3aZsf-sS_Q4etm3Hcz-f0_E-A";
const bot = new TelegramBot(token, { polling: true });

MyID = 133907668;
function print(string) {
  console.log(string);
}

function CreatePayment() {
  this.WhatSubject = "";
  this.UniqID = "";
  this.SetUniqID = function (ID) {
    this.UniqID = ID;
  };
  this.SetSubject = function (Subject) {
    this.WhatSubject = Subject;
  };
}

function CreateKeyboard(ArrayOfButtons) {
  return {
    reply_markup: {
      keyboard: ArrayOfButtons,
    },
  };
}

Main_Keyboard = CreateKeyboard([
  ["Быстрое решение"],
  ["Тарифы"],
  ["О нас", "Помощь"],
  ["Остановить"],
]);

Fast_decision = CreateKeyboard([
  ["Физика"],
  ["Будет скоро"],
  ["Будет скоро"],
  ["В главное меню"],
]);

Help = CreateKeyboard([
  ["Популярный вопрос 1"],
  ["Популярный вопрос 2"],
  ["Популярный вопрос 3"],
  ["В главное меню"],
]);

Tarifs = CreateKeyboard([
  ["Тариф 1"],
  ["Тариф 2"],
  ["Тариф 3"],
  ["В главное меню"],
]);

bot.onText(/\/start/, (msg, match) => {
  const chatID = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatID, "Привет", Main_Keyboard);
  bot.sendSticker(
    chatID,
    "CAACAgIAAxkBAAILll7UvBAsSNOfQDWLZomq6FbnzS2FAALyYwAC4KOCB88qtIZlszgPGQQ"
  );
});

bot.on("message", (msg) => {
  const chatID = msg.chat.id;
  if (msg.text === "Быстрое решение") {
    bot.sendMessage(chatID, "Выбери тариф", Fast_decision);
  }
  if (msg.text === "В главное меню") {
    bot.sendSticker(
      chatID,
      "CAACAgIAAxkBAAILnl7UvpuCz826mAagdcOaOYgD_Xt1AALgYwAC4KOCBzwPfZEa5MSiGQQ",
      Main_Keyboard
    );
  }
  if (msg.text === "Тарифы") {
    bot.sendSticker(
      chatID,
      "CAACAgIAAxkBAAILnF7UvpEZvPBv9GRc4bdjSYV6JSMYAAL3YwAC4KOCB0iu7_XirKezGQQ",
      Tarifs
    );
  }
  if (msg.text === "Помощь") {
    //bot.sendMessage(chatID, "Раздел помощи", Help);
    bot.sendSticker(
      chatID,
      "CAACAgIAAxkBAAILml7UvWVYKHlD7frbDVzXG2nY8eEVAALqYwAC4KOCB_b9KV18ScB1GQQ",
      Help
    );
  }
  if (msg.text === "Остановить") {
    //bot.sendMessage(chatID, "Раздел помощи", Help);
    bot.sendSticker(
      chatID,
      "CAACAgIAAxkBAAILpF7UwX7a-BseXdN-tAgKgcSEasiLAALtYwAC4KOCB2fPerpEOi0aGQQ"
    );
  }
});
