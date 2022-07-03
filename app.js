//
const box = document.querySelector(".box");
const button = document.querySelector("#button");
var add = document.querySelector(".add");

//text add to the index.html Page
var h2 = document.createElement("h2");
h2Text = document.createTextNode("☠  " + "  Dangerous Priotery List Today");
h2.appendChild(h2Text);
h2.setAttribute('style', ' font-weight: bolder; font-size: 2rem; letter-spacing: 3px; padding: 30px 30px; font-family: sans-serif;');
add.appendChild(h2);


/*
========================================
    datasheet.html page declaration
========================================
*/
// const tabelRow = document.querySelector("tr");
// const output = document.createElement("th");
// output.setAttribute("scope", "col");
// output.appendChild(document.createTextNode(box.value));
// tabelRow.appendChild(output);



/*
========================================
    index page declaration navbar element
========================================
*/
let navbarContainer = document.querySelector(".navbar-container");
let activeTab = document.querySelector(".active");
let lightMode = document.querySelector("body > a");
lightMode.addEventListener("click", () => {
    lightMode.classList.toggle("dark");
});
console.log(lightMode);
let darkMode = document.querySelector("a.dark");





button.addEventListener("click", function () {
    var i = 1;
    activeTab.innerHTML = "Data Sheet";
    if (box.value != "") {
        // console.log(add.hasChildNodes(h2));
        var li = document.createElement("ol");
        li.appendChild(document.createTextNode(i + " ☠ " + box.value));
        li.classList.add("mt");
        li.setAttribute("style", "list-style:disc; background: lightgreen!important; color: red;font-size: 1rem;")
        add.appendChild(li);
        i++;
        box.value = "";

    }

    // let index = 0;
    // while ((index > 10) || (localStorage.getItem('Todolist_items') == null)) {
    //     storeData = []
    //     let randomLocalstorage = Math.floor(Math.random() * localStorage.length);
    //     let random = Math.floor(Math.random() * 11);
    //     console.log(random);
    //     storeData.push([random, box.value]);
    //     localStorage.setItem('Todolist_items', JSON.stringify(storeData));
    //     index++;
    // }
    else {
        alert('Enter your value here');
    }

    li.onclick = () => {
        this.parentNode.removeChild(this);
        localStorage.removeItem(this);
    }




});

// var li = add.children[0];
// console.log(li);





/*
================================================================================
lightmode addeventlistener for converting into dark mode of background screen
================================================================================
*/

// lightMode.addEventListener("click", function () {
//     lightMode.classList.remove("light");
//     lightMode.classList.add("dark");
//     document.body.style.background = '#000';
//     navbarContainer.style.background = "rgba(0,0,0,0.10)";
//     navbarContainer.style.borderBottom = "2px solid rgba(255,255,255,0.2)";
//     navbarContainer.style.boxShadow = "5px 0px 19px 15px rgba(255,255,255,0.2)";
//     activeTab.style.color = "#fff";
//     lightMode.style.background = "#fff";
//     add.parentElement.style.background = "white";
//     h2.setAttribute("style", "color: black;display: flex; flex-direction: column; padding: 0px 30px;");
//     add.appendChild(h2);
// });



/*
================================================================================
darkmode addeventlistener for converting into lightmode of background screen
================================================================================
*/

lightMode.addEventListener("click", function () {
    // darkMode.classList.toggle("dark");
    // darkMode.classList.add("light");
    document.body.style.background = '#000 ';
    // navbarContainer.style.background = "rgba(0,0,0,0.10)";
    // navbarContainer.style.borderBottom = "2px solid rgba(255,255,255,0.2)";
    // navbarContainer.style.boxShadow = "5px 0px 19px 15px rgba(255,255,255,0.2)";
    // activeTab.style.color = "#fff";
    // lightMode.style.background = "#fff";
    // add.parentElement.style.background = "white";
    // h2.setAttribute("style", "color: black;display: flex; flex-direction: column; padding: 0px 30px;");
    // add.appendChild(h2);
});








