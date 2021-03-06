const {generateGifs} = require('../../helper/gif.js');

module.exports = {
    name: 'info',
    aliases: ['botinfo'],
    execute(client, message) {
     
        message.channel.send({
            embed: {
                author: {name: 'Info',icon_url: client.user.avatarURL()},
                description: 'Ирээдүйд ганц хөгжим тоглуулдаг биш, олон төрлийн зорилгоор ашиглах ба гадаад болон дотоодын discord server дээр ашигладаг болгох нь Rim bot - ны зорилго байгаа шүү ✨',
                fields: [{
                    name: 'Удахгүй ирэх өөрчлөлт',
                    value: "`1.` Эхний ээлжид зарим нэг bug, prefix гэх мэтчилэн тохируулан ашигладаг болгох" + 
                    '\n \n' + "`2.` " + "Spotify болон SoundCloud дэмждэг болгох" + 
                    '\n \n' + "`3.` Music message send - ийг сайжруулах" + '\n \n' + " `4.`Өгөгдлийн сан нэмэх ба хэрэглэгч нь өөрийн гэсэн дууны playlist, одоо тоглож байгаа queue-г хадгалж авдаг болгох. Ингэснээр дараа, дахиж хүссэн цагтаа сонсдог болгох"
                    + '\n \n' +  '`5.` Twitch notify Дуртай streamer - ийнхаа live мэдэлгүй өнгөрөөвөл тэнэг биз дэ ¯\\_(ツ)_/¯. ' + '\n \n' +
                    "`6.` Олон улсын хэл дэмждэг болгох жишээ нь Монгол, Англи, Япон хэлнээс эхлээд явах байх. Мэдээж default хэл нь `Англи хэл`"
                 }],
                 image: {
                     url: generateGifs(1, 17),
                 },
                 timestamp: new Date(),
            }
        });
    }
}