window.addEventListener('load', () => {
    checkLoginState();
    setTimeout(() => {
        const splashScreen = document.getElementById('splash-screen');
        if (splashScreen) splashScreen.classList.add('fade-out');
    }, 1800);
});

// Kamus Lengkap Bahasa Melanau Mukah (Lesson 1 - 6 完整字典)
const dictionary = {
    "ms-mel": {
        // Lesson 1 & 2
        "saya": "aku", "aku": "aku", "awak": "amu", "kamu": "amu", "dia": "diya",
        "kita": "kita", "kami": "kami", "mereka": "balaŋ", "ini": "ini", "itu": "tuh",
        "apa": "yaŋ", "siapa": "tane", "bagaimana": "menyap", "ada": "ma", "tidak": "nang",
        "ya": "pa", "makan": "kemun", "minum": "inum", "kerja": "kerja", "pergi": "pegi",
        "datang": "datang", "satu": "ja", "dua": "dua", "tiga": "telew", "empat": "pat",
        "lima": "lima", "enam": "nem", "tujuh": "tuju'", "lapan": "ayan", "sembilan": "ulan",
        "sepuluh": "pelu'en", "hari": "law", "malam": "malem", "tahun": "ta'un", "langit": "langit",
        "api": "apuy", "laut": "daat", "buah": "bua'", "bunga": "bunga", "rumput": "sek",
        "daun": "daun", "ikan": "ikan", "burung": "manuk", "ular": "dipa", "tikus": "belabaw",
        "nyamuk": "kiayh", "baik": "dia'", "buruk": "mama'", "jahat": "mama'", "kecil": "umit",
        "besar": "ayeŋ", "baru": "ba'ew", "lama": "lakey", "tua": "lakey", "nipis": "lipih",
        "tebal": "kapan", "hijau": "gaduŋ", "hitam": "bilem", "kuning": "kuniŋ", "jauh": "jau'",
        "di": "ga'", "pada": "ga'", "dan": "jigem",
        "apa khabar": "Inou dengah nou?", "apa khabar?": "Inou dengah nou?",
        "saya sihat": "Akou diak un.", "saya sihat.": "Akou diak un.",
        "saya kurang sihat": "Enda diak angai tan rasa kou.",
        "siapa nama awak": "Sai ngadan nou?", "siapa nama awak?": "Sai ngadan nou?",
        "nama saya": "Ngadan kou...", "awak dari mana": "Kaau tapak menaan?", "awak dari mana?": "Kaau tapak menaan?",
        "saya dari": "Akou tapak...", "awak tinggal di mana": "Takan gan diem nou?", "awak tinggal di mana?": "Takan gan diem nou?",
        "saya tinggal di": "Akou diem gak...", "awak hendak ke mana": "Menaan kaau?", "awak hendak ke mana?": "Menaan kaau?",
        "saya hendak pergi": "Akou bak mapun...", "saya baru datang dari": "Akou japan un tapak...",
        "saya perlu pergi sekarang": "Akou makau siieang.", "maaf": "Ma-ep eh.",
        "saya tergesa-gesa": "Akou bak legah itou.", "sudah lama kita tidak berjumpa": "Paut ngak tua enda petemu.",
        "ini kawan saya": "Itou sakai kou.", "siapa kawan awak": "Sai sakai nou?", "siapa kawan awak?": "Sai sakai nou?",
        "saya belajar di": "Akou belajer gak...", "saya bekerja di": "Akou kreja gak...",

        // Lesson 3: Food & Drinks
        "makanan": "wak kan", "air": "anum", "nasi": "nasek", "sagu": "sagok", "umai": "umai",
        "daging": "dagieng", "ayam": "siau", "babi": "babui", "anjing": "asou", "telur": "telor",
        "pisang": "kalik", "kelapa": "niyu", "garam": "garam", "gula": "gula", "kopi": "kopi",
        "teh": "teh", "susu": "susu", "sudu": "sudok", "garpu": "garpu", "pisau": "pisau",
        "pinggan": "jalok", "mangkuk": "mangkuok", "cawan": "gelaih", "sedap": "dao", "enak": "daou",
        "lapar": "lapar", "haus": "haus", "kenyang": "kenyang", "masak": "masak", "goreng": "goreng",
        "rebus": "rebus", "bakar": "bakar", "potong": "potong", "beri": "bagi", "ambil": "igek", "snek": "amieng",

        // Lesson 4: House & Education
        "rumah": "lebok", "kayu": "kayew", "buka pintu": "ba menaweng", "pintu": "menaweng",
        "dalam": "lubeng", "di bawah": "di ba'", "siling": "laŋit", "jalan": "jalan", "sekolah": "sekolah",
        "belajar": "belajer", "guru": "guru", "murid": "murid", "buku": "buku", "pensel": "pensel",
        "pen": "pen", "pemadam": "pemadam", "meja": "meja", "kerusi": "kerusi", "beg": "beg",
        "kelas": "kelas", "tulis": "tulis", "baca": "baca", "kira": "kira", "soalan": "soalan",
        "jawapan": "jawapan", "peperiksaan": "peperiksaan", "kerja rumah": "kerja rumah", "papan": "papan",
        "kapur": "kapur", "jam": "jam", "komputer": "komputer", "telefon": "telefon", "internet": "internet",
        "belajar dengan baik": "belajar baik", "guru baik": "guru baik", "kawan": "sakai", "ilmu": "ilmu",

        // Lesson 5: Nature & Animals
        "hutan": "guun", "tasik": "danaw", "tanah": "tana'", "batu": "batew", "pasir": "nay",
        "awan": "awan", "hujan": "ujan", "angin": "paŋay", "bintang": "biten", "bulan": "bulan",
        "cacing": "kejiwat", "labah-labah": "belebawa'", "kutu": "kutew", "sayap": "paeŋ",
        "bulu": "bulew", "ekor": "tikiu", "gigi": "nyipen", "hidung": "uduŋ", "lidah": "jela'",
        "kepala": "ulew", "telinga": "liŋa", "mata": "mata", "perut": "guem", "sakit": "pedeh", "tidur": "tuduy",

        // Lesson 6: Travel & Transportation
        "berjalan": "makau", "lari": "lari", "simpang": "simpang", "jambatan": "jambatan",
        "bandar": "bandar", "kampung": "kampung", "luar": "luar", "atas": "atas", "bawah": "bawah",
        "kiri": "kiri", "kanan": "kanan", "dekat": "dekat", "kereta": "kereta", "bas": "bas",
        "teksi": "teksi", "motosikal": "motosikal", "basikal": "basikal", "bot": "bot", "kapal": "kapal",
        "kapal terbang": "kapal terbang", "lapangan terbang": "lapangan terbang", "tiket": "tiket",
        "pemandu": "pemandu", "penumpang": "penumpang", "sampai": "sampai", "berhenti": "berhenti",
        "cepat": "cepat", "lambat": "lambat", "peta": "peta", "arah": "arah", "jumpa lagi": "jumpa agi", "selamat jalan": "selamat jalan"
    },
    "zh-mel": {
        // Lesson 1 & 2
        "我": "aku", "你": "amu", "他": "diya", "她": "diya", "它": "diya",
        "我们": "kita", "他们": "balaŋ", "她们": "balaŋ", "这个": "ini", "那个": "tuh",
        "什么": "yaŋ", "谁": "tane", "怎样": "menyap", "如何": "menyap", "有": "ma",
        "不": "nang", "是": "pa", "吃": "kemun", "喝": "inum", "工作": "kerja",
        "去": "pegi", "来": "datang", "一": "ja", "二": "dua", "三": "telew",
        "四": "pat", "五": "lima", "六": "nem", "七": "tuju'", "八": "ayan",
        "九": "ulan", "十": "pelu'en", "天": "law", "夜晚": "malem", "年": "ta'un",
        "天空": "langit", "火": "apuy", "大海": "daat", "水果": "bua'", "花": "bunga",
        "草": "sek", "叶子": "daun", "鱼": "ikan", "鸟": "manuk", "蛇": "dipa",
        "老鼠": "belabaw", "蚊子": "kiayh", "好": "dia'", "坏": "mama'", "小": "umit",
        "大": "ayeŋ", "新": "ba'ew", "老": "lakey", "薄": "lipih", "厚": "kapan",
        "绿色": "gaduŋ", "黑色": "bilem", "黄色": "kuniŋ", "远": "jau'", "在": "ga'", "和": "jigem",
        "你好吗": "Inou dengah nou?", "你好吗？": "Inou dengah nou?",
        "我很好": "Akou diak un.", "我很好。": "Akou diak un.",
        "我觉得不太舒服": "Enda diak angai tan rasa kou.", "我觉得不太舒服。": "Enda diak angai tan rasa kou.",
        "你叫什么名字": "Sai ngadan nou?", "你叫什么名字？": "Sai ngadan nou?",
        "我的名字是": "Ngadan kou...", "你来自哪里": "Kaau tapak menaan?", "你来自哪里？": "Kaau tapak menaan?",
        "我来自": "Akou tapak...", "你住在哪里": "Takan gan diem nou?", "你住在哪里？": "Takan gan diem nou?",
        "你要去哪里": "Menaan kaau?", "你要去哪里？": "Menaan kaau?",
        "我要去": "Akou bak mapun...", "我刚从": "Akou japan un tapak...",
        "我现在要走了": "Akou makau siieang.", "我现在要走了。": "Akou makau siieang.",
        "对不起": "Ma-ep eh.", "对不起。": "Ma-ep eh.", "我赶时间": "Akou bak legah itou.", "我赶时间。": "Akou bak legah itou.",
        "好久不见": "Paut ngak tua enda petemu.", "好久不见。": "Paut ngak tua enda petemu.",
        "这是我的朋友": "Itou sakai kou.", "这是我的朋友。": "Itou sakai kou.",
        "谁是你的朋友": "Sai sakai nou?", "谁是你的朋友？": "Sai sakai nou?",
        "我在学习": "Akou belajer gak...", "我在工作": "Akou kreja gak...",

        // Lesson 3: Food & Drinks
        "食物": "wak kan", "水": "anum", "米饭": "nasek", "西米": "sagok", "乌麦": "umai",
        "肉": "dagieng", "鸡": "siau", "猪": "babui", "狗": "asou", "鸡蛋": "telor",
        "香蕉": "kalik", "椰子": "niyu", "盐": "garam", "糖": "gula", "咖啡": "kopi",
        "茶": "teh", "牛奶": "susu", "汤匙": "sudok", "叉子": "garpu", "刀": "pisau",
        "盘子": "jalok", "碗": "mangkuok", "杯子": "gelaih", "好吃": "dao", "美味": "daou",
        "饿": "lapar", "口渴": "haus", "饱": "kenyang", "煮": "masak", "炸": "goreng",
        "水煮": "rebus", "烤": "bakar", "切": "potong", "给": "bagi", "拿": "igek", "零食": "amieng",

        // Lesson 4: House & Education
        "房子": "lebok", "木头": "kayew", "开门": "ba menaweng", "门": "menaweng",
        "里面": "lubeng", "在下面": "di ba'", "天花板": "laŋit", "路": "jalan", "学校": "sekolah",
        "学习": "belajer", "老师": "guru", "学生": "murid", "书": "buku", "铅笔": "pensel",
        "钢笔": "pen", "橡皮擦": "pemadam", "桌子": "meja", "椅子": "kerusi", "书包": "beg",
        "班级": "kelas", "写": "tulis", "阅读": "baca", "计算": "kira", "问题": "soalan",
        "答案": "jawapan", "考试": "peperiksaan", "家庭作业": "kerja rumah", "木板": "papan",
        "粉笔": "kapur", "时钟": "jam", "电脑": "komputer", "电话": "telefon", "网络": "internet",
        "好好学习": "belajar baik", "好老师": "guru baik", "朋友": "sakai", "知识": "ilmu",

        // Lesson 5: Nature & Animals
        "森林": "guun", "湖": "danaw", "土地": "tana'", "石头": "batew", "沙": "nay",
        "云": "awan", "雨": "ujan", "风": "paŋay", "星星": "biten", "月亮": "bulan",
        "蚯蚓": "kejiwat", "蜘蛛": "belebawa'", "虱子": "kutew", "翅膀": "paeŋ",
        "羽毛": "bulew", "尾巴": "tikiu", "牙齿": "nyipen", "鼻子": "uduŋ", "舌头": "jela'",
        "头": "ulew", "耳朵": "liŋa", "眼睛": "mata", "肚子": "guem", "疼痛": "pedeh", "生病": "pedeh", "睡觉": "tuduy",

        // Lesson 6: Travel & Transportation
        "走路": "makau", "跑": "lari", "路口": "simpang", "桥": "jambatan",
        "城市": "bandar", "村庄": "kampung", "外面": "luar", "上面": "atas", "下面": "bawah",
        "左边": "kiri", "右边": "kanan", "附近": "dekat", "汽车": "kereta", "巴士": "bas",
        "德士": "teksi", "摩托车": "motosikal", "自行车": "basikal", "船": "bot", "大船": "kapal",
        "飞机": "kapal terbang", "机场": "lapangan terbang", "票": "tiket", "行李": "beg",
        "司机": "pemandu", "乘客": "penumpang", "到达": "sampai", "停止": "berhenti",
        "快": "cepat", "慢": "lambat", "地图": "peta", "方向": "arah", "再见": "jumpa agi", "一路平安": "selamat jalan"
    },
    "en-mel": {
        // Lesson 1 & 2
        "i": "aku", "me": "aku", "you": "amu", "he": "diya", "she": "diya", "it": "diya",
        "we": "kita", "they": "balaŋ", "this": "ini", "that": "tuh", "what": "yaŋ",
        "who": "tane", "how": "menyap", "have": "ma", "not": "nang", "yes": "pa",
        "no": "tidak", "eat": "kemun", "drink": "inum", "work": "kerja", "go": "pegi",
        "come": "datang", "one": "ja", "two": "dua", "three": "telew", "four": "pat",
        "five": "lima", "six": "nem", "seven": "tuju'", "eight": "ayan", "nine": "ulan",
        "ten": "pelu'en", "day": "law", "night": "malem", "year": "ta'un", "sky": "langit",
        "fire": "apuy", "sea": "daat", "fruit": "bua'", "flower": "bunga", "grass": "sek",
        "leaf": "daun", "fish": "ikan", "bird": "manuk", "snake": "dipa", "rat": "belabaw",
        "mosquito": "kiayh", "good": "dia'", "bad": "mama'", "small": "umit", "big": "ayeŋ",
        "new": "ba'ew", "old": "lakey", "thin": "lipih", "thick": "kapan", "green": "gaduŋ",
        "black": "bilem", "yellow": "kuniŋ", "far": "jau'", "at": "ga'", "on": "ga'", "and": "jigem",
        "how are you": "Inou dengah nou?", "how are you?": "Inou dengah nou?",
        "i'm fine": "Akou diak un.", "i am fine": "Akou diak un.",
        "i'm not feeling well": "Enda diak angai tan rasa kou.",
        "what is your name": "Sai ngadan nou?", "what is your name?": "Sai ngadan nou?",
        "my name is": "Ngadan kou...", "where are you from": "Kaau tapak menaan?", "where are you from?": "Kaau tapak menaan?",
        "i am from": "Akou tapak...", "where do you live": "Takan gan diem nou?", "where do you live?": "Takan gan diem nou?",
        "i live in": "Akou diem gak...", "where are you going": "Menaan kaau?", "where are you going?": "Menaan kaau?",
        "i am going to": "Akou bak mapun...", "i just came from": "Akou japan un tapak...",
        "i need to go now": "Akou makau siieang.", "sorry": "Ma-ep eh.",
        "i am in a hurry": "Akou bak legah itou.", "long time no see": "Paut ngak tua enda petemu.",
        "this is my friend": "Itou sakai kou.", "who is your friend": "Sai sakai nou?", "who is your friend?": "Sai sakai nou?",
        "i study at": "Akou belajer gak...", "i work at": "Akou kreja gak...",

        // Lesson 3: Food & Drinks
        "food": "wak kan", "water": "anum", "rice": "nasek", "sago": "sagok", "umai": "umai",
        "meat": "dagieng", "chicken": "siau", "pig": "babui", "dog": "asou", "egg": "telor",
        "banana": "kalik", "coconut": "niyu", "salt": "garam", "sugar": "gula", "coffee": "kopi",
        "tea": "teh", "susu": "susu", "spoon": "sudok", "fork": "garpu", "knife": "pisau",
        "plate": "jalok", "bowl": "mangkuok", "cup": "gelaih", "delicious": "dao", "tasty": "daou",
        "hungry": "lapar", "thirsty": "haus", "full": "kenyang", "cook": "masak", "fry": "goreng",
        "boil": "rebus", "grill": "bakar", "roast": "bakar", "cut": "potong", "give": "bagi", "take": "igek", "snack": "amieng",

        // Lesson 4: House & Education
        "house": "lebok", "wood": "kayew", "open the door": "ba menaweng", "door": "menaweng",
        "inside": "lubeng", "below": "di ba'", "ceiling": "laŋit", "road": "jalan", "school": "sekolah",
        "study": "belajer", "teacher": "guru", "student": "murid", "book": "buku", "pencil": "pensel",
        "pen": "pen", "eraser": "pemadam", "table": "meja", "chair": "kerusi", "bag": "beg",
        "classroom": "kelas", "write": "tulis", "read": "baca", "count": "kira", "question": "soalan",
        "answer": "jawapan", "examination": "peperiksaan", "homework": "kerja rumah", "board": "papan",
        "chalk": "kapur", "clock": "jam", "computer": "komputer", "telephone": "telefon", "internet": "internet",
        "study well": "belajar baik", "good teacher": "guru baik", "friend": "sakai", "knowledge": "ilmu",

        // Lesson 5: Nature & Animals
        "forest": "guun", "lake": "danaw", "land": "tana'", "soil": "tana'", "stone": "batew", "sand": "nay",
        "cloud": "awan", "rain": "ujan", "wind": "paŋay", "star": "biten", "moon": "bulan",
        "earthworm": "kejiwat", "spider": "belebawa'", "louse": "kutew", "wing": "paeŋ",
        "feather": "bulew", "tail": "tikiu", "tooth": "nyipen", "nose": "uduŋ", "tongue": "jela'",
        "head": "ulew", "ear": "liŋa", "eye": "mata", "stomach": "guem", "sick": "pedeh", "pain": "pedeh", "sleep": "tuduy",

        // Lesson 6: Travel & Transportation
        "walk": "makau", "run": "lari", "junction": "simpang", "bridge": "jambatan",
        "town": "bandar", "city": "bandar", "village": "kampung", "home": "lebok", "outside": "luar",
        "above": "atas", "left": "kiri", "right": "kanan", "near": "dekat", "car": "kereta", "bus": "bas",
        "teksi": "teksi", "motorcycle": "motosikal", "bicycle": "basikal", "boat": "bot", "ship": "kapal",
        "airplane": "kapal terbang", "airport": "lapangan terbang", "ticket": "tiket",
        "driver": "pemandu", "passenger": "penumpang", "arrive": "sampai", "stop": "berhenti",
        "fast": "cepat", "slow": "lambat", "late": "lambat", "map": "peta", "direction": "arah",
        "see you again": "jumpa agi", "have a safe journey": "selamat jalan"
    }
};

