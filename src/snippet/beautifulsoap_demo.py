from bs4 import BeautifulSoup
import urllib
import urllib.request

# http://beautifulsoup.readthedocs.io/zh_CN/latest/

url = "http://www.qiushibaike.com/"
print(url)
user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
req = urllib.request.Request(url, headers={
    'User-Agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
})
response = urllib.request.urlopen(req)
content = response.read().decode('utf-8')
print(content)
soup = BeautifulSoup(content, "lxml")
items1 = soup.select("div.author a img")
items2 = soup.select("a div.content span")
items3 = soup.select("div.thumb a img")
n = 0
length1 = len(items1)
length3 = len(items3)
while n < length1:
    print('作者信息：\n名称：'+items1[n]['alt']+'\n头像链接：'+items1[n]['src']+'\n\n')
    print('段子信息：\n段子：'+items2[n].text+'\n')
    #以免有些没有图片的段子报错
    if n < length3:
        print('段子图片链接：'+items3[n]['src']+'\n\n\n')
    else:
        print('\n\n\n')
    n += 1