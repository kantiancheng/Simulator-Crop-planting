//定义变量
var newnamebar;
var x;
var userteach = false;

//查重
var in_te = "";
var time_w;

//加载
function onloding() {
    document.getElementById("loding").hidden = true;
}

const audio = new Audio("music.mp3");


//侧导航栏颜色变化
function overr(x) {
    x.style.backgroundColor = "rgb(233, 244, 254)";
}

function leaver(x) {
    x.style.backgroundColor = "rgba(251, 251, 251, 0.434)";
}


function sellshow() {
    //n_==拥有亩数
    //s_==售价
    //m_==亩产
    //h_==当前拥有
    //w_==缺水
    //$_ + (物品的名字)
    putcellupp();
}

function setuid() {
    var set = document.getElementById('uidvv').value;
    localStorage.setItem("newuser", false);
    localStorage.setItem("nickname", set);
    GenNonDuplicateID();
    userteach();



    function userteach() {
        setTimeout(function() {
            document.getElementById('waifu').style.setProperty("display", "");
            document.getElementById('live2d').hidden = false;
            const div = document.getElementById("waifu-tips");
            div.className = 'waifu-tips-active';
            const divt = document.getElementById("waifu-tips");
            divt.innerHTML = "hi!";
            document.getElementById('waifu').style.setProperty("pointer-events", "none");
            document.getElementById('sidebar').style.setProperty("pointer-events", "none");
            setTimeout(function() {
                const div = document.getElementById("waifu-tips");
                div.className = 'waifu-tips-active';
                const divt = document.getElementById("waifu-tips");
                divt.innerHTML = "你好" + nickname + '，我是你的小助手！';
                setTimeout(function() {
                    const div = document.getElementById("waifu-tips");
                    div.className = 'waifu-tips-active';
                    const divt = document.getElementById("waifu-tips");
                    divt.innerHTML = "很高兴认识你！";
                    setTimeout(function() {
                        const div = document.getElementById("waifu-tips");
                        div.className = 'waifu-tips-active';
                        const divt = document.getElementById("waifu-tips");
                        divt.innerHTML = "你看，最上面显示的是你的基础也是最重要的信息！";
                        setTimeout(function() {
                            newnamebar = document.getElementById("topbar").className;
                            const div = document.getElementById("waifu-tips");
                            div.className = 'waifu-tips-active';
                            const divt = document.getElementById("waifu-tips");
                            divt.innerHTML = "你看，最上面显示的是你的基础也是最重要的信息！";
                            document.getElementById("topbar").className = "redline";
                            setTimeout(function() {
                                // document.getElementById("topbar").className = newnamebar;
                                const div = document.getElementById("waifu-tips");
                                div.className = 'waifu-tips-active';
                                const divt = document.getElementById("waifu-tips");
                                divt.innerHTML = "'经验'是很重要重要的东西，当经验到达一定高度时可以解锁对应的作物！";
                                Experience = Number(Experience) + 50;
                                get();
                                save();
                                saveup();
                                getup();
                                putup();
                                sellshow();
                                setTimeout(function() {
                                    // document.getElementById("topbar").className = newnamebar;
                                    const div = document.getElementById("waifu-tips");
                                    div.className = 'waifu-tips-active';
                                    const divt = document.getElementById("waifu-tips");
                                    divt.innerHTML = "'现金'是你购买任何东西的货币!";
                                    cash = Number(cash) + 200;
                                    get();
                                    save();
                                    saveup();
                                    getup();
                                    putup();
                                    sellshow();
                                }, 3600);
                                setTimeout(function() {
                                    // document.getElementById("topbar").className = newnamebar;
                                    const div = document.getElementById("waifu-tips");
                                    div.className = 'waifu-tips-active';
                                    const divt = document.getElementById("waifu-tips");
                                    divt.innerHTML = "'问题数'是你目前出现的任何问题的数量，包括作物缺水!";
                                    setTimeout(function() {
                                        // document.getElementById("topbar").className = newnamebar;
                                        const div = document.getElementById("waifu-tips");
                                        div.className = 'waifu-tips-active';
                                        const divt = document.getElementById("waifu-tips");
                                        divt.innerHTML = "'节气/天气'是决定当前作物产量和触发事件的东西!";
                                        weather = "晴天/26°C";
                                        get();
                                        save();
                                        saveup();
                                        getup();
                                        putup();
                                        sellshow();
                                        setTimeout(function() {
                                            const div = document.getElementById("waifu-tips");
                                            div.className = 'waifu-tips-active';
                                            const divt = document.getElementById("waifu-tips");
                                            divt.innerHTML = "再见了朋友，你可以在（设置>小助手）中找到我！";
                                            setTimeout(function() {
                                                // document.getElementById("topbar").className = newnamebar;
                                                document.getElementById("topbar").className = "topbar";
                                                document.getElementById('waifu').style.setProperty("pointer-events", "auto");
                                                document.getElementById('sidebar').style.setProperty("pointer-events", "auto");
                                                localStorage.setItem("helper", false)
                                                initialize();
                                            }, 3600);
                                        }, 3600);
                                    }, 3600);
                                }, 3600);
                            }, 1000);
                        }, 3600);
                    }, 4600);
                }, 4500);
            }, 400);
        }, 400);
    }

    function GenNonDuplicateID(randomLength) {
        let idStr = Date.now().toString(36);
        idStr += Math.random().toString(36).substr(3, randomLength);
        var IDS = idStr;
        localStorage.setItem("IDS", IDS);
    }
    putup();
    initialize();
}

