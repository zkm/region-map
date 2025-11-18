#!/usr/bin/env python3
"""Simple HTTP server that suppresses BrokenPipeError exceptions"""

import http.server
import socketserver
import sys

PORT = 8000

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        # Only log successful requests
        if args[1] == '200':
            super().log_message(format, *args)
    
    def handle(self):
        try:
            super().handle()
        except BrokenPipeError:
            # Silently ignore broken pipe errors
            pass

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), QuietHandler) as httpd:
        print(f"Server running at http://localhost:{PORT}/")
        print("Press Ctrl+C to stop")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            sys.exit(0)
