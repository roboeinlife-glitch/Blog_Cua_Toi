---
title: "Cách Tạo Trang Blog Cá Nhân Trên GitHub"
date: 2026-04-12
layout: single
author_profile: true
sidebar:
  nav: "sidebar"
---

<div style="height: 2rem;"></div>

Hôm nay, ngày 12/04/2026, tôi rất vui mừng viết ra những dòng chữ này vì tôi đã có một trang blog đẹp, dịu dàng và tươi sáng cho riêng mình.<br>
Để việc này trở nên có ý nghĩa, tôi sẽ chia sẻ cách tôi đã nhờ DeepSeek giúp tạo ra trang [Blog](https://roboeinlife-glitch.github.io/Blog_Cua_Toi/) cá nhân tuyệt vời này.

**Cách thứ nhất**: Fork repository Jekyll có sẵn

Một số gợi ý:
- [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes)
- [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy)
- [jekyll-now](https://github.com/barryclark/jekyll-now)

**Ưu điểm:** Bạn có sẵn một phiên bản blog với đầy đủ tính năng và bố cục cần thiết cho bài viết, không cần lo lắng gì.<br>
Để biết cách fork repository Jekyll, bạn có thể tham khảo mẫu [forked from barryclark/jekyll-now](https://github.com/roboeinlife-glitch/roboeinlife-glitch.github.io) mà tôi đã thử làm trước đây.

**Cách thứ hai**: Tự tạo thiết kế Blog riêng

Các bước thực hiện:

1. **Tạo kho lưu trữ (repository)**<br>
Trong tài khoản GitHub, tạo repository mới với tên:  
`username-github.github.io`  
(trong đó `username` là tên tài khoản của bạn).

2. **Cấu hình**<br>
- **Mô tả (Description):** Có thể bỏ trống hoặc ghi "Blog cá nhân của tôi". Ví dụ tôi đặt là [Blog_Cua_Toi](https://roboeinlife-glitch.github.io/Blog_Cua_Toi/).<br>
- Chọn **Public** và tích chọn **"Add a README file"** để được khởi tạo sẵn. Sau này, các ghi chú về blog sẽ được ghi rõ ở đây.

3. **Lưu ý về giao diện repository**<br>
Cấu trúc giao diện của repository chỉ bao gồm các thư mục và nội dung file README, không hiển thị trực tiếp đường dẫn đến trang blog (bài đọc hiển thị trên trình duyệt).<br>  
Chỉ chủ tài khoản mới mở được các file và ở dạng quản trị.

Do đó, bạn cần tạo đường dẫn đến trang chủ blog bằng công thức:  
`[tên trang](đường dẫn link)` <br> 
Và đặt nội dung này vào file README. Như vậy, khi mọi người vào repository blog của bạn sẽ nhìn thấy ngay đường dẫn để đọc bài viết.

> Thực ra, nếu bạn là người nổi tiếng, dùng nhiều mạng xã hội và đã được chia sẻ rộng rãi thì bước này không cần thiết. Bài viết của bạn cũng sẽ nổi tiếng thôi.  
> Nhưng nếu bạn giống tôi – mới bắt đầu – thì tôi nghĩ điều này khá quan trọng.

4. **Tùy chỉnh giao diện và cấu trúc**<br>
Để có thể tùy chỉnh các thông số như tiêu đề trang chủ, hiển thị bài viết, font chữ, kích thước, liên kết… bạn cần thiết kế riêng.

**Cách thực hiện:** Vào repository blog vừa tạo, chọn **Create new file** và lần lượt tạo các file/thư mục sau:

1. `_includes` Có:<br>
[archive-single.html](https://github.com/roboeinlife-glitch/Blog_Cua_Toi/blob/main/_includes/archive-single.html)<br>
Và [comments.html](https://github.com/roboeinlife-glitch/Blog_Cua_Toi/blob/main/_includes/comments.html)<br>
3. `_posts` – [thư mục chứa bài viết](https://github.com/roboeinlife-glitch/Blog_Cua_Toi/tree/main/_posts)<br>
4. `assets` – trong đó tôi có hai file:  <br>
   - [style.css](https://github.com/roboeinlife-glitch/Blog_Cua_Toi/blob/main/assets/css/style.css) <br> 
   - [main.scss](https://github.com/roboeinlife-glitch/Blog_Cua_Toi/blob/main/assets/css/main.scss) (bổ sung và ghi đè lên style.css để sửa lỗi tách chữ trong một từ) <br>
5. `_config.yml` – [file cấu hình](https://github.com/roboeinlife-glitch/Blog_Cua_Toi/blob/main/_config.yml) định dạng font, kích thước, tiêu đề… (những gì hiển thị trên trình duyệt)<br>
6. `images` – [thư mục](https://github.com/roboeinlife-glitch/Blog_Cua_Toi/tree/main/assets/images) lưu trữ ảnh, video để đưa vào bài đăng

**Thao tác:**  
Vào repository → chọn **Create new file** → đặt tên file (theo mẫu) → copy nội dung code vào khung soạn thảo Markdown → chọn **Commit** → đợi khoảng 2 phút để GitHub cập nhật.<br>
Để kiểm tra file đã tạo thành công chưa, vào mục **Actions**. Nếu ghi chú cập nhật có dấu ✔ màu xanh là thành công, nếu có dấu ✘ đỏ thì cần kiểm tra lại. Chỉ các file đúng mới có tác dụng đối với blog.

5. **Viết bài**<br>
Sau khi tạo xong các file cấu hình, việc còn lại rất đơn giản:

1. Vào thư mục `_posts` → chọn **Create new file**.<br>
2. Đặt tên cho bài viết bằng **tiếng Anh**, các từ nối với nhau bằng dấu gạch ngang `-`, kết thúc bằng đuôi `.md`.<br>
3. Viết nội dung Markdown như bạn muốn.<br>
4. Commit bài viết, đợi GitHub cập nhật.<br>
5. **Luôn gắn link Vào Trang Chủ Blog** ở cuối bài viết để người đọc dễ dàng truy cập các bài khác.

 **Một số thông tin thêm về Blog GitHub**

- Blog trên GitHub là một đặc sản rất riêng.<br>
- Host blog tĩnh trực tiếp từ repository GitHub – hoàn toàn miễn phí.<br>
- **Jekyll** (tích hợp sẵn với GitHub Pages), **Hugo** (tốc độ build nhanh), **Hexo** (dành cho developer).<br>
- Tích hợp version control (Git), dễ backup, dễ migrate.<br>
- Tự do tùy chỉnh.<br>
- Phù hợp cho technical writing (nhưng một người bình thường như tôi cũng không quá khó để học cách sử dụng).

---

**Lưu ý:** <br> 
Tôi không phải lập trình viên, mới học cách sử dụng GitHub lần đầu, tất cả nhờ vào sự hướng dẫn của DeepSeek nên không tránh khỏi thiếu sót.<br>  
Rất mong nhận được sự lượng thứ từ các bạn nếu tình cờ đọc được bài viết này.<br>
À, hôm nay tôi đã học cách tạo được bình luận cho bài viết, tôi đã rất vui mừng. Có lẽ tôi sẽ chia sẻ cách làm trong bài viết tiếp theo.

**Cảm ơn** [![Chat](https://img.shields.io/badge/🤖%20Chat-DeepSeek%20V3-536af5?color=536af5&logoColor=white)](https://chat.deepseek.com/) đã hỗ trợ tôi rất nhiều!<br>  
**Cảm ơn** ![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white) đã tạo ra nền tảng tiện ích này và cho phép người dùng sử dụng một cách hữu ích!

[Về trang chủ Blog](https://roboeinlife-glitch.github.io/Blog_Cua_Toi/)  
[Về trang chủ GitHub RoboE](https://github.com/roboeinlife-glitch)
