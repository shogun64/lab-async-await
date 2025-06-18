// Write your code here!
function displayPosts(posts){
    const postList = document.getElementById("post-list");
    posts.forEach((post) => {
        const list = document.createElement("li");
        const header = document.createElement("h1");
        header.textContent = post.title;
        const paragraph = document.createElement("p");
        paragraph.textContent = post.body;

        list.append(header);
        list.append(paragraph);
        postList.append(list);
    })
}

async function retrievePosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    displayPosts(posts);
}

retrievePosts();