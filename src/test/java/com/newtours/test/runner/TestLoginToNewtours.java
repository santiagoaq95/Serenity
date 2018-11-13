package com.newtours.test.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = "resources/feature/login", tags = "@Login", glue = "com/newtours/stepdefinition", plugin = {
		"pretty", "html:target/reports-cucumber" }, monochrome = true)
public class TestLoginToNewtours {

}
