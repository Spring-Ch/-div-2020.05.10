//  创建一个div
var div1 = document.createElement('div');
div1.className = 'demo';     //  
document.body.appendChild(div1);
//  鼠标点下时可对div进行拖动
//  鼠标松开时停止拖动
var flag = 0;
var lastX;
var lastY;
div1.onmousedown = function (e) {
    flag = 1;
    lastX = e.clientX;
    lastY = e.clientY;
}
document.onmousemove = function (e) {
    if (flag === 1) {
        var deltaX = e.clientX - lastX;
        var deltaY = e.clientY - lastY;
        // left top的值只能取内联属性，在这里为空值，需要进行转化后，才能使用
        var left = parseInt(div1.style.left) || 0;
        var top = parseInt(div1.style.top) || 0;
        div1.style.left = left + deltaX + 'px';
        div1.style.top = top + deltaY + 'px';  //注意left,top等属性后面需加px
        lastX = e.clientX;
        lastY = e.clientY;  // 每一次移动后对lastX lastY重新赋值
    }
}
div1.onmouseup = function () {
    flag = 0;
}
