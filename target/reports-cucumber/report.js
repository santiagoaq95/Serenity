$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/feature/login/NewtoursLoginPagefeature.feature");
formatter.feature({
  "name": "Newtours Login Functionality Feature",
  "description": "  In order to ensure Login Functionality works,\n  I want to run the cucumber test to verify it is working",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I open Login Newtours",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginToNewtoursStepDefinition.i_open_Login_Newtours()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to Newtours",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@LoginPass"
    }
  ]
});
formatter.step({
  "name": "Enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "santiago8112",
        "santi112"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginToNewtoursStepDefinition.enter_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do click on button sign in",
  "keyword": "And "
});
formatter.match({
  "location": "LoginToNewtoursStepDefinition.i_do_click_on_button_sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate tag SING-OFF",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginToNewtoursStepDefinition.i_validate_tag_SING_OFF()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginToNewtoursStepDefinition.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I open Login Newtours",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginToNewtoursStepDefinition.i_open_Login_Newtours()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to Newtours Fail",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LoginFail"
    }
  ]
});
formatter.step({
  "name": "Enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Sophos",
        "admin"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginToNewtoursStepDefinition.enter_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do click on button sign in",
  "keyword": "And "
});
formatter.match({
  "location": "LoginToNewtoursStepDefinition.i_do_click_on_button_sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate tag SING-OFF",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginToNewtoursStepDefinition.i_validate_tag_SING_OFF()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Element should be visible\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.failWithMessage(WebElementFacadeImpl.java:849)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.shouldBeVisible(WebElementFacadeImpl.java:447)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy24.shouldBeVisible(Unknown Source)\r\n\tat com.newtours.pages.LoginNewtoursPage.shouldBeSIGN_OFFVisible(LoginNewtoursPage.java:39)\r\n\tat com.newtours.steps.LoginToNewtoursSteps.isSING_OFFOnScreen(LoginToNewtoursSteps.java:31)\r\n\tat com.newtours.steps.LoginToNewtoursSteps$$EnhancerByCGLIB$$2ac2910b.CGLIB$isSING_OFFOnScreen$2(\u003cgenerated\u003e)\r\n\tat com.newtours.steps.LoginToNewtoursSteps$$EnhancerByCGLIB$$2ac2910b$$FastClassByCGLIB$$ab6883d9.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:449)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:434)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:409)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:150)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:137)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat com.newtours.steps.LoginToNewtoursSteps$$EnhancerByCGLIB$$2ac2910b.isSING_OFFOnScreen(\u003cgenerated\u003e)\r\n\tat com.newtours.stepdefinition.LoginToNewtoursStepDefinition.i_validate_tag_SING_OFF(LoginToNewtoursStepDefinition.java:45)\r\n\tat ✽.I validate tag SING-OFF(resources/feature/login/NewtoursLoginPagefeature.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginToNewtoursStepDefinition.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});