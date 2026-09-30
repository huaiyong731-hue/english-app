/* 第二批資料：拼音對照、中英對比、句型套用、英文的原理 */
(function(D){
/* 字母發音 ↔ 拼音對照：[拼音對照, 嘴型, 中國人常錯, 中文沒有這個音?] */
D.letterPy = {
A:["短 a /æ/ ≈ 介於拼音 a 和 ê 之間","嘴巴張大，嘴角往兩邊拉開，舌頭壓低","常唸成 ai 或 e：cat 不是「kai-te」也不是「ke-te」",1],
B:["≈ 拼音 b","雙唇閉起來再彈開，喉嚨輕輕震動","字尾的 b 不要加「ㄜ」：job 不是 jo-be",0],
C:["≈ 拼音 k（在 e、i、y 前面常唸 s）","跟拼音 k 一樣，舌根頂住上顎再放開","⚠️ 不是拼音 c（ts）！cat 唸 k-a-t",0],
D:["≈ 拼音 d","舌尖頂住上牙齦再放開，喉嚨震動","字尾的 d 輕輕發：bed 不是 be-de",0],
E:["短 e /ɛ/ ≈ 拼音 ê（ei 的前半）","嘴巴半開，嘴形不要動","常滑成 ei：bed 不是 bei-d",0],
F:["≈ 拼音 f","上排牙齒輕碰下唇，吹氣","f 開頭沒問題，字尾（if）要輕輕吹氣",0],
G:["≈ 拼音 g（有時唸 j，如 giraffe）","舌根頂住上顎，喉嚨震動","字尾 g 輕輕發：dog 不是 do-ge",0],
H:["≈ 拼音 h，但更輕","只是輕輕哈一口氣，喉嚨不要摩擦","常唸太重，像拼音 h（喝）的沙沙聲",0],
I:["短 i /ɪ/ ≈ 很短、很鬆的 i","嘴巴放鬆，比拼音 i 開一點、短一點","常唸成長音 ee：sit 變 seat、ship 變 sheep",0],
J:["≈ 拼音 zh ＋ 嘟嘴","嘴唇嘟圓，舌尖頂上牙齦後面","⚠️ 不是拼音 j（ji）！juice 不是 ji-u-si",0],
K:["≈ 拼音 k","跟拼音 k 一樣","字尾 k 輕輕發：book 不是 boo-ke",0],
L:["字首 ≈ 拼音 l；字尾像很輕的「歐」","字尾 l（ball、milk）舌尖要頂住上牙齦","字尾 l 常被省略：milk 唸成 mi-k",0],
M:["≈ 拼音 m","雙唇閉起來，鼻子出聲","字尾 m 要閉嘴：home 最後嘴巴要合起來",0],
N:["≈ 拼音 n","舌尖頂住上牙齦，鼻子出聲","字尾 n 和 ng 要分清楚：thin ≠ thing",0],
O:["短 o /ɑ/ ≈ 拼音 a（嘴巴張大）","嘴巴張大、下巴往下","常唸成 o（喔）：hot 不是 ho-t",0],
P:["≈ 拼音 p","雙唇閉起來，用力噴氣","字尾 p 輕輕發：map 不是 ma-pe",0],
Q:["qu ≈ 拼音 k ＋ w（kw）","先發 k，馬上嘟嘴發 w","⚠️ 不是拼音 q（qi）！queen 唸 kw-een",0],
R:["≈ 拼音 r，但舌頭不碰任何地方","嘴唇嘟圓，舌頭往後捲、懸在空中","中文沒有完全一樣的音：常唸成拼音 r（日）或 l（light/right 分不清）",1],
S:["≈ 拼音 s","舌尖靠近上牙齦吹氣","字尾 s 不要加「ㄜ」：bus 不是 ba-se",0],
T:["≈ 拼音 t","舌尖頂住上牙齦，用力噴氣","字尾 t 輕輕發：cat 不是 ca-te",0],
U:["短 u /ʌ/ ≈ 很短的拼音 a","嘴巴半開、放鬆，像輕輕「啊」一聲","常唸成 u（烏）：sun 不是 su-n",0],
V:["中文沒有！像 f 但喉嚨要震動","上排牙齒輕咬下唇，喉嚨震動發聲","常唸成 w 或 f：van 變 wan、very 變 wery",1],
W:["≈ 拼音 w","嘴唇嘟圓再打開","跟 v 分清楚：w 嘴唇嘟圓，v 牙齒咬唇",0],
X:["≈ k ＋ s","快速連唸 k 和 s","⚠️ 不是拼音 x（xi）！box 唸 bo-ks",0],
Y:["≈ 拼音 y","跟拼音 y 一樣","yes 和 ye 的差別在字尾 s 要發出來",0],
Z:["中文沒有！像 s 但喉嚨要震動（像蜜蜂 zzz）","舌尖靠近上牙齦，喉嚨震動","⚠️ 不是拼音 z（ts）！zoo 不是「族」",1]
};
/* 自然發音每一課：[拼音對照, 嘴型, 常錯, 中文沒有?]（順序跟 phonics 一樣） */
D.phonicsPy = [
["短 a /æ/ ≈ 介於 a 和 ê 之間","嘴巴張大、嘴角拉開","常唸成 e 或 ai：bag 不是 beg",1],
["短 e ≈ 拼音 ê","嘴巴半開、不要滑音","不要唸成 ei：pen 不是 pain",0],
["短 i ≈ 很短很鬆的 i","嘴巴放鬆、短短的","sit ≠ seat、ship ≠ sheep，短 i 不要拉長",0],
["短 o ≈ 拼音 a","嘴巴張大、下巴往下","不要唸成 o（喔）：hot 像「哈特」",0],
["短 u ≈ 很短的 a","嘴巴半開、放鬆","不要唸成 u（烏）：cup 像「卡普」",0],
["像拼音一樣拼：聲母＋韻母 → 英文 子音＋母音＋子音","最後一個子音輕輕發，不要加 e","cat 不是 ca-te，字尾不要多一個「ㄜ」",0],
["b-e-d 就像拼音 b＋ê＋d","最後的 d、n、g、p 都要輕","字尾子音不要吞掉，也不要加母音",0],
["d-o-g ≈ d＋a＋g","o 嘴巴張大像 a；u 短短的 a","dog 不是 do-ge；bug 不是 bu-ge",0],
["a_e ≈ 拼音 ei","字尾 e 不發音","cake 唸 keik，不是 ka-ke",0],
["i_e ≈ 拼音 ai","字尾 e 不發音","bike 唸 baik，不是 bi-ke",0],
["o_e ≈ 拼音 ou；u_e ≈ 拼音 you（iu）","字尾 e 不發音","home 最後要閉嘴（m），不是 hou",0],
["ee / ea ≈ 拼音 i（拉長）","嘴角往兩邊拉開","長 i 要拉長：sheep 比 ship 長",0],
["ai / ay ≈ 拼音 ei","從 e 滑到 i","rain 不是 ran",0],
["oa / ow ≈ 拼音 ou","嘴巴從 o 慢慢嘟圓","boat 唸 bout，不是 bo-a-t",0],
["sh ≈ 拼音 sh ＋ 嘟嘴","嘴唇往前嘟，比拼音 sh 更圓","⚠️ 不是拼音 x：she 不是 xi",0],
["ch ≈ 拼音 ch ＋ 嘟嘴","嘴唇往前嘟","⚠️ 不是拼音 q：cheese 不是 qi-si",0],
["中文沒有！th 舌頭要放在牙齒中間","舌尖輕放上下牙齒中間：吹氣（three）或震動（this）","常唸成 s、f 或 d：three 變 sree、this 變 dis",1],
["ck ≈ 拼音 k；ng ≈ 拼音 ang 的 ng","ck 短短的；ng 舌根頂上去、鼻子出聲","字尾 n 和 ng 分清楚：sin ≠ sing",0],
["wh ≈ 拼音 w；ph ≈ 拼音 f","wh 嘴唇嘟圓；ph 牙齒碰下唇","phone 唸 foun，不是 p-hone",0],
["oo ≈ 拼音 u（長 moon、短 book）","嘴唇嘟圓","長短要分：food 長、book 短",0],
["ou / ow ≈ 拼音 ao","從 a 滑到 u","house 不是 hou-se",0],
["ar ≈ 拼音 a ＋ 捲舌；or ≈ o ＋ 捲舌","像北京話的兒化音","不要把 r 省略：car 不是 ka",1],
["er / ir / ur ≈ 兒化音 er","直接捲舌，不要先唸 e","bird 不是 bi-er-de",1],
["中文沒有子音連在一起！","兩個子音中間不要加母音","blue 不是 bu-lu；plane 不是 pu-lei-n",1],
["中文沒有子音連在一起！","b 和 r 快速黏在一起，嘴唇嘟起來","bread 不是 bu-rei-de；frog 不是 fu-luo-ge",1],
["中文沒有子音連在一起！","s 直接接下一個音，不要加「ㄜ」","stop 不是 si-top；snake 不是 si-nei-ke",1]
];
/* 文法：中英對比 & 中國人常犯的錯 */
D.grammarCn = [
 {cn:[["我很快樂。","I am happy.（一定要有 am）"],["她是老師。","She is a teacher."]],err:[["I happy.","I am happy.","中文「我很快樂」沒有「是」，英文一定要 be 動詞"],["She teacher.","She is a teacher.","漏了 is，也漏了 a"]]},
 {cn:[["他／她是我朋友。（口語都唸 tā）","He is my friend. / She is my friend."]],err:[["My mother, he is kind.","My mother is kind. She is kind.","女生要用 she，男生用 he"],["I love he.","I love him.","放在動詞後面要變 him / her / me"]]},
 {cn:[["我的包包","my bag（「的」不用翻譯）"],["他的車","his car"]],err:[["I bag","my bag","「我的」是 my，不是 I"],["This is he car.","This is his car.","「他的」是 his"]]},
 {cn:[["我有狗。","I have a dog.（一隻要加 a）"],["太陽很熱。","The sun is hot.（只有一個的東西用 the）"]],err:[["I have car.","I have a car.","一個東西前面要加 a / an，中文沒有這個習慣"],["I eat a apple.","I eat an apple.","母音開頭用 an"]]},
 {cn:[["兩隻貓","two cats（貓要加 s）"],["很多書","many books"]],err:[["three book","three books","中文「三本書」書不變，英文要加 s"],["two childs","two children","有些字是特別的"]]},
 {cn:[["他喜歡狗。","He likes dogs.（動詞加 s）"],["我喜歡狗。","I like dogs."]],err:[["He like coffee.","He likes coffee.","he / she / it 動詞要加 s，中文沒有這種變化"],["She go to work every day.","She goes to work every day.","go → goes"]]},
 {cn:[["我不喜歡牛奶。","I don't like milk.（不能直接放 not）"],["我不累。","I am not tired."]],err:[["I not like milk.","I don't like milk.","一般動詞要用 don't"],["He don't eat meat.","He doesn't eat meat.","he / she / it 用 doesn't"]]},
 {cn:[["你餓嗎？","Are you hungry?（「嗎」不用翻，把 are 搬到前面）"],["你喜歡茶嗎？","Do you like tea?"]],err:[["You are hungry?","Are you hungry?","問句要把 be 動詞放前面"],["You like tea?","Do you like tea?","一般動詞問句前面加 Do"]]},
 {cn:[["我在吃飯。","I am eating.（「在」＝ am ＋ -ing）"]],err:[["I eating.","I am eating.","漏了 am"],["She is sleep.","She is sleeping.","動詞要加 -ing"]]},
 {cn:[["我昨天去公園。","I went to the park yesterday.（有「昨天」動詞也要變）"]],err:[["Yesterday I go to the park.","Yesterday I went to the park.","中文靠「昨天、了」，英文動詞本身要變過去式"],["I eated noodles.","I ate noodles.","eat 是特別的：ate"]]},
 {cn:[["我明天會打給你。","I will call you tomorrow."]],err:[["I will calling you.","I will call you.","will 後面用原形"],["Tomorrow I go to Taipei.","Tomorrow I will go to Taipei.","未來的事要用 will 或 going to"]]},
 {cn:[["我會游泳。","I can swim."],["我不會開車。","I can't drive."]],err:[["I can swimming.","I can swim.","can 後面用原形"],["She can cooks.","She can cook.","can 後面不加 s"]]},
 {cn:[["在桌上","on the table（中文「在…上」，英文 on 放前面）"],["在星期一","on Monday"]],err:[["I am at Taipei.","I am in Taipei.","城市、國家用 in"],["See you in Monday.","See you on Monday.","星期用 on"]]},
 {cn:[["我每天在家吃早餐。","I eat breakfast at home every day."],["我在台北工作。","I work in Taipei."]],err:[["I every day eat breakfast.","I eat breakfast every day.","時間放句子最後面"],["I in Taipei work.","I work in Taipei.","地點放在動詞後面"]]}
];
D.grammar.push({t:"語序：時間和地點放後面",x:"中文：時間、地點放在動詞前面。\n英文：通常是「誰 ＋ 做什麼 ＋ 地點 ＋ 時間」。\n地點、時間都放在句子後面！",e:`I eat breakfast at home every day.|我每天在家吃早餐。|🍳
I work in Taipei.|我在台北工作。|💼
We play in the park on Sunday.|我們星期天在公園玩。|🌳
I study English at night.|我晚上讀英文。|📚`,q:[["「我在台北工作」哪一句對？","I in Taipei work.|I work in Taipei.",1],["「我們星期天在公園玩」哪一句對？","We play in the park on Sunday.|We on Sunday in the park play.",0],["「我晚上讀英文」哪一句對？","I at night study English.|I study English at night.",1]]});

/* 句型套用：p 英文句型, z 中文, h 諧音, n 說明, f 可以替換的字 */
D.patterns = [
 {p:"I am ___.",z:"我是／我很 ___。",h:"愛 安姆 ___",n:"說自己是什麼、覺得怎樣。中文「我很累」沒有「是」，英文一定要 am！",f:`happy|快樂|😊|黑皮
tired|累|😫|泰爾德
hungry|餓|😋|夯格瑞
a teacher|老師|👩‍🏫|呃 踢切
from Taiwan|來自台灣|🇹🇼|夫讓 台灣`},
 {p:"This is ___.",z:"這是 ___。",h:"利斯 意斯 ___",n:"介紹東西或人。",f:`my bag|我的包包|👜|麥 貝格
my friend|我的朋友|🧑‍🤝‍🧑|麥 夫瑞恩德
my phone|我的手機|📱|麥 風
a map|一張地圖|🗺️|呃 咩普
my husband|我先生|🤵|麥 哈斯本德`},
 {p:"I want ___.",z:"我想要 ___。",h:"愛 旺特 ___",n:"想要東西時用。",f:`water|水|💧|哇特
coffee|咖啡|☕|咖啡
rice|飯|🍚|賴斯
a taxi|一台計程車|🚕|呃 泰克西
this one|這個|👉|利斯 萬`},
 {p:"I like ___.",z:"我喜歡 ___。",h:"愛 賴克 ___",n:"說喜歡的東西。喜歡「一類」東西常用複數：I like cats.",f:`cats|貓|🐱|凱茲
tea|茶|🍵|踢
music|音樂|🎵|謬日克
fruit|水果|🍇|夫如特
my family|我的家人|👨‍👩‍👧|麥 飛木哩`},
 {p:"I don't like ___.",z:"我不喜歡 ___。",h:"愛 當特 賴克 ___",n:"don't ＝ do not。不能說 I not like。",f:`milk|牛奶|🥛|謬克
snakes|蛇|🐍|斯內克斯
hot weather|熱天氣|🥵|哈特 威惹
beer|啤酒|🍺|比爾
rain|下雨|🌧️|瑞恩`},
 {p:"Do you have ___?",z:"你有 ___ 嗎？",h:"度 優 黑夫 ___",n:"購物、問東西最好用。「嗎」不用翻譯，前面加 Do。",f:`water|水|💧|哇特
a map|地圖|🗺️|呃 咩普
a bag|袋子|🛍️|呃 貝格
an umbrella|雨傘|☂️|恩 阿姆布瑞拉
a smaller one|小一點的|🤏|呃 斯摩惹 萬`},
 {p:"Where is ___?",z:"___ 在哪裡？",h:"威爾 意斯 ___",n:"中文「在哪裡」放後面，英文 Where 放最前面！",f:`the bathroom|廁所|🚻|惹 巴斯如姆
the station|車站|🚉|惹 斯得訓
the bank|銀行|🏦|惹 班克
my key|我的鑰匙|🔑|麥 奇
the hotel|飯店|🏨|惹 厚帖歐`},
 {p:"How much is ___?",z:"___ 多少錢？",h:"號 馬取 意斯 ___",n:"問價錢。How much 放最前面。",f:`this|這個|👇|利斯
the ticket|這張票|🎫|惹 踢克特
the coffee|這杯咖啡|☕|惹 咖啡
the cake|這個蛋糕|🍰|惹 給克
the room|這個房間|🚪|惹 如姆`},
 {p:"Can I ___?",z:"我可以 ___ 嗎？",h:"肯 愛 ___",n:"禮貌地問「我可以…嗎？」。",f:`sit here|坐這裡|🪑|西特 嘿爾
pay by card|刷卡|💳|佩 拜 卡德
try it on|試穿|👕|軋 意特 昂
see the menu|看菜單|📋|西 惹 咩妞
go now|現在走|🚶|狗 鬧`},
 {p:"Can you ___?",z:"你可以 ___ 嗎？",h:"肯 優 ___",n:"請別人幫忙。後面加 please 更有禮貌。",f:`help me|幫我|🤝|嘿歐普 密
say that again|再說一次|🔁|塞 雷特 阿根
speak slowly|說慢一點|🐢|斯必克 斯樓力
call a taxi|叫計程車|🚕|摳 呃 泰克西
take a photo|拍張照|📷|貼克 呃 佛頭`},
 {p:"I'm going to ___.",z:"我要（打算）___。",h:"愛姆 勾因 兔 ___",n:"說等一下或以後要做的事。",f:`eat|吃飯|🍽️|依特
sleep|睡覺|😴|斯力普
go home|回家|🏠|狗 厚姆
buy water|買水|💧|拜 哇特
study English|讀英文|📚|斯塔迪 英格利許`},
 {p:"I need ___.",z:"我需要 ___。",h:"愛 泥德 ___",n:"比 want 更急、更需要。",f:`a doctor|醫生|👨‍⚕️|呃 達克特
help|幫忙|🆘|嘿歐普
water|水|💧|哇特
a taxi|計程車|🚕|呃 泰克西
some rest|休息一下|🛌|桑 瑞斯特`},
 {p:"I have ___.",z:"我有 ___。",h:"愛 黑夫 ___",n:"有東西、有家人，也可以說身體不舒服（I have a headache）。",f:`a dog|一隻狗|🐶|呃 搭格
two children|兩個小孩|🧒|兔 丘德忍
a question|一個問題|❓|呃 虧斯遜
a headache|頭痛|🤕|呃 嘿帖克
a reservation|預訂|📝|呃 瑞惹威訓`},
 {p:"Let's ___.",z:"我們一起 ___ 吧。",h:"雷茲 ___",n:"邀請別人一起做。",f:`go|走|🚶|狗
eat|吃飯|🍽️|依特
take a photo|拍照|📷|貼克 呃 佛頭
take a taxi|搭計程車|🚕|貼克 呃 泰克西
go shopping|去購物|🛍️|狗 夏平`},
 {p:"I'd like ___, please.",z:"我想要 ___，麻煩你。",h:"愛德 賴克 ___ 普力斯",n:"比 I want 更有禮貌，點餐最好用。",f:`a coffee|一杯咖啡|☕|呃 咖啡
the chicken|雞肉|🍗|惹 七肯
some water|一些水|💧|桑 哇特
a table for two|兩人桌|✌️|呃 貼剖 佛 兔
the check|帳單|🧾|惹 切克`},
 {p:"What is ___?",z:"___ 是什麼？",h:"華特 意斯 ___",n:"問「什麼」。What 放最前面。",f:`this|這個|👇|利斯
that|那個|👉|雷特
your name|你的名字|📛|又爾 內姆
your phone number|你的電話號碼|📱|又爾 風 難博
the Wi-Fi password|Wi-Fi 密碼|📶|惹 歪法伊 帕斯沃德`},
 {p:"Is there ___ near here?",z:"這附近有 ___ 嗎？",h:"意斯 累爾 ___ 尼爾 嘿爾",n:"找地方時用。near here ＝ 這附近，放在句尾。",f:`a bank|銀行|🏦|呃 班克
a hotel|飯店|🏨|呃 厚帖歐
a supermarket|超市|🛒|呃 蘇潑馬克特
a hospital|醫院|🏥|呃 哈斯批頭
a restaurant|餐廳|🍴|呃 瑞斯特讓特`},
 {p:"I can ___.",z:"我會 ___。",h:"愛 肯 ___",n:"說自己會做的事。can 後面動詞不變。",f:`swim|游泳|🏊|斯溫
cook|煮菜|🍳|庫克
sing|唱歌|🎤|醒
speak English|說英文|🗣️|斯必克 英格利許
drive|開車|🚗|追夫`},
 {p:"Please ___.",z:"請 ___。",h:"普力斯 ___",n:"請別人做事，很有禮貌。",f:`wait|等一下|⏳|威特
sit down|坐下|🪑|西特 當
come in|進來|🚪|卡姆 因
speak slowly|說慢一點|🐢|斯必克 斯樓力
help me|幫我|🤝|嘿歐普 密`},
 {p:"It's ___.",z:"（它／天氣）很 ___。",h:"意茲 ___",n:"說東西或天氣怎樣。中文「好熱」沒有主詞，英文要說 It's hot.",f:`hot|熱|🔥|哈特
cold|冷|🥶|扣德
delicious|好吃|😋|迪利瑕斯
expensive|貴|💎|依克斯噴西夫
very beautiful|很漂亮|🌸|威瑞 比優特佛`},
 {p:"What time is ___?",z:"___ 是幾點？",h:"華特 泰姆 意斯 ___",n:"問時間。What time 放最前面。",f:`breakfast|早餐|🍳|布瑞克菲斯特
dinner|晚餐|🍽️|丁呢
the train|火車|🚆|惹 吹恩
check-out|退房|🧳|切克奧特
the next bus|下一班公車|🚌|惹 奈克斯特 巴斯`}
];

/* 英文的原理：r=需要先完成哪一課才解鎖；x=說明；e=例子；d=練習（b:組字、o:排句子）
   顏色標記：[L:字母音] [x:不發音] [p:字首] [r:字根] [s:字尾] [S:主詞] [V:動詞] [O:受詞] [C:補語] [T:時間] [P:地點] [Q:問句] */
D.principles = [
 {t:"為什麼英文長這樣？字母 vs 漢字",r:"s1-9",x:[
  "🀄 漢字：看字形知道意思 → 木、林、森",
  "🔤 英文：字母是用來記錄「聲音」的，就像拼音！看到字母，就能大概唸出來",
  "🅿️ 拼音：m ＋ a → ma；英文：[L:c] ＋ [L:a] ＋ [L:t] → cat",
  "🧱 單字像積木：[p:un] ＋ [r:happy] ＝ unhappy（不快樂），就像漢字用部首組字",
  "📐 句子有固定順序：[S:I] [V:eat] [O:rice] ＝ 誰 → 做 → 什麼",
  "🔄 中文用「了、在、會」表示時間；英文是讓動詞自己變形：walk → walk[s:ed]"],
  e:`[L:c][L:a][L:t]|貓|🐱
[p:un][r:happy]|不快樂|😞
[S:I] [V:eat] [O:rice].|我吃飯。|🍚
I [V:walk][s:ed].|我走路了。|🚶`,
  d:[{b:"[L:c][L:a][L:t]",z:"貓",e:"🐱"},{o:"[S:I] [V:eat] [O:rice].",z:"我吃飯。"}]},
 {t:"字母→聲音→單字：像拼音一樣拼",r:"s1-9",x:[
  "🅿️ 拼音：聲母 ＋ 韻母 → [L:b] ＋ [L:a] → ba",
  "🔤 英文：每個字母一個音，連起來：[L:c] ＋ [L:a] ＋ [L:t] → cat",
  "⚠️ 中文每個字都用母音結尾；英文常用子音結尾（ca[L:t]）。最後的 t 輕輕發出來，不要多加「ㄜ」（不是 ca-te）",
  "🐢 方法：先慢慢唸每個音，再越唸越快，就變成一個字"],
  e:`[L:d][L:o][L:g]|狗|🐶
[L:s][L:u][L:n]|太陽|☀️
[L:b][L:e][L:d]|床|🛏️
[L:p][L:i][L:g]|豬|🐷`,
  d:[{b:"[L:d][L:o][L:g]",z:"狗",e:"🐶"},{b:"[L:s][L:u][L:n]",z:"太陽",e:"☀️"},{b:"[L:c][L:u][L:p]",z:"杯子",e:"🥤"}]},
 {t:"拼字規則 1：魔法 e",r:"s1-9",x:[
  "✨ 字尾加一個不發音的 [x:e]，前面的母音就改唸「字母的名字」",
  "kit（短 i）→ kit[x:e] kite（i 唸 ai）",
  "hop（短 o）→ hop[x:e] hope（o 唸 ou）",
  "🅿️ 對照：a_e ≈ ei，i_e ≈ ai，o_e ≈ ou，u_e ≈ you"],
  e:`kit|一套工具|🧰
kit[x:e]|風箏|🪁
hop|跳|🐇
hop[x:e]|希望|🙏
cut[x:e]|可愛|🥰`,
  d:[{b:"[r:kit][x:e]",z:"風箏",e:"🪁"},{b:"[r:hop][x:e]",z:"希望",e:"🙏"},{b:"[r:cut][x:e]",z:"可愛",e:"🥰"}]},
 {t:"拼字規則 2：雙母音和不發音的字母",r:"s1-9",x:[
  "👯 兩個母音在一起，通常只唸第一個的名字：[L:ea]t（吃）、r[L:ai]n（雨）、b[L:oa]t（船）",
  "📣 口訣：兩個母音一起走，第一個說話",
  "🤫 看得到、聽不到的字母：[x:k]now、[x:w]rite、lam[x:b]、ni[x:gh]t",
  "🅿️ 拼音每個字母都要唸；英文有些字母是歷史留下來的，不要唸出來"],
  e:`[L:ea]t|吃|🍽️
r[L:ai]n|雨|🌧️
[x:k]now|知道|💡
[x:w]rite|寫|✍️
ni[x:gh]t|晚上|🌙`,
  d:[{b:"[L:r][L:ai][L:n]",z:"雨",e:"🌧️"},{b:"[L:b][L:oa][L:t]",z:"船",e:"⛵"},{b:"[x:k][L:n][L:ow]",z:"知道",e:"💡"}]},
 {t:"單字積木 1：字首（加在前面）",r:"s2-26",x:[
  "🧱 [r:字根] 是單字的核心意思；[p:字首] 加在前面改變意思",
  "[p:un]- ＝ 不：[p:un][r:happy] 不快樂",
  "[p:re]- ＝ 再一次：[p:re][r:do] 重做",
  "[p:pre]- ＝ 事先：[p:pre][r:pay] 預付",
  "[p:dis]- ＝ 相反：[p:dis][r:like] 不喜歡",
  "🀄 很像中文：「不」＋「快樂」＝「不快樂」"],
  e:`[p:un][r:happy]|不快樂|😞
[p:re][r:open]|重新打開|🔓
[p:pre][r:pay]|預付|💳
[p:dis][r:like]|不喜歡|👎`,
  d:[{b:"[p:un][r:happy]",z:"不快樂",e:"😞"},{b:"[p:re][r:do]",z:"重做",e:"🔁"},{b:"[p:dis][r:like]",z:"不喜歡",e:"👎"}]},
 {t:"單字積木 2：字尾 -er、-ing、-ed、-s",r:"s2-26",x:[
  "🧱 [s:字尾] 加在後面，改變「詞性」或「時間」",
  "[r:teach][s:er] 老師：-er ＝ 做這件事的人，像中文「…者、…員」",
  "[r:play][s:ing] 正在玩：-ing ＝ 正在",
  "[r:walk][s:ed] 走了：-ed ＝ 過去",
  "[r:book][s:s] 很多書：-s ＝ 很多個"],
  e:`[r:teach][s:er]|老師|👩‍🏫
[r:play][s:ing]|正在玩|🎮
[r:walk][s:ed]|走過了|🚶
[r:book][s:s]|很多書|📚`,
  d:[{b:"[r:teach][s:er]",z:"老師",e:"👩‍🏫"},{b:"[r:sing][s:er]",z:"歌手",e:"🎤"},{b:"[r:cook][s:ing]",z:"正在煮",e:"🍳"}]},
 {t:"單字積木 3：-ly、-ful、-ness、-tion 和字族",r:"s2-26",x:[
  "[r:slow][s:ly] 慢慢地：-ly ＝ …地",
  "[r:help][s:ful] 有幫助的：-ful ＝ 充滿…的",
  "[r:happi][s:ness] 快樂（名詞）：-ness ＝ 變成名詞（y 要改成 i）",
  "[r:ac][s:tion] 行動：-tion 唸「訓」shən，變成名詞",
  "👪 字族：[r:happy] → [p:un][r:happy] → [r:happi][s:ness] → [r:happi][s:ly]，學一個懂四個！"],
  e:`[r:slow][s:ly]|慢慢地|🐢
[r:help][s:ful]|有幫助的|🤝
[r:happi][s:ness]|快樂（名詞）|😊
[r:ac][s:tion]|行動|🎬
[p:un][r:happi][s:ly]|不快樂地|😞`,
  d:[{b:"[r:slow][s:ly]",z:"慢慢地",e:"🐢"},{b:"[r:help][s:ful]",z:"有幫助的",e:"🤝"},{b:"[r:happi][s:ness]",z:"快樂（名詞）",e:"😊"}]},
 {t:"句子骨架：誰＋做＋什麼",r:"s3-63",x:[
  "🦴 英文句子的骨架：[S:主詞（誰）] ＋ [V:動詞（做）] ＋ [O:受詞（什麼）]",
  "[S:I] [V:eat] [O:rice]. ＝ 我 吃 飯。跟中文一樣的順序！👍",
  "⚠️ 英文每句話一定要有主詞和動詞。中文可以說「好累」，英文要說 [S:I] [V:am] [C:tired].",
  "🅿️ 中文「吃了嗎？」沒有主詞；英文要說 Did [S:you] [V:eat]?"],
  e:`[S:I] [V:eat] [O:rice].|我吃飯。|🍚
[S:She] [V:likes] [O:cats].|她喜歡貓。|🐱
[S:We] [V:drink] [O:tea].|我們喝茶。|🍵
[S:I] [V:am] [C:tired].|我好累。|😫`,
  d:[{o:"[S:She] [V:likes] [O:cats].",z:"她喜歡貓。"},{o:"[S:We] [V:drink] [O:tea].",z:"我們喝茶。"},{o:"[S:I] [V:am] [C:tired].",z:"我好累。"}]},
 {t:"五大基本句型",r:"s3-63",x:[
  "🎨 顏色：[S:主詞] [V:動詞] [O:受詞] [C:補語（怎樣）]",
  "① [S:I] [V:run]. 我跑。（誰＋做）",
  "② [S:I] [V:am] [C:happy]. 我很快樂。（誰＋是＋怎樣）",
  "③ [S:I] [V:like] [O:tea]. 我喜歡茶。（誰＋做＋什麼）",
  "④ [S:I] [V:give] [O:you] [O:a book]. 我給你一本書。（給誰＋什麼）",
  "⑤ [S:You] [V:make] [O:me] [C:happy]. 你讓我快樂。（讓誰＋怎樣）"],
  e:`[S:I] [V:run].|我跑。|🏃
[S:I] [V:am] [C:happy].|我很快樂。|😊
[S:I] [V:like] [O:tea].|我喜歡茶。|🍵
[S:I] [V:give] [O:you] [O:a book].|我給你一本書。|📖
[S:You] [V:make] [O:me] [C:happy].|你讓我快樂。|🥰`,
  d:[{o:"[S:I] [V:give] [O:you] [O:a book].",z:"我給你一本書。"},{o:"[S:You] [V:make] [O:me] [C:happy].",z:"你讓我快樂。"},{o:"[S:I] [V:like] [O:tea].",z:"我喜歡茶。"}]},
 {t:"中英語序大不同",r:"s3-63",x:[
  "⏰📍 時間、地點：中文放前面，英文放後面",
  "中文：我 [T:每天] [P:在家] 吃早餐",
  "英文：[S:I] [V:eat] [O:breakfast] [P:at home] [T:every day].",
  "❓ 問句：中文句尾加「嗎」；英文把 [Q:Are / Do] 搬到最前面：[Q:Are] you hungry?",
  "❓ 問題詞也放最前面：「你住哪裡？」→ [Q:Where] do you live?",
  "🍎 形容詞跟中文一樣放在名詞前面：a [C:big] apple 一個大蘋果"],
  e:`[S:I] [V:eat] [O:breakfast] [P:at home] [T:every day].|我每天在家吃早餐。|🍳
[Q:Are] [S:you] [C:hungry]?|你餓嗎？|😋
[Q:Where] do [S:you] [V:live]?|你住哪裡？|🏠
a [C:big] apple|一個大蘋果|🍎`,
  d:[{o:"[S:I] [V:work] [P:in Taipei].",z:"我在台北工作。"},{o:"[S:We] [V:play] [P:in the park] [T:on Sunday].",z:"我們星期天在公園玩。"},{o:"[Q:Where] [Q:do] [S:you] [V:live]?",z:"你住哪裡？"}]},
 {t:"為什麼動詞會變？",r:"s3-63",x:[
  "🀄 中文動詞不會變，用小字表示時間：我[T:昨天]走路、我[T:在]走路、我[T:會]走路",
  "🔤 英文讓動詞自己變形：",
  "[V:walk] 走 → [V:walk][s:ed] 走了 → am [V:walk][s:ing] 正在走 → will [V:walk] 將會走",
  "👤 he / she / it 現在式動詞要加 s：[S:He] [V:walk][s:s].",
  "⚠️ 中文「我走路、他走路」一樣；英文 I walk、he walk[s:s] 不一樣，這是中文母語者最常忘記的！"],
  e:`I [V:walk][s:ed].|我走路了。|🚶
I am [V:walk][s:ing].|我正在走路。|🚶
I will [V:walk].|我會走路去。|🚶
[S:He] [V:walk][s:s].|他（習慣）走路。|🚶`,
  d:[{b:"[r:walk][s:ed]",z:"走了（過去）",e:"🚶"},{b:"[r:walk][s:s]",z:"他走路：He ___",e:"🚶"},{b:"[r:play][s:ing]",z:"正在玩",e:"🎮"}]}
];
})(window.APP_DATA);
