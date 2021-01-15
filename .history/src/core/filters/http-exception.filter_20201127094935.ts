import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus
} from "@nestjs/common";
// import { SERVER_ERROR, UNAUTHORIZED, INVALID_PARAMS, FORBIDDEN } from "./../shared/errors";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        // let error = SERVER_ERROR;
        // let status = HttpStatus.INTERNAL_SERVER_ERROR;
        // if (exception instanceof HttpException) {
        //     status = exception.getStatus();
        //     if (status == HttpStatus.BAD_REQUEST) {
        //         error = INVALID_PARAMS;
        //     }
        //     else if(status == HttpStatus.UNAUTHORIZED){
        //         error = UNAUTHORIZED;
        //     }
        //     else if(status == HttpStatus.FORBIDDEN){
        //         error = FORBIDDEN;
        //     }
        // }
        
        // if (response && response.message) {
        //     const message = response.message;
        //     if(typeof message != 'string' && typeof message != 'object'){
        //         error = message;
        //     }
        // }

        console.log(exception);
        
        response.status(status).json({
            error: 'error'
        });
    }
}
