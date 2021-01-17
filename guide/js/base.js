
$(document).ready(function () {
    // Load other html files
    $('[data-page]').each(function (index, item) {
        const $item = $(item);
        const dataPage = $item.attr('data-page');
        $item.load(dataPage, function () {
            $('<div class="jump-to" style="text-align: center"><a href="#table-contents">^ Table of Contents ^</a></div>').insertBefore(`[data-page="${dataPage}"] .page > h1`);
        });
    });
});