/*function gg() {
    const div = document.getElementById("waifu-tips");
    div.className = 'waifu-tips-active';
    const divt = document.getElementById("waifu-tips");
    divt.innerHTML = "hi";
}*/


function initialize() {
    document.getElementById("inform").hidden = true;
    //  audio.play();
    var pageheight = window.innerWidth;
    pageheight = pageheight - (300 + 30);
    pageheight = pageheight + "px";
    //小助手
    var helper = localStorage.getItem("helper");
    if (helper == true) {
        document.getElementById('waifu').style.setProperty("margin-left", pageheight);
        document.getElementById('waifu-toggle').innerHTML = '召唤小助手';
    } else {
        try {
            document.getElementById('waifu').style.setProperty("display", "none");
        } catch (error) {
            location.reload();
        }
    }
    //新用户初始化
    newuser = localStorage.getItem("newuser");
    if (newuser != null) {
        document.getElementById('uidvv').style.display = "none";
        document.getElementById('hide').style.display = "none";
    }
    if (newuser == null) {
        save();
        waterset();
        saveup();
        //   document.getElementById('ufalert').style.display = "none";
        document.getElementById('live2d').hidden = true;
        if (new_page != "主页") {
            window.location = "./index.html";
        }
        if (new_page == "主页") {
            document.getElementById('ufalert').style.display = "none";
        }
    }
    if (localStorage.getItem("autoo") == "t") {
        autoo = true;
        inform("自动出售开启成功", 5000);
        document.getElementById("autoc_in").innerHTML = "自动出售︿<br>已开<br>﹀";
    } else if (localStorage.getItem("autoo") == "f") {
        autoo = false;
        inform("自动出售关闭成功", 5000);
        document.getElementById("autoc_in").innerHTML = "自动出售︿<br>已关<br>﹀";
    }

    //数据价格初始化
    get();
    save();
    getup();
    putup();
    myFunc();
    waterget();
    if (new_page == "水源") water_b();
    sellshow();
    addsec();
    lock();
    console.log();
    if (new_page == "瑞士银行") {
        bank_chrnge("index");
        bank_chack();
    }

    //随机数
    function myFunc() {
        x = Math.floor(Math.random() * 5);
    }
    /*五谷类:
    旱稻,水稻,小麦,大麦,黑麦,燕麦,荞麦,蚕豆,豌豆,
    绿豆,黄豆,红豆,豌豆,花生,普通玉米,糯玉米,甜玉米,黑玉米,
    彩色水果玉米,甘薯,马铃薯,山药,多头芋,大魁芋,多子芋*/
    Dryrice[0] = 15 + x;
    rice[0] = 21 + x;
    wheat[0] = 17 + x;
    barley[0] = 18 + x;
    rye[0] = 22 + x;
    oats[0] = 27 + x;
    buckwheat[0] = 31 + x;
    broadbeans[0] = 36 + x;
    peas[0] = 29 + x;
    Mungbeans[0] = 19.5 + x;
    soybeans[0] = 24 + x;
    redbeans[0] = 31 + x;
    peass[0] = 32 + x;
    peanuts[0] = 43 + x;
    regularcorn[0] = 50 + x;
    waxycorn[0] = 55 + x;
    sweetcorn[0] = 58 + x;
    blackcorn[0] = 57 + x;
    Colorfulfruitcorn[0] = 61 + x;
    sweetpotato[0] = 35 + x;
    potato[0] = 40 + x;
    yams[0] = 69 + x;
    multi_headyam[0] = 86 + x;
    large_headyam[0] = 89 + x;
    multi_seedyam[0] = 79 + x;


    /*麻 棉花:
    苎麻,黄麻,青麻,大麻,亚麻,罗布麻,槿麻,
    粗绒棉,长绒棉,细绒棉*/
    ramie[0] = 14 + x;
    jute[0] = 30 + x;
    abutilon[0] = 18 + x;
    marijuana[0] = 970 + x;
    linen[0] = 43 + x;
    apocynum[0] = 39 + x;
    Ambari_hemp[0] = 20 + x;
    Thick_cotton[0] = 22 + x;
    long_staple_cotton[0] = 53 + x;
    Fleecy_wool[0] = 190 + x;


    /*果蔬类:
    菠菜,香菜,芹菜,蕹菜,茼蒿,芦笋,茴香,苋菜,莴苣,油麦菜,白菜类,青菜,塌棵菜,大白菜,油菜,荠菜,
    芜菁,油菜,西兰花,花椰菜,卷心菜,紫甘蓝,水芹,大葱,小葱,大蒜,洋葱,韭菜,芦笋,黄瓜,丝瓜,冬瓜,
    苦瓜,南瓜,西葫芦,笋瓜,茄子,番茄,辣椒,菜椒,马铃薯,山药,芋头,魔芋,姜*/
    varspinach[0] = 34 + x;
    parsley[0] = 40 + x;
    celery[0] = 39 + x;
    Swampcabbage[0] = 29 + x;
    Gardenchrysanthemum[0] = 49 + x;
    asparagus[0] = 74 + x;
    fennel[0] = 60 + x;
    amaranth[0] = 49 + x;
    lettuce[0] = 39 + x;
    Leaf_lettuce[0] = 48 + x;
    Chinese_cabbage[0] = 38 + x;
    Chinese_cabbagee[0] = 34 + x;
    Broadbeaked_mustard[0] = 31 + x;
    Chinese_cabbageee[0] = 39 + x;
    rapeseed[0] = 45 + x;
    Shepherds_purse[0] = 56 + x;
    turnip[0] = 67 + x;
    rapeseedd[0] = 74 + x;
    broccoli[0] = 49 + x;
    broccolii[0] = 80 + x;
    cabbage[0] = 40 + x;
    Purplecabbage[0] = 65 + x;
    Water_celery[0] = 45 + x;
    Green_Chinese_onion[0] = 60 + x;
    Spring_Onions[0] = 69 + x;
    garlic[0] = 67 + x;
    Onions[0] = 59 + x;
    leek[0] = 79 + x;
    asparaguss[0] = 65 + x;
    cucumber[0] = 59 + x;
    Towel_gourd[0] = 65 + x;
    Wax_gourd[0] = 77 + x;
    Bitter_melon[0] = 68 + x;
    pumpkin[0] = 59 + x;
    zucchini[0] = 69 + x;
    Winter_squash[0] = 72 + x;
    eggplant[0] = 59 + x;
    tomato[0] = 76 + x;
    chili[0] = 69 + x;
    Pepper_dish[0] = 70 + x;
    The_potato[0] = 64 + x;
    yam[0] = 59 + x;
    taro[0] = 81 + x;
    konjac[0] = 83 + x;
    ginger[0] = 38 + x;


    /*茶:
    红茶,绿茶,清茶,黄茶,黑茶,白茶
    */
    Black_tea[0] = 310 + x;
    Green_tea[0] = 299 + x;
    Greennn_tea[0] = 380 + x;
    Yellow_tea[0] = 286 + x;
    Blackk_tea[0] = 430 + x;
    White_tea[0] = 680 + x;


    /*菌类:
    白黄侧耳,深凹杯伞,玉米黑粉菌,羊肚菌,黑马鞍菌,白马鞍菌,大白口蘑菇,
    松茸,蒙古口菇,鸡纵菌,金针菇,香菇,杏鲍菇,蘑菇,草菇,红菇
    */
    Whiteandyellowsideear[0] = 430 + x;
    deepconcavecupumbrella[0] = 530 + x;
    cornblackpinkfungus[0] = 290 + x;
    Morchella[0] = 489 + x;
    blacksaddlefungus[0] = 340 + x;
    Whitesaddlefungus[0] = 519 + x;
    whitewhitemouthmushroom[0] = 398 + x;
    Matsutakemushroom[0] = 489 + x;
    Mongolianmushroom[0] = 438 + x;
    Verticalmushroom[0] = 647 + x;
    flammulina[0] = 487 + x;
    shiitakemushroom[0] = 648 + x;
    Pleurotuseryngii[0] = 598 + x;
    Mushroom[0] = 589 + x;
    Strawmushroom[0] = 587 + x;
    redmushroom[0] = 499 + x;


    /*观赏:
    球根海棠,水仙,长寿花,天竺葵,兰花,百合,仙人球,蝴蝶兰,苏铁,
    绿萝,发财树,榕树,南洋杉,铁树,榆树,罗汉松,五针松,福建茶
    */
    Bulb_haitang[0] = 120 + x;
    narcissus[0] = 80 + x;
    Longevity_flowers[0] = 180 + x;
    geranium[0] = 89 + x;
    The_orchid[0] = 230 + x;
    lily[0] = 399;
    Celestial_being[0] = 298 + x;
    Butterfly_orchid[0] = 490 + x;
    cycads[0] = 203 + x;
    Money_plant[0] = 327 + x;
    Rich_tree[0] = 189 + x;
    Banyan_tree[0] = 238 + x;
    araucaria[0] = 287 + x;
    cycas[0] = 308 + x;
    elm[0] = 349 + x;
    podocarpus[0] = 397 + x;
    Five_hieroglyphics[0] = 298 + x;
    Fujian_tea[0] = 491 + x;


    /*海产:
    海带,紫菜,裙带菜,石花菜,发菜,石莼,龙须菜,绿藻,褐藻,红藻
    */
    kelp[0] = 698 + x;
    nori[0] = 897 + x;
    wakame[0] = 486 + x;
    AGAR_weed[0] = 738 + x;
    Long_thread_moss[0] = 752 + x;
    ulva[0] = 832 + x;
    asparagusss[0] = 726 + x;
    Green_algae[0] = 172 + x;
    Brown_algae[0] = 653 + x;
    Red_algae[0] = 399 + x;


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
    King_of_flowers[0] = 2100 + x;
    Have_they[0] = 2900 + x;
    Tortoise_shell_peony[0] = 5300 + x;
    North_American_silver_crown_jade[0] = 12000 + x;
    Spiral_aloe[0] = 21000 + x;
    Vientiane_kam[0] = 28000 + x;
    White_YueJie[0] = 82000 + x;
    Than_to_smile[0] = 143000 + x;
    Sleep_fire_lotus[0] = 1280000 + x;
    The_ghost_orchid[0] = 15400000 + x;


    /*瑞士银行:
    杀虫剂，除螨剂，杀菌剂，除草剂
    */
    Insecticides[0] = 123 + x;
    acaricides[0] = 140 + x;
    fungicides[0] = 210 + x;
    herbicides[0] = 190 + x;


    /*肥料购买:
    无机肥
    有机肥
    气体肥料
    金坷垃
    */
    The_inorganic_fertilizer[0] = 110 + x;
    Organic_fertilizer[0] = 210 + x;
    Gas_fertilizer[0] = 180 + x;
    $Gold_KeL$[0] = 800 + x;
}

