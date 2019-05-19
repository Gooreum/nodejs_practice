var template = {
    html: function(title,list,body, control){
      var template = `
      <!doctype html>
    <html>
    <head>
      <title>WEB - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `
      return template;
    },list : function(filelist){
      var list = '<ul>';
      var i = 0;
      while(i < filelist.length){
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i = i + 1;
      }
      list = list+'</ul>';
    
      return list;
    },
    form :function(title){
        var create = 
        `<a href="/create">create</a>
        <a href="/update?id=${title}">update</a>
        
       <form action="delete_process" method="POST" >
         <input type="hidden" name = "id" value="${title}">
         <input type="submit" value="delete">
       </form>
         `;
         return create;
      } ,
      createForm :  `<form action="/create_process" method="POST">
      <p><input type = "text" name="title" placeholder="title"></p>
      <p><textArea name="description" placeholder="description"></textArea></p>
      <p><input type="submit"></p>
      </form>`

     , updateProcess: function(title,description){
          var update = 
        `
        <form action="/update_process" method="post">
          <input type="hidden" name="id" value="${title}">
          <p><input type="text" name="title" placeholder="title" value="${title}"></p>
          <p>
            <textarea name="description" placeholder="description">${description}</textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
        <a href="/create">create</a> <a href="/update?id=${title}">update</a> `

        return update;
      }
     
  }

  module.exports = template;

