$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "As a \"\u003cuserType\u003e\" log in",
  "keyword": "When "
});
formatter.step({
  "name": "user access \"Dashboard\" page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userType"
      ]
    },
    {
      "cells": [
        "driver"
      ]
    },
    {
      "cells": [
        "salesManager"
      ]
    },
    {
      "cells": [
        "storeManager"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a \"driver\" log in",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackG18.stepDesfs.LoginStepDef.as_a_log_in(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user access \"Dashboard\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackG18.stepDesfs.LoginStepDef.user_access_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a \"salesManager\" log in",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackG18.stepDesfs.LoginStepDef.as_a_log_in(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user access \"Dashboard\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackG18.stepDesfs.LoginStepDef.user_access_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a \"storeManager\" log in",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackG18.stepDesfs.LoginStepDef.as_a_log_in(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user access \"Dashboard\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackG18.stepDesfs.LoginStepDef.user_access_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});