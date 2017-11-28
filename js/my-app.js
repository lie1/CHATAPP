var myApp = new Framework7();
var $$ = Dom7;


var mainView = myApp.addView('.view-main', {
   
    dynamicNavbar: true
});


$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});



myApp.onPageInit('about', function (page) {
   

})


$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
   
      
    }
})

$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    
   
})