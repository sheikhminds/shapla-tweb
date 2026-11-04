import {SETTINGS_INIT} from '@config/state';
import {getAccentPresetsForBase, shaplaDefaultWallPaper, SHAPLA_ACCENTS, SHAPLA_GREEN, SHAPLA_MESSAGES, SHAPLA_RED} from '@config/themePresets';
import type {BaseTheme} from '@layer';

const BASES: BaseTheme['_'][] = ['baseThemeClassic', 'baseThemeDay', 'baseThemeNight', 'baseThemeTinted'];
const THEMES = ['day', 'night', 'light', 'tinted'] as const;

const factory = (name: typeof THEMES[number]) => SETTINGS_INIT.themes.find((theme) => theme.name === name);

describe('the Shapla palette', () => {
  test('is the two colours of the flag', () => {
    expect(SHAPLA_GREEN).toBe(0x006A4E);
    expect(SHAPLA_RED).toBe(0xF42A41);
  });

  test('is the factory look of every base of every theme', () => {
    for(const name of THEMES) {
      const theme = factory(name);
      expect(theme, name).toBeTruthy();
      expect(theme.settings.length, name).toBe(BASES.length);

      for(const settings of theme.settings) {
        const base = settings.base_theme._;
        expect(settings.accent_color, `${name} ${base}`).toBe(SHAPLA_ACCENTS[base]);
        expect(settings.message_colors, `${name} ${base}`).toEqual(SHAPLA_MESSAGES[base]);
      }
    }
  });

  test('is the first accent swatch of every base', () => {
    for(const base of BASES) {
      const [shapla] = getAccentPresetsForBase(base);
      expect(shapla.id, base).toBe(201);
      expect(shapla.accent_color, base).toBe(SHAPLA_ACCENTS[base]);
      expect(shapla.message_colors, base).toEqual(SHAPLA_MESSAGES[base]);
      expect(shapla.wallpaper, base).toBeDefined();
    }
  });

  test('keeps tweb\'s sign convention for dark wallpapers', () => {
    expect(shaplaDefaultWallPaper('light').settings.intensity).toBe(50);
    expect(shaplaDefaultWallPaper('light').pFlags.dark).toBeUndefined();

    const night = shaplaDefaultWallPaper('night');
    expect(night.settings.intensity).toBe(-50);
    expect(night.pFlags.dark).toBe(true);
    expect(night.settings.background_color).toBe(0x061C16);
  });
});
