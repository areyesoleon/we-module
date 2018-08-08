import { OpcionModuleModule } from './opcion-module.module';

describe('OpcionModuleModule', () => {
  let opcionModuleModule: OpcionModuleModule;

  beforeEach(() => {
    opcionModuleModule = new OpcionModuleModule();
  });

  it('should create an instance', () => {
    expect(opcionModuleModule).toBeTruthy();
  });
});
