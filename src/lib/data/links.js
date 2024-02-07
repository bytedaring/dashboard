/**
 * @typedef {Object} Icon 
 * @prop {string} inactive
 * @prop {string} active
 */
/**
 * @typedef {Object} Link
 * @prop {string} name
 * @prop {string} [path]
 * @prop {Icon} icon
 * @prop {Array<Link>} [nested_links]
 */

/**
 * @type {Array<Link>}
 */
export const links = [
    {
        name: 'Dashboard',
        path: '/',
        icon: {
            inactive: 'ph:house',
            active: 'ph:house-fill',
        }
    },
    {
        name: 'Forms',
        path: '/forms',
        icon: {
            inactive: 'fluent:form-48-regular',
            active: 'fluent:form-48-filled'
        },
    },
    {
        name: 'Cards',
        path: '/cards',
        icon: {
            inactive: 'mdi:cards-outline',
            active: 'mdi:cards'
        }
    },
    {
        name: 'Tables',
        path: '/tables',
        icon: {
            inactive: 'mdi:file-table-box-outline',
            active: 'mdi:file-table-box'
        }
    },
    {
        name: 'Charts',
        path: '/charts',
        icon: {
            inactive: 'mdi:chart-pie-outline',
            active: 'mdi:chart-pie'
        }
    },
    {
        name: 'Pages',
        icon: {
            inactive: 'mdi:papers-outline',
            active: 'mdi:papers'
        },
        nested_links: [
            {
                name: 'Login',
                path: '/login',
                icon: {
                    inactive: 'solar:login-linear',
                    active: 'solar:login-bold'
                }
            },
            {
                name: 'Register',
                path: '/register',
                icon: {
                    inactive: 'bx:user',
                    active: 'bxs:user'
                }
            }
        ]
    }
]
