function search_pages() {
    var q = $("input:text[name=chronam_search_pages_q]").val()
    var url = 'http://chroniclingamerica.loc.gov/search/pages/results/?format=json&ortext=' + q;
    $.getJSON(url, chronam_search_pages_results);
    var loading = '<img id="loading" src="loading.gif">';
    $("input[type=submit]").replaceWith(loading);
    return false;
}

function chronam_search_pages_results(results) {
    var hits = $("#chronam_search_pages_results");
    hits.empty();
    for (i in results) { 
        var result = results[i];
        var url = "http://chroniclingamerica.loc.gov" + result.id;
        var thumb = url + "/thumbnail.jpg";
        var img = '<img src="' + thumb + '">';
        var span = $('<span class="chronam_page"><a href="' + url + '">' + img + '</a></span>');
        hits.append(span);
    }
    var search = '<input type="submit" value="search">';
    $("img[id=loading]").replaceWith(search);
}

function init_chronam_search_pages() {
    var html = '<form id="chronam_search_pages_form"> \
                <input id="search_box" name="chronam_search_pages_q" type="text"> \
                <input type="submit" value="search"> \
                </form> \
                <div id="chronam_search_pages_results"></div> \
                ';

    $("#chronam_search_pages").prepend(html);
    $("#chronam_search_pages_form").submit(search_pages)
}