function inform(text, time) {
    if (document.getElementById("inform_in").innerHTML == "" || document.getElementById("inform_in").innerHTML == null) {
        time_w = time;
        in_te = text;
        document.getElementById("inform").hidden = false;
        document.getElementById("inform_in").innerHTML = text;
        setTimeout(function() {
            document.getElementById("inform_in").innerHTML = "";
            document.getElementById("inform").hidden = true;
        }, time);
    } else {
        if (in_te != text) {
            setTimeout(function() {
                inform(text, time);
            }, time_w);
        }
        time_w = time;
        in_te = text;
    }
}

function exp(num_exp) {
    Experience = Number(Experience) + Number(num_exp);
    saveup();
    getup();
    putup();
    inform("经验+" + num_exp, 4000);
}

function lock() {
    //pointer-events: none;
    /*a五谷类
    b麻，棉花//
    c蔬果//
    d茶//
    e菌类//
    f观赏类//
    g稀有品种//
    h海产作物//
    i瑞士银行//
    j肥料购买//
    k水源
    l市场//*/
    if (Experience <= 600) {
        document.getElementById("bb").style.pointerEvents = "none";
        document.getElementById("bb").innerHTML = "麻，棉花<br>" + "经验到达600解锁";
        document.getElementById("bb").style.fontSize = "x-small";
        document.getElementById("bb").style.color = 'red';
        if (new_page != "主页" && new_page != "五谷类" && new_page != "水源") window.location = "./index.html";
    } else {
        document.getElementById("bb").style.pointerEvents = "auto";
        document.getElementById("bb").innerHTML = "麻，棉花";
        document.getElementById("bb").style.fontSize = "16px";
        document.getElementById("bb").style.color = 'black';
    }
    if (Experience <= 1500) {
        document.getElementById("cc").style.pointerEvents = "none";
        document.getElementById("cc").innerHTML = "蔬果<br>" + "经验到达1500解锁";
        document.getElementById("cc").style.fontSize = "x-small";
        document.getElementById("cc").style.color = 'red';
        if (new_page != "主页" && new_page != "五谷类" && new_page != "水源" && new_page != "麻，棉花") window.location = "./index.html";
    } else {
        document.getElementById("cc").style.pointerEvents = "auto";
        document.getElementById("cc").innerHTML = "蔬果";
        document.getElementById("cc").style.fontSize = "16px";
        document.getElementById("cc").style.color = 'black';
    }
    if (Experience <= 3500) {
        document.getElementById("dd").style.pointerEvents = "none";
        document.getElementById("dd").innerHTML = "茶<br>" + "经验到达3500解锁";
        document.getElementById("dd").style.fontSize = "x-small";
        document.getElementById("dd").style.color = 'red';
        if (new_page != "主页" && new_page != "五谷类" && new_page != "水源" && new_page != "麻，棉花" && new_page != "蔬果") window.location = "./index.html";
    } else {
        document.getElementById("dd").style.pointerEvents = "auto";
        document.getElementById("dd").innerHTML = "茶";
        document.getElementById("dd").style.fontSize = "16px";
        document.getElementById("dd").style.color = 'black';
    }
    if (Experience <= 6500) {
        document.getElementById("ee").style.pointerEvents = "none";
        document.getElementById("ee").innerHTML = "菌类<br>" + "经验到达6500解锁";
        document.getElementById("ee").style.fontSize = "x-small";
        document.getElementById("ee").style.color = 'red';
        if (new_page != "主页" && new_page != "五谷类" && new_page != "水源" && new_page != "麻，棉花" && new_page != "蔬果" && new_page != "茶") window.location = "./index.html";
    } else {
        document.getElementById("ee").style.pointerEvents = "auto";
        document.getElementById("ee").innerHTML = "菌类";
        document.getElementById("ee").style.fontSize = "16px";
        document.getElementById("ee").style.color = 'black';
    }
    if (Experience <= 10500) {
        document.getElementById("ff").style.pointerEvents = "none";
        document.getElementById("ff").innerHTML = "观赏类<br>" + "经验到达10500解锁";
        document.getElementById("ff").style.fontSize = "x-small";
        document.getElementById("ff").style.color = 'red';
        document.getElementById("jj").style.pointerEvents = "none";
        document.getElementById("jj").innerHTML = "肥料购买<br>" + "经验到达10500解锁";
        document.getElementById("jj").style.fontSize = "x-small";
        document.getElementById("jj").style.color = 'red';
        if (new_page != "主页" && new_page != "五谷类" && new_page != "水源" && new_page != "麻，棉花" && new_page != "蔬果" && new_page != "茶" && new_page != "菌类") window.location = "./index.html";
    } else {
        document.getElementById("ff").style.pointerEvents = "auto";
        document.getElementById("ff").innerHTML = "观赏类";
        document.getElementById("ff").style.fontSize = "16px";
        document.getElementById("ff").style.color = 'black';
        document.getElementById("jj").style.pointerEvents = "auto";
        document.getElementById("jj").innerHTML = "肥料购买";
        document.getElementById("jj").style.fontSize = "16px";
        document.getElementById("jj").style.color = 'black';
    }
    if (Experience <= 17000) {
        document.getElementById("hh").style.pointerEvents = "none";
        document.getElementById("hh").innerHTML = "海产作物<br>" + "经验到达17000解锁";
        document.getElementById("hh").style.fontSize = "x-small";
        document.getElementById("hh").style.color = 'red';
        if (new_page == "海产作物" && new_page == "稀有品种" && new_page == "市场" && new_page == "瑞士银行") window.location = "./index.html";
    } else {
        document.getElementById("hh").style.pointerEvents = "auto";
        document.getElementById("hh").innerHTML = "海产作物";
        document.getElementById("hh").style.fontSize = "16px";
        document.getElementById("hh").style.color = 'black';
    }
    if (Experience <= 19500) {
        document.getElementById("gg").style.pointerEvents = "none";
        document.getElementById("gg").innerHTML = "稀有品种<br>" + "经验到达19500解锁";
        document.getElementById("gg").style.fontSize = "x-small";
        document.getElementById("gg").style.color = 'red';
        if (new_page == "稀有品种" && new_page == "市场" && new_page == "瑞士银行") window.location = "./index.html";
    } else {
        document.getElementById("gg").style.pointerEvents = "auto";
        document.getElementById("gg").innerHTML = "稀有品种";
        document.getElementById("gg").style.fontSize = "16px";
        document.getElementById("gg").style.color = 'black';
    }
    if (Experience <= 40500) {
        document.getElementById("ll").style.pointerEvents = "none";
        document.getElementById("ll").innerHTML = "市场<br>" + "经验到达40500解锁";
        document.getElementById("ll").style.fontSize = "x-small";
        document.getElementById("ll").style.color = 'red';
        document.getElementById("ii").style.pointerEvents = "none";
        document.getElementById("ii").innerHTML = "瑞士银行<br>" + "经验到达40500解锁";
        document.getElementById("ii").style.fontSize = "x-small";
        document.getElementById("ii").style.color = 'red';
        if (new_page == "市场" && new_page == "瑞士银行") window.location = "./index.html";
    } else {
        document.getElementById("ll").style.pointerEvents = "auto";
        document.getElementById("ll").innerHTML = "市场";
        document.getElementById("ll").style.fontSize = "16px";
        document.getElementById("ll").style.color = 'black';
        document.getElementById("ii").style.pointerEvents = "auto";
        document.getElementById("ii").innerHTML = "瑞士银行";
        document.getElementById("ii").style.fontSize = "16px";
        document.getElementById("ii").style.color = 'black';
    }
    //加载
    onloding();
}

