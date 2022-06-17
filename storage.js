//本页为变量仓库
var gold_bar;
var Titlesdate;

var new_bank_page;

var time_water_set = "f";

var autoo = false;

var newuser;

//水库
var water_expend = 0;
var water_present = 100;
var water_yield = 0;
var water_capacity = 1000;


//上边栏信息
var Experience = 0;
var cash = 200;
var fault = 0;
var ranking = "1st";
var nickname;
var IDS;
//肥料量
var fertilizer = 0;
//上边栏信息
var weather;

//水资源
var hydropenia = "水资源丰富";

var cash__;
var cash_ = "";

function putup() {
    document.getElementById("Experience").innerHTML = Experience;
    if (Number(cash) < 10000) {
        cash__ = cash;
    }
    if (Number(cash) >= 10000 && cash < Number(100000000)) {
        cash_ = "万";
        cash__ = Number(cash) / 10000;
    }
    if (Number(cash) >= 100000000 && cash < Number(1000000000000)) {
        cash_ = "亿";
        cash__ = Number(cash) / 100000000;
    }
    if (Number(cash) >= 1000000000000 && cash < Number(10000000000000000)) {
        cash_ = "兆";
        cash__ = Number(cash) / 1000000000000;
    }
    if (Number(cash) >= 10000000000000000 && cash < Number(100000000000000000000)) {
        cash_ = "京";
        cash__ = Number(cash) / 10000000000000000;
    }
    if (Number(cash) >= 100000000000000000000 && cash < Number(1000000000000000000000000)) {
        cash_ = "垓";
        cash__ = Number(cash) / 100000000000000000000;
    }
    if (Number(cash) >= 1000000000000000000000000 && cash < Number(10000000000000000000000000000)) {
        cash_ = "秭";
        cash__ = Number(cash) / 1000000000000000000000000;
    }
    if (Number(cash) >= 10000000000000000000000000000 && cash < Number(100000000000000000000000000000000)) {
        cash_ = "穰";
        cash__ = Number(cash) / 10000000000000000000000000000;
    }
    if (Number(cash) >= 100000000000000000000000000000000) {
        cash_ = "沟";
        cash__ = Number(cash) / 100000000000000000000000000000000;
    }
    if (Number(cash) == Infinity) {
        cash_ = "";
        cash__ = "<span>∞</span>(无限大)";
    }
    if (Number(cash) != Infinity) {
        cash__ = Number(cash__).toFixed(1);
        cash__ = String(cash__);
    }
    document.getElementById("cash").innerHTML = cash__ + cash_;
    document.getElementById("fault").innerHTML = fault;
    document.getElementById("ranking").innerHTML = ranking;
    document.getElementById("nickname").innerHTML = nickname;
    document.getElementById("IDS").innerHTML = IDS;
    document.getElementById("fertilizer").innerHTML = fertilizer;
    document.getElementById("weather").innerHTML = weather;
}

function saveup() {
    localStorage.setItem("Experience", Experience);
    localStorage.setItem("cash", cash);
    localStorage.setItem("fault", fault);
    localStorage.setItem("ranking", ranking);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("IDS", IDS);
    localStorage.setItem("fertilizer", fertilizer);
    localStorage.setItem("weather", weather);
}

function getup() {
    Experience = localStorage.getItem("Experience");
    cash = localStorage.getItem("cash");
    fault = localStorage.getItem("fault");
    ranking = localStorage.getItem("ranking");
    nickname = localStorage.getItem("nickname");
    IDS = localStorage.getItem("IDS");
    fertilizer = localStorage.getItem("fertilizer");
    weather = localStorage.getItem("weather");
}





//下面为种类
//共148
//[价格][拥有亩][亩产][拥有数量（单位）]0，1，2，3
//save();
//get();
/*五谷类:
旱稻,水稻,小麦,大麦,黑麦,燕麦,荞麦,蚕豆,豌豆,
绿豆,黄豆,红豆,大豌豆,花生,普通玉米,糯玉米,甜玉米,黑玉米,
彩色水果玉米,甘薯,马铃薯,山药,多头芋,大魁芋,多子芋*/

var Dryrice = [11, 1, 0.1, 0];
var rice = [19, 0, 0.1, 0];
var wheat = [21, 0, 0.1, 0];
var barley = [23, 0, 0.1, 0];
var rye = [26, 0, 0.1, 0];
var oats = [29, 0, 0.1, 0];
var buckwheat = [31, 0, 0.1, 0];
var broadbeans = [36, 0, 0.1, 0];
var peas = [38, 0, 0.1, 0];
var Mungbeans = [42, 0, 0.1, 0];
var soybeans = [43, 0, 0.1, 0];
var redbeans = [39, 0, 0.1, 0];
var peass = [45, 0, 0.1, 0];
var peanuts = [55, 0, 0.1, 0];
var regularcorn = [57, 0, 0.1, 0];
var waxycorn = [64, 0, 0.1, 0];
var sweetcorn = [66, 0, 0.1, 0];
var blackcorn = [69, 0, 0.1, 0];
var Colorfulfruitcorn = [73, 0, 0.1, 0];
var sweetpotato = [69, 0, 0.1, 0];
var potato = [70, 0, 0.1, 0];
var yams = [88, 0, 0.1, 0];
var multi_headyam = [77, 0, 0.1, 0];
var large_headyam = [79, 0, 0.1, 0];
var multi_seedyam = [80, 0, 0.1, 0];
//26


/*麻 棉花:
苎麻,黄麻,青麻,大麻,亚麻,罗布麻,槿麻,
粗绒棉,长绒棉,细绒棉*/
var ramie = [88, 0, 0.1, 0];
var jute = [89, 0, 0.1, 0];
var abutilon = [97, 0, 0.1, 0];
var marijuana = [8020, 0, 0.01, 0];
var linen = [120, 0, 0.1, 0];
var apocynum = [134, 0, 0.1, 0];
var Ambari_hemp = [138, 0, 0.1, 0];
var Thick_cotton = [140, 0, 0.1, 0];
var long_staple_cotton = [167, 0, 0.1, 0];
var Fleecy_wool = [199, 0, 0.1, 0];
//36


/*果蔬类:
菠菜,香菜,芹菜,蕹菜,茼蒿,芦笋,茴香,苋菜,莴苣,油麦菜,白菜类,小白,塌棵菜,大白菜,油菜,荠菜,
芜菁,野泽菜,西兰花,花椰菜,卷心菜,紫甘蓝,水芹,大葱,小葱,大蒜,洋葱,韭菜,尖笋,黄瓜,丝瓜,冬瓜,
苦瓜,南瓜,西葫芦,笋瓜,茄子,番茄,辣椒,菜椒,马铃薯,山药,紫芋头,魔芋,姜*/
var varspinach = [98, 0, 0.5, 0];
var parsley = [121, 0, 0.5, 0];
var celery = [113, 0, 0.5, 0];
var Swampcabbage = [130, 0, 0.6, 0];
var Gardenchrysanthemum = [150, 0, 0.5, 0];
var asparagus = [149, 0, 0.6, 0];
var fennel = [223, 0, 0.4, 0];
var amaranth = [210, 0, 0.5, 0];
var lettuce = [189, 0, 0.4, 0];
var Leaf_lettuce = [231, 0, 0.6, 0];
var Chinese_cabbage = [215, 0, 0.5, 0];
var Chinese_cabbagee = [199, 0, 0.4, 0];
var Broadbeaked_mustard = [231, 0, 0.6, 0];
var Chinese_cabbageee = [228, 0, 0.5, 0];
var rapeseed = [248, 0, 0.4, 0];
var Shepherds_purse = [241, 0, 0.5, 0];
var turnip = [237, 0, 0.7, 0];
var rapeseedd = [242, 0, 0.4, 0];
var broccoli = [218, 0, 0.3, 0];
var broccolii = [189, 0, 0.5, 0];
var cabbage = [229, 0, 0.6, 0];
var Purplecabbage = [219, 0, 0.4, 0];
var Water_celery = [214, 0, 0.5, 0];
var Green_Chinese_onion = [222, 0, 0.6, 0];
var Spring_Onions = [213, 0, 0.7, 0];
var garlic = [241, 0, 0.4, 0];
var Onions = [231, 0, 0.6, 0];
var leek = [214, 0, 0.8, 0];
var asparaguss = [232, 0, 0.4, 0];
var cucumber = [221, 0, 0.6, 0];
var Towel_gourd = [248, 0, 0.5, 0];
var Wax_gourd = [219, 0, 0.6, 0];
var Bitter_melon = [231, 0, 0.4, 0];
var pumpkin = [229, 0, 0.5, 0];
var zucchini = [228, 0, 0.6, 0];
var Winter_squash = [231, 0, 0.9, 0];
var eggplant = [229, 0, 0.4, 0];
var tomato = [218, 0, 0.5, 0];
var chili = [231, 0, 0.7, 0];
var Pepper_dish = [219, 0, 0.4, 0];
var The_potato = [221, 0, 0.8, 0];
var yam = [219, 0, 0.5, 0];
var taro = [218, 0, 0.3, 0];
var konjac = [332, 0, 0.5, 0];
var ginger = [259, 0, 0.4, 0];
//82


/*茶:
红茶,绿茶,清茶,黄茶,黑茶,白茶
*/
var Black_tea = [350, 0, 0.3, 0];
var Green_tea = [430, 0, 0.3, 0];
var Greennn_tea = [540, 0, 0.3, 0];
var Yellow_tea = [353, 0, 0.3, 0];
var Blackk_tea = [456, 0, 0.3, 0];
var White_tea = [680, 0, 0.3, 0];
//88


/*菌类:
白黄侧耳,深凹杯伞,玉米黑粉菌,羊肚菌,黑马鞍菌,白马鞍菌,大白口蘑菇,
松茸,蒙古口菇,鸡纵菌,金针菇,香菇,杏鲍菇,蘑菇,草菇,红菇
*/
var Whiteandyellowsideear = [540, 0, 0.2, 0];
var deepconcavecupumbrella = [530, 0, 0.2, 0];
var cornblackpinkfungus = [563, 0, 0.2, 0];
var Morchella = [530, 0, 0.2, 0];
var blacksaddlefungus = [540, 0, 0.2, 0];
var Whitesaddlefungus = [555, 0, 0.3, 0];
var whitewhitemouthmushroom = [563, 0, 0.2, 0];
var Matsutakemushroom = [1220, 0, 0.2, 0];
var Mongolianmushroom = [521, 0, 0.2, 0];
var Verticalmushroom = [524, 0, 0.2, 0];
var flammulina = [514, 0, 0.2, 0];
var shiitakemushroom = [519, 0, 0.2, 0];
var Pleurotuseryngii = [518, 0, 0.2, 0];
var Mushroom = [581, 0, 0.2, 0];
var Strawmushroom = [529, 0, 0.2, 0];
var redmushroom = [598, 0, 0.2, 0];
//105


/*观赏:
球根海棠,水仙,长寿花,天竺葵,兰花,百合,仙人球,蝴蝶兰,苏铁,
绿萝,发财树,榕树,南洋杉,铁树,榆树,罗汉松,五针松,福建茶
*/
var Bulb_haitang = [829, 0, 0.3, 0];
var narcissus = [888, 0, 0.3, 0];
var Longevity_flowers = [879, 0, 0.3, 0];
var geranium = [810, 0, 0.3, 0];
var The_orchid = [918, 0, 0.3, 0];
var lily = [817, 0, 0.3, 0];
var Celestial_being = [813, 0, 0.3, 0];
var Butterfly_orchid = [829, 0, 0.3, 0];
var cycads = [827, 0, 0.3, 0];
var Money_plant = [813, 0, 0.3, 0];
var Rich_tree = [912, 0, 0.3, 0];
var Banyan_tree = [899, 0, 0.3, 0];
var araucaria = [827, 0, 0.3, 0];
var cycas = [837, 0, 0.3, 0];
var elm = [831, 0, 0.3, 0];
var podocarpus = [847, 0, 0.3, 0];
var Five_hieroglyphics = [1100, 0, 0.3, 0];
var Fujian_tea = [999, 0, 0.3, 0];
//123


/*海产:
海带,紫菜,裙带菜,石花菜,发菜,石莼,龙须菜,绿藻,褐藻,红藻
*/
var kelp = [799, 0, 0.9, 0];
var nori = [813, 0, 0.9, 0];
var wakame = [912, 0, 0.9, 0];
var AGAR_weed = [792, 0, 0.9, 0];
var Long_thread_moss = [819, 0, 0.9, 0];
var ulva = [912, 0, 0.9, 0];
var asparagusss = [728, 0, 0.9, 0];
var Green_algae = [818, 0, 0.9, 0];
var Brown_algae = [729, 0, 0.9, 0];
var Red_algae = [829, 0, 0.9, 0];
//133


/*稀有品种:
大王花（食人花）平均800左右
生石花 平均2000左右
龟甲牡丹 平均5000左右
北美银冠玉 平均10000左右
螺旋芦荟 平均20000左右
万象锦 平均26000左右
白皮月界 平均80000左右
惠比须笑 14万起卖
睡火莲 120万
鬼兰 1500万
*/
var King_of_flowers = [1900, 0, 0.005, 0];
var Have_they = [5000, 0, 0.005, 0];
var Tortoise_shell_peony = [9000, 0, 0.005, 0];
var North_American_silver_crown_jade = [13000, 0, 0.002, 0];
var Spiral_aloe = [22000, 0, 0.05, 0];
var Vientiane_kam = [30000, 0, 0.0009, 0];
var White_YueJie = [88000, 0, 0.0009, 0];
var Than_to_smile = [140000, 0, 0.0002, 0];
var Sleep_fire_lotus = [1200000, 0, 0.00009, 0];
var The_ghost_orchid = [15000000, 0, 0.00008, 0];
//143


/*瑞士银行:
杀虫剂，除螨剂，杀菌剂，除草剂
*/
var Insecticides = [null, 0, 0.1, 0];
var acaricides = [null, 0, 0.1, 0];
var fungicides = [null, 0, 0.1, 0];
var herbicides = [null, 0, 0.1, 0];


/*肥料购买:
无机肥
有机肥
气体肥料
金坷垃
*/
var The_inorganic_fertilizer = [230, 0, 0.1, 0];
var Organic_fertilizer = [430, 0, 0.1, 0];
var Gas_fertilizer = [540, 0, 0.1, 0];
var $Gold_KeL$ = [1200, 0, 0.1, 0];


