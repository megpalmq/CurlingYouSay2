// "use strict";

<<<<<<< HEAD
// Object.defineProperty(exports, "__esModule", {
//   value: true,
// });
// exports.default = RootLayout;
// var _nextjs = require("@clerk/nextjs");
// require("./globals.css");
// function RootLayout(_ref) {
//   var children = _ref.children;
//   return /*#__PURE__*/ React.createElement(
//     _nextjs.ClerkProvider,
//     null,
//     /*#__PURE__*/ React.createElement(
//       "html",
//       {
//         lang: "en",
//       },
//       /*#__PURE__*/ React.createElement(
//         "body",
//         null,
//         /*#__PURE__*/ React.createElement(
//           _nextjs.SignedOut,
//           null,
//           /*#__PURE__*/ React.createElement(_nextjs.SignInButton, null)
//         ),
//         /*#__PURE__*/ React.createElement(
//           _nextjs.SignedIn,
//           null,
//           /*#__PURE__*/ React.createElement(_nextjs.UserButton, null)
//         ),
//         children
//       )
//     )
//   );
// }
=======
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = RootLayout;
var _nextjs = require("@clerk/nextjs");
//require("./globals.css");
function RootLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/ React.createElement(
    _nextjs.ClerkProvider,
    null,
    /*#__PURE__*/ React.createElement(
      "html",
      {
        lang: "en",
      },
      /*#__PURE__*/ React.createElement(
        "body",
        null,
        /*#__PURE__*/ React.createElement(
          _nextjs.SignedOut,
          null,
          /*#__PURE__*/ React.createElement(_nextjs.SignInButton, null)
        ),
        /*#__PURE__*/ React.createElement(
          _nextjs.SignedIn,
          null,
          /*#__PURE__*/ React.createElement(_nextjs.UserButton, null)
        ),
        children
      )
    )
  );
}
>>>>>>> 816afafdd3ba854fc645f448369c79ab68122e10
