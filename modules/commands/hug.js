const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "hug",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hungcatmoi",
  description: "hug the user tagged",
  commandCategory: "general",
  usages: "hug [Tag someone you need to hug]",
  cooldowns: 5,
};


module.exports.run = async ({ api, event, args }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
    var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join("")) return out("Please tag someone");
  else
  return axios.get('https://apiservice1.kisara.app/satou/api/endpoint/hug').then(res => {
        let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
        var mention = Object.keys(event.mentions)[0];
                  let tag = event.mentions[mention].replace("@", "");    
        
 let callback = function () {
            api.setMessageReaction("✅", event.messageID, (err) => {}, true);
        api.sendMessage({
						        body: "ヽ(`д´；)/𝙞 𝙬𝙞𝙡𝙡 𝙝𝙪𝙜 𝙮𝙤𝙪 𝙩𝙞𝙜𝙝𝙩𝙡𝙮 ♥*♡∞:｡.｡𝙈𝙮 𝘽𝙖𝙗𝙮 " + tag + "☺️\n\n𝙄 𝙣𝙚𝙚𝙙 𝙮𝙤𝙪𝙧 𝙝𝙪𝙜 𝙖𝙡𝙬𝙖𝙮𝙨 ♥⁠╣⁠[⁠-⁠_⁠-⁠]⁠╠⁠♥𝙄 𝙣𝙚𝙚𝙙 𝙖 𝙝𝙪𝙜 𝙣𝙤 𝙣𝙤 𝙞 𝙣𝙚𝙚𝙙 𝙮𝙤𝙪𝙧 𝙝𝙪𝙜😍",
                                          mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
						attachment: fs.createReadStream(__dirname + `/cache/hug.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/hug.${ext}`), event.messageID)
				};
 //   }
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/hug.${ext}`)).on("close", callback);
			})
    .catch(err => {
                     api.sendMessage("Failed to generate gif, be sure that you've tag someone!", event.threadID, event.messageID);
    api.setMessageReaction("☹️", event.messageID, (err) => {}, true);
                  })     
}
