function href(uri) {
    location.href = uri;
}

function submit(id, msg = "") {
    if (confirm("정말로 " + msg + " 하시겠습니까?")) {
        if (!isValid()) {
            alert("입력 값을 확인해주세요.");
            return;
        }
        document.getElementById(id).submit();
    }
}

function copy(val) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = val;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    alert(`복사 되었습니다. (${val})`);
}

function showMenu() {
    var x = document.getElementById("wrap");
    var y = document.getElementById("mobile-menu");
    var z = document.getElementById("header");

    if (!x.classList.contains("menu")) {
        x.classList.add("menu");
        y.classList.add("show");
        z.classList.add("responsive");
    } else {
        x.classList.remove("menu");
        y.classList.remove("show");
        z.classList.remove("responsive");
    }
}

function isValid() {
    var invl = document.querySelectorAll(":invalid");
    return invl.length === 0;
}

function showCategory() {
    var x = document.getElementById("category");

    if (x.className === "content") { 
        x.className += " responsive";
    } else { 
    x.className = "content";
    }
}

function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "="; var decodedCookie = decodeURIComponent(document.cookie); var ca = decodedCookie.split(";"); for (var i = 0; i < ca.length; i++) {
        var c = ca[i]; while (c.charAt(0) == " ") { c = c.substring(1); }
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return "";
}

function start() {
    document.getElementById("l").setAttribute("min", getInputValue("f"));
}

