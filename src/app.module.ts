import { Module } from '@nestjs/common';
import { UserSvcModule } from './user-svc/user-svc.module';


@Module({
  imports: [UserSvcModule],

})
export class AppModule {}
