
$(document).ready(function () {
    // Load other html files
    $('[data-page]').each(function (index, item) {
        const $item = $(item);
        const dataPage = $item.attr('data-page');
        $item.load(dataPage, function () {
            $('<div class="jump-to" style="text-align: center"><a href="#table-contents">^ Table of Contents ^</a></div>')
                .insertBefore([`[data-page="${dataPage}"] .page > h1`, `[data-page="${dataPage}"] .page > h2:not(.no-jump-to)`]);
            $('.img-step', $(`[data-page="${dataPage}"] .page`)).click(function (event) {
                console.log(this.src);
                let $overlay = $('.overlay');
                $overlay.empty();
                $overlay.html(`<img src="${this.src}" />`);
                $overlay.css('display', 'block');
                $('body').css('overflow', 'hidden');
            });
        });
    });

    $('.overlay').click(function () {
        $('body').css('overflow', 'auto');
        $(this).css('display', 'none');
    });
});
