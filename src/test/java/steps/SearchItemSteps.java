package steps;


import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pages.actions.ElectronicsPageActions;
import pages.actions.HomePageActions;
import utils.SeleniumDriver;

import java.util.List;

public class SearchItemSteps {

    //below are objects of pages for accessing the methods in them
    HomePageActions homePageActions = new HomePageActions();
    ElectronicsPageActions electronicsPageActions = new ElectronicsPageActions();

    @Given("^I am on the Home Page \"([^\"]*)\" of our site$")
    public void i_am_on_the_Home_Page_of_our_site(String websiteURL) {
        SeleniumDriver.openPage(websiteURL);
    }

    @When("^I move to the menu$")
    public void i_move_to_the_menu(List<String> list) {
        // List<String> list - this is a list of our Menu options from feature file
        String menu = list.get(1);
        System.out.println(menu);

        homePageActions.moveToElectronicsMenu();
    }

    @And("^click on \"([^\"]*)\" link$")
    public void click_on_link(String arg1)  {
        homePageActions.clickOnCameraDronesMenu();
    }

    @And("^user clicks on \"([^\"]*)\" link$")
    public void userClicksOnLink(String arg0) throws Throwable {
        homePageActions.clickOnAdvancedSearching();
    }

    @Then("^I should get title of the page as \"([^\"]*)\"$")
    public void iShouldGetTitleOfThePageAs(String expectedResult) throws Throwable {
        String actualResult = SeleniumDriver.getDriver().getTitle();
        System.out.println("actualResult " + actualResult);
        System.out.println("expectedResult " + expectedResult);
        Assert.assertEquals(actualResult, expectedResult);
    }

    @Then("^I should go to main page \"([^\"]*)\"$")
    public void iShouldGoToMainPage(String arg0) throws Throwable {
        homePageActions.moveToHomePage();
    }

    @Then("^I should go to the page as \"([^\"]*)\"$")
    public void iWantToFollowThePageAs(String arg0)  {
        electronicsPageActions.clickOnSamsung();
    }

    @Then("^I should set value \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iShouldSetValueAnd(String setFrom, String setTo) throws Throwable {
        electronicsPageActions.setValueFrom(setFrom, setTo);
    }
}
