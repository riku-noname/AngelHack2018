import urllib
import urllib2
import cookielib

opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cookielib.CookieJar()))

post = {
    "Id" : '3',
    "Pressure" : 4000
}

data = urllib.urlencode(post)
conn = opener.open('http://192.168.100.102:3000', data)

ofs = open('out.html', 'w')
ofs.write(conn.read())
ofs.close()
