package com.vytrackG18.pages;

import com.vytrackG18.utilities.ConfigurationReader;
import com.vytrackG18.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id="prependedInput")
    public WebElement userName;

    @FindBy(id="prependedInput2")
    public WebElement passwordBox;

    @FindBy(name = "_submit")
    public WebElement submit;


    public void login(String userType) {
        String user ;
        String password;

        if(userType.contains("driver")){
            user= ConfigurationReader.get("driver_username");
            password=ConfigurationReader.get("driver_password");
        }else if(userType.contains("sales_manager")){
            user= ConfigurationReader.get("sales_manager_username");
            password=ConfigurationReader.get("sales_manager_password");
        }else if(userType.contains("store_manager")) {
            user = ConfigurationReader.get("store_manager_username");
            password = ConfigurationReader.get("store_manager_password");
        }else{
            user=null;
            password=null;
        }

        userName.sendKeys(user);
        passwordBox.sendKeys(password);
        submit.click();
    }


}
