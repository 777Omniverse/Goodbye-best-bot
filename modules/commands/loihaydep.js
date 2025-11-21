module.exports.config = {
    name: "loihayydep",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "Drasew",
    description: "Lời hay ý đẹp",
    commandCategory: "Kiến thức",
    cooldowns: 10
};

module.exports.run = function ({ api, event }) {
    const data = ["Tôi đã học được tìm kiếm hạnh phúc bằng cách giới hạn những ham muốn của mình, hơn là tìm cách thỏa mãn chúng.", "Nếu bạn muốn thành công trong thế giới này, hãy hứa hẹn mọi thứ, và chẳng trao gì đi.", "Lòng can đảm không phải là có sức lực để đi tiếp - đó là đi tiếp khi bạn không còn sức lực.", "Mục đích của tôn giáo là để ngăn cản kẻ nghèo không giết kẻ giàu.", "Trừ phi bạn giang rộng đôi cánh, bạn sẽ không biết mình bay được bao xa.", "Tình bạn có thể giống như các tài khoản ngân hàng. Khi bạn kiếm được tiền, bạn gửi vào tài khoản tiết kiệm, và khi bạn cần tiền, bạn rút tiền. Bạn càng tiết kiệm được nhiều, bạn càng có nhiều để giúp mình vượt qua được thời buổi khó khăn. Tương tự như vậy, khi bạn đối xử tốt với ai đó, bạn bổ sung cho tình bạn (gửi vào 'ngân hàng tin cậy' của mình), và khi bạn làm ai đó tổn thương, bạn dùng bớt tình bạn. Nếu một người bạn cứ mãi rút ra từ tài khoản tình bạn của bạn, người đó sẽ làm nó cạn kiệt theo thời gian.", "Hãy nhớ rằng nợ nần chỉ là một công cụ, giống như búa hoặc cưa. Nó có thể được sử dụng để giúp bạn xây dựng một tương lai tài chính vững mạnh, hoặc đẩy sụp tương lai ấy. Bạn là người quyết định mình muốn sử dụng nó như thế nào.", "Những người đáng sợ không phải là người bất đồng ý kiến với bạn, mà là người bất đồng ý kiến với bạn nhưng quá hèn nhát để cho bạn biết điều đó.", "Kẻ ngốc nói về quá khứ, người khôn nói về hiện tại, kẻ khờ nói về tương lai.", "Thà sống cuộc đời của riêng mình một cách không hoàn hảo còn hơn bắt chước cuộc đời của người khác một cách hoàn hảo.", "Luyện tập không cho bạn sự hoàn hảo.Luyện tập làm giảm sự không hoàn hảo"
    ];
    return api.sendMessage(`[Lời hay ý đẹp]: ${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
                  }