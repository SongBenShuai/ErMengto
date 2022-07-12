import layout from '../../layout'

export default {
  path: '',
  name: 'manager',
  component: layout,
  children: [
    {
      path: '/sys/users',
      name: 'users',
      component: () => import('../../views/users')
    },
    {
      path: '/sys/roles',
      name: 'roles',
      component: () => import('../../views/roles')
    },
    {
      path: '/sys/menus',
      name: 'menus',
      component: () => import('../../views/menus')
    }
  ]
}
