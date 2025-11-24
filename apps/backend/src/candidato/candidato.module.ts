import { Module } from '@nestjs/common';
import { CandidatoController } from './candidato.controller';
import { CandidatoPrisma } from './candidato.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [CandidatoController],
  providers: [CandidatoPrisma],
})
export class CandidatoModule {}
