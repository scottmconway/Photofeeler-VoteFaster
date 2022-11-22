# VoteFaster
A simple userscript that allows you to vote via keyboard on [PhotoFeeler](https://www.photofeeler.com/)

## Usage
Using your usercript manager of choice (I recommend [ViolentMonkey](https://violentmonkey.github.io/get-it/)), find the dashboard section that allows you to either install from URL or write a new userscript. If installing from URL, use this URL:
`https://raw.githubusercontent.com/scottmconway/photofeeler-VoteFaster/main/vote_faster.js`

Else, you can copy-paste the userscript into the userscript editor.

When voting under any photo type in PhotoFeeler, the current votable attribute will be highlighted in pink. Pressing and key `0-3` will click the corresponding element, and advance to the next attribute. When all attributes have been voted on, the `Submit Vote` button will be clicked.

At this time, the script doesn't acknowledge if any attributes have been voted on by clicking, so to auto-advance, you'll need to vote with the keyboard for each attribute.
