/*global jQuery */
/*!
* Simple Jekyll Search
* Christian Fei - https://github.com/christian-fei/Simple-Jekyll-Search *
*
*/

(function(e){e.fn.simpleJekyllSearch=function(t){function u(){s.keyup(function(t){if(e(this).val().length){f(a(e(this).val()))}else{l()}})}function a(t){var n=[];e.each(i,function(e,i){for(var e=0;e<r.length;e++)if(i[r[e]]!==undefined&&i[r[e]].toLowerCase().indexOf(t.toLowerCase())>1){n.push(i);e=r.length}});return n}function f(t){l();o.append(e(n.searchResultsTitle));if(t.length){e.each(t,function(t,i){if(t<n.limit){var s=n.template;for(var t=0;t<r.length;t++){var u=new RegExp("{"+r[t]+"}","g");s=s.replace(u,i[r[t]])}o.append(e(s))}})}else{o.append(n.noResults)}}function l(){o.children().remove()}var n=e.extend({jsonFile:"{{ site.baseurl }}/search.json",jsonFormat:"title,category,desc,url,date,shortdate",template:'<a href="{url}" title="{title}">{title}</a>',searchResults:".results",searchResultsTitle:"<h4>Search results</h4>",limit:"10",noResults:"<p>Oh shucks<br/><small>Nothing found :(</small></p>"},t);var r=n.jsonFormat.split(",");var i=[],s=this,o=e(n.searchResults);if(n.jsonFile.length&&o.length){e.ajax({type:"GET",url:n.jsonFile,dataType:"json",success:function(e,t,n){i=e;u()},error:function(e,t,n){console.log("***ERROR in simpleJekyllSearch.js***");console.log(e);console.log(t);console.log(n)}})}}})(jQuery)