//结合数组
var combine = [Dryrice, rice, wheat, barley, rye, oats, buckwheat, broadbeans, peas, Mungbeans, soybeans, redbeans, peass, peanuts, regularcorn, waxycorn, sweetcorn, blackcorn, Colorfulfruitcorn, sweetpotato, potato, yams, multi_headyam, large_headyam, multi_seedyam, /**/ ramie, jute, abutilon, marijuana, linen, apocynum, Ambari_hemp, Thick_cotton, long_staple_cotton, Fleecy_wool, /**/ varspinach, parsley, celery, Swampcabbage, Gardenchrysanthemum, asparagus, fennel, amaranth, lettuce, Leaf_lettuce, Chinese_cabbage, Chinese_cabbagee, Broadbeaked_mustard, Chinese_cabbageee, rapeseed, Shepherds_purse, turnip, rapeseedd, broccoli, broccolii, cabbage, Purplecabbage, Water_celery, Green_Chinese_onion, Spring_Onions, garlic, Onions, leek, asparaguss, cucumber, Towel_gourd, Wax_gourd, Bitter_melon, pumpkin, zucchini, Winter_squash, eggplant, tomato, chili, Pepper_dish, The_potato, yam, taro, konjac, ginger, /**/ Black_tea, Green_tea, Greennn_tea, Yellow_tea, Blackk_tea, White_tea, /**/ Whiteandyellowsideear, deepconcavecupumbrella, cornblackpinkfungus, Morchella, blacksaddlefungus, Whitesaddlefungus, whitewhitemouthmushroom, Matsutakemushroom, Mongolianmushroom, Verticalmushroom, flammulina, shiitakemushroom, Pleurotuseryngii, Mushroom, Strawmushroom, redmushroom, /**/ Bulb_haitang, narcissus, Longevity_flowers, geranium, The_orchid, lily, Celestial_being, Butterfly_orchid, cycads, Money_plant, Rich_tree, Banyan_tree, araucaria, cycas, elm, podocarpus, Five_hieroglyphics, Fujian_tea, /**/ kelp, nori, wakame, AGAR_weed, Long_thread_moss, ulva, asparagusss, Green_algae, Brown_algae, Red_algae, /**/ King_of_flowers, Have_they, Tortoise_shell_peony, North_American_silver_crown_jade, Spiral_aloe, Vientiane_kam, White_YueJie, Than_to_smile, Sleep_fire_lotus, The_ghost_orchid, /**/ Insecticides, acaricides, fungicides, herbicides, /**/ The_inorganic_fertilizer, Organic_fertilizer, Gas_fertilizer, $Gold_KeL$];

