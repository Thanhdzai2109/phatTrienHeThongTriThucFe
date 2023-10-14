import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Cetificate',
    url: '/cetificate/cetificateTT',
    iconComponent: { name: 'cilSpreadsheet' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
];
