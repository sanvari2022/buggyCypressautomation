# Buggytestautomation

# Project Description
  
  Cypress framework with Javascript is used to automate the resource https://buggy.justtestit.org/.
  As  An end user functional flow is used in the generation of scripts. An user visits site, register,login, update profile and votes.
  As an Functional automation tester, i have identified bugs in the error messages, validation messages and site.Idenfied bugs are reported in
  [BugsinBuggytest.docx](https://github.com/svk2021/Cypress-Automation/blob/master/BugsinBuggytest.docx). To View the bugs, please download Word cocument to view all the details of the bugs with screenshots.
  Please open "BugsinBuggytest.docx" for all 5 bugs/issues.
  
# Bugs reported
 
    *. Registrer page, Lastname field validation message displayed - "FirstName is required"
    *. Register page,Password validation error message- not properly trimmed -left trim and right trim
    *. Register page, Password policy - validation error -"password is not long enough:- even though password (test@12)is 6 characters,lower case and special chracters
    *. Vote form ,after voting author details are not displayed
    *. CopyRight symbol showing 2016, it should be current year -2022
    
    
  
  
  
  
  
  # Solution
  
  # PreRequisites
  * node.js: go to https://nodejs.org/en/download/ and install the latest version 
  * git : go to https://git-scm.com/download 
  # Clone project into local directory

  ```
  git clone https://github.com/svk2021/Buggytestautomation.git
  ```
  # Install nodejs and cypress in your local machine
  * install nodejs : go to https://nodejs.org/en/download/ and install
  * Download visual studio code https://code.visualstudio.com/download
  * npm install cypress
  # Run Cypress with Test Runner
  ```
   cd /project folder
   npx cypress open
   <!-- npx cypress open - will open all tests in new Browser, where all tests can be executed by using browsers like Chrome, Electron or Firefox -->
   ```
   [Test Execution Summary][https://github.com/svk2021/Cypress-Automation/blob/master/cypress/screenshots/AwesomeReport.PNG] screenshot can be viewed
  # Run Tests in  Headless mode,execution generates Mocha Awesome Reports
   npx cypress run
   ```
   <!-- npx cypress run  runs all tests in headless mode and it generates Mocha awesome report in the terminal -->
  
   ```

   [Mocha Awesome Report][https://github.com/svk2021/Cypress-Automation/blob/master/cypress/screenshots/AllTestsexeutionsuccess.PNG] can be viewed
  
  # Test Cases Covered
  * registered user only can login
  * Login-valid and Invalid test
  * Register form validation
  * Register form Error validations
  * Register form Password validations
  * Register form password strength validation
  * Registered user can update profile
  * Registered user without updating can save the profile
  * User can visit site ( https://buggy.justtestit.org/) and navigate view Popular make,Popular model,overall Rating
  * Only logged user can vote 
  * Logged in user once voted, vote count is added to the count
  * User can vote for popular make and Popular model

  

  # Generated reports  can be viewed at this location
  https://github.com/svk2021/Cypress-Automation/tree/master/cypress/reports
  
  
  