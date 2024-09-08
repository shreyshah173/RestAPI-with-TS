import http from 'http';

export class ApiRoutes {
    public static mapRoutes(req: http.IncomingMessage, res: http.ServerResponse) {
        // res.setHeader('Content-Type','text/html');
        let url:string | undefined = req.url;
        let method:string | undefined = req.method;
        let result : string = '';
        if(url === '/' && method==='GET'){
            result = '<h3>Hello World</h3>';
        }
        else if(url ==='/home' && method==='GET'){
            result = '<h3>Welcome to home page</h3>';
        }
        else{
            result = '<h3>This page is not defined</h3>';
        }
        res.end(result);
    }
}
