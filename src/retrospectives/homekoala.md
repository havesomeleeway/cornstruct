---
title: "Homekoala"
date: 2023-06-12
description: "My first ever job in a now defunct startup"
---

In 2015, I joined a small, now-defunct startup known as Hutbitat. That was my first foray into digital product design. My two other co-founders came from a technical background, and I didn’t. I was happy to land a job post-graduation and happily settled to work on digital marketing for them. However, shortly after joining the company, I had to wear two hats as I subsequently took on the role of a product designer.


{% image "/assets/images/retrospectives/homekoala/00_news_article.png",
   "An article on the company back in 2015 foreshadowed the inevitable.",
   null, "lazy", "text-center" %}

![Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green grass](/assets/images/retrospectives/homekoala/01_landingpage.png)


Homekoala was the first time I designed a user interface from zero to production. Our limited budget also meant I designed everything from the logo to the icons and other brand elements.

![The first ever user interface that I designed from start to finish, including mobile responsive views](/assets/images/retrospectives/homekoala/02_searchscreen.png)

## Retrospectives
I am writing this retrospectively in June 2023, approximately eight years after 2015. Instead of approaching it as a typical UX case study, I’d like to highlight some of the mistakes I feel we made along the way, namely:

1. Long development cycles & lack of quick iterations
2. Striving for ‘perfection’
3. A lack of resources to tackle a two-sided marketplace

## To rename or not to rename?
When I joined when the company, we decided on a pivot to shift from the Singapore property market and attempted to break into the Australian property market instead. This also meant competing with industry heavyweights with multi-million budgets, such as Real Estate (owned by REA Group) and Domain (owned by Fairfax). 

With this push came a desire to rebrand, assuming an updated brand and user interface would better attract our desired audiences.

{% image "/assets/images/retrospectives/homekoala/03_tisproperty.png",
   "An example of the old interface",
   null, "lazy", "text-center" %}

While we quickly shifted away from the name ‘tisproperty’ to ‘Hutbitat’, we realised that ‘Hutbitat’ had its own set of challenges, and we were convinced then that it was a major dealbreaker. 

I remember spending an inordinate amount of time trying to arrive at a ‘better’ company name with the team, and we eventually settled on ‘Homekoala’. Was it easier to remember than ‘Hutbitat’? Perhaps. It certainly felt like a good enough idea back then. 
In case you’re interested in indulging in this insanity, I even published an article on Tech in Asia, about renaming ‘Hutbitat’ to ‘Homekoala’.

## Obsessive Compulsive Disorder
Renaming the company was just the start of the obsession. Across the span of 2015 to 2017, we spent an obsessive amount of effort tracking user behaviour through Google Analytics, determined to identify the causes of bounce, points of entry to our solution and device type, to name a few. Based on these data points, we would then tweak and fine-tune our application in hopes that the following significant change would be ‘it’. Given a more robust set of features than our competitors, we assumed that users would be inevitably drawn to our solution. 

## Rabbit Holes We Fell Into
### Rabbit Hole 1
> Our user interface isn’t polished.
We believed our existing user interface was insufficient to compete with the incumbent, so we overhauled it entirely.

![An example of the old interface](/assets/images/retrospectives/homekoala/04_mapview_saved.jpg)

### Rabbit Hole #2
> Our competitors aren’t providing sufficient data to facilitate the home rental or purchasing process.
We utilised every available data set we could get our hands on to generate graphs and charts to provide a ‘data driven’ approach to property search.

![Data data everywhere but how much of it was really useful?](/assets/images/retrospectives/homekoala/05_data.png)

### Rabbit Hole #3
> Our competitors’ solutions are not very mobile friendly
We also believed an incredibly mobile-friendly solution with snappy page load times was extremely important and we perhaps spent far too much time trying to optimise every single metric possible as per Google’s recommendations.

<div class="grid" data-layout="thirds">
  <img src="/assets/images/retrospectives/homekoala/06_new-mobile-01.png" alt="An abstracted journey of my life so far from graduation till today">
  <img src="/assets/images/retrospectives/homekoala/07_new-mobile-02.png" alt="The original source of inspiration for the image above">
  <img src="/assets/images/retrospectives/homekoala/08_new-mobile-03.png" alt="Preaching to teachers about hosting a human-centered design for kids event">
</div>


### Rabbit Hole #4
> Our competitors’ listings aren’t detailed enough

Imagine if:
1. You work in the city
2. You typically take bus service ‘132’ to work
3. You are looking for properties within 5km of your workplace
Our solution had all of that covered.
![Data data everywhere but how much of it was really useful?](/assets/images/retrospectives/homekoala/09_bus_listings.png)

What if you also wanted to find out which properties had recently reduced prices? We covered that too.
![Data data everywhere but how much of it was really useful?](/assets/images/retrospectives/homekoala/10_reduced_listings.png)

