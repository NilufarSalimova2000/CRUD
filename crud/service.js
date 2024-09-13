const url = "http://localhost:3000";

export const getPosts = async () => {
    try {
       const res = await fetch(`${url}/list`);
       const data = await res.json();
       return data; 
    } catch (error) {
        return error.message;
    }
};

export const createPost = async (dataForm) => {
    try {
        const res = await fetch(`${url}/list`, {
            headers: {
                "Content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(dataForm)
        })
        const data = await res.json();
        return data;
    } catch (error) {
        return error.message;
    }
};

export const DeletePost = async (deleteId) => {
    try {
        const res = await fetch(`${url}/list/${deleteId}`, {
            headers: {
                "Content-type": "application/json",
            },
            method: "DELETE",
        });
        const data = await res.json();
        return data;
    
    } catch (error) {
        return error.message;
    }
};


// export const editPost = async (newTitle, id) => {
//     try {
//         const res = await fetch(`http://localhost:3000/new_products/${id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-type": "application/json",
//             },
//             body: JSON.stringify({ title: newTitle })
//         });

//         if (!res.ok) {
//             throw new Error(`Error: ${res.status} ${res.statusText}`);
//         }

//         return await res.json();
//     } catch (error) {
//         console.error("Error during data update:", error.message);
//         return { success: false, message: error.message };
//     }
// };

