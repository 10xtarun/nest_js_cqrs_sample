/**
 * each action is called command
 * application always reacts to dispatched commands
 * commands can be dispatched from  service / controller
 * commands are consumed by command handlers
 */

import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { KillDragonCommand } from '../commands/kill-dragon.commands'

@Injectable()
export class HeroesGameServices {
  // instantiate command bus of CQRS
  constructor(private commandBus: CommandBus) {}

  // method to kill dragon
  async killDragon(heroId: string, killDragonDto: KillDragonDto) {
    return this.commandBus.execute(
      // Instantiate new object of KillDragonCommand Action
      new KillDragonCommand(heroId, killDragonDto.dragonId),
    );
  }
}
