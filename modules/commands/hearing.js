module.exports.config = {
	name: "hearing",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "Give love",
	commandCategory: "love",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = global.nodemodule["axios"];
const res = await axios.get(`http://le31.glitch.me/poem`);
var thinh = res.data.data;
return api.sendMessage(` ${thinh} `, event.threadID, event.messageID)
                       }