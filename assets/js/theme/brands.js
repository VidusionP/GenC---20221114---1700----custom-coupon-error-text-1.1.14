import PageManager from '../page-manager';

export default class Brands extends PageManager {
    onReady() {
        this.showMoreBrands();
    }
    showMoreBrands() {

        $('.button--showmore').on('click', (event) => {
            event.preventDefault();
            var nextPage = $(".pagination-item--current").next(),
                link = nextPage.find("a").attr("href");
            $('#listing-showmoreBtn > a').addClass('loading');

            $.ajax({
                type: 'get',
                url: link.replace("http://", "//"),
                success: function(data) {
                    if ($(data).find('#brand-listing-container').length > 0) {
                        
                        $('#brand-listing-container').append($(data).find('#brand-listing-container').children());

                        $('.pagination-list').html($(data).find(".pagination-list").html());

                        $('#listing-showmoreBtn > a').removeClass('loading').blur();

                        if (Number($(data).find('.pagination-info .end').text()) <= Number($(data).find('.pagination-info .total').text())) {
                            $('.pagination .pagination-info .end').text($(data).find('.pagination-info .end').text());
                        } else {
                            $('.pagination .pagination-info .end').text($(data).find('.pagination-info .total').text());
                        }

                        nextPage = $(".pagination-item--current").next();

                        if (nextPage.length === 0) {
                            $('#listing-showmoreBtn').addClass('pagination-disable').text('No more brands');
                        }
                    }
                }
            });
        });
    }
}
