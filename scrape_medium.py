import requests
from bs4 import BeautifulSoup
import json
import re
import sys

def scrape_medium_blogs(username):
    url = f'https://medium.com/@{username}'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find all article elements
        articles = soup.find_all('article')
        
        blog_posts = []
        
        for article in articles:
            try:
                # Extract link
                link_element = article.find('a', href=True)
                if not link_element:
                    continue
                
                link = link_element['href']
                if not link.startswith('https://'):
                    link = f"https://medium.com{link}"
                
                # Extract title
                title_element = article.find('h2')
                if not title_element:
                    continue
                
                title = title_element.get_text(strip=True)
                
                # Extract excerpt
                excerpt_element = article.find('h3') or article.find('p')
                excerpt = excerpt_element.get_text(strip=True) if excerpt_element else ""
                
                # Extract image (if available)
                img_element = article.find('img')
                image_url = img_element['src'] if img_element and 'src' in img_element.attrs else ""
                
                # Extract date
                date_element = article.find('time')
                date = date_element.get_text(strip=True) if date_element else ""
                
                # Estimated read time (usually in the format "X min read")
                read_time_text = article.find(text=re.compile(r'\d+\s*min read'))
                read_time = "5" # Default value
                if read_time_text:
                    match = re.search(r'(\d+)\s*min read', read_time_text)
                    if match:
                        read_time = match.group(1)
                
                # Only add if we have at least a title and link
                if title and link:
                    blog_posts.append({
                        'title': title,
                        'excerpt': excerpt,
                        'link': link,
                        'imageUrl': image_url,
                        'date': date,
                        'readTime': read_time
                    })
            except Exception as e:
                print(f"Error processing article: {e}", file=sys.stderr)
                continue
        
        # Sort by engagement (for now just return the first 3 since we can't easily get engagement metrics)
        return blog_posts[:3]
    
    except Exception as e:
        print(f"Error scraping Medium: {e}", file=sys.stderr)
        return []

if __name__ == "__main__":
    username = "kimutai.lawrence19"
    posts = scrape_medium_blogs(username)
    
    # Print the results as JSON
    print(json.dumps(posts, indent=2))