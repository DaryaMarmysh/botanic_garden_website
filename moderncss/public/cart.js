var arr = $('*');
var select_array = [];
var name_list_code=[];
arr.each(function (index, element) {
    var str = element.id;
    if (str[0] == "_" || str[0] == "l") {
        select_array.push(element);
    }
});

jQuery.each(select_array, function () {
    $(this).on("mouseout", handle2_out);
    $(this).on("mouseover", handle2);
});

function handle2() {
    var mouseId = $(this).attr('id');
    if (mouseId.startsWith("_")) {
        $("#li" + mouseId.slice(1)).addClass("fil_focus");
        $(this).addClass("fil_focus");
    }
    else {
        $("#_" + mouseId.slice(2)).addClass("fil_focus");
    }
}

function handle2_out() {
    var mouseId = $(this).attr('id');
    if (mouseId.startsWith("_")) {
        $("#li" + mouseId.slice(1)).removeClass("fil_focus");
        $(this).removeClass("fil_focus");
    }
    else {
        $("#_" + mouseId.slice(2)).removeClass("fil_focus");
    }
}

