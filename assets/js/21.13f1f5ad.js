(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{377:function(e,t,i){"use strict";i.r(t);var r=i(42),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"index"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#Time-Is-Money"}},[e._v("Time Is Money")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#Introduction-To-Time-Series"}},[e._v("Introduction To Time Series")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#Time-Series-Problems-Overview"}},[e._v("Time Series Problems Overview")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#Time-Series-Analysis"}},[e._v("Time Series Analysis")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#Time-Series-Forecasting"}},[e._v("Time Series Forecasting")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#Time-Series-Classification"}},[e._v("Time Series Classification")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#Time-Series-Forecasting-as-a-Classification-Problem"}},[e._v("Time Series Forecasting as a Classification Problem")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#The-Matrix-Profile"}},[e._v("The Matrix Profile")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#Automatic-Time-Series-Feature-Extraction"}},[e._v("Automatic Time Series Feature Extraction")])])])]),e._v(" "),i("li",[i("a",{attrs:{href:"#Conclusions"}},[e._v("Conclusions")])])]),e._v(" "),i("p",[i("strong",[e._v("Disclaimer!")])]),e._v(" "),i("p",[e._v("This guide is not intended to be exhaustive of everything you can do with time series data, but to offer you a good overview of the possible approaches you can take or things you should check when dealing with them.")]),e._v(" "),i("p",[e._v("Having that said, let's begin!")]),e._v(" "),i("h2",{attrs:{id:"time-is-money"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#time-is-money"}},[e._v("#")]),e._v(" Time Is Money")]),e._v(" "),i("p",[e._v("Whether it is the sale of products, the estimated production of an agricultural field, or the forecast of any activity of a company, time series are an indispensable type of data, which has been used for thousands of years to inform the activities to be done "),i("strong",[e._v("today")]),e._v(", based on what will happen "),i("strong",[e._v("tomorrow")]),e._v(".")]),e._v(" "),i("p",[e._v("A good estimate of the future, for a company, can bring a great saving of time (and money)!")]),e._v(" "),i("p",[e._v("If you ask any manager will tell you that "),i("em",[e._v("time is even more important than money")]),e._v(", because you can convert time into money, "),i("em",[e._v("but the opposite is not possible!")])]),e._v(" "),i("p",[e._v("Learning to work with time series is a very valuable skill in the real world, and applicable to many situations and problems.")]),e._v(" "),i("p",[e._v('It is also considered one of the most "difficult" types of data to manage since '),i("em",[e._v("it has additional complexities")]),e._v(" compared to more traditional data such as tabular data or text.")]),e._v(" "),i("p",[e._v("We will see these additional complexities in the section "),i("a",{attrs:{href:"#Time-Series-Addtional-Challenges"}},[e._v("Time Series Additional Challenges")]),e._v(".")]),e._v(" "),i("p",[e._v("Now that you know why it's important to know how to work with time series, it's time to start seeing them in practice!")]),e._v(" "),i("h2",{attrs:{id:"introduction-to-time-series"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-time-series"}},[e._v("#")]),e._v(" Introduction To Time Series")]),e._v(" "),i("h4",{attrs:{id:"know-the-time-series-data-structure"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#know-the-time-series-data-structure"}},[e._v("#")]),e._v(" Know the Time Series Data Structure")]),e._v(" "),i("p",[e._v("The first resources Virgilio recommends to get you started are the following:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.dataquest.io/blog/tutorial-time-series-analysis-with-pandas/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tutorial: Time Series Analysis with Pandas"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://jakevdp.github.io/PythonDataScienceHandbook/03.11-working-with-time-series.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Working with Time Series"),i("OutboundLink")],1)])]),e._v(" "),i("p",[e._v('These are an exhaustive introduction to the type of "time" data, how it is manipulated with Pandas (indexing, transformation, visualization).')]),e._v(" "),i("p",[e._v("After you've gone through them, you should understand how to write "),i("strong",[e._v('"idiomatic Pandas"')]),e._v(" for time series, and you can find a tutorial (section 7 of "),i("a",{attrs:{href:"https://tomaugspurger.github.io/modern-1-intro",target:"_blank",rel:"noopener noreferrer"}},[e._v("Modern Pandas"),i("OutboundLink")],1),e._v(") here:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://tomaugspurger.github.io/modern-7-timeseries",target:"_blank",rel:"noopener noreferrer"}},[e._v("Modern Pandas"),i("OutboundLink")],1)])]),e._v(" "),i("h2",{attrs:{id:"time-series-problems-overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#time-series-problems-overview"}},[e._v("#")]),e._v(" Time Series Problems Overview")]),e._v(" "),i("p",[e._v("In the next sections, we see what are the main problems that can be solved with time series data.")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("Be aware that this is not an exhaustive list, and you should consider it only "),i("em",[e._v("a starting point!")])])]),e._v(" "),i("p",[e._v("Once you have identified a problem that you are interested in solving, you need to find papers that talk about the state of the art of that problem and go deeper!")]),e._v(" "),i("p",[e._v("It is always true that there is not a silver bullet that solves every problem, remember the "),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/No_free_lunch_theorem",target:"_blank",rel:"noopener noreferrer"}},[e._v("No Free Lunch Theorem"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v('Learning to manipulate time data with Pandas is mandatory, and the Pandas DataFrame structure is the natural landing place for this type of data. However, due to the "sequential" nature of the data type, the DataFrame has some structural limitations, because it is designed for more classic tabular data.')]),e._v(" "),i("p",[e._v("To overcome these limitations, the "),i("a",{attrs:{href:"https://www.turing.ac.uk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alan Turing Institute"),i("OutboundLink")],1),e._v(" has developed a special version of Scikit-Learn, "),i("a",{attrs:{href:"https://github.com/alan-turing-institute/sktime",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sktime"),i("OutboundLink")],1),e._v(", using a specific .ts format to load time series data into Pandas DataFrames.")]),e._v(" "),i("p",[e._v("From the docs:")]),e._v(" "),i("blockquote",[i("p",[e._v("sktime is a Python machine learning toolbox for time series with a unified interface for multiple learning tasks.\nsktime provides dedicated time series algorithms and scikit-learn compatible tools for building, tuning, and evaluating composite models.")]),e._v(" "),i("p",[e._v("We currently support:")]),e._v(" "),i("ul",[i("li",[e._v("Forecasting")]),e._v(" "),i("li",[e._v("Time series classification")]),e._v(" "),i("li",[e._v("Time series regression")])]),e._v(" "),i("p",[e._v("For deep learning methods, see our companion package: "),i("a",{attrs:{href:"https://github.com/sktime/sktime-dl",target:"_blank",rel:"noopener noreferrer"}},[e._v("sktime-dl"),i("OutboundLink")],1),e._v(".")])]),e._v(" "),i("p",[e._v("To get started with SKtime get through the following resourse:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.sktime.org/en/latest/how_to_get_started.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SKTime - How to get started"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.sktime.org/en/latest/examples/loading_data.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Loading data in SKTime"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/alan-turing-institute/sktime/tree/master/examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("SKTime - Examples"),i("OutboundLink")],1)])]),e._v(" "),i("p",[e._v("These are the basic tools you need to know to work with time series in Python.")]),e._v(" "),i("p",[e._v("In the last section of the guide we'll see some other useful Python libraries which integrate well with SKTime and the .ts data type, but before that, let's have a look at what type of problem you can solve within the time series domain.")]),e._v(" "),i("h2",{attrs:{id:"time-series-analysis"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#time-series-analysis"}},[e._v("#")]),e._v(" Time Series Analysis")]),e._v(" "),i("p",[e._v("Imagine you are working as a Data Scientist, and you are asked to do "),i("em",[e._v('"something useful"')]),e._v(" not better specified. Your first intuition must be, as with any type of data, to understand the dataset and the type of information it brings with it.")]),e._v(" "),i("p",[e._v("This process, often called "),i("em",[e._v('"analysis"')]),e._v(", is fundamental before any other, for example before trying to make predictions about future values.")]),e._v(" "),i("p",[e._v("The path Virgilio suggests is as follows:")]),e._v(" "),i("p",[e._v("First of all, take this free and extremely complete course that introduces you to time series analysis:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.itl.nist.gov/div898/handbook/pmc/section4/pmc4.htm",target:"_blank",rel:"noopener noreferrer"}},[i("strong",[e._v("Introduction to Time Series Analysis")]),i("OutboundLink")],1)])]),e._v(" "),i("p",[e._v("Once you're done with this, you can expand your knowledge with the following (extremely detailed) resources.")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://online.stat.psu.edu/stat510/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eberly College of Science - Applied Time Series Analysis"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"http://people.duke.edu/~rnau/411home.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Statistical forecasting: Notes on regression and time series analysis"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.youtube.com/watch?v=v5ijNXvlC5A&t=9627s&ab_channel=Enthought",target:"_blank",rel:"noopener noreferrer"}},[e._v("Modern Time Series Analysis"),i("OutboundLink")],1)])]),e._v(" "),i("p",[e._v("Eventually, you can use this "),i("em",[e._v("very deep")]),e._v(" book as a reference:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.stat.pitt.edu/stoffer/tsa4/tsa4.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Time Series Analysis and Its Applications"),i("OutboundLink")],1)])]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("Be sure to check the "),i("a",{attrs:{href:"#The-Matrix-Profile"}},[e._v("The Matrix Profile")]),e._v(" section, you won't be disappointed!")]),e._v(" "),i("p",[e._v("This "),i("strong",[e._v("extremely useful")]),e._v(" method gives you invaluable insights about patterns in your times series data!")])]),e._v(" "),i("p",[e._v("Virgilio is "),i("em",[e._v("pretty sure")]),e._v(" that these 3 resources and the book can give you a "),i("strong",[e._v("very detailed")]),e._v(" preparation on the topic, so be sure to take the time that's needed to digest them very well!")]),e._v(" "),i("p",[e._v("Some educational videos can be found:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.youtube.com/watch?v=zmfe2RaX-14&feature=youtu.be&ab_channel=PyCon2017",target:"_blank",rel:"noopener noreferrer"}},[e._v("Aileen Nielsen - Time Series Analysis - PyCon 2017"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.youtube.com/watch?v=31ng0uLqfhc&list=PL_onPhFCkVQghJC-KQkUNvkAGbriARyfX",target:"_blank",rel:"noopener noreferrer"}},[e._v("Time Series Analysis - Georgia Tech"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.youtube.com/watch?v=DeORzP0go5I&list=PLvcbYUQ5t0UHOLnBzl46_Q6QKtFgfMGc3&ab_channel=ritvikmath",target:"_blank",rel:"noopener noreferrer"}},[e._v("Time Series Talk"),i("OutboundLink")],1)])]),e._v(" "),i("p",[e._v("Some other links that can help you are the following:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.kaggle.com/kashnitsky/topic-9-part-1-time-series-analysis-in-python",target:"_blank",rel:"noopener noreferrer"}},[e._v("Time series analysis - Python"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.kaggle.com/getting-started/54280",target:"_blank",rel:"noopener noreferrer"}},[e._v("Time Series Analysis in Python - Getting Started"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.reddit.com/r/datascience/comments/9k9xct/learning_time_series_analysis/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learning Time Series Analysis"),i("OutboundLink")],1)])]),e._v(" "),i("h2",{attrs:{id:"time-series-forecasting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#time-series-forecasting"}},[e._v("#")]),e._v(" Time Series Forecasting")]),e._v(" "),i("p",[e._v("The most classic of the problems related to time series is that of predicting the future values of the series.")]),e._v(" "),i("p",[e._v("Whether it is the price of a stock, the number of products sold, or the electricity needs of a part of the city, the topic of forecasting is fundamental in any aspect of human society.")]),e._v(" "),i("p",[e._v("An interesting read:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://medium.com/sciforce/evolution-of-forecasting-from-the-stone-age-to-artificial-intelligence-198e2b1457f5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Evolution of Forecasting from the Stone Age to Artificial Intelligence"),i("OutboundLink")],1)])]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("Knowing how to predict a time series, with enough historical data behind it, "),i("strong",[e._v("is an invaluable skill")]),e._v(" in the modern data market, and every kind of company can benefit from it!")])]),e._v(" "),i("p",[e._v("As usual, Virgilio has collected for you the best free resources available, let's see!")]),e._v(" "),i("p",[e._v("The first and most important resource in time series forecasting is the following textbook:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://otexts.com/fpp2/",target:"_blank",rel:"noopener noreferrer"}},[i("strong",[e._v("Forecasting: Principles And Practice")]),i("OutboundLink")],1)])]),e._v(" "),i("p",[e._v("The textbook uses R examples throughout the lessons, but it's not mandatory to learn R to use it!")]),e._v(" "),i("p",[e._v("The advice Virgilio gives you is to try to follow the lessons "),i("strong",[e._v("translating")]),e._v(" the R code to Python code, obviously helping you with Google and all the resources at your disposal!")]),e._v(" "),i("p",[e._v("In this way, you'll learn a lot about how to use Python for time series forecasting, and you'll have a lot of "),i("strong",[e._v("reusable code")]),e._v(" for your future projects!")]),e._v(" "),i("p",[e._v("Some other useful resources are:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.youtube.com/watch?v=JntA9XaTebs&t=6s&ab_channel=PyData",target:"_blank",rel:"noopener noreferrer"}},[e._v("Applying Statistical Modeling & Machine Learning to Perform Time-Series Forecasting"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.youtube.com/watch?v=hAlGqT3Xpus&ab_channel=PyData",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Worked Example of Using Neural Networks for Time Series Prediction"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.youtube.com/watch?v=0zpg9ODE6Ww&ab_channel=PyData",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reliably forecasting time-series in real-time "),i("OutboundLink")],1)])]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("It's important to understand that no-one-method will always outperform others, and that time series forecasting is a hot research topic, and you should always try to be aware of new techniques or approaches!")]),e._v(" "),i("p",[e._v("Be sure to read some survey papers, once a while, like "),i("a",{attrs:{href:"https://arxiv.org/abs/2004.13408",target:"_blank",rel:"noopener noreferrer"}},[i("strong",[e._v("this one")]),i("OutboundLink")],1),e._v("!")])]),e._v(" "),i("p",[e._v("Check also the "),i("a",{attrs:{href:"https://facebook.github.io/prophet/",target:"_blank",rel:"noopener noreferrer"}},[i("strong",[e._v("Prophet")]),i("OutboundLink")],1),e._v(" project, from Facebook AI Labs!")]),e._v(" "),i("p",[e._v("Prophet is a procedure for forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects.")]),e._v(" "),i("p",[e._v("It works best with time series that have strong seasonal effects and several seasons of historical data.")]),e._v(" "),i("p",[e._v("Prophet is robust to missing data and shifts in the trend, and typically handles outliers well.")]),e._v(" "),i("h2",{attrs:{id:"time-series-forecasting-as-a-classification-problem"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#time-series-forecasting-as-a-classification-problem"}},[e._v("#")]),e._v(" Time Series Forecasting as a Classification Problem")]),e._v(" "),i("p",[e._v("A very useful approach to keep in mind when working with time series forecasting is to "),i("em",[e._v("treat the problem of forecasting as a classification problem.")])]),e._v(" "),i("p",[e._v('If treated in this way, the problem can be "simplified" and so be faced with a simpler problem to solve.')]),e._v(" "),i("p",[e._v("For example, "),i("strong",[e._v("preventing the exact price")]),e._v(" of Apple shares tomorrow could be a very difficult challenge, but fortunately, it is a problem that can be "),i("em",[e._v('"simplified"')]),e._v("!")]),e._v(" "),i("p",[e._v("An effective way to simplify this problem is to divide the space of tomorrow's possible prices (in terms of % variation) into bins!")]),e._v(" "),i("p",[e._v("For example with 20 bins, the classes would be: [-100%, -90%], [-90%,-80%]....the other bins...[+80%, +90%], [+90%,+100%].")]),e._v(" "),i("p",[i("strong",[e._v('This type of multiclass classification can be simplified "at-will"')]),e._v(", even going so far as to classify whether tomorrow the price will be higher or lower than today (binary classification, "),i("em",[e._v("higher")]),e._v(" or "),i("em",[e._v("lower")]),e._v(").")]),e._v(" "),i("p",[e._v("If you think about it, if you struggle to get a decent model for the simplest (binary) classification, you don't have much hope to predict the "),i("em",[e._v("exact value")]),e._v(" of the shares the next day!")]),e._v(" "),i("p",[e._v("This brings us to the next section of the guide, where you will learn how to deal with time series classification problems.")]),e._v(" "),i("p",[e._v("To read more about this approach:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://stats.stackexchange.com/questions/178413/forecasting-vs-classification",target:"_blank",rel:"noopener noreferrer"}},[e._v("Forecasting vs Classification"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.researchgate.net/publication/309492895_Forecasting_to_Classification_Predicting_the_direction_of_stock_market_price_using_Xtreme_Gradient_Boosting",target:"_blank",rel:"noopener noreferrer"}},[e._v("Forecasting to Classification: Predicting the direction of stock market price"),i("OutboundLink")],1)])]),e._v(" "),i("h2",{attrs:{id:"time-series-classification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#time-series-classification"}},[e._v("#")]),e._v(" Time Series Classification")]),e._v(" "),i("p",[e._v("The problem of time series classification is of "),i("em",[e._v("primary importance")]),e._v(" in the world of data mining, and over the last two decades, countless methods have been proposed to solve it.")]),e._v(" "),i("p",[e._v("Knowing how to predict the best choices in the near future is even vital in a variety of industrial scenarios or even "),i("em",[e._v("critical")]),e._v(" scenarios such as aircraft safety systems!")]),e._v(" "),i("p",[e._v("Some examples of time series classification problems are:")]),e._v(" "),i("ul",[i("li",[e._v("Predict whether a machine might break or not")]),e._v(" "),i("li",[e._v("predict whether a customer will leave a service or not")]),e._v(" "),i("li",[e._v("classify the type of disease of a patient by the time series of his heartbeat")]),e._v(" "),i("li",[e._v("classify an animal according to the sound it makes")]),e._v(" "),i("li",[e._v("predict anomalies and trend changes in quantities measured by the sensors")]),e._v(" "),i("li",[e._v("and many more...")])]),e._v(" "),i("p",[e._v("In this section of the guide, you can find a logical collection of all the resources that can be useful to take advantage of "),i("strong",[e._v("the power of modern time series classification methods")]),e._v(".")]),e._v(" "),i("p",[e._v("First of all, the site you must ** refer to** to find all the latest "),i("em",[e._v("datasets, techniques, papers, and code")]),e._v(" that you can use to solve your time series classification problems:")]),e._v(" "),i("blockquote",[i("p",[e._v("This website is an ongoing project to develop a comprehensive repository for research into time series classification.")])]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"http://www.timeseriesclassification.com/",target:"_blank",rel:"noopener noreferrer"}},[i("strong",[e._v("Time Series Classification Website")]),i("OutboundLink")],1)])]),e._v(" "),i("p",[e._v("For a complete comparison of all available useful methods and their tradeoffs, read:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.researchgate.net/profile/Anthony_Bagnall/publication/301856632_The_Great_Time_Series_Classification_Bake_Off_An_Experimental_Evaluation_of_Recently_Proposed_Algorithms_Extended_Version/links/579b580e08ae80bf6ea33d12.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Great Time Series Classification Bakeoff: An Experimental Evaluation"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://arxiv.org/pdf/1809.04356.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deep learning for time series classification: a review"),i("OutboundLink")],1)])]),e._v(" "),i("p",[e._v("A very hot (and very recent) method that has been proposed and you should be aware of:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://arxiv.org/abs/1910.13051",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROCKET: Exceptionally fast and accurate time series classification using random convolutional kernels"),i("OutboundLink")],1)])]),e._v(" "),i("p",[e._v("Another extremely effective method that is always worth trying is that of the "),i("a",{attrs:{href:"#The-Matrix-Profile"}},[e._v("matrix profile")]),e._v(" (next section).")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("Some methods are more precise, others more computationally performing, others can find complex relationships in the data (neural networks).\n"),i("strong",[e._v("A fundamental point")]),e._v(" is that "),i("em",[e._v("rarely")]),e._v(' it is worth choosing complex methods (such as a complicated recurrent neural network) over more "simple" ones, such as BOSS or DTW.')])]),e._v(" "),i("p",[e._v("Equipped with the methods considered here, it's almost guaranteed that you will find the perfect fit for the requirements of your problems.")]),e._v(" "),i("h2",{attrs:{id:"the-matrix-profile"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#the-matrix-profile"}},[e._v("#")]),e._v(" The Matrix Profile")]),e._v(" "),i("p",[e._v("From the "),i("a",{attrs:{href:"https://www.cs.ucr.edu/~eamonn/MatrixProfile.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("The UCR Matrix Profile Page"),i("OutboundLink")],1),e._v(" website:")]),e._v(" "),i("p",[e._v("The Matrix Profile (and the algorithms to compute it: STAMP, STAMPI, STOMP, SCRIMP, SCRIMP++, SWAMP, and GPU-STOMP), has the potential to "),i("strong",[e._v("revolutionize time series data mining")]),e._v(" because of its "),i("strong",[e._v("generality, versatility, simplicity, and scalability")]),e._v(".  In particular, it has implications for:")]),e._v(" "),i("ul",[i("li",[e._v("time series motif discovery")]),e._v(" "),i("li",[e._v("time series joins")]),e._v(" "),i("li",[e._v("shapelet discovery (classification)")]),e._v(" "),i("li",[e._v("density estimation")]),e._v(" "),i("li",[e._v("semantic segmentation")]),e._v(" "),i("li",[e._v("visualization")]),e._v(" "),i("li",[e._v("rule discovery")]),e._v(" "),i("li",[e._v("clustering")])]),e._v(" "),i("p",[e._v("To learn how to use the Matrix Profile for your times series classification problems go through these "),i("em",[e._v("invaluable")]),e._v(" resources:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.cs.ucr.edu/~eamonn/Matrix_Profile_Tutorial_Part1.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Time Series Data Mining Using the Matrix Profile: A Complete Tutorial"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.cs.ucr.edu/~eamonn/100_Time_Series_Data_Mining_Questions__with_Answers.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("100 Time Series Data Mining Questions and Answers"),i("OutboundLink")],1)])]),e._v(" "),i("p",[e._v("The recommended Python package that Virgilio suggests you to work with the Matrix Profile is "),i("a",{attrs:{href:"https://seanlaw.github.io/2019/05/13/stumpy/",target:"_blank",rel:"noopener noreferrer"}},[i("strong",[e._v("Stumpy")]),i("OutboundLink")],1),e._v(" (docs "),i("a",{attrs:{href:"https://stumpy.readthedocs.io/en/latest/Tutorial_STUMPY_Basics.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v("), which implements the latest and most efficient methods to calculate the Matrix Profile for your time series.")]),e._v(" "),i("blockquote",[i("p",[e._v("The Author of the package ("),i("a",{attrs:{href:"https://github.com/seanlaw",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sean Law"),i("OutboundLink")],1),e._v(") contributed to this guide too, reviewing it on GitHub and helping Virgilio collecting all the resources. You can find a lot of detailed tutorials about using Stumpy for the matrix profile on his "),i("a",{attrs:{href:"https://medium.com/@seanmylaw",target:"_blank",rel:"noopener noreferrer"}},[e._v("Medium Page"),i("OutboundLink")],1),e._v(".")])]),e._v(" "),i("p",[e._v("Other useful links are:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://matrixprofile.org/posts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Matrix Profile Foundation"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://matrixprofile.org/libraries/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Matrix Profile Foundation - Libraries"),i("OutboundLink")],1)])]),e._v(" "),i("p",[e._v("One of the (very many) advantages of the Matrix Profile is that you can calculate it "),i("em",[e._v("to feed it")]),e._v(" to a more traditional method of supervised classification.")]),e._v(" "),i("p",[e._v("In this sense, the Matrix Profile is also a method of automatic features extraction!")]),e._v(" "),i("h2",{attrs:{id:"automatic-time-series-feature-extraction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#automatic-time-series-feature-extraction"}},[e._v("#")]),e._v(" Automatic Time Series Feature Extraction")]),e._v(" "),i("p",[e._v("The extraction and engineering of features from data is "),i("em",[e._v("fundamental")]),e._v(" in the Data Science process, and time series are no different.")]),e._v(" "),i("p",[e._v("On the contrary, historically they offer additional challenges and require some knowledge of "),i("a",{attrs:{href:"https://zone.ni.com/reference/en-XX/help/372656C-01/lvasptconcepts/tsa_intro/",target:"_blank",rel:"noopener noreferrer"}},[i("em",[e._v("signal theory")]),i("OutboundLink")],1),e._v(" in order to be fully understood and exploited!")]),e._v(" "),i("p",[e._v("Luckily there are "),i("strong",[e._v("extremely intelligent methods")]),e._v(" to help you in this and extract the most important features automatically!")]),e._v(" "),i("p",[e._v("Say thanks to the creators of "),i("a",{attrs:{href:"https://github.com/blue-yonder/tsfresh",target:"_blank",rel:"noopener noreferrer"}},[i("strong",[e._v("Tsfresh")]),i("OutboundLink")],1),e._v(":")]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("TSFRESH automatically extracts 100s of features from time series")]),e._v(". Those features describe basic characteristics of the time series such as the number of peaks, the average or maximal value, or more complex features such as the time-reversal symmetry statistic.")])]),e._v(" "),i("blockquote",[i("p",[e._v("The set of features can then be used to construct "),i("strong",[e._v("machine learning models on the time series")]),e._v(" to be used for example in regression or classification tasks.\nTo avoid extracting irrelevant features, the TSFRESH package has a built-in filtering procedure. This filtering procedure "),i("strong",[e._v("evaluates the explaining power and importance of each feature")]),e._v(" for the regression or classification tasks at hand.")])]),e._v(" "),i("p",[e._v("Important links:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://tsfresh.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docs"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://gitter.im/tsfresh/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitter Community for Q&A"),i("OutboundLink")],1)])]),e._v(" "),i("h2",{attrs:{id:"conclusions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),i("p",[e._v("This guide is long and detailed, and you can use it as a clear path in becoming "),i("strong",[e._v("very proficient")]),e._v(" when working with time series, or as a "),i("strong",[e._v("reference")]),e._v(" for important resource links to keep in mind.")]),e._v(" "),i("p",[e._v("To become comfortable with the time series type of data will take commitment and dedication, in particular, it is highly recommended "),i("em",[e._v("to experiment with the methods")]),e._v(" proposed on datasets that you can find online, as well as "),i("em",[e._v("compose your dataset")]),e._v(" and work with it.")]),e._v(" "),i("p",[e._v("Remember that only by facing "),i("em",[e._v("small real projects")]),e._v(" will you fix your theoretical knowledge acquired with the resources Virgilio provides you!")])])}),[],!1,null,null,null);t.default=a.exports}}]);