//存储，读取（localStorage.setItem("lastname", "Smith");）
//（document.getElementById("result").innerHTML = localStorage.getItem("lastname");）
function get() {
    Dryrice[0] = localStorage.getItem("Dryrice_1");
    Dryrice[1] = localStorage.getItem("Dryrice_2");
    Dryrice[2] = localStorage.getItem("Dryrice_3");
    Dryrice[3] = localStorage.getItem("Dryrice_4");

    rice[0] = localStorage.getItem("rice_1");
    rice[1] = localStorage.getItem("rice_2");
    rice[2] = localStorage.getItem("rice_3");
    rice[3] = localStorage.getItem("rice_4");

    wheat[0] = localStorage.getItem("wheat_1");
    wheat[1] = localStorage.getItem("wheat_2");
    wheat[2] = localStorage.getItem("wheat_3");
    wheat[3] = localStorage.getItem("wheat_4");

    barley[0] = localStorage.getItem("barley_1");
    barley[1] = localStorage.getItem("barley_2");
    barley[2] = localStorage.getItem("barley_3");
    barley[3] = localStorage.getItem("barley_4");

    rye[0] = localStorage.getItem("rye_1");
    rye[1] = localStorage.getItem("rye_2");
    rye[2] = localStorage.getItem("rye_3");
    rye[3] = localStorage.getItem("rye_4");

    oats[0] = localStorage.getItem("oats_1");
    oats[1] = localStorage.getItem("oats_2");
    oats[2] = localStorage.getItem("oats_3");
    oats[3] = localStorage.getItem("oats_4");

    buckwheat[0] = localStorage.getItem("buckwheat_1");
    buckwheat[1] = localStorage.getItem("buckwheat_2");
    buckwheat[2] = localStorage.getItem("buckwheat_3");
    buckwheat[3] = localStorage.getItem("buckwheat_4");

    broadbeans[0] = localStorage.getItem("broadbeans_1");
    broadbeans[1] = localStorage.getItem("broadbeans_2");
    broadbeans[2] = localStorage.getItem("broadbeans_3");
    broadbeans[3] = localStorage.getItem("broadbeans_4");

    peas[0] = localStorage.getItem("peas_1");
    peas[1] = localStorage.getItem("peas_2");
    peas[2] = localStorage.getItem("peas_3");
    peas[3] = localStorage.getItem("peas_4");

    Mungbeans[0] = localStorage.getItem("Mungbeans_1");
    Mungbeans[1] = localStorage.getItem("Mungbeans_2");
    Mungbeans[2] = localStorage.getItem("Mungbeans_3");
    Mungbeans[3] = localStorage.getItem("Mungbeans_4");

    soybeans[0] = localStorage.getItem("soybeans_1");
    soybeans[1] = localStorage.getItem("soybeans_2");
    soybeans[2] = localStorage.getItem("soybeans_3");
    soybeans[3] = localStorage.getItem("soybeans_4");

    redbeans[0] = localStorage.getItem("redbeans_1");
    redbeans[1] = localStorage.getItem("redbeans_2");
    redbeans[2] = localStorage.getItem("redbeans_3");
    redbeans[3] = localStorage.getItem("redbeans_4");

    peass[0] = localStorage.getItem("peass_1");
    peass[1] = localStorage.getItem("peass_2");
    peass[2] = localStorage.getItem("peass_3");
    peass[3] = localStorage.getItem("peass_4");

    peanuts[0] = localStorage.getItem("peanuts_1");
    peanuts[1] = localStorage.getItem("peanuts_2");
    peanuts[2] = localStorage.getItem("peanuts_3");
    peanuts[3] = localStorage.getItem("peanuts_4");

    regularcorn[0] = localStorage.getItem("regularcorn_1");
    regularcorn[1] = localStorage.getItem("regularcorn_2");
    regularcorn[2] = localStorage.getItem("regularcorn_3");
    regularcorn[3] = localStorage.getItem("regularcorn_4");

    waxycorn[0] = localStorage.getItem("waxycorn_1");
    waxycorn[1] = localStorage.getItem("waxycorn_2");
    waxycorn[2] = localStorage.getItem("waxycorn_3");
    waxycorn[3] = localStorage.getItem("waxycorn_4");

    sweetcorn[0] = localStorage.getItem("sweetcorn_1");
    sweetcorn[1] = localStorage.getItem("sweetcorn_2");
    sweetcorn[2] = localStorage.getItem("sweetcorn_3");
    sweetcorn[3] = localStorage.getItem("sweetcorn_4");

    blackcorn[0] = localStorage.getItem("blackcorn_1");
    blackcorn[1] = localStorage.getItem("blackcorn_2");
    blackcorn[2] = localStorage.getItem("blackcorn_3");
    blackcorn[3] = localStorage.getItem("blackcorn_4");

    Colorfulfruitcorn[0] = localStorage.getItem("Colorfulfruitcorn_1");
    Colorfulfruitcorn[1] = localStorage.getItem("Colorfulfruitcorn_2");
    Colorfulfruitcorn[2] = localStorage.getItem("Colorfulfruitcorn_3");
    Colorfulfruitcorn[3] = localStorage.getItem("Colorfulfruitcorn_4");

    sweetpotato[0] = localStorage.getItem("sweetpotato_1");
    sweetpotato[1] = localStorage.getItem("sweetpotato_2");
    sweetpotato[2] = localStorage.getItem("sweetpotato_3");
    sweetpotato[3] = localStorage.getItem("sweetpotato_4");

    potato[0] = localStorage.getItem("potato_1");
    potato[1] = localStorage.getItem("potato_2");
    potato[2] = localStorage.getItem("potato_3");
    potato[3] = localStorage.getItem("potato_4");

    yams[0] = localStorage.getItem("yams_1");
    yams[1] = localStorage.getItem("yams_2");
    yams[2] = localStorage.getItem("yams_3");
    yams[3] = localStorage.getItem("yams_4");

    multi_headyam[0] = localStorage.getItem("multi_headyam_1");
    multi_headyam[1] = localStorage.getItem("multi_headyam_2");
    multi_headyam[2] = localStorage.getItem("multi_headyam_3");
    multi_headyam[3] = localStorage.getItem("multi_headyam_4");

    large_headyam[0] = localStorage.getItem("large_headyam_1");
    large_headyam[1] = localStorage.getItem("large_headyam_2");
    large_headyam[2] = localStorage.getItem("large_headyam_3");
    large_headyam[3] = localStorage.getItem("large_headyam_4");

    multi_seedyam[0] = localStorage.getItem("multi_seedyam_1");
    multi_seedyam[1] = localStorage.getItem("multi_seedyam_2");
    multi_seedyam[2] = localStorage.getItem("multi_seedyam_3");
    multi_seedyam[3] = localStorage.getItem("multi_seedyam_4");



    ramie[0] = localStorage.getItem("ramie_1");
    ramie[1] = localStorage.getItem("ramie_2");
    ramie[2] = localStorage.getItem("ramie_3");
    ramie[3] = localStorage.getItem("ramie_4");

    jute[0] = localStorage.getItem("jute_1");
    jute[1] = localStorage.getItem("jute_2");
    jute[2] = localStorage.getItem("jute_3");
    jute[3] = localStorage.getItem("jute_4");

    abutilon[0] = localStorage.getItem("abutilon_1");
    abutilon[1] = localStorage.getItem("abutilon_2");
    abutilon[2] = localStorage.getItem("abutilon_3");
    abutilon[3] = localStorage.getItem("abutilon_4");

    marijuana[0] = localStorage.getItem("marijuana_1");
    marijuana[1] = localStorage.getItem("marijuana_2");
    marijuana[2] = localStorage.getItem("marijuana_3");
    marijuana[3] = localStorage.getItem("marijuana_4");

    linen[0] = localStorage.getItem("linen_1");
    linen[1] = localStorage.getItem("linen_2");
    linen[2] = localStorage.getItem("linen_3");
    linen[3] = localStorage.getItem("linen_4");

    apocynum[0] = localStorage.getItem("apocynum_1");
    apocynum[1] = localStorage.getItem("apocynum_2");
    apocynum[2] = localStorage.getItem("apocynum_3");
    apocynum[3] = localStorage.getItem("apocynum_4");

    Ambari_hemp[0] = localStorage.getItem("Ambari_hemp_1");
    Ambari_hemp[1] = localStorage.getItem("Ambari_hemp_2");
    Ambari_hemp[2] = localStorage.getItem("Ambari_hemp_3");
    Ambari_hemp[3] = localStorage.getItem("Ambari_hemp_4");

    Thick_cotton[0] = localStorage.getItem("Thick_cotton_1");
    Thick_cotton[1] = localStorage.getItem("Thick_cotton_2");
    Thick_cotton[2] = localStorage.getItem("Thick_cotton_3");
    Thick_cotton[3] = localStorage.getItem("Thick_cotton_4");

    long_staple_cotton[0] = localStorage.getItem("long_staple_cotton_1");
    long_staple_cotton[1] = localStorage.getItem("long_staple_cotton_2");
    long_staple_cotton[2] = localStorage.getItem("long_staple_cotton_3");
    long_staple_cotton[3] = localStorage.getItem("long_staple_cotton_4");

    Fleecy_wool[0] = localStorage.getItem("Fleecy_wool_1");
    Fleecy_wool[1] = localStorage.getItem("Fleecy_wool_2");
    Fleecy_wool[2] = localStorage.getItem("Fleecy_wool_3");
    Fleecy_wool[3] = localStorage.getItem("Fleecy_wool_4");



    varspinach[0] = localStorage.getItem("varspinach_1");
    varspinach[1] = localStorage.getItem("varspinach_2");
    varspinach[2] = localStorage.getItem("varspinach_3");
    varspinach[3] = localStorage.getItem("varspinach_4");

    parsley[0] = localStorage.getItem("parsley_1");
    parsley[1] = localStorage.getItem("parsley_2");
    parsley[2] = localStorage.getItem("parsley_3");
    parsley[3] = localStorage.getItem("parsley_4");

    celery[0] = localStorage.getItem("celery_1");
    celery[1] = localStorage.getItem("celery_2");
    celery[2] = localStorage.getItem("celery_3");
    celery[3] = localStorage.getItem("celery_4");

    Swampcabbage[0] = localStorage.getItem("Swampcabbage_1");
    Swampcabbage[1] = localStorage.getItem("Swampcabbage_2");
    Swampcabbage[2] = localStorage.getItem("Swampcabbage_3");
    Swampcabbage[3] = localStorage.getItem("Swampcabbage_4");

    Gardenchrysanthemum[0] = localStorage.getItem("Gardenchrysanthemum_1");
    Gardenchrysanthemum[1] = localStorage.getItem("Gardenchrysanthemum_2");
    Gardenchrysanthemum[2] = localStorage.getItem("Gardenchrysanthemum_3");
    Gardenchrysanthemum[3] = localStorage.getItem("Gardenchrysanthemum_4");

    asparagus[0] = localStorage.getItem("asparagus_1");
    asparagus[1] = localStorage.getItem("asparagus_2");
    asparagus[2] = localStorage.getItem("asparagus_3");
    asparagus[3] = localStorage.getItem("asparagus_4");

    fennel[0] = localStorage.getItem("fennel_1");
    fennel[1] = localStorage.getItem("fennel_2");
    fennel[2] = localStorage.getItem("fennel_3");
    fennel[3] = localStorage.getItem("fennel_4");

    amaranth[0] = localStorage.getItem("amaranth_1");
    amaranth[1] = localStorage.getItem("amaranth_2");
    amaranth[2] = localStorage.getItem("amaranth_3");
    amaranth[3] = localStorage.getItem("amaranth_4");

    lettuce[0] = localStorage.getItem("lettuce_1");
    lettuce[1] = localStorage.getItem("lettuce_2");
    lettuce[2] = localStorage.getItem("lettuce_3");
    lettuce[3] = localStorage.getItem("lettuce_4");

    Leaf_lettuce[0] = localStorage.getItem("Leaf_lettuce_1");
    Leaf_lettuce[1] = localStorage.getItem("Leaf_lettuce_2");
    Leaf_lettuce[2] = localStorage.getItem("Leaf_lettuce_3");
    Leaf_lettuce[3] = localStorage.getItem("Leaf_lettuce_4");

    Chinese_cabbage[0] = localStorage.getItem("Chinese_cabbage_1");
    Chinese_cabbage[1] = localStorage.getItem("Chinese_cabbage_2");
    Chinese_cabbage[2] = localStorage.getItem("Chinese_cabbage_3");
    Chinese_cabbage[3] = localStorage.getItem("Chinese_cabbage_4");

    Chinese_cabbagee[0] = localStorage.getItem("Chinese_cabbagee_1");
    Chinese_cabbagee[1] = localStorage.getItem("Chinese_cabbagee_2");
    Chinese_cabbagee[2] = localStorage.getItem("Chinese_cabbagee_3");
    Chinese_cabbagee[3] = localStorage.getItem("Chinese_cabbagee_4");

    Broadbeaked_mustard[0] = localStorage.getItem("Broadbeaked_mustard_1");
    Broadbeaked_mustard[1] = localStorage.getItem("Broadbeaked_mustard_2");
    Broadbeaked_mustard[2] = localStorage.getItem("Broadbeaked_mustard_3");
    Broadbeaked_mustard[3] = localStorage.getItem("Broadbeaked_mustard_4");

    Chinese_cabbageee[0] = localStorage.getItem("Chinese_cabbageee_1");
    Chinese_cabbageee[1] = localStorage.getItem("Chinese_cabbageee_2");
    Chinese_cabbageee[2] = localStorage.getItem("Chinese_cabbageee_3");
    Chinese_cabbageee[3] = localStorage.getItem("Chinese_cabbageee_4");

    rapeseed[0] = localStorage.getItem("rapeseed_1");
    rapeseed[1] = localStorage.getItem("rapeseed_2");
    rapeseed[2] = localStorage.getItem("rapeseed_3");
    rapeseed[3] = localStorage.getItem("rapeseed_4");

    Shepherds_purse[0] = localStorage.getItem("Shepherds_purse_1");
    Shepherds_purse[1] = localStorage.getItem("Shepherds_purse_2");
    Shepherds_purse[2] = localStorage.getItem("Shepherds_purse_3");
    Shepherds_purse[3] = localStorage.getItem("Shepherds_purse_4");

    turnip[0] = localStorage.getItem("turnip_1");
    turnip[1] = localStorage.getItem("turnip_2");
    turnip[2] = localStorage.getItem("turnip_3");
    turnip[3] = localStorage.getItem("turnip_4");

    rapeseedd[0] = localStorage.getItem("rapeseedd_1");
    rapeseedd[1] = localStorage.getItem("rapeseedd_2");
    rapeseedd[2] = localStorage.getItem("rapeseedd_3");
    rapeseedd[3] = localStorage.getItem("rapeseedd_4");

    broccoli[0] = localStorage.getItem("broccoli_1");
    broccoli[1] = localStorage.getItem("broccoli_2");
    broccoli[2] = localStorage.getItem("broccoli_3");
    broccoli[3] = localStorage.getItem("broccoli_4");

    broccolii[0] = localStorage.getItem("broccolii_1");
    broccolii[1] = localStorage.getItem("broccolii_2");
    broccolii[2] = localStorage.getItem("broccolii_3");
    broccolii[3] = localStorage.getItem("broccolii_4");

    cabbage[0] = localStorage.getItem("cabbage_1");
    cabbage[1] = localStorage.getItem("cabbage_2");
    cabbage[2] = localStorage.getItem("cabbage_3");
    cabbage[3] = localStorage.getItem("cabbage_4");

    Purplecabbage[0] = localStorage.getItem("Purplecabbage_1");
    Purplecabbage[1] = localStorage.getItem("Purplecabbage_2");
    Purplecabbage[2] = localStorage.getItem("Purplecabbage_3");
    Purplecabbage[3] = localStorage.getItem("Purplecabbage_4");

    Water_celery[0] = localStorage.getItem("Water_celery_1");
    Water_celery[1] = localStorage.getItem("Water_celery_2");
    Water_celery[2] = localStorage.getItem("Water_celery_3");
    Water_celery[3] = localStorage.getItem("Water_celery_4");

    Green_Chinese_onion[0] = localStorage.getItem("Green_Chinese_onion_1");
    Green_Chinese_onion[1] = localStorage.getItem("Green_Chinese_onion_2");
    Green_Chinese_onion[2] = localStorage.getItem("Green_Chinese_onion_3");
    Green_Chinese_onion[3] = localStorage.getItem("Green_Chinese_onion_4");

    Spring_Onions[0] = localStorage.getItem("Spring_Onions_1");
    Spring_Onions[1] = localStorage.getItem("Spring_Onions_2");
    Spring_Onions[2] = localStorage.getItem("Spring_Onions_3");
    Spring_Onions[3] = localStorage.getItem("Spring_Onions_4");

    garlic[0] = localStorage.getItem("garlic_1");
    garlic[1] = localStorage.getItem("garlic_2");
    garlic[2] = localStorage.getItem("garlic_3");
    garlic[3] = localStorage.getItem("garlic_4");

    Onions[0] = localStorage.getItem("Onions_1");
    Onions[1] = localStorage.getItem("Onions_2");
    Onions[2] = localStorage.getItem("Onions_3");
    Onions[3] = localStorage.getItem("Onions_4");

    leek[0] = localStorage.getItem("leek_1");
    leek[1] = localStorage.getItem("leek_2");
    leek[2] = localStorage.getItem("leek_3");
    leek[3] = localStorage.getItem("leek_4");

    asparaguss[0] = localStorage.getItem("asparaguss_1");
    asparaguss[1] = localStorage.getItem("asparaguss_2");
    asparaguss[2] = localStorage.getItem("asparaguss_3");
    asparaguss[3] = localStorage.getItem("asparaguss_4");

    cucumber[0] = localStorage.getItem("cucumber_1");
    cucumber[1] = localStorage.getItem("cucumber_2");
    cucumber[2] = localStorage.getItem("cucumber_3");
    cucumber[3] = localStorage.getItem("cucumber_4");

    Towel_gourd[0] = localStorage.getItem("Towel_gourd_1");
    Towel_gourd[1] = localStorage.getItem("Towel_gourd_2");
    Towel_gourd[2] = localStorage.getItem("Towel_gourd_3");
    Towel_gourd[3] = localStorage.getItem("Towel_gourd_4");

    Wax_gourd[0] = localStorage.getItem("Wax_gourd_1");
    Wax_gourd[1] = localStorage.getItem("Wax_gourd_2");
    Wax_gourd[2] = localStorage.getItem("Wax_gourd_3");
    Wax_gourd[3] = localStorage.getItem("Wax_gourd_4");

    Bitter_melon[0] = localStorage.getItem("Bitter_melon_1");
    Bitter_melon[1] = localStorage.getItem("Bitter_melon_2");
    Bitter_melon[2] = localStorage.getItem("Bitter_melon_3");
    Bitter_melon[3] = localStorage.getItem("Bitter_melon_4");

    pumpkin[0] = localStorage.getItem("pumpkin_1");
    pumpkin[1] = localStorage.getItem("pumpkin_2");
    pumpkin[2] = localStorage.getItem("pumpkin_3");
    pumpkin[3] = localStorage.getItem("pumpkin_4");

    zucchini[0] = localStorage.getItem("zucchini_1");
    zucchini[1] = localStorage.getItem("zucchini_2");
    zucchini[2] = localStorage.getItem("zucchini_3");
    zucchini[3] = localStorage.getItem("zucchini_4");

    Winter_squash[0] = localStorage.getItem("Winter_squash_1");
    Winter_squash[1] = localStorage.getItem("Winter_squash_2");
    Winter_squash[2] = localStorage.getItem("Winter_squash_3");
    Winter_squash[3] = localStorage.getItem("Winter_squash_4");

    eggplant[0] = localStorage.getItem("eggplant_1");
    eggplant[1] = localStorage.getItem("eggplant_2");
    eggplant[2] = localStorage.getItem("eggplant_3");
    eggplant[3] = localStorage.getItem("eggplant_4");

    tomato[0] = localStorage.getItem("tomato_1");
    tomato[1] = localStorage.getItem("tomato_2");
    tomato[2] = localStorage.getItem("tomato_3");
    tomato[3] = localStorage.getItem("tomato_4");

    chili[0] = localStorage.getItem("chili_1");
    chili[1] = localStorage.getItem("chili_2");
    chili[2] = localStorage.getItem("chili_3");
    chili[3] = localStorage.getItem("chili_4");

    Pepper_dish[0] = localStorage.getItem("Pepper_dish_1");
    Pepper_dish[1] = localStorage.getItem("Pepper_dish_2");
    Pepper_dish[2] = localStorage.getItem("Pepper_dish_3");
    Pepper_dish[3] = localStorage.getItem("Pepper_dish_4");

    The_potato[0] = localStorage.getItem("The_potato_1");
    The_potato[1] = localStorage.getItem("The_potato_2");
    The_potato[2] = localStorage.getItem("The_potato_3");
    The_potato[3] = localStorage.getItem("The_potato_4");

    yam[0] = localStorage.getItem("yam_1");
    yam[1] = localStorage.getItem("yam_2");
    yam[2] = localStorage.getItem("yam_3");
    yam[3] = localStorage.getItem("yam_4");

    taro[0] = localStorage.getItem("taro_1");
    taro[1] = localStorage.getItem("taro_2");
    taro[2] = localStorage.getItem("taro_3");
    taro[3] = localStorage.getItem("taro_4");

    konjac[0] = localStorage.getItem("konjac_1");
    konjac[1] = localStorage.getItem("konjac_2");
    konjac[2] = localStorage.getItem("konjac_3");
    konjac[3] = localStorage.getItem("konjac_4");

    ginger[0] = localStorage.getItem("ginger_1");
    ginger[1] = localStorage.getItem("ginger_2");
    ginger[2] = localStorage.getItem("ginger_3");
    ginger[3] = localStorage.getItem("ginger_4");



    Black_tea[0] = localStorage.getItem("Black_tea_1");
    Black_tea[1] = localStorage.getItem("Black_tea_2");
    Black_tea[2] = localStorage.getItem("Black_tea_3");
    Black_tea[3] = localStorage.getItem("Black_tea_4");

    Green_tea[0] = localStorage.getItem("Green_tea_1");
    Green_tea[1] = localStorage.getItem("Green_tea_2");
    Green_tea[2] = localStorage.getItem("Green_tea_3");
    Green_tea[3] = localStorage.getItem("Green_tea_4");

    Greennn_tea[0] = localStorage.getItem("Greennn_tea_1");
    Greennn_tea[1] = localStorage.getItem("Greennn_tea_2");
    Greennn_tea[2] = localStorage.getItem("Greennn_tea_3");
    Greennn_tea[3] = localStorage.getItem("Greennn_tea_4");

    Yellow_tea[0] = localStorage.getItem("Yellow_tea_1");
    Yellow_tea[1] = localStorage.getItem("Yellow_tea_2");
    Yellow_tea[2] = localStorage.getItem("Yellow_tea_3");
    Yellow_tea[3] = localStorage.getItem("Yellow_tea_4");

    Blackk_tea[0] = localStorage.getItem("Blackk_tea_1");
    Blackk_tea[1] = localStorage.getItem("Blackk_tea_2");
    Blackk_tea[2] = localStorage.getItem("Blackk_tea_3");
    Blackk_tea[3] = localStorage.getItem("Blackk_tea_4");

    White_tea[0] = localStorage.getItem("White_tea_1");
    White_tea[1] = localStorage.getItem("White_tea_2");
    White_tea[2] = localStorage.getItem("White_tea_3");
    White_tea[3] = localStorage.getItem("White_tea_4");



    Whiteandyellowsideear[0] = localStorage.getItem("Whiteandyellowsideear_1");
    Whiteandyellowsideear[1] = localStorage.getItem("Whiteandyellowsideear_2");
    Whiteandyellowsideear[2] = localStorage.getItem("Whiteandyellowsideear_3");
    Whiteandyellowsideear[3] = localStorage.getItem("Whiteandyellowsideear_4");

    deepconcavecupumbrella[0] = localStorage.getItem("deepconcavecupumbrella_1");
    deepconcavecupumbrella[1] = localStorage.getItem("deepconcavecupumbrella_2");
    deepconcavecupumbrella[2] = localStorage.getItem("deepconcavecupumbrella_3");
    deepconcavecupumbrella[3] = localStorage.getItem("deepconcavecupumbrella_4");

    cornblackpinkfungus[0] = localStorage.getItem("cornblackpinkfungus_1");
    cornblackpinkfungus[1] = localStorage.getItem("cornblackpinkfungus_2");
    cornblackpinkfungus[2] = localStorage.getItem("cornblackpinkfungus_3");
    cornblackpinkfungus[3] = localStorage.getItem("cornblackpinkfungus_4");

    Morchella[0] = localStorage.getItem("Morchella_1");
    Morchella[1] = localStorage.getItem("Morchella_2");
    Morchella[2] = localStorage.getItem("Morchella_3");
    Morchella[3] = localStorage.getItem("Morchella_4");

    blacksaddlefungus[0] = localStorage.getItem("blacksaddlefungus_1");
    blacksaddlefungus[1] = localStorage.getItem("blacksaddlefungus_2");
    blacksaddlefungus[2] = localStorage.getItem("blacksaddlefungus_3");
    blacksaddlefungus[3] = localStorage.getItem("blacksaddlefungus_4");

    Whitesaddlefungus[0] = localStorage.getItem("Whitesaddlefungus_1");
    Whitesaddlefungus[1] = localStorage.getItem("Whitesaddlefungus_2");
    Whitesaddlefungus[2] = localStorage.getItem("Whitesaddlefungus_3");
    Whitesaddlefungus[3] = localStorage.getItem("Whitesaddlefungus_4");

    whitewhitemouthmushroom[0] = localStorage.getItem("whitewhitemouthmushroom_1");
    whitewhitemouthmushroom[1] = localStorage.getItem("whitewhitemouthmushroom_2");
    whitewhitemouthmushroom[2] = localStorage.getItem("whitewhitemouthmushroom_3");
    whitewhitemouthmushroom[3] = localStorage.getItem("whitewhitemouthmushroom_4");

    Matsutakemushroom[0] = localStorage.getItem("Matsutakemushroom_1");
    Matsutakemushroom[1] = localStorage.getItem("Matsutakemushroom_2");
    Matsutakemushroom[2] = localStorage.getItem("Matsutakemushroom_3");
    Matsutakemushroom[3] = localStorage.getItem("Matsutakemushroom_4");

    Mongolianmushroom[0] = localStorage.getItem("Mongolianmushroom_1");
    Mongolianmushroom[1] = localStorage.getItem("Mongolianmushroom_2");
    Mongolianmushroom[2] = localStorage.getItem("Mongolianmushroom_3");
    Mongolianmushroom[3] = localStorage.getItem("Mongolianmushroom_4");

    Verticalmushroom[0] = localStorage.getItem("Verticalmushroom_1");
    Verticalmushroom[1] = localStorage.getItem("Verticalmushroom_2");
    Verticalmushroom[2] = localStorage.getItem("Verticalmushroom_3");
    Verticalmushroom[3] = localStorage.getItem("Verticalmushroom_4");

    flammulina[0] = localStorage.getItem("flammulina_1");
    flammulina[1] = localStorage.getItem("flammulina_2");
    flammulina[2] = localStorage.getItem("flammulina_3");
    flammulina[3] = localStorage.getItem("flammulina_4");

    shiitakemushroom[0] = localStorage.getItem("shiitakemushroom_1");
    shiitakemushroom[1] = localStorage.getItem("shiitakemushroom_2");
    shiitakemushroom[2] = localStorage.getItem("shiitakemushroom_3");
    shiitakemushroom[3] = localStorage.getItem("shiitakemushroom_4");

    Pleurotuseryngii[0] = localStorage.getItem("Pleurotuseryngii_1");
    Pleurotuseryngii[1] = localStorage.getItem("Pleurotuseryngii_2");
    Pleurotuseryngii[2] = localStorage.getItem("Pleurotuseryngii_3");
    Pleurotuseryngii[3] = localStorage.getItem("Pleurotuseryngii_4");

    Mushroom[0] = localStorage.getItem("Mushroom_1");
    Mushroom[1] = localStorage.getItem("Mushroom_2");
    Mushroom[2] = localStorage.getItem("Mushroom_3");
    Mushroom[3] = localStorage.getItem("Mushroom_4");

    Strawmushroom[0] = localStorage.getItem("Strawmushroom_1");
    Strawmushroom[1] = localStorage.getItem("Strawmushroom_2");
    Strawmushroom[2] = localStorage.getItem("Strawmushroom_3");
    Strawmushroom[3] = localStorage.getItem("Strawmushroom_4");

    redmushroom[0] = localStorage.getItem("redmushroom_1");
    redmushroom[1] = localStorage.getItem("redmushroom_2");
    redmushroom[2] = localStorage.getItem("redmushroom_3");
    redmushroom[3] = localStorage.getItem("redmushroom_4");



    Bulb_haitang[0] = localStorage.getItem("Bulb_haitang_1");
    Bulb_haitang[1] = localStorage.getItem("Bulb_haitang_2");
    Bulb_haitang[2] = localStorage.getItem("Bulb_haitang_3");
    Bulb_haitang[3] = localStorage.getItem("Bulb_haitang_4");

    narcissus[0] = localStorage.getItem("narcissus_1");
    narcissus[1] = localStorage.getItem("narcissus_2");
    narcissus[2] = localStorage.getItem("narcissus_3");
    narcissus[3] = localStorage.getItem("narcissus_4");

    Longevity_flowers[0] = localStorage.getItem("Longevity_flowers_1");
    Longevity_flowers[1] = localStorage.getItem("Longevity_flowers_2");
    Longevity_flowers[2] = localStorage.getItem("Longevity_flowers_3");
    Longevity_flowers[3] = localStorage.getItem("Longevity_flowers_4");

    geranium[0] = localStorage.getItem("geranium_1");
    geranium[1] = localStorage.getItem("geranium_2");
    geranium[2] = localStorage.getItem("geranium_3");
    geranium[3] = localStorage.getItem("geranium_4");

    The_orchid[0] = localStorage.getItem("The_orchid_1");
    The_orchid[1] = localStorage.getItem("The_orchid_2");
    The_orchid[2] = localStorage.getItem("The_orchid_3");
    The_orchid[3] = localStorage.getItem("The_orchid_4");

    lily[0] = localStorage.getItem("lily_1");
    lily[1] = localStorage.getItem("lily_2");
    lily[2] = localStorage.getItem("lily_3");
    lily[3] = localStorage.getItem("lily_4");

    Celestial_being[0] = localStorage.getItem("Celestial_being_1");
    Celestial_being[1] = localStorage.getItem("Celestial_being_2");
    Celestial_being[2] = localStorage.getItem("Celestial_being_3");
    Celestial_being[3] = localStorage.getItem("Celestial_being_4");

    Butterfly_orchid[0] = localStorage.getItem("Butterfly_orchid_1");
    Butterfly_orchid[1] = localStorage.getItem("Butterfly_orchid_2");
    Butterfly_orchid[2] = localStorage.getItem("Butterfly_orchid_3");
    Butterfly_orchid[3] = localStorage.getItem("Butterfly_orchid_4");

    cycads[0] = localStorage.getItem("cycads_1");
    cycads[1] = localStorage.getItem("cycads_2");
    cycads[2] = localStorage.getItem("cycads_3");
    cycads[3] = localStorage.getItem("cycads_4");

    Money_plant[0] = localStorage.getItem("Money_plant_1");
    Money_plant[1] = localStorage.getItem("Money_plant_2");
    Money_plant[2] = localStorage.getItem("Money_plant_3");
    Money_plant[3] = localStorage.getItem("Money_plant_4");

    Rich_tree[0] = localStorage.getItem("Rich_tree_1");
    Rich_tree[1] = localStorage.getItem("Rich_tree_2");
    Rich_tree[2] = localStorage.getItem("Rich_tree_3");
    Rich_tree[3] = localStorage.getItem("Rich_tree_4");

    Banyan_tree[0] = localStorage.getItem("Banyan_tree_1");
    Banyan_tree[1] = localStorage.getItem("Banyan_tree_2");
    Banyan_tree[2] = localStorage.getItem("Banyan_tree_3");
    Banyan_tree[3] = localStorage.getItem("Banyan_tree_4");

    araucaria[0] = localStorage.getItem("araucaria_1");
    araucaria[1] = localStorage.getItem("araucaria_2");
    araucaria[2] = localStorage.getItem("araucaria_3");
    araucaria[3] = localStorage.getItem("araucaria_4");

    cycas[0] = localStorage.getItem("cycas_1");
    cycas[1] = localStorage.getItem("cycas_2");
    cycas[2] = localStorage.getItem("cycas_3");
    cycas[3] = localStorage.getItem("cycas_4");

    elm[0] = localStorage.getItem("elm_1");
    elm[1] = localStorage.getItem("elm_2");
    elm[2] = localStorage.getItem("elm_3");
    elm[3] = localStorage.getItem("elm_4");

    podocarpus[0] = localStorage.getItem("podocarpus_1");
    podocarpus[1] = localStorage.getItem("podocarpus_2");
    podocarpus[2] = localStorage.getItem("podocarpus_3");
    podocarpus[3] = localStorage.getItem("podocarpus_4");

    Five_hieroglyphics[0] = localStorage.getItem("Five_hieroglyphics_1");
    Five_hieroglyphics[1] = localStorage.getItem("Five_hieroglyphics_2");
    Five_hieroglyphics[2] = localStorage.getItem("Five_hieroglyphics_3");
    Five_hieroglyphics[3] = localStorage.getItem("Five_hieroglyphics_4");

    Fujian_tea[0] = localStorage.getItem("Fujian_tea_1");
    Fujian_tea[1] = localStorage.getItem("Fujian_tea_2");
    Fujian_tea[2] = localStorage.getItem("Fujian_tea_3");
    Fujian_tea[3] = localStorage.getItem("Fujian_tea_4");



    kelp[0] = localStorage.getItem("kelp_1");
    kelp[1] = localStorage.getItem("kelp_2");
    kelp[2] = localStorage.getItem("kelp_3");
    kelp[3] = localStorage.getItem("kelp_4");

    nori[0] = localStorage.getItem("nori_1");
    nori[1] = localStorage.getItem("nori_2");
    nori[2] = localStorage.getItem("nori_3");
    nori[3] = localStorage.getItem("nori_4");

    wakame[0] = localStorage.getItem("wakame_1");
    wakame[1] = localStorage.getItem("wakame_2");
    wakame[2] = localStorage.getItem("wakame_3");
    wakame[3] = localStorage.getItem("wakame_4");

    AGAR_weed[0] = localStorage.getItem("AGAR_weed_1");
    AGAR_weed[1] = localStorage.getItem("AGAR_weed_2");
    AGAR_weed[2] = localStorage.getItem("AGAR_weed_3");
    AGAR_weed[3] = localStorage.getItem("AGAR_weed_4");

    Long_thread_moss[0] = localStorage.getItem("Long_thread_moss_1");
    Long_thread_moss[1] = localStorage.getItem("Long_thread_moss_2");
    Long_thread_moss[2] = localStorage.getItem("Long_thread_moss_3");
    Long_thread_moss[3] = localStorage.getItem("Long_thread_moss_4");

    ulva[0] = localStorage.getItem("ulva_1");
    ulva[1] = localStorage.getItem("ulva_2");
    ulva[2] = localStorage.getItem("ulva_3");
    ulva[3] = localStorage.getItem("ulva_4");

    asparagusss[0] = localStorage.getItem("asparagusss_1");
    asparagusss[1] = localStorage.getItem("asparagusss_2");
    asparagusss[2] = localStorage.getItem("asparagusss_3");
    asparagusss[3] = localStorage.getItem("asparagusss_4");

    Green_algae[0] = localStorage.getItem("Green_algae_1");
    Green_algae[1] = localStorage.getItem("Green_algae_2");
    Green_algae[2] = localStorage.getItem("Green_algae_3");
    Green_algae[3] = localStorage.getItem("Green_algae_4");

    Brown_algae[0] = localStorage.getItem("Brown_algae_1");
    Brown_algae[1] = localStorage.getItem("Brown_algae_2");
    Brown_algae[2] = localStorage.getItem("Brown_algae_3");
    Brown_algae[3] = localStorage.getItem("Brown_algae_4");

    Red_algae[0] = localStorage.getItem("Red_algae_1");
    Red_algae[1] = localStorage.getItem("Red_algae_2");
    Red_algae[2] = localStorage.getItem("Red_algae_3");
    Red_algae[3] = localStorage.getItem("Red_algae_4");



    King_of_flowers[0] = localStorage.getItem("King_of_flowers_1");
    King_of_flowers[1] = localStorage.getItem("King_of_flowers_2");
    King_of_flowers[2] = localStorage.getItem("King_of_flowers_3");
    King_of_flowers[3] = localStorage.getItem("King_of_flowers_4");

    Have_they[0] = localStorage.getItem("Have_they_1");
    Have_they[1] = localStorage.getItem("Have_they_2");
    Have_they[2] = localStorage.getItem("Have_they_3");
    Have_they[3] = localStorage.getItem("Have_they_4");

    Tortoise_shell_peony[0] = localStorage.getItem("Tortoise_shell_peony_1");
    Tortoise_shell_peony[1] = localStorage.getItem("Tortoise_shell_peony_2");
    Tortoise_shell_peony[2] = localStorage.getItem("Tortoise_shell_peony_3");
    Tortoise_shell_peony[3] = localStorage.getItem("Tortoise_shell_peony_4");

    North_American_silver_crown_jade[0] = localStorage.getItem("North_American_silver_crown_jade_1");
    North_American_silver_crown_jade[1] = localStorage.getItem("North_American_silver_crown_jade_2");
    North_American_silver_crown_jade[2] = localStorage.getItem("North_American_silver_crown_jade_3");
    North_American_silver_crown_jade[3] = localStorage.getItem("North_American_silver_crown_jade_4");

    Spiral_aloe[0] = localStorage.getItem("Spiral_aloe_1");
    Spiral_aloe[1] = localStorage.getItem("Spiral_aloe_2");
    Spiral_aloe[2] = localStorage.getItem("Spiral_aloe_3");
    Spiral_aloe[3] = localStorage.getItem("Spiral_aloe_4");

    Vientiane_kam[0] = localStorage.getItem("Vientiane_kam_1");
    Vientiane_kam[1] = localStorage.getItem("Vientiane_kam_2");
    Vientiane_kam[2] = localStorage.getItem("Vientiane_kam_3");
    Vientiane_kam[3] = localStorage.getItem("Vientiane_kam_4");

    White_YueJie[0] = localStorage.getItem("White_YueJie_1");
    White_YueJie[1] = localStorage.getItem("White_YueJie_2");
    White_YueJie[2] = localStorage.getItem("White_YueJie_3");
    White_YueJie[3] = localStorage.getItem("White_YueJie_4");

    Than_to_smile[0] = localStorage.getItem("Than_to_smile_1");
    Than_to_smile[1] = localStorage.getItem("Than_to_smile_2");
    Than_to_smile[2] = localStorage.getItem("Than_to_smile_3");
    Than_to_smile[3] = localStorage.getItem("Than_to_smile_4");

    Sleep_fire_lotus[0] = localStorage.getItem("Sleep_fire_lotus_1");
    Sleep_fire_lotus[1] = localStorage.getItem("Sleep_fire_lotus_2");
    Sleep_fire_lotus[2] = localStorage.getItem("Sleep_fire_lotus_3");
    Sleep_fire_lotus[3] = localStorage.getItem("Sleep_fire_lotus_4");

    The_ghost_orchid[0] = localStorage.getItem("The_ghost_orchid_1");
    The_ghost_orchid[1] = localStorage.getItem("The_ghost_orchid_2");
    The_ghost_orchid[2] = localStorage.getItem("The_ghost_orchid_3");
    The_ghost_orchid[3] = localStorage.getItem("The_ghost_orchid_4");



    Insecticides[0] = localStorage.getItem("Insecticides_1");
    Insecticides[1] = localStorage.getItem("Insecticides_2");
    Insecticides[2] = localStorage.getItem("Insecticides_3");
    Insecticides[3] = localStorage.getItem("Insecticides_4");

    acaricides[0] = localStorage.getItem("acaricides_1");
    acaricides[1] = localStorage.getItem("acaricides_2");
    acaricides[2] = localStorage.getItem("acaricides_3");
    acaricides[3] = localStorage.getItem("acaricides_4");

    fungicides[0] = localStorage.getItem("fungicides_1");
    fungicides[1] = localStorage.getItem("fungicides_2");
    fungicides[2] = localStorage.getItem("fungicides_3");
    fungicides[3] = localStorage.getItem("fungicides_4");

    herbicides[0] = localStorage.getItem("herbicides_1");
    herbicides[1] = localStorage.getItem("herbicides_2");
    herbicides[2] = localStorage.getItem("herbicides_3");
    herbicides[3] = localStorage.getItem("herbicides_4");



    The_inorganic_fertilizer[0] = localStorage.getItem("The_inorganic_fertilizer_1");
    The_inorganic_fertilizer[1] = localStorage.getItem("The_inorganic_fertilizer_2");
    The_inorganic_fertilizer[2] = localStorage.getItem("The_inorganic_fertilizer_3");
    The_inorganic_fertilizer[3] = localStorage.getItem("The_inorganic_fertilizer_4");

    Organic_fertilizer[0] = localStorage.getItem("Organic_fertilizer_1");
    Organic_fertilizer[1] = localStorage.getItem("Organic_fertilizer_2");
    Organic_fertilizer[2] = localStorage.getItem("Organic_fertilizer_3");
    Organic_fertilizer[3] = localStorage.getItem("Organic_fertilizer_4");

    Gas_fertilizer[0] = localStorage.getItem("Gas_fertilizer_1");
    Gas_fertilizer[1] = localStorage.getItem("Gas_fertilizer_2");
    Gas_fertilizer[2] = localStorage.getItem("Gas_fertilizer_3");
    Gas_fertilizer[3] = localStorage.getItem("Gas_fertilizer_4");

    $Gold_KeL$[0] = localStorage.getItem("$Gold_KeL$_1");
    $Gold_KeL$[1] = localStorage.getItem("$Gold_KeL$_2");
    $Gold_KeL$[2] = localStorage.getItem("$Gold_KeL$_3");
    $Gold_KeL$[3] = localStorage.getItem("$Gold_KeL$_4");
}

