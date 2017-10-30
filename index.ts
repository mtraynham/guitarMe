import program = require('commander');
import {Answers, prompt} from 'inquirer';
import XRay from 'x-ray';
import * as pkg from './package.json';

const xRay: XRay = XRay();
xRay('http://google.com', 'h3').write();

program
    .name((<any> pkg).name)
    .version((<any> pkg).version)
    .description((<any> pkg).description);

program
    .command('search')
    .alias('s')
    .description('Search for a song')
    .action(() => {
        prompt([
            {
                type : 'input',
                name : 'band',
                message : 'What band are you riffing'
            }
        ])
        .then((answers: Answers) => {
            const url: string = `https://www.ultimate-guitar.com/search.php?search_type=band&order=&value=${answers.band}`;
            xRay(url, 'a.song')
                .then<string>((value: string) => console.log(value));
        });
    });

program.parse(process.argv);