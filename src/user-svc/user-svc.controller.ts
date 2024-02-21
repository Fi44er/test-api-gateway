import { Body, Controller, Inject, OnModuleInit, Post, Res } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { UserAgent } from 'libs/common/src/decorators/user-agent.decorator';
import { AUTH_CONTROLLER_SERVICE_NAME, Agent, AuthControllerClient, LoginReq, Response, Tokens, USER_CONTROLLER_SERVICE_NAME } from 'proto/user-svc';
import { Observable } from 'rxjs';

@Controller('user-svc')
export class UserSvcController implements OnModuleInit{
    private authClient: AuthControllerClient

    @Inject(USER_CONTROLLER_SERVICE_NAME)
    private readonly client: ClientGrpc

    public onModuleInit() {
        this.authClient = this.client.getService<AuthControllerClient>(AUTH_CONTROLLER_SERVICE_NAME)
    }

    // ------------------------- Methods User SVC ------------------------- //

    @Post('login')
    login(@Body() dto: LoginReq["dto"], @Res() res: Response, @UserAgent() agent: string): Observable<Tokens> {
        const kHeaders = Object.getOwnPropertySymbols(res["req"]).find(symbol => symbol.toString() === "Symbol(kHeaders)");
        const cookie = res["req"][kHeaders].cookie;


        // const tokens = await this.authClient.login({ dto, res, agent });
        return this.authClient.login({ dto, cookie, agent })
    }
}
