package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import pages.locators.ElectronicsPageLocators;
import utils.SeleniumDriver;

public class ElectronicsPageActions {
    ElectronicsPageLocators electronicsPageLocators = null;
    public ElectronicsPageActions(){
        this.electronicsPageLocators = new ElectronicsPageLocators();
        PageFactory.initElements(SeleniumDriver.getDriver(), electronicsPageLocators);
    }


    public void clickOnSamsung(){
        electronicsPageLocators.clickSumsung.click();
    }


    public void setValueFrom(String setFrom, String setTo){
        electronicsPageLocators.setValueFrom.sendKeys(setFrom);
        electronicsPageLocators.setValueTo.sendKeys(setTo);
    }
}
