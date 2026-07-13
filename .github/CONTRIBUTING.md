# Contributing to frame-and-sample

[code-of-conduct]: CODE_OF_CONDUCT.md
[security-policy]: SECURITY.md
[license]: https://github.com/Racerx323/frame-and-sample/blob/main/LICENSE.md
[new-issue]: https://github.com/Racerx323/frame-and-sample/issues/new/choose
[pull-requests]: https://github.com/Racerx323/frame-and-sample/pulls
[style-guide]: https://google.github.io/styleguide/

First off, thank you for considering contributing to `frame-and-sample`. It's people like you that make this project a great tool. Your help is essential to keeping it active and improving it continuously.

⚠️ **Note**: This project is maintained in my spare time, so your patience and understanding are greatly appreciated.

## Community Standards

We value respectful, inclusive, and constructive communication. All contributors are expected to follow our [Contributor Code of Conduct][code-of-conduct]. By participating, you agree to abide by these guidelines to help us maintain a welcoming and supportive environment.

## How Can I Contribute?

There are many ways to contribute, from writing documentation to improving templates and reporting issues. Every contribution is welcome and appreciated.

- **Reporting Bugs**: If you find a bug, please report it by [opening an issue][new-issue].
- **Suggesting Enhancements**: Have an idea for a new feature or an improvement? [Open an issue][new-issue] to discuss it.
- **Pull Requests**: If you're ready to contribute content or structure improvements, you can open a [pull request][pull-requests].
- **Answering Questions**: You can help other users by looking through existing issues and offering your help.
- **Documentation Cleanup**: Know a clearer way to explain a workflow? Make a suggestion.

If you're unsure about your idea, feel free to [Open an issue][new-issue] first and discuss it.

Please choose the most appropriate issue template when opening a new issue (bug report, feature request, documentation issue, or question).

## Getting Started

To set up the project locally for contribution:

1. **Fork** this repository to your GitHub account.
2. **Clone** your fork locally:

    ```bash
    git clone https://github.com/your-username/frame-and-sample.git
    ```

3. **Navigate** into the project directory:

    ```bash
    cd frame-and-sample
    ```

4. **Create** a branch for your change.
5. **Edit** the relevant docs, templates, or structure files.

Encountering issues? Please [open an issue][new-issue] with details.

## Content Placement Rules

- Ecosystem-specific configs, scripts, and workflows belong in `ecosystems/<name>/`.
- Device and signal-path setup belongs in `hardware/`.
- Shared concepts belong in `docs/`.
- New guide formats should follow `templates/`.

## Documentation Standards

- Keep steps deterministic and testable.
- Explain rationale for frame rate and sample rate decisions.
- Include validation and troubleshooting sections.
- Prefer links to existing docs over duplicated text.

## Before Submitting a PR

To maximize the likelihood of acceptance, please:

- Follow existing style guidelines and conventions.
- Keep your pull requests focused and concise.
- Validate links and navigation paths affected by your changes.
- Update documentation accordingly.

Work-in-progress (WIP) pull requests are also acceptable. Please indicate clearly in the PR title or description that it's a WIP.

## Submitting a Pull Request

Pull Requests (PRs) are very welcome. If you're planning a large or significant change, please [open an issue][new-issue] first to discuss your proposal.

### Steps for submitting a PR

1. Fork this repository to your GitHub account. Ensure your local repository is up-to-date.
2. Create a new branch from `main` with a descriptive name:

    ```bash
    git checkout -b descriptive-branch-name
    ```

3. Make your changes, keeping your commits clear and organized.
4. Follow existing style guidelines and conventions. [Google style guides][style-guide] are used for this project.
5. Keep markdown formatting and link style consistent with existing files.
6. Review your changes and verify links.
7. Update documentation accordingly.
8. Commit your change using clear and concise commit messages.
9. Push your branch to your fork:

    ```bash
    git push -u origin descriptive-branch-name
    ```

10. Open a pull request on the GitHub repository against the `main` branch and provide a detailed description of your changes.

## Security Vulnerability Reporting

Your security is a top priority. If you discover a security vulnerability, please **do not** open a public issue. Instead, please follow the instructions in our [Security Policy][security-policy].

## License Agreement

This project is licensed under the GPL-3.0 License. By contributing, you agree that your contributions will be licensed under its terms. You can find the full license text in the [LICENSE][license] file.

## Resources

- [Git Cheat Sheets](https://training.github.com/)
- [Using Pull Requests](https://docs.github.com/articles/about-pull-requests/)
- [GitHub Help](https://docs.github.com/)
