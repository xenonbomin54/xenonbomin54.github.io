// 회원가입 데이터 저장 함수
function saveInput2() {
    const userId = document.getElementById("UserId").value;
    const userPw = document.getElementById("UserPw").value;
    const userPw2 = document.getElementById("UserPw2").value;

    // 입력값 검증
    if (!userId || !userPw || !userPw2) {
        alert("모든 입력란을 채워주세요!");
        return;
    }

    // 비밀번호 일치 확인
    if (userPw !== userPw2) {
        alert("비밀번호가 일치하지 않습니다!");
        return;
    }

    // 비밀번호 길이 확인
    if (userPw.length < 6) {
        alert("비밀번호는 최소 6자리 이상이어야 합니다.");
        return;
    }

    // 사용자 정보 저장 (로컬스토리지 활용)
    localStorage.setItem("userId", userId);
    localStorage.setItem("userPw", userPw);

    alert("회원가입이 완료되었습니다!");
    window.location.href = "document.html";  // 로그인 페이지로 이동
}

// 약관 펼치기/접기 기능
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".toggle-btn");
    const collapsibleBox = document.querySelector(".collapsible-box");

    toggleBtn.addEventListener("click", function () {
        collapsibleBox.style.display =
            collapsibleBox.style.display === "none" ? "block" : "none";
    });

    // 처음 로딩 시 약관 숨기기
    collapsibleBox.style.display = "none";
});

function login() {
    const inputId = document.getElementById("loginId").value;
    const inputPw = document.getElementById("loginPw").value;

    const savedId = localStorage.getItem("userId");
    const savedPw = localStorage.getItem("userPw");

    if (inputId === savedId && inputPw === savedPw) {
        alert("로그인 성공!");
        window.location.href = "home.html";  // 로그인 후 이동할 페이지
    } else {
        alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
}
