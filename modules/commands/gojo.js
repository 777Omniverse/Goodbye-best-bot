module.exports.config = {
  name: "gojo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Drasew",
  description: "Ảnh gojo",
  commandCategory: "ramdom-images",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://api-gojo.badboyminh.repl.co/').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `Gojo's photo<3\nNumber of images available: ${count} image`,
            attachment: fs.createReadStream(__dirname + `/cache/1.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/1.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/1.${ext}`)).on("close", callback);
      })
              }