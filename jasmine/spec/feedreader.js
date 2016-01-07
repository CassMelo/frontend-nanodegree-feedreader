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
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Tests each feed in the allFeeds object and ensures it has
         * a URL defined and that the URL is not empty.
         */

         it('has a URL defined',function(){

            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
         });



        /* Tests each feed in the allFeeds object and ensures it has
         * a name defined and that the name is not empty.
         */

         it('has a name defined and not empty',function(){

            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
         });


    });


    /* Tests the menu functionality */

    describe('The menu', function() {

        /* Testes if the menu element is hidden by default.
         */

         it('is hidden by default',function(){
            var myElement = $('body');
            expect(myElement).toHaveClass('menu-hidden');
         });

         /* Tests if  the menu changes
          * visibility when the menu icon is clicked. Checks if
          * the menu will show up when the buttons is clicked and
          * if it hides when it is clicked again
          */

         it('menu changes visibility',function(){

            var myElement = $('body');

            // clicks the menu to open it
            $('.menu-icon-link').trigger('click');
            expect(myElement).not.toHaveClass('menu-hidden');

            // click it again to hide it
            $('.menu-icon-link').trigger('click');
            expect(myElement).toHaveClass('menu-hidden');
         });
    });


    /* Tests if Initial Entries are done correctly */
    describe('Initial Entries', function() {

        /* Tests when the loadFeed function is called and completes
         * its work if there is at least a single .entry element within
         * the .feed container.
         */


        beforeEach(function(done){
            loadFeed(0,done);
        });

        it('loadFeed Completed',function(done){
            var myElement = $('.feed');
            expect(myElement).not.toBeEmpty();
            done();
        });

    });

    /* Tests when a new Feed is selected" */
    describe('New Feed Selection', function() {

        /* Tests when a new feed is loaded by the loadFeed function
         * that the content actually changes.
         */

            var selectedNewsName,
                newSelectedNewsName,
                myElement = $('.header-title');

            beforeEach(function(done){

                //calls loadFeed for the first item
                loadFeed(0,function(){
                                // gets the name selected
                                selectedNewsName = myElement.html();
                                done();
                            });

                // change the load feed selection
                loadFeed(3,function(){
                                // gets the new name selected
                                newSelectedNewsName = myElement.html();
                                done();
                            });
            });

        it('New Feed Loaded',function(done){
            //compares the two names
            expect(newSelectedNewsName).not.toBe(selectedNewsName);
            done();
        });
    });
}());

