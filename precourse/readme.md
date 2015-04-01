# gSchool Precourse Curriculum

__Goal: to get you ready to jump into our curriculum on day 1.__

Please read this entire document before getting started.

Before class begins, you are expected to complete and submit the code assignment as described below.

## Your Assignment

Build a simple website with some constraints. There will be an assessment on your understanding of the code you produce, so do not copy code from other's work.

We'll use these websites as a way to get to know each other on the first day, so let your personality shine and have fun with it. Good luck!

## Getting Started

1. [Install git](https://help.github.com/articles/set-up-git) on your computer
if you haven't already
1. Fork this repository (go to https://github.com/gschool/precourse and click "Fork")
1. Clone your forked repository onto your computer: `git clone https://github.com/<your username>/precourse`
1. Open the `website` folder and write your assignment code there.

For more information on how to use git, check out [this interactive tutorial](https://try.github.io/levels/1/challenges/1). You may also want to read [Atlassian's awesome git tutorial.](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init)

### Two Pages
The website should have two pages linked with anchor tags. One page should describe where you come from and who you are (hometown, favorites, siblings, hobbies, etc.). The second page should describe where you're going in life and who you will become (career goals, gSchool goals, hopes, dreams, etc).

Example content for page one:

> Hi there! My name is Zelda. I was born into royalty and spend my nights and weekends battling evil. My closest friend is Link. Together we will rule the world.

> Here is a picture of us fighting Gannon. [insert photo]

Example content for page two:

> I'm excited to start gSchool and learn about web technologies like javascript and html. I've always been fascinated by the web's ability to bring people together. After gSchool, I would love to work for a social network like Ello or OKCupid.

You should do your own research on how to get a simple website going, but here is a [good starting place](http://learn.shayhowe.com/html-css/building-your-first-web-page/).

### Custom CSS
The site's HTML should include an external, linked stylesheet with custom CSS. The design you come up with should represent your personality. Colors, borders, layout, fonts, sizes, etc. is up to you!

Note that the CSS should be linked to from a separate CSS file. For more information on how to do this, refer to [this article on the subject](http://matthewjamestaylor.com/blog/adding-css-to-html-with-link-embed-inline-and-import).

### Use jQuery
The site should use jQuery to change something on the page when a user clicks a button. The button can say or do anything, but it must be handled using jQuery.

You can learn more [about jQuery online](http://try.jquery.com/).

### GIF
Somewhere on the website, you should include a GIF that illustrates how you feel about starting your new career in programming.

Don't use this one, but [here is an example GIF](http://hellometa.com/slides/refresh/img/eco.gif).

### Valid Markup
All markup must be valid through the W3C validator.

To validate your website, visit [the validator](http://validator.w3.org/#validate_by_upload), click "Choose file", upload your HTML file, and click "Check". You should validate each HTML file in your website.

The validator will provide a list of warnings and errors. It's okay if your website has warnings, but there should be *no* errors when you are done with your site.

## How to hand-in/submit the assignments.
When finished, submit your website with a git [pull request](https://help.github.com/articles/using-pull-requests). Here are step by step instructions of how to do this:

1. Make sure you are in the root directory.
1. Add your changes to the repository: `git add -A`
1. Commit your changes: `git commit -m "My solutions to precourse work"`
1. Push your changes to your fork: `git push origin master`
1. Make a pull request by going to `https://github.com/<your username>/precourse` and clicking "Pull Requests" and then "New Pull Request"

For more information on how to use git, check out [this interactive tutorial](https://try.github.io/levels/1/challenges/1). You may also want to read [Atlassian's awesome git tutorial.](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init)

#### Common git issues

2. If you try to push and see "Repository does not exist" this probably means that you cloned from the gSchool repo rather than your fork. Make sure you followed directions under "getting started" (at the top of this Readme) and created a fork. Then run this command to push: `git push https://github.com/<your username>/precourse master`

## Getting help
Feel free to reach out for help on [your cohort's Slack channel](https://gschool.slack.com/messages/g8_boulder/).
