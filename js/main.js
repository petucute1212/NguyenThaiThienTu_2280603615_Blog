// Lấy phần tử chính
const postList = document.getElementById("post-list");

// Render danh sách bài viết
function renderPosts() {
  postList.innerHTML = posts
    .map(
      (post) => `
        <article class="post-card">
          <h2><a href="${post.link}">${post.title}</a></h2>
          <p class="date">📅 ${post.date}</p>
          <p>${post.desc}</p>
          <a href="${post.link}" class="read-more">Đọc bài →</a>
        </article>
      `
    )
    .join("");
}

// Gọi hàm khi trang tải
renderPosts();
