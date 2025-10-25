document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("post-list");
    posts.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `
      <h2><a href="${p.link}">${p.title}</a></h2>
      <p><small>${p.date} | Chủ đề: ${p.tag}</small></p>
    `;
        container.appendChild(div);
    });
});
