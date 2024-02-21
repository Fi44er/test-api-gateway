import { Module } from '@nestjs/common';
import { UserSvcController } from './user-svc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_CONTROLLER_SERVICE_NAME, USER_CONTROLLER_SERVICE_NAME } from '../../proto/user-svc';
import * as path from 'path';

@Module({
  controllers: [UserSvcController],
  imports: [
    ClientsModule.register([
      {
        name: USER_CONTROLLER_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50051',
          package: 'user',
          protoPath:  path.join(__dirname, '../../../proto/user-svc.proto')
        }
      }
    ])
  ]
})
export class UserSvcModule {}