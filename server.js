const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// JSON 요청을 처리할 수 있도록 설정
app.use(express.json());
app.use(cors()); // CORS 허용

// 게시글 데이터 (임시 저장, DB 없이 동작)
let posts = [];
let postId = 1; // 게시글 ID 자동 증가

// 📌 1. 모든 게시글 조회 (GET /posts)
app.get("/posts", (req, res) => {
    res.json(posts);
});

// 📌 2. 특정 게시글 조회 (GET /posts/:id)
app.get("/posts/:id", (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    res.json(post);
});

// 📌 3. 새 게시글 작성 (POST /posts)
app.post("/posts", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: "제목과 내용을 입력하세요." });
    }

    const newPost = { id: postId++, title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// 📌 4. 게시글 수정 (PUT /posts/:id)
app.put("/posts/:id", (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });

    const { title, content } = req.body;
    post.title = title || post.title;
    post.content = content || post.content;
    res.json(post);
});

// 📌 5. 게시글 삭제 (DELETE /posts/:id)
app.delete("/posts/:id", (req, res) => {
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });

    posts.splice(index, 1);
    res.json({ message: "게시글이 삭제되었습니다." });
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중`);
});
