const SMTPServer = require("smtp-server").SMTPServer;

const server = new SMTPServer({
    allowInsecureAuth:true,
    authOptional:true,

    onConnect(session,cb){
        console.log(`onConnect`,session.id)
        cb();
    },

    onMailFrom(address,session,cb){
        console.log(`mail from`,address.address,session.id);
        cb();
    },
    onRcptTo(address,session,cb){
        console,log(`rec from`,address.address,session.id);
        cb();
    },
    onData(stream,session,cb){
        stream.on('data',(data)=>console.log(`onData ${data.toString}`));
        stream.on('end',cb());
    },
    onClose(session,cb){
        console.log(`closing `,session.id);
        cb();
    }

});

server.listen(25,()=> console.log("server started"));