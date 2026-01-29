const content = document.getElementById("main-content");

function changePage(page){
    switch(page){
        case "home":
            content.innerHTML = "<h1>Selamat datang di home</h1>"
            content.style.backgroundColor = "lightblue";
            break;

        case "profile":
            content.innerHTML = "<h1>Selamat datang di profile</h1>"
            content.style.backgroundColor = "red";
            break; 

        case "settings":
            content.innerHTML = "<h1>Selamat datang di settings</h1>"
            content.style.backgroundColor = "violet";
            break; 

        case "random":
            content.innerHTML = "<h1>Error (404)</h1>"
            content.style.backgroundColor = "gray";
            break; 
    };
};