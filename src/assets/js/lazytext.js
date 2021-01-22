$(document).ready(function() {
	$("#lazyScrollLoading").lazyScrollLoading({
		lazyItemSelector : ".lazyItem",
		onLazyItemFirstVisible : function(e, $lazyItems, $firstVisibleLazyItems) {
			$firstVisibleLazyItems.each(function() {
				this.innerHTML = this.getAttribute("lazy-text");
			});
		}
	});
});