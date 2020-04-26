


const _baseDir = '/assets/';
const Assets = {
  images: _baseDir + 'images/',

}

export const AssetsGetLogo = (logoStr = '') => {
  return Assets.images + `logo/logo${logoStr}.png`;
}

export const AssetsGetLogoTheme = (themeColor = '') => {
  let logoUrl: string;
  switch (themeColor) {
    case 'light':
      logoUrl = AssetsGetLogo('-light');
      break;
    case 'dark':
      logoUrl = AssetsGetLogo('-dark')
      break;
    case 'symbol-light':
      logoUrl = AssetsGetLogo('-symbol-light')
      break;
    case 'symbol-dark':
      logoUrl = AssetsGetLogo('-symbol-dark')
      break;

    default:
      logoUrl = AssetsGetLogo('')
      break;
  }
  return logoUrl;
}