// 选项卡导航逻辑
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

const sourceText = document.getElementById('source-text');
const targetText = document.getElementById('target-text');
const sourceLang = document.getElementById('source-lang');

// 核心翻译计算函数
function translateWord(text) {
    const cleanText = text.trim().toLowerCase();
    const mode = `${sourceLang.value}-mel`;
    const currentDict = dictionary[mode];

    if (currentDict && currentDict[cleanText]) {
        return currentDict[cleanText];
    } else if (currentDict) {
        let words = cleanText.split(/\s+/);
        let translated = words.map(w => currentDict[w] || w);
        return translated.join(" ");
    }
    return "[词库未收录 / Word not found]";
}

// 1. 文本翻译功能
document.getElementById('translate-btn')?.addEventListener('click', () => {
    if (!sourceText.value.trim()) return alert('请输入内容 / Please enter text');
    targetText.value = translateWord(sourceText.value);
});

// 复制功能
document.getElementById('copy-btn')?.addEventListener('click', () => {
    if (targetText.value) {
        navigator.clipboard.writeText(targetText.value);
        alert('已复制到剪贴板！/ Copied!');
    }
});

// 2. 注册与登录弹窗系统
const authModal = document.getElementById('auth-modal');
const openAuthBtn = document.getElementById('open-auth-btn');
const closeModal = document.getElementById('close-modal');
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const userDisplay = document.getElementById('user-display');
const logoutBtn = document.getElementById('logout-btn');

