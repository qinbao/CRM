/*
 * 分页器
 * @param {number} nowPage 当前页数
 * @param {number} pageNum 总页数
 */
 function paging(nowPage, pageNum , obj) {
    nowPage = (typeof nowPage == 'number') ? nowPage : parseInt(nowPage);
    pageNum = (typeof pageNum == 'number') ? pageNum : parseInt(pageNum);
    var temp = '',
        i,
        $nextPage = $("#nextPage"),
        $firstPage = $("#firstPage"),
        $paging = $("#paging"),
        $lastPage = $("#lastPage");

    if (nowPage == pageNum) {
        $nextPage.hide();
    }
    else {
        $nextPage.show();
    }
    if (nowPage <= 3) {
        for(i = 1; i <= (pageNum < 5 ? pageNum : 5); i++) {
            if (i == nowPage) {
                temp += '<li class="cur">' + i + '</li>';
                continue;
            }
            temp += '<li data-page="' + i + '">' + i + '</li>';
        }
    }
    else if(pageNum - nowPage <= 2) {
        for(i = pageNum; i >= (pageNum-4 > 1 ? pageNum-4 : 1); i--) {
            if (i == nowPage) {
                temp = '<li class="cur">' + i + '</li>' + temp;
                continue;
            }
            temp = '<li data-page="' + i + '">' + i + '</li>' + temp;
        }
    }
    else {
        for(i = nowPage - 2; i <= nowPage + 2; i++) {
            if (i == nowPage) {
                temp += '<li class="cur">' + i + '</li>';
                continue;
            }
            temp += '<li data-page="' + i + '">' + i + '</li>';
        }
    }
    $firstPage.nextUntil("#nextPage")
        .remove();
    $firstPage.after(temp);

    $nextPage.off("click")
        .on("click", function () {
        });
    temp = '';
}