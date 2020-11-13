package com.vytrackG18.stepDesfs;

import com.vytrackG18.pages.DashboardPage;
import com.vytrackG18.pages.LoginPage;
import com.vytrackG18.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginStepDef {
    @When("As a {string} log in")
    public void as_a_log_in(String user) {
        LoginPage loginPage= new LoginPage();
        loginPage.login(user);
    }

    @Then("user access {string} page")
    public void user_access_page(String expectedPage) {
        DashboardPage dashboardPage= new DashboardPage();
        dashboardPage.waitUntilLoaderScreenDisappear();
        String actualPage = Driver.get().getTitle();
        System.out.println("actualPage = " + actualPage);
        Assert.assertTrue(actualPage.contains(expectedPage));

    }


}
