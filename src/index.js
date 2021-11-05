// declare global {
//     interface Window {
//         KoreSDK:any;
//     }
// }
// import $ from 'jquery'; 
// console.log("index.js");
// import '../UI/libs/kore-no-conflict-start';
// import requireKr from '../kore-bot-sdk-client'
// import '../UI/libs/jquery'
// import '../UI/libs/jquery.tmpl.min.js';
// import '../UI/libs/jquery-ui.min';
// import '../UI/../libs/lodash.min.js';
// import '../UI/../libs/d3.v4.min.js';
// import '../UI/../libs/KoreGraphAdapter.js';
// import '../UI/../libs/anonymousassertion.js';
// import '../kore-bot-sdk-client.js';
// import '../UI/../libs/perfect-scrollbar.js';
// import '../UI/../libs/emoji.js';
// import '../UI/../libs/purejscarousel.js';
//import chatWindow from "imports-loader?imports=window!../UI/chatWindow.js";
// import chatWindow from './index.js';
// import '../UI/custom/customTemplate.js';
// import '../UI/../libs/ie11CustomProperties.js';
// import '../UI/../libs/recorder.js';
// import '../UI/../libs/recorderWorker.js';
// import '../UI/../libs/speech/app.js';
// import '../UI/../libs/speech/key.js';
// import '../UI/../libs/client_api.js';
// import chatConfig from './index.js';
// import '../UI/kore-main.js';
// import '../UI/libs/kore-no-conflict-end.js';

// import '../UI/libs/kore-no-conflict-start';
import chatWindow from '../UI/chatWindow.js';
import chatConfig from '../UI/kore-config.js';
import Korei18nPlugin from './plugins/i18n.js';

import KoreWidgetSDK from '../UI/kore-widgets.js';
import widgetsConfig from '../UI/kore-widgets-config.js';

export {
    chatConfig,
    chatWindow,
    widgetsConfig,
    KoreWidgetSDK,
    Korei18nPlugin
};