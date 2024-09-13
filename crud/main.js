const box = document.querySelector(".box");
const form = document.querySelector(".form");
const input = document.querySelector(".input");

import { getPosts, createPost, DeletePost} from "./service.js";

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
    const res = await createPost({title: input.value});
    input.value = "";
    getPostsrender();
});

box.addEventListener("click", async (e) => {
    e.preventDefault();

    const postId = e.target.getAttribute('data-delete');
    if (postId) {
        console.log("O'chiriladigan post ID:", postId);

        const res = await DeletePost(postId);

        if (!res.success) {
            console.error("O'chirishda xatolik:", res.message || "No message provided");
        } else {
            getPostsrender(); 
        }
    } else {
        console.warn("Post ID topilmadi yoki noto'g'ri!");
    }
});


const editData = async (newTitle, id) => {
    try {
        const res = await fetch(`http://localhost:3000/new_products/${id}`, {
            method: "PATCH",
            body: JSON.stringify({title, newTitle})
        });
        const data = await res.json();
        console.log(data);
        getPostsrender(); 
    } catch (error) {
        
    }
}


box.addEventListener("click", async (e) => {
    const id = e.target.dataset.id;
    if(id){
        try {
            const res = await fetch(`http://localhost:3000/new_products/${id}`);
            const data = await res.json();
            const newTitle = prompt("",data.title);
        } catch (error) {
            
        }
    }
});


