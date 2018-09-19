import { ColorPickerModule } from './color-picker.module';

describe('ColorPickerModule', () => {
  let colorPickerModule: ColorPickerModule;

  beforeEach(() => {
    colorPickerModule = new ColorPickerModule();
  });

  it('should create an instance', () => {
    expect(colorPickerModule).toBeTruthy();
  });
});