function save() {
    localStorage.setItem("Dryrice_1", Dryrice[0]);
    localStorage.setItem("Dryrice_2", Dryrice[1]);
    localStorage.setItem("Dryrice_3", Dryrice[2]);
    localStorage.setItem("Dryrice_4", Dryrice[3]);

    localStorage.setItem("rice_1", rice[0]);
    localStorage.setItem("rice_2", rice[1]);
    localStorage.setItem("rice_3", rice[2]);
    localStorage.setItem("rice_4", rice[3]);

    localStorage.setItem("wheat_1", wheat[0]);
    localStorage.setItem("wheat_2", wheat[1]);
    localStorage.setItem("wheat_3", wheat[2]);
    localStorage.setItem("wheat_4", wheat[3]);

    localStorage.setItem("barley_1", barley[0]);
    localStorage.setItem("barley_2", barley[1]);
    localStorage.setItem("barley_3", barley[2]);
    localStorage.setItem("barley_4", barley[3]);

    localStorage.setItem("rye_1", rye[0]);
    localStorage.setItem("rye_2", rye[1]);
    localStorage.setItem("rye_3", rye[2]);
    localStorage.setItem("rye_4", rye[3]);

    localStorage.setItem("oats_1", oats[0]);
    localStorage.setItem("oats_2", oats[1]);
    localStorage.setItem("oats_3", oats[2]);
    localStorage.setItem("oats_4", oats[3]);

    localStorage.setItem("buckwheat_1", buckwheat[0]);
    localStorage.setItem("buckwheat_2", buckwheat[1]);
    localStorage.setItem("buckwheat_3", buckwheat[2]);
    localStorage.setItem("buckwheat_4", buckwheat[3]);

    localStorage.setItem("broadbeans_1", broadbeans[0]);
    localStorage.setItem("broadbeans_2", broadbeans[1]);
    localStorage.setItem("broadbeans_3", broadbeans[2]);
    localStorage.setItem("broadbeans_4", broadbeans[3]);

    localStorage.setItem("peas_1", peas[0]);
    localStorage.setItem("peas_2", peas[1]);
    localStorage.setItem("peas_3", peas[2]);
    localStorage.setItem("peas_4", peas[3]);

    localStorage.setItem("Mungbeans_1", Mungbeans[0]);
    localStorage.setItem("Mungbeans_2", Mungbeans[1]);
    localStorage.setItem("Mungbeans_3", Mungbeans[2]);
    localStorage.setItem("Mungbeans_4", Mungbeans[3]);

    localStorage.setItem("soybeans_1", soybeans[0]);
    localStorage.setItem("soybeans_2", soybeans[1]);
    localStorage.setItem("soybeans_3", soybeans[2]);
    localStorage.setItem("soybeans_4", soybeans[3]);

    localStorage.setItem("redbeans_1", redbeans[0]);
    localStorage.setItem("redbeans_2", redbeans[1]);
    localStorage.setItem("redbeans_3", redbeans[2]);
    localStorage.setItem("redbeans_4", redbeans[3]);

    localStorage.setItem("peass_1", peass[0]);
    localStorage.setItem("peass_2", peass[1]);
    localStorage.setItem("peass_3", peass[2]);
    localStorage.setItem("peass_4", peass[3]);

    localStorage.setItem("peanuts_1", peanuts[0]);
    localStorage.setItem("peanuts_2", peanuts[1]);
    localStorage.setItem("peanuts_3", peanuts[2]);
    localStorage.setItem("peanuts_4", peanuts[3]);

    localStorage.setItem("regularcorn_1", regularcorn[0]);
    localStorage.setItem("regularcorn_2", regularcorn[1]);
    localStorage.setItem("regularcorn_3", regularcorn[2]);
    localStorage.setItem("regularcorn_4", regularcorn[3]);

    localStorage.setItem("waxycorn_1", waxycorn[0]);
    localStorage.setItem("waxycorn_2", waxycorn[1]);
    localStorage.setItem("waxycorn_3", waxycorn[2]);
    localStorage.setItem("waxycorn_4", waxycorn[3]);

    localStorage.setItem("sweetcorn_1", sweetcorn[0]);
    localStorage.setItem("sweetcorn_2", sweetcorn[1]);
    localStorage.setItem("sweetcorn_3", sweetcorn[2]);
    localStorage.setItem("sweetcorn_4", sweetcorn[3]);

    localStorage.setItem("blackcorn_1", blackcorn[0]);
    localStorage.setItem("blackcorn_2", blackcorn[1]);
    localStorage.setItem("blackcorn_3", blackcorn[2]);
    localStorage.setItem("blackcorn_4", blackcorn[3]);

    localStorage.setItem("Colorfulfruitcorn_1", Colorfulfruitcorn[0]);
    localStorage.setItem("Colorfulfruitcorn_2", Colorfulfruitcorn[1]);
    localStorage.setItem("Colorfulfruitcorn_3", Colorfulfruitcorn[2]);
    localStorage.setItem("Colorfulfruitcorn_4", Colorfulfruitcorn[3]);

    localStorage.setItem("sweetpotato_1", sweetpotato[0]);
    localStorage.setItem("sweetpotato_2", sweetpotato[1]);
    localStorage.setItem("sweetpotato_3", sweetpotato[2]);
    localStorage.setItem("sweetpotato_4", sweetpotato[3]);

    localStorage.setItem("potato_1", potato[0]);
    localStorage.setItem("potato_2", potato[1]);
    localStorage.setItem("potato_3", potato[2]);
    localStorage.setItem("potato_4", potato[3]);

    localStorage.setItem("yams_1", yams[0]);
    localStorage.setItem("yams_2", yams[1]);
    localStorage.setItem("yams_3", yams[2]);
    localStorage.setItem("yams_4", yams[3]);

    localStorage.setItem("multi_headyam_1", multi_headyam[0]);
    localStorage.setItem("multi_headyam_2", multi_headyam[1]);
    localStorage.setItem("multi_headyam_3", multi_headyam[2]);
    localStorage.setItem("multi_headyam_4", multi_headyam[3]);

    localStorage.setItem("large_headyam_1", large_headyam[0]);
    localStorage.setItem("large_headyam_2", large_headyam[1]);
    localStorage.setItem("large_headyam_3", large_headyam[2]);
    localStorage.setItem("large_headyam_4", large_headyam[3]);

    localStorage.setItem("multi_seedyam_1", multi_seedyam[0]);
    localStorage.setItem("multi_seedyam_2", multi_seedyam[1]);
    localStorage.setItem("multi_seedyam_3", multi_seedyam[2]);
    localStorage.setItem("multi_seedyam_4", multi_seedyam[3]);



    localStorage.setItem("ramie_1", ramie[0]);
    localStorage.setItem("ramie_2", ramie[1]);
    localStorage.setItem("ramie_3", ramie[2]);
    localStorage.setItem("ramie_4", ramie[3]);

    localStorage.setItem("jute_1", jute[0]);
    localStorage.setItem("jute_2", jute[1]);
    localStorage.setItem("jute_3", jute[2]);
    localStorage.setItem("jute_4", jute[3]);

    localStorage.setItem("abutilon_1", abutilon[0]);
    localStorage.setItem("abutilon_2", abutilon[1]);
    localStorage.setItem("abutilon_3", abutilon[2]);
    localStorage.setItem("abutilon_4", abutilon[3]);

    localStorage.setItem("marijuana_1", marijuana[0]);
    localStorage.setItem("marijuana_2", marijuana[1]);
    localStorage.setItem("marijuana_3", marijuana[2]);
    localStorage.setItem("marijuana_4", marijuana[3]);

    localStorage.setItem("linen_1", linen[0]);
    localStorage.setItem("linen_2", linen[1]);
    localStorage.setItem("linen_3", linen[2]);
    localStorage.setItem("linen_4", linen[3]);

    localStorage.setItem("apocynum_1", apocynum[0]);
    localStorage.setItem("apocynum_2", apocynum[1]);
    localStorage.setItem("apocynum_3", apocynum[2]);
    localStorage.setItem("apocynum_4", apocynum[3]);

    localStorage.setItem("Ambari_hemp_1", Ambari_hemp[0]);
    localStorage.setItem("Ambari_hemp_2", Ambari_hemp[1]);
    localStorage.setItem("Ambari_hemp_3", Ambari_hemp[2]);
    localStorage.setItem("Ambari_hemp_4", Ambari_hemp[3]);

    localStorage.setItem("Thick_cotton_1", Thick_cotton[0]);
    localStorage.setItem("Thick_cotton_2", Thick_cotton[1]);
    localStorage.setItem("Thick_cotton_3", Thick_cotton[2]);
    localStorage.setItem("Thick_cotton_4", Thick_cotton[3]);

    localStorage.setItem("long_staple_cotton_1", long_staple_cotton[0]);
    localStorage.setItem("long_staple_cotton_2", long_staple_cotton[1]);
    localStorage.setItem("long_staple_cotton_3", long_staple_cotton[2]);
    localStorage.setItem("long_staple_cotton_4", long_staple_cotton[3]);

    localStorage.setItem("Fleecy_wool_1", Fleecy_wool[0]);
    localStorage.setItem("Fleecy_wool_2", Fleecy_wool[1]);
    localStorage.setItem("Fleecy_wool_3", Fleecy_wool[2]);
    localStorage.setItem("Fleecy_wool_4", Fleecy_wool[3]);



    localStorage.setItem("varspinach_1", varspinach[0]);
    localStorage.setItem("varspinach_2", varspinach[1]);
    localStorage.setItem("varspinach_3", varspinach[2]);
    localStorage.setItem("varspinach_4", varspinach[3]);

    localStorage.setItem("parsley_1", parsley[0]);
    localStorage.setItem("parsley_2", parsley[1]);
    localStorage.setItem("parsley_3", parsley[2]);
    localStorage.setItem("parsley_4", parsley[3]);

    localStorage.setItem("celery_1", celery[0]);
    localStorage.setItem("celery_2", celery[1]);
    localStorage.setItem("celery_3", celery[2]);
    localStorage.setItem("celery_4", celery[3]);

    localStorage.setItem("Swampcabbage_1", Swampcabbage[0]);
    localStorage.setItem("Swampcabbage_2", Swampcabbage[1]);
    localStorage.setItem("Swampcabbage_3", Swampcabbage[2]);
    localStorage.setItem("Swampcabbage_4", Swampcabbage[3]);

    localStorage.setItem("Gardenchrysanthemum_1", Gardenchrysanthemum[0]);
    localStorage.setItem("Gardenchrysanthemum_2", Gardenchrysanthemum[1]);
    localStorage.setItem("Gardenchrysanthemum_3", Gardenchrysanthemum[2]);
    localStorage.setItem("Gardenchrysanthemum_4", Gardenchrysanthemum[3]);

    localStorage.setItem("asparagus_1", asparagus[0]);
    localStorage.setItem("asparagus_2", asparagus[1]);
    localStorage.setItem("asparagus_3", asparagus[2]);
    localStorage.setItem("asparagus_4", asparagus[3]);

    localStorage.setItem("fennel_1", fennel[0]);
    localStorage.setItem("fennel_2", fennel[1]);
    localStorage.setItem("fennel_3", fennel[2]);
    localStorage.setItem("fennel_4", fennel[3]);

    localStorage.setItem("amaranth_1", amaranth[0]);
    localStorage.setItem("amaranth_2", amaranth[1]);
    localStorage.setItem("amaranth_3", amaranth[2]);
    localStorage.setItem("amaranth_4", amaranth[3]);

    localStorage.setItem("lettuce_1", lettuce[0]);
    localStorage.setItem("lettuce_2", lettuce[1]);
    localStorage.setItem("lettuce_3", lettuce[2]);
    localStorage.setItem("lettuce_4", lettuce[3]);

    localStorage.setItem("Leaf_lettuce_1", Leaf_lettuce[0]);
    localStorage.setItem("Leaf_lettuce_2", Leaf_lettuce[1]);
    localStorage.setItem("Leaf_lettuce_3", Leaf_lettuce[2]);
    localStorage.setItem("Leaf_lettuce_4", Leaf_lettuce[3]);

    localStorage.setItem("Chinese_cabbage_1", Chinese_cabbage[0]);
    localStorage.setItem("Chinese_cabbage_2", Chinese_cabbage[1]);
    localStorage.setItem("Chinese_cabbage_3", Chinese_cabbage[2]);
    localStorage.setItem("Chinese_cabbage_4", Chinese_cabbage[3]);

    localStorage.setItem("Chinese_cabbagee_1", Chinese_cabbagee[0]);
    localStorage.setItem("Chinese_cabbagee_2", Chinese_cabbagee[1]);
    localStorage.setItem("Chinese_cabbagee_3", Chinese_cabbagee[2]);
    localStorage.setItem("Chinese_cabbagee_4", Chinese_cabbagee[3]);

    localStorage.setItem("Broadbeaked_mustard_1", Broadbeaked_mustard[0]);
    localStorage.setItem("Broadbeaked_mustard_2", Broadbeaked_mustard[1]);
    localStorage.setItem("Broadbeaked_mustard_3", Broadbeaked_mustard[2]);
    localStorage.setItem("Broadbeaked_mustard_4", Broadbeaked_mustard[3]);

    localStorage.setItem("Chinese_cabbageee_1", Chinese_cabbageee[0]);
    localStorage.setItem("Chinese_cabbageee_2", Chinese_cabbageee[1]);
    localStorage.setItem("Chinese_cabbageee_3", Chinese_cabbageee[2]);
    localStorage.setItem("Chinese_cabbageee_4", Chinese_cabbageee[3]);

    localStorage.setItem("rapeseed_1", rapeseed[0]);
    localStorage.setItem("rapeseed_2", rapeseed[1]);
    localStorage.setItem("rapeseed_3", rapeseed[2]);
    localStorage.setItem("rapeseed_4", rapeseed[3]);

    localStorage.setItem("Shepherds_purse_1", Shepherds_purse[0]);
    localStorage.setItem("Shepherds_purse_2", Shepherds_purse[1]);
    localStorage.setItem("Shepherds_purse_3", Shepherds_purse[2]);
    localStorage.setItem("Shepherds_purse_4", Shepherds_purse[3]);

    localStorage.setItem("turnip_1", turnip[0]);
    localStorage.setItem("turnip_2", turnip[1]);
    localStorage.setItem("turnip_3", turnip[2]);
    localStorage.setItem("turnip_4", turnip[3]);

    localStorage.setItem("rapeseedd_1", rapeseedd[0]);
    localStorage.setItem("rapeseedd_2", rapeseedd[1]);
    localStorage.setItem("rapeseedd_3", rapeseedd[2]);
    localStorage.setItem("rapeseedd_4", rapeseedd[3]);

    localStorage.setItem("broccoli_1", broccoli[0]);
    localStorage.setItem("broccoli_2", broccoli[1]);
    localStorage.setItem("broccoli_3", broccoli[2]);
    localStorage.setItem("broccoli_4", broccoli[3]);

    localStorage.setItem("broccolii_1", broccolii[0]);
    localStorage.setItem("broccolii_2", broccolii[1]);
    localStorage.setItem("broccolii_3", broccolii[2]);
    localStorage.setItem("broccolii_4", broccolii[3]);

    localStorage.setItem("cabbage_1", cabbage[0]);
    localStorage.setItem("cabbage_2", cabbage[1]);
    localStorage.setItem("cabbage_3", cabbage[2]);
    localStorage.setItem("cabbage_4", cabbage[3]);

    localStorage.setItem("Purplecabbage_1", Purplecabbage[0]);
    localStorage.setItem("Purplecabbage_2", Purplecabbage[1]);
    localStorage.setItem("Purplecabbage_3", Purplecabbage[2]);
    localStorage.setItem("Purplecabbage_4", Purplecabbage[3]);

    localStorage.setItem("Water_celery_1", Water_celery[0]);
    localStorage.setItem("Water_celery_2", Water_celery[1]);
    localStorage.setItem("Water_celery_3", Water_celery[2]);
    localStorage.setItem("Water_celery_4", Water_celery[3]);

    localStorage.setItem("Green_Chinese_onion_1", Green_Chinese_onion[0]);
    localStorage.setItem("Green_Chinese_onion_2", Green_Chinese_onion[1]);
    localStorage.setItem("Green_Chinese_onion_3", Green_Chinese_onion[2]);
    localStorage.setItem("Green_Chinese_onion_4", Green_Chinese_onion[3]);

    localStorage.setItem("Spring_Onions_1", Spring_Onions[0]);
    localStorage.setItem("Spring_Onions_2", Spring_Onions[1]);
    localStorage.setItem("Spring_Onions_3", Spring_Onions[2]);
    localStorage.setItem("Spring_Onions_4", Spring_Onions[3]);

    localStorage.setItem("garlic_1", garlic[0]);
    localStorage.setItem("garlic_2", garlic[1]);
    localStorage.setItem("garlic_3", garlic[2]);
    localStorage.setItem("garlic_4", garlic[3]);

    localStorage.setItem("Onions_1", Onions[0]);
    localStorage.setItem("Onions_2", Onions[1]);
    localStorage.setItem("Onions_3", Onions[2]);
    localStorage.setItem("Onions_4", Onions[3]);

    localStorage.setItem("leek_1", leek[0]);
    localStorage.setItem("leek_2", leek[1]);
    localStorage.setItem("leek_3", leek[2]);
    localStorage.setItem("leek_4", leek[3]);

    localStorage.setItem("asparaguss_1", asparaguss[0]);
    localStorage.setItem("asparaguss_2", asparaguss[1]);
    localStorage.setItem("asparaguss_3", asparaguss[2]);
    localStorage.setItem("asparaguss_4", asparaguss[3]);

    localStorage.setItem("cucumber_1", cucumber[0]);
    localStorage.setItem("cucumber_2", cucumber[1]);
    localStorage.setItem("cucumber_3", cucumber[2]);
    localStorage.setItem("cucumber_4", cucumber[3]);

    localStorage.setItem("Towel_gourd_1", Towel_gourd[0]);
    localStorage.setItem("Towel_gourd_2", Towel_gourd[1]);
    localStorage.setItem("Towel_gourd_3", Towel_gourd[2]);
    localStorage.setItem("Towel_gourd_4", Towel_gourd[3]);

    localStorage.setItem("Wax_gourd_1", Wax_gourd[0]);
    localStorage.setItem("Wax_gourd_2", Wax_gourd[1]);
    localStorage.setItem("Wax_gourd_3", Wax_gourd[2]);
    localStorage.setItem("Wax_gourd_4", Wax_gourd[3]);

    localStorage.setItem("Bitter_melon_1", Bitter_melon[0]);
    localStorage.setItem("Bitter_melon_2", Bitter_melon[1]);
    localStorage.setItem("Bitter_melon_3", Bitter_melon[2]);
    localStorage.setItem("Bitter_melon_4", Bitter_melon[3]);

    localStorage.setItem("pumpkin_1", pumpkin[0]);
    localStorage.setItem("pumpkin_2", pumpkin[1]);
    localStorage.setItem("pumpkin_3", pumpkin[2]);
    localStorage.setItem("pumpkin_4", pumpkin[3]);

    localStorage.setItem("zucchini_1", zucchini[0]);
    localStorage.setItem("zucchini_2", zucchini[1]);
    localStorage.setItem("zucchini_3", zucchini[2]);
    localStorage.setItem("zucchini_4", zucchini[3]);

    localStorage.setItem("Winter_squash_1", Winter_squash[0]);
    localStorage.setItem("Winter_squash_2", Winter_squash[1]);
    localStorage.setItem("Winter_squash_3", Winter_squash[2]);
    localStorage.setItem("Winter_squash_4", Winter_squash[3]);

    localStorage.setItem("eggplant_1", eggplant[0]);
    localStorage.setItem("eggplant_2", eggplant[1]);
    localStorage.setItem("eggplant_3", eggplant[2]);
    localStorage.setItem("eggplant_4", eggplant[3]);

    localStorage.setItem("tomato_1", tomato[0]);
    localStorage.setItem("tomato_2", tomato[1]);
    localStorage.setItem("tomato_3", tomato[2]);
    localStorage.setItem("tomato_4", tomato[3]);

    localStorage.setItem("chili_1", chili[0]);
    localStorage.setItem("chili_2", chili[1]);
    localStorage.setItem("chili_3", chili[2]);
    localStorage.setItem("chili_4", chili[3]);

    localStorage.setItem("Pepper_dish_1", Pepper_dish[0]);
    localStorage.setItem("Pepper_dish_2", Pepper_dish[1]);
    localStorage.setItem("Pepper_dish_3", Pepper_dish[2]);
    localStorage.setItem("Pepper_dish_4", Pepper_dish[3]);

    localStorage.setItem("The_potato_1", The_potato[0]);
    localStorage.setItem("The_potato_2", The_potato[1]);
    localStorage.setItem("The_potato_3", The_potato[2]);
    localStorage.setItem("The_potato_4", The_potato[3]);

    localStorage.setItem("yam_1", yam[0]);
    localStorage.setItem("yam_2", yam[1]);
    localStorage.setItem("yam_3", yam[2]);
    localStorage.setItem("yam_4", yam[3]);

    localStorage.setItem("taro_1", taro[0]);
    localStorage.setItem("taro_2", taro[1]);
    localStorage.setItem("taro_3", taro[2]);
    localStorage.setItem("taro_4", taro[3]);

    localStorage.setItem("konjac_1", konjac[0]);
    localStorage.setItem("konjac_2", konjac[1]);
    localStorage.setItem("konjac_3", konjac[2]);
    localStorage.setItem("konjac_4", konjac[3]);

    localStorage.setItem("ginger_1", ginger[0]);
    localStorage.setItem("ginger_2", ginger[1]);
    localStorage.setItem("ginger_3", ginger[2]);
    localStorage.setItem("ginger_4", ginger[3]);



    localStorage.setItem("Black_tea_1", Black_tea[0]);
    localStorage.setItem("Black_tea_2", Black_tea[1]);
    localStorage.setItem("Black_tea_3", Black_tea[2]);
    localStorage.setItem("Black_tea_4", Black_tea[3]);

    localStorage.setItem("Green_tea_1", Green_tea[0]);
    localStorage.setItem("Green_tea_2", Green_tea[1]);
    localStorage.setItem("Green_tea_3", Green_tea[2]);
    localStorage.setItem("Green_tea_4", Green_tea[3]);

    localStorage.setItem("Greennn_tea_1", Greennn_tea[0]);
    localStorage.setItem("Greennn_tea_2", Greennn_tea[1]);
    localStorage.setItem("Greennn_tea_3", Greennn_tea[2]);
    localStorage.setItem("Greennn_tea_4", Greennn_tea[3]);

    localStorage.setItem("Yellow_tea_1", Yellow_tea[0]);
    localStorage.setItem("Yellow_tea_2", Yellow_tea[1]);
    localStorage.setItem("Yellow_tea_3", Yellow_tea[2]);
    localStorage.setItem("Yellow_tea_4", Yellow_tea[3]);

    localStorage.setItem("Blackk_tea_1", Blackk_tea[0]);
    localStorage.setItem("Blackk_tea_2", Blackk_tea[1]);
    localStorage.setItem("Blackk_tea_3", Blackk_tea[2]);
    localStorage.setItem("Blackk_tea_4", Blackk_tea[3]);

    localStorage.setItem("White_tea_1", White_tea[0]);
    localStorage.setItem("White_tea_2", White_tea[1]);
    localStorage.setItem("White_tea_3", White_tea[2]);
    localStorage.setItem("White_tea_4", White_tea[3]);

    localStorage.setItem("Whiteandyellowsideear_1", Whiteandyellowsideear[0]);
    localStorage.setItem("Whiteandyellowsideear_2", Whiteandyellowsideear[1]);
    localStorage.setItem("Whiteandyellowsideear_3", Whiteandyellowsideear[2]);
    localStorage.setItem("Whiteandyellowsideear_4", Whiteandyellowsideear[3]);

    localStorage.setItem("deepconcavecupumbrella_1", deepconcavecupumbrella[0]);
    localStorage.setItem("deepconcavecupumbrella_2", deepconcavecupumbrella[1]);
    localStorage.setItem("deepconcavecupumbrella_3", deepconcavecupumbrella[2]);
    localStorage.setItem("deepconcavecupumbrella_4", deepconcavecupumbrella[3]);

    localStorage.setItem("cornblackpinkfungus_1", cornblackpinkfungus[0]);
    localStorage.setItem("cornblackpinkfungus_2", cornblackpinkfungus[1]);
    localStorage.setItem("cornblackpinkfungus_3", cornblackpinkfungus[2]);
    localStorage.setItem("cornblackpinkfungus_4", cornblackpinkfungus[3]);

    localStorage.setItem("Morchella_1", Morchella[0]);
    localStorage.setItem("Morchella_2", Morchella[1]);
    localStorage.setItem("Morchella_3", Morchella[2]);
    localStorage.setItem("Morchella_4", Morchella[3]);

    localStorage.setItem("blacksaddlefungus_1", blacksaddlefungus[0]);
    localStorage.setItem("blacksaddlefungus_2", blacksaddlefungus[1]);
    localStorage.setItem("blacksaddlefungus_3", blacksaddlefungus[2]);
    localStorage.setItem("blacksaddlefungus_4", blacksaddlefungus[3]);

    localStorage.setItem("Whitesaddlefungus_1", Whitesaddlefungus[0]);
    localStorage.setItem("Whitesaddlefungus_2", Whitesaddlefungus[1]);
    localStorage.setItem("Whitesaddlefungus_3", Whitesaddlefungus[2]);
    localStorage.setItem("Whitesaddlefungus_4", Whitesaddlefungus[3]);

    localStorage.setItem("whitewhitemouthmushroom_1", whitewhitemouthmushroom[0]);
    localStorage.setItem("whitewhitemouthmushroom_2", whitewhitemouthmushroom[1]);
    localStorage.setItem("whitewhitemouthmushroom_3", whitewhitemouthmushroom[2]);
    localStorage.setItem("whitewhitemouthmushroom_4", whitewhitemouthmushroom[3]);

    localStorage.setItem("Matsutakemushroom_1", Matsutakemushroom[0]);
    localStorage.setItem("Matsutakemushroom_2", Matsutakemushroom[1]);
    localStorage.setItem("Matsutakemushroom_3", Matsutakemushroom[2]);
    localStorage.setItem("Matsutakemushroom_4", Matsutakemushroom[3]);

    localStorage.setItem("Mongolianmushroom_1", Mongolianmushroom[0]);
    localStorage.setItem("Mongolianmushroom_2", Mongolianmushroom[1]);
    localStorage.setItem("Mongolianmushroom_3", Mongolianmushroom[2]);
    localStorage.setItem("Mongolianmushroom_4", Mongolianmushroom[3]);

    localStorage.setItem("Verticalmushroom_1", Verticalmushroom[0]);
    localStorage.setItem("Verticalmushroom_2", Verticalmushroom[1]);
    localStorage.setItem("Verticalmushroom_3", Verticalmushroom[2]);
    localStorage.setItem("Verticalmushroom_4", Verticalmushroom[3]);

    localStorage.setItem("flammulina_1", flammulina[0]);
    localStorage.setItem("flammulina_2", flammulina[1]);
    localStorage.setItem("flammulina_3", flammulina[2]);
    localStorage.setItem("flammulina_4", flammulina[3]);

    localStorage.setItem("shiitakemushroom_1", shiitakemushroom[0]);
    localStorage.setItem("shiitakemushroom_2", shiitakemushroom[1]);
    localStorage.setItem("shiitakemushroom_3", shiitakemushroom[2]);
    localStorage.setItem("shiitakemushroom_4", shiitakemushroom[3]);

    localStorage.setItem("Pleurotuseryngii_1", Pleurotuseryngii[0]);
    localStorage.setItem("Pleurotuseryngii_2", Pleurotuseryngii[1]);
    localStorage.setItem("Pleurotuseryngii_3", Pleurotuseryngii[2]);
    localStorage.setItem("Pleurotuseryngii_4", Pleurotuseryngii[3]);

    localStorage.setItem("Mushroom_1", Mushroom[0]);
    localStorage.setItem("Mushroom_2", Mushroom[1]);
    localStorage.setItem("Mushroom_3", Mushroom[2]);
    localStorage.setItem("Mushroom_4", Mushroom[3]);

    localStorage.setItem("Strawmushroom_1", Strawmushroom[0]);
    localStorage.setItem("Strawmushroom_2", Strawmushroom[1]);
    localStorage.setItem("Strawmushroom_3", Strawmushroom[2]);
    localStorage.setItem("Strawmushroom_4", Strawmushroom[3]);

    localStorage.setItem("redmushroom_1", redmushroom[0]);
    localStorage.setItem("redmushroom_2", redmushroom[1]);
    localStorage.setItem("redmushroom_3", redmushroom[2]);
    localStorage.setItem("redmushroom_4", redmushroom[3]);


    localStorage.setItem("Bulb_haitang_1", Bulb_haitang[0]);
    localStorage.setItem("Bulb_haitang_2", Bulb_haitang[1]);
    localStorage.setItem("Bulb_haitang_3", Bulb_haitang[2]);
    localStorage.setItem("Bulb_haitang_4", Bulb_haitang[3]);

    localStorage.setItem("narcissus_1", narcissus[0]);
    localStorage.setItem("narcissus_2", narcissus[1]);
    localStorage.setItem("narcissus_3", narcissus[2]);
    localStorage.setItem("narcissus_4", narcissus[3]);

    localStorage.setItem("Longevity_flowers_1", Longevity_flowers[0]);
    localStorage.setItem("Longevity_flowers_2", Longevity_flowers[1]);
    localStorage.setItem("Longevity_flowers_3", Longevity_flowers[2]);
    localStorage.setItem("Longevity_flowers_4", Longevity_flowers[3]);

    localStorage.setItem("geranium_1", geranium[0]);
    localStorage.setItem("geranium_2", geranium[1]);
    localStorage.setItem("geranium_3", geranium[2]);
    localStorage.setItem("geranium_4", geranium[3]);

    localStorage.setItem("The_orchid_1", The_orchid[0]);
    localStorage.setItem("The_orchid_2", The_orchid[1]);
    localStorage.setItem("The_orchid_3", The_orchid[2]);
    localStorage.setItem("The_orchid_4", The_orchid[3]);

    localStorage.setItem("lily_1", lily[0]);
    localStorage.setItem("lily_2", lily[1]);
    localStorage.setItem("lily_3", lily[2]);
    localStorage.setItem("lily_4", lily[3]);

    localStorage.setItem("Celestial_being_1", Celestial_being[0]);
    localStorage.setItem("Celestial_being_2", Celestial_being[1]);
    localStorage.setItem("Celestial_being_3", Celestial_being[2]);
    localStorage.setItem("Celestial_being_4", Celestial_being[3]);

    localStorage.setItem("Butterfly_orchid_1", Butterfly_orchid[0]);
    localStorage.setItem("Butterfly_orchid_2", Butterfly_orchid[1]);
    localStorage.setItem("Butterfly_orchid_3", Butterfly_orchid[2]);
    localStorage.setItem("Butterfly_orchid_4", Butterfly_orchid[3]);

    localStorage.setItem("cycads_1", cycads[0]);
    localStorage.setItem("cycads_2", cycads[1]);
    localStorage.setItem("cycads_3", cycads[2]);
    localStorage.setItem("cycads_4", cycads[3]);

    localStorage.setItem("Money_plant_1", Money_plant[0]);
    localStorage.setItem("Money_plant_2", Money_plant[1]);
    localStorage.setItem("Money_plant_3", Money_plant[2]);
    localStorage.setItem("Money_plant_4", Money_plant[3]);

    localStorage.setItem("Rich_tree_1", Rich_tree[0]);
    localStorage.setItem("Rich_tree_2", Rich_tree[1]);
    localStorage.setItem("Rich_tree_3", Rich_tree[2]);
    localStorage.setItem("Rich_tree_4", Rich_tree[3]);

    localStorage.setItem("Banyan_tree_1", Banyan_tree[0]);
    localStorage.setItem("Banyan_tree_2", Banyan_tree[1]);
    localStorage.setItem("Banyan_tree_3", Banyan_tree[2]);
    localStorage.setItem("Banyan_tree_4", Banyan_tree[3]);

    localStorage.setItem("araucaria_1", araucaria[0]);
    localStorage.setItem("araucaria_2", araucaria[1]);
    localStorage.setItem("araucaria_3", araucaria[2]);
    localStorage.setItem("araucaria_4", araucaria[3]);

    localStorage.setItem("cycas_1", cycas[0]);
    localStorage.setItem("cycas_2", cycas[1]);
    localStorage.setItem("cycas_3", cycas[2]);
    localStorage.setItem("cycas_4", cycas[3]);

    localStorage.setItem("elm_1", elm[0]);
    localStorage.setItem("elm_2", elm[1]);
    localStorage.setItem("elm_3", elm[2]);
    localStorage.setItem("elm_4", elm[3]);

    localStorage.setItem("podocarpus_1", podocarpus[0]);
    localStorage.setItem("podocarpus_2", podocarpus[1]);
    localStorage.setItem("podocarpus_3", podocarpus[2]);
    localStorage.setItem("podocarpus_4", podocarpus[3]);

    localStorage.setItem("Five_hieroglyphics_1", Five_hieroglyphics[0]);
    localStorage.setItem("Five_hieroglyphics_2", Five_hieroglyphics[1]);
    localStorage.setItem("Five_hieroglyphics_3", Five_hieroglyphics[2]);
    localStorage.setItem("Five_hieroglyphics_4", Five_hieroglyphics[3]);

    localStorage.setItem("Fujian_tea_1", Fujian_tea[0]);
    localStorage.setItem("Fujian_tea_2", Fujian_tea[1]);
    localStorage.setItem("Fujian_tea_3", Fujian_tea[2]);
    localStorage.setItem("Fujian_tea_4", Fujian_tea[3]);



    localStorage.setItem("kelp_1", kelp[0]);
    localStorage.setItem("kelp_2", kelp[1]);
    localStorage.setItem("kelp_3", kelp[2]);
    localStorage.setItem("kelp_4", kelp[3]);

    localStorage.setItem("nori_1", nori[0]);
    localStorage.setItem("nori_2", nori[1]);
    localStorage.setItem("nori_3", nori[2]);
    localStorage.setItem("nori_4", nori[3]);

    localStorage.setItem("wakame_1", wakame[0]);
    localStorage.setItem("wakame_2", wakame[1]);
    localStorage.setItem("wakame_3", wakame[2]);
    localStorage.setItem("wakame_4", wakame[3]);

    localStorage.setItem("AGAR_weed_1", AGAR_weed[0]);
    localStorage.setItem("AGAR_weed_2", AGAR_weed[1]);
    localStorage.setItem("AGAR_weed_3", AGAR_weed[2]);
    localStorage.setItem("AGAR_weed_4", AGAR_weed[3]);

    localStorage.setItem("Long_thread_moss_1", Long_thread_moss[0]);
    localStorage.setItem("Long_thread_moss_2", Long_thread_moss[1]);
    localStorage.setItem("Long_thread_moss_3", Long_thread_moss[2]);
    localStorage.setItem("Long_thread_moss_4", Long_thread_moss[3]);

    localStorage.setItem("ulva_1", ulva[0]);
    localStorage.setItem("ulva_2", ulva[1]);
    localStorage.setItem("ulva_3", ulva[2]);
    localStorage.setItem("ulva_4", ulva[3]);

    localStorage.setItem("asparagusss_1", asparagusss[0]);
    localStorage.setItem("asparagusss_2", asparagusss[1]);
    localStorage.setItem("asparagusss_3", asparagusss[2]);
    localStorage.setItem("asparagusss_4", asparagusss[3]);

    localStorage.setItem("Green_algae_1", Green_algae[0]);
    localStorage.setItem("Green_algae_2", Green_algae[1]);
    localStorage.setItem("Green_algae_3", Green_algae[2]);
    localStorage.setItem("Green_algae_4", Green_algae[3]);

    localStorage.setItem("Brown_algae_1", Brown_algae[0]);
    localStorage.setItem("Brown_algae_2", Brown_algae[1]);
    localStorage.setItem("Brown_algae_3", Brown_algae[2]);
    localStorage.setItem("Brown_algae_4", Brown_algae[3]);

    localStorage.setItem("Red_algae_1", Red_algae[0]);
    localStorage.setItem("Red_algae_2", Red_algae[1]);
    localStorage.setItem("Red_algae_3", Red_algae[2]);
    localStorage.setItem("Red_algae_4", Red_algae[3]);



    localStorage.setItem("King_of_flowers_1", King_of_flowers[0]);
    localStorage.setItem("King_of_flowers_2", King_of_flowers[1]);
    localStorage.setItem("King_of_flowers_3", King_of_flowers[2]);
    localStorage.setItem("King_of_flowers_4", King_of_flowers[3]);

    localStorage.setItem("Have_they_1", Have_they[0]);
    localStorage.setItem("Have_they_2", Have_they[1]);
    localStorage.setItem("Have_they_3", Have_they[2]);
    localStorage.setItem("Have_they_4", Have_they[3]);

    localStorage.setItem("Tortoise_shell_peony_1", Tortoise_shell_peony[0]);
    localStorage.setItem("Tortoise_shell_peony_2", Tortoise_shell_peony[1]);
    localStorage.setItem("Tortoise_shell_peony_3", Tortoise_shell_peony[2]);
    localStorage.setItem("Tortoise_shell_peony_4", Tortoise_shell_peony[3]);

    localStorage.setItem("North_American_silver_crown_jade_1", North_American_silver_crown_jade[0]);
    localStorage.setItem("North_American_silver_crown_jade_2", North_American_silver_crown_jade[1]);
    localStorage.setItem("North_American_silver_crown_jade_3", North_American_silver_crown_jade[2]);
    localStorage.setItem("North_American_silver_crown_jade_4", North_American_silver_crown_jade[3]);

    localStorage.setItem("Spiral_aloe_1", Spiral_aloe[0]);
    localStorage.setItem("Spiral_aloe_2", Spiral_aloe[1]);
    localStorage.setItem("Spiral_aloe_3", Spiral_aloe[2]);
    localStorage.setItem("Spiral_aloe_4", Spiral_aloe[3]);

    localStorage.setItem("Vientiane_kam_1", Vientiane_kam[0]);
    localStorage.setItem("Vientiane_kam_2", Vientiane_kam[1]);
    localStorage.setItem("Vientiane_kam_3", Vientiane_kam[2]);
    localStorage.setItem("Vientiane_kam_4", Vientiane_kam[3]);

    localStorage.setItem("White_YueJie_1", White_YueJie[0]);
    localStorage.setItem("White_YueJie_2", White_YueJie[1]);
    localStorage.setItem("White_YueJie_3", White_YueJie[2]);
    localStorage.setItem("White_YueJie_4", White_YueJie[3]);

    localStorage.setItem("Than_to_smile_1", Than_to_smile[0]);
    localStorage.setItem("Than_to_smile_2", Than_to_smile[1]);
    localStorage.setItem("Than_to_smile_3", Than_to_smile[2]);
    localStorage.setItem("Than_to_smile_4", Than_to_smile[3]);

    localStorage.setItem("Sleep_fire_lotus_1", Sleep_fire_lotus[0]);
    localStorage.setItem("Sleep_fire_lotus_2", Sleep_fire_lotus[1]);
    localStorage.setItem("Sleep_fire_lotus_3", Sleep_fire_lotus[2]);
    localStorage.setItem("Sleep_fire_lotus_4", Sleep_fire_lotus[3]);

    localStorage.setItem("The_ghost_orchid_1", The_ghost_orchid[0]);
    localStorage.setItem("The_ghost_orchid_2", The_ghost_orchid[1]);
    localStorage.setItem("The_ghost_orchid_3", The_ghost_orchid[2]);
    localStorage.setItem("The_ghost_orchid_4", The_ghost_orchid[3]);



    localStorage.setItem("Insecticides_1", Insecticides[0]);
    localStorage.setItem("Insecticides_2", Insecticides[1]);
    localStorage.setItem("Insecticides_3", Insecticides[2]);
    localStorage.setItem("Insecticides_4", Insecticides[3]);

    localStorage.setItem("acaricides_1", acaricides[0]);
    localStorage.setItem("acaricides_2", acaricides[1]);
    localStorage.setItem("acaricides_3", acaricides[2]);
    localStorage.setItem("acaricides_4", acaricides[3]);

    localStorage.setItem("fungicides_1", fungicides[0]);
    localStorage.setItem("fungicides_2", fungicides[1]);
    localStorage.setItem("fungicides_3", fungicides[2]);
    localStorage.setItem("fungicides_4", fungicides[3]);

    localStorage.setItem("herbicides_1", herbicides[0]);
    localStorage.setItem("herbicides_2", herbicides[1]);
    localStorage.setItem("herbicides_3", herbicides[2]);
    localStorage.setItem("herbicides_4", herbicides[3]);



    localStorage.setItem("The_inorganic_fertilizer_1", The_inorganic_fertilizer[0]);
    localStorage.setItem("The_inorganic_fertilizer_2", The_inorganic_fertilizer[1]);
    localStorage.setItem("The_inorganic_fertilizer_3", The_inorganic_fertilizer[2]);
    localStorage.setItem("The_inorganic_fertilizer_4", The_inorganic_fertilizer[3]);

    localStorage.setItem("Organic_fertilizer_1", Organic_fertilizer[0]);
    localStorage.setItem("Organic_fertilizer_2", Organic_fertilizer[1]);
    localStorage.setItem("Organic_fertilizer_3", Organic_fertilizer[2]);
    localStorage.setItem("Organic_fertilizer_4", Organic_fertilizer[3]);

    localStorage.setItem("Gas_fertilizer_1", Gas_fertilizer[0]);
    localStorage.setItem("Gas_fertilizer_2", Gas_fertilizer[1]);
    localStorage.setItem("Gas_fertilizer_3", Gas_fertilizer[2]);
    localStorage.setItem("Gas_fertilizer_4", Gas_fertilizer[3]);

    localStorage.setItem("$Gold_KeL$_1", $Gold_KeL$[0]);
    localStorage.setItem("$Gold_KeL$_2", $Gold_KeL$[1]);
    localStorage.setItem("$Gold_KeL$_3", $Gold_KeL$[2]);
    localStorage.setItem("$Gold_KeL$_4", $Gold_KeL$[3]);
}

