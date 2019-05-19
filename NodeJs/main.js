var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    console.log(_url);
    if(pathname === '/'){
      if(queryData.id === undefined){
 
        fs.readdir('./NodeJs/data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = template.list(filelist);
          var html = template.html(title,list,`<h2>${title}</h2>${description}`,'');
          response.writeHead(200);
          response.end(html);
        });
 
 
      } else {
        fs.readdir('./NodeJs/data', function(error, filelist){        
         
          fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
            var title = queryData.id;
            var list = template.list(filelist);
            var html = template.html(title,list,`<h2>${title}</h2>${description}`,template.form(title)

             );
            response.writeHead(200);
            response.end(html);
          });
        });
      }

      //글 추가
    }else if(pathname === '/create'){
      fs.readdir('./NodeJs/data', function(error, filelist){
        var title = 'WEB - create';
        var list = template.list(filelist);       
        var html = template.html(title,list,template.createForm 
         
        );
        response.writeHead(200);
        response.end(html);
      });
          //글 추가
    }else if(pathname === '/create_process'){
      var body = '';
      //웹 브라우저가 포스트 방식으로 데이터를 전송할 때, 데이터가 엄청 많을 때, 그 데이터를 한번에 처리를 하면 무리가 갈 수가 있다. 
      //Node.js에서는 포스트 방식으로 전송되는 데이터가 많은 경우를 대비해서 이런 사용 방법을 제공하고 있음.
      //예를 들어 100이 있으면, 조각조각의 양을 서버에서 수신할 때 마다, 서버는 이 콜백 함수를 호출하도록 약속되어 있음.
      //호출할 때, data라는 인자를 통해 수신한 정보를 주기로 약속함.       
      request.on('data',function(data){
          body = body + data; //콜백이 실행될 때 마다 body에 데이터를 추가해줌.

      });

      //end에 해당하는 콜백이 수신되면 정보 수신이 끝남을 지정해줌.
      request.on('end',function(){
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            fs.writeFile(`data/${title}`,description,'utf8',function(err){
              console.log('타이틀 : ' + title  , '내용 : ' + description);
              response.writeHead(302, {Location: `/?id=${title}`}); //302는 다른 곳으로 보내버림.
              response.end();
            
            });
            
      });

    //글 수정
    }else if(pathname === '/update'){
      fs.readdir('./NodeJs/data', function(error, filelist){
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;

          var list = template.list(filelist);       
      
          var html = template.html(title, list,template.updateProcess(title,description) );         
         
          response.writeHead(200);
          response.end(html);
        });
      });
      //글 수정
    } 
    else if(pathname === '/update_process'){
      var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          var id = post.id;
          var title = post.title;
          var description = post.description;
          fs.rename(`data/${id}`, `data/${title}`, function(error){  //파일 이름 변경
            fs.writeFile(`data/${title}`, description, 'utf8', function(err){ 
              response.writeHead(302, {Location: `/?id=${title}`});
              response.end();
            })
          });
      });     
    }  
     //글삭제
    else if(pathname === '/delete_process'){
      var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          var id = post.id;
          fs.unlink(`data/${id}`,function(error){
            response.writeHead(302, {Location: `/`}); //홈으로 리 다이렉션
            response.end();
          });
      });
    } 
    
    else {
      response.writeHead(404);
      response.end('Not found');
    }
 
});

app.listen(3000);

console.log('hello no daemon');