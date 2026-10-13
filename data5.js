/* 生活場景故事：小美（台灣）和外國朋友 Amy 的日常。每章 3 個場景；每個場景：圖（emoji）、對話、今天就能說（英文|中文|逐字中文）。內容為原創。 */
(function(D){
const sc = (title, pic, lines, say) => ({title, pic, lines:lines.trim().split('\n').map(l=>l.split('|').map(x=>x.trim())), say:say.trim().split('\n').map(l=>{ const a=l.split('|').map(x=>x.trim()); return {en:a[0], zh:a[1], g:a[2].split('/')}; })});
D.story = [
 {t:'在家', icon:'🏠', scenes:[
  sc('Amy 來小美家玩','🏠🐱👧👱‍♀️',`Amy|Hi, Mei!|嗨，小美！
小美|Hi, Amy! Come in.|嗨，Amy！進來吧。
Amy|Is this your cat?|這是你的貓嗎？
小美|Yes! This is my cat.|對！這是我的貓。`,`Come in.|進來吧。|進來/裡面
This is my cat.|這是我的貓。|這/是/我的/貓`),
  sc('小美的房間','🛏️🐶👧👱‍♀️',`小美|This is my room.|這是我的房間。
Amy|I like your bed!|我喜歡你的床！
小美|Thank you!|謝謝你！
Amy|Your dog is cute.|你的狗好可愛。`,`This is my room.|這是我的房間。|這/是/我的/房間
Thank you!|謝謝你！|謝謝/你`),
  sc('在客廳','🛋️📺👧👱‍♀️',`Amy|Can I sit here?|我可以坐這裡嗎？
小美|Sure! Sit down, please.|當然！請坐。
Amy|Where is your mom?|你媽媽在哪裡？
小美|She is in the kitchen.|她在廚房。`,`Can I sit here?|我可以坐這裡嗎？|可以/我/坐/這裡
Sure!|當然！|當然`)]},
 {t:'吃早餐', icon:'🍳', scenes:[
  sc('早安！','🌞🍳👩👧',`媽媽|Good morning!|早安！
小美|Good morning, Mom!|媽媽早安！
媽媽|Do you want eggs?|你要吃蛋嗎？
小美|Yes, please.|好，麻煩了。`,`Good morning!|早安！|好的/早上
Yes, please.|好，麻煩了。|好/請`),
  sc('這是什麼？','🥛🍞👧👱‍♀️',`Amy|What is this?|這是什麼？
小美|It's soy milk.|這是豆漿。
Amy|Yummy!|好好喝！
小美|Have some bread, too.|也吃點麵包吧。`,`What is this?|這是什麼？|什麼/是/這
Yummy!|好好吃！|好吃`),
  sc('吃飽了','😋🎒👧👱‍♀️',`小美|I'm full.|我吃飽了。
Amy|Me too.|我也是。
小美|Let's go!|我們走吧！
Amy|OK!|好！`,`I'm full.|我吃飽了。|我是/飽的
Let's go!|我們走吧！|讓我們/走`)]},
 {t:'去市場', icon:'🛒', scenes:[
  sc('買蘋果','🍎🍌🧑‍🌾👧',`老闆|Hello! What do you need?|你好！要買什麼？
小美|Two apples, please.|兩顆蘋果，謝謝。
老闆|Here you are.|給你。
小美|How much?|多少錢？`,`How much?|多少錢？|多少/很多
Two apples, please.|兩顆蘋果，謝謝。|兩/蘋果/請`),
  sc('付錢','💰🍎🧑‍🌾👱‍♀️',`老闆|Fifty dollars.|五十元。
Amy|That's cheap!|好便宜！
小美|Here you go.|錢給你。
老闆|Thank you!|謝謝！`,`Here you go.|給你。|這裡/你/去
That's cheap!|好便宜！|那是/便宜`),
  sc('買包包','👜🏬👱‍♀️👧',`Amy|I like this bag.|我喜歡這個包包。
小美|Try it on!|背背看！
Amy|Can I pay by card?|可以刷卡嗎？
店員|Sure.|可以。`,`I like this.|我喜歡這個。|我/喜歡/這個
Can I pay by card?|可以刷卡嗎？|可以/我/付錢/用/卡`)]},
 {t:'餐廳點餐', icon:'🍜', scenes:[
  sc('幾位？','🍽️🧑‍🍳👧👱‍♀️',`服務生|Hi! How many?|你好！幾位？
小美|Two, please.|兩位，謝謝。
服務生|This way, please.|這邊請。
Amy|Thanks!|謝謝！`,`Two, please.|兩位，謝謝。|兩/請
Thanks!|謝謝！|謝謝`),
  sc('點餐','🍜🍚🧑‍🍳👧',`服務生|What would you like?|請問要點什麼？
小美|Beef noodles, please.|牛肉麵，謝謝。
Amy|I'd like rice.|我想要飯。
服務生|OK!|好的！`,`Beef noodles, please.|牛肉麵，謝謝。|牛肉/麵/請
I'd like rice.|我想要飯。|我想/要/飯`),
  sc('買單','🧾😋👧👱‍♀️',`Amy|It's delicious!|好好吃！
小美|Check, please.|買單，謝謝。
服務生|Here you are.|這是帳單。
小美|Let's come again.|我們再來吧。`,`Check, please.|買單，謝謝。|帳單/請
It's delicious!|好好吃！|它是/好吃的`)]},
 {t:'問路', icon:'🗺️', scenes:[
  sc('捷運站在哪？','🚇❓👱‍♀️👨',`Amy|Excuse me.|不好意思。
路人|Yes?|是？
Amy|Where is the MRT station?|捷運站在哪裡？
路人|Go straight.|直走。`,`Excuse me.|不好意思。|原諒/我
Where is the MRT station?|捷運站在哪裡？|哪裡/是/那個/捷運/站`),
  sc('遠不遠？','🏦⬅️👨👱‍♀️',`路人|Turn left at the bank.|在銀行左轉。
Amy|Is it far?|遠嗎？
路人|No, it's near.|不遠，很近。
Amy|Thank you so much!|非常謝謝你！`,`Is it far?|遠嗎？|是/它/遠
Turn left.|左轉。|轉/左`),
  sc('迷路了','🧭😅👧👱‍♀️',`小美|Are we lost?|我們迷路了嗎？
Amy|I think so.|我想是吧。
小美|Let's ask someone.|我們問人吧。
Amy|Good idea!|好主意！`,`Good idea!|好主意！|好的/主意
Let's ask someone.|我們問人吧。|讓我們/問/某人`)]},
 {t:'搭車', icon:'🚌', scenes:[
  sc('等公車','🚏🚌👧👱‍♀️',`小美|Which bus goes to Taipei 101?|哪一台公車到台北101？
司機|Bus 20.|20 號。
小美|Thank you!|謝謝！
Amy|Here it comes!|車來了！`,`Which bus?|哪一台公車？|哪一個/公車
Here it comes!|來了！|這裡/它/來`),
  sc('找位子','💺🚌👱‍♀️👨',`Amy|Is this seat free?|這個位子有人坐嗎？
乘客|No, go ahead.|沒有，請坐。
Amy|Thanks.|謝謝。
小美|Next stop is ours.|下一站我們下車。`,`Is this seat free?|這個位子有人坐嗎？|是/這個/位子/空的
Next stop.|下一站。|下一個/站`),
  sc('坐計程車','🚕🛫👧🧑',`小美|Taxi!|計程車！
司機|Where to?|去哪裡？
小美|To the airport, please.|麻煩到機場。
司機|OK.|好。`,`Where to?|去哪裡？|哪裡/到
To the airport, please.|麻煩到機場。|到/那個/機場/請`)]},
 {t:'打電話', icon:'📞', scenes:[
  sc('Amy 打來了','📱☎️👧👱‍♀️',`小美|Hello?|喂？
Amy|Hi, it's Amy.|嗨，我是 Amy。
小美|Hi, Amy! What's up?|嗨 Amy！怎麼了？
Amy|Are you free today?|你今天有空嗎？`,`Hello?|喂？|哈囉
Are you free today?|你今天有空嗎？|是/你/有空/今天`),
  sc('約吃午餐','🍱🕛👧👱‍♀️',`小美|Yes, I am.|有啊。
Amy|Let's have lunch.|一起吃午餐吧。
小美|Sounds good!|聽起來不錯！
Amy|See you at noon.|中午見。`,`Sounds good!|聽起來不錯！|聽起來/好
See you at noon.|中午見。|見/你/在/中午`),
  sc('聽不清楚','📶😵👧👱‍♀️',`小美|Sorry, I can't hear you.|抱歉，我聽不到。
Amy|Can you hear me now?|現在聽得到嗎？
小美|Yes!|聽得到！
Amy|Call me later.|晚點打給我。`,`Sorry, I can't hear you.|抱歉，我聽不到。|抱歉/我/不能/聽到/你
Call me later.|晚點打給我。|打電話/我/晚點`)]},
 {t:'看醫生', icon:'🏥', scenes:[
  sc('頭好痛','🤒🩺👧👩‍⚕️',`醫生|What's wrong?|哪裡不舒服？
小美|I have a headache.|我頭痛。
醫生|Do you have a fever?|有發燒嗎？
小美|A little.|有一點。`,`What's wrong?|怎麼了？|什麼是/不對
I have a headache.|我頭痛。|我/有/一個/頭痛`),
  sc('吃藥','💊👄👧👩‍⚕️',`醫生|Open your mouth.|嘴巴張開。
小美|Ahh.|啊～
醫生|Take this medicine.|吃這個藥。
小美|Thank you, doctor.|謝謝醫生。`,`Take this medicine.|吃這個藥。|吃（藥）/這個/藥
Thank you, doctor.|謝謝醫生。|謝謝/你/醫生`),
  sc('好多了','🛌🍵👧👱‍♀️',`Amy|Are you OK?|你還好嗎？
小美|I feel better.|我好多了。
Amy|Get some rest.|多休息喔。
小美|I will.|我會的。`,`Are you OK?|你還好嗎？|是/你/還好
I feel better.|我好多了。|我/覺得/比較好`)]},
 {t:'旅行', icon:'✈️', scenes:[
  sc('出國囉','🛂🧳👧🧑‍✈️',`地勤|Passport, please.|請給我護照。
小美|Here you are.|在這裡。
地勤|Where are you going?|你要去哪裡？
小美|To Tokyo.|去東京。`,`Here you are.|給你。|這裡/你/是
Where are you going?|你要去哪裡？|哪裡/是/你/去`),
  sc('找登機門','🚪⏰👧👱‍♀️',`小美|Where is gate 5?|5 號登機門在哪？
地勤|Over there.|在那邊。
Amy|Our flight is late.|我們的班機延誤了。
小美|Let's get coffee.|去買咖啡吧。`,`Where is gate 5?|5 號登機門在哪？|哪裡/是/登機門/5
Over there.|在那邊。|在/那裡`),
  sc('一路順風','✈️👋👧👱‍♀️',`Amy|Have a nice trip!|一路順風！
小美|Thanks! I'll miss you.|謝謝！我會想你。
Amy|Send me photos!|傳照片給我！
小美|I will!|我會的！`,`Have a nice trip!|一路順風！|有/一個/好的/旅行
I'll miss you.|我會想你。|我會/想念/你`)]},
 {t:'交朋友', icon:'🤝', scenes:[
  sc('認識新朋友','🤝😊👧🧑',`Tom|Hi, I'm Tom.|嗨，我是 Tom。
小美|Nice to meet you. I'm Mei.|很高興認識你，我是小美。
Tom|Where are you from?|你是哪裡人？
小美|I'm from Taiwan.|我是台灣人。`,`Nice to meet you.|很高興認識你。|好的/去/認識/你
I'm from Taiwan.|我是台灣人。|我是/從/台灣`),
  sc('一樣喜歡','🎵🎸👧🧑',`Tom|What do you like?|你喜歡什麼？
小美|I like music.|我喜歡音樂。
Tom|Me too!|我也是！
Amy|Let's be friends!|我們當朋友吧！`,`I like music.|我喜歡音樂。|我/喜歡/音樂
Me too!|我也是！|我/也`),
  sc('保持聯絡','📱💬👧🧑',`小美|Can I have your number?|可以給我你的電話嗎？
Tom|Sure!|當然！
小美|Let's keep in touch.|保持聯絡喔。
Tom|See you!|再見！`,`Let's keep in touch.|保持聯絡。|讓我們/保持/在/聯絡
See you!|再見！|見/你`)]}
];
/* 自然發音的押韻口訣（和 D.combo 同順序） */
D.koujue = ["小 a 夾中間，短短「唉」一聲","小 e 夾中間，短短「哎」一下","小 i 夾中間，短短「儀」別拉長","小 o 夾中間，嘴巴張開「啊」","小 u 夾中間，輕輕「阿」一下","一個字母一個音，連起來就是字","慢慢唸，快快連，字就跑出來","聲音手牽手，單字跑出來",
 "字尾有個 e，前面唸名字","字尾有個 e，i 就唸「艾」","字尾有個 e，o 唸歐、u 唸優","兩個母音一起走，第一個開口說","a、i 一起走，a 說名字「欸」","o、a 一起走，o 說名字「歐」",
 "s、h 手牽手，噓～安靜囉","c、h 手牽手，嘟嘴「去」一下","舌頭伸出來，輕輕吹口氣","c、k 好朋友，只唸一次「咳」","p、h 變成 f，w、h 唸 w","兩個 o 圓圓，「ㄨ～」像月亮","o、u 被踩到，「嗷」的一聲叫",
 "母音碰到 r，舌頭捲起來","er、ir、ur，通通唸「ㄦ」","兩個子音手牽手，中間不加「ㄜ」","子音拉著 r，嘴巴嘟起來","s 先吹氣，馬上接下一個"];
})(window.APP_DATA);
