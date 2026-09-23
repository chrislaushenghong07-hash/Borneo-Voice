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

function translateWord(text) {
    const cleanText = text.trim().toLowerCase();
    const mode = ${sourceLang.value}-mel;
    const currentDict = dictionary[mode];

    if (currentDict && currentDict[cleanText]) {
        return currentDict[cleanText];
    } else if (currentDict) {
        let words = cleanText.split(" ");
        let translated = words.map(w => currentDict[w]  w);
        return translated.join(" ");
    }
    return "[Word not found / 词库未收录]";
}

document.getElementById('translate-btn').addEventListener('click', () => {
    if (!sourceText.value.trim()) return alert('Please enter text / 请输入内容');
    targetText.value = translateWord(sourceText.value);
});

document.getElementById('copy-btn').addEventListener('click', () => {
    if (targetText.value) {
        navigator.clipboard.writeText(targetText.value);
        alert('Copied! / 已复制！');
    }
});

document.getElementById('start-camera-btn').addEventListener('click', async () => {
    try {
        const webcam = document.getElementById('webcam');
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        webcam.srcObject = stream;
        webcam.style.display = 'block';
        document.getElementById('camera-placeholder').style.display = 'none';
    } catch (err) {
        alert("Camera access denied / 无法访问相机: " + err.message);
    }
});

document.getElementById('image-upload').addEventListener('change', (e) => {
    if (e.target.files[0]) {
        document.getElementById('camera-result').value = `Selected File: ${e.target.files[0].name}\nProcessing OCR...\nResult: apa khabar -> Inou dengah nou?`;
    }
});

const micBtn = document.getElementById('mic-source-btn');
const chatHistory = document.getElementById('chat-history');

if ('webkitSpeechRecognition' in window  'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition  window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    micBtn.addEventListener('click', () => {
        const langMap = { ms: 'ms-MY', zh: 'zh-CN', en: 'en-US' };
        recognition.lang = langMap[sourceLang.value]  'en-US';
        recognition.start();
        micBtn.innerText = "Listening... / 正在聆听...";
    });

    recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        micBtn.innerText = "🎤 Speak Source / 开始说话";
        
        let userMsg = document.createElement('div');
        userMsg.className = 'chat-message user';
        userMsg.innerText = text;
        chatHistory.appendChild(userMsg);

        let translatedText = translateWord(text);

        let melMsg = document.createElement('div');
        melMsg.className = 'chat-message melanau';
        melMsg.innerText = "Melanau: " + translatedText;
        chatHistory.appendChild(melMsg);

        chatHistory.scrollTop = chatHistory.scrollHeight;
    };

    recognition.onerror = () => {
        micBtn.innerText = "🎤 Speak Source / 开始说话";
        alert("Voice recognition error / 语音识别失败，请检查浏览器权限");
    };
} else {
    micBtn.addEventListener('click', () => {
        alert("Speech recognition is not supported on this browser / 您的浏览器暂不支持语音识别接口");
    });
}