function putcellupp() {
    //n_==拥有亩数
    //s_==售价
    //m_==亩产
    //h_==当前拥有
    //w_==缺水
    //$_ + (物品的名字)
    //  [价格][拥有亩][亩产][拥有数量（单位）]0，1，2，3
    var f;
    var g;
    //0-25，25-35，35-80，80-86，86-102，102-120，120-130，130-140
    if (new_page == "五谷类") {
        f = 0;
        g = 25;
    }
    if (new_page == "麻，棉花") {
        f = 25;
        g = 35;
    }
    if (new_page == "蔬果") {
        f = 35;
        g = 80;
    }
    if (new_page == "茶") {
        f = 80;
        g = 86;
    }
    if (new_page == "菌类") {
        f = 86;
        g = 102;
    }
    if (new_page == "观赏类") {
        f = 102;
        g = 120;
    }
    if (new_page == "海产作物") {
        f = 120;
        g = 130;
    }
    if (new_page == "稀有品种") {
        f = 130;
        g = 140;
    }
    //139
    for (var i = f; i < g; i++) {
        document.getElementById("n_" + i).innerHTML = combine[i][1];
        document.getElementById("s_" + i).innerHTML = combine[i][0];
        document.getElementById("m_" + i).innerHTML = Number(combine[i][2]).toFixed(5) + 'KG/秒';
        document.getElementById("h_" + i).innerHTML = Number(combine[i][3]).toFixed(3);
        document.getElementById("w_" + i).innerHTML = hydropenia;
    }
}