//瑞士银行
function bank_chrnge(indexi) {
    if (indexi == "g_c") {

    }
    if (indexi == "c_g") {
        updateUser();
        retrieveUser_auto();
    }
    if (indexi == "index") {
        retrieveUser_auto();
        document.getElementById("goldi").innerHTML = localStorage.getItem("gold_bar");
        document.getElementById("cashi").innerHTML = cash__;
        document.getElementById("goldi_2").innerHTML = localStorage.getItem("gold_bar");
        document.getElementById("cashi_2").innerHTML = cash__;
    }
}

function bank_chack() {
    if (new_page == "瑞士银行") {
        document.getElementById("inin").hidden = true;
        document.getElementById("register").hidden = true;
        document.getElementById("login").hidden = false;
        if (localStorage.getItem("bank_uname") != null || localStorage.getItem("bank_upass") != null) {
            retrieveUser_auto();
        }
    }
}

function bank_cheng(what) {
    if (what == "login") {
        document.getElementById("inin").hidden = true;
        document.getElementById("register").hidden = true;
        document.getElementById("login").hidden = false;
    }
    if (what == "create") {
        document.getElementById("inin").hidden = true;
        document.getElementById("register").hidden = false;
        document.getElementById("login").hidden = true;
    }
}

//铲子-等级（成就）{暂定}
//普通铲子，普通锄头，普通耙子，钢铲子，钢锄头，钢耙子，

