# Boilerplating this Project

Scaffolding out a Node.js project's boilerplate can be relatively straightforward. For this project, I ran the following commands to get started:

- `npm init`
  - Begins an npm initalization tool that builds a default `package.json` for you.
  - I've personally added some config settings in my root `.npmrc` config file that allows me to run `npm init -y` and have all my personal preferences scaffolded out.
- `git init`
  - Initialize the project as a git repository
  - I've grown up using GitHub so git is a natural source control tool for me, but you can really use whatever you're comfortable with/whatever works for your projects.
- `npx gitignore node`
  - This will pull the Node.js `.gitignore` that's maintained by GitHub. Also works for any other named `.gitignore`.
- `npx covgen tierney.cyren@microsoft.com`
  - This scaffolds out a Code of Conduct (sepcifically, the [Contributor Covenant](https://www.contributor-covenant.org/)) for my project, which I already know I'm comfortable actively enforcing.
- `npx license mit > LICENSE`
  - This will spit out the text of the MIT license into my terminal, and uses an output redirection operator that puts that text into the LICENSE file.
  - I've found that some companies, including major tech companies like Google, block their employees from contributing to projects that don't have an explicit license file defined in a project. Best to lower that barrier up front.

## As Code

Here's the commands I've used to scaffold out this project without all the context that's included above:

```bash
npm init
git init
npx gitignore node
npx covgen <your email address here>
npx license mit > LICENSE
```