---
title: "Sử Dụng AI Hiệu Quả <br> "Sometimes it’s okay to press pause"
date: 2026-04-12
layout: single
author_profile: true
sidebar:
  nav: "sidebar"
---

Hôm nay ngày 14 tháng tư năm 2026, tôi lại viết blog chia sẻ kinh nghiệm sử dụng AI hiệu quả.<br>
Phải nhắc lại cho rõ rằng tôi không biết lập trình, học sử dụng môi trường lập trình là để nhờ AI tạo ra những hiệu ứng nhằm diễn đạt ý nghĩ (mặc dù đã có các ứng dụng tạo video từ hình ảnh và lời nhắc nhưng cần trả phí mà tôi lại không có tiền) <br>
Rôi tôi biết có Github là nơi lưu trữ chương trình đã tạo rất tiện ích (như đã viết trong bài [Tôi Dùng GITHUB Để Làm Gì?](https://roboeinlife-glitch.github.io/Blog_Cua_Toi/2026/01/28/Dung-GITHUB-Lam-Gi.html))<br>
Sau khi đã tạo được một trang Blog tuyệt đẹp mà tôi rất yêu thích rồi thì được biết có thể tạo thêm chức năng bình luận cho bài viết. Thế là tôi lại nhờ `**<p style="color: blue;">DeepSeek.</p>**` hướng dẫn. <br>
Tuy nhiên, blog của tôi không phải được fork lại từ chương trình chuẩn của lập trình viên chuyên nghiệp mà là nhờ `**<p style="color: blue;">DeepSeek.</p>**` hướng dẫn cấu hình, thế nên, mặc dù đã thực hiện theo trình tự nhưng chức năng bình luận vẫn chưa hiện thị cuối bài viết.<br>

Tôi đã gửi tất cả nội dung các file trong Repository Blog để `**<p style="color: blue;">DeepSeek.</p>**` kiểm tra, tìm hiểu xem lỗi do đâu.<br>
Sau khi đọc hết các file, `**<p style="color: blue;">DeepSeek.</p>**` đã cho tôi phương án giải quyết - thêm bớt, thay thế các mã lệnh (code) trong tất cả các file cấu hình:<br>
1, `**<p style="color: blue;">_Includes.</p>**` <br>
2,  `**<p style="color: blue;">_layouts.</p>**` <br>
3,  `**<p style="color: blue;">assets.</p>**` <br>
4,  `**<p style="color: blue;">_config.</p>**` <br>
5,  `**<p style="color: blue;">index.</p>**` <br>

Nhưng rất tiếc là sửa đi sửa lại mất rất nhiều thời gian không những không đạt kết quả mà còn thêm lỗi tùm lùm tà là. Tôi tự nhủ, mình không biết lập trình nên phải hết sức kiên nhẫn, nhưng kiên nhẫn đến bao giờ đây? <br>
Làm đi làm lại mãi không được, tôi mới nói với `**<p style="color: blue;">DeepSeek.</p>**` hay là nghỉ đã vì lúc này tôi cũng đã thấm mệt (tôi vốn sức khở không được tốt, không ngồi lâu được trước màn hình)<br>
Chúng tôi cùng quyết định nghỉ ngơi, hôm sau sẽ tạo chat mới và xem lại toàn bộ một lần nữa cho rõ ràng. <br>
Trước khi tiếp tục trao đổi với  `**<p style="color: blue;">DeepSeek.</p>**`, tôi bông nghĩ hay là mình thử tham khảo AI khác xem sao?<br>
Nghĩ là làm, tôi liền nhờ `**<p style="color: blue;">Grok (xAI).</p>**` tham khảo. Đến đây, tôi lại gặp vấn đề khác đó là Grok không thể đọc được nội dung file từ link, chỉ có thể copy dán nội dung trực tiếp vào chat.<br>
Hạn chế này cũng không ảnh hưởng gì lắm, chúng tôi vẫn có thể trao đổi. Có điều, Grok lại không giải quyết vấn đề được nhiều, không phân tích được `**<p style="color: blue;">_config.</p>**`<br>
Tôi gần như sắp thất vọng, định bụng sẽ hỏi Chat GPT. Rôi tôi đọc lại nội dung trao đổi với `**<p style="color: blue;">Grok.</p>**` và nhận ra, trong số các chi tiết `**<p style="color: blue;">DeepSeek.</p>**` yêu cầu cung cấp để kiểm tra, có một danh mục chưa có trong các file cấu hình đó là: `**<p style="color: blue;">_includes/comments</p>**`<br>

Tôi gần như thấy một hy vọng và trở lại trao đổi với `**<p style="color: blue;">DeepSeek.</p>**`. Tôi nói rằng, tôi đoán là chúng tôi đang thiếu file này. <br>
`**<p style="color: blue;">DeepSeek.</p>**` cũng đồng tình và giúp tôi tạo file.

Không nói hết sự vui mừng khôn xiết thế nào khi khung bình luận đã hiển thị ra thật đẹp đẽ dưới bài viết mà không bị thêm lỗi nào. <br>
Qua sự cố lần này tôi nhớ đến chuyện làm bài tập về nhà hồi nhỏ. Có một bài toán làm mãi không được, nghĩ mãi cũng không ra cách gì. Mặc dù trong lòng rất lo lắng không hoàn thành bài tập nhưng không thể làm thì biết sao được.<br>
Tôi rời bàn ra vườn hái rau và không để tâm cố nghĩ về bài tập nữa. Đầu óc hoàn toàn trống rỗng thật thoải mái. <br>
Sau khi xong việc, tôi trở lại gấp sách vở, bỗng nhiên nhìn vào bài toán và thật là kì - bất ngờ tôi nhận ra ngay chi tiết dữ kiện liên kết để giải bài toán mà không hề gặp một chút khó khắn nào. Tôi nhân ra, bài toán không những không hề khó mà còn rất dễ.<br>

Có một dòng trạng thái của tài khoản `**<p style="color: red;">Youtube.</p>**` tôi cho rằng rất đúng với trường hợp tròng bài viết này đó là: **"Sometimes it’s okay to press pause"** <br>

