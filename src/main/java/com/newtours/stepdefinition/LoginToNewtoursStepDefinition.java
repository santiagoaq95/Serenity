package com.newtours.stepdefinition;

import java.util.List;
import java.util.Map;



import com.newtours.steps.LoginToNewtoursSteps;
import com.newtours.ui.UI;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Managed;
import net.thucydides.core.annotations.Steps;
import net.thucydides.core.webdriver.WebDriverFacade;

public class LoginToNewtoursStepDefinition {

	@Steps
	LoginToNewtoursSteps loginStep;

	@Managed(driver = UI.BROWSER_FIREFOX)
	WebDriverFacade driver;

	@Given("^I open Login Newtours$")
	public void i_open_Login_Newtours() throws Exception {
		loginStep.goToNewtoursLogin();
	}

	@When("^Enter username and password$")
	public void enter_username_and_password(DataTable dataTable) throws Exception {
		List<Map<String, String>> params = dataTable.asMaps(String.class, String.class);
		loginStep.typeUsernameAndPassword(params.get(0).get("username"), params.get(0).get("password"));
	}

	@When("^I do click on button sign in$")
	public void i_do_click_on_button_sign_in() throws Exception {
		loginStep.clickOnLoginButton();
	}

	@Then("^I validate tag SING-OFF$")
	public void i_validate_tag_SING_OFF() throws Exception {
		loginStep.isSING_OFFOnScreen();
	}

	@Then("^Close browser$")
	public void close_browser() throws Exception {
		driver.close();
	}

}
