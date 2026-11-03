CDS227 FOUNDATION OF DATA ENGINEERING — UPDATED CODEBOOK

This version adds content based on the three uploaded notebooks:
- API.ipynb: TMDB top-rated movie API; response.json()['results']; title,
  original_language, overview and popularity; pagination and DataFrame concat.
- book_Web_Scraping.ipynb: Books to Scrape; article.product_pod; Title, Price,
  Rating, Stock/Availability; catalogue pages 1 to 50; CSV export/download.
- oyoWebScraping.ipynb: OYO search page; browser-like request headers; hotel
  cards; name, star_rating, num_rating, image, price and Address; optional
  field handling; DataFrame and CSV export.

Run locally:
1. Extract the ZIP.
2. Open index.html, or use VS Code Live Server.
3. No npm or build step is required.

Python snippets are intended for Google Colab. If needed:
!pip install requests beautifulsoup4 lxml pandas scikit-learn

SECURITY:
The uploaded API notebook contains a hard-coded API credential. It is not
reproduced in this website. Revoke/regenerate that credential and use your
own private key. Do not commit API keys to GitHub.

NOTES:
- Match filenames and column names exactly to the question.
- Inspect df.columns for CSV questions.
- Inspect HTML with soup.prettify() before changing selectors.
- OYO HTML selectors may change and its page may rely on JavaScript.
- Respect site terms, robots policy and request limits.
