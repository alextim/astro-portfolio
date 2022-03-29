"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bigSign;
function bigSign(bigIntValue) {
    return (bigIntValue > BigInt(0)) - (bigIntValue < BigInt(0));
}
