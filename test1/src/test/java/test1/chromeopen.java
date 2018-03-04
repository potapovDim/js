package test1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

import static org.junit.Assert.*;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class chromeopen {

    @Test
    public void WebDriver(){
        ChromeDriver _driver = new ChromeDriver();
        _driver.navigate().to("http://localhost:5555");
        WebElement submitFilter = _driver.findElement(By.cssSelector(".btn.btn-default"));
        WebElement inputFilter = _driver.findElement(By.cssSelector("[placeholder=\"марка\"]"));
        List<WebElement> tableMarksBefore = _driver.findElements(By.cssSelector(".active.brand"));

        assertEquals(79, tableMarksBefore.size());

        inputFilter.sendKeys("ITALMIX");
        submitFilter.click();

        List<WebElement> tableMarksAfter = _driver.findElements(By.cssSelector(".active.brand"));
        assertEquals(13, tableMarksAfter.size());

        WebDriverWait waiter = new WebDriverWait(_driver, 15000);
        inputFilter.clear();
        submitFilter.click();

        _driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        submitFilter.click();

        List<WebElement> tableMarksAfterClear = _driver.findElements(By.cssSelector(".active.brand"));
        assertEquals(79, tableMarksAfterClear.size());

        _driver.close();
    }
}
