const src = [
    {
        "q": "0005. Lợi ích kinh tế:",
        "a": "Là lợi ích vật chất"
    },
    {
        "q": "0005. Sự khác biệt cơ bản giữa KTTT định hướng XHCN với KTTT TBCN là:",
        "a": "Vai trò chủ đạo của kinh tế nhà nước"
    },
    {
        "q": "0005. Kinh tế thị trường định hướng XHCN ở Việt Nam thực hiện:",
        "a": "Tăng trưởng kinh tế đi đôi với công bằng xã hội"
    },
    {
        "q": "0005. Sự khác nhau chủ yếu giữa KTTT TBCN và KTTT định hướng XHCN là:",
        "a": "Cả (1), (2), (3)"
    },
    {
        "q": "0005. Trong các phạm trù kinh tế dưới đây, phạm trù nào được coi là tín hiệu của cơ chế thị trường?",
        "a": "Giá cả thị trường"
    },
    {
        "q": "0005. Giá cả thị trường có chức năng:",
        "a": "Cả (1), (2), (3)"
    },
    {
        "q": "0005. Câu nào sau đây đúng:",
        "a": "Không có mô hình kinh tế thị trường chung cho mọi quốc gia"
    },
    {
        "q": "0005. Kinh tế thị trường:",
        "a": "Là sản phẩm của văn minh nhân loại"
    },
    {
        "q": "0005. Cơ chế thị trường là:",
        "a": "Cơ chế điều tiết nền kinh tế theo các quy luật của kinh tế thị trường"
    },
    {
        "q": "0005. Mục tiêu hàng đầu của phát triển kinh tế thị trường ở nước ta là gì?",
        "a": "Giải phóng lực lượng sản xuất, huy động mọi nguồn lực cho CNH, HĐH, cải thiện đời sống nhân dân (2)"
    },
    {
        "q": "0005. Hiện nay ở Việt Nam, nhà nước sử dụng các công cụ gì để điều tiết vĩ mô nền KTTT?",
        "a": "Lực lượng kinh tế của nhà nước; chính sách tài chính, tiền tệ; các công cụ điều tiết kinh tế đối ngoại"
    },
    {
        "q": "0005. Sự khác nhau trong quản lý của nhà nước ở nền KTTT định hướng XHCN và KTTT TBCN là do:",
        "a": "Bản chất của nhà nước (2)"
    },
    {
        "q": "0005. Đâu không phải đặc trưng chủ yếu của kinh tế thị trường định hướng XHCN",
        "a": "Xây dựng nền kinh tế hàng hóa theo hướng công nghiệp hóa, hiện đại hóa"
    },
    {
        "q": "0005. Lợi ích nhóm",
        "a": "Có thể không gây tổn hại đến lợi ích xã hội"
    },
    {
        "q": "0005. Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam:",
        "a": "Phản ánh trình độ phát triển và điều kiện lịch sử của Việt Nam"
    }
];

if (location.pathname == '/mod/quiz/view.php') {
    const startBtn = document.querySelector(".singlebutton.quizstartbuttondiv").querySelector('button');
    startBtn.click();
    
} else if (location.pathname == '/mod/quiz/startattempt.php') {
    const startConfirmBtn = document.querySelector('input[value="Bắt đầu làm bài"]');
    startConfirmBtn.click();

} else if (location.pathname == '/mod/quiz/attempt.php') {
        const questionBlocks = document.querySelectorAll('.content>.formulation.clearfix');

        questionBlocks.forEach(question => {
            const qText = question.querySelector('.qtext').innerHTML;
            const answerBlocks = question.querySelectorAll('div>.answer>div');
            answerBlocks.forEach(answer => {
                const inp = answer.querySelector('input');
                const value = answer.querySelector('div>.flex-fill').innerHTML;

                const srcAns = src.find((s) => s.q == qText).a;
                if (srcAns == value) {
                    inp.click();
                }
            })
        })

        const nextBtn = document.querySelector('.submitbtns>.mod_quiz-next-nav');
        nextBtn.click();

} else if (location.pathname == '/mod/quiz/summary.php') {
    const submitBtn = document.querySelectorAll('.controls>.singlebutton')[1].querySelector('button');
    submitBtn.click();

    setTimeout(() => {
        const confirmBtn = document.querySelector('.confirmation-buttons>input[value="Nộp bài và kết thúc"]');
        confirmBtn.click();
    }, 250)
}