openAuthBtn?.addEventListener('click', () => authModal.style.display = 'block');
closeModal?.addEventListener('click', () => authModal.style.display = 'none');

tabLogin?.addEventListener('click', () => {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

tabRegister?.addEventListener('click', () => {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
});

// 注册事件
registerForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value;

    let users = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
    if (users[username]) {
        alert('该用户名已被占用！');
    } else {
        users[username] = password;
        localStorage.setItem('registeredUsers', JSON.stringify(users));
        alert('注册成功！请直接登录。');
        tabLogin.click();
    }
});

// 登录事件
loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
    if (users[username] && users[username] === password) {
        localStorage.setItem('currentUser', username);
        checkLoginState();
        authModal.style.display = 'none';
        alert('登录成功！');
    } else {
        alert('用户名或密码错误！');
    }
});

// 登出事件
logoutBtn?.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    checkLoginState();
});

function checkLoginState() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        userDisplay.innerText = `👤 欢迎，${currentUser}`;
        openAuthBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
    } else {
        userDisplay.innerText = '未登录';
        openAuthBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
    }
}

// 3. 真实图片 OCR 文本识别与翻译
const imageInput = document.getElementById('image-upload');
const cameraResult = document.getElementById('camera-result');

if (imageInput) {
    imageInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (cameraResult) cameraResult.value = "正在读取图片文字，请稍候... (Processing OCR...)";

        try {
            let ocrLang = 'eng';
            if (sourceLang.value === 'zh') ocrLang = 'chi_sim';
            if (sourceLang.value === 'ms') ocrLang = 'msa';

            const result = await Tesseract.recognize(file, ocrLang);
            const detectedText = result.data.text.trim();

            if (detectedText) {
                const translated = translateWord(detectedText);
                if (cameraResult) {
                    cameraResult.value = `【识别结果】:\n${detectedText}\n\n【Melanau 翻译】:\n${translated}`;
                }
            } else {
                if (cameraResult) cameraResult.value = "未能在图片中识别出文字，请尝试上传文字更清晰的照片。";
            }
        } catch (err) {
            console.error(err);
            if (cameraResult) cameraResult.value = "图像识别失败，请检查网络设置。";
        }
    });
}

