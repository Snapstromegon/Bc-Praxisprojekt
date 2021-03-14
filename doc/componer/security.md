# NPM Packages

Since componer is based on [11ty](https://www.11ty.dev/) and all packages get executed only at build time, we can be a little less careful regarding security.

During the first setup of this repo 11ty comes bundled with pug 3.0.1 which allows for RCE. This is an example for a security problem which does not effect this project, since at the time of running this project, the code already has full user level system access.
