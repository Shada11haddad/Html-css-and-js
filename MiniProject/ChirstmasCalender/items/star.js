function drawStar(ctx , x , y , size){
    // const top = y - size / 2;
    // const left = x - size / 2;
    // ctx.strokeStyle = (top , left , size ,size);
    const outeradius = size / 2;
    const innerradius = outeradius / 2;
    const pointCount = 10;


    ctx.beginPath();
    for (let i = 0; i < pointCount; i++) {
        const angle = (1 / pointCount) * Math.PI * 2;
        const radius = i % 2 == 0 ? outeradius : innerradius;
        const surfaceX = x + Math.sin(angle) * radius;
        const surfaceY = y + Math.cos(angle) * radius;
        ctx.lineTo(surfaceX, surfaceY);

    }
    ctx.fillStyle = color.normal(hue);
    ctx.fill();
}