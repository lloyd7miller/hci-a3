// ~~~ SOURCE: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_dropdown
// Get the button, and when the user clicks on it, execute myFunction
var btn = document.getElementById("edit-btn")
btn.onclick = function () { textEditor() };

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function textEditor() {
    var tinymce = document.getElementById("tinymce-div");
    var ans = document.getElementsByClassName("your-answer")[0]
    var warn = document.getElementById("warning");
    var cancel = document.getElementById("cancel-btn");
    if (tinymce.style.display === "none") {
        tinymce.style.display = "block";
        ans.style.display = "none";
        warn.style.display = "block";
        btn.innerHTML = "Save"
        cancel.style.display = "block";
    } else {
        tinymce.style.display = "none";
        ans.style.display = "block";
        warn.style.display = "none";
        btn.innerHTML = "Edit";
        cancel.style.display = "none";
    }
}
// ~~~ END SOURCE

// SOURCE: https://stackoverflow.com/questions/23850115/trying-to-get-a-timestamp-inputed-upon-a-click-of-the-button
function getTimeStamp() {
    var now = new Date();
    return ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " " + now.getHours() + ':'
        + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
            .getSeconds()) : (now.getSeconds())));
}
// END SOURCE


// SOURCE: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function collapseExpand() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.visibility === "hidden") {
        dropdown.style.visibility = "visible";
    }else{
        dropdown.style.visibility = "hidden";
    }
        
}

//not working.....
// var dropdown = document.getElementById("myDropdown");
// dropdown.addEventListener("focusout", collapse);

// function collapse() {
//     dropdown.style.display = "none";
//     alert("hello");
// }

// Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdown = document.getElementsById("myDropdown");
//         dropdown.style.display = "none";
//     }
// }

// END SOURCE


// SOURCE: https://stackoverflow.com/questions/4274489/how-can-i-make-an-upvote-downvote-button
for (const btn of document.querySelectorAll('.vote')) {
    btn.addEventListener('click', event => {
// END SOURCE
        var countElement = btn.children[0];
        var currentCount = Number(countElement.textContent);
        var x = false;
        // scan through the classlist of btn and check for "on"
        for (let i = 0; i < btn.classList.length; i++) {
            if (btn.classList[i] === 'on') {
                x = true
            }
        }

        if (x === true) {
            countElement.innerHTML = (currentCount - 1).toString();
        }else{
            countElement.innerHTML = (currentCount + 1).toString();
        }
        event.target.classList.toggle('on');
    });
}


// function upvote(element){
//     var countElement = element.children[0];
//     var currentCount = Number(countElement.textContent);
//     alert("hello");
    
//     if (element.hasClass("on")) {
//         countElement.innerHTML = (currentCount + 1).toString();
//     }else{
//         countElement.innerHTML = (currentCount - 1).toString();
//         countElement.classList.add("on");
//     }

// }


// SOURCE: https://github.com/google/material-design-lite/issues/5030
var dialog = document.getElementById('messenger-img');
dialog.showModal();
dialog.addEventListener('click', function (event) {
    var rect = dialog.getBoundingClientRect();
    var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    if (!isInDialog) {
        dialog.close();
    }
});
// END SOURCE