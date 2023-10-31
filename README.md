My personal github portfolio in a terminal style
=======

My portfolio requires the `yarn` package manager. You can install `yarn` [here](https://classic.yarnpkg.com/lang/en/docs/install/).

Install dependencies and start developing:

```bash
yarn install && yarn dev
```

Start editing `config.json` and try saving and see the updated changes!

## 📄 Configuration

### Basic Configuration

90% of My portfolio's configurations are done through the `config.json` file.

```javascript
{
  "readmeUrl": // create a Github README and link it here!
  "title": // title of the website
  "name": // your name, included in 'about' command
  "ascii": // ascii art to display
  "social": {
    "github": // your handle
    "linkedin": // your handle
  },
  "email": // your email
  "ps1_hostname": "liveterm" // hostname in prompt
  "ps1_username": "visitor", // username in prompt
  "resume_url": "../resume.pdf", // path to your resume
  "non_terminal_url": "W",
  "colors": {
    "light": {
      ...
    },
    "dark": {
      ... // you can use existing templates in themes.json or use your own!
    }
  }
}
```

### Themes

You can find several pre-configured themes in `themes.json`, and you can replace the colors in `config.json` with the theme color you like! The themes are based on the themes on [this website](https://glitchbone.github.io/vscode-base16-term/#/).

### Banner

You may want to change the output of the `banner` command. To do that, simply paste your generated banner in `src/utils/bin/commands.ts`. I used this [website](https://manytools.org/hacker-tools/ascii-banner/) to generate my banner.

### Advanced Configuration

If you want to further customize your page, feel free to change the source code to your liking!
