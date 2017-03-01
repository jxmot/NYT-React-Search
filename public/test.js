// SETUP VARIABLES
// ==========================================================

// This variable will be pre-programmed with our authentication key (the one we received when we registered)
var authKey = "a1eb7da15d9841e0bc2559a7c6fb17c3";

// These variables will hold the results we get from the user's inputs via HTML
var queryTerm 	= "";
var numResults 	= 0;
var startYear 	= 0;
var endYear		= 0;

// Based on the queryTerm we will create a queryURL 
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

// Array to hold the various article info
var articleCounter = 0;

// FUNCTIONS
// ==========================================================
function clearResults() {
	// Empties the region associated with the articles
	$("#wellSection").empty();
}

// This runQuery function expects two parameters (the number of articles to show and the final URL to download data from)
function runQuery(data, callback){

    console.log('runQuery() - ');
    console.log(data.searchTerm);
    console.log(data.numItemsSelect);
    console.log(data.startDate);
    console.log(data.endDate);

	// Empties the region associated with the articles
	$("#wellSection").empty();

    queryURL = queryURLBase + data.searchTerm + "&begin_date=" + data.startDate + "&end_date=" + data.endDate;

	numArticles = data.numItemsSelect;

    itemList = [];

    itemData = {};

	// The AJAX function uses the URL and Gets the JSON data associated with it. The data then gets stored in the variable called: "NYTData"
	$.ajax({url: queryURL, method: "GET"}) 
	.done(function(NYTData) {
		// Here we are logging the URL so we have access to it for troubleshooting
		console.log("------------------------------------")
		console.log("URL: " + queryURL);
		console.log("------------------------------------")
		// Loop through and provide the correct number of articles
		for(var idx=0; idx < numArticles; idx++) {
			// Add to the Article Counter (to make sure we show the right number)
			articleCounter++;
            //itemData = JSON.parse(JSON.stringify(renderArticle(NYTData.response.docs[idx], articleCounter)));
            itemData = renderArticle(NYTData.response.docs[idx], articleCounter);
            itemList.push(itemData);
        }
        callback(itemList);
	});
}


function renderArticle(article, articleCounter)
{
	// Create the HTML Well (Section) and Add the Article content for each
	var wellSection = $('<div>');

	wellSection.addClass('well');
	wellSection.attr('id', 'articleWell-' + articleCounter)

//	$('#wellSection').append(wellSection);

	// Confirm that the specific JSON for the article isn't missing any details
	// If the article has a headline include the headline in the HTML
	if(article.headline != 'null')
	{
		wellSection.append('<h3><span class="label label-primary">' + articleCounter + '</span><strong>   ' + article.headline.main + "</strong></h3>");
		
		// Log the first article's Headline to console.
//		console.log(article.headline.main);
	}
	
	// If the article has a Byline include the headline in the HTML
	if( article.byline && article.byline.hasOwnProperty('original'))
	{
		wellSection.append('<h5>' + article.byline.original + '</h5>');

		// Log the first article's Author to console.
//		console.log(article.byline.original);
	}

	// Then display the remaining fields in the HTML (Section Name, Date, URL)
	wellSection.append('<h5>Section: ' + article.section_name + '</h5>');
	wellSection.append('<h5>' + article.pub_date + '</h5>');
	wellSection.append('<a href="' + article.web_url + '">' + article.web_url + '</a>');

	// Log the remaining fields to console as well
//	console.log(article.pub_date);
//	console.log(article.section_name);
//	console.log(article.web_url);

    return wellSection;
}
