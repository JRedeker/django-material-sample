// import { MDCTopAppBar } from '@material/top-app-bar';


var app_bar = document.getElementById('app-bar');

const drawer = mdc.drawer.MDCDrawer.attachTo(document.getElementById('drawer'));

// const topAppBar = new mdc.MDCTopAppBar(document.querySelector('.mdc-top-app-bar'))

const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(app_bar);
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});