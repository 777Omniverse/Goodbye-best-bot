module.exports.config = {
  name: "luffy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kaiser",//nguồn :hungcho
  description: "random ảnh lù =))",
  commandCategory: "One-piece",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/A7gQjPr.jpg",
"https://i.imgur.com/2wLU1x3.jpg",
"https://i.imgur.com/NdS8S71.jpg",
"https://i.imgur.com/yX4oE7x.jpg",
"https://i.imgur.com/YzpAcVO.jpg",
"https://i.imgur.com/plRU0Zn.jpg",
"https://i.imgur.com/5o5pYBj.jpg",
"https://i.imgur.com/e9Tcb1T.jpg",
"https://i.imgur.com/AVrHqOM.jpg",
"https://i.imgur.com/xvtP2TE.jpg",
"https://i.imgur.com/T2zdmWJ.jpg",
"https://i.imgur.com/OwTSE3T.jpg",
"https://i.imgur.com/gUTSSpf.jpg",
"https://i.imgur.com/KZNvWpp.jpg",
"https://i.imgur.com/yRKKVx8.jpg",
"https://i.imgur.com/bgPJnCB.jpg",
"https://i.imgur.com/G3lUS1q.jpg",
"https://i.imgur.com/huHWk2T.jpg",
"https://i.imgur.com/l3XXodq.jpg",
"https://i.imgur.com/4O0zfNb.jpg",
"https://i.imgur.com/Q79ji3y.jpg",
"https://i.imgur.com/1FLqiq4.jpg",
"https://i.imgur.com/KYBrZbk.jpg"
    ];
     var callback = () => api.sendMessage({body:`Số ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };