package com.newtours.pages;

import org.openqa.selenium.support.FindBy;

import com.newtours.ui.UI;

import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;
import net.thucydides.core.pages.PageObject;

@DefaultUrl("http://newtours.demoaut.com/")
public class LoginNewtoursPage extends PageObject {

	@FindBy(name = UI.USERNAME_BY_NAME)
	WebElementFacade usernameTextBox;

	@FindBy(name = UI.PASSWORD_BY_NAME)
	WebElementFacade passwordTextBox;

	@FindBy(xpath = UI.LOGIN_BUTTON_BY_XPATH)
	WebElementFacade loginButton;

	@FindBy(xpath = UI.SING_OFF_XPATH)
	WebElementFacade sing_off;

	public void loginToNewtours(String username, String password) {

		typeInto(usernameTextBox, username);
		typeInto(passwordTextBox, password);

	}

	public void clickLoginButton() {

		clickOn(loginButton);
	}

	public void shouldBeSIGN_OFFVisible() {
		sing_off.shouldBeVisible();
	}

}
