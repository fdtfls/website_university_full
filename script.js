// 1. Плавная прокрутка по якорям (#about, #contact и т.д.)
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.onclick = function(e) {
        e.preventDefault();
        const block = document.querySelector(this.getAttribute('href'));
        if (block) block.scrollIntoView({ behavior: "smooth" });
    };
});

// 2. Кнопка "наверх" (появляется после 300px прокрутки)
const topBtn = document.getElementById("scrollToTop");
window.onscroll = () => {
    if (window.scrollY > 300) {
        topBtn.style.opacity = "1";
        topBtn.style.pointerEvents = "auto";
    } else {
        topBtn.style.opacity = "0";
        topBtn.style.pointerEvents = "none";
    }
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// 3. Плавное появление элементов при прокрутке (самое простое!)
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('appear');
        }
    });
});

// 4. Валидация email в форме подписки
document.getElementById("subscribeForm").onsubmit = function(e) {
    e.preventDefault();
    const email = this.emailInput.value.trim();
    const msg = document.getElementById("formMessage");

    if (email.includes('@') && email.includes('.')) {
        msg.textContent = "Спасибо за подписку!";
        msg.style.color = "lime";
        this.emailInput.value = "";
    } else {
        msg.textContent = "Введите правильный email";
        msg.style.color = "red";
    }
    setTimeout(() => msg.textContent = "", 3000);
};

// 5. Показать/скрыть форму "Get Template"
document.getElementById("getTemplateBtn").onclick = function(e) {
    e.preventDefault();
    const form = document.getElementById("templateForm");
    form.style.display = (form.style.display === "block") ? "none" : "block";
};

// 6. Отправка формы (самое простое — без JSON и async)
document.getElementById("requestForm").onsubmit = function(e) {
    e.preventDefault();
    
    const name = this.name.value;
    const email = this.email.value;

    // Просто имитируем отправку (можно потом заменить на настоящий fetch)
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = "Спасибо, " + name + "! Мы свяжемся с вами на " + email;
    document.getElementById('notificationContainer').appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
    }, 3000);

    this.reset(); // очистить форму
    document.getElementById("templateForm").style.display = "none";
};
