const criaQuadradinho = function(event) {
    if (event.buttons) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'black';
        div.style.position = 'absolute';
        div.style.width = '7px';
        div.style.height = '7px';
        div.style.borderRadius = '7px';
        // div.style.left = event.clientX+'px'; é igual a isso aqui em baixo...
        div.style.left = `${event.clientX-5}px`;
        div.style.top = `${event.clientY-5}px`;
        document.body.appendChild(div);
    }
};

// mousemove é cada vez que o mouse se mover, o ir faz com que funcione cada vez que mover o mouse clicando
document.addEventListener('mousemove', criaQuadradinho);

//

const divm = document.querySelector('div.mover');

const mover = function(e) {
    const l = parseInt(divm.style.left) | 0;
    const t = parseInt(divm.style.top) | 0;
    if (e.code==='KeyD') {
        divm.style.left = `${l + 1}px`;
    }
    if (e.code==='KeyA') {
        divm.style.left = `${l - 1}px`;
    }
    if (e.code==='KeyW') {
        divm.style.top = `${t - 1}px`;
    }
    if (e.code==='KeyS') {
        divm.style.top = `${t + 1}px`;
    }
};

document.addEventListener('keypress', mover);
