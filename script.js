// Borneo Voice 核心词汇数据库
const dictionary = {
    // ------------------ 马来语 -> 密兰诺语 (ms-mel) ------------------
    "ms-mel": {
        "saya": "akui", "aku": "akui", "awak": "ka'u", "kamu": "ka'u", "dia": "murok",
        "kami": "kami", "kita": "kitor", "merek": "dua", "lelaki": "lanang", "perempuan": "sidi",
        "budak": "anak", "kawan": "pangan", "ibu": "ina", "bapa": "tama", "datuk": "puk",
        "nenek": "puk", "abang": "jak", "kakak": "kak", "adik": "adin", "orang": "tlou",
        "makan": "kuman", "minum": "tuteg", "tidur": "tudui", "bangun": "paja", "pergi": "masei",
        "datang": "muko", "duduk": "mudos", "berdiri": "tadeng", "berjalan": "jalan", "lari": "magag",
        "cakap": "mubik", "tulis": "tulis", "baca": "baca", "dengar": "dengag", "lihat": "kele",
        "beli": "peli", "jual": "jual", "kerja": "keraa", "mandi": "jamu", "masak": "subik",
        "senyum": "kawa", "ketawa": "magud", "nangis": "mesik", "suka": "suka", "rindu": "kemag",
        "apa": "inou", "siapa": "yien", "bila": "pila", "kenapa": "ngana", "bagaimana": "pien",
        "mana": "pien", "ini": "itui", "itu": "inuk", "hari ini": "lau itui", "besok": "jemey",
        "semalam": "malam", "sekarang": "bina", "pagi": "sog", "tengah hari": "lau", "malam": "malam",
        "rumah": "lebok", "air": "weir", "nasi": "nasi", "ikan": "shien", "daging": "saging",
        "buah": "puan", "sayur": "pait", "baju": "pukoi", "seluar": "seluar", "duit": "sen",
        "kereta": "pede", "pintu": "pabi", "meja": "meja", "buku": "buku", "laut": "lahat",
        "sungai": "alud", "pokok": "kabu", "hujan": "ujan", "matahari": "lau", "bulan": "bulan",
        "apa khabar": "muku nuek", "terima kasih": "makasih", "selamat datang": "selamat ta'an",
        "sama sama": "sama sama", "selamat pagi": "selamat sog", "selamat malam": "selamat malam",
        "bagus": "sia", "cantik": "lawat", "besar": "rayah", "kecil": "kudek", "panas": "pasang",
        "sejuk": "saging", "sedap": "nyaman", "murah": "mura", "mahal": "mahal", "gembira": "senaq"
    },

    // ------------------ 华语 -> 密兰诺语 (zh-mel) ------------------
    "zh-mel": {
        "我": "akui", "你": "ka'u", "他": "murok", "我们": "kami", "他们": "dua",
        "男人": "lanang", "女人": "sidi", "小孩": "anak", "朋友": "pangan", "爸爸": "tama",
        "妈妈": "ina", "爷爷": "puk", "奶奶": "puk", "哥哥": "jak", "姐姐": "kak",
        "吃饭": "kuman", "吃": "kuman", "喝水": "tuteg", "喝": "tuteg", "睡觉": "tudui",
        "起床": "paja", "去": "masei", "来": "muko", "坐": "mudos", "站": "tadeng",
        "说话": "mubik", "看": "kele", "买": "peli", "工作": "keraa", "洗澡": "jamu",
        "做饭": "subik", "笑": "kawa", "哭": "mesik", "喜欢": "suka", "想念": "kemag",
        "什么": "inou", "谁": "yien", "什么时候": "pila", "为什么": "ngana", "哪里": "pien",
        "这个": "itui", "那个": "inuk", "今天": "lau itui", "明天": "jemey", "现在": "bina",
        "房子": "lebok", "水": "weir", "米饭": "nasi", "鱼": "shien", "肉": "saging",
        "水果": "puan", "蔬菜": "pait", "衣服": "pukoi", "钱": "sen", "车": "pede",
        "大海": "lahat", "河流": "alud", "树": "kabu", "下雨": "ujan", "太阳": "lau",
        "你好": "muku nuek", "谢谢": "makasih", "欢迎": "selamat ta'an", "好": "sia",
        "漂亮": "lawat", "大": "rayah", "小": "kudek", "热": "pasang", "好吃": "nyaman"
    },

    // ------------------ 英语 -> 密兰诺语 (en-mel) ------------------
    "en-mel": {
        "i": "akui", "me": "akui", "you": "ka'u", "he": "murok", "she": "murok",
        "we": "kami", "they": "dua", "man": "lanang", "woman": "sidi", "child": "anak",
        "friend": "pangan", "father": "tama", "mother": "ina", "grandfather": "puk",
        "eat": "kuman", "drink": "tuteg", "sleep": "tudui", "wake up": "paja", "go": "masei",
        "come": "muko", "sit": "mudos", "stand": "tadeng", "speak": "mubik", "see": "kele",
        "buy": "peli", "work": "keraa", "cook": "subik", "laugh": "kawa", "cry": "mesik",
        "what": "inou", "who": "yien", "when": "pila", "why": "ngana", "where": "pien",
        "this": "itui", "that": "inuk", "today": "lau itui", "tomorrow": "jemey", "now": "bina",
        "house": "lebok", "water": "weir", "rice": "nasi", "fish": "shien", "meat": "saging",
        "fruit": "puan", "money": "sen", "car": "pede", "sea": "lahat", "river": "alud",
        "hello": "muku nuek", "thank you": "makasih", "welcome": "selamat ta'an",
        "good": "sia", "beautiful": "lawat", "big": "rayah", "small": "kudek", "delicious": "nyaman"
    }
};