// 4. 真实语音识别功能
const micBtn = document.getElementById('mic-source-btn');
const chatHistory = document.getElementById('chat-history');

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    if (micBtn) {
        micBtn.addEventListener('click', () => {
            const langMap = { ms: 'ms-MY', zh: 'zh-CN', en: 'en-US' };
            recognition.lang = langMap[sourceLang.value] || 'en-US';
            recognition.start();
            micBtn.innerText = "🎙️ 正在聆听中... (Listening...)";
        });

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            micBtn.innerText = "🎤 点击开始说话";

            if (chatHistory) {
                let userMsg = document.createElement('div');
                userMsg.className = 'chat-message user';
                userMsg.innerText = "你: " + text;
                chatHistory.appendChild(userMsg);

                let translatedText = translateWord(text);

                let melMsg = document.createElement('div');
                melMsg.className = 'chat-message melanau';
                melMsg.innerText = "Melanau: " + translatedText;
                chatHistory.appendChild(melMsg);

                chatHistory.scrollTop = chatHistory.scrollHeight;
            }
        };

        recognition.onerror = () => {
            micBtn.innerText = "🎤 点击开始说话";
            alert("语音识别出现错误，请检查麦克风权限。");
        };
    }
} else {
    if (micBtn) {
        micBtn.addEventListener('click', () => {
            alert("您的浏览器暂不支持语音识别，请试用桌面版 Chrome 或 Edge 浏览器。");
        });
    }
}