function end() {
    document.getElementById("f").setAttribute("max", getInputValue("l"));
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function getInputValueN(name) {
    return document.querySelector("input[name=" + name + "]").value;
}

function getSelectValue(id) {
    var obj = document.getElementById(id);
    return obj.options[obj.selectedIndex].value;
}

function setInputValue(name, message) {
    return document.querySelector("input[name=" + name + "]").value = message;
}

function preview() {
    document.documentElement.style.setProperty("--font-color", getInputValueN("fontcolor"));
    document.documentElement.style.setProperty("--main-background", getInputValueN("mainbackground"));
    document.documentElement.style.setProperty("--category-item", getInputValueN("categoryitem"));
    document.documentElement.style.setProperty("--category-split", getInputValueN("categorysplit"));
    document.documentElement.style.setProperty("--highlight", getInputValueN("highlight"));
    document.documentElement.style.setProperty("--highlight-font-color", getInputValueN("highlightfontcolor"));
    document.documentElement.style.setProperty("--item-border", getInputValueN("itemborder"));
    document.documentElement.style.setProperty("--item-background", getInputValueN("itembackground"));
    document.documentElement.style.setProperty("--item-left", getInputValueN("itemleft"));
    document.documentElement.style.setProperty("--item-split", getInputValueN("itemsplit"));
    document.documentElement.style.setProperty("--item-hover-background", getInputValueN("itemhoverbackground"));
    document.documentElement.style.setProperty("--grad-one", getInputValueN("gradone"));
    document.documentElement.style.setProperty("--grad-two", getInputValueN("gradtwo"));
    document.documentElement.style.setProperty("--card-split", getInputValueN("cardsplit"));
    document.documentElement.style.setProperty("--card-background", getInputValueN("cardbackground"));
    document.documentElement.style.setProperty("--card-shop-background", getInputValueN("cardshopbackground"));
    document.documentElement.style.setProperty("--card-shop-active", getInputValueN("cardshopactive"));
    document.documentElement.style.setProperty("--table-top", getInputValueN("tabletop"));
    document.documentElement.style.setProperty("--table-bottom", getInputValueN("tablebottom"));
    document.documentElement.style.setProperty("--red", getInputValueN("red"));
    document.documentElement.style.setProperty("--green", getInputValueN("green"));
    document.documentElement.style.setProperty("--default", getInputValueN("default"));
    document.documentElement.style.setProperty("--yellow", getInputValueN("yellow"));
    document.documentElement.style.setProperty("--red-active", getInputValueN("redactive"));
    document.documentElement.style.setProperty("--green-active", getInputValueN("greenactive"));
    document.documentElement.style.setProperty("--default-active", getInputValueN("defaultactive"));
    document.documentElement.style.setProperty("--yellow-active", getInputValueN("yellowactive"));
}

function original_color() {
    setInputValue("fontcolor", '#ffffff')
    document.documentElement.style.setProperty("--font-color", '#ffffff');
    setInputValue("mainbackground", '#31313a')
    document.documentElement.style.setProperty("--main-background", '#31313a');
    setInputValue("categoryitem", '#2c2c36')
    document.documentElement.style.setProperty("--category-item", '#2c2c36');
    setInputValue("categorysplit", '#3f3e55')
    document.documentElement.style.setProperty("--category-split", '#3f3e55');
    setInputValue("highlight", '#20c997')
    document.documentElement.style.setProperty("--highlight", '#20c997');
    setInputValue("highlightfontcolor", '#000000')
    document.documentElement.style.setProperty("--highlight-font-color", '#000000');
    setInputValue("itemborder", '#333246')
    document.documentElement.style.setProperty("--item-border", '#333246');
    setInputValue("itembackground", '#232329')
    document.documentElement.style.setProperty("--item-background", '#232329');
    setInputValue("itemleft", '#7d20c9')
    document.documentElement.style.setProperty("--item-left", '#7d20c9');
    setInputValue("itemsplit", '#cfcfcf')
    document.documentElement.style.setProperty("--item-split", '#cfcfcf');
    setInputValue("itemhoverbackground", '#38373f')
    document.documentElement.style.setProperty("--item-hover-background", '#38373f');
    setInputValue("gradone", '#ff3cf7')
    document.documentElement.style.setProperty("--grad-one", '#ff3cf7');
    setInputValue("gradtwo", '#4b4eff')
    document.documentElement.style.setProperty("--grad-two", '#4b4eff');
    setInputValue("cardsplit", '#656477')
    document.documentElement.style.setProperty("--card-split", '#656477');
    setInputValue("cardbackground", '#232329')
    document.documentElement.style.setProperty("--card-background", '#232329');
    setInputValue("cardshopbackground", '#28293b')
    document.documentElement.style.setProperty("--card-shop-background", '#28293b');
    setInputValue("cardshopactive", '#232329')
    document.documentElement.style.setProperty("--card-shop-active", '#232329');
    setInputValue("tabletop", '#f02965')
    document.documentElement.style.setProperty("--table-top", '#f02965');
    setInputValue("tablebottom", '#3d3c50')
    document.documentElement.style.setProperty("--table-bottom", '#3d3c50');
    setInputValue("red", '#f03333')
    document.documentElement.style.setProperty("--red", '#f03333');
    setInputValue("green", '#1aa30e')
    document.documentElement.style.setProperty("--green", '#1aa30e');
    setInputValue("default", '#0084ff')
    document.documentElement.style.setProperty("--default", '#0084ff');
    setInputValue("yellow", '#ffc400')
    document.documentElement.style.setProperty("--yellow", '#ffc400');
    setInputValue("redactive", '#d42e2e')
    document.documentElement.style.setProperty("--red-active", '#d42e2e');
    setInputValue("greenactive", '#386d23')
    document.documentElement.style.setProperty("--green-active", '#386d23');
    setInputValue("defaultactive", '#0068c9')
    document.documentElement.style.setProperty("--default-active", '#0068c9');
    setInputValue("yellowactive", '#a17c01')
    document.documentElement.style.setProperty("--yellow-active", '#a17c01');
}

function post(path, params, msg = "", check = true) {
    let alert = true;
    if (check) alert = confirm("정말로 " + msg + " 하시겠습니까?");
    if (alert) {
        const form = document.createElement("form");
        form.method = "post";
        form.action = path;
        
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const hiddenField = document.createElement("input");
                hiddenField.type = "hidden";
                hiddenField.name = key;
                hiddenField.value = params[key];
                
                form.appendChild(hiddenField);
            }
        }

        document.body.appendChild(form);
        form.submit();
    }
}

function count_post(id, unit, name, out_unit, price, stock) {
    item_id = id;
    item_unit = unit;
    document.getElementById("info").style.display = "block";
    document.getElementById("item-name").innerHTML = name;
    document.getElementById("item-unit").innerHTML = out_unit;
    document.getElementById("item-price").innerHTML = price;
    document.getElementById("item-stock").innerHTML = stock;
}

function purchase() {
    if (confirm("정말로 구매 하시겠습니까?")) {
    if (!isValid()) { alert("입력 값을 확인해주세요."); return; }
    var obj = new Object();
    obj.id = item_id;
    obj.amount = Number(document.getElementById("item-amount").value);
    obj.type = item_unit
    var jsonData = JSON.stringify(obj);

    $.ajax({
        url: "/product_buy",
        data: jsonData,
        contentType: "application/json",
        type: 'POST',
    }).done(function (data) {
        if (data == "ok") {
            window.location.href = "/history/purchase";
        } else {
            alert(data);
        }
    });
}}

function closePopup(id, bool) {
    document.getElementById(id).remove();
    if (bool) setCookie(id, "no-longer-see");
}

function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}