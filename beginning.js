document.write('\
<header>\
    <div class="header-item" onclick="location.href=\'#lightbox\'">\
        <img src="img/msg.png" alt="messenger">\
    </div>\
    <div class="header-item" id="assignment-question">\
        <div class="the-question" onclick="collapseExpand();rotate();">\
            <i id="arrow" class="down"></i>\
            What is the role of lactic acid in physical exercise?\
        </div>\
        <!-- <button onclick="myFunction()" class="dropbtn">Dropdown</button> -->\
        <div id="myDropdown" class="dropdown-content" style="visibility: hidden;">\
            <h4>Assignment details</h4>\
            <p id="due-date"><u><b>Due date:</b></u> May 30th 2018</p>\
            <h5>Task sub-heading 1</h5>\
            <p>\
                Suspendisse sollicitudin finibus imperdiet. Quisque pretium pharetra nibh sit amet volutpat. Donec ullamcorper, dui fringilla\
                ultricies lacinia, libero nulla lacinia nunc, at accumsan metus arcu eget ex. Donec lobortis commodo libero ut mollis. In\
                ex dolor, viverra eu quam sit amet, tincidunt pharetra quam. Cras sagittis eros in mi gravida egestas. Aenean molestie dolor\
                turpis, ac finibus mi feugiat consectetur. Nullam dapibus, urna gravida faucibus efficitur, purus mi sodales urna, at molestie\
                velit nisi blandit tortor. Vivamus vulputate porta nibh, non semper ligula luctus a. Aliquam vitae laoreet tellus. Proin\
                a luctus libero. \
            </p>\
            <h5>Task sub-heading 1</h5>\
            <p>\
                Integer blandit ac nisl sed luctus. Aliquam erat volutpat. Mauris at nisl porta, ullamcorper dolor eget,\
                ullamcorper tellus. Nulla elit justo, volutpat a tincidunt vel, vestibulum vitae ligula. Phasellus nunc mauris, bibendum\
                ut erat vitae, vulputate feugiat purus. Nullam eu leo sed neque congue egestas. Nunc pulvinar ut erat sit amet euismod. Nam\
                dictum, tellus quis lacinia gravida, lacus massa suscipit nulla, eget imperdiet enim nisi eu mi. In pharetra efficitur lacinia.\
                Integer eget risus in velit tincidunt pretium vitae id mauris.\
            </p>\
        </div>\
    </div>\
    \
    <div class="header-item" onclick="location.href=\'#\'">Kody Johnson</div>\
</header>\
\
<div id="lightbox" onclick="location.href=\'#\'">\
    <img src="./img/group-msg.png" alt="messenger" onclick="location.href=\'#lightbox\'" id="messenger-img">\
    <p>This is a sample of what the messenger would look like. Click anywhere to close this popup.</p>\
</div>\
');