What if you only wanted to find properties on a map but scoped to a particular suburb? You guessed it.
![Data data everywhere but how much of it was really useful?](/assets/images/retrospectives/homekoala/11_suburb_based_listings.png)

## What happened at the end?
### Sunk cost fallacy

Rabbit holes can be deceptively deep, leading us down countless paths. Despite our efforts, we never found the light at the end of the tunnel. Instead, we repeatedly made similar mistakes, each one burying us deeper. Our feature development was largely guided by intuition, relying on limited user feedback and sparse data from Google Analytics.

As a small startup, agility in experimentation was crucial. However, our revamps and feature releases typically consumed two to three months. We then spent an equal amount of time on marketing, hoping each new feature would be the breakthrough we needed. But that turning point remained elusive – we were essentially driving in circles, unable to break free from our self-imposed loop.

### Out of fuel

As a marketplace platform, we required property agents willing to pay for advertising. However, we could not convince them that our platform had sufficient lead-generation capabilities. Without a revenue stream, we were also unable to pitch for additional rounds of funding. Eventually, our metaphorical car came to a halt.

### What if?

Apart from tightening up development cycles with quicker iterations, I've often thought about why we failed and what else we could have done.

It’s easy to assume, and hindsight is always 20/20. Sometime in 2020, I came across an article called [“19 Tactics to Solve the Chicken-or-Egg Problem and Grow Your Marketplace](https://www.nfx.com/post/19-marketplace-tactics-for-overcoming-the-chicken-or-egg-problem)”. I’ve listed some below that made me perform a double take.

**Get the hardest side first.**

> When the harder side (supply or demand) reaches its boiling point of activity, [network effects](https://www.nfx.com/post/network-effects-manual) kick in and value will be created organically for the easier side. […] Typically, whichever side is hardest is the more valuable, and once you get enough of them, the other side is 2-10X easier to bring onboard.
> 

We were a small team of three trying to capture home seekers and real estate agents. It never occurred to us that we could exclusively focus on one side.

**Make the supply look bigger with automation.**

> This is all about kickstarting the supply-side by aggregating as much data from the web as possible to create a perceived “aura of activity.” *Examples: Yelp, Indeed, and Goodreads all collected data—on local businesses, job postings, and books, respectively—into their platforms to create a useful supply-side without so much activity there at the start.*

> For example, it’s now known that Reddit used fake persona accounts to plant interesting questions. And Paypal built a bot that posed as a human, purchased things on eBay, and insisted on paying with Paypal. These tactics were certainly effective at demonstrating their product’s value to potential users and thus helped the company solve the chicken-or-egg problem

We were aware of this, yet our morals got the better of us. We knew competitors typically would inflate listing numbers, retaining old or expired listings instead of removing them. The numerical superiority in listings would then be used as a marketing tool. We considered doing so, but we didn’t. Was it the right choice? Who knows?

**Host meetups and gatherings.**

> It’s tough to scale events. However, at the beginning, they can be effective to generate community, demonstrate activity, and give you direct customer feedback, particularly when you’re loud about it on social.

We had severe contemplations about flying to Australia to engage with a broader set of property agents, yet we never took the plunge down under.

**Build a SaaS tool for one side of the market.**

> When you give or sell one side of the marketplace a SaaS tool, it helps lock them in so you have time to attract the other side.

We attempted this with a CRM tool to supplement Homekoala. However, we were again plagued by poor marketing efforts and long development cycles.

![Data data everywhere but how much of it was really useful?](/assets/images/retrospectives/homekoala/12_redmemo.png)

---

## Conclusion

Back in 2015, when I approached Mat Beeche of Startup Daily to feature our startup, I remember being less than impressed by how he wrote about our company. I felt like the negative angle of the headline would potentially do us more harm than benefit. It turns out I was the one blinded by hubris. 

Matt concluded the article with an illuminating point:

> This begs the question: why bother building a search engine / two-sided market place when you could just build a suite of tools and concentrate on marketing them directly to the real estate industry? It’s early days but I think that there are a lot of factors to be ironed out here before this startup has a fighting chance making it in Australia, especially because they are not based in the country.

After Homekoala, I was immediately roped into the next startup, where I served as co-founder from 2017 - 2021. Read about my journey with Oromico [over here](https://www.notion.so/Oromico-17c0e991f56580fb9fe4da6e364a1668?pvs=21).

## Appendix
It also turns out that I had more work documented about Homekoala than I expected.
[The No.1 way to narrow your property search and save you time.](https://medium.com/@Homekoala/the-no-1-way-to-narrow-your-property-search-and-save-you-time-8fbc90cc2285)
[Building the best real estate search. How are we different?](https://medium.com/@Homekoala/building-the-best-real-estate-search-how-are-we-different-45dea2dd45a7)
[Building the best real estate search engine in Australia. Here comes Homekoala.](https://www.notion.so/havesomeleeway/Homekoala-17c0e991f565803a8d6dfc79ea337264?source=copy_link#405e4a15ef5f4976bac9801a48c6cd04)
