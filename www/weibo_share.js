var WeiboShare = function() {};

WechatShare.prototype.share = function(options, success, fail) {
  cordova.exec(function(result) {
    success(result);
  }, function() {
    fail();
  }, "WeiboShare", "share", [options]);
};

var wechatShare = new WechatShare();
module.exports = wechatShare;
