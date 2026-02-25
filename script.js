// ステップ取得
const emailStep = document.getElementById("email-step");
const passwordStep = document.getElementById("password-step");
const createStep = document.getElementById("create-step");

// ログイン要素
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const loginBtn = document.getElementById("login-btn");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const emailMessage = document.getElementById("email-message");
const passwordMessage = document.getElementById("password-message");
const userDisplay = document.getElementById("user-display");

// アカウント作成要素
const createAccountBtn = document.getElementById("create-account-btn");
const backCreateBtn = document.getElementById("back-create-btn");
const registerBtn = document.getElementById("register-btn");
const newNameInput = document.getElementById("new-name");
const newEmailInput = document.getElementById("new-email");
const newPasswordInput = document.getElementById("new-password");
const createMessage = document.getElementById("create-message");

// ユーザー情報（既存 + 後で追加可能）
const validUsers = {
    "fukuoka.itosima.maebaru@gmail.com": "sogo house (s-house)",
    "manato0926@gmail.com": "大川万和斗"
};
const passwords = {
    "fukuoka.itosima.maebaru@gmail.com": "sougo1224",
    "manato0926@gmail.com": "sougo1224"
};

// 「次へ」メール確認
function goNext() {
    const email = usernameInput.value.trim();
    if (!validUsers[email]) {
        emailMessage.textContent = "この Gmail アドレスは有効ではありません";
        emailMessage.style.color = "#d93025";
    } else {
        emailMessage.textContent = "";
        emailStep.classList.remove("active");
        passwordStep.classList.add("active");
        userDisplay.textContent = validUsers[email];
        passwordInput.focus();
    }
}

// ログイン処理
function login() {
    const password = passwordInput.value;
    const email = usernameInput.value.trim();

    if (!validUsers[email]) {
        passwordMessage.style.color = "#d93025";
        passwordMessage.textContent = "メールアドレスが無効です";
        return;
    }

    if (password === passwords[email]) {
        passwordMessage.style.color = "#34a853";
        passwordMessage.textContent = `ログイン成功！ ${validUsers[email]}`;
        usernameInput.value = "";
        passwordInput.value = "";
        setTimeout(() => {
            passwordMessage.textContent = "";
            passwordStep.classList.remove("active");
            emailStep.classList.add("active");
            usernameInput.focus();
        }, 2000);
    } else {
        passwordMessage.style.color = "#d93025";
        passwordMessage.textContent = "パスワードが違います";
    }
}

// アカウント作成画面表示
createAccountBtn.addEventListener("click", () => {
    emailStep.classList.remove("active");
    createStep.classList.add("active");
    newNameInput.focus();
});
