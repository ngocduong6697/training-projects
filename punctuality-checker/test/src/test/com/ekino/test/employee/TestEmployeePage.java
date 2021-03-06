package com.ekino.test.employee;

import java.text.ParseException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.ekino.page.dailyPage.DailyPage;
import com.ekino.page.employeePage.EmployeePage;
import com.ekino.page.loginPage.LoginPage;
import com.ekino.test.commonAction.CommonAction;

public class TestEmployeePage {

	@BeforeClass
	public void beforeClass() {
		System.err.println("<===============================START===============================>");
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/driver/chromedriver.exe");
	}

	@AfterClass
	public void afterClass() {
		System.err.println("<===============================END===============================>");

	}

	@BeforeMethod
	public void beforeMethod() {
		System.err.println("<===============================TEST START===============================>");

	}

	@AfterMethod
	public void afterMethod() {
		System.err.println("<===============================TEST END===============================>");
	}

	@Test
	public void testVerifyEmployeePage() throws InterruptedException {
		ChromeOptions options = new CommonAction().setParam();
		WebDriver driver = new ChromeDriver(options);
		new CommonAction().openPage(driver);
		new LoginPage(driver).loginWithEmail();
		Thread.sleep(5000);
		new DailyPage(driver).goToEmployeePage();
		new EmployeePage(driver).verifyEmployeePage();
		driver.quit();
	}

	@Test
	public void testFilterByName() throws ParseException, InterruptedException {
		ChromeOptions options = new CommonAction().setParam();
		WebDriver driver = new ChromeDriver(options);
		new CommonAction().openPage(driver);
		new LoginPage(driver).loginWithEmail();
		Thread.sleep(5000);
		new DailyPage(driver).goToEmployeePage();
		new EmployeePage(driver).filterByName();
		driver.quit();
	}

	@Test
	public void testDeactive() throws ParseException, InterruptedException {
		ChromeOptions options = new CommonAction().setParam();
		WebDriver driver = new ChromeDriver(options);
		new CommonAction().openPage(driver);
		new LoginPage(driver).loginWithEmail();
		Thread.sleep(5000);
		new DailyPage(driver).goToEmployeePage();
		new EmployeePage(driver).Deactive();
		driver.quit();
	}

}
