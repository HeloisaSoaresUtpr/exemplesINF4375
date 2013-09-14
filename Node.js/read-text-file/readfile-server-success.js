/*
 * Copyright 2012 Jacques Berger.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var fs = require("fs");
var http = require("http");

function generateHtmlDocument(title, data) {
  return "<!DOCTYPE html><html><head><meta charset='utf-8'><title>" +
         title + "</title></head><body><p>" + data + "</p></body></html>";
}

http.createServer(function (req, res) {

  fs.readFile("textfile", function(err, data) {
    if (err) {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write(generateHtmlDocument("File not found!", 
                             "The requested file was not found on the server."));
    } else {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(generateHtmlDocument("File content", data));
    }
    res.end();
  });

}).listen(3000);
