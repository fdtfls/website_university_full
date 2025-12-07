// 1. Клик по ссылкам в меню — плавно прокручиваем
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.onclick = () => {
        document.querySelector(a.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    };
});

// 2. Кнопка "наверх"
let btn = document.getElementById("scrollToTop");

window.onscroll = () => {
    if (window.scrollY > 300) {
        btn.style.opacity = "1";      // показать
    } else {
        btn.style.opacity = "0";      // скрыть
    }
};

btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// 3. Блоки появляются при прокрутке
window.onscroll = () => {
    document.querySelectorAll(".fade-in").forEach(box => {
        if (box.getBoundingClientRect().top < window.innerHeight) {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }
    });
};

// 4. Форма подписки на email
document.getElementById("subscribeForm").onsubmit = e => {
    e.preventDefault();
    let email = document.getElementById("emailInput").value;
    let msg = document.getElementById("formMessage");

    if (email.includes("@") && email.includes(".")) {
        msg.innerText = "Спасибо! Ты в списке";
        msg.style.color = "lime";
        document.getElementById("emailInput").value = "";
    } else {
        msg.innerText = "Напиши нормальный email";
        msg.style.color = "red";
    }

    setTimeout(() => msg.innerText = "", 3000);
};

// 5. Кнопка "Get Template" — открыть/закрыть форму
document.getElementById("getTemplateBtn").onclick = () => {
    let form = document.getElementById("templateForm");
    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
};

// 6. Отправка формы (просто спасибо)
document.getElementById("requestForm").onsubmit = e => {
    e.preventDefault();
    let name = e.target.name.value;

    alert("Спасибо, " + name + "! Мы тебе напишем");

    e.target.reset();                             // очистить форму
    document.getElementById("templateForm").style.display = "none";
};