function dispose(name, type) {
    //name==作物名称，type==作物内数据种类
    //[价格][拥有亩][亩产][拥有数量（单位）]0，1，2，3
    //[拥有亩][价格（出售）][亩产][拥有数量（单位）]1，0，2，3
    var a = name;
    var b = type;
    if (b == 1 && cash >= 2000) {
        if (combine[a][b] == 0) {
            inform("恭喜，解锁新作物！", 5000);
            exp(25);
        }
        cash = Number(cash) - 2000;
        combine[a][b] = Number(combine[a][b]) + 1;
        water_expend = Number(water_expend) + 0.0001;
        water_expend = Number(water_expend).toFixed(5);
        exp(3);
        waterset();
        waterget();
        save();
        saveup();
        getup();
        putup();
        get();
        putcellupp();
        lock();
        inform("作物“亩数+1”", 5000);
    }
    if (b == 1 && cash < 2000) {
        inform("现金数量不足“2000”", 5000);
    }
    if (b == 0 && combine[a][3] >= 1) {
        cash = Number(cash) + Number(combine[a][b]);
        combine[a][3] = Number(combine[a][3]) - 1;
        save();
        saveup();
        getup();
        putup();
        get();
        putcellupp();
        lock();
        inform("作物出售成功(1kg)“现金+" + combine[a][b] + '”', 5000);
    }
    if (b == 0 && combine[a][3] < 1) {
        inform("作物不足“1KG”", 5000);
    }
    if (b == 2 && fertilizer >= 30) {
        fertilizer = Number(fertilizer) - 30;
        combine[a][b] = Number(combine[a][b]) + 0.1;
        exp(0.7);
        save();
        saveup();
        getup();
        putup();
        get();
        putcellupp();
        lock();
        inform("作物亩产增加“0.1kg/秒”", 5000);
    }
    if (b == 2 && fertilizer < 30) {
        inform("肥料值不足“30”", 5000);
    }
}
var abc = 1;

