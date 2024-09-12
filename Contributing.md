# Contributing to this Project

## Branching Strategy

1. `main`: Represents the production-ready state.
2. `develop`: Main development branch.
3. `staging`: Pre-production testing environment.

## Development Workflow

1. All development work happens on the `develop` branch.
2. For larger features, create a feature branch from `develop`.
3. When ready for release:
   a. Create a release branch from `develop`.
   b. Create a PR to merge the release branch into `staging`.
   c. After testing in staging, create a PR to merge `staging` into `main`.

4. Always ensure `develop` is in a working state.
5. Pull and rebase frequently to avoid conflicts.

## Pull Request Process

1. Ensure your code adheres to our style guide.
2. Update the README.md with details of changes if applicable.
3. Increase the version numbers in any examples files and the README.md to the new version that this PR would represent.
4. You may merge the Pull Request once you have the sign-off of two other developers.