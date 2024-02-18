   then(function(response) {
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return response.json();
   })
   .then(function(products) {
     console.log(products);
   })
   .catch(function(error) {
     console.error('Fetch error:', error);
   });