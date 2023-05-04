
const fs=require('fs');


let codeHandler=(req,res)=>{

    const url =req.url; 

    if(url === '/'){ 
        res.setHeader('Content-Type','text/html');
        res.write('<http>');
        res.write('<head><title>My Node js Page</title></head>')
        res.write('<body><form action="/message" method="post"><input type="text" name="message"> <button type="submit">Submit</button></form></body>')
        res.write('</http>')

        return res.end

    }

 if(url === '/message' && req.method=='POST'){

    let dataofChunkBuffer=[]


    req.on("data",(chunk)=>{

        dataofChunkBuffer.push(chunk);

    });


    return req.on("end",()=>{

        let buffermessage=Buffer.concat(dataofChunkBuffer).toString();

        let message=buffermessage.split('=')[1]

        fs.writeFile('message.txt',message,(error)=>{
            res.statusCode=30;
            r2es.setHeader('Location','/')
            return  res.end;


        });




    })

       





    }
    
    

    res.setHeader('Content-Type','text/html');
    res.write('<http>');
    res.write('<head><title>My Node js Page</title></head>')
    res.write('<body><h1>Hello to my nodejs Page</h1></body>')
    res.write('</http>')
    return res.end;

    


}

exports.handeler=codeHandler;