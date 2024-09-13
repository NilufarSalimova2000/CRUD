const box = document.querySelector(".box");
const form = document.querySelector(".form");
const input = document.querySelector(".input");

import { getPosts, createPost, DeletePost } from "./service.js";

const getPostsrender = async () => {
    const data = await getPosts();
    box.innerHTML = data.map((item) => `
    <div>
        <h1>${item.title}</h1>
        <button data-delete="${item.id}">delete</button>
        <button data-id="${item.id}">edit</button>
    </div>
    `).join("");
};
getPostsrender();

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await createPost({ title: input.value });
    input.value = "";
    getPostsrender();
});

box.addEventListener("click", async (e) => {
    const deleteId = e.target.dataset.delete;
    console.log(deleteId);
    if (deleteId) {
        await DeletePost(deleteId);
    }
    getPostsrender();
})