if (new_page == "瑞士银行") {
    //后端
    // Initialize Parse
    Parse.initialize("PyFL30rM1aTMJKoR5gLFjZhLvwfXjk2iuAbHQ2sk", "3c7s0t8zHMXzFBPu5WwAqArv9BH98A25gCxmR5iR"); //API
    Parse.serverURL = "https://parseapi.back4app.com/";
}

//注册
// Create a new User
async function createParseUser() {
    // Creates a new Parse "User" object, which is created by default in your Parse app
    let user = new Parse.User();
    // Set the input values to the new "User" object
    user.set("username", document.getElementById("username").value);
    user.set("email", document.getElementById("email").value);
    user.set("cemail", document.getElementById("cemail").value);
    user.set("password", document.getElementById("password").value);
    user.set("cpassword", document.getElementById("cpassword").value);
    user.set("gold_bar", 0);
    user.set("Titlesdate", 0);
    try {
        // Call the save method, which returns the saved object if successful
        user = await user.save();
        if (user !== null) {
            // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
            alert(
                `瑞士银行账号创建成功, ${user.get("username")}`
            );
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

//登录-手动
async function retrieveUser() {
    //Create your Parse Query, and define the class it will be searched
    const query = new Parse.Query("User");
    try {
        //Query the soccerPlayers object using the player name you have copied
        var lusername = document.getElementById("lusername").value;
        query.equalTo("username", document.getElementById("lusername").value);
        const results = await query.find();
        // Do something with the returned Parse.Object values
        for (let i = 0; i < results.length; i++) {
            const object = results[i];
            var uid = object.id;
            var Password = object.get("cpassword");
            var rPassword = document.getElementById("lpassword").value;
            gold_bar = object.get("gold_bar");
            Titlesdate = object.get("Titlesdate");
            if (rPassword == Password) {
                localStorage.setItem('bank_uname', lusername);
                localStorage.setItem('bank_upass', Password);
                localStorage.setItem('gold_bar', gold_bar);
                localStorage.setItem('Titlesdate', Titlesdate);
                localStorage.setItem('useruid', uid);
                document.getElementById("inin").hidden = true;
                document.getElementById("register").hidden = true;
                document.getElementById("login").hidden = true;
                document.getElementById("inin").hidden = false;
            }

        }
    } catch (error) {
        alert(`Failed to retrieve the object, with error code: ${error.message}`);
    }
}
//登录-自动
async function retrieveUser_auto() {
    //Create your Parse Query, and define the class it will be searched
    const query = new Parse.Query("User");
    try {
        //Query the soccerPlayers object using the player name you have copied
        query.equalTo("username", localStorage.getItem("bank_uname"));
        const results = await query.find();
        // Do something with the returned Parse.Object values
        for (let i = 0; i < results.length; i++) {
            const object = results[i];
            // var uid = object.id;
            var Password = object.get("cpassword");
            var rPassword = localStorage.getItem("bank_upass");
            gold_bar = object.get("gold_bar");
            Titlesdate = object.get("Titlesdate");
            if (rPassword == Password) {
                localStorage.setItem('gold_bar', gold_bar);
                localStorage.setItem('Titlesdate', Titlesdate);
                document.getElementById("inin").hidden = true;
                document.getElementById("register").hidden = true;
                document.getElementById("login").hidden = true;
                document.getElementById("inin").hidden = false;
            }

        }
    } catch (error) {
        alert(`Failed to retrieve the object, with error code: ${error.message}`);
    }
}

//更改
async function updateUser() {
    Parse.initialize("PyFL30rM1aTMJKoR5gLFjZhLvwfXjk2iuAbHQ2sk", "3c7s0t8zHMXzFBPu5WwAqArv9BH98A25gCxmR5iR"); //API
    Parse.serverURL = "https://parseapi.back4app.com/";
    //Retrieve your Parse Object
    const query = new Parse.Query("User");

    try {
        var gold_bar = localStorage.getItem("gold_bar");
        uid = localStorage.getItem("useruid");
        const Object = await query.get(uid);
        Object.set("gold_bar", Number(gold_bar) + 1);

        try {
            //Save the Object
            let result = await Object.save();
            uid = result.id;
            alert('Object updated with objectId: ' + result.id);
        } catch (error) {
            alert('Failed to update object, with error code: ' + error.message);
        }

    } catch (error) {
        alert('Error while retrieving object User', error);
    }

}