function addsec() {
    //0是售价
    //[价格][拥有亩][亩产][拥有数量（单位）]
    setTimeout(function() {
        for (var j = 0; j < 140; j++) {
            if (hydropenia != "水资源缺乏") {
                if (combine[j][1] > 0) {
                    combine[j][3] = Number(combine[j][3]) + (Number(combine[j][2]) * Number(combine[j][1]));
                }
                if (combine[j][1] > 0 && autoo == true) {
                    cash = Number(cash) + (Number(combine[j][0]) * (Number(combine[j][2]) * Number(combine[j][1])));
                    combine[j][3] = Number(combine[j][3]) - (Number(combine[j][2]) * Number(combine[j][1]));
                }
            } else {}
            putcellupp();
        }
        //水库
        if (water_present > 0) {
            hydropenia = "水资源丰富";
        }
        if (Number(water_present) > Number(water_capacity)) {
            water_present = (Number(water_capacity) - (Number(water_yield) - Number(water_expend)));
        }
        if (water_present <= 0 || water_present <= "0") {
            hydropenia = "水资源缺乏";
            water_present = "0";
        }
        water_present = Number(water_present) + Number(water_yield);
        water_present = Number(water_present).toFixed(5);
        water_present = Number(water_present) - Number(water_expend);
        water_present = Number(water_present).toFixed(5);
        addsec();
    }, 1000);
    setTimeout(function() {
        save();
        saveup();
        getup();
        putup();
        get();
        putcellupp();
        waterset();
        waterget();
        if (new_page == "水源") water_b();
    }, 5000);
}

