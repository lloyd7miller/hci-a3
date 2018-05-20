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

function rotate() {
    var elem = document.getElementById("arrow");
    // scan through the classlist
    for (let i = 0; i < elem.classList.length; i++) {
        if (elem.classList[i] === 'down' ) {
            elem.classList.add("up");
            elem.classList.remove("down");
        }else{
            elem.classList.add("down");
            elem.classList.remove("up");
        }
    }
}