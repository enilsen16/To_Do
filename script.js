$(document).ready(function () {
    $("#button").click(function () {
        var toAdd = $('input[name=listItem]').val();
        $(".list").prepend('<div class="item">' + toAdd + '</div>');
    });
    $(document).on('click', ".item", function () {
        $(this).remove();
    });
});