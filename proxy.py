"""三角洲老板点单 - 企业微信API本地代理
解决CORS跨域问题：HTML -> localhost:8765 -> 企业微信API
"""
from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.request
import urllib.parse
import json

class ProxyHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        params = urllib.parse.parse_qs(parsed.query)
        target = params.get('url', [None])[0]
        if not target:
            self.send_json({'error': 'missing url param'})
            return
        try:
            req = urllib.request.Request(target)
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = resp.read()
                self.send_json(json.loads(data))
        except Exception as e:
            self.send_json({'error': str(e)})

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        params = urllib.parse.parse_qs(parsed.query)
        target = params.get('url', [None])[0]
        if not target:
            self.send_json({'error': 'missing url param'})
            return
        try:
            length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(length) if length else b'{}'
            req = urllib.request.Request(target, data=body, headers={'Content-Type': 'application/json'})
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = resp.read()
                self.send_json(json.loads(data))
        except Exception as e:
            self.send_json({'error': str(e)})

    def send_json(self, data):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode())

    def log_message(self, format, *args):
        print('[PROXY] %s' % (args[0]))

if __name__ == '__main__':
    server = HTTPServer(('127.0.0.1', 8765), ProxyHandler)
    print('🚀 企业微信本地代理已启动: http://127.0.0.1:8765')
    print('   现在去测试企业微信通知吧！')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n已关闭')
