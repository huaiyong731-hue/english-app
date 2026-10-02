/* 老師的話：每個重點用三種方式講（故事 s、圖片 p、試試看 t）。每個泡泡最多約 20 個中文字 */
(function(D){
D.soft = ["差一點點耶，我們再來一次喔 😊","沒關係啦，我們再來一次喔 🌱","慢慢來喔，再看一次就會了 🐢","很接近了耶！我們再來一次喔 👍"];
D.cheers = ["很棒耶！🎉","哇，你超厲害的！🌟","對了喔！做得很好 👍","好棒喔，你學得蠻快的耶 🚀","就是這樣子！很棒耶 👏","老師好開心喔，你答對了 😄","一步一步來，你真的有進步喔 🌱","厲害厲害！我們繼續加油囉 💪"];
D.teachG = [
 {s:["阿嬤說：「我很餓。」","英文一定要加 am 喔：","I am hungry."],p:["🙋‍♀️ ＋ am ＋ 😋","我 ＋ 是 ＋ 餓"],t:["我很累 → I ___ tired.","am|is",0]},
 {s:["中文「他、她」聽起來一樣對不對？","爸爸是 he，媽媽是 she 喔。"],p:["👨 he　👩 she　🐶 it","男生 he、女生 she"],t:["媽媽很好 → ___ is kind.","He|She",1]},
 {s:["「我的錢包」有「的」。","英文不用「的」喔：","my wallet 👛"],p:["🙋 my 👛","我的 ＝ my"],t:["我的手機 → ___ phone","my|I",0]},
 {s:["去市場買一顆蘋果。","英文要說 an apple 喔。","一個，要加 a 或 an。"],p:["🍎 an apple　🐶 a dog","一個 ＝ a / an"],t:["一顆蛋 → ___ egg","a|an",1]},
 {s:["買三顆蛋，中文蛋不變。","英文要加 s 喔：","three eggs 🥚🥚🥚"],p:["🥚 egg → 🥚🥚🥚 eggs","很多個 → 加 s"],t:["兩本書 → two ___","book|books",1]},
 {s:["我每天喝茶：","I drink tea.","爸爸每天喝茶：","He drinks tea."],p:["🙋 I drink　👨 He drinks","他、她 → 動詞加 s"],t:["媽媽每天煮飯 → She ___.","cook|cooks",1]},
 {s:["我不吃辣 🌶️","英文要用 don't 喔：","I don't eat spicy food."],p:["🙅 don't ＋ 🌶️","不 ＝ don't"],t:["我不喝酒 → I ___ drink beer.","don't|not",0]},
 {s:["中文問：「你餓嗎？」","英文把 Are 搬到前面就好囉：","Are you hungry?"],p:["❓ Are ＋ you ＋ 😋 ?","「嗎」→ Are 放前面"],t:["你累嗎？→ ___ you tired?","Are|You",0]},
 {s:["媽媽在煮飯 🍳","英文：She is cooking.","「在」＝ is ＋ ing"],p:["👩‍🍳 is cooking","正在 ＝ is ＋ ing"],t:["我在吃飯 → I am ___.","eat|eating",1]},
 {s:["昨天我買了麵包 🍞","英文的動詞要變身喔：","I bought bread."],p:["⬅️ 昨天 → 動詞變過去","walk → walked"],t:["昨天我走路 → I ___ yesterday.","walk|walked",1]},
 {s:["明天我會去銀行 🏦","英文要用 will 喔：","I will go to the bank."],p:["➡️ 明天 → will ＋ 動詞","will go ＝ 會去"],t:["我會打給你 → I ___ call you.","will|am",0]},
 {s:["阿公會游泳 🏊","英文：He can swim.","會 ＝ can"],p:["🏊 can swim","會 ＝ can"],t:["我會煮菜 → I can ___.","cook|cooks",0]},
 {s:["錢包在桌上 👛","英文：on the table","on ＝ 在上面"],p:["📦 in　🍽️ on　🛏️ under","裡面、上面、下面"],t:["在盒子裡 → ___ the box","in|on",0]},
 {s:["中文：我每天在家吃飯。","英文的地點、時間放後面喔","I eat at home every day."],p:["🙋 → 🍽️ → 🏠 → 📅","誰→做→哪裡→何時"],t:["我在台北工作 → I work ___.","in Taipei|Taipei in",0]}
];
D.teachP = [
 {s:["漢字看形狀知道意思。","英文字母記錄聲音，","就像拼音一樣耶！"],p:["🀄 木 林 森　🔤 c-a-t","漢字看形，英文聽音"],t:["英文字母比較像什麼？","拼音|漢字",0]},
 {s:["拼音：b ＋ a → ba","英文也是這樣子拼喔：","c ＋ a ＋ t → cat 🐱"],p:["c ＋ a ＋ t ＝ 🐱","一個一個唸，再連起來"],t:["d-o-g 是什麼？","🐶 dog|🐱 cat",0]},
 {s:["kit 後面加一個 e，","就變成 kite 風箏 🪁","e 不出聲，超像魔法的耶！"],p:["kit ＋ e ＝ 🪁 kite","e 讓 i 唸「愛」"],t:["hop ＋ e 是？","hope|hopp",0]},
 {s:["兩個母音手牽手，","第一個說話喔：","rain 🌧️ 的 ai 唸「欸」"],p:["r ＋ ai ＋ n ＝ 🌧️","ai 唸「欸」"],t:["know 的 k 要唸嗎？","不唸|要唸",0]},
 {s:["「不」＋「快樂」＝不快樂","英文也一樣喔：","un ＋ happy ＝ unhappy"],p:["😊 happy → 😞 unhappy","un ＝ 不"],t:["unhappy 是什麼意思？","不快樂|很快樂",0]},
 {s:["教書的人叫老師。","teach ＋ er ＝ teacher","-er ＝ 做這件事的人"],p:["🎤 sing → singer 歌手","-er ＝ …的人"],t:["sing ＋ er 是？","歌手|唱歌",0]},
 {s:["阿公慢慢地走 🐢","慢慢地 ＝ slowly","slow ＋ ly"],p:["🐢 slow → slowly","-ly ＝ …地"],t:["help ＋ ful 是什麼？","有幫助的|不幫忙",0]},
 {s:["媽媽買菜 🛒","Mom buys food.","順序跟中文一樣耶！"],p:["👩 → 🛒 → 🥬","誰 → 做 → 什麼"],t:["「我吃飯」哪個對？","I eat rice.|Rice I eat.",0]},
 {s:["我很快樂：","I am happy. 😊","你讓我快樂：","You make me happy. 🥰"],p:["🙋 ＋ am ＋ 😊","誰 ＋ 是 ＋ 怎樣"],t:["「我喜歡茶」哪個對？","I like tea.|I tea like.",0]},
 {s:["中文：我晚上在家看電視。","英文的地點、時間放後面喔","I watch TV at home."],p:["📺 → 🏠 → 🌙","做什麼→哪裡→何時"],t:["「我在家吃飯」哪個對？","I eat at home.|I at home eat.",0]},
 {s:["中文用「了」：我吃了。","英文是讓動詞變身喔：","I ate. 🍽️"],p:["🚶 walk → walked","動詞變身，表示時間"],t:["他走路 → He ___.","walk|walks",1]}
];
})(window.APP_DATA);
