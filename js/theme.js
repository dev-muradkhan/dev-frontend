jQuery(document).ready(function($){
    $('#api-nav-dropdown').on("click",function(event){
        $(this).find('span i').toggleClass('fa-solid fa-angle-up fa-solid fa-angle-down');
        event.stopPropagation();

        $(".dropdown-api-nav").toggle('fast');

    });

    $(".dropdown-api-nav").on("click", function (event) {
        event.stopPropagation();
    });

});

jQuery(document).on("click", function () {
    jQuery(".dropdown-api-nav").hide();
});

