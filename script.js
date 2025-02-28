var toggleBtn = document.querySelector('.toggle-btn');
var collapsibleBox = document.querySelector('.collapsible-box');

if (toggleBtn && collapsibleBox) { // 요소가 존재하는 경우에만 실행
    toggleBtn.addEventListener('click', () => {
        collapsibleBox.classList.toggle('open');
    });
} else {
    console.error("오류: .toggle-btn 또는 .collapsible-box 요소를 찾을 수 없습니다.");
}

function saveInput2() {
    let CreatID = document.getElementById("UserId").value;
    console.log("아이디: " + CreatID);

    let CreatPW = document.getElementById("UserPw").value;
    let CreatPW2 = document.getElementById("UserPw2").value;

    if (CreatPW === CreatPW2) {
        console.log("비번: " + CreatPW);
    } else {
        alert("두 비밀번호가 일치하지 않습니다.");
    } 
}

window.onload = function() {
    var middle = document.documentElement.scrollHeight / 2;
    window.scrollTo(0, middle);
};

function checkInput() {
    var userI1 = document.getElementById('UserId').value;
    var userI2 = document.getElementById('UserPw').value;
    
    // 입력값이 공백인지 확인
    if (userI1.trim() === "" || userI2.trim() === "") {
        alert("입력값을 확인해주세요. 공백은 허용되지 않습니다.");
        return false; // 폼 제출을 막음
    }
    
    return true; // 폼 제출이 허용됨
}
