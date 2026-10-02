/* 拼讀練習（依 Jolly Phonics 順序 s a t i p n → c k e h r m d → g o u l f b …）＋逐字中文對照＋真人老師影片 */
(function(D){
/* 每個字母的聲音：拼音提示（泡泡用，≤15 字） */
D.phHint = {s:"像拼音 s，蛇的聲音 ssss",a:"像 a 和 ê 中間，嘴張大",ah:"就是拼音 a（ㄚ）",t:"像拼音 t，輕輕的",i:"很短的拼音 i",p:"像拼音 p，噴一口氣",n:"像拼音 n，ㄋ～",c:"像拼音 k",k:"像拼音 k",e:"像拼音 ê（ㄝ）",h:"像拼音 h，輕輕哈氣",r:"像拼音 r，嘴巴嘟起來",m:"像拼音 m，閉嘴嗯～",d:"像拼音 d",g:"像拼音 g",o:"像拼音 a，嘴巴張大",u:"很短的拼音 a",l:"像拼音 l",f:"像拼音 f，ㄈ～",b:"像拼音 b，喉嚨震動",j:"像拼音 zh，嘴巴嘟起",v:"咬下唇，喉嚨震動",w:"像拼音 w，嘴巴嘟起",x:"像 k＋s 連起來"};
/* 組：t 標題、n 說明、cv=拼音一樣的暖身、w 字：英文|中文|emoji|生活例子|例句|逐字中文 */
D.blendSets = [
 {t:"暖身 1：跟拼音一模一樣",n:"b、m、p、f、d ＋ a",cv:1,w:`ba|像拼音 bà|👨|爸爸的「爸」
ma|像拼音 mā|👩|媽媽的「媽」
pa|像拼音 pà|😨|害怕的「怕」
fa|像拼音 fā|💰|發財的「發」
da|像拼音 dà|🐘|大象的「大」`},
 {t:"暖身 2：跟拼音一模一樣",n:"t、n、l、g、k ＋ a",cv:1,w:`ta|像拼音 tā|🧑|他們的「他」
na|像拼音 ná|✋|拿東西的「拿」
la|像拼音 lā|🫸|拉門的「拉」
ga|像拼音 gā|🦆|鴨子嘎嘎叫
ka|像拼音 kǎ|💳|卡片的「卡」`},
 {t:"第 1 組：s a t i p n",n:"Jolly Phonics 第一組字母",w:`pin|別針|📌|衣服上的別針|I have a pin.|我/有/一個/別針
sit|坐|🪑|請坐在椅子上|Please sit.|請/坐
tap|水龍頭|🚰|廚房的水龍頭|I see a tap.|我/看見/一個/水龍頭
ant|螞蟻|🐜|地上有螞蟻|I see an ant.|我/看見/一隻/螞蟻
pan|平底鍋|🍳|媽媽煎蛋的鍋子|Mom has a pan.|媽媽/有/一個/平底鍋`},
 {t:"第 2 組：加上 c k e h r m d",n:"Jolly Phonics 第二組字母",w:`cat|貓|🐱|阿嬤家的貓|I have a cat.|我/有/一隻/貓
hat|帽子|🎩|爸爸的帽子|Dad has a hat.|爸爸/有/一頂/帽子
red|紅色|🔴|紅包是紅色的|It is red.|它/是/紅色
hen|母雞|🐔|農場的母雞|I see a hen.|我/看見/一隻/母雞
map|地圖|🗺️|旅行用的地圖|I have a map.|我/有/一張/地圖`},
 {t:"第 3 組：加上 g o u l f b",n:"Jolly Phonics 第三組字母",w:`dog|狗|🐶|鄰居的小狗|I have a dog.|我/有/一隻/狗
bag|包包|👜|媽媽的包包|I have a bag.|我/有/一個/包包
sun|太陽|☀️|早上的太陽|The sun is hot.|那個/太陽/是/熱的
cup|杯子|🥤|喝茶的杯子|I have a cup.|我/有/一個/杯子
pig|豬|🐷|豬肉的豬|I see a pig.|我/看見/一隻/豬`},
 {t:"第 4 組：再多練幾個",n:"用學過的字母拼新字",w:`bed|床|🛏️|睡覺的床|I have a bed.|我/有/一張/床
bus|公車|🚌|坐公車去上班|I take a bus.|我/搭/一台/公車
fan|電風扇|🪭|夏天開電風扇|I have a fan.|我/有/一台/電風扇
leg|腿|🦵|走路用的腿|My leg hurts.|我的/腿/痛
hot|熱|🔥|熱湯很燙|It is hot.|它/是/熱的`},
 {t:"第 5 組：生活裡的字",n:"錢、家人、吃的",w:`ten|十|🔟|十塊錢|I have ten dollars.|我/有/十/元
mom|媽媽|👩|我的媽媽|I love my mom.|我/愛/我的/媽媽
nut|堅果|🥜|花生是堅果|I eat a nut.|我/吃/一顆/堅果
lip|嘴唇|👄|塗口紅的嘴唇|This is my lip.|這/是/我的/嘴唇
pot|鍋子|🍲|煮湯的鍋子|Mom has a pot.|媽媽/有/一個/鍋子`},
 {t:"第 6 組：加上 j v w x",n:"Jolly Phonics 後面的字母",w:`jam|果醬|🍓|麵包抹果醬|I like jam.|我/喜歡/果醬
van|廂型車|🚐|搬家的廂型車|Dad has a van.|爸爸/有/一台/廂型車
web|蜘蛛網|🕸️|牆角的蜘蛛網|I see a web.|我/看見/一個/蜘蛛網
six|六|6️⃣|六顆蛋|I have six eggs.|我/有/六顆/蛋
fox|狐狸|🦊|童話裡的狐狸|I see a fox.|我/看見/一隻/狐狸`}
];
/* 例句裡每個字為什麼在那裡（≤15 字） */
D.why = {i:"I ＝ 我，誰在說話",have:"have ＝ 有",has:"一個人（他、她）用 has",a:"一個東西，前面加 a",an:"a 開頭的字，用 an",see:"see ＝ 看見",the:"the ＝ 那個（只有一個）",is:"is ＝ 是",my:"my ＝ 我的",it:"it ＝ 它，那個東西",please:"please ＝ 請，很有禮貌",mom:"Mom ＝ 媽媽",dad:"Dad ＝ 爸爸",take:"take ＝ 搭（車）",love:"love ＝ 愛",eat:"eat ＝ 吃",this:"this ＝ 這個",like:"like ＝ 喜歡",hurts:"hurts ＝ 痛",dollars:"dollars ＝ 元（錢）",eggs:"很多個蛋，eggs 加 s"};
/* 逐字中文對照用的小字典（單字表以外的字） */
D.gloss = {"305":"305","a":"一個","about":"大約","again":"再一次","aisle":"走道","allergic":"過敏","am":"是","ambulance":"救護車","an":"一個","anything":"任何東西","are":"是","ask":"請","at":"在","ate":"吃了","bags":"袋子","box":"盒子","boxes":"盒子","by":"用","bye":"再見","calling":"打電話","can":"可以","can't":"不能","card":"卡","care":"保重","careful":"小心","cash":"現金","cats":"貓","check":"帳單","check-out":"退房","children":"小孩","chinese":"中文","cute":"可愛","days":"天","delicious":"好吃","discount":"折扣","doctor":"醫生","does":"（問）","doesn't":"不","dogs":"狗","dollars":"元","don't":"不","down":"下","drive":"開車","eating":"正在吃","english":"英文","enjoy":"享受","every":"每","excuse":"原諒","fever":"發燒","fine":"很好","fire":"火","fitting":"試衣","for":"給","forget":"忘記","fork":"叉子","free":"有空","french":"法文","from":"從","full":"飽","gate":"登機門","going":"去","he":"他","he's":"他是","headache":"頭痛","her":"她的","hi":"嗨","him":"他","his":"他的","hold":"等","hurts":"痛","i":"我","i'd":"我想","i'll":"我會","i'm":"我是","ice":"冰","iced":"冰的","idea":"主意","in":"在","is":"是","isn't":"不是","it":"它","it's":"它是","job":"工作","just":"只是","late":"遲到","later":"等一下","learning":"正在學","leave":"留下","left":"左邊","let's":"我們來","likes":"喜歡","lin":"林","london":"倫敦","looking":"看","lost":"不見了","luggage":"行李","me":"我","mean":"意思","medicine":"藥","meet":"認識","men":"男人","menu":"菜單","message":"留言","minutes":"分鐘","much":"多","music":"音樂","my":"我的","name":"名字","next":"旁邊／下一個","nice":"很好","not":"不","number":"號碼","o'clock":"點鐘","ok":"好","on":"在","or":"還是","our":"我們的","out":"出","over":"那邊","passport":"護照","password":"密碼","peanuts":"花生","pharmacy":"藥局","photo":"照片","playing":"正在玩","police":"警察","problem":"問題","question":"問題","raining":"下雨","really":"真的","receipt":"收據","recommend":"推薦","reservation":"預訂","rest":"休息","she":"她","shirt":"襯衫","shopping":"購物","show":"給…看","since":"從…起","sleeping":"正在睡","slowly":"慢慢地","smaller":"小一點","snakes":"蛇","so":"非常","some":"一些","spicy":"辣","stay":"待","stop":"站","straight":"直直地","students":"學生","sunny":"晴天","sure":"當然","taipei":"台北","taiwan":"台灣","teacher":"老師","thank":"謝謝","thanks":"謝謝","the":"那個","they":"他們","to":"到","together":"一起","tom":"湯姆","too":"也","travel":"旅行","trip":"旅程","try":"試","turn":"轉","under":"在下面","understand":"懂","us":"我們","vacation":"度假","vegetarian":"吃素","walked":"走了","wallet":"錢包","was":"是（過去）","we":"我們","welcome":"歡迎","went":"去了","what's":"什麼是","who's":"誰是","wi-fi":"Wi-Fi","will":"會","works":"工作","would":"想要","years":"歲","you":"你","you're":"你是","your":"你的","have":"有","has":"有","do":"（問）／做","go":"去","like":"喜歡","this":"這個","that":"那個","how":"怎麼","what":"什麼","where":"哪裡","see":"看見","take":"拿／搭","eggs":"蛋","pin":"別針","tap":"水龍頭","ant":"螞蟻","pan":"平底鍋","hen":"母雞","nut":"堅果","lip":"嘴唇","pot":"鍋子","jam":"果醬","van":"廂型車","web":"蜘蛛網","fox":"狐狸","love":"愛","eat":"吃","mom":"媽媽","dad":"爸爸","old":"歲／老","good":"好","very":"非常","right":"右邊／對","get":"到／拿"};
/* 真人老師影片（都已確認存在） */
D.videos = {
 letters:[{id:"MfHyQ9cZpQw",t:"字母發音 A–Z（中文講解）",c:"茱莉英語 Julie English"},{id:"MB2hR5uFCJY",t:"26 個字母的自然拼讀發音（中文講解）",c:"小飛英語"}],
 phonics:[{id:"MB2hR5uFCJY",t:"26 個字母的自然拼讀發音（中文講解）",c:"小飛英語"},{id:"9q3kXJ-56r8",t:"Learning the Letter Sounds in Jolly Phonics（英文）",c:"Jolly Learning 官方"}],
 blend:[{id:"4icYb-aTw9A",t:"Jolly Phonics 第一組 s a t i p n（英文歌）",c:"Jolly Learning 官方"},{id:"MB2hR5uFCJY",t:"26 個字母的自然拼讀發音（中文講解）",c:"小飛英語"}],
 sentences:[{id:"Xb__hvuP2Jc",t:"零基礎學英語 第 1 課（中文講解）",c:"星荣英语笔记"}]
};
})(window.APP_DATA);
/* 周育如老師式唸法：字母、字母、聲音、聲音（a a 唉 唉 [æ]）。口訣字取自她課堂字幕（見 zhou-yuru-notes.md）；e＝字後唸法 */
(function(D){
D.zhou = {a:{c:"唉",k:"æ"},b:{c:"波",k:"b"},c:{c:"咳",k:"k"},d:{c:"的",k:"d"},e:{c:"哎",k:"ɛ"},f:{c:"敷",k:"f"},g:{c:"個",k:"g"},h:{c:"和",k:"h"},i:{c:"儀",k:"ɪ"},j:{c:"聚",k:"dʒ"},k:{c:"殼",k:"k"},l:{c:"勒",e:"嗷",k:"l"},m:{c:"麼",e:"摁",k:"m"},n:{c:"呢",e:"嗯",k:"n"},o:{c:"啊",k:"ɑ"},p:{c:"迫",k:"p"},q:{c:"括",k:"kw"},r:{c:"弱",e:"爾",k:"r"},s:{c:"絲",k:"s"},t:{c:"特",k:"t"},u:{c:"阿",k:"ʌ"},v:{c:"嗚",k:"v"},w:{c:"戊",k:"w"},x:{c:"克斯",k:"ks"},y:{c:"葉",k:"j"},z:{c:"日",k:"z"},ah:{c:"啊",k:"ɑ"}};
D.blendSets.forEach((s,i)=>{ s.L = [null,null,"satipn","ckehrmd","goulfb","","","jvwx"][i]; });
/* 為什麼母音這樣唸（第一次出現時說明） */
D.vowelWhy = {a:"夾在中間的 a，唸短短的「唉」",i:"夾在中間的 i，唸短短的「儀」",e:"夾在中間的 e，唸短短的「哎」",o:"夾在中間的 o，唸「啊」",u:"夾在中間的 u，唸短短的「阿」"};
/* 自然發音每一課的「為什麼」（一句一句講，每句 ≤15 字） */
D.phonWhy = [
 ["a 夾在兩個子音中間","就唸短短的「唉」喔 [æ]","嘴巴張大，像要咬蘋果喔","例：cat ＝ 咳＋唉＋特"],
 ["e 夾在兩個子音中間","唸短短的「哎」[ɛ]","例：bed ＝ 波＋哎＋的"],
 ["i 夾在兩個子音中間","唸短短的「儀」[ɪ]","很短很鬆，不要拉長喔","例：pig ＝ 迫＋儀＋個"],
 ["o 夾在兩個子音中間","唸「啊」[ɑ]，嘴巴張大","例：dog ＝ 的＋啊＋個"],
 ["u 夾在兩個子音中間","唸短短的「阿」[ʌ]","嘴巴微微張開就好囉","例：cup ＝ 咳＋阿＋迫"],
 ["一個字母一個聲音","先慢慢唸：咳…唉…特","再快快唸：咳唉特","連起來就是 cat 耶 🐱"],
 ["b 波、e 哎、d 的","波＋哎，連快 → be","再加 d「的」→ bed","pig 也一樣：迫儀個"],
 ["d 的、o 啊、g 個","的＋啊，連快 → do","再加 g「個」→ dog 🐶"],
 ["字尾的 e 不發音 🤫","但它超有魔法的喔 ✨","讓前面的 a 唸名字「欸」","所以 cap 加 e → cape"],
 ["字尾的 e 不發音 🤫","它讓 i 唸名字「艾」","所以 kit 加 e → kite"],
 ["字尾的 e 不發音 🤫","o 唸名字「歐」","u 唸名字「優」","hop→hope，cub→cube"],
 ["兩個母音走在一起","第一個唸自己的名字","e 的名字是「ㄧ」","所以 ee、ea 唸「ㄧ～」"],
 ["兩個母音走在一起","a 唸自己的名字「欸」","後面的 i、y 不出聲","rain、day 都是「欸」"],
 ["兩個母音走在一起","o 唸自己的名字「歐」","後面的 a 不出聲","boat ＝ 波＋歐＋特"],
 ["s 和 h 手牽手","變成一個新的聲音喔","唸「噓」，像叫人安靜那樣","不是 s、h 分開唸喔"],
 ["c 和 h 手牽手","變成新聲音，像「去」","嘴巴要嘟起來喔","不是 c、h 分開唸喔"],
 ["t 和 h 手牽手","舌頭放在牙齒中間","輕輕吹氣就好囉","中文沒有這個音，慢慢練喔"],
 ["c 和 k 都是「咳」","放在一起只唸一次","ng 在字尾是鼻音","像拼音 ang 的 ng"],
 ["wh 的 h 不出聲","所以唸「屋」[w]","ph 兩個合起來","唸「敷」[f]，就是 f"],
 ["兩個 o 在一起","常唸長長的「ㄨ～」","像 moon 🌙","有時短短的，像 book"],
 ["o 和 u 手牽手","變成「嗷」的聲音","像被踩到喊「喔！」","例：house、cow"],
 ["母音後面有 r","r 會拉著母音捲舌","ar 唸「阿ㄦ」","or 唸「歐ㄦ」"],
 ["e、i、u 碰到 r","都變成一樣的「ㄦ」","所以 her、bird、fur","都有「ㄦ」的聲音"],
 ["兩個子音連在一起","兩個聲音都要唸","中間不要加「ㄜ」喔","b＋l 快快唸 → bl"],
 ["子音後面接 r","兩個音快快連起來","r 要嘟嘴喔","f＋r → fr，像 frog"],
 ["s 開頭的連音","先發「絲」的氣","馬上接下一個音","s＋t → st，像 stop"]
];
const Z = {label:"📺 看周育如老師教", list:[
 {u:"https://www.youtube.com/watch?v=eLSOXxHa8Ps", t:"K.K 音標／自然發音（完整原版）", c:"周育如 · YouTube"},
 {u:"https://www.bilibili.com/video/BV1fy4y1V7gE/", t:"4K 修復版", c:"周育如 · Bilibili"},
 {u:"https://www.bilibili.com/video/BV1N5EW6dE2Z/", t:"每個音分開教（47 集）", c:"周育如 · Bilibili"}]};
const yt = id => "https://www.youtube.com/watch?v="+id;
const R = (label, a) => ({label, list:a.map(v=>({u:yt(v[0]), t:v[1], c:v[2]}))});
const julie=["MfHyQ9cZpQw","字母發音 A–Z（四個步驟）","茱莉英語 Julie English"], xf=["MB2hR5uFCJY","26 個字母的自然拼讀發音","小飛英語"], teresa=["Fd5FmpfFJvU","口訣影片 A~Z 自然發音","Teresa 的英文俱樂部"],
  jolly1=["4icYb-aTw9A","Jolly Phonics 第一組 s a t i p n（英文歌）","Jolly Learning 官方"], ab=["Y7ClQc_4Txg","CVC Words：c-a-t 連起來（英文）","Alphablocks（BBC）"], xr=["Xb__hvuP2Jc","零基礎學英語 第 1 課","星榮英語筆記"];
D.vid = {letters:[Z, R("📺 看真人老師教",[julie,xf])], phonics:[Z, R("📺 看真人老師教",[teresa,xf])], blend:[Z, R("📺 看真人老師教",[ab,jolly1])], sentences:[R("📺 看真人老師教",[xr])]};
})(window.APP_DATA);
