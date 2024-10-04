// // fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/collections", {
// //     method: "GET",
// //     headers: {
// //         "X-API-KEY": "ffda9045-ad67-4654-a4f1-852b180e3b16",
// //         "Content-Type": "application/json",
// //     },
// // })
// //     .then((res) => res.json())
// //     .then((json) => {
// //         let count = 0;
// //         for (i of json.items) {
// //             count++;
// //             let li = document.createElement("li");
// //             let movieEn = JSON.stringify(i["nameOriginal"]);
// //             let movieRu = JSON.stringify(i["nameRu"]);
// //             if (movieEn != "null") li.innerText = count + ". " + movieEn;
// //             else if (movieRu != "null") li.innerText = count + ". " + movieRu;
// //             ul.appendChild(li);
// //         }
// //     })

// //     .catch((err) => console.log(err));

// const xhr = new XMLHttpRequest();

// xhr.open("GET", `https://api.quotable.io/random`);

// xhr.onload = () => {
//     var response = JSON.parse(xhr.response);
//     console.log(response);
// };
// xhr.send();

// //Проверка если имя уже сохранено
// if (localStorage.getItem("name")) {
//     document.getElementById("savedName").textContent =
//         localStorage.getItem("name");
// }
// // Сохранение имени в LocalStorage
// document.getElementById("saveButton").addEventListener("click", function () {
//     let name = document.getElementById("nameInput").value;
//     localStorage.setItem("name", name);
//     document.getElementById("savedName").textContent = name;
// });

// document.getElementById("clickButton").addEventListener("click", function () {
//     alert("Button have clicked!");
// });

// document.addEventListener("keydown", function (event) {
//     document.getElementById("keyPressed").textContent =
//         "You have pressed: " + event.key;
// });

// document.getElementById("pressButton").addEventListener("click", function () {
//     document.getElementById("img").style.display = "block";
// });

// $("#changeText").hover(
//     function () {
//         $("#text").text("Текст был успешно изменен с помощью JQuery");
//     },
//     function () {
//         $("#text").text("");
//     }
// );

// Home Work

$("#red_button").click(function () {
    $(".text").css({
        color: "red",
    });
});
$("#green_button").click(function () {
    $(".text").css({
        color: "green",
    });
});
$("#blue_button").click(function () {
    $(".text").css({
        color: "blue",
    });
});
$("#yellow_button").click(function () {
    $(".text").css({
        color: "yellow",
    });
});
let check = true;
$("#show_img_button").click(function () {
    if (check === false) {
        $("#img").css({
            display: "none",
        });
        check = true;
    } else {
        $("#img").css({
            display: "block",
        });
        check = false;
    }
});
$("#add_button").click(function () {
    $("#text").append('<h3 class="text">Sometext</h3>');
});
