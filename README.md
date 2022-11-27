<h3 align="center"> WorkMotion-Cypress-Assessment</h3>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Repo</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE Repo -->
## About The Repo

This Repo creating for QA assessment with the following:

Login for applying some E2E testcases using javascript preferred to be done using cypress framework.

Pre-condition: 

As you already logged in as HR manager, so you’ll be able to add new employee.

Test Steps:
1. Add new Talent > Create new
2. Select WorkGlobal 
3. Fill all the onboarding steps
4. Open talents page
5. Make sure the talent has been added as onboarding status

Test date:

1. URL: https://beta.workmotion.com/login
2. Username: aliaa+qahrmanager@workmotion.com
3. Password: Test1234

Use the `README.md` to get started.

### Built With

* [![Node][Node.js]][Node-url]
* [![Cypress][Cypress.io]][Cypress-url]


<!-- GETTING STARTED -->
## Getting Started

First, make sure you have all the [system requirements](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements).

### Prerequisites

Download the [Node.JS](https://nodejs.org/en/download/) source code or a pre-built installer for your platform, and start developing today.
* Install npm packages
   ```sh
   npm install
   
### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Navigate to the Repo URL at [GitHub](https://github.com/ahmed-madyan/workmotion-cypress-assessment)
2. Clone the repo
   ```sh
   git clone
   ```
3. Make sure that you have already run npm init or have a node_modules folder or package.json file in the root of your project 
to ensure cypress is installed in the correct directory, if not initialize npm node_modules folder using the following command:
   ```sh
   npm -i init
   ```
4. Install Cypress via npm if needed
   
   Change the current working directory to the project path
   ```sh
   cd /your/project/path
   ```
   Install
   ```sh
   npm install cypress --save-dev
   ```
4. Open Cypress test runner:
   The long way with the full path
   ```sh
   ./node_modules/.bin/cypress open
   ```
   Or with the shortcut using npm bin
   ```sh
   $(npm bin)/cypress open
   ```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/Feature`)
3. Commit your Changes (`git commit -m 'Add Feature'`)
4. Push to the Branch (`git push origin feature/Feature`)
5. Open a Pull Request

<!-- CONTACT -->
## Contact

* [Gmail](mailto:ahmed.madyan01@gmail.com)
* [LinkedIn](https://www.linkedin.com/in/ahmed-madyan/)
* [GitHub](https://github.com/ahmed-madyan)


<!-- MARKDOWN LINKS & IMAGES -->
[Node-url]: https://nodejs.org/
[Node.js]: https://nodejs.org/static/images/logo.svg
[Cypress.io]: https://upload.wikimedia.org/wikipedia/commons/6/6d/CyPress_logo.svg
[Cypress-url]: https://www.cypress.io/
