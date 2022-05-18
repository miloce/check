document.onmousedown = click; //绑定禁用鼠标右键事件

document.onkeydown = ctrl_key; //绑定禁用键盘事件

function click() {
    undefined

    if (event.button == 2) //单击的鼠标键为右键

    {
        undefined

        alert('禁止刷新！');

        return false;

    }

}

function ctrl_key() {
    undefined

    if (event.keyCode == 17) { //禁用CTRL+S 保存网页代码

        window.alert("暂时不支持！");

        return false;

    }

    if (event.keyCode == 123) { //禁用F12查看源代码

        alert('暂时不支持！');

        return false;

    }

}
