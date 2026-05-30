const quizData = [
  {
    "id": 1,
    "title": "Marketing and Sales Strategies",
    "tf": [
      {
        "number": 1,
        "question": "Market segmentation divides the market into distinct groups of buyers.",
        "answer": "T",
        "explanation": "This statement is **True**. Market segmentation is the strategic process of dividing a broad market into distinct, manageable groups of buyers who share similar needs, characteristics, or behaviors, allowing a business to target its resources effectively."
      },
      {
        "number": 2,
        "question": "Demographic segmentation includes age, income, gender, and education.",
        "answer": "T",
        "explanation": "This statement is **True**. Demographic segmentation classifies consumers based on quantifiable statistics such as age, income, gender, education, occupation, and family size."
      },
      {
        "number": 3,
        "question": "Segmentation means dividing the market into different groups of buyers.",
        "answer": "T",
        "explanation": "This statement is **True**. Market segmentation is the strategic process of dividing a broad market into distinct, manageable groups of buyers who share similar needs, characteristics, or behaviors, allowing a business to target its resources effectively."
      },
      {
        "number": 4,
        "question": "Geographic segmentation is based on usage rate and brand loyalty.",
        "answer": "F",
        "explanation": "This statement is **False**. Behavioral segmentation grouping is based on consumer knowledge, attitudes, usage rates, brand loyalty, user status, or benefits sought from a product. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 5,
        "question": "Behavioral segmentation looks at usage rate, brand loyalty, and benefits.",
        "answer": "T",
        "explanation": "This statement is **True**. Behavioral segmentation grouping is based on consumer knowledge, attitudes, usage rates, brand loyalty, user status, or benefits sought from a product."
      },
      {
        "number": 6,
        "question": "Targeting means dividing the market into smaller groups of buyers.",
        "answer": "F",
        "explanation": "This statement is **False**. Targeting is the process of evaluating and selecting which market segments to serve. Strategies include concentrated targeting (focusing on a single niche), differentiated targeting (serving multiple segments with different offers), and undifferentiated targeting (serving the mass market with a single offer). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 7,
        "question": "Differentiated targeting serves multiple segments.",
        "answer": "T",
        "explanation": "This statement is **True**. Targeting is the process of evaluating and selecting which market segments to serve. Strategies include concentrated targeting (focusing on a single niche), differentiated targeting (serving multiple segments with different offers), and undifferentiated targeting (serving the mass market with a single offer)."
      },
      {
        "number": 8,
        "question": "An undifferentiated strategy focuses on a single niche only.",
        "answer": "F",
        "explanation": "This statement is **False**. Targeting is the process of evaluating and selecting which market segments to serve. Strategies include concentrated targeting (focusing on a single niche), differentiated targeting (serving multiple segments with different offers), and undifferentiated targeting (serving the mass market with a single offer). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 9,
        "question": "Positioning is the distinctive place a brand occupies in the customer's mind.",
        "answer": "T",
        "explanation": "This statement is **True**. Positioning refers to designing the company's offering and image to occupy a distinctive, valuable place in the target customer's mind. A Unique Selling Proposition (USP) is a core tool used to communicate this distinctiveness, and positioning must be defined before building the marketing mix."
      },
      {
        "number": 10,
        "question": "A Unique Selling Proposition (USP) is a tool used in positioning.",
        "answer": "T",
        "explanation": "This statement is **True**. Positioning refers to designing the company's offering and image to occupy a distinctive, valuable place in the target customer's mind. A Unique Selling Proposition (USP) is a core tool used to communicate this distinctiveness, and positioning must be defined before building the marketing mix."
      },
      {
        "number": 11,
        "question": "Positioning should be done before building the marketing mix.",
        "answer": "T",
        "explanation": "This statement is **True**. Positioning refers to designing the company's offering and image to occupy a distinctive, valuable place in the target customer's mind. A Unique Selling Proposition (USP) is a core tool used to communicate this distinctiveness, and positioning must be defined before building the marketing mix."
      },
      {
        "number": 12,
        "question": "The Product is the goods or services offered to meet customer needs and solve their problems.",
        "answer": "T",
        "explanation": "This statement is **True**. The 4 Ps represent the foundational elements of the marketing mix: Product (the goods or services offered to meet a need), Price (the amount customers pay), Place (the distribution channels), and Promotion (activities like advertising, PR, and sales promotion that communicate value)."
      },
      {
        "number": 13,
        "question": "Features, benefits, quality, design, and branding are considerations under Product.",
        "answer": "T",
        "explanation": "This statement is **True**. Startup costs are divided into: One-Time Expenses (costs incurred once during establishment like purchasing equipment, furnishing offices, registration/legal fees, and IT setup) and Pre-Operational Costs (preparation expenses prior to launch like market research, product development, and branding)."
      },
      {
        "number": 14,
        "question": "Cost-based pricing adds a markup for profit to the cost of production.",
        "answer": "T",
        "explanation": "This statement is **True**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 15,
        "question": "Cost-based pricing sets prices based on the perceived value to the customer.",
        "answer": "F",
        "explanation": "This statement is **False**. Key pricing strategies include: Cost-Based Pricing (setting prices based on production costs plus a profit markup), Value-Based Pricing (setting prices based on the customer's perceived value), and Competitive Pricing (setting prices in line with or slightly below competitors). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 16,
        "question": "Value-based pricing is based only on the cost of production.",
        "answer": "F",
        "explanation": "This statement is **False**. Key pricing strategies include: Cost-Based Pricing (setting prices based on production costs plus a profit markup), Value-Based Pricing (setting prices based on the customer's perceived value), and Competitive Pricing (setting prices in line with or slightly below competitors). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 17,
        "question": "Competitive pricing sets prices much higher than all competitors.",
        "answer": "F",
        "explanation": "This statement is **False**. Key pricing strategies include: Cost-Based Pricing (setting prices based on production costs plus a profit markup), Value-Based Pricing (setting prices based on the customer's perceived value), and Competitive Pricing (setting prices in line with or slightly below competitors). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 18,
        "question": "Place refers to the channels through which the product is distributed to customers.",
        "answer": "T",
        "explanation": "This statement is **True**. In the 4 Ps, 'Place' refers to distribution channels—the methods and platforms (such as direct sales, retail networks, wholesalers, and online storefronts) through which a product is delivered to the final customer."
      },
      {
        "number": 19,
        "question": "Direct sales, retailers, and online platforms are distribution channels.",
        "answer": "T",
        "explanation": "This statement is **True**. In the 4 Ps, 'Place' refers to distribution channels—the methods and platforms (such as direct sales, retail networks, wholesalers, and online storefronts) through which a product is delivered to the final customer."
      },
      {
        "number": 20,
        "question": "Promotion includes advertising, public relations, and sales promotions.",
        "answer": "T",
        "explanation": "This statement is **True**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 21,
        "question": "Direct sales is a tool of promotion, not a distribution channel.",
        "answer": "F",
        "explanation": "This statement is **False**. In the 4 Ps, 'Place' refers to distribution channels—the methods and platforms (such as direct sales, retail networks, wholesalers, and online storefronts) through which a product is delivered to the final customer. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 22,
        "question": "Brand identity creates recognition and differentiation from competitors.",
        "answer": "T",
        "explanation": "This statement is **True**. Brand identity establishes a unique presence that creates recognition and differentiation. It consists of a logo (a visual symbol), typography (style and arrangement of text), color scheme (consistent color palette), and messaging (tone, language, and core values)."
      },
      {
        "number": 23,
        "question": "A logo is a visual symbol that represents the brand.",
        "answer": "T",
        "explanation": "This statement is **True**. Brand identity establishes a unique presence that creates recognition and differentiation. It consists of a logo (a visual symbol), typography (style and arrangement of text), color scheme (consistent color palette), and messaging (tone, language, and core values)."
      },
      {
        "number": 24,
        "question": "Typography refers to the palette of colors used by the brand.",
        "answer": "F",
        "explanation": "This statement is **False**. Brand identity establishes a unique presence that creates recognition and differentiation. It consists of a logo (a visual symbol), typography (style and arrangement of text), color scheme (consistent color palette), and messaging (tone, language, and core values). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 25,
        "question": "Messaging includes the tone, language, and key messages of the brand.",
        "answer": "T",
        "explanation": "This statement is **True**. Brand identity establishes a unique presence that creates recognition and differentiation. It consists of a logo (a visual symbol), typography (style and arrangement of text), color scheme (consistent color palette), and messaging (tone, language, and core values)."
      },
      {
        "number": 26,
        "question": "A consistent color scheme creates visual coherence across brand materials.",
        "answer": "T",
        "explanation": "This statement is **True**. Brand identity establishes a unique presence that creates recognition and differentiation. It consists of a logo (a visual symbol), typography (style and arrangement of text), color scheme (consistent color palette), and messaging (tone, language, and core values)."
      },
      {
        "number": 27,
        "question": "A value proposition explains the unique value a product delivers, for whom, and why it is better.",
        "answer": "T",
        "explanation": "This statement is **True**. A value proposition is a clear statement of the unique value a product delivers, the specific target customer (avoiding the trap of serving 'everyone'), the real customer problem or need being solved, the concrete benefits/outcomes (e.g., time saved, cost reduced), and the differentiator that makes it hard for competitors to copy."
      },
      {
        "number": 28,
        "question": "The target customer should be defined as \"everyone\" to reach the largest market.",
        "answer": "F",
        "explanation": "This statement is **False**. The 4 Ps represent the foundational elements of the marketing mix: Product (the goods or services offered to meet a need), Price (the amount customers pay), Place (the distribution channels), and Promotion (activities like advertising, PR, and sales promotion that communicate value). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 29,
        "question": "A strong value proposition should clearly target \"everyone\" in the market.",
        "answer": "F",
        "explanation": "This statement is **False**. A value proposition is a clear statement of the unique value a product delivers, the specific target customer (avoiding the trap of serving 'everyone'), the real customer problem or need being solved, the concrete benefits/outcomes (e.g., time saved, cost reduced), and the differentiator that makes it hard for competitors to copy. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 30,
        "question": "The problem or need should be stated in the customer's own words.",
        "answer": "T",
        "explanation": "This statement is **True**. Positioning refers to designing the company's offering and image to occupy a distinctive, valuable place in the target customer's mind. A Unique Selling Proposition (USP) is a core tool used to communicate this distinctiveness, and positioning must be defined before building the marketing mix."
      },
      {
        "number": 31,
        "question": "Benefit and outcome describe the concrete gain the customer receives.",
        "answer": "T",
        "explanation": "This statement is **True**. The marketing and sales plan explains how the business will promote its offerings, acquire and retain customers (using loyalty programs and customer service policies), and outlines the sales methods used to convert leads into paying customers."
      },
      {
        "number": 32,
        "question": "A good differentiator should be easy for competitors to copy.",
        "answer": "F",
        "explanation": "This statement is **False**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 33,
        "question": "A sharp value proposition is more powerful than any advertising budget.",
        "answer": "T",
        "explanation": "This statement is **True**. A value proposition is a clear statement of the unique value a product delivers, the specific target customer (avoiding the trap of serving 'everyone'), the real customer problem or need being solved, the concrete benefits/outcomes (e.g., time saved, cost reduced), and the differentiator that makes it hard for competitors to copy."
      },
      {
        "number": 34,
        "question": "SEO aims to rank website content higher in organic, non-paid search results.",
        "answer": "T",
        "explanation": "This statement is **True**. Search Engine Optimization (SEO) involves optimizing website content and authority to rank higher in organic (non-paid) search results. Key techniques include keyword research, on-page optimization, and backlink building (links from reputable sites)."
      },
      {
        "number": 35,
        "question": "Backlink building means acquiring links from reputable websites.",
        "answer": "T",
        "explanation": "This statement is **True**. Search Engine Optimization (SEO) involves optimizing website content and authority to rank higher in organic (non-paid) search results. Key techniques include keyword research, on-page optimization, and backlink building (links from reputable sites)."
      },
      {
        "number": 36,
        "question": "SEM uses paid advertising to increase visibility on search engines.",
        "answer": "T",
        "explanation": "This statement is **True**. Search Engine Marketing (SEM) uses paid advertising to increase website visibility on search engines. In the Pay-Per-Click (PPC) model, advertisers pay a fee each time their ad is clicked. Display advertising uses visual ads on web networks."
      },
      {
        "number": 37,
        "question": "In Pay-Per-Click (PPC), advertisers pay each time their ad is clicked.",
        "answer": "T",
        "explanation": "This statement is **True**. Search Engine Marketing (SEM) uses paid advertising to increase website visibility on search engines. In the Pay-Per-Click (PPC) model, advertisers pay a fee each time their ad is clicked. Display advertising uses visual ads on web networks."
      },
      {
        "number": 38,
        "question": "Display advertising uses only printed newspaper ads.",
        "answer": "F",
        "explanation": "This statement is **False**. Search Engine Marketing (SEM) uses paid advertising to increase website visibility on search engines. In the Pay-Per-Click (PPC) model, advertisers pay a fee each time their ad is clicked. Display advertising uses visual ads on web networks. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 39,
        "question": "Content marketing distributes valuable and relevant content to attract a target audience.",
        "answer": "T",
        "explanation": "This statement is **True**. Content marketing focuses on creating and distributing valuable, relevant, and consistent content (such as blog posts, videos, and infographics) to attract, engage, and retain a clearly defined target audience."
      },
      {
        "number": 40,
        "question": "Blog posts, videos, and infographics are content marketing techniques.",
        "answer": "T",
        "explanation": "This statement is **True**. Content marketing focuses on creating and distributing valuable, relevant, and consistent content (such as blog posts, videos, and infographics) to attract, engage, and retain a clearly defined target audience."
      },
      {
        "number": 41,
        "question": "User-Generated Content (UGC) is content created by the company itself.",
        "answer": "F",
        "explanation": "This statement is **False**. Social media engagement tactics include interactive posts (polls, quizzes), User-Generated Content (UGC - content created by customers showing their experience), and influencer partnerships (collaborating with individuals who have large followings). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 42,
        "question": "User-Generated Content (UGC) is created by the company's own marketing team.",
        "answer": "F",
        "explanation": "This statement is **False**. Social media engagement tactics include interactive posts (polls, quizzes), User-Generated Content (UGC - content created by customers showing their experience), and influencer partnerships (collaborating with individuals who have large followings). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 43,
        "question": "Email marketing sends targeted messages to a permission-based subscriber list.",
        "answer": "T",
        "explanation": "This statement is **True**. Email marketing sends targeted messages to a permission-based subscriber list. It is consistently rated the highest-ROI digital channel and uses list building, subscriber segmentation, and automation/drip campaigns triggered by customer actions."
      },
      {
        "number": 44,
        "question": "Email marketing is described as the lowest-ROI digital channel.",
        "answer": "F",
        "explanation": "This statement is **False**. Email marketing sends targeted messages to a permission-based subscriber list. It is consistently rated the highest-ROI digital channel and uses list building, subscriber segmentation, and automation/drip campaigns triggered by customer actions. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 45,
        "question": "Newspapers, magazines, brochures, and flyers are examples of print media.",
        "answer": "T",
        "explanation": "This statement is **True**. Traditional marketing encompasses print media (newspapers, magazines, brochures), Public Relations (press releases and media relations), Events (trade shows, sponsorships), and personal networking or referrals (word-of-mouth incentives)."
      },
      {
        "number": 46,
        "question": "Press releases are official statements distributed to media outlets.",
        "answer": "T",
        "explanation": "This statement is **True**. Traditional marketing encompasses print media (newspapers, magazines, brochures), Public Relations (press releases and media relations), Events (trade shows, sponsorships), and personal networking or referrals (word-of-mouth incentives)."
      },
      {
        "number": 47,
        "question": "Trade shows and sponsorships are types of events.",
        "answer": "T",
        "explanation": "This statement is **True**. Traditional marketing encompasses print media (newspapers, magazines, brochures), Public Relations (press releases and media relations), Events (trade shows, sponsorships), and personal networking or referrals (word-of-mouth incentives)."
      },
      {
        "number": 48,
        "question": "Networking helps build professional relationships that lead to business opportunities.",
        "answer": "T",
        "explanation": "This statement is **True**. Traditional marketing encompasses print media (newspapers, magazines, brochures), Public Relations (press releases and media relations), Events (trade shows, sponsorships), and personal networking or referrals (word-of-mouth incentives)."
      },
      {
        "number": 49,
        "question": "Referrals discourage satisfied customers from recommending the business.",
        "answer": "F",
        "explanation": "This statement is **False**. Traditional marketing encompasses print media (newspapers, magazines, brochures), Public Relations (press releases and media relations), Events (trade shows, sponsorships), and personal networking or referrals (word-of-mouth incentives). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 50,
        "question": "In a point system, customers earn points for each purchase that can be redeemed for rewards.",
        "answer": "T",
        "explanation": "This statement is **True**. Traditional marketing encompasses print media (newspapers, magazines, brochures), Public Relations (press releases and media relations), Events (trade shows, sponsorships), and personal networking or referrals (word-of-mouth incentives)."
      },
      {
        "number": 51,
        "question": "After-sales service stops the moment the customer completes a purchase.",
        "answer": "F",
        "explanation": "This statement is **False**. After-sales service focuses on retaining customers post-purchase. It includes support channels (phone, live chat), proactive follow-up (satisfaction checks), and feedback collection (surveys) to drive improvement. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 52,
        "question": "AIDA stands for Attention, Interest, Desire, and Action.",
        "answer": "T",
        "explanation": "This statement is **True**. AIDA stands for Attention (make prospects aware), Interest (educate and qualify prospects), Desire (prove value via product demos, testimonials, or ROI calculations to build wanting), and Action (close the sale with call-to-actions, limited offers, or frictionless checkout)."
      },
      {
        "number": 53,
        "question": "In the AIDA model, the Desire stage is the first step where prospects become aware of the solution.",
        "answer": "F",
        "explanation": "This statement is **False**. AIDA stands for Attention (make prospects aware), Interest (educate and qualify prospects), Desire (prove value via product demos, testimonials, or ROI calculations to build wanting), and Action (close the sale with call-to-actions, limited offers, or frictionless checkout). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 54,
        "question": "The Desire stage focuses only on making the prospect aware the solution exists.",
        "answer": "F",
        "explanation": "This statement is **False**. AIDA stands for Attention (make prospects aware), Interest (educate and qualify prospects), Desire (prove value via product demos, testimonials, or ROI calculations to build wanting), and Action (close the sale with call-to-actions, limited offers, or frictionless checkout). Therefore, the claim in the statement is incorrect."
      }
    ],
    "mcq": [
      {
        "number": 1,
        "question": "What is the main purpose of market segmentation?",
        "options": {
          "A": "To set product prices",
          "B": "To divide the market into distinct groups of buyers",
          "C": "To design the company logo",
          "D": "To calculate marketing costs"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (To divide the market into distinct groups of buyers). Market segmentation is the strategic process of dividing a broad market into distinct, manageable groups of buyers who share similar needs, characteristics, or behaviors, allowing a business to target its resources effectively."
      },
      {
        "number": 2,
        "question": "Which of the following is an example of demographic segmentation?",
        "options": {
          "A": "Country and city",
          "B": "Usage rate and brand loyalty",
          "C": "Age, income, and gender",
          "D": "Carbon footprint"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Age, income, and gender). Demographic segmentation classifies consumers based on quantifiable statistics such as age, income, gender, education, occupation, and family size."
      },
      {
        "number": 3,
        "question": "Dividing customers by country, city, and urban vs. rural is called:",
        "options": {
          "A": "Demographic segmentation",
          "B": "Geographic segmentation",
          "C": "Behavioral segmentation",
          "D": "Competitive pricing"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Geographic segmentation). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 4,
        "question": "Usage rate, brand loyalty, and benefits are part of:",
        "options": {
          "A": "Behavioral segmentation",
          "B": "Geographic segmentation",
          "C": "Cost-based pricing",
          "D": "Promotion"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Behavioral segmentation). Behavioral segmentation grouping is based on consumer knowledge, attitudes, usage rates, brand loyalty, user status, or benefits sought from a product."
      },
      {
        "number": 5,
        "question": "Targeting in the STP model means:",
        "options": {
          "A": "Dividing the market into groups",
          "B": "Choosing which segments to serve",
          "C": "Designing the brand logo",
          "D": "Measuring marketing ROI"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Choosing which segments to serve). Targeting is the process of evaluating and selecting which market segments to serve. Strategies include concentrated targeting (focusing on a single niche), differentiated targeting (serving multiple segments with different offers), and undifferentiated targeting (serving the mass market with a single offer)."
      },
      {
        "number": 6,
        "question": "A targeting strategy that focuses on a single niche is called:",
        "options": {
          "A": "Differentiated targeting",
          "B": "Undifferentiated targeting",
          "C": "Concentrated targeting",
          "D": "Mass marketing"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Concentrated targeting). Targeting is the process of evaluating and selecting which market segments to serve. Strategies include concentrated targeting (focusing on a single niche), differentiated targeting (serving multiple segments with different offers), and undifferentiated targeting (serving the mass market with a single offer)."
      },
      {
        "number": 7,
        "question": "Serving multiple segments with different offers is known as:",
        "options": {
          "A": "Concentrated targeting",
          "B": "Differentiated targeting",
          "C": "Undifferentiated targeting",
          "D": "Niche targeting"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Differentiated targeting). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 8,
        "question": "Positioning refers to:",
        "options": {
          "A": "The cost of producing a product",
          "B": "The distinctive place a brand occupies in the customer's mind",
          "C": "The number of distribution channels",
          "D": "The list of email subscribers"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (The distinctive place a brand occupies in the customer's mind). Positioning refers to designing the company's offering and image to occupy a distinctive, valuable place in the target customer's mind. A Unique Selling Proposition (USP) is a core tool used to communicate this distinctiveness, and positioning must be defined before building the marketing mix."
      },
      {
        "number": 9,
        "question": "Which of the following is NOT one of the 4 Ps of marketing?",
        "options": {
          "A": "Product",
          "B": "Price",
          "C": "People",
          "D": "Promotion"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (People). The 4 Ps represent the foundational elements of the marketing mix: Product (the goods or services offered to meet a need), Price (the amount customers pay), Place (the distribution channels), and Promotion (activities like advertising, PR, and sales promotion that communicate value)."
      },
      {
        "number": 10,
        "question": "Which of the following correctly lists the 4 Ps of marketing?",
        "options": {
          "A": "Product, Price, Place, Promotion",
          "B": "People, Profit, Performance, Position",
          "C": "Plan, Process, Packaging, Promise",
          "D": "Production, Partner, Purpose, Power"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Product, Price, Place, Promotion). The 4 Ps represent the foundational elements of the marketing mix: Product (the goods or services offered to meet a need), Price (the amount customers pay), Place (the distribution channels), and Promotion (activities like advertising, PR, and sales promotion that communicate value)."
      },
      {
        "number": 11,
        "question": "Which of the 4 Ps refers to the goods or services offered to customers?",
        "options": {
          "A": "Product",
          "B": "Price",
          "C": "Place",
          "D": "Promotion"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Product). The 4 Ps represent the foundational elements of the marketing mix: Product (the goods or services offered to meet a need), Price (the amount customers pay), Place (the distribution channels), and Promotion (activities like advertising, PR, and sales promotion that communicate value)."
      },
      {
        "number": 12,
        "question": "In the 4 Ps, \"Product\" refers to:",
        "options": {
          "A": "The income generated from sales",
          "B": "The goods or services offered to meet customer needs",
          "C": "The advertising message",
          "D": "The distribution channels"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (The goods or services offered to meet customer needs). The 4 Ps represent the foundational elements of the marketing mix: Product (the goods or services offered to meet a need), Price (the amount customers pay), Place (the distribution channels), and Promotion (activities like advertising, PR, and sales promotion that communicate value)."
      },
      {
        "number": 13,
        "question": "Setting prices based on production cost plus a markup is called:",
        "options": {
          "A": "Value-based pricing",
          "B": "Competitive pricing",
          "C": "Cost-based pricing",
          "D": "Penetration pricing"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Cost-based pricing). Key pricing strategies include: Cost-Based Pricing (setting prices based on production costs plus a profit markup), Value-Based Pricing (setting prices based on the customer's perceived value), and Competitive Pricing (setting prices in line with or slightly below competitors)."
      },
      {
        "number": 14,
        "question": "Pricing a product based on the perceived value to the customer is:",
        "options": {
          "A": "Cost-based pricing",
          "B": "Value-based pricing",
          "C": "Competitive pricing",
          "D": "Markup pricing"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Value-based pricing). Key pricing strategies include: Cost-Based Pricing (setting prices based on production costs plus a profit markup), Value-Based Pricing (setting prices based on the customer's perceived value), and Competitive Pricing (setting prices in line with or slightly below competitors)."
      },
      {
        "number": 15,
        "question": "Which pricing strategy sets prices in line with or slightly below competitors?",
        "options": {
          "A": "Value-based pricing",
          "B": "Cost-based pricing",
          "C": "Competitive pricing",
          "D": "Premium pricing"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Competitive pricing). Key pricing strategies include: Cost-Based Pricing (setting prices based on production costs plus a profit markup), Value-Based Pricing (setting prices based on the customer's perceived value), and Competitive Pricing (setting prices in line with or slightly below competitors)."
      },
      {
        "number": 16,
        "question": "Which type of pricing sets prices in line with or slightly below competitors?",
        "options": {
          "A": "Cost-Based Pricing",
          "B": "Competitive Pricing",
          "C": "Value-Based Pricing",
          "D": "Skim Pricing"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Competitive Pricing). Key pricing strategies include: Cost-Based Pricing (setting prices based on production costs plus a profit markup), Value-Based Pricing (setting prices based on the customer's perceived value), and Competitive Pricing (setting prices in line with or slightly below competitors)."
      },
      {
        "number": 17,
        "question": "\"Place\" in the 4 Ps deals with:",
        "options": {
          "A": "The channels used to distribute the product",
          "B": "The pricing method",
          "C": "The brand's logo",
          "D": "The promotion tools"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (The channels used to distribute the product). The 4 Ps represent the foundational elements of the marketing mix: Product (the goods or services offered to meet a need), Price (the amount customers pay), Place (the distribution channels), and Promotion (activities like advertising, PR, and sales promotion that communicate value)."
      },
      {
        "number": 18,
        "question": "Which of the following is a distribution channel?",
        "options": {
          "A": "Advertising",
          "B": "Online platforms",
          "C": "Public relations",
          "D": "Sales promotions"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Online platforms). In the 4 Ps, 'Place' refers to distribution channels—the methods and platforms (such as direct sales, retail networks, wholesalers, and online storefronts) through which a product is delivered to the final customer."
      },
      {
        "number": 19,
        "question": "Which of the following is a promotion tool?",
        "options": {
          "A": "Retailers and wholesalers",
          "B": "Direct sales",
          "C": "Advertising",
          "D": "Online platforms"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Advertising). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 20,
        "question": "Branding, design, and quality are considerations under which P?",
        "options": {
          "A": "Price",
          "B": "Place",
          "C": "Product",
          "D": "Promotion"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Product). Startup costs are divided into: One-Time Expenses (costs incurred once during establishment like purchasing equipment, furnishing offices, registration/legal fees, and IT setup) and Pre-Operational Costs (preparation expenses prior to launch like market research, product development, and branding)."
      },
      {
        "number": 21,
        "question": "The activities designed to communicate a product's value and encourage purchases describe:",
        "options": {
          "A": "Place",
          "B": "Promotion",
          "C": "Price",
          "D": "Product"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Promotion). The 4 Ps represent the foundational elements of the marketing mix: Product (the goods or services offered to meet a need), Price (the amount customers pay), Place (the distribution channels), and Promotion (activities like advertising, PR, and sales promotion that communicate value)."
      },
      {
        "number": 22,
        "question": "The main purpose of brand identity is to:",
        "options": {
          "A": "Reduce production costs",
          "B": "Create recognition and differentiation from competitors",
          "C": "Increase the number of employees",
          "D": "Lower product prices"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Create recognition and differentiation from competitors). Brand identity establishes a unique presence that creates recognition and differentiation. It consists of a logo (a visual symbol), typography (style and arrangement of text), color scheme (consistent color palette), and messaging (tone, language, and core values)."
      },
      {
        "number": 23,
        "question": "A visual symbol that represents the brand and is easily recognizable is the:",
        "options": {
          "A": "Logo",
          "B": "Color scheme",
          "C": "Typography",
          "D": "Messaging"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Logo). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 24,
        "question": "The style and arrangement of text that conveys the brand's personality is called:",
        "options": {
          "A": "Logo",
          "B": "Color scheme",
          "C": "Typography",
          "D": "Messaging"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Typography). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 25,
        "question": "The consistent palette of colors used across all brand materials is the:",
        "options": {
          "A": "Messaging",
          "B": "Color scheme",
          "C": "Logo",
          "D": "Typography"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Color scheme). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 26,
        "question": "The tone, language, and key messages that communicate a brand's values describe:",
        "options": {
          "A": "Messaging",
          "B": "Typography",
          "C": "Logo",
          "D": "Color scheme"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Messaging). Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 27,
        "question": "A value proposition is best described as:",
        "options": {
          "A": "A list of all company expenses",
          "B": "A clear statement of the unique value a product delivers, for whom, and why it is better",
          "C": "The company's organizational chart",
          "D": "The pricing formula"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (A clear statement of the unique value a product delivers, for whom, and why it is better). A value proposition is a clear statement of the unique value a product delivers, the specific target customer (avoiding the trap of serving 'everyone'), the real customer problem or need being solved, the concrete benefits/outcomes (e.g., time saved, cost reduced), and the differentiator that makes it hard for competitors to copy."
      },
      {
        "number": 28,
        "question": "Which element of the value proposition warns against the trap of \"everyone\"?",
        "options": {
          "A": "Differentiator",
          "B": "Target Customer",
          "C": "Benefit & Outcome",
          "D": "Problem / Need"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Target Customer). A value proposition is a clear statement of the unique value a product delivers, the specific target customer (avoiding the trap of serving 'everyone'), the real customer problem or need being solved, the concrete benefits/outcomes (e.g., time saved, cost reduced), and the differentiator that makes it hard for competitors to copy."
      },
      {
        "number": 29,
        "question": "\"Time saved, cost reduced, risk avoided, status gained\" are examples of:",
        "options": {
          "A": "Target Customer",
          "B": "Problem / Need",
          "C": "Benefit & Outcome",
          "D": "Differentiator"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Benefit & Outcome). A value proposition is a clear statement of the unique value a product delivers, the specific target customer (avoiding the trap of serving 'everyone'), the real customer problem or need being solved, the concrete benefits/outcomes (e.g., time saved, cost reduced), and the differentiator that makes it hard for competitors to copy."
      },
      {
        "number": 30,
        "question": "The element that explains why your offer is better than competitors and is hard to copy is the:",
        "options": {
          "A": "Differentiator",
          "B": "Target Customer",
          "C": "Problem / Need",
          "D": "Benefit & Outcome"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Differentiator). A value proposition is a clear statement of the unique value a product delivers, the specific target customer (avoiding the trap of serving 'everyone'), the real customer problem or need being solved, the concrete benefits/outcomes (e.g., time saved, cost reduced), and the differentiator that makes it hard for competitors to copy."
      },
      {
        "number": 31,
        "question": "According to the key takeaways, a sharp value proposition is:",
        "options": {
          "A": "Less important than the advertising budget",
          "B": "More powerful than any advertising budget",
          "C": "Only useful for large companies",
          "D": "Unrelated to customer needs"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (More powerful than any advertising budget). A value proposition is a clear statement of the unique value a product delivers, the specific target customer (avoiding the trap of serving 'everyone'), the real customer problem or need being solved, the concrete benefits/outcomes (e.g., time saved, cost reduced), and the differentiator that makes it hard for competitors to copy."
      },
      {
        "number": 32,
        "question": "SEO is mainly concerned with:",
        "options": {
          "A": "Paid search advertising",
          "B": "Ranking higher in organic (non-paid) search results",
          "C": "Printing brochures",
          "D": "Sending emails"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Ranking higher in organic (non-paid) search results). Search Engine Optimization (SEO) involves optimizing website content and authority to rank higher in organic (non-paid) search results. Key techniques include keyword research, on-page optimization, and backlink building (links from reputable sites)."
      },
      {
        "number": 33,
        "question": "SEO aims to improve a website's ranking in:",
        "options": {
          "A": "Paid search engine results",
          "B": "Newspaper classifieds",
          "C": "non-paid search engine results",
          "D": "Television advertisements"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (non-paid search engine results). Search Engine Optimization (SEO) involves optimizing website content and authority to rank higher in organic (non-paid) search results. Key techniques include keyword research, on-page optimization, and backlink building (links from reputable sites)."
      },
      {
        "number": 34,
        "question": "Which of the following is an SEO technique?",
        "options": {
          "A": "Pay-Per-Click",
          "B": "Display advertising",
          "C": "Backlink building",
          "D": "Influencer partnerships"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Backlink building). Search Engine Optimization (SEO) involves optimizing website content and authority to rank higher in organic (non-paid) search results. Key techniques include keyword research, on-page optimization, and backlink building (links from reputable sites)."
      },
      {
        "number": 35,
        "question": "SEM is best described as:",
        "options": {
          "A": "Free, organic search optimization",
          "B": "Paid advertising to increase visibility on search engines",
          "C": "Printing newspaper ads",
          "D": "Building an email list"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Paid advertising to increase visibility on search engines). Search Engine Marketing (SEM) uses paid advertising to increase website visibility on search engines. In the Pay-Per-Click (PPC) model, advertisers pay a fee each time their ad is clicked. Display advertising uses visual ads on web networks."
      },
      {
        "number": 36,
        "question": "In which model do advertisers pay a fee each time their ad is clicked?",
        "options": {
          "A": "SEO",
          "B": "Content marketing",
          "C": "Pay-Per-Click (PPC)",
          "D": "Referrals"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Pay-Per-Click (PPC)). Search Engine Marketing (SEM) uses paid advertising to increase website visibility on search engines. In the Pay-Per-Click (PPC) model, advertisers pay a fee each time their ad is clicked. Display advertising uses visual ads on web networks."
      },
      {
        "number": 37,
        "question": "Blog posts, videos, and infographics are tools of:",
        "options": {
          "A": "Content marketing",
          "B": "SEM",
          "C": "Email marketing",
          "D": "Public relations"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Content marketing). Content marketing focuses on creating and distributing valuable, relevant, and consistent content (such as blog posts, videos, and infographics) to attract, engage, and retain a clearly defined target audience."
      },
      {
        "number": 38,
        "question": "Which of the following is a content marketing technique?",
        "options": {
          "A": "Cold outreach",
          "B": "Sponsorships",
          "C": "Backlink building",
          "D": "Infographics"
        },
        "answer": "D",
        "explanation": "The correct answer is **D** (Infographics). Content marketing focuses on creating and distributing valuable, relevant, and consistent content (such as blog posts, videos, and infographics) to attract, engage, and retain a clearly defined target audience."
      },
      {
        "number": 39,
        "question": "Content marketing aims to:",
        "options": {
          "A": "Pay for every ad click",
          "B": "Attract and engage a clearly defined target audience",
          "C": "Build a physical store network",
          "D": "Set product prices"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Attract and engage a clearly defined target audience). Content marketing focuses on creating and distributing valuable, relevant, and consistent content (such as blog posts, videos, and infographics) to attract, engage, and retain a clearly defined target audience."
      },
      {
        "number": 40,
        "question": "Content created by customers showing their experience with the brand is called:",
        "options": {
          "A": "Influencer partnership",
          "B": "User-Generated Content (UGC)",
          "C": "Display advertising",
          "D": "Press release"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (User-Generated Content (UGC)). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 41,
        "question": "Collaborating with people who have a large, engaged following to promote a brand is:",
        "options": {
          "A": "Influencer partnerships",
          "B": "Interactive posts",
          "C": "Backlink building",
          "D": "List building"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Influencer partnerships). Social media engagement tactics include interactive posts (polls, quizzes), User-Generated Content (UGC - content created by customers showing their experience), and influencer partnerships (collaborating with individuals who have large followings)."
      },
      {
        "number": 42,
        "question": "Email marketing sends targeted messages to:",
        "options": {
          "A": "Any random list of people",
          "B": "A permission-based subscriber list",
          "C": "Only competitors",
          "D": "Print media outlets"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (A permission-based subscriber list). Email marketing sends targeted messages to a permission-based subscriber list. It is consistently rated the highest-ROI digital channel and uses list building, subscriber segmentation, and automation/drip campaigns triggered by customer actions."
      },
      {
        "number": 43,
        "question": "Which email marketing technique uses sequences triggered by customer actions like signup or purchase?",
        "options": {
          "A": "List building",
          "B": "Segmentation",
          "C": "Automation & drip campaigns",
          "D": "Backlink building"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Automation & drip campaigns). Email marketing sends targeted messages to a permission-based subscriber list. It is consistently rated the highest-ROI digital channel and uses list building, subscriber segmentation, and automation/drip campaigns triggered by customer actions."
      },
      {
        "number": 44,
        "question": "Which of the following is an example of print media?",
        "options": {
          "A": "Press releases",
          "B": "Trade shows",
          "C": "Brochures and flyers",
          "D": "Pay-Per-Click ads"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Brochures and flyers). Traditional marketing encompasses print media (newspapers, magazines, brochures), Public Relations (press releases and media relations), Events (trade shows, sponsorships), and personal networking or referrals (word-of-mouth incentives)."
      },
      {
        "number": 45,
        "question": "Official statements distributed to media outlets to announce business developments are:",
        "options": {
          "A": "Press releases",
          "B": "Sponsorships",
          "C": "Trade shows",
          "D": "Backlinks"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Press releases). A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment."
      },
      {
        "number": 46,
        "question": "Trade shows and sponsorships are classified under:",
        "options": {
          "A": "Print media",
          "B": "Public relations",
          "C": "Events",
          "D": "Email marketing"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Events). Traditional marketing encompasses print media (newspapers, magazines, brochures), Public Relations (press releases and media relations), Events (trade shows, sponsorships), and personal networking or referrals (word-of-mouth incentives)."
      },
      {
        "number": 47,
        "question": "Encouraging satisfied customers to bring in new business is called:",
        "options": {
          "A": "Networking",
          "B": "Referrals",
          "C": "Backlink building",
          "D": "Segmentation"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Referrals). A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment."
      },
      {
        "number": 48,
        "question": "A loyalty program where customers reach Bronze, Silver, and Gold status is a:",
        "options": {
          "A": "Point system",
          "B": "Tiered rewards program",
          "C": "Membership program",
          "D": "Referral program"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Tiered rewards program). Loyalty programs reward repeat customers. Examples include Point Systems (earning points redeemable for rewards), Tiered Rewards (achieving status levels like Bronze, Silver, Gold to unlock higher perks), and paid Membership Programs."
      },
      {
        "number": 49,
        "question": "After-sales service includes:",
        "options": {
          "A": "Support, follow-up, and feedback collection",
          "B": "Keyword research",
          "C": "Cost-based pricing",
          "D": "Market segmentation"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Support, follow-up, and feedback collection). Brand identity establishes a unique presence that creates recognition and differentiation. It consists of a logo (a visual symbol), typography (style and arrangement of text), color scheme (consistent color palette), and messaging (tone, language, and core values)."
      },
      {
        "number": 50,
        "question": "What does AIDA stand for?",
        "options": {
          "A": "Attention, Interest, Desire, Action",
          "B": "Awareness, Income, Demand, Advertising",
          "C": "Attention, Income, Desire, Action",
          "D": "Advertising, Interest, Distribution, Action"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Attention, Interest, Desire, Action). Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 51,
        "question": "In the AIDA model, product demos, testimonials, and ROI proof are used in which stage?",
        "options": {
          "A": "Attention",
          "B": "Interest",
          "C": "Desire",
          "D": "Action"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Desire). AIDA stands for Attention (make prospects aware), Interest (educate and qualify prospects), Desire (prove value via product demos, testimonials, or ROI calculations to build wanting), and Action (close the sale with call-to-actions, limited offers, or frictionless checkout)."
      }
    ]
  },
  {
    "id": 2,
    "title": "Financing the Venture",
    "tf": [
      {
        "number": 1,
        "question": "Securing the right funding is essential for launching, operating, and scaling a business.",
        "answer": "T",
        "explanation": "This statement is **True**. A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment."
      },
      {
        "number": 2,
        "question": "One-time expenses are costs incurred once during the establishment of the business.",
        "answer": "T",
        "explanation": "This statement is **True**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 3,
        "question": "Equipment purchase and office space setup are examples of one-time expenses.",
        "answer": "T",
        "explanation": "This statement is **True**. Startup costs are divided into: One-Time Expenses (costs incurred once during establishment like purchasing equipment, furnishing offices, registration/legal fees, and IT setup) and Pre-Operational Costs (preparation expenses prior to launch like market research, product development, and branding)."
      },
      {
        "number": 4,
        "question": "Legal and registration fees change every month with the level of production.",
        "answer": "F",
        "explanation": "This statement is **False**. Startup costs are divided into: One-Time Expenses (costs incurred once during establishment like purchasing equipment, furnishing offices, registration/legal fees, and IT setup) and Pre-Operational Costs (preparation expenses prior to launch like market research, product development, and branding). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 5,
        "question": "Pre-operational costs are expenses related to preparing the business for launch.",
        "answer": "T",
        "explanation": "This statement is **True**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 6,
        "question": "Market research and product development are examples of pre-operational costs.",
        "answer": "T",
        "explanation": "This statement is **True**. Startup costs are divided into: One-Time Expenses (costs incurred once during establishment like purchasing equipment, furnishing offices, registration/legal fees, and IT setup) and Pre-Operational Costs (preparation expenses prior to launch like market research, product development, and branding)."
      },
      {
        "number": 7,
        "question": "Branding and logo design are classified as equipment purchase costs.",
        "answer": "F",
        "explanation": "This statement is **False**. Startup costs are divided into: One-Time Expenses (costs incurred once during establishment like purchasing equipment, furnishing offices, registration/legal fees, and IT setup) and Pre-Operational Costs (preparation expenses prior to launch like market research, product development, and branding). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 8,
        "question": "Fixed costs remain constant regardless of the level of production or sales.",
        "answer": "T",
        "explanation": "This statement is **True**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 9,
        "question": "Rent, salaries, and insurance premiums are examples of fixed costs.",
        "answer": "T",
        "explanation": "This statement is **True**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 10,
        "question": "Fixed costs increase directly every time production increases.",
        "answer": "F",
        "explanation": "This statement is **False**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 11,
        "question": "Utilities that do not fluctuate significantly with usage are treated as fixed costs.",
        "answer": "T",
        "explanation": "This statement is **True**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 12,
        "question": "Variable costs vary directly with the level of business activity or production.",
        "answer": "T",
        "explanation": "This statement is **True**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 13,
        "question": "Raw materials and shipping fees are examples of variable costs.",
        "answer": "T",
        "explanation": "This statement is **True**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 14,
        "question": "Shipping fees and sales commissions are examples of variable costs.",
        "answer": "T",
        "explanation": "This statement is **True**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 15,
        "question": "Raw materials are classified as fixed costs.",
        "answer": "F",
        "explanation": "This statement is **False**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 16,
        "question": "Advertising costs that scale with business growth are variable costs.",
        "answer": "T",
        "explanation": "This statement is **True**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 17,
        "question": "Variable costs stay exactly the same whether the business sells one unit or one million units.",
        "answer": "F",
        "explanation": "This statement is **False**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 18,
        "question": "Break-even analysis calculates the point at which total revenue equals total costs.",
        "answer": "T",
        "explanation": "This statement is **True**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 19,
        "question": "At the break-even point, the business generates no profit and no loss.",
        "answer": "T",
        "explanation": "This statement is **True**. A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment."
      },
      {
        "number": 20,
        "question": "Break-even analysis shows the minimum performance needed to avoid losing money.",
        "answer": "T",
        "explanation": "This statement is **True**. Break-even analysis calculates the point where total revenue equals total costs (no profit and no loss), representing the minimum performance needed to avoid losing money. Break-even units = Fixed Costs ÷ Profit per Unit (Unit Price - Variable Cost per Unit). Sales beyond this point generate profit."
      },
      {
        "number": 21,
        "question": "The break-even point in units equals variable cost divided by total sales.",
        "answer": "F",
        "explanation": "This statement is **False**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 22,
        "question": "Profit per unit equals the unit price minus the variable cost per unit.",
        "answer": "T",
        "explanation": "This statement is **True**. Break-even analysis calculates the point where total revenue equals total costs (no profit and no loss), representing the minimum performance needed to avoid losing money. Break-even units = Fixed Costs ÷ Profit per Unit (Unit Price - Variable Cost per Unit). Sales beyond this point generate profit."
      },
      {
        "number": 23,
        "question": "In the water bottle example (Fixed Cost $100,000, Variable Cost $5, Price $15), the break-even point is 10,000 units.",
        "answer": "T",
        "explanation": "This statement is **True**. Break-even analysis calculates the point where total revenue equals total costs (no profit and no loss), representing the minimum performance needed to avoid losing money. Break-even units = Fixed Costs ÷ Profit per Unit (Unit Price - Variable Cost per Unit). Sales beyond this point generate profit."
      },
      {
        "number": 24,
        "question": "Any sales beyond the break-even point add to the business's losses.",
        "answer": "F",
        "explanation": "This statement is **False**. Break-even analysis calculates the point where total revenue equals total costs (no profit and no loss), representing the minimum performance needed to avoid losing money. Break-even units = Fixed Costs ÷ Profit per Unit (Unit Price - Variable Cost per Unit). Sales beyond this point generate profit. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 25,
        "question": "Every funding source has its own advantages and risks.",
        "answer": "T",
        "explanation": "This statement is **True**. Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 26,
        "question": "The most suitable funding strategy depends on the business's stage, financial needs, and growth plans.",
        "answer": "T",
        "explanation": "This statement is **True**. Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 27,
        "question": "Using personal savings gives the entrepreneur full control and avoids equity dilution.",
        "answer": "T",
        "explanation": "This statement is **True**. Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 28,
        "question": "Personal savings require a long approval process before the funds can be used.",
        "answer": "F",
        "explanation": "This statement is **False**. Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 29,
        "question": "A main risk of using personal savings is the depletion of funds needed for emergencies.",
        "answer": "T",
        "explanation": "This statement is **True**. Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 30,
        "question": "Friends and family funding usually offers flexible repayment terms and lower interest rates.",
        "answer": "T",
        "explanation": "This statement is **True**. Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 31,
        "question": "It is unnecessary to formalize agreements when borrowing from friends and family.",
        "answer": "F",
        "explanation": "This statement is **False**. Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 32,
        "question": "Financial dealings with friends and family can strain personal relationships if the business struggles.",
        "answer": "T",
        "explanation": "This statement is **True**. Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 33,
        "question": "Angel investors provide capital to startups in exchange for equity ownership or convertible debt.",
        "answer": "T",
        "explanation": "This statement is **True**. Angel investors are high-net-worth individuals who invest their personal funds in early-stage startups in exchange for equity ownership (typically 10-30%) or convertible debt. They offer flexibility, mentorship, networks, and faster decisions than institutional investors."
      },
      {
        "number": 34,
        "question": "Angel investors are high-net-worth individuals who invest their personal funds.",
        "answer": "T",
        "explanation": "This statement is **True**. Angel investors are high-net-worth individuals who invest their personal funds in early-stage startups in exchange for equity ownership (typically 10-30%) or convertible debt. They offer flexibility, mentorship, networks, and faster decisions than institutional investors."
      },
      {
        "number": 35,
        "question": "Angel investors usually invest only in large, mature corporations.",
        "answer": "F",
        "explanation": "This statement is **False**. Angel investors are high-net-worth individuals who invest their personal funds in early-stage startups in exchange for equity ownership (typically 10-30%) or convertible debt. They offer flexibility, mentorship, networks, and faster decisions than institutional investors. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 36,
        "question": "Angel investors often provide mentorship and business networks in addition to money.",
        "answer": "T",
        "explanation": "This statement is **True**. Angel investors are high-net-worth individuals who invest their personal funds in early-stage startups in exchange for equity ownership (typically 10-30%) or convertible debt. They offer flexibility, mentorship, networks, and faster decisions than institutional investors."
      },
      {
        "number": 37,
        "question": "Angel investors are generally more flexible and risk-tolerant than traditional venture capitalists.",
        "answer": "T",
        "explanation": "This statement is **True**. Angel investors are high-net-worth individuals who invest their personal funds in early-stage startups in exchange for equity ownership (typically 10-30%) or convertible debt. They offer flexibility, mentorship, networks, and faster decisions than institutional investors."
      },
      {
        "number": 38,
        "question": "Venture capitalists manage pooled funds from firms, institutions, and wealthy individuals.",
        "answer": "T",
        "explanation": "This statement is **True**. Venture capitalists (VCs) are professional investors managing pooled institutional funds. They invest larger amounts ($1M-$100M) in high-growth, scalable startups in exchange for significant equity (typically 25-50%). They target tech/biotech and may replace management if targets are missed."
      },
      {
        "number": 39,
        "question": "Venture capitalists usually invest smaller amounts than angel investors.",
        "answer": "F",
        "explanation": "This statement is **False**. Venture capitalists (VCs) are professional investors managing pooled institutional funds. They invest larger amounts ($1M-$100M) in high-growth, scalable startups in exchange for significant equity (typically 25-50%). They target tech/biotech and may replace management if targets are missed. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 40,
        "question": "Venture capitalists seek companies with scalable business models.",
        "answer": "T",
        "explanation": "This statement is **True**. Venture capitalists (VCs) are professional investors managing pooled institutional funds. They invest larger amounts ($1M-$100M) in high-growth, scalable startups in exchange for significant equity (typically 25-50%). They target tech/biotech and may replace management if targets are missed."
      },
      {
        "number": 41,
        "question": "Venture capitalists usually target technology, biotech, and innovative sectors.",
        "answer": "T",
        "explanation": "This statement is **True**. Venture capitalists (VCs) are professional investors managing pooled institutional funds. They invest larger amounts ($1M-$100M) in high-growth, scalable startups in exchange for significant equity (typically 25-50%). They target tech/biotech and may replace management if targets are missed."
      },
      {
        "number": 42,
        "question": "Venture capitalists invest across multiple stages of growth, such as Series A, B, and C.",
        "answer": "T",
        "explanation": "This statement is **True**. Venture capitalists (VCs) are professional investors managing pooled institutional funds. They invest larger amounts ($1M-$100M) in high-growth, scalable startups in exchange for significant equity (typically 25-50%). They target tech/biotech and may replace management if targets are missed."
      },
      {
        "number": 43,
        "question": "A disadvantage of venture capital is that VCs may replace management if growth targets are not met.",
        "answer": "T",
        "explanation": "This statement is **True**. Venture capitalists (VCs) are professional investors managing pooled institutional funds. They invest larger amounts ($1M-$100M) in high-growth, scalable startups in exchange for significant equity (typically 25-50%). They target tech/biotech and may replace management if targets are missed."
      },
      {
        "number": 44,
        "question": "Crowdfunding raises small amounts of money from a large number of people, usually online.",
        "answer": "T",
        "explanation": "This statement is **True**. Crowdfunding raises small capital amounts from a large online crowd. In Reward-Based Crowdfunding (e.g. Kickstarter), backers receive non-financial rewards (products/services). In Equity Crowdfunding, backers receive company shares. It acts as both funding and market validation."
      },
      {
        "number": 45,
        "question": "In reward-based crowdfunding, backers receive shares of the company.",
        "answer": "F",
        "explanation": "This statement is **False**. Crowdfunding raises small capital amounts from a large online crowd. In Reward-Based Crowdfunding (e.g. Kickstarter), backers receive non-financial rewards (products/services). In Equity Crowdfunding, backers receive company shares. It acts as both funding and market validation. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 46,
        "question": "In equity crowdfunding, investors receive shares or equity in exchange for their contributions.",
        "answer": "T",
        "explanation": "This statement is **True**. Crowdfunding raises small capital amounts from a large online crowd. In Reward-Based Crowdfunding (e.g. Kickstarter), backers receive non-financial rewards (products/services). In Equity Crowdfunding, backers receive company shares. It acts as both funding and market validation."
      },
      {
        "number": 47,
        "question": "Crowdfunding can act as validation of a product's market potential.",
        "answer": "T",
        "explanation": "This statement is **True**. Crowdfunding raises small capital amounts from a large online crowd. In Reward-Based Crowdfunding (e.g. Kickstarter), backers receive non-financial rewards (products/services). In Equity Crowdfunding, backers receive company shares. It acts as both funding and market validation."
      },
      {
        "number": 48,
        "question": "Crowdfunding platforms never charge any fees to entrepreneurs.",
        "answer": "F",
        "explanation": "This statement is **False**. Crowdfunding raises small capital amounts from a large online crowd. In Reward-Based Crowdfunding (e.g. Kickstarter), backers receive non-financial rewards (products/services). In Equity Crowdfunding, backers receive company shares. It acts as both funding and market validation. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 49,
        "question": "A strong credit score is an important requirement for obtaining a bank loan.",
        "answer": "T",
        "explanation": "This statement is **True**. Bank loans require creditworthiness, collateral (property, inventory), and a business plan. They do not dilute equity, allowing the owner to retain full ownership, but repayments are mandatory regardless of business performance, posing a cash flow risk."
      },
      {
        "number": 50,
        "question": "Bank loans dilute the owner's equity in the business.",
        "answer": "F",
        "explanation": "This statement is **False**. Bank loans require creditworthiness, collateral (property, inventory), and a business plan. They do not dilute equity, allowing the owner to retain full ownership, but repayments are mandatory regardless of business performance, posing a cash flow risk. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 51,
        "question": "A disadvantage of bank loans is that they must be repaid regardless of business performance.",
        "answer": "T",
        "explanation": "This statement is **True**. Bank loans require creditworthiness, collateral (property, inventory), and a business plan. They do not dilute equity, allowing the owner to retain full ownership, but repayments are mandatory regardless of business performance, posing a cash flow risk."
      },
      {
        "number": 52,
        "question": "Grants are non-repayable funds.",
        "answer": "T",
        "explanation": "This statement is **True**. Grants are non-repayable funds awarded by governments, non-profits, or corporations. They provide credibility and carry no dilution/debt, but the application process is highly competitive, time-consuming, and governed by strict eligibility criteria."
      },
      {
        "number": 53,
        "question": "The grant application process is usually quick and easy.",
        "answer": "F",
        "explanation": "This statement is **False**. Grants are non-repayable funds awarded by governments, non-profits, or corporations. They provide credibility and carry no dilution/debt, but the application process is highly competitive, time-consuming, and governed by strict eligibility criteria. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 54,
        "question": "Receiving a grant can enhance a business's reputation and credibility.",
        "answer": "T",
        "explanation": "This statement is **True**. Financial projections estimate future performance (typically over 3-5 years) using: Income Statements (revenues and expenses over a timeframe), Balance Sheets (snapshot of assets, liabilities, and equity at a given point), and Cash Flow Statements (tracking cash inflows and outflows to ensure solvency)."
      },
      {
        "number": 55,
        "question": "Grants often have specific eligibility criteria related to industry, business size, and project objectives.",
        "answer": "T",
        "explanation": "This statement is **True**. Grants are non-repayable funds awarded by governments, non-profits, or corporations. They provide credibility and carry no dilution/debt, but the application process is highly competitive, time-consuming, and governed by strict eligibility criteria."
      }
    ],
    "mcq": [
      {
        "number": 1,
        "question": "One-time expenses are best described as:",
        "options": {
          "A": "Costs that recur every month",
          "B": "Costs incurred once during the establishment of the business",
          "C": "Costs that vary with production",
          "D": "Costs paid only after the business closes"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Costs incurred once during the establishment of the business). Startup costs are divided into: One-Time Expenses (costs incurred once during establishment like purchasing equipment, furnishing offices, registration/legal fees, and IT setup) and Pre-Operational Costs (preparation expenses prior to launch like market research, product development, and branding)."
      },
      {
        "number": 2,
        "question": "Which of the following is an example of a one-time expense?",
        "options": {
          "A": "Monthly rent",
          "B": "Sales commissions",
          "C": "Equipment purchase",
          "D": "Raw materials"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Equipment purchase). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 3,
        "question": "Setting up a website, purchasing software licenses, and building IT infrastructure are part of:",
        "options": {
          "A": "Technology setup (a one-time expense)",
          "B": "Variable costs",
          "C": "Sales promotion",
          "D": "Grants"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Technology setup (a one-time expense)). Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 4,
        "question": "Pre-operational costs are:",
        "options": {
          "A": "Costs tied to daily operations",
          "B": "Expenses for preparing the business for launch",
          "C": "Costs incurred only after bankruptcy",
          "D": "Loan repayments"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Expenses for preparing the business for launch). Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 5,
        "question": "Which of the following is an example of a pre-operational cost?",
        "options": {
          "A": "Market research",
          "B": "Monthly electricity bill",
          "C": "Employee salaries",
          "D": "Bank loan interest"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Market research). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 6,
        "question": "Fixed costs are:",
        "options": {
          "A": "Costs that vary with production",
          "B": "Costs that remain constant regardless of production or sales",
          "C": "Costs paid only once at startup",
          "D": "Costs of raw materials"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Costs that remain constant regardless of production or sales). Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 7,
        "question": "Which of the following is an example of a fixed cost?",
        "options": {
          "A": "Raw materials",
          "B": "Shipping fees",
          "C": "Rent",
          "D": "Sales commissions"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Rent). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 8,
        "question": "Variable costs are:",
        "options": {
          "A": "Costs that stay the same at all activity levels",
          "B": "Costs that vary directly with the level of business activity or production",
          "C": "Costs incurred once at startup",
          "D": "Costs of registering the business"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Costs that vary directly with the level of business activity or production). Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 9,
        "question": "Which of the following is an example of a variable cost?",
        "options": {
          "A": "Insurance premiums",
          "B": "Office rent",
          "C": "Shipping fees",
          "D": "The manager's fixed salary"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Shipping fees). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 10,
        "question": "Which is an example of a variable cost?",
        "options": {
          "A": "Office rent",
          "B": "Salaries",
          "C": "Raw materials",
          "D": "Insurance premiums"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Raw materials). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 11,
        "question": "Sales commissions paid to staff based on the volume of sales are an example of:",
        "options": {
          "A": "Fixed costs",
          "B": "Variable costs",
          "C": "One-time expenses",
          "D": "Pre-operational costs"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Variable costs). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 12,
        "question": "Advertising costs that scale with business growth are usually classified as:",
        "options": {
          "A": "Fixed costs",
          "B": "Variable costs",
          "C": "One-time expenses",
          "D": "Legal fees"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Variable costs). Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 13,
        "question": "Break-even analysis calculates the point at which:",
        "options": {
          "A": "Total revenue equals total costs",
          "B": "Profit is maximized",
          "C": "Variable costs equal fixed costs",
          "D": "The business closes down"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Total revenue equals total costs). Break-even analysis calculates the point where total revenue equals total costs (no profit and no loss), representing the minimum performance needed to avoid losing money. Break-even units = Fixed Costs ÷ Profit per Unit (Unit Price - Variable Cost per Unit). Sales beyond this point generate profit."
      },
      {
        "number": 14,
        "question": "At the break-even point, the business:",
        "options": {
          "A": "Makes maximum profit",
          "B": "Makes no profit and no loss",
          "C": "Always loses money",
          "D": "Pays no taxes"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Makes no profit and no loss). A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment."
      },
      {
        "number": 15,
        "question": "The break-even point in units is calculated as:",
        "options": {
          "A": "Fixed cost / profit per unit",
          "B": "Variable cost / fixed cost",
          "C": "Unit price x sales",
          "D": "Total revenue - total cost"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Fixed cost / profit per unit). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 16,
        "question": "Profit per unit is calculated as:",
        "options": {
          "A": "Fixed cost minus variable cost",
          "B": "Unit price minus variable cost per unit",
          "C": "Total sales minus total revenue",
          "D": "Unit price plus fixed cost"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Unit price minus variable cost per unit). Break-even analysis calculates the point where total revenue equals total costs (no profit and no loss), representing the minimum performance needed to avoid losing money. Break-even units = Fixed Costs ÷ Profit per Unit (Unit Price - Variable Cost per Unit). Sales beyond this point generate profit."
      },
      {
        "number": 17,
        "question": "A startup has Fixed Costs of $100,000, a Variable Cost per Unit of $5, and a Price per Unit of $15. The break-even point in units is:",
        "options": {
          "A": "5,000 units",
          "B": "6,667 units",
          "C": "10,000 units",
          "D": "20,000 units"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (10,000 units). Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      },
      {
        "number": 18,
        "question": "Using the same example (break-even at 10,000 units sold at $15 each), the break-even in sales dollars is:",
        "options": {
          "A": "$50,000",
          "B": "$100,000",
          "C": "$150,000",
          "D": "$200,000"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** ($150,000). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 19,
        "question": "The choice of the most suitable funding strategy depends mainly on:",
        "options": {
          "A": "The color of the company logo",
          "B": "The business's stage, financial needs, and growth plans",
          "C": "The number of competitors only",
          "D": "The office location only"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (The business's stage, financial needs, and growth plans). Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 20,
        "question": "Which of the following is NOT one of the funding sources covered in the lecture?",
        "options": {
          "A": "Personal savings",
          "B": "Angel investors",
          "C": "Stock market dividends",
          "D": "Crowdfunding platforms"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Stock market dividends). Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 21,
        "question": "A key advantage of using personal savings is:",
        "options": {
          "A": "Full control with no equity dilution",
          "B": "Guaranteed government support",
          "C": "Unlimited funding",
          "D": "No personal financial risk"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Full control with no equity dilution). Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 22,
        "question": "A key risk of using personal savings is:",
        "options": {
          "A": "Loss of full ownership",
          "B": "High interest payments",
          "C": "Depletion of funds needed for emergencies",
          "D": "Strict approval cycles"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Depletion of funds needed for emergencies). Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 23,
        "question": "Personal savings provide:",
        "options": {
          "A": "Slow access after long approval",
          "B": "Quick access without lengthy approval processes",
          "C": "Equity to outside investors",
          "D": "Mandatory repayment with interest"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Quick access without lengthy approval processes). Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 24,
        "question": "Friends and family funding is best described as:",
        "options": {
          "A": "Funding from professional investment firms",
          "B": "Financial support from one's close social network",
          "C": "A government grant",
          "D": "A bank loan with collateral"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Financial support from one's close social network). Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 25,
        "question": "A key advantage of friends and family funding is:",
        "options": {
          "A": "Strict formal terms",
          "B": "High interest rates",
          "C": "Long approval cycles",
          "D": "Flexible terms"
        },
        "answer": "D",
        "explanation": "The correct answer is **D** (Flexible terms). Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 26,
        "question": "Besides money, friends and family often provide:",
        "options": {
          "A": "Strict legal contracts",
          "B": "Emotional support and encouragement",
          "C": "Large institutional funding",
          "D": "Government grants"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Emotional support and encouragement). Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 27,
        "question": "A key risk of friends and family funding is:",
        "options": {
          "A": "Loss of all company equity",
          "B": "Potential strain on personal relationships",
          "C": "Mandatory public disclosure",
          "D": "Government auditing"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Potential strain on personal relationships). Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 28,
        "question": "Angel investors provide capital in exchange for:",
        "options": {
          "A": "Equity ownership or convertible debt",
          "B": "A fixed monthly salary",
          "C": "Government tax credits",
          "D": "Free advertising"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Equity ownership or convertible debt). Angel investors are high-net-worth individuals who invest their personal funds in early-stage startups in exchange for equity ownership (typically 10-30%) or convertible debt. They offer flexibility, mentorship, networks, and faster decisions than institutional investors."
      },
      {
        "number": 29,
        "question": "Angel investors are best described as:",
        "options": {
          "A": "High-net-worth individuals",
          "B": "Bank lenders",
          "C": "Institutional firms",
          "D": "Government agencies"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (High-net-worth individuals). Angel investors are high-net-worth individuals who invest their personal funds in early-stage startups in exchange for equity ownership (typically 10-30%) or convertible debt. They offer flexibility, mentorship, networks, and faster decisions than institutional investors."
      },
      {
        "number": 30,
        "question": "Angel investors typically invest amounts in the range of:",
        "options": {
          "A": "$1-$100 million",
          "B": "$25,000 to $500,000",
          "C": "Under $100",
          "D": "Over $1 billion"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** ($25,000 to $500,000). Angel investors are high-net-worth individuals who invest their personal funds in early-stage startups in exchange for equity ownership (typically 10-30%) or convertible debt. They offer flexibility, mentorship, networks, and faster decisions than institutional investors."
      },
      {
        "number": 31,
        "question": "Angel investors usually invest in:",
        "options": {
          "A": "Only large public corporations",
          "B": "Early-stage or startup companies",
          "C": "Companies profitable for at least ten years",
          "D": "Real estate only"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Early-stage or startup companies). Angel investors are high-net-worth individuals who invest their personal funds in early-stage startups in exchange for equity ownership (typically 10-30%) or convertible debt. They offer flexibility, mentorship, networks, and faster decisions than institutional investors."
      },
      {
        "number": 32,
        "question": "A typical equity stake taken by angel investors is around:",
        "options": {
          "A": "0%",
          "B": "10-30%",
          "C": "60-80%",
          "D": "100%"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (10-30%). Angel investors are high-net-worth individuals who invest their personal funds in early-stage startups in exchange for equity ownership (typically 10-30%) or convertible debt. They offer flexibility, mentorship, networks, and faster decisions than institutional investors."
      },
      {
        "number": 33,
        "question": "Compared to traditional venture capitalists, angel investors are usually:",
        "options": {
          "A": "More flexible and risk-tolerant",
          "B": "Slower in decision-making",
          "C": "More formal and institutional",
          "D": "Larger in investment size"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (More flexible and risk-tolerant). Angel investors are high-net-worth individuals who invest their personal funds in early-stage startups in exchange for equity ownership (typically 10-30%) or convertible debt. They offer flexibility, mentorship, networks, and faster decisions than institutional investors."
      },
      {
        "number": 34,
        "question": "Venture capitalists are best described as:",
        "options": {
          "A": "Individual investors using personal savings",
          "B": "Professional investors who manage pooled funds",
          "C": "Government grant agencies",
          "D": "Friends and family members"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Professional investors who manage pooled funds). Venture capitalists (VCs) are professional investors managing pooled institutional funds. They invest larger amounts ($1M-$100M) in high-growth, scalable startups in exchange for significant equity (typically 25-50%). They target tech/biotech and may replace management if targets are missed."
      },
      {
        "number": 35,
        "question": "Venture capitalists usually invest in companies at:",
        "options": {
          "A": "The closing stage",
          "B": "Multiple growth stages",
          "C": "Idea stage only",
          "D": "After bankruptcy"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Multiple growth stages). Venture capitalists (VCs) are professional investors managing pooled institutional funds. They invest larger amounts ($1M-$100M) in high-growth, scalable startups in exchange for significant equity (typically 25-50%). They target tech/biotech and may replace management if targets are missed."
      },
      {
        "number": 36,
        "question": "Venture capitalists typically invest:",
        "options": {
          "A": "Smaller amounts than angel investors",
          "B": "Larger amounts (around $1-$100 million)",
          "C": "Only non-repayable grants",
          "D": "Nothing until bankruptcy"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Larger amounts (around $1-$100 million)). Venture capitalists (VCs) are professional investors managing pooled institutional funds. They invest larger amounts ($1M-$100M) in high-growth, scalable startups in exchange for significant equity (typically 25-50%). They target tech/biotech and may replace management if targets are missed."
      },
      {
        "number": 37,
        "question": "Venture capitalists usually look for companies that:",
        "options": {
          "A": "Have no growth potential",
          "B": "Have scalable business models",
          "C": "Avoid technology sectors",
          "D": "Are about to close"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Have scalable business models). Venture capitalists (VCs) are professional investors managing pooled institutional funds. They invest larger amounts ($1M-$100M) in high-growth, scalable startups in exchange for significant equity (typically 25-50%). They target tech/biotech and may replace management if targets are missed."
      },
      {
        "number": 38,
        "question": "Venture capitalists usually demand an equity stake of around:",
        "options": {
          "A": "0-5%",
          "B": "10-15%",
          "C": "25-50%",
          "D": "90-100%"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (25-50%). Venture capitalists (VCs) are professional investors managing pooled institutional funds. They invest larger amounts ($1M-$100M) in high-growth, scalable startups in exchange for significant equity (typically 25-50%). They target tech/biotech and may replace management if targets are missed."
      },
      {
        "number": 39,
        "question": "A disadvantage of venture capital funding is:",
        "options": {
          "A": "No access to business networks",
          "B": "Potential loss of founder control",
          "C": "Lack of any funding",
          "D": "No performance expectations"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Potential loss of founder control). Venture capitalists (VCs) are professional investors managing pooled institutional funds. They invest larger amounts ($1M-$100M) in high-growth, scalable startups in exchange for significant equity (typically 25-50%). They target tech/biotech and may replace management if targets are missed."
      },
      {
        "number": 40,
        "question": "Which statement correctly compares angel investors and venture capitalists?",
        "options": {
          "A": "Angels invest pooled institutional funds; VCs invest personal funds",
          "B": "Angels usually take 10-30% equity; VCs usually take 25-50% equity",
          "C": "Angels focus only on large corporations; VCs focus only on startups",
          "D": "Angels always invest more money than VCs"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Angels usually take 10-30% equity; VCs usually take 25-50% equity). Angel investors are high-net-worth individuals who invest their personal funds in early-stage startups in exchange for equity ownership (typically 10-30%) or convertible debt. They offer flexibility, mentorship, networks, and faster decisions than institutional investors."
      },
      {
        "number": 41,
        "question": "Compared with angel investors, venture capitalists usually have:",
        "options": {
          "A": "A more extensive due diligence process",
          "B": "Less formal decision-making",
          "C": "Smaller investment amounts",
          "D": "No interest in financial returns"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (A more extensive due diligence process). Venture capitalists (VCs) are professional investors managing pooled institutional funds. They invest larger amounts ($1M-$100M) in high-growth, scalable startups in exchange for significant equity (typically 25-50%). They target tech/biotech and may replace management if targets are missed."
      },
      {
        "number": 42,
        "question": "Crowdfunding is best described as:",
        "options": {
          "A": "Raising small amounts of money from a large number of people online",
          "B": "A single large bank loan",
          "C": "A government grant program",
          "D": "Personal savings from one founder"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Raising small amounts of money from a large number of people online). Crowdfunding raises small capital amounts from a large online crowd. In Reward-Based Crowdfunding (e.g. Kickstarter), backers receive non-financial rewards (products/services). In Equity Crowdfunding, backers receive company shares. It acts as both funding and market validation."
      },
      {
        "number": 43,
        "question": "In reward-based crowdfunding, backers receive:",
        "options": {
          "A": "Company shares",
          "B": "Non-financial rewards such as products or services",
          "C": "A fixed interest payment",
          "D": "Equity ownership"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Non-financial rewards such as products or services). Crowdfunding raises small capital amounts from a large online crowd. In Reward-Based Crowdfunding (e.g. Kickstarter), backers receive non-financial rewards (products/services). In Equity Crowdfunding, backers receive company shares. It acts as both funding and market validation."
      },
      {
        "number": 44,
        "question": "In equity crowdfunding, contributors receive:",
        "options": {
          "A": "Non-financial rewards only",
          "B": "Shares or equity in the company",
          "C": "A repayable loan",
          "D": "A government certificate"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Shares or equity in the company). Crowdfunding raises small capital amounts from a large online crowd. In Reward-Based Crowdfunding (e.g. Kickstarter), backers receive non-financial rewards (products/services). In Equity Crowdfunding, backers receive company shares. It acts as both funding and market validation."
      },
      {
        "number": 45,
        "question": "Which of the following is a reward-based crowdfunding platform mentioned in the lecture?",
        "options": {
          "A": "SeedInvest",
          "B": "Crowdcube",
          "C": "Kickstarter",
          "D": "Republic"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Kickstarter). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 46,
        "question": "A key advantage of crowdfunding is that it:",
        "options": {
          "A": "Guarantees the funding goal is always met",
          "B": "Provides funding and validates market potential",
          "C": "Requires no marketing effort",
          "D": "Charges no platform fees"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Provides funding and validates market potential). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 47,
        "question": "A common disadvantage of crowdfunding is:",
        "options": {
          "A": "No public exposure at all",
          "B": "High competition for attention and platform fees",
          "C": "Guaranteed success",
          "D": "Complete loss of the product idea"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (High competition for attention and platform fees). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 48,
        "question": "In addition to creditworthiness, banks usually require which of the following to grant a loan?",
        "options": {
          "A": "A comprehensive business plan",
          "B": "A large social media following",
          "C": "Company equity",
          "D": "A celebrity endorsement"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (A comprehensive business plan). Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 49,
        "question": "A key requirement for obtaining a bank loan is:",
        "options": {
          "A": "Friends in management",
          "B": "Strong credit scores",
          "C": "Social media followers",
          "D": "Government approval"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Strong credit scores). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 50,
        "question": "Collateral for a bank loan may include:",
        "options": {
          "A": "Property, equipment, or inventory",
          "B": "Customer feedback",
          "C": "Marketing slogans",
          "D": "Social media posts"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Property, equipment, or inventory). Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 51,
        "question": "A key advantage of bank loans is:",
        "options": {
          "A": "Equity dilution",
          "B": "Retained ownership (no equity given up)",
          "C": "No repayment needed",
          "D": "Guaranteed business success"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Retained ownership (no equity given up)). Bank loans require creditworthiness, collateral (property, inventory), and a business plan. They do not dilute equity, allowing the owner to retain full ownership, but repayments are mandatory regardless of business performance, posing a cash flow risk."
      },
      {
        "number": 52,
        "question": "A key disadvantage of bank loans is:",
        "options": {
          "A": "Loans must be repaid regardless of business performance",
          "B": "Loss of all ownership",
          "C": "No fixed repayment schedule",
          "D": "They are always interest-free"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Loans must be repaid regardless of business performance). Bank loans require creditworthiness, collateral (property, inventory), and a business plan. They do not dilute equity, allowing the owner to retain full ownership, but repayments are mandatory regardless of business performance, posing a cash flow risk."
      },
      {
        "number": 53,
        "question": "Besides funding, receiving a grant can give a business:",
        "options": {
          "A": "Mandatory debt",
          "B": "Prestige and credibility",
          "C": "Loss of ownership",
          "D": "Higher interest rates"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Prestige and credibility). A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment."
      },
      {
        "number": 54,
        "question": "A key benefit of grants is that they are:",
        "options": {
          "A": "Equity-based",
          "B": "Repayable with interest",
          "C": "Non-repayable funds",
          "D": "Always automatic"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Non-repayable funds). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 55,
        "question": "Which of the following is a source of grants mentioned in the lecture?",
        "options": {
          "A": "Government agencies",
          "B": "Angel investors",
          "C": "Crowdfunding backers",
          "D": "Personal savings"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Government agencies). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 56,
        "question": "A key consideration when applying for grants is that the application process is:",
        "options": {
          "A": "Quick and effortless",
          "B": "Competitive and time-consuming",
          "C": "Always guaranteed to succeed",
          "D": "Free of any eligibility criteria"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Competitive and time-consuming). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      }
    ]
  },
  {
    "id": 3,
    "title": "Understanding Incubators and Accelerators",
    "tf": [
      {
        "number": 1,
        "question": "Incubators are organizations designed to nurture the early stages of startups.",
        "answer": "T",
        "explanation": "This statement is **True**. Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 2,
        "question": "One goal of incubators is to help entrepreneurs refine their business models.",
        "answer": "T",
        "explanation": "This statement is **True**. Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 3,
        "question": "Incubators discourage knowledge sharing among startups.",
        "answer": "F",
        "explanation": "This statement is **False**. Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 4,
        "question": "Incubators help transform ideas into market-ready products or services.",
        "answer": "T",
        "explanation": "This statement is **True**. Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 5,
        "question": "Fostering a collaborative environment is one of the goals of incubators.",
        "answer": "T",
        "explanation": "This statement is **True**. Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 6,
        "question": "Accelerators are short-term, high-intensity programs.",
        "answer": "T",
        "explanation": "This statement is **True**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 7,
        "question": "Accelerators are designed for startups that already have a validated product or service.",
        "answer": "T",
        "explanation": "This statement is **True**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 8,
        "question": "Accelerators are designed mainly for startups that do not yet have a validated product or service.",
        "answer": "F",
        "explanation": "This statement is **False**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 9,
        "question": "A goal of accelerators is to help startups scale quickly over a short timeframe.",
        "answer": "T",
        "explanation": "This statement is **True**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 10,
        "question": "Investment preparation in accelerators often culminates in a demo day.",
        "answer": "T",
        "explanation": "This statement is **True**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 11,
        "question": "Accelerators focus only on idea-stage startups that have no product yet.",
        "answer": "F",
        "explanation": "This statement is **False**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 12,
        "question": "Accelerators usually run for a short term of about 3 to 6 months.",
        "answer": "T",
        "explanation": "This statement is **True**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 13,
        "question": "Incubators provide long-term support, typically 6 months to several years.",
        "answer": "T",
        "explanation": "This statement is **True**. Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 14,
        "question": "Incubators focus on early-stage idea development, while accelerators focus on growth-stage startups.",
        "answer": "T",
        "explanation": "This statement is **True**. Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 15,
        "question": "Incubators usually take a large equity stake of 50% or more in exchange for support.",
        "answer": "F",
        "explanation": "This statement is **False**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 16,
        "question": "Incubators provide seed funding, while accelerators usually provide only workspace.",
        "answer": "F",
        "explanation": "This statement is **False**. Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 17,
        "question": "Incubator programs tend to have flexible timelines, while accelerator programs are structured and milestone-driven.",
        "answer": "T",
        "explanation": "This statement is **True**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 18,
        "question": "Accelerator programs have open-ended timelines with no defined milestones.",
        "answer": "F",
        "explanation": "This statement is **False**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 19,
        "question": "The primary goal of an incubator is to refine ideas and prepare startups for market entry.",
        "answer": "T",
        "explanation": "This statement is **True**. Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 20,
        "question": "The primary goal of an incubator is to scale startups quickly and secure investor funding.",
        "answer": "F",
        "explanation": "This statement is **False**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 21,
        "question": "The primary goal of an accelerator is to scale startups quickly and secure funding.",
        "answer": "T",
        "explanation": "This statement is **True**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 22,
        "question": "Research and selection is the final step in the application process.",
        "answer": "F",
        "explanation": "This statement is **False**. Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 23,
        "question": "A pitch deck is typically a concise presentation of about 10 to 15 slides.",
        "answer": "T",
        "explanation": "This statement is **True**. Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 24,
        "question": "The executive summary is a brief overview that summarizes the business plan and pitch deck.",
        "answer": "T",
        "explanation": "This statement is **True**. Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 25,
        "question": "The executive summary is a long and detailed section that includes every operational detail of the business.",
        "answer": "F",
        "explanation": "This statement is **False**. Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 26,
        "question": "Equity dilution is one of the common challenges startups face in incubation and acceleration programs.",
        "answer": "T",
        "explanation": "This statement is **True**. Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 27,
        "question": "Market research data supports an applicant's understanding of the target market and competitors.",
        "answer": "T",
        "explanation": "This statement is **True**. Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 28,
        "question": "Shortlisted applicants may be invited for interviews or presentations.",
        "answer": "T",
        "explanation": "This statement is **True**. Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 29,
        "question": "The application process never requires submitting any documents online.",
        "answer": "F",
        "explanation": "This statement is **False**. Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 30,
        "question": "GESR Incubator was launched by Misr El-Kheir Foundation.",
        "answer": "T",
        "explanation": "This statement is **True**. Prominent programs in Egypt include: Nahdet El Mahrousa (supports social enterprises), GESR Incubator (by Misr El-Kheir for food/water/health/energy innovation), TIEC (ICT government initiative), Flat6Labs (leading regional seed accelerator), NilePreneurs/Rowad El Nile (C CBE initiative), Falak Startups (backed by the Sovereign Fund), and Dragon Business Incubator (by E-JUST, engineering/tech)."
      },
      {
        "number": 31,
        "question": "The Technology Innovation and Entrepreneurship Center (TIEC) supports the ICT sector.",
        "answer": "T",
        "explanation": "This statement is **True**. Prominent programs in Egypt include: Nahdet El Mahrousa (supports social enterprises), GESR Incubator (by Misr El-Kheir for food/water/health/energy innovation), TIEC (ICT government initiative), Flat6Labs (leading regional seed accelerator), NilePreneurs/Rowad El Nile (C CBE initiative), Falak Startups (backed by the Sovereign Fund), and Dragon Business Incubator (by E-JUST, engineering/tech)."
      },
      {
        "number": 32,
        "question": "The Technology Innovation and Entrepreneurship Center (TIEC) is a private initiative focused on the industrial sector.",
        "answer": "F",
        "explanation": "This statement is **False**. Prominent programs in Egypt include: Nahdet El Mahrousa (supports social enterprises), GESR Incubator (by Misr El-Kheir for food/water/health/energy innovation), TIEC (ICT government initiative), Flat6Labs (leading regional seed accelerator), NilePreneurs/Rowad El Nile (C CBE initiative), Falak Startups (backed by the Sovereign Fund), and Dragon Business Incubator (by E-JUST, engineering/tech). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 33,
        "question": "Dragon Business Incubator is operated by Cairo University.",
        "answer": "F",
        "explanation": "This statement is **False**. Prominent programs in Egypt include: Nahdet El Mahrousa (supports social enterprises), GESR Incubator (by Misr El-Kheir for food/water/health/energy innovation), TIEC (ICT government initiative), Flat6Labs (leading regional seed accelerator), NilePreneurs/Rowad El Nile (C CBE initiative), Falak Startups (backed by the Sovereign Fund), and Dragon Business Incubator (by E-JUST, engineering/tech). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 34,
        "question": "Flat6Labs is one of the leading startup accelerators in the Middle East.",
        "answer": "T",
        "explanation": "This statement is **True**. Prominent programs in Egypt include: Nahdet El Mahrousa (supports social enterprises), GESR Incubator (by Misr El-Kheir for food/water/health/energy innovation), TIEC (ICT government initiative), Flat6Labs (leading regional seed accelerator), NilePreneurs/Rowad El Nile (C CBE initiative), Falak Startups (backed by the Sovereign Fund), and Dragon Business Incubator (by E-JUST, engineering/tech)."
      },
      {
        "number": 35,
        "question": "Rowad El Nile (NilePreneurs) was launched by the Central Bank of Egypt.",
        "answer": "T",
        "explanation": "This statement is **True**. Prominent programs in Egypt include: Nahdet El Mahrousa (supports social enterprises), GESR Incubator (by Misr El-Kheir for food/water/health/energy innovation), TIEC (ICT government initiative), Flat6Labs (leading regional seed accelerator), NilePreneurs/Rowad El Nile (C CBE initiative), Falak Startups (backed by the Sovereign Fund), and Dragon Business Incubator (by E-JUST, engineering/tech)."
      },
      {
        "number": 36,
        "question": "Industry alignment and stage fit are important criteria when choosing a program.",
        "answer": "T",
        "explanation": "This statement is **True**. Key criteria for choosing a program include: Industry Alignment (program matches sector), Stage Fit (matches concept vs growth stage), Support Scale, Mentor/Investor Network strength, Track Record, and Equity Required in exchange for support."
      }
    ],
    "mcq": [
      {
        "number": 1,
        "question": "Incubators are best described as:",
        "options": {
          "A": "Short-term, high-intensity programs",
          "B": "Organizations that nurture early-stage startups",
          "C": "Banks that provide loans",
          "D": "Government tax agencies"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Organizations that nurture early-stage startups). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 2,
        "question": "Which of the following is a goal of incubators?",
        "options": {
          "A": "Refine business models",
          "B": "Demand large equity stakes",
          "C": "Replace the founding team",
          "D": "Provide bank loans only"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Refine business models). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 3,
        "question": "Incubators help startups by:",
        "options": {
          "A": "Taking full ownership of the company",
          "B": "Providing a collaborative environment and knowledge sharing",
          "C": "Avoiding any mentorship",
          "D": "Focusing only on financial returns"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Providing a collaborative environment and knowledge sharing). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 4,
        "question": "The stage focus of incubators is mainly:",
        "options": {
          "A": "Growth-stage companies",
          "B": "Early-stage idea development",
          "C": "Public companies",
          "D": "Bankrupt companies"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Early-stage idea development). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 5,
        "question": "Equipping startups with tools, knowledge, and strategies to enter or expand in the market is the accelerator goal called:",
        "options": {
          "A": "Market Readiness",
          "B": "Equity Dilution",
          "C": "Tax Filing",
          "D": "Cost Cutting"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Market Readiness). Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 6,
        "question": "Which of the following best describes accelerators?",
        "options": {
          "A": "Long-term programs for ideas in concept stage only",
          "B": "Government grants given to all small businesses",
          "C": "Banks providing commercial loans",
          "D": "Short-term, high-intensity programs a validated product or service"
        },
        "answer": "D",
        "explanation": "The correct answer is **D** (Short-term, high-intensity programs a validated product or service). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 7,
        "question": "A key goal of accelerators is:",
        "options": {
          "A": "Slowing down business growth",
          "B": "Rapid business growth over a short timeframe",
          "C": "Avoiding investors",
          "D": "Removing mentorship"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Rapid business growth over a short timeframe). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 8,
        "question": "In accelerators, investment preparation often culminates in:",
        "options": {
          "A": "A demo day",
          "B": "A tax audit",
          "C": "A bankruptcy filing",
          "D": "A product recall"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (A demo day). Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 9,
        "question": "The typical duration of an accelerator program is:",
        "options": {
          "A": "6 months to several years",
          "B": "About 3 to 6 months",
          "C": "Exactly 10 years",
          "D": "One week"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (About 3 to 6 months). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 10,
        "question": "Compared with incubators, accelerators usually:",
        "options": {
          "A": "Take no equity at all",
          "B": "Take equity in exchange for funding and resources",
          "C": "Avoid mentorship",
          "D": "Focus on idea-stage startups"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Take equity in exchange for funding and resources). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 11,
        "question": "Which program usually offers seed funding as part of its support?",
        "options": {
          "A": "Incubators",
          "B": "Accelerators",
          "C": "Neither of them",
          "D": "Commercial banks only"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Accelerators). Funding sources include: Personal Savings (retains full control, avoids dilution/debt, but carries personal financial risk), Friends and Family (accessible, flexible, but risks straining personal relationships if agreements are not formalized), and other external capital."
      },
      {
        "number": 12,
        "question": "Which program usually takes minimal or no equity?",
        "options": {
          "A": "Accelerators",
          "B": "Incubators",
          "C": "Venture capitalists",
          "D": "Angel investors"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Incubators). Loyalty programs reward repeat customers. Examples include Point Systems (earning points redeemable for rewards), Tiered Rewards (achieving status levels like Bronze, Silver, Gold to unlock higher perks), and paid Membership Programs."
      },
      {
        "number": 13,
        "question": "Incubator programs are best described as having:",
        "options": {
          "A": "Structured, milestone-driven timelines",
          "B": "Flexible timelines with ongoing support",
          "C": "No support at all",
          "D": "Fixed one-week schedules"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Flexible timelines with ongoing support). Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 14,
        "question": "The outcome of an incubator program is mainly to:",
        "options": {
          "A": "Drive rapid scaling and funding rounds",
          "B": "Prepare startups for market readiness by refining business models",
          "C": "File the company's taxes",
          "D": "Replace the management team"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Prepare startups for market readiness by refining business models). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 15,
        "question": "The primary goal of an accelerator is to:",
        "options": {
          "A": "Refine early ideas only",
          "B": "Scale startups quickly and secure funding",
          "C": "Provide free office space for years",
          "D": "Avoid investors"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Scale startups quickly and secure funding). Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 16,
        "question": "Which statement correctly compares incubators and accelerators?",
        "options": {
          "A": "Incubators are short-term; accelerators are long-term",
          "B": "Incubators focus on early-stage ideas; accelerators focus on growth-stage startups",
          "C": "Incubators always take more equity than accelerators",
          "D": "Accelerators never provide funding"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Incubators focus on early-stage ideas; accelerators focus on growth-stage startups). Startup costs are divided into: One-Time Expenses (costs incurred once during establishment like purchasing equipment, furnishing offices, registration/legal fees, and IT setup) and Pre-Operational Costs (preparation expenses prior to launch like market research, product development, and branding)."
      },
      {
        "number": 17,
        "question": "What is the FIRST step in applying to incubators and accelerators?",
        "options": {
          "A": "Research and Selection",
          "B": "Signing the equity contract",
          "C": "Closing the existing business",
          "D": "Hiring one hundred employees"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Research and Selection). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 18,
        "question": "When submitting documents to a program, applicants should:",
        "options": {
          "A": "Use any random format and size",
          "B": "Ensure files are in the specified format and size limits",
          "C": "Avoid uploading anything",
          "D": "Submit only photos"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Ensure files are in the specified format and size limits). Accelerators are highly structured, short-term (3-6 months), milestone-driven programs designed to fast-track growth-stage startups that already have a validated product. They provide seed funding, intensive mentorship, and investor networks, usually taking equity in exchange, culminating in a demo day."
      },
      {
        "number": 19,
        "question": "A pitch deck is best described as:",
        "options": {
          "A": "A long legal contract",
          "B": "A concise presentation (typically 10-15 slides) of the business idea",
          "C": "A balance sheet",
          "D": "A tax return"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (A concise presentation (typically 10-15 slides) of the business idea). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 20,
        "question": "The executive summary is:",
        "options": {
          "A": "A brief overview summarizing the business plan and pitch deck",
          "B": "A detailed list of every daily task",
          "C": "A marketing slogan",
          "D": "A product prototype"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (A brief overview summarizing the business plan and pitch deck). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 21,
        "question": "Which document outlines a startup's objectives, strategies, market analysis, financial projections, and operational plans?",
        "options": {
          "A": "Pitch deck",
          "B": "Founders' resumes",
          "C": "Prototype description",
          "D": "Business plan"
        },
        "answer": "D",
        "explanation": "The correct answer is **D** (Business plan). Financial projections estimate future performance (typically over 3-5 years) using: Income Statements (revenues and expenses over a timeframe), Balance Sheets (snapshot of assets, liabilities, and equity at a given point), and Cash Flow Statements (tracking cash inflows and outflows to ensure solvency)."
      },
      {
        "number": 22,
        "question": "Financial statements requested in an application may include:",
        "options": {
          "A": "Income statements, balance sheets, and cash flow statements",
          "B": "Marketing slogans",
          "C": "Product photos only",
          "D": "Customer passwords"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Income statements, balance sheets, and cash flow statements). Financial projections estimate future performance (typically over 3-5 years) using: Income Statements (revenues and expenses over a timeframe), Balance Sheets (snapshot of assets, liabilities, and equity at a given point), and Cash Flow Statements (tracking cash inflows and outflows to ensure solvency)."
      },
      {
        "number": 23,
        "question": "Which of the following is commonly requested when applying to a program?",
        "options": {
          "A": "Founders' resumes",
          "B": "The founders' personal medical records",
          "C": "Competitors' passwords",
          "D": "Family photos"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Founders' resumes). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 24,
        "question": "During the application process, shortlisted candidates may be asked to:",
        "options": {
          "A": "Attend interviews or present their business idea",
          "B": "Pay a large fixed salary",
          "C": "Close their business",
          "D": "Avoid contact with the program"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Attend interviews or present their business idea). The 4 Ps represent the foundational elements of the marketing mix: Product (the goods or services offered to meet a need), Price (the amount customers pay), Place (the distribution channels), and Promotion (activities like advertising, PR, and sales promotion that communicate value)."
      },
      {
        "number": 25,
        "question": "Understanding application cycles means:",
        "options": {
          "A": "Ignoring all deadlines",
          "B": "Being aware of specific application periods and deadlines",
          "C": "Applying only after the program ends",
          "D": "Submitting without any documents"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Being aware of specific application periods and deadlines). Targeting is the process of evaluating and selecting which market segments to serve. Strategies include concentrated targeting (focusing on a single niche), differentiated targeting (serving multiple segments with different offers), and undifferentiated targeting (serving the mass market with a single offer)."
      },
      {
        "number": 26,
        "question": "The Technology Innovation and Entrepreneurship Center (TIEC) focus on which sector?",
        "options": {
          "A": "Tourism",
          "B": "Agriculture",
          "C": "Information Technology",
          "D": "Heavy industry"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Information Technology). Prominent programs in Egypt include: Nahdet El Mahrousa (supports social enterprises), GESR Incubator (by Misr El-Kheir for food/water/health/energy innovation), TIEC (ICT government initiative), Flat6Labs (leading regional seed accelerator), NilePreneurs/Rowad El Nile (C CBE initiative), Falak Startups (backed by the Sovereign Fund), and Dragon Business Incubator (by E-JUST, engineering/tech)."
      },
      {
        "number": 27,
        "question": "Which Egyptian program focuses on supporting innovative social enterprises?",
        "options": {
          "A": "Nahdet El Mahrousa",
          "B": "Flat6Labs",
          "C": "TIEC",
          "D": "Falak Startups"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Nahdet El Mahrousa). Loyalty programs reward repeat customers. Examples include Point Systems (earning points redeemable for rewards), Tiered Rewards (achieving status levels like Bronze, Silver, Gold to unlock higher perks), and paid Membership Programs."
      },
      {
        "number": 28,
        "question": "GESR Incubator was launched by:",
        "options": {
          "A": "Misr El-Kheir Foundation",
          "B": "The Central Bank of Egypt",
          "C": "The American University in Cairo",
          "D": "Egypt's Sovereign Fund"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Misr El-Kheir Foundation). Prominent programs in Egypt include: Nahdet El Mahrousa (supports social enterprises), GESR Incubator (by Misr El-Kheir for food/water/health/energy innovation), TIEC (ICT government initiative), Flat6Labs (leading regional seed accelerator), NilePreneurs/Rowad El Nile (C CBE initiative), Falak Startups (backed by the Sovereign Fund), and Dragon Business Incubator (by E-JUST, engineering/tech)."
      },
      {
        "number": 29,
        "question": "Dragon Business Incubator is operated by:",
        "options": {
          "A": "Cairo University",
          "B": "The Egypt-Japan University of Science and Technology (E-JUST)",
          "C": "The Central Bank of Egypt",
          "D": "Misr El-Kheir Foundation"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (The Egypt-Japan University of Science and Technology (E-JUST)). Prominent programs in Egypt include: Nahdet El Mahrousa (supports social enterprises), GESR Incubator (by Misr El-Kheir for food/water/health/energy innovation), TIEC (ICT government initiative), Flat6Labs (leading regional seed accelerator), NilePreneurs/Rowad El Nile (C CBE initiative), Falak Startups (backed by the Sovereign Fund), and Dragon Business Incubator (by E-JUST, engineering/tech)."
      },
      {
        "number": 30,
        "question": "Rowad El Nile (NilePreneurs) was launched by:",
        "options": {
          "A": "The Central Bank of Egypt",
          "B": "A private bank in Dubai",
          "C": "The American University in Cairo",
          "D": "Misr El-Kheir Foundation"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (The Central Bank of Egypt). Prominent programs in Egypt include: Nahdet El Mahrousa (supports social enterprises), GESR Incubator (by Misr El-Kheir for food/water/health/energy innovation), TIEC (ICT government initiative), Flat6Labs (leading regional seed accelerator), NilePreneurs/Rowad El Nile (C CBE initiative), Falak Startups (backed by the Sovereign Fund), and Dragon Business Incubator (by E-JUST, engineering/tech)."
      },
      {
        "number": 31,
        "question": "Falak Startups is an accelerator backed by:",
        "options": {
          "A": "Egypt's Sovereign Fund",
          "B": "A foreign government",
          "C": "A commercial bank in Europe",
          "D": "A university in Japan"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Egypt's Sovereign Fund). Prominent programs in Egypt include: Nahdet El Mahrousa (supports social enterprises), GESR Incubator (by Misr El-Kheir for food/water/health/energy innovation), TIEC (ICT government initiative), Flat6Labs (leading regional seed accelerator), NilePreneurs/Rowad El Nile (C CBE initiative), Falak Startups (backed by the Sovereign Fund), and Dragon Business Incubator (by E-JUST, engineering/tech)."
      },
      {
        "number": 32,
        "question": "Which of the following is a key criterion when choosing an incubator or accelerator?",
        "options": {
          "A": "The color of the program's logo",
          "B": "Industry alignment and stage fit",
          "C": "The number of office windows",
          "D": "The founder's favorite sport"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Industry alignment and stage fit). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      },
      {
        "number": 33,
        "question": "\"Equity Required\" as a decision criterion means:",
        "options": {
          "A": "Evaluating the equity terms in exchange for support",
          "B": "Avoiding all funding",
          "C": "Hiring more employees",
          "D": "Ignoring the program's value"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Evaluating the equity terms in exchange for support). Key criteria for choosing a program include: Industry Alignment (program matches sector), Stage Fit (matches concept vs growth stage), Support Scale, Mentor/Investor Network strength, Track Record, and Equity Required in exchange for support."
      },
      {
        "number": 34,
        "question": "A common solution to the challenge of tight timelines is to:",
        "options": {
          "A": "Ignore all program deadlines",
          "B": "Plan ahead, distribute tasks, and focus on core objectives",
          "C": "Quit the program",
          "D": "Avoid communication with mentors"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Plan ahead, distribute tasks, and focus on core objectives). Incubators are organizations that nurture early-stage startups over a long term (6 months to several years). They offer workspace, mentorship, and support to refine business models and develop concept ideas into viable products, typically taking minimal or no equity."
      }
    ]
  },
  {
    "id": 4,
    "title": "Crafting a Business Plan",
    "tf": [
      {
        "number": 1,
        "question": "A business plan outlines the vision, strategy, and operational steps needed to build and grow a successful business.",
        "answer": "T",
        "explanation": "This statement is **True**. A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment."
      },
      {
        "number": 2,
        "question": "A business plan serves both as an internal guide and as a tool to secure investment from external stakeholders.",
        "answer": "T",
        "explanation": "This statement is **True**. A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment."
      },
      {
        "number": 3,
        "question": "A business plan is only used inside the company and is never shared with external stakeholders.",
        "answer": "F",
        "explanation": "This statement is **False**. A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 4,
        "question": "The executive summary, company description, and financial projections are all components of a business plan.",
        "answer": "T",
        "explanation": "This statement is **True**. A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment."
      },
      {
        "number": 5,
        "question": "Market analysis is not part of a business plan.",
        "answer": "F",
        "explanation": "This statement is **False**. A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 6,
        "question": "The executive summary is a concise snapshot of the entire business plan.",
        "answer": "T",
        "explanation": "This statement is **True**. The executive summary is a concise snapshot of the entire business plan, placed at the beginning to give stakeholders a compelling reason to read the rest of the document by summarizing key value points."
      },
      {
        "number": 7,
        "question": "The executive summary is a long and detailed section that includes every operational detail of the business.",
        "answer": "F",
        "explanation": "This statement is **False**. Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 8,
        "question": "The goal of the executive summary is to give stakeholders a compelling reason to read the rest of the plan.",
        "answer": "T",
        "explanation": "This statement is **True**. Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 9,
        "question": "The company description explains the nature of the business and the marketplace needs it addresses.",
        "answer": "T",
        "explanation": "This statement is **True**. The company description details the nature of the business and the marketplace needs it solves. It includes the Mission Statement (defines current purpose and primary objectives) and the Vision Statement (outlines long-term aspirations and desired future state)."
      },
      {
        "number": 10,
        "question": "The mission statement defines the company's purpose and primary objectives.",
        "answer": "T",
        "explanation": "This statement is **True**. The company description details the nature of the business and the marketplace needs it solves. It includes the Mission Statement (defines current purpose and primary objectives) and the Vision Statement (outlines long-term aspirations and desired future state)."
      },
      {
        "number": 11,
        "question": "The mission statement outlines the long-term aspirations and the desired future state of the company.",
        "answer": "F",
        "explanation": "This statement is **False**. The company description details the nature of the business and the marketplace needs it solves. It includes the Mission Statement (defines current purpose and primary objectives) and the Vision Statement (outlines long-term aspirations and desired future state). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 12,
        "question": "The vision statement outlines the long-term aspirations and desired future state of the company.",
        "answer": "T",
        "explanation": "This statement is **True**. The company description details the nature of the business and the marketplace needs it solves. It includes the Mission Statement (defines current purpose and primary objectives) and the Vision Statement (outlines long-term aspirations and desired future state)."
      },
      {
        "number": 13,
        "question": "The vision statement focuses only on the current daily operations of the company.",
        "answer": "F",
        "explanation": "This statement is **False**. The company description details the nature of the business and the marketplace needs it solves. It includes the Mission Statement (defines current purpose and primary objectives) and the Vision Statement (outlines long-term aspirations and desired future state). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 14,
        "question": "A Limited Liability Company (LLC) is one of the best legal structures for startup.",
        "answer": "T",
        "explanation": "This statement is **True**. A company's legal structure (e.g., Sole Proprietorship, Partnership, LLC, or Corporation) has critical implications for personal liability, taxation, and operational flexibility. An LLC is highly recommended for startups to protect personal assets."
      },
      {
        "number": 15,
        "question": "The legal structure may be a sole proprietorship, partnership, LLC, or corporation.",
        "answer": "T",
        "explanation": "This statement is **True**. A company's legal structure (e.g., Sole Proprietorship, Partnership, LLC, or Corporation) has critical implications for personal liability, taxation, and operational flexibility. An LLC is highly recommended for startups to protect personal assets."
      },
      {
        "number": 16,
        "question": "The legal structure has no effect on liability or taxation.",
        "answer": "F",
        "explanation": "This statement is **False**. A company's legal structure (e.g., Sole Proprietorship, Partnership, LLC, or Corporation) has critical implications for personal liability, taxation, and operational flexibility. An LLC is highly recommended for startups to protect personal assets. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 17,
        "question": "Market analysis covers the industry, target market, and competitive environment.",
        "answer": "T",
        "explanation": "This statement is **True**. Market analysis covers: the Industry Overview (trends and growth), the Target Market (specific customer segments, avoiding the trap of targeting 'everyone'), and the Competitive Analysis (assessing strengths and weaknesses of direct and indirect competitors)."
      },
      {
        "number": 18,
        "question": "The industry overview ignores current market trends and growth opportunities.",
        "answer": "F",
        "explanation": "This statement is **False**. Market analysis covers: the Industry Overview (trends and growth), the Target Market (specific customer segments, avoiding the trap of targeting 'everyone'), and the Competitive Analysis (assessing strengths and weaknesses of direct and indirect competitors). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 19,
        "question": "The target market describes the specific customer segments the business aims to serve.",
        "answer": "T",
        "explanation": "This statement is **True**. Market analysis covers: the Industry Overview (trends and growth), the Target Market (specific customer segments, avoiding the trap of targeting 'everyone'), and the Competitive Analysis (assessing strengths and weaknesses of direct and indirect competitors)."
      },
      {
        "number": 20,
        "question": "Competitive analysis examines the strengths and weaknesses of competitors.",
        "answer": "T",
        "explanation": "This statement is **True**. Market analysis covers: the Industry Overview (trends and growth), the Target Market (specific customer segments, avoiding the trap of targeting 'everyone'), and the Competitive Analysis (assessing strengths and weaknesses of direct and indirect competitors)."
      },
      {
        "number": 21,
        "question": "The management team section highlights key team members, their roles, experience, and qualifications.",
        "answer": "T",
        "explanation": "This statement is **True**. The management team section highlights key members, their roles, experience, and qualifications. An Organizational Chart is a visual representation showing the company's hierarchy and reporting structure to clarify roles."
      },
      {
        "number": 22,
        "question": "The organizational chart is a visual representation of the company's hierarchy and reporting structure.",
        "answer": "T",
        "explanation": "This statement is **True**. The management team section highlights key members, their roles, experience, and qualifications. An Organizational Chart is a visual representation showing the company's hierarchy and reporting structure to clarify roles."
      },
      {
        "number": 23,
        "question": "The organizational chart is simply a list of the company's products.",
        "answer": "F",
        "explanation": "This statement is **False**. The management team section highlights key members, their roles, experience, and qualifications. An Organizational Chart is a visual representation showing the company's hierarchy and reporting structure to clarify roles. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 24,
        "question": "The product description focuses on key features, benefits, and unique selling propositions (USPs).",
        "answer": "T",
        "explanation": "This statement is **True**. The product description details key features, customer benefits, and USPs. It details the product lifecycle stage and plans, plus Intellectual Property (IP) protections such as patents, trademarks, and proprietary technologies."
      },
      {
        "number": 25,
        "question": "The lifecycle section only lists the names of the company's employees.",
        "answer": "F",
        "explanation": "This statement is **False**. The product description details key features, customer benefits, and USPs. It details the product lifecycle stage and plans, plus Intellectual Property (IP) protections such as patents, trademarks, and proprietary technologies. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 26,
        "question": "Intellectual property includes patents, trademarks, and proprietary technologies.",
        "answer": "T",
        "explanation": "This statement is **True**. The product description details key features, customer benefits, and USPs. It details the product lifecycle stage and plans, plus Intellectual Property (IP) protections such as patents, trademarks, and proprietary technologies."
      },
      {
        "number": 27,
        "question": "The marketing plan is concerned only with setting product prices.",
        "answer": "F",
        "explanation": "This statement is **False**. The marketing and sales plan explains how the business will promote its offerings, acquire and retain customers (using loyalty programs and customer service policies), and outlines the sales methods used to convert leads into paying customers. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 28,
        "question": "Customer acquisition describes how the business plans to attract and retain customers.",
        "answer": "T",
        "explanation": "This statement is **True**. The marketing and sales plan explains how the business will promote its offerings, acquire and retain customers (using loyalty programs and customer service policies), and outlines the sales methods used to convert leads into paying customers."
      },
      {
        "number": 29,
        "question": "Capital needs specify the total amount of funding required for the business to achieve its objectives.",
        "answer": "T",
        "explanation": "This statement is **True**. Capital needs specify the total funding required to achieve business milestones. The 'Use of Funds' details exactly how capital will be allocated (e.g., R&D, marketing), and funding sources outline whether it will come from investors, loans, or grants."
      },
      {
        "number": 30,
        "question": "Use of funds means keeping investors uninformed about how the money will be spent.",
        "answer": "F",
        "explanation": "This statement is **False**. Capital needs specify the total funding required to achieve business milestones. The 'Use of Funds' details exactly how capital will be allocated (e.g., R&D, marketing), and funding sources outline whether it will come from investors, loans, or grants. Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 31,
        "question": "Funding sources may include investors, loans, or grants.",
        "answer": "T",
        "explanation": "This statement is **True**. Capital needs specify the total funding required to achieve business milestones. The 'Use of Funds' details exactly how capital will be allocated (e.g., R&D, marketing), and funding sources outline whether it will come from investors, loans, or grants."
      },
      {
        "number": 32,
        "question": "Income statements provide a one-time snapshot of the company's assets and liabilities.",
        "answer": "F",
        "explanation": "This statement is **False**. Financial projections estimate future performance (typically over 3-5 years) using: Income Statements (revenues and expenses over a timeframe), Balance Sheets (snapshot of assets, liabilities, and equity at a given point), and Cash Flow Statements (tracking cash inflows and outflows to ensure solvency). Therefore, the claim in the statement is incorrect."
      },
      {
        "number": 33,
        "question": "Balance sheets provide a snapshot of the company's assets, liabilities, and equity at a given time.",
        "answer": "T",
        "explanation": "This statement is **True**. Financial projections estimate future performance (typically over 3-5 years) using: Income Statements (revenues and expenses over a timeframe), Balance Sheets (snapshot of assets, liabilities, and equity at a given point), and Cash Flow Statements (tracking cash inflows and outflows to ensure solvency)."
      },
      {
        "number": 34,
        "question": "Break-even analysis calculates the point at which total revenue equals total costs.",
        "answer": "T",
        "explanation": "This statement is **True**. Operating expenses include: Fixed Costs (constant expenses regardless of sales volume, such as rent, base salaries, insurance, and stable utilities) and Variable Costs (expenses that vary directly with business activity, such as raw materials, shipping fees, sales commissions, and scalable advertising)."
      }
    ],
    "mcq": [
      {
        "number": 1,
        "question": "A business plan helps a startup to:",
        "options": {
          "A": "Eliminate the need for customers",
          "B": "Secure investment and guide internal decision-making",
          "C": "Avoid paying any taxes",
          "D": "Replace its product entirely"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Secure investment and guide internal decision-making). A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment."
      },
      {
        "number": 2,
        "question": "What is the primary purpose of a business plan?",
        "options": {
          "A": "To outline the vision, strategy, and operational steps needed to build a successful business",
          "B": "To replace the company's tax filings",
          "C": "To list every customer of the business",
          "D": "To advertise products on social media"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (To outline the vision, strategy, and operational steps needed to build a successful business). A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment."
      },
      {
        "number": 3,
        "question": "A business plan is used as:",
        "options": {
          "A": "Only an internal document with no external use",
          "B": "A guide for internal decisions and a tool to secure external investment",
          "C": "A document that lists only the company's competitors",
          "D": "A substitute for the company's product"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (A guide for internal decisions and a tool to secure external investment). A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment."
      },
      {
        "number": 4,
        "question": "Which of the following is a component of a business plan?",
        "options": {
          "A": "Executive Summary",
          "B": "Daily attendance sheet",
          "C": "Customer phone directory",
          "D": "Office floor plan"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Executive Summary). A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment."
      },
      {
        "number": 5,
        "question": "How many main components of a business plan are listed in the lecture?",
        "options": {
          "A": "Three",
          "B": "Five",
          "C": "Eight",
          "D": "Twelve"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Eight). A business plan is a comprehensive document detailing a startup's objectives, strategies, market analysis, operational structure, and financial projections. It acts as a guide for internal decision-making and a communication tool to secure investment."
      },
      {
        "number": 6,
        "question": "Which document outlines a startup's objectives, strategies, market analysis, financial projections, and operational plans?",
        "options": {
          "A": "Pitch deck",
          "B": "Founders' resumes",
          "C": "Prototype description",
          "D": "Business plan"
        },
        "answer": "D",
        "explanation": "The correct answer is **D** (Business plan). Financial projections estimate future performance (typically over 3-5 years) using: Income Statements (revenues and expenses over a timeframe), Balance Sheets (snapshot of assets, liabilities, and equity at a given point), and Cash Flow Statements (tracking cash inflows and outflows to ensure solvency)."
      },
      {
        "number": 7,
        "question": "The executive summary is best described as:",
        "options": {
          "A": "The longest and most detailed section of the plan",
          "B": "A concise snapshot of the entire business plan",
          "C": "The company's income statement",
          "D": "A list of the company's competitors"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (A concise snapshot of the entire business plan). The executive summary is a concise snapshot of the entire business plan, placed at the beginning to give stakeholders a compelling reason to read the rest of the document by summarizing key value points."
      },
      {
        "number": 8,
        "question": "The main goal of the executive summary is to:",
        "options": {
          "A": "Replace the financial projections",
          "B": "Give stakeholders a compelling reason to read the rest of the plan",
          "C": "List every operational detail of the business",
          "D": "Set the product's price"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Give stakeholders a compelling reason to read the rest of the plan). The executive summary is a concise snapshot of the entire business plan, placed at the beginning to give stakeholders a compelling reason to read the rest of the document by summarizing key value points."
      },
      {
        "number": 9,
        "question": "The company description mainly explains:",
        "options": {
          "A": "The competitors' financial statements",
          "B": "The founders' personal hobbies",
          "C": "The nature of the business and the marketplace needs it addresses",
          "D": "The company's break-even point"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (The nature of the business and the marketplace needs it addresses). The company description details the nature of the business and the marketplace needs it solves. It includes the Mission Statement (defines current purpose and primary objectives) and the Vision Statement (outlines long-term aspirations and desired future state)."
      },
      {
        "number": 10,
        "question": "The mission statement:",
        "options": {
          "A": "Defines the company's purpose and primary objectives",
          "B": "Forecasts revenues for the next five years",
          "C": "Lists the company's fixed and variable costs",
          "D": "Provides a snapshot of assets and liabilities"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Defines the company's purpose and primary objectives). The company description details the nature of the business and the marketplace needs it solves. It includes the Mission Statement (defines current purpose and primary objectives) and the Vision Statement (outlines long-term aspirations and desired future state)."
      },
      {
        "number": 11,
        "question": "The vision statement:",
        "options": {
          "A": "Tracks daily cash inflows and outflows",
          "B": "Lists the company's competitors",
          "C": "Describes only the current daily operations",
          "D": "Outlines the long-term aspirations and desired future state of the company"
        },
        "answer": "D",
        "explanation": "The correct answer is **D** (Outlines the long-term aspirations and desired future state of the company). The company description details the nature of the business and the marketplace needs it solves. It includes the Mission Statement (defines current purpose and primary objectives) and the Vision Statement (outlines long-term aspirations and desired future state)."
      },
      {
        "number": 12,
        "question": "Which of the following is a possible legal structure for a company?",
        "options": {
          "A": "Pitch deck",
          "B": "Limited Liability Company (LLC)",
          "C": "Balance sheet",
          "D": "Marketing plan"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Limited Liability Company (LLC)). Common application materials for programs include: a Business Plan (comprehensive strategies), a Pitch Deck (a concise 10-15 slide overview of value, market, and team), an Executive Summary, Financial Statements, Founders' Resumes, and supporting Market Research."
      },
      {
        "number": 13,
        "question": "Which legal structure is recommended for startups?",
        "options": {
          "A": "Sole proprietorship",
          "B": "Limited Liability Company (LLC)",
          "C": "Public corporation",
          "D": "Partnership"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Limited Liability Company (LLC)). A company's legal structure (e.g., Sole Proprietorship, Partnership, LLC, or Corporation) has critical implications for personal liability, taxation, and operational flexibility. An LLC is highly recommended for startups to protect personal assets."
      },
      {
        "number": 14,
        "question": "The legal structure has implications for:",
        "options": {
          "A": "Liability, taxation, and operational flexibility",
          "B": "The company's logo design",
          "C": "The number of slides in the pitch deck",
          "D": "The office's interior decoration"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Liability, taxation, and operational flexibility). A company's legal structure (e.g., Sole Proprietorship, Partnership, LLC, or Corporation) has critical implications for personal liability, taxation, and operational flexibility. An LLC is highly recommended for startups to protect personal assets."
      },
      {
        "number": 15,
        "question": "Market analysis covers:",
        "options": {
          "A": "Only the company's salaries",
          "B": "Only the founders' resumes",
          "C": "The industry, target market, and competitive environment",
          "D": "Only the office rent"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (The industry, target market, and competitive environment). Market analysis covers: the Industry Overview (trends and growth), the Target Market (specific customer segments, avoiding the trap of targeting 'everyone'), and the Competitive Analysis (assessing strengths and weaknesses of direct and indirect competitors)."
      },
      {
        "number": 16,
        "question": "The industry overview analyzes:",
        "options": {
          "A": "Current industry trends, growth opportunities, and market conditions",
          "B": "The founders' personal lives",
          "C": "The company's office furniture",
          "D": "The competitors' passwords"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Current industry trends, growth opportunities, and market conditions). Market analysis covers: the Industry Overview (trends and growth), the Target Market (specific customer segments, avoiding the trap of targeting 'everyone'), and the Competitive Analysis (assessing strengths and weaknesses of direct and indirect competitors)."
      },
      {
        "number": 17,
        "question": "The target market describes:",
        "options": {
          "A": "The company's internal employees",
          "B": "The specific customer segments the business aims to serve",
          "C": "The company's electricity bill",
          "D": "The office layout"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (The specific customer segments the business aims to serve). Market analysis covers: the Industry Overview (trends and growth), the Target Market (specific customer segments, avoiding the trap of targeting 'everyone'), and the Competitive Analysis (assessing strengths and weaknesses of direct and indirect competitors)."
      },
      {
        "number": 18,
        "question": "Competitive analysis examines:",
        "options": {
          "A": "The founders' hobbies",
          "B": "The company's electricity bill",
          "C": "The office decorations",
          "D": "The strengths and weaknesses of competitors"
        },
        "answer": "D",
        "explanation": "The correct answer is **D** (The strengths and weaknesses of competitors). Market analysis covers: the Industry Overview (trends and growth), the Target Market (specific customer segments, avoiding the trap of targeting 'everyone'), and the Competitive Analysis (assessing strengths and weaknesses of direct and indirect competitors)."
      },
      {
        "number": 19,
        "question": "The management team section highlights:",
        "options": {
          "A": "Key team members, their roles, experience, and qualifications",
          "B": "The company's product prices",
          "C": "The competitors' marketing slogans",
          "D": "The office address"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Key team members, their roles, experience, and qualifications). The management team section highlights key members, their roles, experience, and qualifications. An Organizational Chart is a visual representation showing the company's hierarchy and reporting structure to clarify roles."
      },
      {
        "number": 20,
        "question": "The organizational chart is:",
        "options": {
          "A": "A list of products",
          "B": "A visual representation of the company's hierarchy",
          "C": "A balance sheet",
          "D": "A marketing slogan"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (A visual representation of the company's hierarchy). The management team section highlights key members, their roles, experience, and qualifications. An Organizational Chart is a visual representation showing the company's hierarchy and reporting structure to clarify roles."
      },
      {
        "number": 21,
        "question": "The main benefit of an organizational chart is that it:",
        "options": {
          "A": "Sets the product's price",
          "B": "Replaces the financial statements",
          "C": "Clarifies roles and reporting relationships within the organization",
          "D": "Lists the company's competitors"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Clarifies roles and reporting relationships within the organization). The management team section highlights key members, their roles, experience, and qualifications. An Organizational Chart is a visual representation showing the company's hierarchy and reporting structure to clarify roles."
      },
      {
        "number": 22,
        "question": "The product description focuses on:",
        "options": {
          "A": "The founders' salaries",
          "B": "Key features, benefits, and unique selling propositions (USPs)",
          "C": "The office rent",
          "D": "The competitors' logos"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Key features, benefits, and unique selling propositions (USPs)). The product description details key features, customer benefits, and USPs. It details the product lifecycle stage and plans, plus Intellectual Property (IP) protections such as patents, trademarks, and proprietary technologies."
      },
      {
        "number": 23,
        "question": "The lifecycle section discusses:",
        "options": {
          "A": "The product's stage in its lifecycle and future development plans",
          "B": "The company's daily emails",
          "C": "The office furniture",
          "D": "The founders' hobbies"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (The product's stage in its lifecycle and future development plans). The product description details key features, customer benefits, and USPs. It details the product lifecycle stage and plans, plus Intellectual Property (IP) protections such as patents, trademarks, and proprietary technologies."
      },
      {
        "number": 24,
        "question": "Intellectual property includes:",
        "options": {
          "A": "The company's electricity bill",
          "B": "The office layout",
          "C": "The founders' resumes",
          "D": "Patents, trademarks, and proprietary technologies"
        },
        "answer": "D",
        "explanation": "The correct answer is **D** (Patents, trademarks, and proprietary technologies). The product description details key features, customer benefits, and USPs. It details the product lifecycle stage and plans, plus Intellectual Property (IP) protections such as patents, trademarks, and proprietary technologies."
      },
      {
        "number": 25,
        "question": "The marketing plan describes:",
        "options": {
          "A": "How the business will promote its products or services",
          "B": "How to file the company's taxes",
          "C": "The office address",
          "D": "The competitors' salaries"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (How the business will promote its products or services). The marketing and sales plan explains how the business will promote its offerings, acquire and retain customers (using loyalty programs and customer service policies), and outlines the sales methods used to convert leads into paying customers."
      },
      {
        "number": 26,
        "question": "The sales strategy outlines:",
        "options": {
          "A": "The office furniture",
          "B": "The founders' hobbies",
          "C": "The process and methods for converting leads into paying customers",
          "D": "The competitors' passwords"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (The process and methods for converting leads into paying customers). The marketing and sales plan explains how the business will promote its offerings, acquire and retain customers (using loyalty programs and customer service policies), and outlines the sales methods used to convert leads into paying customers."
      },
      {
        "number": 27,
        "question": "The customer acquisition strategy describes:",
        "options": {
          "A": "How to file taxes",
          "B": "How to design the office",
          "C": "How to manage employee benefits",
          "D": "How to attract and retain customers"
        },
        "answer": "D",
        "explanation": "The correct answer is **D** (How to attract and retain customers). The marketing and sales plan explains how the business will promote its offerings, acquire and retain customers (using loyalty programs and customer service policies), and outlines the sales methods used to convert leads into paying customers."
      },
      {
        "number": 28,
        "question": "Customer acquisition strategies often include:",
        "options": {
          "A": "Hiding from customers",
          "B": "Loyalty programs and customer service policies",
          "C": "Filing taxes",
          "D": "Designing the office"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Loyalty programs and customer service policies). The marketing and sales plan explains how the business will promote its offerings, acquire and retain customers (using loyalty programs and customer service policies), and outlines the sales methods used to convert leads into paying customers."
      },
      {
        "number": 29,
        "question": "Capital needs specify:",
        "options": {
          "A": "The total amount of funding required for the business",
          "B": "The founders' hobbies",
          "C": "The office decorations",
          "D": "The competitors' prices"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (The total amount of funding required for the business). Capital needs specify the total funding required to achieve business milestones. The 'Use of Funds' details exactly how capital will be allocated (e.g., R&D, marketing), and funding sources outline whether it will come from investors, loans, or grants."
      },
      {
        "number": 30,
        "question": "Use of funds explains:",
        "options": {
          "A": "How to hide spending from investors",
          "B": "The founders' personal expenses",
          "C": "How the capital will be allocated",
          "D": "The office layout"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (How the capital will be allocated). Capital needs specify the total funding required to achieve business milestones. The 'Use of Funds' details exactly how capital will be allocated (e.g., R&D, marketing), and funding sources outline whether it will come from investors, loans, or grants."
      },
      {
        "number": 31,
        "question": "Funding sources may include:",
        "options": {
          "A": "The office furniture",
          "B": "Investors, loans, or grants",
          "C": "The competitors' passwords",
          "D": "The founders' resumes only"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Investors, loans, or grants). Capital needs specify the total funding required to achieve business milestones. The 'Use of Funds' details exactly how capital will be allocated (e.g., R&D, marketing), and funding sources outline whether it will come from investors, loans, or grants."
      },
      {
        "number": 32,
        "question": "Income statements forecast:",
        "options": {
          "A": "The office layout",
          "B": "The founders' hobbies",
          "C": "The competitors' logos",
          "D": "Projected revenues and expenses over a specific time frame"
        },
        "answer": "D",
        "explanation": "The correct answer is **D** (Projected revenues and expenses over a specific time frame). Financial projections estimate future performance (typically over 3-5 years) using: Income Statements (revenues and expenses over a timeframe), Balance Sheets (snapshot of assets, liabilities, and equity at a given point), and Cash Flow Statements (tracking cash inflows and outflows to ensure solvency)."
      },
      {
        "number": 33,
        "question": "Which financial statement provides a snapshot of the company's assets, liabilities, and equity at a given time?",
        "options": {
          "A": "Income statement",
          "B": "Cash flow statement",
          "C": "Balance sheet",
          "D": "Break-even analysis"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (Balance sheet). Financial projections estimate future performance (typically over 3-5 years) using: Income Statements (revenues and expenses over a timeframe), Balance Sheets (snapshot of assets, liabilities, and equity at a given point), and Cash Flow Statements (tracking cash inflows and outflows to ensure solvency)."
      },
      {
        "number": 34,
        "question": "Cash flow statements track:",
        "options": {
          "A": "Projected cash inflows and outflows to ensure the business stays solvent",
          "B": "The office furniture",
          "C": "The founders' hobbies",
          "D": "The competitors' prices"
        },
        "answer": "A",
        "explanation": "The correct answer is **A** (Projected cash inflows and outflows to ensure the business stays solvent). Financial projections estimate future performance (typically over 3-5 years) using: Income Statements (revenues and expenses over a timeframe), Balance Sheets (snapshot of assets, liabilities, and equity at a given point), and Cash Flow Statements (tracking cash inflows and outflows to ensure solvency)."
      },
      {
        "number": 35,
        "question": "Break-even analysis calculates:",
        "options": {
          "A": "The office rent",
          "B": "The founders' salaries",
          "C": "The point at which total revenue equals total costs",
          "D": "The competitors' market share"
        },
        "answer": "C",
        "explanation": "The correct answer is **C** (The point at which total revenue equals total costs). Market analysis covers: the Industry Overview (trends and growth), the Target Market (specific customer segments, avoiding the trap of targeting 'everyone'), and the Competitive Analysis (assessing strengths and weaknesses of direct and indirect competitors)."
      },
      {
        "number": 36,
        "question": "Income statements are typically forecast over a period of:",
        "options": {
          "A": "One day",
          "B": "Three to five years",
          "C": "Fifty years",
          "D": "One hour"
        },
        "answer": "B",
        "explanation": "The correct answer is **B** (Three to five years). Financial projections estimate future performance (typically over 3-5 years) using: Income Statements (revenues and expenses over a timeframe), Balance Sheets (snapshot of assets, liabilities, and equity at a given point), and Cash Flow Statements (tracking cash inflows and outflows to ensure solvency)."
      }
    ]
  }
];
