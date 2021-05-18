
(function($) {
    var	win = $(window);
    win.on("load", function() {

        var blog = $("<div class=\"wrapper style3\">" +
            "<div class=\"inner\">" +
            "<div class=\"container\">" +
            "<div class=\"row\">" +
            "<div class=\"col-8 col-12-medium\">" +

            "<!-- Article list -->" +
            "<section class=\"box article-list\">" +
            "<h2 class=\"icon fa-file-alt\">Skyebright news</h2>" +

            "<!-- Excerpt -->" +
            "<article class=\"box excerpt\">" +
            "<a href=\"#\" class=\"image left\"><img src=\"images/pic04.jpg\" alt=\"\" /></a>" +
            "<div>" +
            "<header>" +
            "<span class=\"date\">March 15th</span>" +
            "<h3><a href=\"#\">Our website is now live!</a></h3>" +
            "</header>" +
            "<p>In a series of new changes we are making to the skyebright company, our most recent and significant change has been " +
            "to revamp our online presence! We have finally made a website which is able to represent us and our interests as a company, " +
            "and offer our patrons a view into what is it is like to be with <span class='skyblue' >Skyebright</span>!</p>" +
            "</div>" +
            "</article>" +

            "<!-- Excerpt -->" +
            "<article class=\"box excerpt\">" +
            "<a href=\"#\" class=\"image left\"><img src=\"images/pic05.jpg\" alt=\"\" /></a>" +
            "<div>" +
            "<header>" +
            "<span class=\"date\">March 1st</span>" +
            "<h3><a href=\"#\">We're going local!</a></h3>" +
            "</header>" +
            "<p>We are currently in the process of purchasing a local office in order to be able to serve more students! " +
            "We hope that it will be somewhere in the sunridge area of Calgary nearby to the registry but nothing is set in stone" +
            " as of now. We are also looking to hire new instructors! Stay tuned for more!</p>" +
            "</div>" +
            "</article>" +

            "</section>" +
            "</div>" +
            "<div class=\"col-4 col-12-medium\">" +

            "<!-- Spotlight -->" +
            "<section class=\"box spotlight\">" +
            "<h2 class=\"icon fa-file-alt\">Spotlight</h2>" +
            "<article>" +
            "<a href=\"#\" class=\"image featured\"><img src=\"images/pic07.jpg\" alt=\"\"></a>" +
            "<header style='margin-bottom:1em'>" +
            "<h3><a href=\"#\">City Council votes to lower residential Speed Limits!</a></h3>" +
            "<p>A bold move for neighborhood safety</p>" +
            "</header>" +
            "<p>All residential speed limits will now be slowed down to 40km/h, thats 10km/h less than the original 50. " +
            "City council voted 10-4 on the bylaw Monday February 1st. About the change, set to take effect on May 31, " +
            "Mayor Naheed Nenshi has said \"" +
            "if you dont see a sign on a road, that means the speed limit is 40\"" +
            "<br/>“Injuries and deaths on our city streets are expensive, and it’s also incredibly damaging to people’s " +
            "well-being,” Ward 7 Councillor Druh Farrell said. Everyone makes mistakes, but the price for a mistake shouldn’t be" +
            " injury and death.”</p>" +
            "<footer>" +
            "<a href=\"#\" class=\"button alt icon solid fa-file-alt\">Continue Reading</a>" +
            "</footer>" +
            "</article>" +
            "</section>" +

            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>");
        blog.appendTo($("#main-wrapper"));




        var footer = $(
            "<div id=\"footer-wrapper\">\n" +
            "<footer id=\"footer\" class=\"container\">\n" +
            "<div class=\"row\">\n" +
            "<div class=\"col-3 col-6-medium col-12-small\">\n" +
            "\n" +
            "<!-- Links -->\n" +
            "<section>\n" +
            "<h2>Links</h2>\n" +
            "<ul class=\"divided\">\n" +
            "<li><a href=\"contact.html\" class='footerLink'>Contact us</a></li>\n" +
            "<li><a href=\"assets/learnerhandbook.pdf\" class='footerLink'>Class 7 Licensing handbook </a></li>\n" +
            "<li><a href=\"assets/DrivingSmallVehiclesHandbook _2021-01.pdf\" class='footerLink'>Additional Handbook </a></li>\n" +
            "<li><a href=\"https://www.alberta.ca/get-drivers-licence-steps.aspx\" class='footerLink'>Steps To Getting a License</a></li>\n" +
            "</ul>\n" +
            "</section>\n" +
            "\n" +
            "</div>\n" +
            "<div class=\"col-3 col-6-medium col-12-small\">\n" +
            "\n" +
            "<!-- Links -->\n" +
            "<section style='margin-bottom:2.5em'>\n" +
                "<h2>Business Hours</h2>\n" +
                    "<ul class=\"divided\" >\n" +
                        "<li><a class='footerLink' href=\"https://www.google.com/maps?q=skyebright+driving+academy&um=1&ie=UTF-8\">Monday - Sunday: 8:00am-8:00pm</a></li>\n" +
                        "<li><a class='footerLink' href=\"https://www.google.com/maps?q=skyebright+driving+academy&um=1&ie=UTF-8\">Find us on Google - <i aria-hidden=true class='fab fa-google'></i></a></li>\n" +
                    "</ul>\n" +
                "</section>\n" +
            "</div>\n" +

            "<div class=\"col-6 col-12-medium imp-medium\">\n" +
            "<!-- Contact -->\n" +
            "<section>\n" +
            "<h2>Get in touch</h2>\n" +
            "<div>\n" +
            "<div class=\"row\">\n" +
                "<div class=\"col-6 col-12-small\">\n" +
                     "<dl class=\"contact\">\n" +
                        "<dt>WWW</dt>\n" +
                        "<dd><a href=\"skyebright.ca\" class='footerLink'>skyebright.ca</a></dd>\n" +
                        "<dt>Email</dt>\n" +
                        "<dd><a href=\"#\" class='footerLink'>skyebrightdriving@gmail.com</a></dd>\n" +
                        // "<dd><i aria-hidden=\"true\" class='fab fa-google'></i></dd>"+ consider adding this back later
                    "</dl>\n" +
                "</div>\n" +
                "<div class=\"col-6 col-12-small\">\n" +
                    "<dl class=\"contact\">\n" +
                        "<dt>Address</dt>\n" +
                        "<dd>\n" +
                            "Calgary, AB, Canada\n" +
                        "</dd>\n" +
                        "<dt>Phone</dt>\n" +
                        "<dd><a style=\"\" class=\"contact\" href=\"tel:+1-403-978-7421\">(403) 978-7421</a></dd>\n" +
                    "</dl>\n" +
                "</div>\n" +
            "</div>\n" +
            "</div>\n" +
            "</section>\n" +
            "\n" +
            "</div>\n" +
            "<div class=\"col-12\">\n" +
            "<div id=\"copyright\">\n" +
            "<ul class=\"menu\">\n" +
            "<li>&copy; All rights reserved</li><li>Design: <a href=\"http://pages.cpsc.ucalgary.ca/~ali.alkhazaly\">Ali Al-Khaz'Aly</a> & HTML5UP</li>\n" +
            "</ul>\n" +
            "</div>\n" +
            "</div>\n" +
            "</div>\n" +
            "</footer>\n" +
            "</div>"
        )

        footer.appendTo($("#page-wrapper"));
    });




})(jQuery);