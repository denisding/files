(function ($) {
	$.extend({
		stringformat: function (string) {
			var arg = arguments;
			return string.replace(/{([\d])}/g, function (a, b) {
				return arg[parseInt(b) + 1] || '';
			});
		}
	});
})(jQuery);