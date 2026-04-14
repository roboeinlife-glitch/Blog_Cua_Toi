// Chỉ thêm avatar trên trang bài viết (single post)
document.addEventListener('DOMContentLoaded', function() {
  // Kiểm tra xem có phải trang bài viết không (dựa vào class 'single' của body)
  if (document.body.classList.contains('layout--single')) {
    // Tìm header chứa chữ "Blog của RoboE"
    var masthead = document.querySelector('.masthead__inner-wrap');
    if (masthead) {
      // Kiểm tra đã thêm chưa (tránh thêm nhiều lần)
      if (!masthead.querySelector('.custom-author-header')) {
        // Tạo khối avatar + tên
        var authorBlock = document.createElement('div');
        authorBlock.className = 'custom-author-header';
        authorBlock.innerHTML = `
          <img src="/Blog_Cua_Toi/assets/images/Gimball.png" alt="RoboE_inlife" class="custom-avatar">
          <span class="custom-author-name">RoboE_inlife</span>
        `;
        
        // Tìm vị trí chữ "Blog của RoboE" để chèn xuống dưới
        var siteTitle = masthead.querySelector('.site-title');
        if (siteTitle) {
          siteTitle.insertAdjacentElement('afterend', authorBlock);
        } else {
          masthead.appendChild(authorBlock);
        }
      }
    }
  }
});
