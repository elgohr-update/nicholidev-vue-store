import areIntlLocalesSupported from 'intl-locales-supported'

export const importIntlPolyfill = async () => {
  const IntlPolyfill = await import('intl')
  global.Intl = IntlPolyfill.default
}

export const checkForIntlPolyfill = async (storeView) => {
  if (global.Intl) {
    if (!areIntlLocalesSupported(storeView.i18n.defaultLocale)) {
      await importIntlPolyfill()
    }
  } else {
    await importIntlPolyfill()
  }
}
