import $ from 'jquery';

export const disableBrowserBack = (param) => {
    console.log(param)
    return (function () {
        history.pushState(null, null, document.URL);
        if (window.history && window.history.pushState) {
            $(window).on('popstate', function () {
                window.history.pushState('forward', null, '');
                window.history.forward(1);
            });
        }
        //ie浏览器
        window.history.pushState('forward', null, '');
        window.history.forward(1);
    })()
};