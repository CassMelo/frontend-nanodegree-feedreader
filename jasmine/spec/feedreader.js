/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('has a URL defined',function(){

            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).not.toBe('');
            }
         });



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('has a name defined and not empty',function(){

            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
         });


    });


    /* TODO: Write a new test suite named "The menu" */



    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         // var $ = require('jquery');


         it('is hidden by default',function(){
            var myElement = $('body');
            expect(myElement).toHaveClass('menu-hidden');
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

         it('menu changes visibility',function(){

            var myElement = $('body');
            var menuHidden = true;

            // clicks the menu to open it
            if (menuHidden){
                $('.menu-icon-link').trigger('click');
                menuHidden = false;
                expect(myElement).not.toHaveClass('menu-hidden');
            };

            // click it again to hide it
            if (! menuHidden){
                $('.menu-icon-link').trigger('click');
                menuHidden = true;
                expect(myElement).toHaveClass('menu-hidden');
            };
         });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */


        beforeEach(function(done){
            loadFeed(0,function(){
                done();
            });
        });

        it('loadFeed Completed',function(done){
            var myElement = $('.feed');
            expect(myElement).not.toBeEmpty();
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {



        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        beforeEach(function(done){
            loadFeed(0,function(){
                done();
            });
        });

        it('New Feed Loaded',function(done){
            var myElement,
                selectedNewsName,
                menuItem,
                newSelectedNewsName = '';

            // gets the Header that is showing
            myElement = $('.header-title');
            selectedNewsName = myElement.html();

            // select a menu item and simulates a click on it
            menuItem = $('a[data-id="1"]');
            menuItem.trigger('click');

            console.log(selectedNewsName);

            window.setTimeout(function() {
                newSelectedNewsName = myElement.html();
                console.log(newSelectedNewsName);
                expect(newSelectedNewsName).not.toBe(selectedNewsName);

            }, 5000);

            expect(newSelectedNewsName).not.toBe(selectedNewsName);
            done();
        });

    });

}());

