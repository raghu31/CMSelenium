$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn_Test.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User LogOut from the Application",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "login-action;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "austin.raghu",
        "cOOL225$"
      ],
      "line": 12,
      "id": "login-action;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "raghu.g31",
        "cOOL143$"
      ],
      "line": 13,
      "id": "login-action;successful-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"austin.raghu\" and \"cOOL225$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User LogOut from the Application",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 11770996977,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 30001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "austin.raghu",
      "offset": 13
    },
    {
      "val": "cOOL225$",
      "offset": 32
    }
  ],
  "location": "Test_Steps.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 2984958144,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 2623282902,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.user_LogOut_from_the_Application()"
});
formatter.result({
  "duration": 8269620850,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.message_displayed_Logout_Successfully()"
});
formatter.result({
  "duration": 86452,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"raghu.g31\" and \"cOOL143$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User LogOut from the Application",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 10641273205,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 25264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "raghu.g31",
      "offset": 13
    },
    {
      "val": "cOOL143$",
      "offset": 29
    }
  ],
  "location": "Test_Steps.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 2673423870,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 8665555555,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.user_LogOut_from_the_Application()"
});
formatter.result({
  "duration": 1454739029,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.message_displayed_Logout_Successfully()"
});
formatter.result({
  "duration": 68687,
  "status": "passed"
});
});