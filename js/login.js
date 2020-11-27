$(function () {
  var flag=true;
  $(".toggle")
    .find("span")
    .click(function () {
      if (flag) {
        $(".reg input").val("请输入密码").next().find("a").html("忘记密码");
        $(".tips").hide();
        $('.icon-close-eye').show();
        flag=false;
      }
      else{
        $(".reg input").val("请输入验证码").next().find("a").html("获取验证码");
        $(".tips").show();
        $('.icon-close-eye').hide();
        flag=true;
      }
    });
});
