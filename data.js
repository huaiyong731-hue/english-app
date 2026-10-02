/* 課程資料  格式：英文|中文|emoji|中文諧音 */
window.APP_DATA = {
letters: [
 ["A","ay","欸","ㄝ（嘴巴張大）","apple","蘋果","🍎","艾剖","A：像一座山，兩條斜線加中間一橫。a：先畫小圓圈，右邊再加一豎。"],
 ["B","bee","逼","ㄅ","ball","球","⚽","波","B：一條直線，右邊兩個半圓。b：一條長直線，右下角一個小圓。"],
 ["C","see","西","ㄎ","cat","貓","🐱","凱特","C 和 c：像一個缺右邊的圓，從上往左繞下來。"],
 ["D","dee","滴","ㄉ","dog","狗","🐶","搭格","D：一條直線，右邊一個大半圓。d：先畫小圓，右邊一條長直線。"],
 ["E","ee","依","ㄝ（短）","egg","蛋","🥚","欸格","E：一條直線加三橫。e：先畫一橫，再往上繞一圈。"],
 ["F","ef","欸夫","ㄈ","fish","魚","🐟","費許","F：一條直線加兩橫（上面、中間）。f：像拐杖，上面彎，中間一橫。"],
 ["G","gee","基","ㄍ","goat","山羊","🐐","勾特","G：像 C，最後往裡面勾一小橫。g：小圓圈，右邊往下勾尾巴。"],
 ["H","aitch","欸取","ㄏ（哈一口氣）","hat","帽子","🎩","黑特","H：兩條直線，中間一橫。h：長直線，右邊一個小拱門。"],
 ["I","eye","艾","ㄧ（短）","insect","昆蟲","🐛","引塞克特","I：一條直線（上下可加短橫）。i：短直線，上面一個點。"],
 ["J","jay","接","ㄐ","juice","果汁","🧃","啾斯","J：像魚鉤，往左下彎。j：往下彎的鉤，上面一個點。"],
 ["K","kay","開","ㄎ","key","鑰匙","🔑","奇","K：一條直線，右邊一個「<」。k：長直線，右邊小「<」。"],
 ["L","el","欸歐","ㄌ","lion","獅子","🦁","賴恩","L：一條直線，下面往右一橫。l：一條長直線。"],
 ["M","em","欸姆","ㄇ","moon","月亮","🌙","木恩","M：兩座山峰。m：兩個小拱門。"],
 ["N","en","恩","ㄋ","nose","鼻子","👃","諾斯","N：直線、斜線、直線。n：一個小拱門。"],
 ["O","oh","歐","ㄚ（短）","octopus","章魚","🐙","阿克特帕斯","O 和 o：一個圓圈。"],
 ["P","pee","批","ㄆ","pig","豬","🐷","匹格","P：一條直線，右上一個半圓。p：往下的直線，右上小圓。"],
 ["Q","cue","克優","ㄎㄨ","queen","女王","👸","塊恩","Q：圓圈右下加一小撇。q：小圓，右邊往下直線。"],
 ["R","are","阿爾","ㄖ（捲舌）","rabbit","兔子","🐰","瑞比特","R：像 P，再加一條斜腿。r：短直線，右上一個小彎。"],
 ["S","ess","欸斯","ㄙ","sun","太陽","☀️","桑","S 和 s：像一條蛇，彎兩次。"],
 ["T","tee","踢","ㄊ","tiger","老虎","🐯","泰格","T：上面一橫，中間一豎。t：一豎加一小橫，底部往右彎。"],
 ["U","you","優","ㄚ（短）","umbrella","雨傘","☂️","阿姆布瑞拉","U 和 u：像一個杯子，u 右邊多一小豎。"],
 ["V","vee","威","ㄈ（咬下唇，喉嚨震動）","van","廂型車","🚐","凡","V 和 v：像打勾，兩條斜線在下面相交。"],
 ["W","double you","達布溜","ㄨ","watch","手錶","⌚","襪取","W 和 w：像兩個 V 連在一起。"],
 ["X","ex","欸克斯","克斯","box","盒子","📦","巴克斯","X 和 x：兩條斜線交叉，像打叉。"],
 ["Y","why","歪","ㄧ","yellow","黃色","💛","耶摟","Y：像一個 V 下面接一條直線。y：v 右邊往下拉長。"],
 ["Z","zee","利（捲舌日一）","ㄗ（喉嚨震動）","zebra","斑馬","🦓","利布拉","Z 和 z：上一橫、斜線、下一橫，像閃電。"]
],
phonics: [
 {t:"短母音 a",f:"a",r:"a 在短字裡唸 /æ/，像「ㄝ」但嘴巴張大一點。",w:"cat|貓|🐱|凱特\nhat|帽子|🎩|黑特\nbag|包包|👜|貝格\nmap|地圖|🗺️|咩普"},
 {t:"短母音 e",f:"e",r:"e 在短字裡唸 /ɛ/，像「ㄝ」。",w:"bed|床|🛏️|貝德\npen|筆|🖊️|盆\nred|紅色|🔴|瑞德\nten|十|🔟|天"},
 {t:"短母音 i",f:"i",r:"i 在短字裡唸 /ɪ/，像很短的「ㄧ」。",w:"pig|豬|🐷|匹格\nsit|坐|🪑|西特\nbig|大|🐘|逼格\nsix|六|6️⃣|色克斯"},
 {t:"短母音 o",f:"o",r:"o 在短字裡唸 /ɑ/，像「ㄚ」。",w:"dog|狗|🐶|搭格\nhot|熱|🔥|哈特\nbox|盒子|📦|巴克斯\ntop|頂端|🔝|踏普"},
 {t:"短母音 u",f:"u",r:"u 在短字裡唸 /ʌ/，像短短的「ㄚ」。",w:"sun|太陽|☀️|桑\ncup|杯子|🥤|卡普\nbus|公車|🚌|巴斯\nrun|跑|🏃|讓"},
 {t:"拼拼看 1（a）",f:"a",r:"把三個音連起來：c + a + t → cat。先慢慢唸，再快快唸！",w:"c-a-t|貓|🐱|凱特\nm-a-p|地圖|🗺️|咩普\nf-a-n|電風扇|🪭|飯\nr-a-t|老鼠|🐀|瑞特"},
 {t:"拼拼看 2（e、i）",f:"[ei]",r:"b + e + d → bed，p + i + g → pig。",w:"b-e-d|床|🛏️|貝德\nh-e-n|母雞|🐔|恨\np-i-g|豬|🐷|匹格\nl-i-p|嘴唇|👄|利普"},
 {t:"拼拼看 3（o、u）",f:"[ou]",r:"d + o + g → dog，b + u + g → bug。",w:"d-o-g|狗|🐶|搭格\np-o-t|鍋子|🍲|帕特\nb-u-g|蟲|🐛|巴格\nn-u-t|堅果|🥜|那特"},
 {t:"魔法 e：a_e",f:"a_e",r:"字尾有 e 不發音，但它讓前面的 a 唸自己的名字「欸」。",w:"cake|蛋糕|🍰|給克\nname|名字|📛|內姆\ngame|遊戲|🎮|給姆\nlake|湖|🏞️|雷克"},
 {t:"魔法 e：i_e",f:"i_e",r:"字尾 e 讓 i 唸成「艾」。",w:"bike|腳踏車|🚲|拜克\nfive|五|5️⃣|費夫\nkite|風箏|🪁|凱特\ntime|時間|⏰|泰姆"},
 {t:"魔法 e：o_e、u_e",f:"[ou]_e",r:"字尾 e 讓 o 唸「歐」，u 唸「優」。",w:"home|家|🏠|厚姆\nnose|鼻子|👃|諾斯\nbone|骨頭|🦴|波恩\ncute|可愛|🥰|Q特"},
 {t:"長母音 ee、ea",f:"ee|ea",r:"ee 和 ea 都唸長長的「ㄧ～」。",w:"tree|樹|🌳|垂\nbee|蜜蜂|🐝|逼\ntea|茶|🍵|踢\neat|吃|🍽️|依特"},
 {t:"長母音 ai、ay",f:"ai|ay",r:"ai 和 ay 都唸「欸～」。",w:"rain|雨|🌧️|瑞恩\ntrain|火車|🚆|吹恩\nday|天|🌞|得\nplay|玩|🎮|普雷"},
 {t:"長母音 oa、ow",f:"oa|ow",r:"oa 和 ow 常唸「歐～」。",w:"boat|船|⛵|波特\ncoat|外套|🧥|扣特\nsnow|雪|❄️|斯諾\nroad|路|🛣️|肉德"},
 {t:"組合音 sh",f:"sh",r:"sh 唸「噓」，像叫人安靜的聲音。",w:"ship|船|🚢|西普\nfish|魚|🐟|費許\nshoe|鞋子|👞|咻\nshop|商店|🏪|夏普"},
 {t:"組合音 ch",f:"ch",r:"ch 唸「ㄑ」＋嘟嘴，像「去」。",w:"chair|椅子|🪑|切爾\nchick|小雞|🐤|七克\nlunch|午餐|🍱|蘭取\ncheese|起司|🧀|起斯"},
 {t:"組合音 th",f:"th",r:"th：舌頭輕輕放在上下牙齒中間，吹氣。",w:"three|三|3️⃣|斯瑞\nthink|想|🤔|辛克\nmouth|嘴巴|👄|冒斯\nbath|洗澡|🛁|巴斯"},
 {t:"組合音 ck、ng",f:"ck|ng",r:"ck 唸「ㄎ」；ng 是鼻音，像「ㄥ」。",w:"duck|鴨子|🦆|達克\nsock|襪子|🧦|沙克\nring|戒指|💍|令\nking|國王|🤴|慶"},
 {t:"組合音 wh、ph",f:"wh|ph",r:"wh 唸「ㄨ」；ph 唸「ㄈ」。",w:"whale|鯨魚|🐋|威歐\nwhite|白色|⚪|懷特\nphone|電話|📱|風\nphoto|照片|📷|佛頭"},
 {t:"組合音 oo",f:"oo",r:"oo 常唸長「ㄨ～」（moon），有時唸短「ㄨ」（book）。",w:"moon|月亮|🌙|木恩\nfood|食物|🍲|夫德\nbook|書|📖|布克\ncook|煮|🍳|庫克"},
 {t:"組合音 ou、ow",f:"ou|ow",r:"ou 和 ow 常唸「ㄠ」，像被踩到喊「喔！」。",w:"house|房子|🏡|號斯\nmouse|老鼠|🐭|冒斯\ncow|牛|🐮|考\ndown|往下|⬇️|黨"},
 {t:"捲舌 ar、or",f:"ar|or",r:"ar 唸「阿ㄦ」；or 唸「歐ㄦ」，舌頭往後捲。",w:"car|汽車|🚗|卡\nstar|星星|⭐|斯答\nfork|叉子|🍴|佛克\nhorse|馬|🐴|霍斯"},
 {t:"捲舌 er、ir、ur",f:"er|ir|ur",r:"er、ir、ur 都唸「ㄦ」。",w:"sister|姊妹|👧|西斯特\nbird|鳥|🐦|伯德\ngirl|女孩|👧|哥兒\nnurse|護士|👩‍⚕️|呢斯"},
 {t:"連音 bl、cl、fl、pl",f:"bl|cl|fl|pl",r:"兩個子音快速連在一起唸，中間不要加「ㄜ」。",w:"blue|藍色|🔵|布魯\nclock|時鐘|🕰️|克拉克\nflag|旗子|🚩|夫雷格\nplane|飛機|✈️|普雷恩"},
 {t:"連音 br、cr、dr、fr",f:"br|cr|dr|fr",r:"子音後面接 r，嘴巴嘟起來。",w:"bread|麵包|🍞|布瑞德\ncrab|螃蟹|🦀|克瑞伯\ndrum|鼓|🥁|追姆\nfrog|青蛙|🐸|夫瑞格"},
 {t:"連音 st、sp、sn、sw",f:"st|sp|sn|sw",r:"s 開頭的連音：先發「ㄙ」再接下一個音。",w:"stop|停|🛑|斯踏普\nspoon|湯匙|🥄|斯噴\nsnake|蛇|🐍|斯內克\nswim|游泳|🏊|斯溫"}
],
words: [
 {t:"數字",w:`zero|零|0️⃣|日羅
one|一|1️⃣|萬
two|二|2️⃣|兔
three|三|3️⃣|斯瑞
four|四|4️⃣|佛
five|五|5️⃣|費夫
six|六|6️⃣|色克斯
seven|七|7️⃣|塞文
eight|八|8️⃣|欸特
nine|九|9️⃣|奈恩
ten|十|🔟|天
eleven|十一|🕚|依雷文
twelve|十二|🕛|特威歐夫
twenty|二十|2️⃣0️⃣|特溫替
thirty|三十|3️⃣0️⃣|瑟替
fifty|五十|5️⃣0️⃣|菲夫替
hundred|一百|💯|漢追德
thousand|一千|🔢|騷任德`},
 {t:"顏色",w:`red|紅色|🔴|瑞德
blue|藍色|🔵|布魯
yellow|黃色|🟡|耶摟
green|綠色|🟢|格林
black|黑色|⚫|布雷克
white|白色|⚪|懷特
orange|橘色|🟠|歐忍居
pink|粉紅色|🌸|品克
purple|紫色|🟣|波剖
brown|咖啡色|🟤|布朗
gray|灰色|🐘|格雷`},
 {t:"家人",w:`family|家人|👨‍👩‍👧|飛木哩
father|爸爸|👨|法惹
mother|媽媽|👩|媽惹
dad|爸（口語）|🧔|爹德
mom|媽（口語）|👩‍🦰|媽姆
brother|兄弟|👦|布拉惹
sister|姊妹|👧|西斯特
son|兒子|👦|桑
daughter|女兒|👧|多特
baby|嬰兒|👶|北比
grandfather|爺爺／外公|👴|格蘭法惹
grandmother|奶奶／外婆|👵|格蘭媽惹
husband|丈夫|🤵|哈斯本德
wife|妻子|👰|歪夫
friend|朋友|🧑‍🤝‍🧑|夫瑞恩德
man|男人|👨|滿
woman|女人|👩|務們
boy|男孩|👦|波伊
girl|女孩|👧|哥兒
child|小孩|🧒|柴爾德`},
 {t:"身體",w:`head|頭|🙂|嘿德
hair|頭髮|💇|黑爾
eye|眼睛|👁️|愛
ear|耳朵|👂|依爾
nose|鼻子|👃|諾斯
mouth|嘴巴|👄|冒斯
tooth|牙齒|🦷|兔斯
face|臉|😀|菲斯
hand|手|✋|漢德
arm|手臂|💪|阿姆
leg|腿|🦵|雷格
foot|腳|🦶|福特
finger|手指|☝️|芬格
back|背|🧍|貝克
stomach|肚子|🤰|斯塔麥克
heart|心臟|❤️|哈特`},
 {t:"食物飲料",w:`water|水|💧|哇特
rice|米飯|🍚|賴斯
bread|麵包|🍞|布瑞德
egg|蛋|🥚|欸格
milk|牛奶|🥛|謬克
tea|茶|🍵|踢
coffee|咖啡|☕|咖啡
apple|蘋果|🍎|艾剖
banana|香蕉|🍌|巴南那
meat|肉|🥩|米特
chicken|雞肉|🍗|七肯
fish|魚|🐟|費許
noodles|麵|🍜|努豆斯
soup|湯|🥣|蘇普
cake|蛋糕|🍰|給克
juice|果汁|🧃|啾斯
beer|啤酒|🍺|比爾
fruit|水果|🍇|夫如特
vegetable|蔬菜|🥦|菲吉特剖
sugar|糖|🍬|休格
salt|鹽|🧂|嗽特
breakfast|早餐|🍳|布瑞克菲斯特
lunch|午餐|🍱|蘭取
dinner|晚餐|🍽️|丁呢
food|食物|🍲|夫德`},
 {t:"動物",w:`dog|狗|🐶|搭格
cat|貓|🐱|凱特
bird|鳥|🐦|伯德
horse|馬|🐴|霍斯
cow|牛|🐮|考
pig|豬|🐷|匹格
duck|鴨子|🦆|達克
rabbit|兔子|🐰|瑞比特
mouse|老鼠|🐭|冒斯
tiger|老虎|🐯|泰格
lion|獅子|🦁|賴恩
elephant|大象|🐘|欸勒份特
monkey|猴子|🐵|忙奇
bear|熊|🐻|貝爾
snake|蛇|🐍|斯內克
sheep|羊|🐑|西普
panda|熊貓|🐼|潘達`},
 {t:"時間",w:`time|時間|⏰|泰姆
day|天／白天|🌞|得
night|晚上|🌙|奈特
morning|早上|🌅|摸寧
afternoon|下午|🌤️|阿夫特努恩
evening|傍晚|🌆|依夫寧
today|今天|📅|特得
tomorrow|明天|➡️|特摩肉
yesterday|昨天|⬅️|耶斯特得
now|現在|⏱️|鬧
week|星期／週|🗓️|威克
month|月|📆|曼斯
year|年|🎆|一爾
hour|小時|🕐|奧爾
minute|分鐘|⏲️|米逆特`},
 {t:"星期與月份",w:`Monday|星期一|1️⃣|慢得
Tuesday|星期二|2️⃣|兔斯得
Wednesday|星期三|3️⃣|溫斯得
Thursday|星期四|4️⃣|瑟斯得
Friday|星期五|5️⃣|富來得
Saturday|星期六|6️⃣|塞特得
Sunday|星期日|☀️|桑得
January|一月|⛄|接紐爾瑞
February|二月|💝|非布如爾瑞
March|三月|🌱|馬取
April|四月|🌷|欸普柔
May|五月|🌸|妹
June|六月|☔|啾恩
July|七月|🏖️|啾賴
August|八月|🍉|歐格斯特
September|九月|🍂|塞普天博
October|十月|🎃|阿克投博
November|十一月|🍁|諾文博
December|十二月|🎄|低森博`},
 {t:"地點",w:`home|家|🏠|厚姆
house|房子|🏡|號斯
school|學校|🏫|斯酷
hospital|醫院|🏥|哈斯批頭
hotel|飯店|🏨|厚帖歐
restaurant|餐廳|🍴|瑞斯特讓特
store|商店|🏪|斯多爾
bank|銀行|🏦|班克
station|車站|🚉|斯得訓
airport|機場|✈️|欸爾波特
park|公園|🌳|帕克
bathroom|廁所／浴室|🚻|巴斯如姆
street|街道|🛣️|斯粹特
city|城市|🏙️|西替
country|國家|🗺️|康垂
office|辦公室|🏢|歐菲斯
market|市場|🧺|馬克特
supermarket|超市|🛒|蘇潑馬克特
room|房間|🚪|如姆
kitchen|廚房|🧑‍🍳|氣稱`},
 {t:"日常物品與交通",w:`phone|電話／手機|📱|風
book|書|📖|布克
bag|包包|👜|貝格
money|錢|💰|馬尼
car|汽車|🚗|卡
bus|公車|🚌|巴斯
train|火車|🚆|吹恩
taxi|計程車|🚕|泰克西
bike|腳踏車|🚲|拜克
key|鑰匙|🔑|奇
door|門|🚪|多爾
window|窗戶|🪟|溫豆
table|桌子|🍽️|貼剖
chair|椅子|🪑|切爾
bed|床|🛏️|貝德
cup|杯子|🥤|卡普
TV|電視|📺|踢威
computer|電腦|💻|肯撲特
clothes|衣服|👕|克樓斯
shoes|鞋子|👟|修斯
hat|帽子|👒|黑特
ticket|票|🎫|踢克特
map|地圖|🗺️|咩普
umbrella|雨傘|☂️|阿姆布瑞拉`},
 {t:"天氣與自然",w:`weather|天氣|🌦️|威惹
sun|太陽|☀️|桑
rain|雨|🌧️|瑞恩
snow|雪|❄️|斯諾
wind|風|🌬️|溫德
cloud|雲|☁️|克勞德
sky|天空|🌌|斯蓋
tree|樹|🌳|垂
flower|花|🌼|夫勞爾`},
 {t:"常用小字",w:`yes|是／對|⭕|耶斯
no|不／沒有|❌|諾
please|請|🙏|普力斯
thank you|謝謝你|🙏|山Q
sorry|對不起|🙇|搜瑞
hello|你好|👋|哈囉
goodbye|再見|👋|古拜
what|什麼|❓|華特
who|誰|🧑|戶
where|哪裡|📍|威爾
when|什麼時候|🕰️|溫
why|為什麼|🤷|歪
how|怎樣／如何|🛠️|號
this|這個|👇|利斯（舌頭輕咬）
that|那個|👉|雷特（舌頭輕咬）
here|這裡|⬇️|嘿爾
there|那裡|↗️|累爾（舌頭輕咬）
and|和|➕|恩德
but|但是|↔️|巴特
very|非常|‼️|威瑞`},
 {t:"動詞（動作）",w:`be|是|🟰|逼
have|有|🤲|黑夫
go|去|🚶|狗
come|來|🫴|卡姆
eat|吃|🍽️|依特
drink|喝|🥤|准克
see|看見|👀|西
look|看|🔍|路克
watch|觀看|📺|襪取
listen|聽|🎧|里森
hear|聽到|👂|嘿爾
speak|說（語言）|🗣️|斯必克
talk|談話|💬|投克
say|說|💭|塞
read|讀|📖|瑞德
write|寫|✍️|瑞特
sleep|睡覺|😴|斯力普
walk|走路|🚶|握克
run|跑|🏃|讓
sit|坐|🪑|西特
stand|站|🧍|斯坦德
open|打開|📂|歐噴
close|關上|📁|克樓斯
buy|買|🛍️|拜
sell|賣|🏷️|塞歐
pay|付錢|💳|佩
give|給|🎁|給夫
take|拿|✊|貼克
make|做／製作|🛠️|妹克
do|做|✅|度
like|喜歡|👍|賴克
love|愛|❤️|拉夫
want|想要|🙋|旺特
need|需要|🆘|泥德
know|知道|💡|諾
think|想／認為|🤔|辛克
help|幫忙|🤝|嘿歐普
work|工作|💼|沃克
study|讀書|📚|斯塔迪
learn|學習|🧠|勒恩
play|玩|🎮|普雷
wait|等|⏳|威特
call|打電話／叫|📞|摳
live|住|🏘️|里夫
get|得到|📥|給特
put|放|📦|鋪特
wash|洗|🧼|哇許
cook|煮|🍳|庫克
swim|游泳|🏊|斯溫
sing|唱歌|🎤|醒`},
 {t:"形容詞（描述）",w:`good|好|👍|古德
bad|壞|👎|貝德
big|大|🐘|逼格
small|小|🐜|斯摩
hot|熱|🔥|哈特
cold|冷|🥶|扣德
new|新|✨|紐
old|舊／老|👴|歐德
young|年輕|🧒|楊
happy|快樂|😊|黑皮
sad|難過|😢|賽德
tired|累|😫|泰爾德
hungry|餓|😋|夯格瑞
thirsty|渴|🥵|瑟斯替
beautiful|漂亮|🌸|比優特佛
fast|快|⚡|費斯特
slow|慢|🐢|斯樓
long|長|📏|龍
short|短／矮|✂️|秀特
tall|高|🦒|投
easy|簡單|😌|依日
difficult|困難|😣|迪菲扣特
cheap|便宜|🪙|企普
expensive|貴|💎|依克斯噴西夫
clean|乾淨|🧽|克林
dirty|髒|🦨|德替
near|近|📍|尼爾
far|遠|🔭|法
right|對／右邊|✔️|瑞特
wrong|錯|❌|讓
busy|忙|🏃‍♀️|逼日
sick|生病|🤒|西克`}
],
sentences: [
 {t:"打招呼",w:`Hello!|你好！|👋|哈囉
Hi!|嗨！|🙋|嗨
Good morning.|早安。|🌅|古德 摸寧
Good afternoon.|午安。|🌤️|古德 阿夫特努恩
Good evening.|晚安（晚上見面時）。|🌆|古德 依夫寧
Good night.|晚安（睡前）。|🌙|古德 奈特
How are you?|你好嗎？|🙂|號 阿 優
I'm fine, thank you.|我很好，謝謝。|😊|愛姆 凡 山Q
And you?|你呢？|🫵|恩 優
Nice to meet you.|很高興認識你。|🤝|奈斯 兔 米特 優
See you later.|待會見。|👋|西 優 雷特
See you tomorrow.|明天見。|📅|西 優 特摩肉
Goodbye.|再見。|👋|古拜
Thank you very much.|非常謝謝你。|🙏|山Q 威瑞 馬取
You're welcome.|不客氣。|😊|又爾 威爾康`},
 {t:"自我介紹",w:`My name is Lin.|我的名字是林。|📛|麥 內姆 意斯 林
What's your name?|你叫什麼名字？|❓|華茲 又爾 內姆
I'm from Taiwan.|我來自台灣。|🇹🇼|愛姆 夫讓 台灣
Where are you from?|你來自哪裡？|🌏|威爾 阿 優 夫讓
I live in Taipei.|我住在台北。|🏙️|愛 里夫 因 台北
I'm fifty years old.|我五十歲。|🎂|愛姆 菲夫替 一爾斯 歐德
How old are you?|你幾歲？|🎂|號 歐德 阿 優
I'm a teacher.|我是老師。|👩‍🏫|愛姆 呃 踢切
What do you do?|你做什麼工作？|💼|華特 度 優 度
I have two children.|我有兩個小孩。|👧👦|愛 黑夫 兔 丘德忍
I like music.|我喜歡音樂。|🎵|愛 賴克 謬日克
I'm learning English.|我正在學英文。|📚|愛姆 勒寧 英格利許
My English is not good.|我的英文不好。|😅|麥 英格利許 意斯 那特 古德
I speak Chinese.|我說中文。|🗣️|愛 斯必克 柴泥斯
This is my wife.|這是我太太。|👩|利斯 意斯 麥 歪夫`},
 {t:"問問題",w:`What is this?|這是什麼？|❓|華特 意斯 利斯
Where is the bathroom?|廁所在哪裡？|🚻|威爾 意斯 惹 巴斯如姆
What time is it?|現在幾點？|⏰|華特 泰姆 意斯 意特
Can you help me?|你可以幫我嗎？|🤝|肯 優 嘿歐普 密
Do you speak Chinese?|你會說中文嗎？|🗣️|度 優 斯必克 柴泥斯
Can you say that again?|你可以再說一次嗎？|🔁|肯 優 塞 雷特 阿根
Please speak slowly.|請說慢一點。|🐢|普力斯 斯必克 斯樓力
I don't understand.|我聽不懂。|😵|愛 當特 安德斯坦德
What does this mean?|這是什麼意思？|🤔|華特 達斯 利斯 民
How do you say this in English?|這個用英文怎麼說？|💬|號 度 優 塞 利斯 因 英格利許
Is this OK?|這樣可以嗎？|👌|意斯 利斯 歐K
Who is that?|那是誰？|🧑|戶 意斯 雷特
Why?|為什麼？|🤷|歪
When?|什麼時候？|🕰️|溫
Really?|真的嗎？|😮|瑞力`},
 {t:"購物",w:`How much is this?|這個多少錢？|💲|號 馬取 意斯 利斯
It's too expensive.|太貴了。|💸|意茲 兔 依克斯噴西夫
Do you have a smaller one?|有小一點的嗎？|🤏|度 優 黑夫 呃 斯摩惹 萬
Can I try it on?|我可以試穿嗎？|👕|肯 愛 軋 意特 昂
I'm just looking.|我只是看看。|👀|愛姆 賈斯特 路克因
I'll take it.|我要買這個。|🛍️|愛歐 貼克 意特
Can I pay by card?|可以刷卡嗎？|💳|肯 愛 佩 拜 卡德
Cash, please.|我付現金。|💵|凱許 普力斯
Do you have this in red?|這個有紅色的嗎？|🔴|度 優 黑夫 利斯 因 瑞德
Can I have a bag?|可以給我一個袋子嗎？|🛍️|肯 愛 黑夫 呃 貝格
Where can I buy water?|哪裡可以買水？|💧|威爾 肯 愛 拜 哇特
Can you give me a discount?|可以打折嗎？|🏷️|肯 優 給夫 密 呃 迪斯靠特
I want this one.|我要這個。|👉|愛 旺特 利斯 萬
Can I get a receipt?|可以給我收據嗎？|🧾|肯 愛 給特 呃 瑞西特
Thank you, bye!|謝謝，再見！|👋|山Q 拜`},
 {t:"餐廳",w:`A table for two, please.|兩位，謝謝。|✌️|呃 貼剖 佛 兔 普力斯
Can I see the menu?|可以看菜單嗎？|📋|肯 愛 西 惹 咩妞
I would like this.|我想要這個。|👉|愛 伍德 賴克 利斯
Water, please.|請給我水。|💧|哇特 普力斯
No ice, please.|請不要加冰。|🧊|諾 艾斯 普力斯
Not spicy, please.|請不要辣。|🌶️|那特 斯拜西 普力斯
I'm vegetarian.|我吃素。|🥗|愛姆 威吉帖瑞恩
It's delicious!|很好吃！|😋|意茲 迪利瑕斯
The check, please.|請給我帳單。|🧾|惹 切克 普力斯
Can I have a fork?|可以給我一支叉子嗎？|🍴|肯 愛 黑夫 呃 佛克
One coffee, please.|一杯咖啡，謝謝。|☕|萬 咖啡 普力斯
To go, please.|外帶，謝謝。|🥡|兔 狗 普力斯
For here, please.|內用，謝謝。|🍽️|佛 嘿爾 普力斯
I'm full.|我吃飽了。|😌|愛姆 福
What do you recommend?|你推薦什麼？|⭐|華特 度 優 瑞可曼德`},
 {t:"問路",w:`Excuse me.|不好意思（打擾一下）。|🙋|依克斯Q斯 密
Where is the station?|車站在哪裡？|🚉|威爾 意斯 惹 斯得訓
How do I get there?|我要怎麼去那裡？|🧭|號 度 愛 給特 累爾
Go straight.|直走。|⬆️|狗 斯粹特
Turn left.|左轉。|⬅️|疼 雷夫特
Turn right.|右轉。|➡️|疼 瑞特
It's on the left.|在左邊。|👈|意茲 昂 惹 雷夫特
It's on the right.|在右邊。|👉|意茲 昂 惹 瑞特
Is it far?|很遠嗎？|🔭|意斯 意特 法
It's near here.|就在這附近。|📍|意茲 尼爾 嘿爾
I'm lost.|我迷路了。|😵‍💫|愛姆 羅斯特
Can you show me on the map?|可以在地圖上指給我看嗎？|🗺️|肯 優 秀 密 昂 惹 咩普
It's next to the bank.|在銀行旁邊。|🏦|意茲 奈克斯特 兔 惹 班克
How long does it take?|要多久時間？|⏳|號 龍 達斯 意特 貼克
Where is the bus stop?|公車站在哪裡？|🚏|威爾 意斯 惹 巴斯 斯踏普`},
 {t:"旅行",w:`Here is my passport.|這是我的護照。|🛂|嘿爾 意斯 麥 帕斯波特
I have a reservation.|我有預訂。|📝|愛 黑夫 呃 瑞惹威訓
I want to check in.|我要辦理入住。|🏨|愛 旺特 兔 切克 因
I want to check out.|我要退房。|🧳|愛 旺特 兔 切克 奧特
What time is breakfast?|早餐幾點？|🍳|華特 泰姆 意斯 布瑞克菲斯特
What's the Wi-Fi password?|Wi-Fi 密碼是什麼？|📶|華茲 惹 歪法伊 帕斯沃德
One ticket to London, please.|一張到倫敦的票，謝謝。|🎫|萬 踢克特 兔 倫登 普力斯
Where is gate five?|五號登機門在哪裡？|🛫|威爾 意斯 給特 費夫
I'm here on vacation.|我是來度假的。|🏖️|愛姆 嘿爾 昂 威K訓
I'll stay for five days.|我會待五天。|📅|愛歐 斯貼 佛 費夫 得斯
Please take me to this hotel.|請帶我到這家飯店。|🚕|普力斯 貼克 密 兔 利斯 厚帖歐
Can you take a photo for us?|可以幫我們拍張照嗎？|📷|肯 優 貼克 呃 佛頭 佛 阿斯
Where is the taxi stand?|計程車招呼站在哪裡？|🚖|威爾 意斯 惹 泰克西 斯坦德
My room is 305.|我的房間是 305。|🚪|麥 如姆 意斯 斯瑞 歐 費夫
My luggage is lost.|我的行李不見了。|🧳|麥 拉格居 意斯 羅斯特`},
 {t:"講電話",w:`Hello, this is Lin.|喂，我是林。|📞|哈囉 利斯 意斯 林
Who's calling?|請問是哪位？|❓|戶斯 摳林
Can I speak to Tom?|我可以跟湯姆說話嗎？|🗣️|肯 愛 斯必克 兔 湯姆
Please hold on.|請稍等。|⏳|普力斯 厚德 昂
He's not here.|他不在。|🚫|嘿斯 那特 嘿爾
Can I leave a message?|我可以留言嗎？|📝|肯 愛 力夫 呃 麥蘇居
I'll call you back.|我會回電給你。|🔁|愛歐 摳 優 貝克
Sorry, wrong number.|抱歉，打錯了。|🙇|搜瑞 讓 難博
What's your phone number?|你的電話號碼是多少？|📱|華茲 又爾 風 難博
I can't hear you.|我聽不到你。|🔇|愛 堪特 嘿爾 優`},
 {t:"緊急與身體不適",w:`Help!|救命！|🆘|嘿歐普
Call the police!|快報警！|👮|摳 惹 波力斯
Call an ambulance!|叫救護車！|🚑|摳 恩 安比優倫斯
I need a doctor.|我需要醫生。|👨‍⚕️|愛 泥德 呃 達克特
I'm sick.|我生病了。|🤒|愛姆 西克
It hurts here.|這裡痛。|🤕|意特 賀茲 嘿爾
I have a headache.|我頭痛。|🤯|愛 黑夫 呃 嘿帖克
I have a fever.|我發燒了。|🌡️|愛 黑夫 呃 菲佛
Where is the hospital?|醫院在哪裡？|🏥|威爾 意斯 惹 哈斯批頭
I lost my wallet.|我的錢包掉了。|👛|愛 羅斯特 麥 哇雷特
Fire!|失火了！|🔥|法爾
Be careful!|小心！|⚠️|逼 凱爾佛
I'm allergic to peanuts.|我對花生過敏。|🥜|愛姆 阿勒居克 兔 匹那茲
Please call my family.|請打電話給我家人。|👨‍👩‍👧|普力斯 摳 麥 飛木哩
Is there a pharmacy near here?|這附近有藥局嗎？|💊|意斯 累爾 呃 法馬西 尼爾 嘿爾`},
 {t:"日常與心情",w:`I'm hungry.|我餓了。|😋|愛姆 夯格瑞
I'm tired.|我累了。|😫|愛姆 泰爾德
I'm happy.|我很開心。|😊|愛姆 黑皮
I don't know.|我不知道。|🤷|愛 當特 諾
I think so.|我想是吧。|🤔|愛 辛克 搜
No problem.|沒問題。|👌|諾 撲拉布冷
Wait a minute.|等一下。|✋|威特 呃 米逆特
Let's go!|我們走吧！|🚶|雷茲 狗
Good job!|做得好！|👏|古德 甲布
Take care.|保重。|💖|貼克 凱爾`},
 {t:"時間與天氣",w:`It's three o'clock.|現在三點。|🕒|意茲 斯瑞 歐克拉克
What day is it today?|今天星期幾？|📅|華特 得 意斯 意特 特得
Today is Monday.|今天星期一。|1️⃣|特得 意斯 慢得
It's hot today.|今天很熱。|🥵|意茲 哈特 特得
It's cold.|好冷。|🥶|意茲 扣德
It's raining.|在下雨。|🌧️|意茲 瑞寧
It's sunny.|是晴天。|☀️|意茲 桑尼
See you on Friday.|星期五見。|5️⃣|西 優 昂 富來得
I'm late.|我遲到了。|⏰|愛姆 雷特
What's the weather like?|天氣怎麼樣？|🌦️|華茲 惹 威惹 賴克`}
],
grammar: [
 {t:"be 動詞：am / is / are",x:"be 動詞 ＝ 中文的「是」或「很」。\n• I（我）→ am\n• you（你）、we（我們）、they（他們）→ are\n• he（他）、she（她）、it（它）→ is",e:`I am happy.|我很快樂。|😊
You are my friend.|你是我的朋友。|🧑‍🤝‍🧑
She is a teacher.|她是老師。|👩‍🏫
They are here.|他們在這裡。|📍`,q:[["I ___ a student.","am|is|are",0],["He ___ tall.","are|is|am",1],["We ___ friends.","is|am|are",2]]},
 {t:"人稱代名詞：我、你、他",x:"• I ＝ 我　• you ＝ 你\n• he ＝ 他（男）　• she ＝ 她（女）\n• it ＝ 它／牠　• we ＝ 我們　• they ＝ 他們",e:`He is my father.|他是我爸爸。|👨
We are family.|我們是一家人。|👨‍👩‍👧
It is a cat.|牠是一隻貓。|🐱
They are students.|他們是學生。|🧑‍🎓`,q:[["「她」的英文是？","he|she|it",1],["「我們」的英文是？","we|they|you",0],["「他們」的英文是？","he|we|they",2]]},
 {t:"所有格：我的、你的",x:"• my 我的　• your 你的\n• his 他的　• her 她的\n• our 我們的　• their 他們的",e:`This is my bag.|這是我的包包。|👜
His name is Tom.|他的名字是湯姆。|📛
Her dog is cute.|她的狗很可愛。|🐶
Our house is big.|我們的房子很大。|🏡`,q:[["___ name is Lin.（我的）","I|my|me",1],["This is ___ car.（他的）","his|he|her",0],["___ mother is kind.（她的）","she|her|his",1]]},
 {t:"冠詞：a / an / the",x:"• a ＋ 子音開頭的字：a cat\n• an ＋ 母音（a e i o u）開頭：an apple\n• the ＝「那個」，說特定的東西",e:`a cat|一隻貓|🐱
an apple|一個蘋果|🍎
an egg|一顆蛋|🥚
The sun is hot.|太陽很熱。|☀️`,q:[["___ apple","a|an",1],["___ dog","a|an",0],["___ orange","a|an",1]]},
 {t:"複數：一個 vs 很多個",x:"兩個以上，字尾加 -s：cat → cats\ns、x、sh、ch 結尾加 -es：box → boxes\n特別的：man → men，child → children",e:`two cats|兩隻貓|🐱🐱
three boxes|三個盒子|📦📦📦
two men|兩個男人|👨👨
five children|五個小孩|🧒🧒`,q:[["two ___","dog|dogs",1],["three ___","box|boxs|boxes",2],["two ___（男人）","mans|men",1]]},
 {t:"現在簡單式：每天做的事",x:"說習慣、每天做的事。\n• I / you / we / they ＋ 動詞原形：I eat\n• he / she / it ＋ 動詞加 s：She eats",e:`I drink coffee every day.|我每天喝咖啡。|☕
She works in a bank.|她在銀行工作。|🏦
We live in Taipei.|我們住在台北。|🏙️
He likes dogs.|他喜歡狗。|🐶`,q:[["She ___ tea.","like|likes",1],["I ___ in Taipei.","live|lives",0],["He ___ every day.","walk|walks",1]]},
 {t:"否定句：不是、不要",x:"• be 動詞後加 not：I am not、is not（isn't）、are not（aren't）\n• 一般動詞前加 don't；he / she / it 用 doesn't",e:`I am not tired.|我不累。|🙂
It isn't cold.|天氣不冷。|🌤️
I don't like milk.|我不喜歡牛奶。|🥛
He doesn't eat meat.|他不吃肉。|🥩`,q:[["I ___ like fish.","don't|doesn't",0],["She ___ drink coffee.","don't|doesn't",1],["He ___ not busy.","is|are|do",0]]},
 {t:"疑問句：嗎？",x:"• be 動詞搬到最前面：Are you…? Is he…?\n• 一般動詞：前面加 Do；he / she / it 用 Does\n• 句尾語調往上揚 ↗",e:`Are you hungry?|你餓了嗎？|😋
Is she your sister?|她是你姊妹嗎？|👧
Do you like tea?|你喜歡茶嗎？|🍵
Does he speak English?|他說英文嗎？|🗣️`,q:[["___ you happy?","Is|Are|Do",1],["___ she like cats?","Do|Does",1],["___ you speak English?","Do|Does|Are",0]]},
 {t:"現在進行式：正在做",x:"「正在做」＝ am / is / are ＋ 動詞-ing\n例：eat → eating，sleep → sleeping",e:`I am eating.|我正在吃東西。|🍽️
She is sleeping.|她正在睡覺。|😴
They are playing.|他們正在玩。|🎮
It is raining.|正在下雨。|🌧️`,q:[["I am ___.","read|reading",1],["He ___ running.","is|are",0],["We are ___ TV.","watch|watching",1]]},
 {t:"過去式：已經發生的事",x:"過去的事：動詞加 -ed：walk → walked\n常見特別的：go → went，eat → ate，see → saw，have → had，is → was",e:`I walked to school.|我走路去學校。|🚶
She went home.|她回家了。|🏠
We ate noodles.|我們吃了麵。|🍜
It was cold yesterday.|昨天很冷。|🥶`,q:[["Yesterday I ___ TV.","watch|watched",1],["He ___ to the park.","go|went",1],["I ___ tired yesterday.","am|was",1]]},
 {t:"未來式：將要做",x:"• will ＋ 動詞原形 ＝ 將會\n• am / is / are going to ＋ 動詞 ＝ 打算要",e:`I will call you.|我會打給你。|📞
It will rain tomorrow.|明天會下雨。|🌧️
I am going to eat.|我要去吃飯了。|🍽️
We are going to travel.|我們打算去旅行。|✈️`,q:[["I ___ help you.","will|am",0],["She is going ___ sleep.","to|will",0],["They will ___ tomorrow.","come|comes",0]]},
 {t:"can：會、可以",x:"can ＋ 動詞原形 ＝ 會／能／可以\n否定：can't（不會）\n問句：Can you…?（你可以…嗎？）",e:`I can swim.|我會游泳。|🏊
Can you help me?|你可以幫我嗎？|🤝
I can't speak French.|我不會說法文。|🙅
She can cook.|她會煮菜。|🍳`,q:[["I can ___.","swim|swims",0],["___ you help me?","Can|Do|Are",0],["我不會：I ___ drive.","can|can't",1]]},
 {t:"介系詞：在哪裡、在什麼時候",x:"位置：in 在裡面，on 在上面，under 在下面，next to 在旁邊\n時間：at 三點（at 3 o'clock），on 星期一（on Monday），in 五月（in May）",e:`The cat is in the box.|貓在盒子裡。|📦
The book is on the table.|書在桌上。|📖
The dog is under the bed.|狗在床底下。|🛏️
See you on Monday.|星期一見。|📅`,q:[["貓在盒子「裡」：The cat is ___ the box.","in|on|under",0],["書在桌「上」：The book is ___ the table.","in|on|at",1],["___ Monday","in|on|at",1]]}
],
dialogues: [
 {t:"打招呼",l:`A|Hello! How are you?|你好！你好嗎？
B|I'm fine, thank you. And you?|我很好，謝謝。你呢？
A|I'm good, thanks.|我很好，謝謝。
B|See you later!|待會見！
A|Bye!|再見！`},
 {t:"認識新朋友",l:`A|Hi, I'm Tom. What's your name?|嗨，我是湯姆。你叫什麼名字？
B|My name is Lin.|我叫林。
A|Nice to meet you, Lin.|很高興認識你，林。
B|Nice to meet you, too.|我也很高興認識你。
A|Where are you from?|你從哪裡來？
B|I'm from Taiwan.|我來自台灣。`},
 {t:"咖啡店",l:`A|Hi, what would you like?|你好，要點什麼？
B|One coffee, please.|一杯咖啡，謝謝。
A|Hot or iced?|熱的還是冰的？
B|Hot, please.|熱的，謝謝。
A|For here or to go?|內用還是外帶？
B|To go, please.|外帶，謝謝。`},
 {t:"買衣服",l:`A|Can I help you?|需要幫忙嗎？
B|I'm just looking, thanks.|我只是看看，謝謝。
B|How much is this shirt?|這件襯衫多少錢？
A|It's twenty dollars.|二十元。
B|Can I try it on?|我可以試穿嗎？
A|Sure. The fitting room is over there.|當然，試衣間在那邊。`},
 {t:"在餐廳",l:`A|A table for two?|兩位嗎？
B|Yes, please.|是的，謝謝。
A|Here is the menu.|這是菜單。
B|I would like the chicken soup.|我想要雞湯。
A|Anything to drink?|要喝什麼嗎？
B|Water, please.|請給我水。`},
 {t:"問路",l:`A|Excuse me. Where is the station?|不好意思，車站在哪裡？
B|Go straight and turn left.|直走然後左轉。
A|Is it far?|很遠嗎？
B|No, it's about five minutes.|不遠，大約五分鐘。
A|Thank you very much!|非常謝謝你！
B|You're welcome.|不客氣。`},
 {t:"搭計程車",l:`A|Where to?|去哪裡？
B|To this hotel, please.|請到這家飯店。
A|OK.|好的。
B|How long does it take?|要多久？
A|About twenty minutes.|大約二十分鐘。
B|Thank you.|謝謝。`},
 {t:"飯店入住",l:`A|Good evening. Can I help you?|晚安，需要幫忙嗎？
B|I have a reservation. My name is Lin.|我有訂房，我姓林。
A|Can I see your passport?|可以看你的護照嗎？
B|Here you are.|在這裡。
A|Your room is 305. Here is your key.|你的房間是 305，這是鑰匙。
B|What time is breakfast?|早餐幾點？
A|From seven to ten.|七點到十點。`},
 {t:"機場入境",l:`A|Can I see your passport, please?|請給我看你的護照。
B|Here it is.|在這裡。
A|Why are you here?|你來這裡做什麼？
B|I'm here on vacation.|我是來度假的。
A|How long will you stay?|你會待多久？
B|Five days.|五天。
A|Enjoy your trip!|旅途愉快！`},
 {t:"講電話",l:`A|Hello?|喂？
B|Hello, this is Lin. Can I speak to Tom?|喂，我是林。可以找湯姆嗎？
A|Sorry, he's not here.|抱歉，他不在。
B|Can I leave a message?|我可以留言嗎？
A|Sure.|當然。
B|Please ask him to call me back.|請他回電給我。`},
 {t:"看醫生",l:`A|What's wrong?|哪裡不舒服？
B|I have a headache and a fever.|我頭痛又發燒。
A|Since when?|從什麼時候開始？
B|Since yesterday.|從昨天開始。
A|Take this medicine and rest.|吃這個藥，然後休息。
B|Thank you, doctor.|謝謝醫生。`},
 {t:"在超市",l:`A|Excuse me, where is the milk?|請問牛奶在哪裡？
B|It's in aisle three.|在第三排。
A|Thank you. Do you have bags?|謝謝。你們有袋子嗎？
B|Yes, one bag is five dollars.|有，一個袋子五元。
A|OK, one bag, please.|好，一個袋子，謝謝。`},
 {t:"聊天氣",l:`A|It's hot today!|今天好熱！
B|Yes, it's very sunny.|對啊，太陽很大。
A|Will it rain tomorrow?|明天會下雨嗎？
B|I think so.|我想會吧。
A|Don't forget your umbrella.|別忘了帶雨傘。`},
 {t:"約朋友吃飯",l:`A|Are you free on Saturday?|你星期六有空嗎？
B|Yes, I am. Why?|有啊，怎麼了？
A|Let's have lunch together.|我們一起吃午餐吧。
B|Good idea! What time?|好主意！幾點？
A|At twelve o'clock.|十二點。
B|OK. See you on Saturday!|好，星期六見！`},
 {t:"請人幫忙",l:`A|Excuse me, can you help me?|不好意思，你可以幫我嗎？
B|Sure. What's wrong?|當然，怎麼了？
A|I lost my wallet.|我的錢包不見了。
B|Let's call the police.|我們打電話報警吧。
A|Thank you so much.|太感謝你了。
B|No problem.|沒問題。`}
],
cheers: ["太棒了！🎉","做得很好！👍","你真厲害！🌟","慢慢來，你在進步！🌱","每天一點點，就會變很強！💪","好耶！繼續加油！😊","完全正確！👏","你學得很快喔！🚀"],
soft: ["沒關係啦，再聽一次就記住了 😊","差一點點耶，我們再來一次喔 🌱","不要緊，我們慢慢來喔 🐢","很正常啦，大家都會這樣 👍"]
};
