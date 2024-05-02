# Fun Fact
 npm is everything but not node package manager. It is used to manage Javascript packages but its not node package manager officialy its website doen not contain this name anywhere

# Package.json
package.json file is basically a configuration of npm (basically it stores versions of packages and other useful description)

# Dependencies
-D before package name during installation with npm downloads it as a dev dependency 
A dev dependency is a dependency which is used during develpment phase of our project
non dev dependencies are used during development phase of our project

# Caret and Tilda
caret(^) and tilde(~) are used for upgradation of version of any package caret updgrades minor version and tilde upgrades major version
generally it is safe to use caret as upgrading minor version will be safe but upgrading major version can create mess
for eg we are using version 2.8.3 of a package and someday version 2.8.4 comes so caret will automatically update the package to 2.8.4
and if 3.0.1 comes then it will be upgraded by tilde which is not recommended

# Package.json vs Package.lock.json
difference between package.json and package.lock.json

The Role of package.json:
1. Project Configuration:

package.json serves as a manifest file for Node projects, containing metadata about the project and its dependencies.
It includes information such as the project name, version, entry point, scripts, and dependencies.
2. Dependency Management:

Dependencies are listed in the “dependencies” section, specifying the packages required for the project to run.
Developers can use the npm install command to install dependencies listed in the package.json.
3. Version Management:

Versions of dependencies may be specified with semantic versioning (SemVer) rules in the package.json.
This file is typically committed to version control systems (e.g., Git) to share project configurations.

The Role of package-lock.json:
1. Dependency Locking:

package-lock.json is an auto-generated file that provides a detailed, deterministic record of the dependency tree.
It locks down the specific versions of every installed package, preventing unintended updates.
2. Version Consistency:

This file ensures that every developer working on the project, as well as the CI/CD system, uses the exact same versions of dependencies.
Guarantees consistent builds across different environments, avoiding “it works on my machine” issues.
3. Improved Installation Speed:

package-lock.json optimizes dependency installation by storing a flat node_modules structure, reducing the need for deep dependency resolution during installation.
This results in faster and more reliable installations.


# node_modules
node_modules contain all package code and one package is dependent on each other thats why node modules is lo large every package is dependent on other so basically it is a type of database that contains all information about a package. This dependency of a package on another package is known as transitive dependency

# Git Good practice
when pushing project on github it is not recomended to push node_modules as it is very large in size and with the help of package.json and package.lock.json we can reinstall our node_modules so inside gitignore file do /node_modules it will not push this it on github

# npm
npm is used to install a package but npx is used to execute a package

# CDN links
using react using cdn is not a good practice as cdn links do network call which is costly operation and also we need to check for latest versions of packages so using npm it is preffered to use react

# Import react problem
we can't use react in js file just after installing it from react but we also have to import it in the JS file for using react but if we use import statement a error will be encountered as browser reads it as a normal JS file and normal JS file doesn't have import statements so during importing in HTML file we have to specify type="module" so that broswer will understand that it is not a normal JS file

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement (immediately update webpage after code is updated)
- File Watching Algorithm (written in c++)
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support Old Browsers
- Error Handling
- HTTPs
- Tree Shaking - remove unused code by itself
- different dev pand production bundles

# npx parcel build
npx parcel build index.html will build a folder ready for production and deployment and dist and cache folder is not required to push on github

