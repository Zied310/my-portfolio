// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import photo from '../../assets/photo.jpg';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome to my portfolio! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my Personal portfolio!
Currently residing in Tunisia. I am pursuing my computer science engineering degree in Tunis at Private Higher School of Engineering and Technology (ESPRIT). 
I have always been fascinated towards programming and problem solving. 
Exploring programming has been my passion since elementary school which enabled me to build websites, back-end applications, mobile applications, and also develop some video games.
I am also a Linux enthusiast. This has further led me to explore how Linux works and dive into the intricacies of its kernel and system architecture, 
enabling me to gain a deeper understanding of this powerful open-source operating system. 
As part of my hobbies, I love playing video games, watching anime, and reading mangas, I also like practicing Kayak during summer.
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};



// Banner
export const banner = (args?: string[]): string => {
  return `
  <div style="display:inline-flex;align-items:center;">
  <img style="margin-right:2em;" src=${photo.src} width="180px" />
  ███████╗██╗███████╗██████╗     ███████╗██╗  ██╗██╗██████╗ ██╗
  ╚══███╔╝██║██╔════╝██╔══██╗    ╚══███╔╝██║  ██║██║██╔══██╗██║
    ███╔╝ ██║█████╗  ██║  ██║      ███╔╝ ███████║██║██████╔╝██║
   ███╔╝  ██║██╔══╝  ██║  ██║     ███╔╝  ██╔══██║██║██╔══██╗██║
  ███████╗██║███████╗██████╔╝    ███████╗██║  ██║██║██║  ██║██║
  ╚══════╝╚═╝╚══════╝╚═════╝     ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═╝
  </div>                                                    

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
