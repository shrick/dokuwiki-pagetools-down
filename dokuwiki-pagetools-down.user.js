// ==UserScript==
// @name            DokuWiki Pagetools Down
// @author          shrick
// @description     Adds a button to the floating DokuWiki pagetools to jump down to the page footer
// @include         http*
// @run-at          document-end
// @grant           none
// ==/UserScript==

// make changes after document is loaded
window.addEventListener('load', function() {

    // quit if current page is not a DokuWiki
    if (!document.evaluate(
            "//meta[@name='generator' and @content='DokuWiki']",
            document, null, XPathResult.ANY_TYPE, null).iterateNext()
        ) return;
    
    // locate pagetools list
    var list = document.evaluate(
        "//div[@id='dokuwiki__pagetools']/div[@class='tools']/ul",
        document, null, XPathResult.ANY_TYPE, null).iterateNext();
    
    // quit if no pagetools found
    if (!list) return;
    
    // add bottom/down list item
    // Note: A "footer" action is used here that does not exist by default,
    //       hence a default icon is used. You can add a 'xx-footer.png' and
    //       call the pagetools build script within template directory to
    //       recreate the sprite map (not tested).
    var item = document.createElement("li");
    item.innerHTML = '<a href="#dokuwiki__footer" class="action footer" accesskey="b" rel="nofollow" title="Bottom [B]"><span>Down</span></a>';
    list.appendChild(item);
    
}, false);

