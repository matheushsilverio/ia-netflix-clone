import tokenService from '@/services/tokenService';

export function validateMaintenance(to, router) {
  const isMaintenance = process.env.VUE_APP_UNDER_MAINTENANCE === 'true';

  if (isMaintenance) {
    if (to.path !== '/manutencao') {
      return router.push({ name: 'Maintenance' });
    }
  } else {
    if (to.path === '/manutencao') {
      return router.push('/');
    }
  }
}

export function validateToken() {
  const hasToken = !!tokenService.get();
  return hasToken;
}
