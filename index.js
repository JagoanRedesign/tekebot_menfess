const TelegramBot = require('node-telegram-bot-api');
const token = '5937294943:AAF__32hQvheNIGI8D3MiTr30HNhXm56oF8';
const chatChannelId = -1001890986845
const chatGroupId = -1001827804756
const ownerId = 5166575484
const bot = new TelegramBot(token, { polling: true });
//BOT
bot.on('message', (msg) => {

    const user = msg.chat.id;



    // bot.sendMessage(user, "Selamat Datang di Menfess Bot RPRL", {
    //     "reply_markup": {
    //         "keyboard": [["From","To"],["Message"]]
    //         }
    //     });


    // const main = "From"
    // if (msg.text.toString().indexOf(main) === 0)  {
    //     bot.sendMessage(user, resp,{
    //         "reply_markup": {
    //             "keyboard": [["To"]]
    //             }
    //     })

    // }
    // const dose = "To"
    // if (msg.text.toString().indexOf(dose) === 0)  {
    //     bot.sendMessage(user, "Type your nickname",{
    //         "reply_markup": {
    //             "keyboard": [["Message"]]
    //             }
    //     })
    // }
    // const station = "Message"
    // if (msg.text.toString().indexOf(station) === 0)  {
    //     bot.sendMessage(user, "Thanks For send your menfess",{
    //         "reply_markup": {
    //             "keyboard": [["From"]]
    //             }
    //     })
    // }


});

bot.onText(/\/start/, (msg) => {
    const user = msg.chat.id;
    bot.sendMessage(user, "/from + nama dia, /to + nama kamu, /pesan + pesan kamu. satu satu secara berurut yah, jangan pake (+)")

});

let from
let to
let pesan
let arr = []
let kirim
bot.onText(/\/from(.+)/, (msg, match) => {

    try {
        
        const user = msg.chat.id;
        from = match[1];
        if (arr.find(element => element.user == user)) {
            idx = arr.findIndex(element => element.user == user);
            arr[idx].user = user
            arr[idx].from = from
        }
        else {
            arr.push({
                user: user,
                from: from,
                username: msg.chat.username,
                first_name : msg.chat.first_name,
                last_name : msg.chat.last_name,
                to: ".",
                message: "."
            })
        }

        console.log(arr);
        console.log(msg);
    } catch (error) {
        console.log(error);
    }


});

bot.onText(/\/to(.+)/, (msg, match) => {

    try {
        const user = msg.chat.id;
        to = match[1];
        idx = arr.findIndex(element => element.user == user);
        console.log(idx);
        // for(let i; i < arr.length(); i ++){

        if (arr.find(element => element.user == user)) {
            arr[idx].to = to
        }

        console.log(arr);
        // }
    } catch (error) {
        console.log(error);
    }


});

bot.onText(/\/pesan(.+)/, (msg, match) => {


    try {
        const user = msg.chat.id;
        pesan = match[1];
        idx = arr.findIndex(element => element.user == user);
        console.log(idx);
        // for(let i; i < arr.length(); i ++){

        if (arr.find(element => element.user == user)) {
            arr[idx].message = pesan
        }
        kirim = "From : " + arr[idx].from + "\n" + "To : " + arr[idx].to + "\n" + "Pesan : " + arr[idx].message
        report = "From : " + arr[idx].from + ", " + arr[idx].first_name +  ", " + arr[idx].username +  "\n" + "To : " + arr[idx].to + "\n" + "Pesan : " + arr[idx].message
        console.log(arr[idx]);
        bot.sendMessage(chatChannelId, kirim)
        bot.sendMessage(chatGroupId, kirim)
        bot.sendMessage(ownerId, report)
        // }
    } catch (error) {
        console.log(error);
    }
});


bot.onText(/\/info(.+)/, (msg, match) => {


    try {
        const user = msg.chat.id;
        pesan = match[1];
        idx = arr.findIndex(element => element.user == user);
        console.log(idx);
        // for(let i; i < arr.length(); i ++){

        if (arr.find(element => element.user == user)) {
            arr[idx].message = pesan
        }
        let x = bot.getChat('@MenfessAlpice_bot')
        bot.sendMessage(ownerId, x)

        // }
    } catch (error) {
        console.log(error);
    }
});
