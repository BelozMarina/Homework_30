$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchItem.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "# here is a comments"
    },
    {
      "line": 3,
      "value": "#below is a tag for identifying of specific tests"
    }
  ],
  "line": 5,
  "name": "Open ebay.com",
  "description": "As a client I want to open ebay.com\r\nand navigate to Electronics menu\r\nand open Camera Drones menu option",
  "id": "open-ebay.com",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@first-TestCase"
    }
  ]
});
formatter.before({
  "duration": 10092539684,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Open menu option Camera Drones by howering mouse on Electronics menu",
  "description": "",
  "id": "open-ebay.com;open-menu-option-camera-drones-by-howering-mouse-on-electronics-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on the Home Page \"https://www.ebay.com\" of our site",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 13
    },
    {
      "cells": [
        "Electronics"
      ],
      "line": 14
    },
    {
      "cells": [
        "Fashion"
      ],
      "line": 15
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "click on \"Camera Drones\" link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on \"Advanced\" link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should get title of the page as \"eBay Search: Advanced Search\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should go to main page \"Main Page\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I should go to the page as \"Smart Watches\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should see watches has brand \"Samsung\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ebay.com",
      "offset": 23
    }
  ],
  "location": "SearchItemSteps.i_am_on_the_Home_Page_of_our_site(String)"
});
formatter.result({
  "duration": 7286581142,
  "status": "passed"
});
formatter.match({
  "location": "SearchItemSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 216263956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Camera Drones",
      "offset": 10
    }
  ],
  "location": "SearchItemSteps.click_on_link(String)"
});
formatter.result({
  "duration": 2554461515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Advanced",
      "offset": 16
    }
  ],
  "location": "SearchItemSteps.userClicksOnLink(String)"
});
formatter.result({
  "duration": 2272328117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eBay Search: Advanced Search",
      "offset": 35
    }
  ],
  "location": "SearchItemSteps.iShouldGetTitleOfThePageAs(String)"
});
formatter.result({
  "duration": 11317135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main Page",
      "offset": 26
    }
  ],
  "location": "SearchItemSteps.iShouldGoToMainPage(String)"
});
formatter.result({
  "duration": 1239115179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smart Watches",
      "offset": 28
    }
  ],
  "location": "SearchItemSteps.iWantToFollowThePageAs(String)"
});
formatter.result({
  "duration": 2455610212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung",
      "offset": 32
    }
  ],
  "location": "SearchItemSteps.iShouldSeeWatchesHasBrand(String)"
});
formatter.result({
  "duration": 4307044130,
  "status": "passed"
});
formatter.after({
  "duration": 489657,
  "status": "passed"
});
});