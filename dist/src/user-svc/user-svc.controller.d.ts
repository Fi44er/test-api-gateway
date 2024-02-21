import { OnModuleInit } from '@nestjs/common';
import { LoginReq, Response, Tokens } from 'proto/user-svc';
import { Observable } from 'rxjs';
export declare class UserSvcController implements OnModuleInit {
    private authClient;
    private readonly client;
    onModuleInit(): void;
    login(dto: LoginReq["dto"], res: Response, agent: string): Observable<Tokens>;
}
