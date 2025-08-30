---
title: "Oromico"
date: 2023-06-12
description: "Retrospectives on Oromico, a startup where I was co-founder of."
---

Between 2017 to 2021, I was a co-founder of a local startup called Oromico which specialised in consolidating finances for high-net worth tax reporting, an area which I had absolutely no expertise in, but more on that in a little bit.

[Our angel investor](https://www.linkedin.com/in/hoong-shen-wong-9a38b817/) in Homekoala, was an Executive Director at UBS, focusing on Wealth Management for client tax reporting. He saw an opportunity within the FinTech space to tackle this as a problem and roped in my co-founders to work on his idea. He suggested this was a neglected FinTech segment with massive potential for digitisation and disruption. 

If you’re still confused by the initial product direction, think [TurboTax](https://turbotax.intuit.com/), but for rich people.

I am writing this retrospectively in June 2023, approximately six years after 2017. While this venture was much more successful than my previous one, I feel like we made some new mistakes, such as:

1. Underestimating the ambiguity of the tax reporting FinTech space
2. Overestimating the willingness of individuals and corporates to share financial data

### What are the specifications?

> *"How can we facilitate the process for high-net-worth individuals to accurately report their tax responsibilities, considering their extensive and dispersed assets?*

It was sometime in February or March 2017 when we were first approached with this problem statement. The details are a little foggy, but I remember having little time to develop a minimum viable product to onboard clients before the tax reporting window closed sometime in May or June. As a result, we immediately got to work figuring out the product specifications.

One of the first things I tried to work on was an early-stage prototype focusing on:

1. Enable the import of financial documents easily
2. Ensure that all the heavy lifting with our algorithm is transparent to the user
3. Export the cleansed data in a digestible format into a report

### The first cut

Our initial targets were:

1. High-net-worth individuals
2. Tax accountants

Determined to avoid repeating the same mistakes that doomed my previous venture, I created scrappy but functional enough designs to get the product out to market as fast as possible. 

### Sitting duck

Unfortunately, with minimal time to production, tax reporting season came and went by before we could onboard a single client. We now had a year to try again in 2018. The question, though, was — what now? 

### If you don’t try, the answer is always “no”.

At the core of Oromico’s capabilities sat an incredibly robust logic engine that could analyse unstructured data within documents. We then realised that this same engine could be applied to different product verticals with similar pain points.

This was also when I decided to develop a design system that could cater to the different product verticals, as I found the capabilities of Material UI severely lacking. As of 2023, I do not recommend Material UI to anyone. It feels like Google has neglected Material over the last few years, and the latest version for the web, [m3.material.io](https://m3.material.io/develop/web), has been in development since Google I/O 2022.


### Vertical one - Wealth Telescope

The Wealth Telescope app, available on both web and mobile platforms, aims to help individuals understand their finances comprehensively. Initially, we launched a version for individuals that presented investment-related data, such as money-weighted returns and asset allocations. In the long run, our goal was to provide automated and personalised wealth advisory services to the mass affluent, who may have yet to be able to afford such services.


**Wealth Telescope - Investment version**

![A very early-stage prototype designed by me for Oromico back in 2017.](/assets/images/retrospectives/oromico/00_chart_default.png)

A very early-stage prototype designed by me for Oromico back in 2017.

**Wealth Telescope - Personal version**

![A very early-stage prototype designed by me for Oromico back in 2017.](/assets/images/retrospectives/oromico/01_full_mockup.png)

We also attempted to tackle the personal finance space. Having spoken to our friends and connections, we realised that married couples typically face a series of common issues, having no easy way to answer questions such as: 

- Joint expenses as a married couple
- Discretionary expenses
- Expenses spent on children
- Total interest from our savings account thus far


{% image "/assets/images/retrospectives/oromico/02_illustration.webp",
   "An illustration that was meant for marketing the personal version of Wealth Telescope",
   null, "lazy", "text-center" %}

The premise of the personal version was straightforward:

1. Upload your eStatement(s) into your account.
2. Our machines automatically organises and categorises your transactions
3. A consolidated view of your finances is available under your personal “Wealth Telescope” once the processing is completed.

![An example of the actual interest I’ve received over the years across all my bank accounts.](/assets/images/retrospectives/oromico/03_wealth_org.webp)


This is an example of the actual interest I’ve received over the years across all my bank accounts Within half a year, we realised that this concept would not work, despite its technological promise.

**Why did this fail?**
People were just not comfortable with having to:
1. Download their financial documents
2. Upload it into a platform


### Vertical two - Invoice organizer

We then pivoted to the SME space, as we realised we could allow the automation of triple matching of trade documents with our solution. I have masked parts of the screenshots below for user anonymity. 

The premise of Invoice Organizer was similar to the personal version

1. Upload your trade documents into your account.
2. Our machines automatically organises and categorises your transactions
3. Vital information is then captured from your documents to speed up the process of triple matching.

![An example of the UI I built using the new design system](/assets/images/retrospectives/oromico/04_invoice_org.png)

An example of the UI I built using the new design system

![Users would also be able to edit captured information or add their data](/assets/images/retrospectives/oromico/05_invoice_org.png)

Users would also be able to edit captured information or add their data

### Let's sit down and talk.
We would visit the offices of potential clients, talk to them to understand their pain points and then iterate upon our solution to ensure that it resolved their concerns. Compared to the attempt at cracking the high-net-worth individual market segment, this product afforded much greater access to the end user. 

### Belief
Eventually, we found some footing, and the Monetary Association of Singapore (MAS) even nominated us at the [2019](https://www.mas.gov.sg/-/media/MAS/News/Media-Releases/2019/Annex---Finalists-of-the-2019-FinTech-Awards.pdf) and [2020](https://fintechnews.sg/44892/fintech/meet-the-40-solutions-shorlisted-for-the-2020-mas-fintech-awards/) FinTech Awards! 

One of my proudest moments from FinTech Festival 2019 was when a potential investor challenged us, claiming that he had not seen any solution in our problem area that worked. Without hesitation, we invited him to test our product on the spot, and we surprised him with the speed and accuracy of our results. It was a significant victory for us, especially when he admitted that a better-funded startup just a few booths away failed to deliver on its promises during his test.

Eventually we even secured a pilot with a Big four accounting firm and partnered with them to provide our solution to their tax accountants.

## Why was it so complicated?

### Difficulty in obtaining the first set of users
> “High-net-worth individuals had difficulties understanding their finances.”

For reasons evident in hindsight, wealthy people have little interest in accessing a platform like ours. It’s a low-value task and is usually delegated to those who manage their finances on their behalf.

> “Tax consultants needed a better way to consolidate financial data.”

The FinTech sector is also laden with red tapes, making navigation complex for a small unknown company like ours. In addition, those facing daily problems did not make product adoption decisions. We would chase leads and constantly hit brick walls. Again, I was quickly reminded that it was one thing to build a product but another different ball game to drive adoption.

> “Family offices or wealth advisors would need this as a value-add to their services to avoid disruption.”

We chased some leads, but they all turned out cold.

### Privacy and data sensitivity
Due to the nature of the product and the primary client segment of high-net-worth individuals, we had to invest much more effort in data security and client privacy. We had to adhere to strict dos and don’ts, building additional data security safeguards. For this same reason, I have very few screenshots of the investment-based product at Oromico.

![I’ve also helped to research and write a white paper on a proposed security framework for our company based on NIST guidelines.](/assets/images/retrospectives/oromico/06_invoice_org.png)

I’ve also helped to research and write a white paper on a proposed security framework for our company based on NIST guidelines.

### Nature of the industry
A heavily regulated industry naturally presents itself with more inertia and resistance to change. In 2018, we once played a waiting game with a Big four firm for close to four months in anticipation of a partnership that never materialised. Four months could have essentially made or broken a small startup like ours. Never put your eggs in one basket.

## Epilogue
Apart from my daily work as UX Designer, I was also a co-founder of Oromico. This meant taking on additional tasks due to our budget constraints. It was the most demanding period of my career but also one where I grew the most.

In my time at Oromico, I also:

- Picked up software engineering
- Tried out my hand at business development
- Learned how to pitch to investors
- Helped out with hiring
- Became a listening ear to employees
- Managed external contractors

At the end of 2020, and close to a full year of working from home due to COVID-19, yet barely spending much time interacting with my family, I decided to step down as co-founder and leave the company for a career break.