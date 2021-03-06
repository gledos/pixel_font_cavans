// get canvas ctx || 获取 canvas 环境
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var font = new BDF();
font.load(zpix);

// console.log(font.glyphs);



function 绘制单个字形(哈哈串, 字符X, 字符Y) {
    // ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空
    ctx.fillStyle = '#EEEEEE';

    for (var y = 0; y < font.glyphs[哈哈串].bitmap.length; y += 1) {
        var bitmap行数 = font.glyphs[哈哈串].bitmap[y];
        for (var x = 0; x < bitmap行数.length; x += 1) {
            if (bitmap行数[x]) {
                ctx.fillRect(字符X + x + 2, 字符Y + 2, 1, 1);
            };
        };
        字符Y += 1;
    };
    字符X += 1;
    // console.log("绘制单个字形 \""+哈哈串+"\" 完成");
};

function 绘制随机字形(字符X, 字符Y) {
    ctx.fillStyle = '#EEEEEE';
    var item = Object.keys(font.glyphs)[Math.floor(Math.random() * Object.keys(font.glyphs).length)];
    // console.log(item);
    for (var y = 0; y < font.glyphs[item].bitmap.length; y += 1) {
        var bitmap行数 = font.glyphs[item].bitmap[y];
        for (var x = 0; x < bitmap行数.length; x += 1) {
            if (bitmap行数[x]) {
                var 初始的x = x;
                for (let 横向扫描 = x; bitmap行数[x + 1]; 横向扫描 += 1, x += 1) {};
                ctx.fillRect(字符X + 初始的x, 字符Y, x - 初始的x + 1, 1);
            };
        };
        字符Y += 1;
    };
    字符X += 1;
};

function 按钮1() {
    // 绘制单个字形("的", 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空
    for (let 临时计数器1 = 0; 临时计数器1 < 9; 临时计数器1 += 1) {
        for (let 临时计数器2 = 0; 临时计数器2 < 9; 临时计数器2 += 1) {
            绘制单个字形("的", 临时计数器1 * 14 + 2, 临时计数器2 * 14 + 2);
        }
    }
};

function 按钮2() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空
    for (let 临时计数器1 = 0; 临时计数器1 < (canvas.width / 13 - 1); 临时计数器1 += 1) {
        for (let 临时计数器2 = 0; 临时计数器2 < (canvas.height / 14 - 1); 临时计数器2 += 1) {
            绘制随机字形(临时计数器1 * 13 + 2, 临时计数器2 * 14 + 2);
        }
    }
};

function 按钮3() {
    // var 要写的字 = "苟利国家生死以，岂因祸福避趋之。";
    var 要写的字 = document.getElementById("输入口1").value;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空
    for (let 临时计数器1 = 字符宽度 = 0; 临时计数器1 < 要写的字.length; 临时计数器1 += 1) {
        绘制单个字形(要写的字[临时计数器1], 字符宽度, 0);
        if (font.glyphs[要写的字[临时计数器1]].bitmap[0].length < 10) {
            字符宽度 += font.glyphs[要写的字[临时计数器1]].bitmap[0].length - 2;
        } else {
            字符宽度 += font.glyphs[要写的字[临时计数器1]].bitmap[0].length - 3;
        }

        // console.log(font.glyphs[要写的字[临时计数器1]].bitmap[0].length);  // 测试代码
    }
};

function keyDown(e) {
    var keycode = e.key;
    console.log("按下的字符是: " + keycode);
}

document.onkeydown = keyDown;

var 文字排版 = {
    纵: null,
    横: null,
    计算纵横: function () {
        文字排版.纵 = canvas.height / 14;
        文字排版.横 = canvas.width / 13;
        return 文字排版;
    },
};

// 文字排版.计算纵横()
