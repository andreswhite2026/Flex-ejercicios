let estado = 0;

function setDirection(valor) {
    contenedor.style.flexDirection = valor;
}

function setJustify(valor) {
    contenedor.style.justifyContent = valor;
}

function setAlign(valor) {
    contenedor.style.alignItems = valor;
}

function setWrap(valor) {
    contenedor.style.flexWrap = valor;
}

function setAlignContent(valor) {
    contenedor.style.alignContent = valor;
}

function setGap(valor) {
    contenedor.style.gap = valor;
}

// CLICK EN CUADROS
function modificar(el) {
    estado++;

    if (estado % 3 === 1) {
        el.style.order = "2";
        el.style.flexGrow = "2";
        el.style.alignSelf = "flex-end";
    } else if (estado % 3 === 2) {
        el.style.order = "0";
        el.style.flexShrink = "2";
        el.style.flexBasis = "150px";
        el.style.alignSelf = "center";
    } else {
        el.style.order = "0";
        el.style.flexGrow = "0";
        el.style.flexShrink = "1";
        el.style.flexBasis = "auto";
        el.style.alignSelf = "auto";
    }
}