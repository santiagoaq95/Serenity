package com.newtours.steps;

import com.newtours.pages.LoginNewtoursPage;

import net.thucydides.core.annotations.Step;

public class LoginToNewtoursSteps {

	private LoginNewtoursPage loginPage;

	@Step
	public void goToNewtoursLogin() {
		loginPage.open();
		loginPage.getDriver().manage().window().maximize();

	}

	@Step
	public void typeUsernameAndPassword(String user, String pass) {
		loginPage.loginToNewtours(user, pass);
	}

	@Step
	public void clickOnLoginButton() {
		loginPage.clickLoginButton();
	}

	@Step
	public void isSING_OFFOnScreen() {

		loginPage.shouldBeSIGN_OFFVisible();

	}

}
