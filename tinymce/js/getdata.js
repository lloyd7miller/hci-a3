$(document).ready(function() {
    $("#get-data-form").submit(function(e) {
        var content = tinymce.get("texteditor").getContent();

        $("#data-container").html(content);

        return false;
    });
});

// when the "submit" button is pressed, the code above will execute