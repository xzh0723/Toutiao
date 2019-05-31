import requests
import re
import json
import time
import execjs
from bs4 import BeautifulSoup

USER_URL = 'http://m.toutiao.com/profile/{}/'

ARTICLE_URL = 'https://www.toutiao.com/pgc/ma/?'

headers = {
    'accept': 'application/json, text/javascript',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/x-www-form-urlencoded',
    'referer': 'https://www.toutiao.com/c/user/6670378030/',
    'cookie': 'tt_webid=6671926853337499139; WEATHER_CITY=%E5%8C%97%E4%BA%AC; UM_distinctid=169af98f7173f9-0eb8ee59ff77c9-7a1b34-100200-169af98f71877c; tt_webid=6671926853337499139; csrftoken=0e2a6163cbc3e65c69e5fa46ac859dc8; _ga=GA1.2.1785891858.1553430338; login_flag=2ecae06e53bbe1652505e0f90529992a; sessionid=764b81fc33c9da5067c66b4c6b91392b; sid_tt=764b81fc33c9da5067c66b4c6b91392b; s_v_web_id=bb9c19729e2715375126c74276ddb3be; sso_uid_tt=5a92417706e138ccfff2f1786fb7b3eb; toutiao_sso_user=2a0b1aee0d4c2817f9e8173e34b9bf9a; uid_tt=8b3b61eddeff8508a075a4e4b39e73f0; sid_guard="764b81fc33c9da5067c66b4c6b91392b|1559295425|15552000|Wed\054 27-Nov-2019 09:37:05 GMT"; CNZZDATA1259612802=1292429429-1553425486-null%7C1559292983',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Mobile Safari/537.36',
    'x-requested-with': 'XMLHttpRequest'
}

def req_user(userId):
    """
    请求用户主页面
    :param userId: 用户ID
    :return:
    """
    url = USER_URL.format(userId)
    response = requests.get(url, headers=headers)
    return response.text

def parse_user(html):
    """
    解析用户主页
    :param html:
    :return:
    """
    soup = BeautifulSoup(html, 'lxml')
    userInfo = {
        'userName': soup.select('#username')[0].get_text(),
        'description': soup.select('#description')[0].get_text(),
        'avatar': soup.select('#userimage')[0]['data-pic'],
        'followee': soup.select('#followingnum')[0].get_text(),
        'follower': soup.select('#followernum')[0].get_text()
    }
    print(userInfo)
    mediaId = re.search("mediaId = '(.*?)' ,", html, re.S).group(1)
    return mediaId

def get_as_cp():
    """
    获取请求参数as, cp
    :return:
    """
    with open('as_cp.js', 'r') as f:
        js = f.read()

    ctx = execjs.compile(js)
    as_cp = ctx.call('get_as_cp')
    print(as_cp)
    as_ = as_cp['as']
    cp = as_cp['cp']
    return as_, cp

def get_article_list(userId, mediaId, as_, cp, num, max_behot_time=None):
    """
    获取文章列表
    :param userId:
    :param mediaId:
    :param as_:
    :param cp:
    :param num:
    :return:
    """
    params = {
        'page_type': '1',
        'max_behot_time': max_behot_time,
        'uid': userId,
        'media_id': mediaId,
        'output': 'json',
        'is_json': '1',
        'count': '20',
        'as': as_,
        'cp': cp,
        'from': 'user_profile_app',
        'version': '2',
        'callback': f'jsonp{num}'
    }
    response = requests.get(ARTICLE_URL, params=params, headers=headers)
    result = json.loads(re.search('jsonp{}\((.*?)\)'.format(num), response.text).group(1))
    return result

def parse_list(result):
    """
    解析列表页
    :param result:
    :return:
    """
    list_ = result['data']
    for li in list_:
        info = {}
        field_map = {
            'abstract': 'abstract',
            'article_url': 'article_url',
            'behot_time': 'behot_time',
            'comments_count': 'comments_count',
            'datetime': 'datetime',
            'detail_source': 'detail_source',
            'external_visit_count': 'external_visit_count_format',
            'internal_visit_count': 'internal_visit_count_format',
            'impression_count': 'impression_count',
            'go_detail_count': 'go_detail_count',
            'image_url': 'image_url',
            'keywords': 'keywords',
            'label': 'label',
            'title': 'title',
            'tag': 'tag',
            'total_read_count': 'total_read_count',
        }
        for field, attr in field_map.items():
            info[field] = li[attr]
        info['pass_time'] = li['verify_detail']['pass_time']
        create_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(li['create_time']))
        info['create_time'] = create_time
        print(info)
    max_behot_time = result['next']['max_behot_time']
    return max_behot_time

if __name__ == '__main__':
    userId = input('请输入你要下载的用户ID>> ')
    html = req_user(userId)
    mediaId = parse_user(html)
    as_, cp = get_as_cp()
    num = 3
    max_behot_time = ''
    while True:
        try:
            result = get_article_list(userId, mediaId, as_, cp, num, max_behot_time)
            max_behot_time = parse_list(result)
            if result.get('has_more'):
                num += 1
                continue
            else:
                break
        except Exception as e:
            print(e.args)
