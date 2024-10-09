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
        path: <path fill="currentColor" d="M506.76 242.828l-118.4-125.44c-7.277-7.718-19.424-8.07-27.142-.787-7.706 7.277-8.064 19.43-.781 27.142l105.965 112.256-105.965 112.269c-7.283 7.712-6.925 19.859.781 27.142a19.151 19.151 0 0013.178 5.235 19.172 19.172 0 0013.965-6.01l118.4-125.446c6.981-7.404 6.981-18.963-.001-26.361zM151.566 368.262L45.608 255.999l105.958-112.262c7.277-7.712 6.925-19.866-.787-27.142-7.706-7.277-19.866-6.925-27.142.787l-118.4 125.44c-6.982 7.398-6.982 18.963 0 26.362L123.643 394.63c3.776 4 8.864 6.016 13.965 6.016 4.723 0 9.466-1.741 13.171-5.242 7.719-7.277 8.064-19.43.787-27.142zM287.061 52.697c-10.477-1.587-20.282 5.606-21.882 16.083l-56.32 368.64c-1.6 10.483 5.6 20.282 16.083 21.882.986.147 1.958.218 2.925.218 9.325 0 17.504-6.803 18.957-16.301l56.32-368.64c1.6-10.484-5.6-20.282-16.083-21.882z" />,
        viewBox: "0 0 511.997 511.997",
    },
    share: {
        path: <path fill="currentColor" d="M406 332c-29.641 0-55.761 14.581-72.167 36.755L191.99 296.124c2.355-8.027 4.01-16.346 4.01-25.124 0-11.906-2.441-23.225-6.658-33.636l148.445-89.328C354.307 167.424 378.589 180 406 180c49.629 0 90-40.371 90-90S455.629 0 406 0s-90 40.371-90 90c0 11.437 2.355 22.286 6.262 32.358l-148.887 89.59C156.869 193.136 132.937 181 106 181c-49.629 0-90 40.371-90 90s40.371 90 90 90c30.13 0 56.691-15.009 73.035-37.806l141.376 72.395C317.807 403.995 316 412.75 316 422c0 49.629 40.371 90 90 90s90-40.371 90-90-40.371-90-90-90z" />,
        viewBox: "0 0 512 512",
    },
    dice2: {
        path: <path fill="currentColor" d="M196.67 199.099V42.43c0-11.028-8.972-20-20-20H20c-11.028 0-20 8.972-20 20v156.669c0 11.028 8.972 20 20 20h156.67c11.028 0 20-8.971 20-20zm-152.996-3.055c-11.369 0-20.618-9.249-20.618-20.617 0-11.369 9.249-20.618 20.618-20.618 11.368 0 20.617 9.249 20.617 20.618 0 11.368-9.249 20.617-20.617 20.617zm0-109.323c-11.369 0-20.618-9.249-20.618-20.618 0-11.368 9.249-20.617 20.618-20.617 11.368 0 20.617 9.249 20.617 20.617 0 11.369-9.249 20.618-20.617 20.618zm56.031 53.114c-11.368 0-20.617-9.249-20.617-20.617S88.337 98.6 99.705 98.6c11.369 0 20.618 9.249 20.618 20.617s-9.249 20.618-20.618 20.618zm53.291 56.209c-11.368 0-20.617-9.249-20.617-20.617 0-11.369 9.249-20.618 20.617-20.618s20.617 9.249 20.617 20.618c0 11.368-9.249 20.617-20.617 20.617zm0-109.323c-11.368 0-20.617-9.249-20.617-20.618 0-11.368 9.249-20.617 20.617-20.617s20.617 9.249 20.617 20.617c0 11.369-9.249 20.618-20.617 20.618zM426.504 246.651c-1.236-5.209-4.414-9.617-8.948-12.411l-133.371-82.201a19.908 19.908 0 00-10.453-2.961c-7.022 0-13.402 3.549-17.067 9.494l-82.201 133.372c-5.785 9.388-2.854 21.733 6.533 27.52l133.372 82.201a19.902 19.902 0 0010.452 2.961c7.023 0 13.403-3.549 17.067-9.494l82.201-133.371c2.794-4.535 3.652-9.901 2.415-15.11zm-165.142-40.25a20.482 20.482 0 012.51-15.58c3.782-6.138 10.35-9.802 17.566-9.802 3.811 0 7.546 1.061 10.802 3.067 9.678 5.965 12.699 18.691 6.734 28.369-3.783 6.139-10.351 9.803-17.567 9.803a20.584 20.584 0 01-10.802-3.067 20.49 20.49 0 01-9.243-12.79zm19.832 74.614a20.483 20.483 0 012.508-15.579c3.784-6.138 10.351-9.802 17.567-9.802a20.59 20.59 0 0110.803 3.067 20.481 20.481 0 019.242 12.79 20.483 20.483 0 01-2.508 15.579c-3.783 6.138-10.35 9.802-17.566 9.802a20.59 20.59 0 01-10.803-3.067 20.485 20.485 0 01-9.243-12.79zm53.488 81.867c-3.783 6.139-10.351 9.803-17.567 9.803a20.584 20.584 0 01-10.802-3.067 20.487 20.487 0 01-9.243-12.79 20.485 20.485 0 012.508-15.58c3.783-6.138 10.351-9.802 17.567-9.802 3.811 0 7.546 1.061 10.802 3.067 9.678 5.964 12.699 18.691 6.735 28.369z" />,
        viewBox: "0 0 427.056 427.056",
    },
    dice: {
        path: <g>
            <path fill="currentColor" d="M78.92 52.367L65.8 19.606a4.518 4.518 0 00-5.873-2.514L27.164 30.214a4.525 4.525 0 00-2.515 5.874l13.122 32.76a4.519 4.519 0 005.875 2.514L76.405 58.24a4.523 4.523 0 002.515-5.873zM75.1 54.99L42.345 68.112a.992.992 0 01-.78-.008 1.011 1.011 0 01-.544-.557L27.9 34.787a1.017 1.017 0 01.566-1.323l32.76-13.122a1.017 1.017 0 011.322.565L75.67 53.668a1.017 1.017 0 01-.57 1.322z"/>
            <path fill="currentColor" d="M44.446 35.437a5.193 5.193 0 102.731 6.818 5.161 5.161 0 00-2.732-6.818zm-.487 5.441a1.694 1.694 0 01-3.13-.037 1.7 1.7 0 011.571-2.324 1.693 1.693 0 011.557 2.361zM63.213 43.469a5.194 5.194 0 102.731 6.819 5.2 5.2 0 00-2.732-6.82zm-.487 5.441a1.695 1.695 0 11-1.555-2.36 1.674 1.674 0 01.664.137 1.7 1.7 0 01.891 2.223zM99.157 66.906H63.866a4.523 4.523 0 00-4.517 4.518v35.291a4.522 4.522 0 004.517 4.517h35.291a4.523 4.523 0 004.518-4.517V71.424a4.523 4.523 0 00-4.518-4.518zm1.018 39.809a1.018 1.018 0 01-1.018 1.017H63.866a1.018 1.018 0 01-1.017-1.017V71.424a1.018 1.018 0 011.017-1.018h35.291a1.018 1.018 0 011.018 1.018z"/>
            <path fill="currentColor" d="M71.306 74.463a5.194 5.194 0 105.194 5.194 5.2 5.2 0 00-5.194-5.194zm0 6.888A1.694 1.694 0 1173 79.657a1.7 1.7 0 01-1.694 1.694zM91.718 74.463a5.194 5.194 0 105.194 5.194 5.2 5.2 0 00-5.194-5.194zm0 6.888a1.694 1.694 0 111.694-1.694 1.7 1.7 0 01-1.694 1.694zM71.306 93.288a5.194 5.194 0 105.194 5.193 5.2 5.2 0 00-5.194-5.193zm0 6.888A1.694 1.694 0 1173 98.481a1.7 1.7 0 01-1.694 1.695zM91.718 93.288a5.194 5.194 0 105.194 5.193 5.2 5.2 0 00-5.194-5.193zm0 6.888a1.694 1.694 0 111.694-1.7 1.7 1.7 0 01-1.694 1.7z"/>
        </g>,
        viewBox: "0 0 128 128",
    },
};

export default {
    ...paymentMethodIcons,
    ...otherIcons,
};
