const Generator = require("yeoman-generator")

const ScaffoldingData = (answers) => ({
  React: {
    dependencies: [
      //HTTP requests
      "axios",
      //Lots of general use functions
      "lodash",
      //Building/parsing URLs
      "query-string",
      //Generating random strings from RegExes
      "randexp",
      //React
      "react",
      "react-dom",
      //Client side routing
      "react-router",
      //Animations for React
      "react-spring",
      //CSS in JS
      "styled-components",
      //SASS helper functions ported to JS
      "polished"
    ],
    devDependencies: [
      /* Babel */
      "@babel/core",
      "@babel/preset-env",
      "@babel/plugin-transform-modules-commonjs",
      "@babel/plugin-transform-typescript",
      "@babel/preset-react",
      
      /* Typescript Support */
      "typescript",
      "@types/node",
      "@types/lodash",
      "@types/react",
      "@types/react-dom",
      "@types/react-router",
      "@types/react-router-dom",
      "@types/styled-components",
      
      /* Webpack - Build tool */
      "webpack",
      "webpack-cli",
      //Analyzing what modules compose which bundles
      "webpack-bundle-analyzer",
      //Development Server
      "webpack-dev-server",
      //Alerts missing packages
      "@nenado/watch-missing-node-modules-plugin",
      //Babel transpilation
      "babel-loader",
      //Preserves styled components names
      "babel-plugin-styled-components",
      //Forces case sensitivity (to avoid Windows/Unix filesystem incompatibilities)
      "case-sensitive-paths-webpack-plugin",
      //Tracks circular dependencies among modules
      "circular-dependency-plugin",
      //Compresses static assets
      "compression-webpack-plugin",
      //Enables importing CSS files
      "css-loader",
      //Includes ESLint within webpack workflow
      "eslint-webpack-plugin",
      //Parallelizes Typescript type checking
      "fork-ts-checker-webpack-plugin",
      //HTML files generation
      "html-webpack-plugin",
      //Enables importing CSS files
      "style-loader",
      //Typescript compilation
      "ts-loader",
      //Fix to preserve styled components names while using typescript
      "typescript-plugin-styled-components",

      /* ESLint */
      "eslint",
      "eslint-plugin-react",
      "eslint-plugin-react-hooks",
      "@typescript-eslint/eslint-plugin",
      "@typescript-eslint/parser",
      "eslint-plugin-cypress",

      /* Cypress */
      answers.useCypress ? "cypress" : false,

      /* Other */
      //Loads environment variables from .env
      "dotenv",
      //Tool to audit modules dependencies on one another
      "dependency-cruiser",
      //Documentation generation for typescript
      "typedoc",
      //Helper to wait for development server
      //to "come online" for CI pipelines
      answers.useCypress ? "wait-on" : false,
    ].filter(entry => entry)
  },
  Node: {
    dependencies: [
      "lodash",
      "joi"
    ],
    devDependencies: [
      "typescript",
      "@types/node",
      "@types/lodash",
      "@types/jest",
      "eslint",
      "@typescript-eslint/eslint-plugin",
      "@typescript-eslint/parser",
      "dependency-cruiser",
      "jest",
      "ts-jest",
    ]
  },
  "Frontend Interview": {
    dependencies: [
      //HTTP requests
      "axios",
      //Lots of general use functions
      "lodash",
      //Building/parsing URLs
      "query-string",
      //Generating random strings from RegExes
      "randexp",
      //React
      "react",
      "react-dom",
      //Client side routing
      "react-router",
      //Animations for React
      "react-spring",
      //CSS in JS
      "styled-components",
      //SASS helper functions ported to JS
      "polished",
      //Charts
      "chart.js",
      //Dates
      "dayjs",
      //Internationalization
      "i18next",
      "react-i18next"
    ],
    devDependencies: [
      /* Babel */
      "@babel/core",
      "@babel/preset-env",
      "@babel/plugin-transform-modules-commonjs",
      "@babel/plugin-transform-typescript",
      "@babel/preset-react",
      
      /* Typescript Support */
      "typescript",
      "@types/node",
      "@types/lodash",
      "@types/react",
      "@types/react-dom",
      "@types/react-router",
      "@types/react-router-dom",
      "@types/styled-components",
      "@types/jest",
      
      /* Webpack - Build tool */
      "webpack",
      "webpack-cli",
      //Analyzing what modules compose which bundles
      "webpack-bundle-analyzer",
      //Development Server
      "webpack-dev-server",
      //Alerts missing packages
      "@nenado/watch-missing-node-modules-plugin",
      //Babel transpilation
      "babel-loader",
      //Preserves styled components names
      "babel-plugin-styled-components",
      //Forces case sensitivity (to avoid Windows/Unix filesystem incompatibilities)
      "case-sensitive-paths-webpack-plugin",
      //Tracks circular dependencies among modules
      "circular-dependency-plugin",
      //Compresses static assets
      "compression-webpack-plugin",
      //Enables importing CSS files
      "css-loader",
      //Includes ESLint within webpack workflow
      "eslint-webpack-plugin",
      //Parallelizes Typescript type checking
      "fork-ts-checker-webpack-plugin",
      //HTML files generation
      "html-webpack-plugin",
      //Enables importing CSS files
      "style-loader",
      //Typescript compilation
      "ts-loader",
      //Fix to preserve styled components names while using typescript
      "typescript-plugin-styled-components",

      /* ESLint */
      "eslint",
      "eslint-plugin-react",
      "eslint-plugin-react-hooks",
      "@typescript-eslint/eslint-plugin",
      "@typescript-eslint/parser",
      "eslint-plugin-cypress",

      /* Cypress */
      answers.useCypress ? "cypress" : false,

      /* Unit Testing */
      "jest",
      "ts-jest",
      "@testing-library/jest-dom",
      "@testing-library/react",

      /* Other */
      //Loads environment variables from .env
      "dotenv",
      //Tool to audit modules dependencies on one another
      "dependency-cruiser",
      //Documentation generation for typescript
      "typedoc",
      //Helper to wait for development server
      //to "come online" for CI pipelines
      answers.useCypress ? "wait-on" : false,
    ].filter(entry => entry)
  },
  "Backend Interview": {
    dependencies: [
      "lodash",
      "Joi",
      "typeorm",
      "reflect-metadata",
      "axios",
      "big.js",
      "compression",
      "cors",
      "dotenv",
      "express",
      "mysql2",
      "randexp",
      "uuid"
    ],
    devDependencies: [
      /* Typescript Support */
      "typescript",
      "@types/node",
      "@types/jest",
      "@types/big.js",
      "@types/cors",
      "@types/express",
      "@types/uuid",

      "eslint",
      "@typescript-eslint/eslint-plugin",
      "@typescript-eslint/parser",
      "dependency-cruiser",
      "jest",
      "ts-jest",
      "nodemon"
    ]
  }
}[answers.projectType]);

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
  }

  initializing() {
    if(this.fs.exists(this.destinationPath("package.json"))) {
      this.env.error("There cannot be an existing \"package.json\"! (Let the generator handle it!)")
      return
    }
 }

 async prompting() {
   try {
      this.answers = await this.prompt([
      {
        type: "list",
        name: "projectType",
        message: "What is the project type?",
        choices: [
          "React",
          "Node",
          "Frontend Interview",
          "Backend Interview"
        ]
      },
      {
        when: answers => answers.projectType === "React" || 
                         answers.projectType === "Frontend Interview",
        type: "confirm",
        name: "useCypress",
        message: "Do you want to use Cypress?"
      }
     ])
   }
   catch(error) {
      this.log("This should't be happening! Contact maintainers.")
   }
 }

  writing() {
    this.fs.copy(this.templatePath(`${this.answers.projectType}/**`),
                 this.destinationRoot(),
                 { globOptions: {dot: true}})
  }

  install() {
    const dependencies = ScaffoldingData(this.answers).dependencies;
    const devDependencies = ScaffoldingData(this.answers).devDependencies;
    this.spawnCommandSync("npm", ["install", ...dependencies, "--legacy-peer-deps"]);
    this.spawnCommandSync("npm", ["install", ...devDependencies, "--legacy-peer-deps", "--save-dev"]);
  }
}