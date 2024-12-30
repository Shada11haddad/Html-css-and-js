
const draw = {};


draw.circle = (ctx, x, y, radius, options) => {
    ctx.beginPath();

    if (options.outline == "inside") {
        radius -= options.lineWidth / 2;
        
    }

    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    object.assign(ctx, options);
    options.fillStyle && ctx.fill();
    options.strokeStyle && ctx.stroke();
};


draw.ellipse = (ctx, x, y, radiusX, radiusY, options) => {
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
    object.assign(ctx, options);
    options.fillStyle && ctx.fill();
    options.strokeStyle && ctx.stroke();
};


draw.line = (ctx, x1, y1, x2, y2, options) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    object.assign(ctx, options);
    ctx.stroke();
};

const color = {};

color.darkest = (hue) => `hsl(${hue}, 100%, 10%)`;
color.dark = (hue) => `hsl(${hue}, 100%, 20%)`;
color.normal = (hue) => `hsl(${hue}, 100%, 50%)`;
color.light = (hue) => `hsl(${hue}, 100%, 70%)`;
color.lightest = (hue) => `hsl(${hue}, 100%, 90%)`;
color.reverse = (hue) => (hue + 180) % 360;

