# Lottery Results Scraper with API

### Step by Step Guide
**Step 1**: Clone the repo


**Step 2**: run `cd Lottery-Result-Scraper`

**Step 3**: run `npm install`

**Step 4**: This app is run on port 3000. So run the project with

    node index.js
   if you have nodemon installed,

    nodemon index.js
 **Step 5**: You can send API request to this endpoint if you running on locally
			 

    localhost:3000/{Lottery provider}/results
(As for now only have NLB so use `nlb` as provider.)

Method: `POST`

Sample Request: 

`
{
	"name": "supiri-vasana",
	"date": "2019-03-25"
}`

Use exact date format (`YYYY-MM-DD`) and you can use these names for the get relevent lottery results.

| Name Request Code | Lottery Name  |
|--|--|
| dhana-nidhanaya | Dhana Nidhanaya |
| mega-power | Mega Power |
| mahajana-sampatha | Mahajana Sampatha |
| govisetha | Govisetha |
| jathika-sampatha | Jathika Sampatha |
| delakshapathi | Delakshapathi Double Dreams |
| neeroga | Neeroga |
| sampath-rekha | Sampath Rekha |
| supiri-vasana | Supiri Vasana | 
| vasana-sampatha | Vasana Sampatha |
| sevana | Sevana |
| dollar-fortune | Dollar Fortune |
| super-fifty | Vasana Super Fifty |

Then you will Receive this type of sample response.

    [
	    {
	        "name": "Supiri Vasana"
	    },
	    {
	        "date": "2019-03-25"
	    },
	    {
	        "draw_no": "1415"
	    },
	    {
	        "results": [
	            "11",
	            "39",
	            "50",
	            "51",
	            "61",
	            "16",
	            "49"
	        ]
	    }
	]
### Used Libraries

 - Axios
 - Express
 - Cheerio ([https://www.npmjs.com/package/cheerio](https://www.npmjs.com/package/cheerio))

### How to contribute
If any change in Scraped website can cause malfunctioning in the script. So you can report them by creating an issue. If you can solve them or add features open an issue and put a PR.

*Hail FOSS!*
