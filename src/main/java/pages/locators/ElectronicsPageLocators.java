package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ElectronicsPageLocators {


    @FindBy(xpath = "//*[@id=\"destinations_list1\"]/ul/li[2]/a/h3")
    public WebElement clickSumsung;

    @FindBy(xpath = "//span[text()='Samsung']")
    public WebElement selectBrandSamsung;

    @FindBy(how= How.LINK_TEXT, using = "Electronics")
    public WebElement electronicsLink1;

    @FindBy(xpath = "//input[@class='x-textrange__input x-textrange__input--from']")
    public WebElement setValueFrom;

    @FindBy(xpath = "//input[@class='x-textrange__input x-textrange__input--to']")
    public WebElement setValueTo;

}
