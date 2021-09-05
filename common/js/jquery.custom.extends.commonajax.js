(function ($) {
    $.extend({
        CommonAjax: function (options, callBack) {
            var defaults = {
                url: '',
                type: 'POST',
                data: {},
                async: true,
                dataType: 'JSON',
                success: function () { },
                complete: function (xmlHttpRequest, status) {
                    if (callBack) callBack();
                    if (status === 'timeout') {
                        layer.msg("超时错误！", { icon: 2, time: 3000 });
                    }
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    if (callBack) callBack();
                    layer.msg($.stringformat("出现错误！", errorThrown), { icon: 2, time: 3000 });
                }
            };
            var opts = $.extend(defaults, options);
            $.ajax(opts);
        }
    });
})(jQuery);