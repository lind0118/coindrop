// If the icon's viewBox is `0 0 24 24`, you can ignore `viewBox`
// https://cryptologos.cc/

import { paymentMethodIcons } from '../../src/paymentMethods';

const otherIcons = {
    hamburgerMenu: {
        path: <path fill="currentColor" d="M492 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20zM492 76H20C8.954 76 0 84.954 0 96s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20zM492 396H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20z" />,
        viewBox: "0 0 512 512",
    },
    github: {
        path: <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />,
    },
    home: {
        path: <path d="M472.847 226.846l-34.116-34.116L250.998 4.997c-6.664-6.663-17.468-6.663-24.132 0L39.132 192.73 4.999 226.864c-6.548 6.78-6.361 17.584.419 24.132 6.614 6.388 17.099 6.388 23.713 0l4.983-5.018v214.801c0 9.426 7.641 17.067 17.067 17.067h375.467c9.426 0 17.067-7.641 17.067-17.067V245.978l5 5.001c6.78 6.548 17.584 6.36 24.132-.419 6.388-6.614 6.388-17.1 0-23.714zM290.115 443.713h-102.4V307.179h102.4v136.534zm119.466 0h-85.333v-153.6c0-9.426-7.641-17.067-17.067-17.067H170.648c-9.426 0-17.067 7.641-17.067 17.067v153.6H68.248V211.845L238.914 41.178l170.667 170.667v231.868z"/>,
        viewBox: "0 0 477.846 477.846",
    },
    logout: {
        path: <g>
            <path d="M255.15 468.625H63.787c-11.737 0-21.262-9.526-21.262-21.262V64.638c0-11.737 9.526-21.262 21.262-21.262H255.15c11.758 0 21.262-9.504 21.262-21.262S266.908.85 255.15.85H63.787C28.619.85 0 29.47 0 64.638v382.724c0 35.168 28.619 63.787 63.787 63.787H255.15c11.758 0 21.262-9.504 21.262-21.262 0-11.758-9.504-21.262-21.262-21.262z" />
            <path d="M505.664 240.861L376.388 113.286c-8.335-8.25-21.815-8.143-30.065.213s-8.165 21.815.213 30.065l92.385 91.173H191.362c-11.758 0-21.262 9.504-21.262 21.262 0 11.758 9.504 21.263 21.262 21.263h247.559l-92.385 91.173c-8.377 8.25-8.441 21.709-.213 30.065a21.255 21.255 0 0015.139 6.336c5.401 0 10.801-2.041 14.926-6.124l129.276-127.575A21.303 21.303 0 00512 255.998c0-5.696-2.275-11.118-6.336-15.137z" />
        </g>,
        viewBox: "0 0 512 512",
    },
    sourceCode: {
        path: <path d="M506.76 242.828l-118.4-125.44c-7.277-7.718-19.424-8.07-27.142-.787-7.706 7.277-8.064 19.43-.781 27.142l105.965 112.256-105.965 112.269c-7.283 7.712-6.925 19.859.781 27.142a19.151 19.151 0 0013.178 5.235 19.172 19.172 0 0013.965-6.01l118.4-125.446c6.981-7.404 6.981-18.963-.001-26.361zM151.566 368.262L45.608 255.999l105.958-112.262c7.277-7.712 6.925-19.866-.787-27.142-7.706-7.277-19.866-6.925-27.142.787l-118.4 125.44c-6.982 7.398-6.982 18.963 0 26.362L123.643 394.63c3.776 4 8.864 6.016 13.965 6.016 4.723 0 9.466-1.741 13.171-5.242 7.719-7.277 8.064-19.43.787-27.142zM287.061 52.697c-10.477-1.587-20.282 5.606-21.882 16.083l-56.32 368.64c-1.6 10.483 5.6 20.282 16.083 21.882.986.147 1.958.218 2.925.218 9.325 0 17.504-6.803 18.957-16.301l56.32-368.64c1.6-10.484-5.6-20.282-16.083-21.882z" />,
        viewBox: "0 0 511.997 511.997",
    },
    share: {
        path: <path fill="currentColor" d="M406 332c-29.641 0-55.761 14.581-72.167 36.755L191.99 296.124c2.355-8.027 4.01-16.346 4.01-25.124 0-11.906-2.441-23.225-6.658-33.636l148.445-89.328C354.307 167.424 378.589 180 406 180c49.629 0 90-40.371 90-90S455.629 0 406 0s-90 40.371-90 90c0 11.437 2.355 22.286 6.262 32.358l-148.887 89.59C156.869 193.136 132.937 181 106 181c-49.629 0-90 40.371-90 90s40.371 90 90 90c30.13 0 56.691-15.009 73.035-37.806l141.376 72.395C317.807 403.995 316 412.75 316 422c0 49.629 40.371 90 90 90s90-40.371 90-90-40.371-90-90-90z" />,
        viewBox: "0 0 512 512",
    },
};

export default {
    ...paymentMethodIcons,
    ...otherIcons,
};
