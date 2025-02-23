function saveInput1() {
    let loginID = document.getElementById("loginid").value;
    
    console.log("아이디: " + loginID);

    let loginPW = document.getElementById("loginpw").value;
    
    console.log("비번: " + loginPW);
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
