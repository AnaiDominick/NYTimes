$("#search").on("click", function() {
      $("#article-appear-here").empty();
      //var animal = $(this).attr("data-animal");
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      var params = {};
      params["api-key"]="ad60d980e9544b1db7efd79575998322";
      params.q = $("#searchTerm").val();     
      
      queryURL += '?' + $.param(params);
      console.log(queryURL);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        
        var results = response.response.docs;
        
        

        for (var i = 0; i < 5; i++) 
       
          var articleDiv = $("<div>")
          var p = $("<p>")
          p.text("brief description: "+results[i].snippet);
          var articleImage = $("<img>");
          articleImage.attr("src", results[i].multimedia[0].url);
          articleDiv.append(p);
          articleDiv.append(articlelImage);

          $("#article-appear-here").prepend(articleDiv);

        
         }

      });
    });