function addf(type) {
    if (type == "1") {
        cash = Number(cash) - 550;
        fertilizer = Number(fertilizer) + 150;
        exp(1);
        save();
        saveup();
        getup();
        putup();
        get();
        putcellupp();
    }
    if (type == "2") {
        cash = Number(cash) - 1250;
        fertilizer = Number(fertilizer) + 350;
        exp(1.5);
        save();
        saveup();
        getup();
        putup();
        get();
        putcellupp();
    }
    if (type == "3") {
        cash = Number(cash) - 1550;
        fertilizer = Number(fertilizer) + 650;
        exp(2);
        save();
        saveup();
        getup();
        putup();
        get();
        putcellupp();
    }
    if (type == "4") {
        cash = Number(cash) - 3550;
        fertilizer = Number(fertilizer) + 2100;
        exp(2.5);
        save();
        saveup();
        getup();
        putup();
        get();
        putcellupp();
    }
}

function autoc() {
    if (autoo == false || localStorage.getItem("autoo") == "f") {
        autoo = true;
        inform("自动出售开启成功", 5000);
        localStorage.setItem("autoo", "t");
        document.getElementById("autoc_in").innerHTML = "自动出售︿<br>已开<br>﹀";
    } else if (autoo == true || localStorage.getItem("autoo") == "t") {
        autoo = false;
        inform("自动出售关闭成功", 5000);
        localStorage.setItem("autoo", "f");
        document.getElementById("autoc_in").innerHTML = "自动出售︿<br>已关<br>﹀";
    } else {
        inform("自动出售开启失败", 5000);
    }

}

function waterbuy(nunm) {
    if (nunm == 1 && cash >= 300) {
        cash = Number(cash) - 300;
        water_yield = Number(water_yield) + 0.0001;
        water_yield = Number(water_yield).toFixed(5);
        waterset();
        waterget();
        watergetup();
        water_b();
    } else if (nunm == 1 && cash < 300) {
        inform("现金数量不足“300”", 5000);
    }
    if (nunm == 2 && cash >= 550) {
        cash = Number(cash) - 550;
        water_yield = Number(water_yield) + 0.1;
        water_yield = Number(water_yield).toFixed(5);
        waterset();
        waterget();
        watergetup();
        water_b();
    } else if (nunm == 2 && cash < 550) {
        inform("现金数量不足“550”", 5000);
    }
    if (nunm == 3 && cash >= 2050) {
        cash = Number(cash) - 2050;
        water_yield = Number(water_yield) + 1;
        water_yield = Number(water_yield).toFixed(5);
        waterset();
        waterget();
        watergetup();
        water_b();
    } else if (nunm == 3 && cash < 2050) {
        inform("现金数量不足“2050”", 5000);
    }
    if (nunm == 4 && cash >= 850) {
        cash = Number(cash) - 850;
        water_expend = Number(water_expend) - 0.008;
        water_expend = Number(water_expend).toFixed(6);
        waterset();
        waterget();
        watergetup();
        water_b();
    } else if (nunm == 4 && cash < 850) {
        inform("现金数量不足“850”", 5000);
    }
    if (nunm == 5 && cash >= 2050) {
        cash = Number(cash) - 2050;
        water_expend = Number(water_expend) - 0.3;
        water_expend = Number(water_expend).toFixed(6);
        waterset();
        waterget();
        watergetup();
        water_b();
    } else if (nunm == 5 && cash < 2050) {
        inform("现金数量不足“2050”", 5000);
    }
    if (nunm == 6 && cash >= 5050) {
        cash = Number(cash) - 5050;
        water_expend = Number(water_expend) - 0.9;
        water_expend = Number(water_expend).toFixed(6);
        waterset();
        waterget();
        watergetup();
        water_b();
    } else if (nunm == 6 && cash < 5050) {
        inform("现金数量不足“5050”", 5000);
    }
}

function waterset() {
    localStorage.setItem("water_expend", water_expend)
    localStorage.setItem("water_present", water_present)
    localStorage.setItem("water_yield", water_yield)
    localStorage.setItem("water_capacity", water_capacity)
}

function waterget() {
    water_expend = localStorage.getItem("water_expend");
    water_present = localStorage.getItem("water_present");
    water_yield = localStorage.getItem("water_yield");
    water_capacity = localStorage.getItem("water_capacity");
    if (new_page == "水源") {
        watergetup();
    }
}

function watergetup() {
    document.getElementById("water_cell-1").innerHTML = water_expend;
    document.getElementById("water_cell-2").innerHTML = water_present;
    document.getElementById("water_cell-3").innerHTML = water_yield;
    document.getElementById("water_cell-4").innerHTML = water_capacity;
}

var water_ten;

function water_b() {
    water_ten = Number(water_present) / Number(water_capacity);
    if (water_ten >= 0.1) {
        document.getElementById("w_10").style.backgroundColor = "rgb(0, 102, 255)"
    } else { document.getElementById("w_10").style.backgroundColor = "rgba(0, 0, 0, 0)" }
    if (water_ten >= 0.2) {
        document.getElementById("w_9").style.backgroundColor = "rgb(0, 102, 255)"
    } else { document.getElementById("w_9").style.backgroundColor = "rgba(0, 0, 0, 0)" }
    if (water_ten >= 0.3) {
        document.getElementById("w_8").style.backgroundColor = "rgb(0, 102, 255)"
    } else { document.getElementById("w_8").style.backgroundColor = "rgba(0, 0, 0, 0)" }
    if (water_ten >= 0.4) {
        document.getElementById("w_7").style.backgroundColor = "rgb(0, 102, 255)"
    } else { document.getElementById("w_7").style.backgroundColor = "rgba(0, 0, 0, 0)" }
    if (water_ten >= 0.5) {
        document.getElementById("w_6").style.backgroundColor = "rgb(0, 102, 255)"
    } else { document.getElementById("w_6").style.backgroundColor = "rgba(0, 0, 0, 0)" }
    if (water_ten >= 0.6) {
        document.getElementById("w_5").style.backgroundColor = "rgb(0, 102, 255)"
    } else { document.getElementById("w_5").style.backgroundColor = "rgba(0, 0, 0, 0)" }
    if (water_ten >= 0.7) {
        document.getElementById("w_4").style.backgroundColor = "rgb(0, 102, 255)"
    } else { document.getElementById("w_4").style.backgroundColor = "rgba(0, 0, 0, 0)" }
    if (water_ten >= 0.8) {
        document.getElementById("w_3").style.backgroundColor = "rgb(0, 102, 255)"
    } else { document.getElementById("w_3").style.backgroundColor = "rgba(0, 0, 0, 0)" }
    if (water_ten >= 0.9) {
        document.getElementById("w_2").style.backgroundColor = "rgb(0, 102, 255)"
    } else { document.getElementById("w_2").style.backgroundColor = "rgba(0, 0, 0, 0)" }
    if (water_ten >= 1) {
        document.getElementById("w_01").style.backgroundColor = "rgb(0, 102, 255)"
    } else { document.getElementById("w_01").style.backgroundColor = "rgba(0, 0, 0, 0)" }
}