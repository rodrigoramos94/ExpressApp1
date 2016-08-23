$(document).ready(function () {

    var last_color, last_format;

    var color_count = 0;
    $("#btn_color").click(function () {
        color_count++;
        var html = "<div id=\"color_num" + color_count + "\" class=\"form-group\"><label for=\"color" + color_count + "\" class=\"control-label\">Color " + color_count + "</label> <input id=\"color" + color_count + "\" name=\"colors\" type=\"text\" class=\"form-control input-md\" required=''></div > ";
        $("#product_colors").append(html);
        last_color = $("#color_num" + color_count);
    });

    var format_count = 0;
    $("#btn_format").click(function () {
        format_count++;
        var html = "<div id=\"format_num" + format_count + "\" class=\"form-group\"><label for=\"format" + format_count + "\" class=\"control-label\">Format " + format_count + "</label> <input id=\"format" + format_count + "\" name=\"formats\" type=\"text\" class=\"form-control input-md\"  required=''></div > ";
        $("#product_formats").append(html);
        last_format = $("#format_num" + format_count);
    });

    $("#btn_color2").click(function () {
        $("#color_num" + color_count--).remove();
    });
    $("#btn_format2").click(function () {
        $("#format_num" + format_count--).remove();
    });

});