// --- DOM 节点获取 ---
const sourceText = document.getElementById('source-text');
const targetText = document.getElementById('target-text');
const sourceLang = document.getElementById('source-lang');
const translateBtn = document.getElementById('translate-btn');
const copyBtn = document.getElementById('copy-btn');

// --- 1. Tab 切换逻辑 ---
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

// 核心词汇翻译方法
function translateWord(text) {
    const cleanText = text.trim().toLowerCase();
    const mode = `${sourceLang.value}-mel`;
    const currentDict = dictionary[mode];

    if (currentDict && currentDict[cleanText]) {
        return currentDict[cleanText];
    } else {
        let words = cleanText.split(" ");
        let translated = words.map(w => (currentDict && currentDict[w]) ? currentDict[w] : w);
        let result = translated.join(" ");

        if (result !== cleanText) {
            return result;
        } else {
            return `[Word not found / 词库未收录]`;
        }
    }
}

// --- 2. 文本翻译按键事件 ---
translateBtn.addEventListener('click', () => {
    const text = sourceText.value;
    if (!text.trim()) {
        alert('Please enter text / 请输入内容');
        return;
    }
    targetText.value = translateWord(text);
});

copyBtn.addEventListener('click', () => {
    if (targetText.value) {
        navigator.clipboard.writeText(targetText.value);
        alert('Copied! / 已复制！');
    }
});

// --- 3. Camera Translation (相机/图片翻译) ---
const startCameraBtn = document.getElementById('start-camera-btn');
const webcam = document.getElementById('webcam');
const cameraPlaceholder = document.getElementById('camera-placeholder');
const cameraResult = document.getElementById('camera-result');
const imageUpload = document.getElementById('image-upload');

startCameraBtn.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        webcam.srcObject = stream;
        webcam.style.display = 'block';
        cameraPlaceholder.style.display = 'none';
        cameraResult.value = "Camera active. Tap image upload or connect OCR engine for real-time detection.\n相机已启动。";
    } catch (err) {
        alert("Unable to access camera / 无法访问相机: " + err.message);
    }
});

imageUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        cameraResult.value = `Image selected: ${file.name}\nProcessing OCR & Translating...\n[Simulated Result / 示例翻译结果]:\nhello -> muku nuek`;
    }
});

// --- 4. Conversation Translation (对话语音翻译) ---
const micSourceBtn = document.getElementById('mic-source-btn');
const micTargetBtn = document.getElementById('mic-target-btn');
const chatHistory = document.getElementById('chat-history');

function appendMessage(senderClass, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${senderClass}`;
    msgDiv.innerHTML = text;
    chatHistory.appendChild(msgDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Web Speech API 语音识别
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    const recognition = new SpeechRecognition();

    micSourceBtn.addEventListener('click', () => {
        const langMap = { ms: 'ms-MY', zh: 'zh-CN', en: 'en-US' };
        recognition.lang = langMap[sourceLang.value] || 'en-US';
        recognition.start();

        micSourceBtn.innerText = "🎙️ Listening... / 正在聆听...";

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            const translated = translateWord(transcript);

            appendMessage('user', `<b>Source:</b> ${transcript}`);
            appendMessage('melanau', `<b>Melanau:</b> ${translated}`);
            micSourceBtn.innerText = "Speak Source / 源语言说话";
        };

        recognition.onerror = (event) => {
            alert("Speech recognition error / 语音识别错误: " + event.error);
            micSourceBtn.innerText = "Speak Source / 源语言说话";
        };
    });
} else {
    micSourceBtn.addEventListener('click', () => {
        alert("Browser does not support Web Speech API / 当前浏览器不支持原生语音识别，请直接使用文本功能。");
    });
}

micTargetBtn.addEventListener('click', () => {
    alert("Melanau speech model strictly requires specialized training / 密兰诺语专属语音模型需要额外集成。");
});
// 🚀 出场页面 (Splash Screen) 控制逻辑
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    
    // 延迟 1.8 秒后淡出启动页
    setTimeout(() => {
        if (splashScreen) {
            splashScreen.classList.add('fade-out');
        }
    }, 1800);
});